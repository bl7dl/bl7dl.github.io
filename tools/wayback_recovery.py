#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from html import unescape
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup, Comment, UnicodeDammit


WAYBACK_TIMEMAP_URL = "https://web.archive.org/web/timemap/json"
WAYBACK_CDX_URL = "https://web.archive.org/cdx/search/cdx"
WAYBACK_PLAYBACK_PREFIX = "https://web.archive.org/web"

USER_AGENT = "7dl-wayback-recovery/1.0 (+local archive repair tool)"
URL_ATTRS = ("href", "src", "action", "poster", "data")

SUPPORTED_KINDS = (
    "viewtopic.php",
    "viewforum.php",
    "profile.php",
    "userlist.php",
    "search.php",
)

INVALID_MARKERS = (
    "Ссылка, по которой Вы пришли неверная или устаревшая.",
    "Выбранной темы не существует.",
    "Выбранного форума не существует.",
    "Выбранного пользователя не существует.",
    "Запрошенная страница не найдена.",
    "Page cannot be displayed",
)

WAYBACK_COMMENT_MARKERS = (
    "FILE ARCHIVED ON",
    "JAVASCRIPT APPENDED BY WAYBACK MACHINE",
    "BEGIN WAYBACK TOOLBAR INSERT",
    "END WAYBACK TOOLBAR INSERT",
    "End Wayback Rewrite JS Include",
)

WAYBACK_ATTR_MARKERS = (
    "web-static.archive.org/_static",
    "archive.org/includes/",
    "/web/",
)

WAYBACK_TEXT_URL_RE = re.compile(
    r"(?:(?:https?:)?//web\.archive\.org/web/|/web/)\d+(?:[a-z]+_)?/(https?://[^\s'\"<>]+)"
)


@dataclass
class Capture:
    timestamp: str
    original: str
    statuscode: str
    mimetype: str


@dataclass
class Candidate:
    canonical_url: str
    kind: str
    output_name: str
    years: list[str] = field(default_factory=list)
    original_urls: list[str] = field(default_factory=list)


@dataclass
class ProbeOutcome:
    ok: bool
    reason: str
    title: str = ""
    details: dict[str, int | str] = field(default_factory=dict)


class WaybackClient:
    def __init__(
        self,
        *,
        timeout: float,
        retries: int,
        retry_delay: float,
        cache_dir: Path | None,
        refresh: bool,
    ) -> None:
        self.timeout = timeout
        self.retries = retries
        self.retry_delay = retry_delay
        self.cache_dir = cache_dir
        self.refresh = refresh
        self._memory_cache: dict[str, bytes] = {}
        if self.cache_dir is not None:
            self.cache_dir.mkdir(parents=True, exist_ok=True)

    def fetch_bytes(self, url: str, *, suffix: str) -> bytes:
        if not self.refresh and url in self._memory_cache:
            return self._memory_cache[url]

        cache_path: Path | None = None
        if self.cache_dir is not None:
            digest = hashlib.sha1(url.encode("utf-8")).hexdigest()
            cache_path = self.cache_dir / f"{digest}{suffix}"
            if not self.refresh and cache_path.exists():
                data = cache_path.read_bytes()
                self._memory_cache[url] = data
                return data

        last_error: Exception | None = None
        for attempt in range(1, self.retries + 1):
            try:
                request = Request(url, headers={"User-Agent": USER_AGENT})
                with urlopen(request, timeout=self.timeout) as response:
                    data = response.read()
                self._memory_cache[url] = data
                if cache_path is not None:
                    cache_path.write_bytes(data)
                return data
            except (HTTPError, URLError, TimeoutError, OSError) as exc:
                last_error = exc
                if attempt == self.retries:
                    break
                time.sleep(self.retry_delay)

        assert last_error is not None
        raise last_error

    def fetch_json(self, url: str) -> object:
        data = self.fetch_bytes(url, suffix=".json")
        return json.loads(data.decode("utf-8"))

    def fetch_html(self, url: str) -> str:
        data = self.fetch_bytes(url, suffix=".html")
        dammit = UnicodeDammit(data, is_html=True)
        if dammit.unicode_markup is not None:
            return dammit.unicode_markup
        return data.decode("utf-8", errors="replace")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Find forum pages that exist in Wayback for 7dneyleta.ru-style archives, "
            "compare them with a local archive tree, and optionally download accepted snapshots."
        )
    )
    parser.add_argument(
        "--domain",
        default="7dneyleta.ru",
        help="Forum hostname to query in Wayback. Default: %(default)s",
    )
    parser.add_argument(
        "--archive-root",
        type=Path,
        default=Path("docs/7dneyleta-ru/7dneyleta.ru"),
        help="Local published archive root to compare against.",
    )
    parser.add_argument(
        "--report",
        type=Path,
        default=Path("wayback-recovery-report.json"),
        help="Where to write the JSON report. Default: %(default)s",
    )
    parser.add_argument(
        "--download-root",
        type=Path,
        help=(
            "Optional staging directory. Accepted captures are stored under raw/ and clean/ "
            "using local archive-style output names."
        ),
    )
    parser.add_argument(
        "--cache-dir",
        type=Path,
        help="Optional persistent cache for Wayback responses.",
    )
    parser.add_argument(
        "--kind",
        action="append",
        choices=SUPPORTED_KINDS,
        help="Restrict the run to one or more page kinds.",
    )
    parser.add_argument(
        "--match",
        action="append",
        help="Only process candidates whose canonical URL contains this substring.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        help="Only process the first N filtered missing candidates.",
    )
    parser.add_argument(
        "--max-captures-per-url",
        type=int,
        default=25,
        help="How many exact-match CDX captures to probe per candidate. Default: %(default)s",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=30.0,
        help="Per-request timeout in seconds. Default: %(default)s",
    )
    parser.add_argument(
        "--retries",
        type=int,
        default=4,
        help="HTTP retry count. Default: %(default)s",
    )
    parser.add_argument(
        "--retry-delay",
        type=float,
        default=2.0,
        help="Delay between retries in seconds. Default: %(default)s",
    )
    parser.add_argument(
        "--refresh",
        action="store_true",
        help="Ignore the persistent cache and refetch everything.",
    )
    return parser.parse_args()


def clean_query_pairs(raw_query: str) -> list[tuple[str, str]]:
    cleaned = unescape(raw_query).replace(";", "&").lstrip("&")
    return [(key, value) for key, value in parse_qsl(cleaned, keep_blank_values=True) if key]


def canonical_url_from_original(original_url: str) -> str:
    original_url = unescape(original_url)
    parsed = urlsplit(original_url)
    path = parsed.path or "/"
    if path == "/":
        return "/"
    pairs = sorted(clean_query_pairs(parsed.query))
    query = urlencode(pairs, doseq=True)
    return f"{path}?{query}" if query else path


def canonical_url_from_local_name(name: str) -> str:
    if name == "index.html":
        return "/"
    stem = name[:-5] if name.endswith(".html") else name
    if "@" not in stem:
        return f"/{stem}"
    base, query = stem.split("@", 1)
    pairs = sorted((part.split("=", 1) + [""])[:2] for part in query.split("&") if part)
    normalized = urlencode([(key, value) for key, value in pairs], doseq=True)
    return f"/{base}?{normalized}" if normalized else f"/{base}"


def output_name_from_canonical(canonical_url: str) -> str:
    if canonical_url == "/":
        return "index.html"
    path, _, query = canonical_url.partition("?")
    base = path.rsplit("/", 1)[-1]
    return f"{base}@{query}.html" if query else f"{base}.html"


def kind_from_canonical(canonical_url: str) -> str:
    path = canonical_url.partition("?")[0]
    return path.rsplit("/", 1)[-1] or "index.html"


def should_consider_canonical(canonical_url: str) -> bool:
    kind = kind_from_canonical(canonical_url)
    if kind not in SUPPORTED_KINDS:
        return False
    if kind != "search.php":
        return True
    if "?" not in canonical_url:
        return True
    pairs = dict(parse_qsl(canonical_url.partition("?")[2], keep_blank_values=True))
    return pairs.get("action") == "show_user_posts" and "user_id" in pairs


def normalize_original_url(original_url: str) -> str:
    original_url = unescape(original_url)
    parsed = urlsplit(original_url)
    scheme = parsed.scheme or "http"
    netloc = parsed.netloc
    if scheme == "http" and netloc.endswith(":80"):
        netloc = netloc[:-3]
    if scheme == "https" and netloc.endswith(":443"):
        netloc = netloc[:-4]
    return urlunsplit((scheme, netloc, parsed.path or "/", unescape(parsed.query), ""))


def netloc_variants(domain: str) -> set[str]:
    return {domain.casefold(), f"www.{domain}".casefold()}


def unwrap_wayback_url(url: str) -> str:
    prefixes = (
        "https://web.archive.org/web/",
        "http://web.archive.org/web/",
        "//web.archive.org/web/",
        "/web/",
    )
    for prefix in prefixes:
        if not url.startswith(prefix):
            continue
        rest = url[len(prefix) :]
        slash_index = rest.find("/")
        if slash_index == -1:
            return url
        target = rest[slash_index + 1 :]
        if target.startswith("http://") or target.startswith("https://"):
            return target
    return url


def rewrite_internal_url(url: str, *, domain: str) -> str:
    unwrapped = unwrap_wayback_url(url)
    parsed = urlsplit(unwrapped)
    if parsed.netloc.casefold() not in netloc_variants(domain):
        return unwrapped
    canonical = canonical_url_from_original(unwrapped)
    if not should_consider_canonical(canonical):
        return unwrapped
    output_name = output_name_from_canonical(canonical)
    if parsed.fragment:
        return f"{output_name}#{parsed.fragment}"
    return output_name


def strip_wayback_markup(html_text: str, *, domain: str) -> str:
    soup = BeautifulSoup(html_text, "html.parser")

    for comment in soup.find_all(string=lambda value: isinstance(value, Comment)):
        text = str(comment)
        if any(marker in text for marker in WAYBACK_COMMENT_MARKERS):
            comment.extract()

    removable_ids = {"wm-ipp-base", "wm-ipp-print", "wm-ipp", "donato"}
    for tag in list(soup.find_all(True)):
        attrs = tag.attrs if isinstance(getattr(tag, "attrs", None), dict) else {}
        tag_id = attrs.get("id")
        raw_classes = attrs.get("class", [])
        if isinstance(raw_classes, str):
            classes = {raw_classes}
        else:
            classes = set(raw_classes)
        if tag_id in removable_ids or any(cls.startswith("wb-") or cls.startswith("wm-") for cls in classes):
            tag.decompose()
            continue

        if tag.name in {"script", "link", "style", "iframe"}:
            joined_attrs = " ".join(str(attrs.get(attr, "")) for attr in ("src", "href"))
            inline = tag.get_text(" ", strip=True)
            if any(marker in joined_attrs for marker in WAYBACK_ATTR_MARKERS):
                tag.decompose()
                continue
            if (
                "__wm." in inline
                or "wombat(" in inline
                or "Wayback Machine" in inline
                or "archive_analytics" in inline
                or "RufflePlayer" in inline
            ):
                tag.decompose()
                continue

        for attr in URL_ATTRS:
            value = attrs.get(attr)
            if isinstance(value, str):
                tag[attr] = rewrite_internal_url(value, domain=domain)
            elif isinstance(value, list):
                tag[attr] = [rewrite_internal_url(item, domain=domain) if isinstance(item, str) else item for item in value]

    cleaned_html = str(soup)
    cleaned_html = WAYBACK_TEXT_URL_RE.sub(lambda match: match.group(1), cleaned_html)
    return cleaned_html


def inspect_capture(html_text: str, *, candidate: Candidate) -> ProbeOutcome:
    soup = BeautifulSoup(html_text, "html.parser")
    title = soup.title.get_text(" ", strip=True) if soup.title else ""
    page_text = soup.get_text(" ", strip=True)

    for marker in INVALID_MARKERS:
        if marker in page_text:
            return ProbeOutcome(False, f"invalid-marker:{marker}", title=title)

    if not (soup.select_one("#pun") or soup.select_one("#pun-main") or "punbb" in html_text):
        return ProbeOutcome(False, "missing-forum-shell", title=title)

    if candidate.kind == "viewtopic.php":
        posts = soup.select('div.post[id^="p"]')
        if not posts:
            return ProbeOutcome(False, "missing-posts", title=title)
        return ProbeOutcome(True, "ok", title=title, details={"posts": len(posts)})

    if candidate.kind == "viewforum.php":
        topic_links = soup.select('a[href*="viewtopic.php?id="]')
        if not topic_links:
            return ProbeOutcome(False, "missing-topic-links", title=title)
        return ProbeOutcome(True, "ok", title=title, details={"topics": len(topic_links)})

    if candidate.kind == "profile.php":
        profile_name = soup.select_one("#profile-name")
        if profile_name is None and "Профиль:" not in title:
            return ProbeOutcome(False, "missing-profile-markers", title=title)
        return ProbeOutcome(True, "ok", title=title)

    if candidate.kind == "userlist.php":
        profile_links = soup.select('a[href*="profile.php?id="]')
        if len(profile_links) < 3:
            return ProbeOutcome(False, "missing-userlist-links", title=title)
        return ProbeOutcome(True, "ok", title=title, details={"profiles": len(profile_links)})

    if candidate.kind == "search.php":
        topic_links = soup.select('a[href*="viewtopic.php?id="]')
        if "action=show_user_posts" in candidate.canonical_url:
            if not topic_links:
                return ProbeOutcome(False, "missing-search-topic-links", title=title)
            return ProbeOutcome(True, "ok", title=title, details={"topics": len(topic_links)})
        if soup.find("form") is None:
            return ProbeOutcome(False, "missing-search-form", title=title)
        return ProbeOutcome(True, "ok", title=title)

    return ProbeOutcome(False, "unsupported-kind", title=title)


def log(message: str) -> None:
    print(message, file=sys.stderr)


def load_local_pages(archive_root: Path) -> set[str]:
    local_pages: set[str] = set()
    for path in archive_root.glob("*.html"):
        if path.name.endswith(".view.html"):
            continue
        local_pages.add(canonical_url_from_local_name(path.name))
    return local_pages


def fetch_timemap_candidates(client: WaybackClient, *, domain: str) -> dict[str, Candidate]:
    query = urlencode(
        {
            "url": f"{domain}/",
            "fl": "timestamp:4,original,urlkey",
            "matchType": "prefix",
            "filter": ["statuscode:200", "mimetype:text/html"],
            "collapse": ["urlkey", "timestamp:4"],
            "limit": "100000",
        },
        doseq=True,
    )
    rows = client.fetch_json(f"{WAYBACK_TIMEMAP_URL}?{query}")
    if not isinstance(rows, list) or not rows:
        raise RuntimeError("Wayback timemap returned an unexpected payload")

    candidates: dict[str, Candidate] = {}
    for row in rows[1:]:
        if not isinstance(row, list) or len(row) < 2:
            continue
        year = str(row[0])
        original_url = normalize_original_url(str(row[1]))
        canonical = canonical_url_from_original(original_url)
        if "*****" in canonical or not should_consider_canonical(canonical):
            continue

        candidate = candidates.get(canonical)
        if candidate is None:
            candidate = Candidate(
                canonical_url=canonical,
                kind=kind_from_canonical(canonical),
                output_name=output_name_from_canonical(canonical),
            )
            candidates[canonical] = candidate

        if year not in candidate.years:
            candidate.years.append(year)
        if original_url not in candidate.original_urls:
            candidate.original_urls.append(original_url)

    for candidate in candidates.values():
        candidate.years.sort()
        candidate.original_urls.sort()

    return candidates


def fetch_exact_captures(
    client: WaybackClient,
    *,
    original_url: str,
    max_captures: int,
) -> list[Capture]:
    query = urlencode(
        {
            "url": original_url,
            "output": "json",
            "fl": "timestamp,original,statuscode,mimetype",
            "filter": ["statuscode:200", "mimetype:text/html"],
            "limit": str(max_captures),
            "matchType": "exact",
        },
        doseq=True,
    )
    rows = client.fetch_json(f"{WAYBACK_CDX_URL}?{query}")
    if not isinstance(rows, list) or len(rows) <= 1:
        return []

    captures: list[Capture] = []
    seen_timestamps: set[str] = set()
    for row in rows[1:]:
        if not isinstance(row, list) or len(row) < 4:
            continue
        capture = Capture(
            timestamp=str(row[0]),
            original=normalize_original_url(str(row[1])),
            statuscode=str(row[2]),
            mimetype=str(row[3]),
        )
        if capture.timestamp in seen_timestamps:
            continue
        seen_timestamps.add(capture.timestamp)
        captures.append(capture)

    captures.sort(key=lambda item: item.timestamp, reverse=True)
    return captures


def stage_capture(
    *,
    raw_html: str,
    cleaned_html: str,
    candidate: Candidate,
    download_root: Path,
) -> dict[str, str]:
    raw_dir = download_root / "raw"
    clean_dir = download_root / "clean"
    raw_dir.mkdir(parents=True, exist_ok=True)
    clean_dir.mkdir(parents=True, exist_ok=True)

    raw_path = raw_dir / candidate.output_name
    clean_path = clean_dir / candidate.output_name
    raw_path.write_text(raw_html, encoding="utf-8")
    clean_path.write_text(cleaned_html, encoding="utf-8")
    return {
        "raw_path": str(raw_path),
        "clean_path": str(clean_path),
    }


def candidate_filters_match(candidate: Candidate, *, allowed_kinds: set[str] | None, matches: list[str] | None) -> bool:
    if allowed_kinds and candidate.kind not in allowed_kinds:
        return False
    if matches and not any(token in candidate.canonical_url for token in matches):
        return False
    return True


def main() -> int:
    args = parse_args()
    archive_root = args.archive_root.resolve()
    report_path = args.report.resolve()
    download_root = args.download_root.resolve() if args.download_root else None
    cache_dir = args.cache_dir.resolve() if args.cache_dir else None

    if not archive_root.exists():
        raise SystemExit(f"Archive root not found: {archive_root}")

    client = WaybackClient(
        timeout=args.timeout,
        retries=args.retries,
        retry_delay=args.retry_delay,
        cache_dir=cache_dir,
        refresh=args.refresh,
    )

    log(f"Loading local archive index from {archive_root}")
    local_pages = load_local_pages(archive_root)

    log(f"Fetching Wayback timemap for {args.domain}")
    timemap_candidates = fetch_timemap_candidates(client, domain=args.domain)

    missing_candidates = [
        candidate
        for canonical, candidate in sorted(timemap_candidates.items())
        if canonical not in local_pages and candidate_filters_match(candidate, allowed_kinds=set(args.kind) if args.kind else None, matches=args.match)
    ]

    if args.limit is not None:
        missing_candidates = missing_candidates[: args.limit]

    log(f"Probing {len(missing_candidates)} missing candidate URLs")

    restorable: list[dict[str, object]] = []
    unresolved: list[dict[str, object]] = []

    for index, candidate in enumerate(missing_candidates, start=1):
        log(f"[{index}/{len(missing_candidates)}] {candidate.canonical_url}")

        capture_map: dict[str, Capture] = {}
        capture_sources: list[str] = []
        for original_url in candidate.original_urls:
            try:
                captures = fetch_exact_captures(
                    client,
                    original_url=original_url,
                    max_captures=args.max_captures_per_url,
                )
            except Exception as exc:
                capture_sources.append(f"cdx-error:{original_url}:{exc}")
                continue
            capture_sources.append(f"cdx-ok:{original_url}:{len(captures)}")
            for capture in captures:
                capture_map.setdefault(capture.timestamp, capture)

        accepted = False
        reasons: list[str] = []
        checked_captures = sorted(capture_map.values(), key=lambda item: item.timestamp, reverse=True)

        for capture in checked_captures:
            playback_url = f"{WAYBACK_PLAYBACK_PREFIX}/{capture.timestamp}/{capture.original}"
            try:
                html_text = client.fetch_html(playback_url)
            except Exception as exc:
                reasons.append(f"fetch-error:{capture.timestamp}:{exc}")
                continue

            outcome = inspect_capture(html_text, candidate=candidate)
            if not outcome.ok:
                reasons.append(f"{capture.timestamp}:{outcome.reason}")
                continue

            record: dict[str, object] = {
                "canonical_url": candidate.canonical_url,
                "kind": candidate.kind,
                "output_name": candidate.output_name,
                "years": candidate.years,
                "capture_timestamp": capture.timestamp,
                "capture_original": capture.original,
                "capture_url": playback_url,
                "title": outcome.title,
                "details": outcome.details,
            }

            if download_root is not None:
                cleaned_html = strip_wayback_markup(html_text, domain=args.domain)
                record.update(stage_capture(raw_html=html_text, cleaned_html=cleaned_html, candidate=candidate, download_root=download_root))

            restorable.append(record)
            accepted = True
            break

        if accepted:
            continue

        unresolved.append(
            {
                "canonical_url": candidate.canonical_url,
                "kind": candidate.kind,
                "output_name": candidate.output_name,
                "years": candidate.years,
                "original_urls": candidate.original_urls,
                "cdx_attempts": capture_sources,
                "captures_checked": [capture.timestamp for capture in checked_captures],
                "reasons": reasons,
            }
        )

    report = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "domain": args.domain,
        "archive_root": str(archive_root),
        "download_root": str(download_root) if download_root is not None else None,
        "cache_dir": str(cache_dir) if cache_dir is not None else None,
        "summary": {
            "local_pages_indexed": len(local_pages),
            "wayback_candidates_indexed": len(timemap_candidates),
            "missing_candidates_considered": len(missing_candidates),
            "restorable_candidates": len(restorable),
            "unresolved_candidates": len(unresolved),
        },
        "restorable": restorable,
        "unresolved": unresolved,
    }

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    log(f"Wrote report to {report_path}")
    log(
        "Summary: "
        f"{report['summary']['restorable_candidates']} restorable, "
        f"{report['summary']['unresolved_candidates']} unresolved"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
