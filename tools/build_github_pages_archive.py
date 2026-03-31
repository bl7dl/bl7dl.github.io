#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
from html import escape, unescape
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path, PurePosixPath
from typing import Iterable
from urllib.parse import quote, urlsplit, urlunsplit

from bs4 import BeautifulSoup, Comment, NavigableString, Tag, UnicodeDammit


def safe_tag_get(self: Tag, key: str, default=None):
    attrs = getattr(self, "attrs", None)
    if not isinstance(attrs, dict):
        return default
    return attrs.get(key, default)


def safe_tag_has_attr(self: Tag, key: str) -> bool:
    attrs = getattr(self, "attrs", None)
    return isinstance(attrs, dict) and key in attrs


Tag.get = safe_tag_get  # type: ignore[assignment]
Tag.has_attr = safe_tag_has_attr  # type: ignore[assignment]



@dataclass(frozen=True)
class BuildOptions:
    incremental: bool
    fast: bool
    builder_mtime_ns: int

    @classmethod
    def from_args(cls, args: argparse.Namespace) -> "BuildOptions":
        script_path = Path(__file__).resolve()
        return cls(
            incremental=bool(args.incremental or args.fast),
            fast=bool(args.fast),
            builder_mtime_ns=script_path.stat().st_mtime_ns,
        )


KEEP_FILE_PATTERNS = (
    re.compile(r"^default\.htm$"),
    re.compile(r"^faq$"),
    re.compile(r"^statistics$"),
    re.compile(r"^memberlist(?:@.*)?$"),
    re.compile(r"^u\d+$"),
    re.compile(r"^c\d+-category$"),
    re.compile(r"^f\d+(?:p\d+)?-forum$"),
    re.compile(r"^t\d+(?:[np]\d+)?-topic$"),
)

PRIMARY_MEMBER_PAGE_PATTERNS = (
    re.compile(r"^memberlist(?:@.*)?$"),
    re.compile(r"^u\d+$"),
)

FORBIDDEN_FORUM_PATH_PATTERNS = (
    re.compile(r"^profile@mode=email"),
    re.compile(r"^profile@mode=editprofile"),
    re.compile(r"^profile@change_password"),
    re.compile(r"^admin(?:[\\/]|$)"),
    re.compile(r"^chatbox(?:[\\/]|$)"),
    re.compile(r"^feed(?:[\\/]|$)"),
    re.compile(r"^tags(?:[\\/]|$)"),
    re.compile(r"^contact$"),
    re.compile(r"^viewonline$"),
    re.compile(r"^mobile$"),
    re.compile(r"^report@"),
    re.compile(r"^post@"),
    re.compile(r"^@"),
)

BLOCKED_HREF_SNIPPETS = (
    "login@logout=1",
    "profile@mode=editprofile",
    "profile@mode=email",
    "privmsg@folder=inbox",
    "privmsg@mode=post",
    "report@",
    "post@",
    "abuse@",
    "@mark=forums",
    "@mark=topics",
    "@mode=delete_cookies",
    "@watch=topic",
    "@unwatch=topic",
    "@watch=forum",
    "@unwatch=forum",
    "search@search_id=",
    "viewonline",
    "contact",
    "mobile",
    "calendar",
)

TEXT_PATTERNS_TO_REMOVE = (
    "Р’С‹ РїРѕСЃР»РµРґРЅРёР№ СЂР°Р· Р·Р°С…РѕРґРёР»Рё",
    "РўРµРєСѓС‰РµРµ РІСЂРµРјСЏ",
    "РљС‚Рѕ СЃРµР№С‡Р°СЃ РЅР° С„РѕСЂСѓРјРµ",
    "Р‘С‹СЃС‚СЂС‹Р№ РѕС‚РІРµС‚",
    "РђРєС‚РёРІРЅС‹Рµ С‚РµРјС‹ РґРЅСЏ",
    "РЎР°РјС‹Рµ Р°РєС‚РёРІРЅС‹Рµ Р·Р° СЃРµРіРѕРґРЅСЏС€РЅРёР№ РґРµРЅСЊ",
    "РЎР°РјС‹Рµ Р°РєС‚РёРІРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»Рё С„РѕСЂСѓРјР°",
    "РЈРґР°Р»РёС‚СЊ cookies С„РѕСЂСѓРјР°",
)

SESSION_LINE_PHRASES = (
    "Р’С‹ РїРѕСЃР»РµРґРЅРёР№ СЂР°Р· Р·Р°С…РѕРґРёР»Рё",
    "РўРµРєСѓС‰РµРµ РІСЂРµРјСЏ",
    "РЎРµР№С‡Р°СЃ СЌС‚РѕС‚ С„РѕСЂСѓРј РїСЂРѕСЃРјР°С‚СЂРёРІР°СЋС‚:",
    "Р—Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»Рё:",
    "РЎРµР№С‡Р°СЃ РїРѕСЃРµС‚РёС‚РµР»РµР№ РЅР° С„РѕСЂСѓРјРµ:",
)

IMAGE_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".svg",
}


IMAGE_SIGNATURES = (
    (b"\xff\xd8\xff", ".jpg"),
    (b"\x89PNG\r\n\x1a\n", ".png"),
    (b"GIF87a", ".gif"),
    (b"GIF89a", ".gif"),
    (b"BM", ".bmp"),
)


MEDIA_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".bmp",
    ".svg",
    ".ico",
    ".mp3",
    ".ogg",
    ".wav",
    ".mp4",
    ".webm",
    ".avi",
    ".mov",
    ".mkv",
    ".flv",
    ".swf",
    ".zip",
    ".rar",
    ".7z",
    ".pdf",
}

STATIC_EXTENSIONS = MEDIA_EXTENSIONS | {
    ".css",
    ".js",
    ".xml",
    ".json",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
}

HTMLISH_EXTENSIONS = {"", ".htm", ".html", ".xhtml", ".xml", ".forum"}

SKIPPED_ASSET_RELATIVE_PATHS = {
    "https@illiweb.com/rsc/96/frm/jquery/toolbar/fatoolbar.js",
}

ARCHIVE_CSS = """\
body.archive-readonly {
  overflow-wrap: break-word;
}
body.archive-readonly #wrap {
  box-shadow: 0 0 0 1px rgba(130, 98, 83, 0.12);
  box-sizing: border-box;
  min-width: 0;
  width: min(98%, 1200px);
}
#container,
#content,
#main,
#main-content,
#page-body {
  min-width: 0;
}
#page-body img,
#logo img,
.postbody img,
.forumbg img,
.postprofile img,
#pun-main img,
#pun-title img,
#html-header img,
#brd-main img,
#brd-tracklist img {
  height: auto;
  max-width: min(100%, calc(100vw - 32px));
}
#brd-main audio,
#brd-tracklist audio {
  width: 100%;
}
fieldset.polls img {
  height: 12px !important;
  max-width: none !important;
  vertical-align: middle;
}
.archive-embed-note,
.archive-missing-media {
  background: #fff7dc;
  border: 1px solid #e4d39a;
  color: #6d5c2f;
  display: block;
  font-size: 12px;
  line-height: 1.5;
  margin: 10px 0;
  padding: 8px 10px;
}
.archive-missing-media { background: #f8ece9; border-color: #d7b0a7; color: #7b4036; }
.archive-inline-note {
  color: #7b4036;
  font-style: italic;
}
a.archive-disabled-member-link,
a.archive-disabled-member-link:link,
a.archive-disabled-member-link:visited,
a.archive-disabled-member-link:hover,
a.archive-disabled-member-link:active {
  color: inherit;
  cursor: default;
  text-decoration: none;
}
dl.spoiler dt,
dl.codebox.spoiler dt {
  cursor: default !important;
}
.spoiler_content {
  display: block !important;
}
.spoiler-box > blockquote,
.spoiler-box > div,
.spoiler-box > .spoiler-body {
  display: block !important;
}
.spoiler-box > .postimg,
.spoiler-box > .spoiler-switcher {
  display: none !important;
}
.noprint,
#search-box,
#search_menu,
#i_whosonline,
#picture_legend,
.audio_page_player,
td.adm,
th.adm,
#mybb-counter,
.archive-hidden,
.archive-remove {
  display: none !important;
}
dd:empty,
li:empty,
p:empty:not(.right-box) {
  display: none !important;
}
"""

LANDING_PAGE = """\
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>\u0410\u0440\u0445\u0438\u0432 \u0444\u043e\u0440\u0443\u043c\u0430 7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430</title>
  <style>
    body {
      background: #f7edec;
      color: #4c3832;
      font: 16px/1.6 Georgia, "Times New Roman", serif;
      margin: 0;
      min-height: 100vh;
    }
    main {
      margin: 0 auto;
      max-width: 760px;
      padding: 48px 20px 64px;
    }
    .card {
      background: #fff;
      border: 1px solid #e4d5d1;
      box-shadow: 0 18px 40px rgba(76, 56, 50, 0.08);
      padding: 28px 30px;
    }
    h1 {
      color: #7b2d26;
      font-size: 32px;
      line-height: 1.2;
      margin: 0 0 14px;
    }
    p {
      margin: 0 0 14px;
    }
    a.button {
      background: #7b2d26;
      color: #fff;
      display: inline-block;
      padding: 10px 16px;
      text-decoration: none;
    }
    a.button:hover {
      background: #962f26;
    }
    .muted {
      color: #735f58;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <main>
    <div class="card">
      <h1>\u0410\u0440\u0445\u0438\u0432 \u0444\u043e\u0440\u0443\u043c\u0430 \u00ab7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430\u00bb</h1>
      <p>\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043a\u043e\u043f\u0438\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 read-only \u0434\u043b\u044f GitHub Pages. \u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0434\u0430\u043c\u043f \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0451\u043d.</p>
      <p>\u0418\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0444\u043e\u0440\u0443\u043c\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b: \u043e\u0442\u0432\u0435\u0442\u044b, \u041b\u0421, \u043f\u043e\u0438\u0441\u043a, \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438, \u0444\u043e\u0440\u043c\u044b \u0438 \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0435\u0441\u0441\u0438\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u044b. \u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u0441\u043a\u0430\u0447\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b, \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438.</p>
      <p><a class="button" href="__FORUM_HREF__">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u0440\u0445\u0438\u0432 \u0444\u043e\u0440\u0443\u043c\u0430</a></p>
      <p class="muted">\u0410\u0440\u0445\u0438\u0432 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u044f\u043c\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0438 \u043f\u043e\u043c\u0435\u0447\u0435\u043d \u043a\u0430\u043a <code>noindex</code>.</p>
    </div>
  </main>
</body>
</html>
"""

PRIMARY_LANDING_TRIMMED_SENTENCE = (
    " \u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e "
    "\u0441\u043a\u0430\u0447\u0430\u043d\u043d\u044b\u0435 "
    "\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f "
    "\u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445 "
    "\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b, "
    "\u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0432\u0438\u0434\u0435\u043e "
    "\u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438."
)

MULTI_ARCHIVE_LANDING_PAGE = """\
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>\u0410\u0440\u0445\u0438\u0432 \u0444\u043e\u0440\u0443\u043c\u043e\u0432 \u00ab7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430\u00bb</title>
  <style>
    :root {
      color-scheme: light;
    }
    * {
      box-sizing: border-box;
    }
    body {
      background:
        radial-gradient(circle at top, rgba(255, 237, 214, 0.85), rgba(255, 237, 214, 0) 38%),
        linear-gradient(180deg, #f3e4da 0%, #f7f1ea 44%, #fbf8f5 100%);
      color: #4d382f;
      font: 16px/1.6 Georgia, "Times New Roman", serif;
      margin: 0;
      min-height: 100vh;
    }
    main {
      margin: 0 auto;
      max-width: 920px;
      padding: 48px 20px 72px;
    }
    .card {
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(150, 110, 87, 0.18);
      box-shadow: 0 24px 60px rgba(82, 57, 46, 0.12);
      padding: 32px;
    }
    h1 {
      color: #7b2d26;
      font-size: clamp(30px, 4vw, 42px);
      line-height: 1.12;
      margin: 0 0 16px;
    }
    p {
      margin: 0 0 16px;
    }
    .grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      margin: 28px 0 20px;
    }
    .site-card {
      background: #fffaf6;
      border: 1px solid #ead8cd;
      padding: 18px 18px 20px;
    }
    .site-card h2 {
      color: #69342d;
      font-size: 22px;
      line-height: 1.2;
      margin: 0 0 10px;
    }
    .site-card p {
      color: #634f47;
      font-size: 15px;
      margin-bottom: 14px;
    }
    a.site-button {
      background: #7b2d26;
      color: #fff;
      display: inline-block;
      padding: 10px 16px;
      text-decoration: none;
    }
    a.site-button.alt {
      background: #3f5e52;
    }
    a.site-button:hover {
      filter: brightness(1.06);
    }
    .muted {
      color: #775f55;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <main>
    <div class="card">
      <h1>\u0410\u0440\u0445\u0438\u0432 \u0444\u043e\u0440\u0443\u043c\u043e\u0432 \u00ab7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430\u00bb</h1>
      <p>\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u043e\u0431\u0440\u0430\u043d\u044b \u0434\u0432\u0435 read-only \u043a\u043e\u043f\u0438\u0438 \u0444\u043e\u0440\u0443\u043c\u043e\u0432.</p>
      <div class="grid">
        <section class="site-card">
          <h2>bl7dl.2x2forum.ru</h2>
          <p>\u0410\u0440\u0445\u0438\u0432 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0444\u043e\u0440\u0443\u043c\u0430 \u043f\u043e \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u00ab7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430\u00bb.</p>
          <p><a class="site-button" href="__PRIMARY_HREF__">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u0440\u0445\u0438\u0432</a></p>
        </section>
        <section class="site-card">
          <h2>7dneyleta.ru</h2>
          <p>\u0410\u0440\u0445\u0438\u0432 \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u0443\u043c\u0430 \u043f\u043e \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u00ab7 \u0434\u043d\u0435\u0439 \u043b\u0435\u0442\u0430\u00bb.</p>
          <p><a class="site-button alt" href="__SECONDARY_HREF__">\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u0440\u0445\u0438\u0432</a></p>
        </section>
      </div>

    </div>
  </main>
</body>
</html>
"""



MEDIA_VIEWER_HTML = """\
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>__TITLE__</title>
  <style>
    html, body {
      background: #1f1817;
      color: #f7edec;
      margin: 0;
      min-height: 100%;
    }
    body {
      font: 16px/1.5 Georgia, "Times New Roman", serif;
    }
    main {
      box-sizing: border-box;
      min-height: 100vh;
      padding: 16px;
    }
    figure {
      margin: 0 auto;
      max-width: min(100vw - 32px, 1400px);
    }
    img {
      display: block;
      height: auto;
      margin: 0 auto;
      max-width: 100%;
    }
    figcaption {
      margin-top: 12px;
      text-align: center;
      word-break: break-all;
    }
    a {
      color: #ffe6cf;
    }
  </style>
</head>
<body>
  <main>
    <figure>
      <img alt="__ALT__" src="__SRC__"/>
      <figcaption><a href="__SRC__">РћС‚РєСЂС‹С‚СЊ РёСЃС…РѕРґРЅС‹Р№ С„Р°Р№Р»</a></figcaption>
    </figure>
  </main>
</body>
</html>
"""

SEARCH_TERM_BUCKETS = 64
SEARCH_DOC_SHARD_SIZE = 1000
SEARCH_RESULTS_PAGE_SIZE = 50
SEARCH_EXCERPT_LENGTH = 220

PRIMARY_TOPIC_OUTPUT_PATTERN = re.compile(r"^t\d+(?:[np]\d+)?-topic\.html$")
SECONDARY_TOPIC_OUTPUT_PATTERN = re.compile(r"^viewtopic\.php@id=\d+(?:&p=\d+)?\.html$")

SEARCH_PAGE_TEMPLATE = """\
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>РџРѕРёСЃРє РїРѕ Р°СЂС…РёРІСѓ вЂ” __SITE_TITLE__</title>
  <link rel="stylesheet" href="../archive.css" type="text/css">
  <link rel="stylesheet" href="search.css" type="text/css">
  <script defer src="search.js"></script>
</head>
<body class="archive-readonly archive-search-page">
  <main class="archive-search-shell">
    <div class="archive-search-header">
      <p class="archive-search-breadcrumb"><a href="../index.html">Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє Р°СЂС…РёРІСѓ</a></p>
      <h1>РџРѕРёСЃРє РїРѕ Р°СЂС…РёРІСѓ</h1>
      <p class="archive-search-subtitle">__SITE_TITLE__</p>
    </div>
    <form class="archive-search-form" id="archive-search-form">
      <label class="archive-search-label" for="archive-search-query">Р—Р°РїСЂРѕСЃ</label>
      <div class="archive-search-row">
        <input id="archive-search-query" name="q" type="search" autocomplete="off" spellcheck="false" placeholder="Р’РІРµРґРёС‚Рµ СЃР»РѕРІРѕ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ СЃР»РѕРІ">
        <button type="submit">РСЃРєР°С‚СЊ</button>
      </div>
      <p class="archive-search-hint">РџРѕРёСЃРє СЂР°Р±РѕС‚Р°РµС‚ РїРѕ СЃРѕРѕР±С‰РµРЅРёСЏРј, РЅР°Р·РІР°РЅРёСЏРј С‚РµРј Рё РёРјРµРЅР°Рј Р°РІС‚РѕСЂРѕРІ. РњРѕСЂС„РѕР»РѕРіРёСЏ РЅРµ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ; вЂњРµвЂќ Рё вЂњС‘вЂќ СЃС‡РёС‚Р°СЋС‚СЃСЏ РѕРґРёРЅР°РєРѕРІС‹РјРё.</p>
    </form>
    <section class="archive-search-status" id="archive-search-status" aria-live="polite"></section>
    <ol class="archive-search-results" id="archive-search-results"></ol>
    <p class="archive-search-more-wrap archive-hidden" id="archive-search-more-wrap">
      <button id="archive-search-more" type="button">РџРѕРєР°Р·Р°С‚СЊ РµС‰С‘</button>
    </p>
  </main>
</body>
</html>
"""

SEARCH_CSS = """\
html, body {
  min-height: 100%;
}
body.archive-search-page {
  background: #f6efe8;
  color: #4c3832;
  margin: 0;
}
.archive-search-shell {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 960px;
  min-height: 100vh;
  padding: 32px 18px 56px;
}
.archive-search-header {
  margin-bottom: 20px;
}
.archive-search-header h1 {
  color: #7b2d26;
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.1;
  margin: 0 0 8px;
}
.archive-search-breadcrumb,
.archive-search-subtitle,
.archive-search-hint,
.archive-search-meta,
.archive-search-snippet,
.archive-search-empty {
  margin: 0;
}
.archive-search-subtitle,
.archive-search-hint,
.archive-search-meta,
.archive-search-empty {
  color: #6f5a52;
}
.archive-search-form {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(130, 98, 83, 0.18);
  box-shadow: 0 18px 40px rgba(76, 56, 50, 0.08);
  margin-bottom: 20px;
  padding: 18px;
}
.archive-search-label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}
.archive-search-row {
  display: flex;
  gap: 10px;
}
.archive-search-row input {
  border: 1px solid #c9b2a8;
  flex: 1 1 auto;
  font: inherit;
  min-width: 0;
  padding: 11px 12px;
}
.archive-search-row button,
.archive-search-more-wrap button {
  background: #7b2d26;
  border: 0;
  color: #fff;
  cursor: pointer;
  font: inherit;
  padding: 11px 16px;
}
.archive-search-row button:hover,
.archive-search-more-wrap button:hover {
  filter: brightness(1.05);
}
.archive-search-hint {
  font-size: 14px;
  margin-top: 10px;
}
.archive-search-status {
  margin-bottom: 14px;
  min-height: 1.5em;
}
.archive-search-results {
  display: grid;
  gap: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.archive-search-result {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(130, 98, 83, 0.16);
  box-shadow: 0 12px 28px rgba(76, 56, 50, 0.06);
  padding: 16px 18px;
}
.archive-search-result h2 {
  font-size: 20px;
  line-height: 1.25;
  margin: 0 0 8px;
}
.archive-search-result h2 a {
  color: #7b2d26;
  text-decoration: none;
}
.archive-search-result h2 a:hover {
  text-decoration: underline;
}
.archive-search-meta {
  font-size: 14px;
  margin-bottom: 8px;
}
.archive-search-snippet {
  line-height: 1.6;
}
.archive-search-more-wrap {
  margin-top: 18px;
  text-align: center;
}
@media (max-width: 640px) {
  .archive-search-row {
    flex-direction: column;
  }
  .archive-search-row button,
  .archive-search-row input {
    width: 100%;
  }
}
"""

SEARCH_JS = """\
(function () {
  const RESULTS_PER_PAGE = __RESULTS_PER_PAGE__;
  const form = document.getElementById("archive-search-form");
  const input = document.getElementById("archive-search-query");
  const statusNode = document.getElementById("archive-search-status");
  const resultsNode = document.getElementById("archive-search-results");
  const moreWrap = document.getElementById("archive-search-more-wrap");
  const moreButton = document.getElementById("archive-search-more");

  let manifestPromise = null;
  const termsCache = new Map();
  const docsCache = new Map();
  const scriptCache = new Map();
  const inlinePayloads = window.__archiveSearchData || (window.__archiveSearchData = Object.create(null));
  const useScriptLoader = window.location.protocol === "file:";
  let currentResults = [];
  let renderedCount = 0;

  function normalizeText(value) {
    return (value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/С‘/g, "Рµ")
      .replace(/[^0-9a-zР°-СЏ]+/gi, " ")
      .replace(/\\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    const normalized = normalizeText(value);
    if (!normalized) {
      return [];
    }
    const tokens = normalized.split(" ").filter((token) => token.length >= 2);
    return [...new Set(tokens)];
  }

  function escapeHtml(value) {
    return (value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function searchBucket(token, bucketCount) {
    let hash = 2166136261;
    for (let index = 0; index < token.length; index += 1) {
      hash ^= token.charCodeAt(index);
      hash = Math.imul(hash, 16777619) >>> 0;
    }
    return hash % bucketCount;
  }

  function setStatus(message) {
    statusNode.textContent = message;
  }

  function clearResults() {
    currentResults = [];
    renderedCount = 0;
    resultsNode.innerHTML = "";
    moreWrap.classList.add("archive-hidden");
  }

  function renderMore() {
    const nextSlice = currentResults.slice(renderedCount, renderedCount + RESULTS_PER_PAGE);
    for (const doc of nextSlice) {
      const item = document.createElement("li");
      item.className = "archive-search-result";
      item.innerHTML = [
        "<h2><a href=\\"" + escapeHtml(doc.url) + "\\">" + escapeHtml(doc.topic_title || "РЎРѕРѕР±С‰РµРЅРёРµ") + "</a></h2>",
        "<p class=\\"archive-search-meta\\">" + escapeHtml(doc.author || "РќРµРёР·РІРµСЃС‚РЅС‹Р№ Р°РІС‚РѕСЂ"),
        doc.forum_title ? " вЂў " + escapeHtml(doc.forum_title) : "",
        doc.posted_at ? " вЂў " + escapeHtml(doc.posted_at) : "",
        "</p>",
        doc.excerpt ? "<p class=\\"archive-search-snippet\\">" + escapeHtml(doc.excerpt) + "</p>" : "",
      ].join("");
      resultsNode.appendChild(item);
    }
    renderedCount += nextSlice.length;
    if (renderedCount >= currentResults.length) {
      moreWrap.classList.add("archive-hidden");
    } else {
      moreWrap.classList.remove("archive-hidden");
    }
  }

  function loadJsonWithFetch(filename) {
    return fetch(filename).then((response) => {
      if (!response.ok) {
        throw new Error("Р СњР Вµ РЎС“Р Т‘Р В°Р В»Р С•РЎРѓРЎРЉ Р В·Р В°Р С–РЎР‚РЎС“Р В·Р С‘РЎвЂљРЎРЉ " + filename);
      }
      return response.json();
    });
  }

  function loadJsonWithScript(filename) {
    if (Object.prototype.hasOwnProperty.call(inlinePayloads, filename)) {
      return Promise.resolve(inlinePayloads[filename]);
    }
    if (!scriptCache.has(filename)) {
      const scriptName = filename.replace(/\\.json$/, ".data.js");
      const promise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = scriptName;
        script.onload = function () {
          if (Object.prototype.hasOwnProperty.call(inlinePayloads, filename)) {
            resolve(inlinePayloads[filename]);
            return;
          }
          reject(new Error("Р СњР Вµ РЎС“Р Т‘Р В°Р В»Р С•РЎРѓРЎРЉ Р В·Р В°Р С–РЎР‚РЎС“Р В·Р С‘РЎвЂљРЎРЉ " + filename));
        };
        script.onerror = function () {
          reject(new Error("Р СњР Вµ РЎС“Р Т‘Р В°Р В»Р С•РЎРѓРЎРЉ Р В·Р В°Р С–РЎР‚РЎС“Р В·Р С‘РЎвЂљРЎРЉ " + scriptName));
        };
        document.head.appendChild(script);
      });
      scriptCache.set(filename, promise);
    }
    return scriptCache.get(filename);
  }

  function loadJson(filename) {
    return useScriptLoader ? loadJsonWithScript(filename) : loadJsonWithFetch(filename);
  }

  async function loadManifest() {
    if (!manifestPromise && useScriptLoader) {
      manifestPromise = loadJson("manifest.json");
      return manifestPromise;
    }
    if (!manifestPromise) {
      manifestPromise = fetch("manifest.json").then((response) => {
        if (!response.ok) {
          throw new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ manifest.json");
        }
        return response.json();
      });
    }
    return manifestPromise;
  }

  async function loadTermsBucket(bucketNumber) {
    const key = String(bucketNumber).padStart(2, "0");
    if (!termsCache.has(key) && useScriptLoader) {
      const filename = "terms-" + key + ".json";
      const promise = loadJson(filename);
      termsCache.set(key, promise);
      return termsCache.get(key);
    }
    if (!termsCache.has(key)) {
      const filename = "terms-" + key + ".json";
      const promise = fetch(filename).then((response) => {
        if (!response.ok) {
          throw new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ " + filename);
        }
        return response.json();
      });
      termsCache.set(key, promise);
    }
    return termsCache.get(key);
  }

  async function loadDocShard(shardNumber) {
    const key = String(shardNumber).padStart(3, "0");
    if (!docsCache.has(key) && useScriptLoader) {
      const filename = "docs-" + key + ".json";
      const promise = loadJson(filename);
      docsCache.set(key, promise);
      return docsCache.get(key);
    }
    if (!docsCache.has(key)) {
      const filename = "docs-" + key + ".json";
      const promise = fetch(filename).then((response) => {
        if (!response.ok) {
          throw new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ " + filename);
        }
        return response.json();
      });
      docsCache.set(key, promise);
    }
    return docsCache.get(key);
  }

  function exactSubstringRank(doc, normalizedQuery) {
    if (!normalizedQuery) {
      return 0;
    }
    let score = 0;
    if (normalizeText(doc.topic_title).includes(normalizedQuery)) {
      score += 4;
    }
    if (normalizeText(doc.author).includes(normalizedQuery)) {
      score += 3;
    }
    if (normalizeText(doc.excerpt).includes(normalizedQuery)) {
      score += 2;
    }
    return score;
  }

  async function runSearch(rawQuery) {
    const tokens = tokenize(rawQuery);
    const normalizedQuery = normalizeText(rawQuery);
    clearResults();

    if (tokens.length === 0) {
      setStatus("Р’РІРµРґРёС‚Рµ С…РѕС‚СЏ Р±С‹ РѕРґРёРЅ С‚РѕРєРµРЅ РґР»РёРЅРѕР№ РѕС‚ 2 СЃРёРјРІРѕР»РѕРІ.");
      resultsNode.innerHTML = '<li class="archive-search-empty">РџРѕРёСЃРє РїРѕ РїСѓСЃС‚РѕРјСѓ Р·Р°РїСЂРѕСЃСѓ РЅРµ РІС‹РїРѕР»РЅСЏРµС‚СЃСЏ.</li>';
      return;
    }

    setStatus("Р—Р°РіСЂСѓР·РєР° РёРЅРґРµРєСЃР°вЂ¦");
    const manifest = await loadManifest();
    const postingLists = [];

    for (const token of tokens) {
      const bucketNumber = searchBucket(token, manifest.term_buckets);
      const bucket = await loadTermsBucket(bucketNumber);
      const posting = bucket[token];
      if (!Array.isArray(posting) || posting.length === 0) {
        setStatus("РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ.");
        resultsNode.innerHTML = '<li class="archive-search-empty">РџРѕРґС…РѕРґСЏС‰РёС… СЃРѕРѕР±С‰РµРЅРёР№ РЅРµ РЅР°Р№РґРµРЅРѕ.</li>';
        return;
      }
      postingLists.push(posting);
    }

    postingLists.sort((left, right) => left.length - right.length);
    let intersection = postingLists[0].slice();
    for (let index = 1; index < postingLists.length; index += 1) {
      const allowed = new Set(postingLists[index]);
      intersection = intersection.filter((docId) => allowed.has(docId));
      if (intersection.length === 0) {
        break;
      }
    }

    if (intersection.length === 0) {
      setStatus("РќРёС‡РµРіРѕ РЅРµ РЅР°Р№РґРµРЅРѕ.");
      resultsNode.innerHTML = '<li class="archive-search-empty">РџРѕРґС…РѕРґСЏС‰РёС… СЃРѕРѕР±С‰РµРЅРёР№ РЅРµ РЅР°Р№РґРµРЅРѕ.</li>';
      return;
    }

    const docsById = new Map();
    const shardNumbers = [...new Set(intersection.map((docId) => Math.floor(docId / manifest.doc_shard_size)))];
    const shardPayloads = await Promise.all(shardNumbers.map((shardNumber) => loadDocShard(shardNumber)));
    for (const payload of shardPayloads) {
      for (const doc of payload) {
        docsById.set(doc.doc_id, doc);
      }
    }

    const results = [];
    for (const docId of intersection) {
      const doc = docsById.get(docId);
      if (!doc) {
        continue;
      }
      results.push({
        ...doc,
        _matchedTokens: tokens.length,
        _exactRank: exactSubstringRank(doc, normalizedQuery),
      });
    }

    results.sort((left, right) => {
      if (right._matchedTokens !== left._matchedTokens) {
        return right._matchedTokens - left._matchedTokens;
      }
      if (right._exactRank !== left._exactRank) {
        return right._exactRank - left._exactRank;
      }
      return String(right.sort_key || "").localeCompare(String(left.sort_key || ""));
    });

    const dedupedResults = [];
    const seenUrls = new Set();
    for (const result of results) {
      if (seenUrls.has(result.url)) {
        continue;
      }
      seenUrls.add(result.url);
      dedupedResults.push(result);
    }

    currentResults = dedupedResults;
    setStatus("РќР°Р№РґРµРЅРѕ СЃРѕРѕР±С‰РµРЅРёР№: " + dedupedResults.length + ".");
    renderMore();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = input.value || "";
    const params = new URLSearchParams(window.location.search);
    if (query.trim()) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    const nextUrl = params.toString() ? "?".concat(params.toString()) : window.location.pathname;
    window.history.replaceState({}, "", nextUrl);
    runSearch(query).catch(function (error) {
      console.error(error);
      clearResults();
      setStatus("РџРѕРёСЃРє РІСЂРµРјРµРЅРЅРѕ РЅРµРґРѕСЃС‚СѓРїРµРЅ.");
      resultsNode.innerHTML = '<li class="archive-search-empty">РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РїРѕРёСЃРєРѕРІРѕР№ РёРЅРґРµРєСЃ.</li>';
    });
  });

  moreButton.addEventListener("click", function () {
    renderMore();
  });

  const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
  input.value = initialQuery;
  if (initialQuery.trim()) {
    runSearch(initialQuery).catch(function (error) {
      console.error(error);
      clearResults();
      setStatus("РџРѕРёСЃРє РІСЂРµРјРµРЅРЅРѕ РЅРµРґРѕСЃС‚СѓРїРµРЅ.");
      resultsNode.innerHTML = '<li class="archive-search-empty">РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ РїРѕРёСЃРєРѕРІРѕР№ РёРЅРґРµРєСЃ.</li>';
    });
  } else {
    setStatus("Р’РІРµРґРёС‚Рµ Р·Р°РїСЂРѕСЃ, С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РїРѕРёСЃРє.");
  }
})();
"""

ACCESS_DENIED_MARKERS = (
    "<title>РћС€РёР±РєР°</title>",
    '<h1 class="page-title">РћС€РёР±РєР°</h1>',
    "РЈ РІР°СЃ РЅРµС‚ РґРѕСЃС‚СѓРїР° Рє СЌС‚РѕР№ СЃС‚СЂР°РЅРёС†Рµ",
)



FORBIDDEN_SCAN_PATTERNS = {
    "session_state_js_marker": "session_logged_in",
    "login_logout": "login@logout=1",
    "auth_fields": 'name="auth[]"',
    "tid_fields": 'name="tid"',
    "edit_profile": "profile@mode=editprofile",
    "profile_email": "profile@mode=email",
    "pm_post": "privmsg@mode=post",
    "post_form": 'action="/post"',
    "last_visit": "Р’С‹ РїРѕСЃР»РµРґРЅРёР№ СЂР°Р· Р·Р°С…РѕРґРёР»Рё",
    "toolbar_init": "Toolbar.init",
}

SECONDARY_KEEP_FILE_PATTERNS = (
    re.compile(r"^default\.htm$"),
    re.compile(r"^misc\.php@action=rules$"),
    re.compile(r"^userlist\.php(?:@.*)?$"),
    re.compile(r"^profile\.php@id=\d+$"),
    re.compile(r"^search\.php@action=show_user_posts&user_id=\d+(?:&p=\d+)?$"),
    re.compile(r"^viewforum\.php@id=\d+(?:&p=\d+)?$"),
    re.compile(r"^viewtopic\.php@id=\d+(?:&p=\d+)?$"),
)

TRACKLIST_SELF_ALIASES = {"tracklist", "index.php", "default.htm"}

REPORT_REDACTION_SNIPPETS = tuple(
    sorted({*BLOCKED_HREF_SNIPPETS, *FORBIDDEN_SCAN_PATTERNS.values()})
)



def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build a read-only GitHub Pages archive from offline forum dumps.")
    parser.add_argument("--src", help="Primary source dump root, e.g. 7dl_site")
    parser.add_argument("--out", required=True, help="Output directory, e.g. docs")
    parser.add_argument("--forum-dir", required=True, help="Primary forum directory inside source root")
    parser.add_argument("--report", help="Path to JSON build report")
    parser.add_argument("--primary-prefix", default="bl7dl-2x2forum-ru", help="Output subdirectory for the primary archive")
    parser.add_argument("--secondary-src", default="7dneyleta_site", help="Secondary source dump root")
    parser.add_argument("--secondary-prefix", default="7dneyleta-ru", help="Output subdirectory for the secondary archive")
    parser.add_argument(
        "--incremental",
        action="store_true",
        help="Reuse existing output files when inputs look unchanged; does not prune stale artifacts.",
    )
    parser.add_argument(
        "--fast",
        action="store_true",
        help="Shortcut local iteration mode: implies --incremental and skips the forbidden-pattern scan.",
    )
    parser.add_argument(
        "--only",
        choices=("all", "root-landing"),
        default="all",
        help="Limit the run to one output area. 'root-landing' rewrites only docs/index.html and docs/.nojekyll.",
    )
    parser.add_argument("--disable-secondary", action="store_true", help="Skip building the secondary archive")
    args = parser.parse_args()
    if args.only != "root-landing":
        if not args.src:
            parser.error("--src is required unless --only root-landing is used")
        if not args.report:
            parser.error("--report is required unless --only root-landing is used")
    return args

def is_kept_forum_page(name: str) -> bool:
    if "_25(" in name or "_2525(" in name:
        return False
    return any(pattern.match(name) for pattern in KEEP_FILE_PATTERNS)


def is_primary_member_page(name: str) -> bool:
    return any(pattern.match(name) for pattern in PRIMARY_MEMBER_PAGE_PATTERNS)


def should_publish_primary_forum_page(path: Path) -> bool:
    if not is_kept_forum_page(path.name):
        return False
    if not is_access_denied_capture(path):
        return True
    return is_primary_member_page(path.name)


def collect_access_denied_primary_member_pages(src_forum_dir: Path) -> set[str]:
    pages: set[str] = set()
    for child in src_forum_dir.iterdir():
        if child.is_file() and is_primary_member_page(child.name) and is_access_denied_capture(child):
            pages.add(child.name)
    return pages


def is_access_denied_capture(path: Path) -> bool:
    try:
        content = path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return False
    return (
        ACCESS_DENIED_MARKERS[1] in content and ACCESS_DENIED_MARKERS[2] in content
    ) or (
        ACCESS_DENIED_MARKERS[0] in content and ACCESS_DENIED_MARKERS[2] in content
    )


def is_forbidden_forum_path(relative_path: str) -> bool:
    if "_25(" in relative_path or "_2525(" in relative_path:
        return True
    return any(pattern.match(relative_path) for pattern in FORBIDDEN_FORUM_PATH_PATTERNS)


def forum_output_name(source_name: str) -> str:
    if source_name == "default.htm":
        return "index.html"
    return f"{source_name}.html"


def is_image_path(path: Path) -> bool:
    return path.suffix.lower() in IMAGE_EXTENSIONS



def sniff_image_extension(path: Path) -> str | None:
    try:
        with path.open("rb") as handle:
            head = handle.read(1024)
    except OSError:
        return None

    for signature, extension in IMAGE_SIGNATURES:
        if head.startswith(signature):
            return extension

    if len(head) >= 12 and head[:4] == b"RIFF" and head[8:12] == b"WEBP":
        return ".webp"

    stripped = head.lstrip().lower()
    if stripped.startswith(b"<svg") or (stripped.startswith(b"<?xml") and b"<svg" in stripped[:512]):
        return ".svg"
    return None


def resolve_published_image_target(target: Path, image_aliases: dict[Path, Path]) -> Path:
    return image_aliases.get(target.resolve(strict=False), target)


def should_probe_image_alias(path: Path) -> bool:
    suffix = path.suffix.lower()
    if suffix in IMAGE_EXTENSIONS:
        return False
    if suffix in {".htm", ".html", ".xhtml", ".forum", ".wd3"}:
        return False
    return True


def can_reuse_copied_file(source_file: Path, target_file: Path) -> bool:
    try:
        source_stat = source_file.stat()
        target_stat = target_file.stat()
    except OSError:
        return False
    return target_stat.st_size == source_stat.st_size and target_stat.st_mtime_ns >= source_stat.st_mtime_ns


def is_generated_file_fresh(target_file: Path, *, options: BuildOptions, source_paths: Iterable[Path] = ()) -> bool:
    if not options.incremental:
        return False
    try:
        target_mtime_ns = target_file.stat().st_mtime_ns
    except OSError:
        return False

    newest_input = options.builder_mtime_ns
    for source_path in source_paths:
        try:
            newest_input = max(newest_input, source_path.stat().st_mtime_ns)
        except OSError:
            return False
    return target_mtime_ns >= newest_input


def ensure_copied_file(
    source_file: Path,
    target_file: Path,
    *,
    counters: Counter[str],
    options: BuildOptions,
    count_key: str | None,
    written_key: str,
    reused_key: str,
) -> None:
    if count_key is not None:
        counters[count_key] += 1
    target_file.parent.mkdir(parents=True, exist_ok=True)
    if options.incremental and can_reuse_copied_file(source_file, target_file):
        counters[reused_key] += 1
        return
    shutil.copy2(source_file, target_file)
    counters[written_key] += 1


def media_viewer_path(asset_path: Path) -> Path:
    return asset_path.with_name(f"{asset_path.name}.view.html")


def render_media_viewer(asset_path: Path, out_root: Path) -> str:
    relative_name = path_to_posix(asset_path.relative_to(out_root))
    encoded_name = quote(asset_path.name, safe="!$&'()*+,-.;=@_~")
    return (
        MEDIA_VIEWER_HTML
        .replace("__TITLE__", escape(relative_name))
        .replace("__ALT__", escape(asset_path.name))
        .replace("__SRC__", escape(encoded_name, quote=True))
    )


def ensure_media_viewer(asset_path: Path, out_root: Path, counters: Counter[str], options: BuildOptions) -> None:
    viewer_path = media_viewer_path(asset_path)
    counters["media_viewers_written"] += 1
    if is_generated_file_fresh(viewer_path, options=options, source_paths=(asset_path,)):
        counters["media_viewers_reused"] += 1
        return
    write_text(viewer_path, render_media_viewer(asset_path, out_root))
    counters["media_viewers_updated"] += 1


def ensure_image_alias(
    source_file: Path,
    target_file: Path,
    out_root: Path,
    counters: Counter[str],
    options: BuildOptions,
    image_aliases: dict[Path, Path],
) -> None:
    if not should_probe_image_alias(source_file):
        return
    extension = sniff_image_extension(source_file)
    if not extension:
        return
    alias_path = target_file.with_name(f"{target_file.name}{extension}")
    ensure_copied_file(
        source_file,
        alias_path,
        counters=counters,
        options=options,
        count_key=None,
        written_key="image_aliases_written",
        reused_key="image_aliases_reused",
    )
    image_aliases[target_file.resolve(strict=False)] = alias_path.resolve(strict=False)
    ensure_media_viewer(alias_path, out_root, counters, options)


def mirror_asset_file(
    source_file: Path,
    target_file: Path,
    out_root: Path,
    counters: Counter[str],
    options: BuildOptions,
    image_aliases: dict[Path, Path],
    *,
    count_key: str = "assets_copied",
    written_key: str = "assets_written",
    reused_key: str = "assets_reused",
) -> None:
    ensure_copied_file(
        source_file,
        target_file,
        counters=counters,
        options=options,
        count_key=count_key,
        written_key=written_key,
        reused_key=reused_key,
    )
    if is_image_path(target_file):
        ensure_media_viewer(target_file, out_root, counters, options)
        return
    ensure_image_alias(source_file, target_file, out_root, counters, options, image_aliases)


def path_to_posix(path: Path) -> str:
    return path.as_posix()


def should_copy_asset(relative_path: Path) -> bool:
    return path_to_posix(relative_path).lower() not in SKIPPED_ASSET_RELATIVE_PATHS


def copy_tree_without_wd3(
    src: Path,
    dst: Path,
    *,
    relative_prefix: Path,
    out_root: Path,
    counters: Counter[str],
    options: BuildOptions,
    image_aliases: dict[Path, Path],
) -> None:
    for root, dirs, files in os.walk(src):
        dirs[:] = [item for item in dirs if item != "__pycache__"]
        root_path = Path(root)
        relative = root_path.relative_to(src)
        target_root = dst / relative
        target_root.mkdir(parents=True, exist_ok=True)
        for name in files:
            if name.endswith(".WD3"):
                continue
            source_file = root_path / name
            source_relative = relative_prefix / relative / name
            if not should_copy_asset(source_relative):
                continue
            target_file = target_root / name
            mirror_asset_file(source_file, target_file, out_root, counters, options, image_aliases)


def is_report_safe_text(value: str) -> bool:
    return not any(snippet in value for snippet in REPORT_REDACTION_SNIPPETS)



def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8", newline="\n")


def write_json(path: Path, data: object, *, pretty: bool = False) -> None:
    if pretty:
        text = json.dumps(data, ensure_ascii=False, indent=2)
    else:
        text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    write_text(path, text)




def path_exists(path: Path) -> bool:
    try:
        path.stat()
    except OSError:
        return False
    return True
def ensure_generated_text(
    path: Path,
    text: str,
    *,
    options: BuildOptions,
    counters: Counter[str] | None = None,
    count_key: str | None = None,
    written_key: str | None = None,
    reused_key: str | None = None,
    source_paths: Iterable[Path] = (),
) -> None:
    if counters is not None and count_key is not None:
        counters[count_key] += 1
    if is_generated_file_fresh(path, options=options, source_paths=source_paths):
        if counters is not None and reused_key is not None:
            counters[reused_key] += 1
        return
    write_text(path, text)
    if counters is not None and written_key is not None:
        counters[written_key] += 1


def mirror_local_path_from_absolute(url: str, src_root: Path) -> Path | None:
    parsed = urlsplit(url)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        return None

    top = f"https@{parsed.netloc}" if parsed.scheme == "https" else parsed.netloc
    parts = [top]
    parts.extend(part for part in parsed.path.split("/") if part)

    if parsed.query:
        if parts:
            parts[-1] = f"{parts[-1]}@{parsed.query}"
        else:
            parts.append(f"@{parsed.query}")

    candidate = src_root.joinpath(*parts)
    return candidate if candidate.exists() else None


def strip_leading_relative_parts(url_path: str) -> PurePosixPath:
    parts = list(PurePosixPath(url_path).parts)
    while parts and parts[0] in {".", ".."}:
        parts.pop(0)
    return PurePosixPath(*parts)


def mirror_path_to_external(url_path: str) -> str | None:
    stripped = strip_leading_relative_parts(url_path)
    if not stripped.parts:
        return None

    top = stripped.parts[0]
    if top.startswith("https@"):
        scheme = "https"
        netloc = top[len("https@") :]
    elif re.match(r"^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$", top):
        scheme = "http"
        netloc = top
    else:
        return None

    remainder = list(stripped.parts[1:])
    query = ""
    if remainder:
        last = remainder[-1]
        if "@" in last:
            path_part, query = last.split("@", 1)
            if path_part:
                remainder[-1] = path_part
            else:
                remainder.pop()

    path = "/" + "/".join(part for part in remainder if part)
    if not path:
        path = "/"
    return urlunsplit((scheme, netloc, path, query, ""))


def relative_url(from_file: Path, to_file: Path) -> str:
    return Path(os.path.relpath(to_file, from_file.parent)).as_posix()


def output_target_from_relative(current_dst_file: Path, url_path: str) -> Path:
    pure = PurePosixPath(url_path)
    return current_dst_file.parent.joinpath(*pure.parts).resolve(strict=False)


def maybe_rewrite_anchor_to_media_viewer(
    rewritten: str,
    *,
    current_dst_file: Path,
    out_root: Path,
    counters: Counter[str],
) -> str:
    parsed = urlsplit(rewritten)
    if parsed.scheme or parsed.netloc or not parsed.path or parsed.path.startswith("/"):
        return rewritten

    target = output_target_from_relative(current_dst_file, parsed.path)
    try:
        target.relative_to(out_root)
    except ValueError:
        return rewritten

    if not target.exists() or not is_image_path(target):
        return rewritten

    viewer = media_viewer_path(target)
    if not viewer.exists():
        return rewritten

    counters["image_links_rewritten_to_viewers"] += 1
    return urlunsplit(("", "", relative_url(current_dst_file, viewer), parsed.query, parsed.fragment))


def source_target_from_relative(current_src_file: Path, url_path: str) -> Path:
    pure = PurePosixPath(url_path)
    return current_src_file.parent.joinpath(*pure.parts).resolve(strict=False)


def is_access_denied_primary_member_link(
    url: str,
    *,
    current_src_file: Path,
    src_root: Path,
    access_denied_member_pages: set[str],
) -> bool:
    if not access_denied_member_pages:
        return False

    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc or not parsed.path or parsed.path.startswith("/"):
        return False

    source_target = source_target_from_relative(current_src_file, parsed.path)
    try:
        source_target.relative_to(src_root)
    except ValueError:
        return False

    if source_target.parent != current_src_file.parent:
        return False
    return source_target.name in access_denied_member_pages



def is_probably_html_file(path: Path, cache: dict[Path, bool]) -> bool:
    if path in cache:
        return cache[path]

    suffix = path.suffix.lower()
    if suffix in {".htm", ".html", ".xhtml", ".forum"}:
        cache[path] = True
        return True
    if suffix in IMAGE_EXTENSIONS or suffix in MEDIA_EXTENSIONS or suffix in STATIC_EXTENSIONS:
        cache[path] = False
        return False

    try:
        with path.open("rb") as handle:
            head = handle.read(256).lstrip().lower()
    except OSError:
        cache[path] = False
        return False

    cache[path] = head.startswith(b"<!doctype html") or head.startswith(b"<html") or b"<html" in head
    return cache[path]


def add_robots_noindex(soup: BeautifulSoup, head: Tag) -> None:
    for meta in head.find_all("meta"):
        name = (meta.get("name") or "").lower()
        prop = (meta.get("property") or "").lower()
        if name == "robots" or prop.startswith("og:") or name.startswith("twitter:"):
            meta.decompose()
    robots = soup.new_tag("meta")
    robots["name"] = "robots"
    robots["content"] = "noindex, nofollow"
    head.append(robots)


def add_archive_stylesheet(soup: BeautifulSoup, head: Tag) -> None:
    for link in list(head.find_all("link", href="archive.css")):
        link.decompose()
    link = soup.new_tag("link")
    link["rel"] = "stylesheet"
    link["href"] = "archive.css"
    link["type"] = "text/css"
    head.append(link)


def remove_head_noise(soup: BeautifulSoup, counters: Counter[str]) -> None:
    head = soup.head
    if head is None:
        return

    for script in list(head.find_all("script")):
        script.decompose()
        counters["scripts_removed"] += 1

    for style in list(head.find_all("style")):
        style.decompose()
        counters["styles_removed"] += 1

    for link in list(head.find_all("link")):
        rel_values = {value.lower() for value in link.get("rel", [])}
        href = link.get("href", "")
        keep = ("stylesheet" in rel_values and href == "1-ltr.css") or "shortcut icon" in rel_values
        if not keep:
            link.decompose()
            counters["head_links_removed"] += 1

    add_robots_noindex(soup, head)
    add_archive_stylesheet(soup, head)


def remove_by_text_patterns(soup: BeautifulSoup, counters: Counter[str]) -> None:
    # Never match on broad container nodes like div: forum wrappers often inherit the
    # text of child widgets, and removing the wrapper would wipe the whole page.
    for tag in list(soup.find_all(["p", "li", "h1", "h2", "h3", "a", "span", "dt", "dd"])):
        text = tag.get_text(" ", strip=True)
        if not text:
            continue
        if any(pattern in text for pattern in TEXT_PATTERNS_TO_REMOVE):
            if tag.name == "a" and tag.parent and tag.parent.name in {"li", "p", "h3"}:
                tag.parent.decompose()
            else:
                tag.decompose()
            counters["text_sections_removed"] += 1


def remove_readonly_capability_blocks(soup: BeautifulSoup, counters: Counter[str]) -> None:
    access_label = "РџСЂР°РІР° РґРѕСЃС‚СѓРїР° Рє СЌС‚РѕРјСѓ С„РѕСЂСѓРјСѓ"
    capability_prefix = "Р’С‹ РјРѕР¶РµС‚Рµ"

    for info_block in list(soup.select("#info_open")):
        info_text = info_block.get_text(" ", strip=True)
        if "РџСЂР°РІР° РґРѕСЃС‚СѓРїР°" in info_text or capability_prefix in info_text:
            info_block.decompose()
            counters["readonly_capability_blocks_removed"] += 1

    for heading in list(soup.select("div.h3, h3")):
        text = heading.get_text(" ", strip=True)
        if access_label not in text:
            continue

        current = heading.next_sibling
        heading.decompose()
        counters["readonly_capability_blocks_removed"] += 1
        while current is not None:
            next_sibling = current.next_sibling
            if isinstance(current, NavigableString):
                stripped = str(current).strip()
                if not stripped or capability_prefix in stripped:
                    current.extract()
                    current = next_sibling
                    continue
                break
            if isinstance(current, Tag) and current.name in {"strong", "br", "span", "a"}:
                current.decompose()
                current = next_sibling
                continue
            break


def is_inside_post_content(node: Tag | NavigableString) -> bool:
    for parent in node.parents:
        if not isinstance(parent, Tag):
            continue
        classes = set(parent.get("class") or [])
        if parent.name in {"blockquote", "code", "pre"}:
            return True
        if parent.name == "div" and ({"postbody", "content"} & classes):
            return True
    return False


def remove_session_lines(soup: BeautifulSoup, counters: Counter[str]) -> None:
    protected_ids = {"wrap", "page-body", "page-header", "main", "main-content", "container", "content", "wrapper", "outer-wrapper"}

    for tag in list(soup.find_all(["p", "div", "li", "td", "dd", "dt", "span", "h3"])):
        if is_inside_post_content(tag):
            continue
        text = tag.get_text(" ", strip=True)
        if not text or not any(phrase in text for phrase in SESSION_LINE_PHRASES):
            continue
        if tag.name == "div":
            if tag.get("id") in protected_ids:
                continue
            if tag.find(["table", "ul", "ol", "div", "dl"], recursive=False):
                continue
        tag.decompose()
        counters["session_blocks_removed"] += 1

    inline_tags = {"a", "span", "strong", "em", "b", "i", "small", "img"}
    for node in list(soup.find_all(string=True)):
        if not isinstance(node, NavigableString):
            continue
        text = str(node).strip()
        if not text or not any(phrase in text for phrase in SESSION_LINE_PHRASES):
            continue
        if is_inside_post_content(node):
            continue

        parent = node.parent
        if isinstance(parent, Tag) and parent.name in {"p", "li", "td", "dd", "dt", "span"}:
            parent.decompose()
            counters["session_blocks_removed"] += 1
            continue

        previous = node.previous_sibling
        while isinstance(previous, NavigableString) and not previous.strip():
            to_remove = previous
            previous = previous.previous_sibling
            to_remove.extract()
        if isinstance(previous, Tag) and previous.name == "br":
            previous.decompose()

        current = node
        removed_any = False
        while current is not None:
            next_sibling = current.next_sibling
            if isinstance(current, NavigableString):
                removed_any = True
                current.extract()
            elif isinstance(current, Tag) and current.name in inline_tags:
                removed_any = True
                current.decompose()
            elif isinstance(current, Tag) and current.name == "br":
                removed_any = True
                current.decompose()
                break
            else:
                break
            current = next_sibling

        if removed_any:
            counters["session_inline_runs_removed"] += 1


def clone_fragment(tag: Tag) -> Tag | None:
    fragment = BeautifulSoup(str(tag), "lxml")
    if fragment.body is not None:
        for child in fragment.body.children:
            if isinstance(child, Tag):
                return child
    return fragment.find(True)


def replace_poll_forms_with_results(src_file: Path, soup: BeautifulSoup, counters: Counter[str]) -> None:
    if src_file.name.endswith("@vote=viewresult"):
        return
    poll_forms = [form for form in soup.find_all("form") if form.find("fieldset", class_="polls")]
    if not poll_forms:
        return
    result_file = src_file.with_name(f"{src_file.name}@vote=viewresult")
    if not result_file.exists():
        return
    result_soup = BeautifulSoup(result_file.read_text(encoding="utf-8", errors="replace"), "lxml")
    result_panels = []
    for fieldset in result_soup.select("fieldset.polls"):
        panel = fieldset.find_parent("div", class_="panel")
        if panel is not None:
            result_panels.append(panel)
    for form, panel in zip(poll_forms, result_panels):
        replacement = clone_fragment(panel)
        if replacement is None:
            continue
        form.replace_with(replacement)
        counters["poll_results_merged"] += 1


def convert_poll_form_to_readonly(form: Tag, counters: Counter[str]) -> None:
    classes = list(dict.fromkeys([*(form.get("class") or []), "archive-poll-form"]))
    form.name = "div"
    if classes:
        form["class"] = classes
    for attr in ("action", "method", "enctype", "onsubmit", "target", "accept-charset"):
        if form.has_attr(attr):
            del form[attr]

    for hidden in list(form.find_all("input", attrs={"type": "hidden"})):
        hidden.decompose()
        counters["poll_hidden_inputs_removed"] += 1

    for submit in list(form.find_all("input", attrs={"type": lambda value: isinstance(value, str) and value.lower() == "submit"})):
        dl = submit.find_parent("dl")
        if dl is not None:
            dl.decompose()
        else:
            submit.decompose()
        counters["poll_submit_controls_removed"] += 1

    for control in form.find_all(["input", "button", "select", "textarea"]):
        if control.name == "input":
            control_type = (control.get("type") or "").lower()
            if control_type in {"hidden", "submit"}:
                continue
        control["disabled"] = "disabled"
        if control.has_attr("name"):
            del control["name"]

    for anchor in list(form.find_all("a", href=True)):
        href = anchor.get("href") or ""
        if "@vote=viewresult" not in href:
            continue
        replacement = BeautifulSoup("", "lxml").new_tag("span")
        replacement["class"] = ["archive-inline-note"]
        replacement.string = anchor.get_text(" ", strip=True) or "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043e\u043f\u0440\u043e\u0441\u0430"
        anchor.replace_with(replacement)
        counters["poll_result_links_neutralized"] += 1


def remove_forms_and_scripts(soup: BeautifulSoup, counters: Counter[str]) -> None:
    for script in list(soup.find_all("script")):
        script.decompose()
        counters["scripts_removed"] += 1

    for style in list(soup.find_all("style")):
        style.decompose()
        counters["styles_removed"] += 1

    for body_link in list(soup.find_all("link")):
        if body_link.find_parent("head") is None:
            body_link.decompose()
            counters["body_links_removed"] += 1

    for form in list(soup.find_all("form")):
        if form.find("fieldset", class_="polls"):
            convert_poll_form_to_readonly(form, counters)
            continue
        form.decompose()
        counters["forms_removed"] += 1

    for quickreply in list(soup.find_all(attrs={"name": "quickreply"})):
        quickreply.decompose()
        counters["quickreply_removed"] += 1

    for node in list(soup.find_all(string=lambda text: isinstance(text, Comment))):
        node.extract()


def remove_blocked_links(soup: BeautifulSoup, counters: Counter[str]) -> None:
    for anchor in list(soup.find_all("a", href=True)):
        if not isinstance(getattr(anchor, "attrs", None), dict):
            continue
        href = anchor.get("href")
        if not href:
            continue
        if any(snippet in href for snippet in BLOCKED_HREF_SNIPPETS):
            parent = anchor.parent
            if anchor.get("id") == "logout":
                anchor.decompose()
            elif parent and parent.name in {"li", "p", "div", "dd", "span"} and parent.get_text(" ", strip=True) == anchor.get_text(" ", strip=True):
                parent.decompose()
            else:
                anchor.decompose()
            counters["blocked_links_removed"] += 1

    for selector in ("#search-box", "#search_menu", "#i_whosonline", "ul.profile-icons", ".noprint"):
        for tag in list(soup.select(selector)):
            tag.decompose()
            counters["selectors_removed"] += 1


def remove_quick_reply_fragments(soup: BeautifulSoup, counters: Counter[str]) -> None:
    quick_reply_label = "Р‘С‹СЃС‚СЂС‹Р№ РѕС‚РІРµС‚"

    def trim_after(node: Tag) -> None:
        current = node
        while current is not None:
            next_sibling = current.next_sibling
            if isinstance(current, NavigableString):
                if str(current).strip():
                    break
                current.extract()
                current = next_sibling
                continue
            if current is node or current.name in {"br", "link", "style", "script"}:
                current.decompose()
                counters["quickreply_fragments_removed"] += 1
                current = next_sibling
                continue
            break

    for anchor in list(soup.find_all("a", attrs={"name": "quickreply"})):
        trim_after(anchor)

    for heading in list(soup.find_all(["div", "h3"])):
        heading_text = heading.get_text(" ", strip=True)
        classes = heading.get("class") or []
        if quick_reply_label in heading_text and (heading.name == "h3" or "h3" in classes):
            trim_after(heading)


def remove_contact_actions(soup: BeautifulSoup, counters: Counter[str]) -> None:
    for tag in soup.find_all("dd"):
        removed_any = False
        for anchor in list(tag.find_all("a", href=True)):
            if not isinstance(getattr(anchor, "attrs", None), dict):
                continue
            href = anchor.get("href")
            if not href:
                continue
            if "privmsg@mode=post" in href or "profile@mode=email" in href:
                anchor.decompose()
                removed_any = True
                counters["contact_links_removed"] += 1
        if removed_any and not tag.get_text(" ", strip=True) and not tag.find("img"):
            tag.decompose()


def strip_online_state(soup: BeautifulSoup, counters: Counter[str]) -> None:
    online_classes = {"online", "online2"}

    for tag in soup.find_all(True):
        classes = list(tag.get("class") or [])
        if not classes:
            continue
        filtered = [item for item in classes if item not in online_classes]
        if filtered == classes:
            continue
        if filtered:
            tag["class"] = filtered
        else:
            del tag["class"]
        counters["online_classes_removed"] += len(classes) - len(filtered)

    for image in list(soup.find_all("img", src=True)):
        src = image["src"].lower()
        if "icon_user_online" in src or "icon_online" in src:
            image.decompose()
            counters["online_indicators_removed"] += 1


def normalize_archive_state(soup: BeautifulSoup, counters: Counter[str]) -> None:
    for image in soup.find_all("img", src=True):
        src = image["src"]
        replaced = src.replace("folder_new_big", "folder_big").replace("folder_new", "folder")
        if replaced != src:
            image["src"] = replaced
            counters["state_icons_normalized"] += 1

        alt = image.get("alt")
        if alt == "РќРѕРІС‹Рµ СЃРѕРѕР±С‰РµРЅРёСЏ":
            image["alt"] = "РЎРѕРѕР±С‰РµРЅРёСЏ"
        title = image.get("title")
        if title == "РќРѕРІС‹Рµ СЃРѕРѕР±С‰РµРЅРёСЏ":
            image["title"] = "РЎРѕРѕР±С‰РµРЅРёСЏ"


def cleanup_empty_tags(soup: BeautifulSoup) -> None:
    removable = ["li", "ul", "p", "span", "dd", "div"]
    for _ in range(4):
        changed = False
        for tag in list(soup.find_all(removable)):
            if tag.get("id") in {"wrap", "page-body", "page-header", "main", "main-content"}:
                continue
            classes = set(tag.get("class") or [])
            if classes & {"clear", "clearfix", "right-box", "corners-top", "corners-bottom", "icon", "intd"}:
                continue
            parent_classes = set(tag.parent.get("class") or []) if tag.parent else set()
            if parent_classes & {"corners-top", "corners-bottom"}:
                continue
            style = (tag.get("style") or "").lower()
            if "clear:" in style:
                continue
            if tag.find(["img", "a", "table", "dl", "ul", "ol", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6"]):
                continue
            if tag.get_text(" ", strip=True):
                continue
            tag.decompose()
            changed = True
        if not changed:
            return


def rewrite_style_urls(
    tag: Tag,
    current_src_file: Path,
    current_dst_file: Path,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
) -> None:
    style = tag.get("style")
    if not style:
        return

    def replace(match: re.Match[str]) -> str:
        raw = match.group(1).strip().strip('"').strip("'")
        rewritten = rewrite_url(
            raw,
            current_src_file=current_src_file,
            current_dst_file=current_dst_file,
            src_root=src_root,
            out_root=out_root,
            counters=counters,
            html_cache=html_cache,
            image_aliases=image_aliases,
            attribute_name="style",
        )
        if rewritten is None:
            return "url()"
        return f"url({rewritten})"

    new_style = re.sub(r"url\(([^)]+)\)", replace, style)
    if new_style != style:
        tag["style"] = new_style


def rewrite_url(
    url: str,
    *,
    current_src_file: Path,
    current_dst_file: Path,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    attribute_name: str,
) -> str | None:
    parsed = urlsplit(url)
    if parsed.scheme in {"javascript", "mailto", "tel", "data"}:
        return url
    if not parsed.path and parsed.fragment:
        return url

    if parsed.scheme in {"http", "https"} and parsed.netloc:
        local_target = mirror_local_path_from_absolute(urlunsplit((parsed.scheme, parsed.netloc, parsed.path, parsed.query, "")), src_root)
        if local_target and local_target.exists():
            if attribute_name == "src" or local_target.suffix.lower() in STATIC_EXTENSIONS:
                rel_target = out_root / local_target.relative_to(src_root)
                rel_target = resolve_published_image_target(rel_target, image_aliases)
                counters["links_rewritten_local"] += 1
                return relative_url(current_dst_file, rel_target)
        return url

    path = parsed.path
    if not path:
        return url
    if path.startswith("/"):
        return None
    if path in {"1-ltr.css", "archive.css", "search", "search/", "search/index.html"}:
        return path

    current_forum_name = current_src_file.name
    if "/" not in path and path == current_forum_name:
        if should_publish_primary_forum_page(current_src_file):
            output_name = forum_output_name(path)
            return urlunsplit(("", "", output_name, parsed.query, parsed.fragment))
        return None

    if "/" not in path and is_kept_forum_page(path):
        source_page = current_src_file.parent / path
        if source_page.exists() and not should_publish_primary_forum_page(source_page):
            return None
        output_name = forum_output_name(path)
        counters["internal_page_links_rewritten"] += 1
        return urlunsplit(("", "", output_name, parsed.query, parsed.fragment))

    source_target = source_target_from_relative(current_src_file, path)
    try:
        relative_source_target = source_target.relative_to(src_root)
    except ValueError:
        relative_source_target = None

    if source_target.exists() and relative_source_target is not None:
        if current_src_file.parent == source_target.parent:
            if should_publish_primary_forum_page(source_target):
                output_name = forum_output_name(source_target.name)
                counters["internal_page_links_rewritten"] += 1
                return urlunsplit(("", "", output_name, parsed.query, parsed.fragment))
            if is_probably_html_file(source_target, html_cache):
                return None

        if is_probably_html_file(source_target, html_cache) and mirror_path_to_external(path):
            counters["links_externalized"] += 1
            return mirror_path_to_external(path)

        rel_target = out_root / relative_source_target
        rel_target = resolve_published_image_target(rel_target, image_aliases)
        counters["links_rewritten_local"] += 1
        return urlunsplit(("", "", relative_url(current_dst_file, rel_target), parsed.query, parsed.fragment))

    external = mirror_path_to_external(path)
    if external:
        counters["links_externalized"] += 1
        return external
    return None


def replace_embed_with_note(tag: Tag, url: str, counters: Counter[str]) -> None:
    note = BeautifulSoup("", "lxml").new_tag("p")
    note["class"] = "archive-embed-note"
    note.string = "Р’РЅРµС€РЅРёР№ embed: "
    link = BeautifulSoup("", "lxml").new_tag("a", href=url)
    link["target"] = "_blank"
    link["rel"] = "nofollow noopener"
    link.string = url
    note.append(link)
    tag.replace_with(note)
    counters["embeds_replaced"] += 1


def replace_missing_media(tag: Tag, external_url: str | None, counters: Counter[str]) -> None:
    replacement = BeautifulSoup("", "lxml").new_tag("span")
    replacement["class"] = "archive-missing-media"
    replacement.string = "\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u0441\u043a\u0430\u0447\u0430\u043d\u043e."
    if external_url:
        replacement.append(" ")
        link = BeautifulSoup("", "lxml").new_tag("a", href=external_url)
        link["target"] = "_blank"
        link["rel"] = "nofollow noopener"
        link.string = external_url
        replacement.append(link)
    tag.replace_with(replacement)
    current = replacement.next_sibling
    while isinstance(current, NavigableString):
        next_sibling = current.next_sibling
        if re.fullmatch(r'"?\s*/?>\s*', str(current)):
            current.extract()
            counters["broken_media_tail_removed"] += 1
            current = next_sibling
            continue
        break
    counters["missing_media"] += 1


def rewrite_attributes(
    soup: BeautifulSoup,
    current_src_file: Path,
    current_dst_file: Path,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    access_denied_member_pages: set[str],
) -> None:
    for tag in soup.find_all(True):
        if not isinstance(getattr(tag, "attrs", None), dict):
            continue

        for attribute_name in list(tag.attrs):
            if attribute_name.lower().startswith("on"):
                del tag.attrs[attribute_name]
                counters["event_attrs_removed"] += 1

        if tag.name == "a":
            href = tag.get("href")
            if href and href.strip().lower().startswith("javascript:"):
                del tag.attrs["href"]
                counters["javascript_hrefs_neutralized"] += 1

        rewrite_style_urls(tag, current_src_file, current_dst_file, src_root, out_root, counters, html_cache, image_aliases)

        if tag.name in {"iframe", "embed", "object"}:
            embed_url = tag.get("src") or tag.get("data")
            if not embed_url:
                for param in tag.find_all("param"):
                    if (param.get("name") or "").lower() == "movie":
                        embed_url = param.get("value")
                        break
            if embed_url:
                rewritten = rewrite_url(
                    embed_url,
                    current_src_file=current_src_file,
                    current_dst_file=current_dst_file,
                    src_root=src_root,
                    out_root=out_root,
                    counters=counters,
                    html_cache=html_cache,
                    image_aliases=image_aliases,
                    attribute_name="src",
                )
                if rewritten:
                    if rewritten.startswith("http://") or rewritten.startswith("https://"):
                        replace_embed_with_note(tag, rewritten, counters)
                    else:
                        replace_embed_with_note(tag, mirror_path_to_external(embed_url) or embed_url, counters)
                else:
                    replace_embed_with_note(tag, mirror_path_to_external(embed_url) or embed_url, counters)
            else:
                tag.decompose()
                counters["embeds_replaced"] += 1
            continue

        for attribute in ("href", "src", "poster", "background", "data"):
            if not tag.has_attr(attribute):
                continue

            original = tag[attribute]
            if (
                tag.name == "a"
                and attribute == "href"
                and is_access_denied_primary_member_link(
                    original,
                    current_src_file=current_src_file,
                    src_root=src_root,
                    access_denied_member_pages=access_denied_member_pages,
                )
            ):
                del tag.attrs["href"]
                tag["class"] = list(dict.fromkeys([*(tag.get("class") or []), "archive-disabled-member-link"]))
                counters["member_links_disabled"] += 1
                continue

            rewritten = rewrite_url(
                original,
                current_src_file=current_src_file,
                current_dst_file=current_dst_file,
                src_root=src_root,
                out_root=out_root,
                counters=counters,
                html_cache=html_cache,
                image_aliases=image_aliases,
                attribute_name=attribute,
            )

            if rewritten is None:
                if tag.name == "img" and attribute == "src":
                    replace_missing_media(tag, mirror_path_to_external(original), counters)
                elif tag.name == "a" and attribute == "href":
                    external = mirror_path_to_external(original)
                    if external:
                        tag[attribute] = external
                        counters["links_externalized"] += 1
                    else:
                        tag.unwrap()
                else:
                    del tag[attribute]
                continue

            if tag.name == "a" and attribute == "href":
                rewritten = maybe_rewrite_anchor_to_media_viewer(
                    rewritten,
                    current_dst_file=current_dst_file,
                    out_root=out_root,
                    counters=counters,
                )

            if rewritten != original:
                tag[attribute] = rewritten


def sanitize_page(
    src_file: Path,
    dst_file: Path,
    *,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    access_denied_member_pages: set[str],
) -> None:
    soup = BeautifulSoup(src_file.read_text(encoding="utf-8", errors="replace"), "lxml")
    html = soup.html
    if html is not None:
        html["lang"] = "ru"
    body = soup.body
    if body is not None:
        body["class"] = list(dict.fromkeys([*body.get("class", []), "archive-readonly"]))

    remove_head_noise(soup, counters)
    replace_poll_forms_with_results(src_file, soup, counters)
    remove_forms_and_scripts(soup, counters)
    remove_quick_reply_fragments(soup, counters)
    remove_session_lines(soup, counters)
    strip_online_state(soup, counters)
    remove_blocked_links(soup, counters)
    remove_contact_actions(soup, counters)
    remove_by_text_patterns(soup, counters)
    remove_readonly_capability_blocks(soup, counters)
    normalize_archive_state(soup, counters)
    add_primary_archive_search_link(soup)
    rewrite_attributes(
        soup,
        src_file,
        dst_file,
        src_root,
        out_root,
        counters,
        html_cache,
        image_aliases,
        access_denied_member_pages,
    )
    cleanup_empty_tags(soup)

    document = str(soup)
    if document.lower().startswith("<html"):
        document = "<!DOCTYPE html>\n" + document
    write_text(dst_file, document)
    counters["pages_written"] += 1



def scan_forbidden_patterns(out_root: Path) -> dict[str, int]:
    counts = {key: 0 for key in FORBIDDEN_SCAN_PATTERNS}
    for path in out_root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in {".html", ".css", ".js", ".txt", ".json"}:
            continue
        try:
            content = path.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        for key, needle in FORBIDDEN_SCAN_PATTERNS.items():
            counts[key] += content.count(needle)
    return counts


def maybe_scan_forbidden_patterns(out_root: Path, options: BuildOptions) -> dict[str, int] | None:
    if options.fast:
        return None
    return scan_forbidden_patterns(out_root)


def primary_page_dependencies(src_file: Path) -> tuple[Path, ...]:
    dependencies: list[Path] = [src_file]
    result_file = src_file.with_name(f"{src_file.name}@vote=viewresult")
    if result_file.exists():
        dependencies.append(result_file)
    return tuple(dependencies)


def build_report_metadata(counters: Counter[str], options: BuildOptions) -> dict[str, object]:
    return {
        "incremental": options.incremental,
        "fast": options.fast,
        "assets_written": counters["assets_written"] + counters["forum_assets_written"],
        "assets_reused": counters["assets_reused"] + counters["forum_assets_reused"],
        "pages_reused": counters["pages_reused"],
        "media_viewers_updated": counters["media_viewers_updated"],
        "media_viewers_reused": counters["media_viewers_reused"],
        "image_aliases_written": counters["image_aliases_written"],
        "image_aliases_reused": counters["image_aliases_reused"],
        "forbidden_scan_skipped": options.fast,
    }



def build_archive(
    src_root: Path,
    out_root: Path,
    forum_dir_name: str,
    report_path: Path,
    options: BuildOptions,
) -> dict[str, object]:
    src_forum_dir = src_root / forum_dir_name
    dst_forum_dir = out_root / forum_dir_name
    counters: Counter[str] = Counter()
    html_cache: dict[Path, bool] = {}
    image_aliases: dict[Path, Path] = {}

    if not src_root.is_dir():
        raise FileNotFoundError(f"Source root does not exist: {src_root}")
    if not src_forum_dir.is_dir():
        raise FileNotFoundError(f"Forum directory does not exist: {src_forum_dir}")

    if path_exists(out_root) and not options.incremental:
        shutil.rmtree(out_root)
    out_root.mkdir(parents=True, exist_ok=True)

    for child in src_root.iterdir():
        if child.name == forum_dir_name or child.name.endswith(".WD3"):
            continue
        target = out_root / child.name
        if child.is_dir():
            copy_tree_without_wd3(
                child,
                target,
                relative_prefix=Path(child.name),
                out_root=out_root,
                counters=counters,
                options=options,
                image_aliases=image_aliases,
            )
        elif child.is_file():
            if not should_copy_asset(Path(child.name)):
                continue
            mirror_asset_file(child, target, out_root, counters, options, image_aliases)

    dst_forum_dir.mkdir(parents=True, exist_ok=True)
    source_css = src_forum_dir / "1-ltr.css"
    if source_css.exists():
        ensure_copied_file(
            source_css,
            dst_forum_dir / "1-ltr.css",
            counters=counters,
            options=options,
            count_key="forum_assets_copied",
            written_key="forum_assets_written",
            reused_key="forum_assets_reused",
        )
    ensure_generated_text(
        dst_forum_dir / "archive.css",
        ARCHIVE_CSS,
        options=options,
        counters=counters,
        count_key="forum_assets_copied",
        written_key="forum_assets_written",
        reused_key="forum_assets_reused",
    )

    access_denied_member_pages = collect_access_denied_primary_member_pages(src_forum_dir)
    kept_pages = []
    skipped_pages = []
    for child in sorted(src_forum_dir.iterdir(), key=lambda path: path.name):
        relative_name = child.name
        if child.is_dir():
            if is_forbidden_forum_path(relative_name):
                skipped_pages.append(relative_name)
            continue
        if relative_name.endswith(".WD3"):
            continue
        if is_kept_forum_page(relative_name):
            if is_access_denied_capture(child) and not is_primary_member_page(relative_name):
                skipped_pages.append(relative_name)
                counters["access_denied_pages_skipped"] += 1
                counters["pages_skipped"] += 1
                continue
            kept_pages.append(relative_name)
            dst_file = dst_forum_dir / forum_output_name(relative_name)
            if is_generated_file_fresh(dst_file, options=options, source_paths=primary_page_dependencies(child)):
                counters["pages_written"] += 1
                counters["pages_reused"] += 1
                continue
            sanitize_page(
                child,
                dst_file,
                src_root=src_root,
                out_root=out_root,
                counters=counters,
                html_cache=html_cache,
                image_aliases=image_aliases,
                access_denied_member_pages=access_denied_member_pages,
            )
        else:
            skipped_pages.append(relative_name)
            counters["pages_skipped"] += 1

    write_text(out_root / ".nojekyll", "")
    search_index = build_search_bundle(dst_forum_dir, collect_primary_search_documents(dst_forum_dir))

    forbidden_scan = maybe_scan_forbidden_patterns(out_root, options)
    safe_skipped_pages_sample = [name for name in skipped_pages if is_report_safe_text(name)][:150]
    report = {
        "source_root": path_to_posix(src_root),
        "output_root": path_to_posix(out_root),
        "forum_dir": forum_dir_name,
        "build": build_report_metadata(counters, options),
        "search_index": search_index,
        "summary": {
            "kept_pages": len(kept_pages),
            "skipped_pages": len(skipped_pages),
            "pages_written": counters["pages_written"],
            "assets_copied": counters["assets_copied"] + counters["forum_assets_copied"],
            "links_rewritten_local": counters["links_rewritten_local"],
            "links_externalized": counters["links_externalized"],
            "embeds_replaced": counters["embeds_replaced"],
            "missing_media": counters["missing_media"],
            "scripts_removed": counters["scripts_removed"],
            "forms_removed": counters["forms_removed"],
            "blocked_links_removed": counters["blocked_links_removed"],
            "member_links_disabled": counters["member_links_disabled"],
            "contact_links_removed": counters["contact_links_removed"],
            "state_icons_normalized": counters["state_icons_normalized"],
            "online_classes_removed": counters["online_classes_removed"],
            "media_viewers_written": counters["media_viewers_written"],
            "image_links_rewritten_to_viewers": counters["image_links_rewritten_to_viewers"],
        },
        "kept_pages": kept_pages,
        "skipped_pages_sample": safe_skipped_pages_sample,
        "forbidden_pattern_scan": forbidden_scan,
    }
    write_json(report_path, report, pretty=True)
    return report


def read_html_document(path: Path) -> str:
    data = path.read_bytes()
    try:
        return data.decode("utf-8")
    except UnicodeDecodeError:
        pass

    decoded = UnicodeDammit(data, is_html=True).unicode_markup
    if decoded is not None:
        return decoded
    return data.decode("cp1251", errors="replace")


def collapse_inline_whitespace(value: str) -> str:
    return re.sub(r"\s+", " ", value.replace("\xa0", " ")).strip()


def normalize_search_text(value: str) -> str:
    normalized = value.casefold().replace("С‘", "Рµ")
    normalized = re.sub(r"[^0-9a-zР°-СЏ]+", " ", normalized)
    return re.sub(r"\s+", " ", normalized).strip()


def tokenize_search_text(value: str) -> list[str]:
    tokens = [token for token in normalize_search_text(value).split(" ") if len(token) >= 2]
    return list(dict.fromkeys(tokens))


def truncate_search_excerpt(value: str, limit: int = SEARCH_EXCERPT_LENGTH) -> str:
    text = collapse_inline_whitespace(value)
    if len(text) <= limit:
        return text
    shortened = text[: limit + 1]
    split_at = shortened.rfind(" ")
    if split_at >= limit // 2:
        shortened = shortened[:split_at]
    else:
        shortened = shortened[:limit]
    return shortened.rstrip(" ,.;:-") + "вЂ¦"


def search_term_bucket(token: str, bucket_count: int = SEARCH_TERM_BUCKETS) -> int:
    hash_value = 2166136261
    for char in token:
        hash_value ^= ord(char)
        hash_value = (hash_value * 16777619) & 0xFFFFFFFF
    return hash_value % bucket_count


def render_search_page(site_title: str) -> str:
    return SEARCH_PAGE_TEMPLATE.replace("__SITE_TITLE__", escape(site_title))


def render_search_js() -> str:
    return SEARCH_JS.replace("__RESULTS_PER_PAGE__", str(SEARCH_RESULTS_PAGE_SIZE))


def render_search_data_js(filename: str, data: object) -> str:
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    key = json.dumps(filename, ensure_ascii=False)
    return (
        "window.__archiveSearchData = window.__archiveSearchData || Object.create(null);\n"
        f"window.__archiveSearchData[{key}] = {payload};\n"
    )


def write_search_bundle_payload(search_root: Path, filename: str, data: object) -> None:
    write_json(search_root / filename, data)
    if filename.endswith(".json"):
        write_text(search_root / f"{filename[:-5]}.data.js", render_search_data_js(filename, data))


def extract_text(node: Tag | None) -> str:
    if node is None:
        return ""
    return collapse_inline_whitespace(node.get_text(" ", strip=True))


def search_content_text(container: Tag | None) -> tuple[str, str]:
    if container is None:
        return "", ""
    fragment = BeautifulSoup(str(container), "lxml").find(True)
    if fragment is None:
        return "", ""
    for selector in ("blockquote", ".quote-box", "cite", ".lastedit"):
        for tag in list(fragment.select(selector)):
            tag.decompose()
    text = extract_text(fragment)
    return text, truncate_search_excerpt(text)


def primary_post_sort_key(author_line: str) -> str:
    match = re.search(r"(\d{1,2})\s+([Рђ-РЇР°-СЏРЃС‘]+)\s+(\d{4})\s*-\s*(\d{1,2}):(\d{2})", author_line)
    if not match:
        return ""

    day, month_token, year, hour, minute = match.groups()
    month_key = month_token.casefold().replace("С‘", "Рµ")
    month_map = {
        "СЏРЅРІ": "01",
        "С„РµРІ": "02",
        "РјР°СЂ": "03",
        "Р°РїСЂ": "04",
        "РјР°Р№": "05",
        "РјР°СЏ": "05",
        "РёСЋРЅ": "06",
        "РёСЋР»": "07",
        "Р°РІРі": "08",
        "СЃРµРЅ": "09",
        "СЃРµРЅС‚": "09",
        "РѕРєС‚": "10",
        "РЅРѕСЏ": "11",
        "РґРµРє": "12",
    }
    month = next((value for key, value in month_map.items() if month_key.startswith(key)), "")
    if not month:
        return ""
    return f"{year}-{month}-{int(day):02d} {int(hour):02d}:{minute}:00"


def extract_primary_posted_at(author_line: str) -> str:
    match = re.search(r"\sРІ\s(.+)$", author_line)
    if match:
        return collapse_inline_whitespace(match.group(1))
    return author_line


def extract_secondary_posted_at(post: Tag) -> tuple[str, str]:
    permalink = extract_text(post.select_one("a.permalink"))
    sort_key = ""
    timestamp = post.get("data-posted")
    if isinstance(timestamp, str) and timestamp.isdigit():
        sort_key = timestamp.zfill(12)
    return permalink, sort_key


def extract_search_site_title(archive_root: Path) -> str:
    index_path = archive_root / "index.html"
    if not index_path.is_file():
        return archive_root.name
    soup = BeautifulSoup(read_html_document(index_path), "lxml")
    for selector in ("#site-title", "#pun-title .title-logo span", "#brd-title h1", "title"):
        value = extract_text(soup.select_one(selector))
        if value:
            return value
    return archive_root.name


def add_primary_archive_search_link(soup: BeautifulSoup) -> None:
    nav = soup.select_one("ul.linklist.navlinks")
    if nav is None:
        return
    existing = nav.find("a", href=re.compile(r"^search/(?:index\.html)?$"))
    if existing is not None:
        existing["href"] = "search/index.html"
        return

    icon_source = nav.select_one("#i_icon_mini_search")
    icon_attrs = dict(icon_source.attrs) if icon_source is not None else None
    target_item = icon_source.find_parent("li") if icon_source is not None else None
    if target_item is None:
        target_item = soup.new_tag("li")
        nav.append(target_item)
    target_item.clear()

    anchor = soup.new_tag("a")
    anchor["href"] = "search/index.html"
    anchor["class"] = ["mainmenu"]
    if icon_attrs is not None:
        icon = soup.new_tag("img")
        for key, value in icon_attrs.items():
            icon[key] = value
        anchor.append(icon)
        anchor.append(" ")
    anchor.append("РџРѕРёСЃРє Р°СЂС…РёРІР°")
    target_item.append(anchor)
    target_item.append(" \xa0")


def add_secondary_archive_search_link(soup: BeautifulSoup) -> None:
    nav = soup.select_one("#pun-navlinks ul.container")
    if nav is None:
        return
    existing = nav.find("a", href=re.compile(r"^search/(?:index\.html)?$"))
    if existing is not None:
        existing["href"] = "search/index.html"
        return

    item = soup.new_tag("li")
    item["id"] = "navsearch-archive"
    anchor = soup.new_tag("a")
    anchor["href"] = "search/index.html"
    label = soup.new_tag("span")
    label.string = "РџРѕРёСЃРє Р°СЂС…РёРІР°"
    anchor.append(label)
    item.append(anchor)

    rules_item = nav.find("li", id="navrules")
    if rules_item is not None:
        rules_item.insert_after(item)
    else:
        nav.append(item)


def collect_primary_search_documents(archive_root: Path) -> list[dict[str, str]]:
    documents: list[dict[str, str]] = []

    for page in sorted(archive_root.iterdir(), key=lambda path: path.name):
        if not page.is_file() or not PRIMARY_TOPIC_OUTPUT_PATTERN.match(page.name):
            continue

        soup = BeautifulSoup(read_html_document(page), "lxml")
        topic_title = extract_text(soup.select_one("h1.page-title a")) or extract_text(soup.select_one("h1.page-title"))
        breadcrumb_items = [extract_text(node) for node in soup.select(".pathname-box a.nav span, .pathname-box a.nav")]
        breadcrumb_items = [item for item in breadcrumb_items if item]
        forum_title = breadcrumb_items[-1] if breadcrumb_items else ""

        for post in soup.select("div.post[id]"):
            post_id = collapse_inline_whitespace(post.get("id") or "")
            if not post_id.startswith("p"):
                continue

            author = extract_text(post.select_one(".postprofile dt strong")) or extract_text(post.select_one("p.author"))
            author_line = extract_text(post.select_one("p.author"))
            posted_at = extract_primary_posted_at(author_line)
            body_text, excerpt = search_content_text(post.select_one(".content"))
            search_text = " ".join(part for part in (topic_title, forum_title, author, body_text) if part)
            documents.append(
                {
                    "url": f"../{page.name}#{post_id}",
                    "post_id": post_id,
                    "topic_title": topic_title,
                    "forum_title": forum_title,
                    "author": author,
                    "posted_at": posted_at,
                    "sort_key": primary_post_sort_key(author_line),
                    "excerpt": excerpt,
                    "search_text": search_text,
                }
            )

    return documents


def collect_secondary_search_documents(archive_root: Path) -> list[dict[str, str]]:
    documents: list[dict[str, str]] = []

    for page in sorted(archive_root.iterdir(), key=lambda path: path.name):
        if not page.is_file() or not SECONDARY_TOPIC_OUTPUT_PATTERN.match(page.name):
            continue

        soup = BeautifulSoup(read_html_document(page), "lxml")
        topic_title = extract_text(soup.select_one("#pun-main > h1 span")) or extract_text(soup.select_one("#pun-main > h1"))
        breadcrumb_links = [extract_text(node) for node in soup.select("#pun-crumbs1 a")]
        breadcrumb_links = [item for item in breadcrumb_links if item]
        forum_title = breadcrumb_links[-1] if breadcrumb_links else ""

        for post in soup.select("div.post[id]"):
            post_id = collapse_inline_whitespace(post.get("id") or "")
            if not post_id.startswith("p"):
                continue

            author = extract_text(post.select_one(".pa-author a")) or extract_text(post.select_one(".pa-author strong"))
            posted_at, sort_key = extract_secondary_posted_at(post)
            body_text, excerpt = search_content_text(post.select_one(".post-content"))
            search_text = " ".join(part for part in (topic_title, forum_title, author, body_text) if part)
            documents.append(
                {
                    "url": f"../{page.name}#{post_id}",
                    "post_id": post_id,
                    "topic_title": topic_title,
                    "forum_title": forum_title,
                    "author": author,
                    "posted_at": posted_at,
                    "sort_key": sort_key,
                    "excerpt": excerpt,
                    "search_text": search_text,
                }
            )

    return documents


def build_search_bundle(archive_root: Path, documents: list[dict[str, str]]) -> dict[str, object]:
    site_title = extract_search_site_title(archive_root)
    search_root = archive_root / "search"
    if search_root.exists():
        shutil.rmtree(search_root)
    search_root.mkdir(parents=True, exist_ok=True)

    postings: dict[int, dict[str, list[int]]] = defaultdict(dict)
    doc_shards: list[list[dict[str, object]]] = []
    current_shard: list[dict[str, object]] = []

    for doc_id, document in enumerate(documents):
        search_text = document.pop("search_text")
        doc_record = {
            "doc_id": doc_id,
            "url": document["url"],
            "post_id": document["post_id"],
            "topic_title": document["topic_title"],
            "forum_title": document["forum_title"],
            "author": document["author"],
            "posted_at": document["posted_at"],
            "sort_key": document["sort_key"],
            "excerpt": document["excerpt"],
        }
        current_shard.append(doc_record)
        if len(current_shard) == SEARCH_DOC_SHARD_SIZE:
            doc_shards.append(current_shard)
            current_shard = []

        for token in tokenize_search_text(search_text):
            bucket = postings[search_term_bucket(token)]
            bucket.setdefault(token, []).append(doc_id)

    if current_shard or not doc_shards:
        doc_shards.append(current_shard)

    for shard_number, shard_docs in enumerate(doc_shards):
        write_search_bundle_payload(search_root, f"docs-{shard_number:03d}.json", shard_docs)

    for bucket_number in range(SEARCH_TERM_BUCKETS):
        payload = postings.get(bucket_number, {})
        payload = {token: doc_ids for token, doc_ids in sorted(payload.items())}
        write_search_bundle_payload(search_root, f"terms-{bucket_number:02d}.json", payload)

    manifest = {
        "enabled": True,
        "site_title": site_title,
        "documents": len(documents),
        "term_buckets": SEARCH_TERM_BUCKETS,
        "doc_shard_size": SEARCH_DOC_SHARD_SIZE,
        "doc_shards": len(doc_shards),
        "output_dir": "search",
    }
    write_search_bundle_payload(search_root, "manifest.json", manifest)
    write_text(search_root / "index.html", render_search_page(site_title))
    write_text(search_root / "search.css", SEARCH_CSS)
    write_text(search_root / "search.js", render_search_js())

    return {
        "enabled": True,
        "documents": len(documents),
        "term_buckets": SEARCH_TERM_BUCKETS,
        "doc_shards": len(doc_shards),
        "output_dir": path_to_posix(search_root),
    }


def ensure_utf8_head(soup: BeautifulSoup) -> Tag:
    html = soup.html
    if html is None:
        html = soup.new_tag("html")
        while soup.contents:
            html.append(soup.contents[0].extract())
        soup.append(html)

    head = soup.head
    if head is None:
        head = soup.new_tag("head")
        html.insert(0, head)

    for meta in list(head.find_all("meta")):
        http_equiv = (meta.get("http-equiv") or "").lower()
        if meta.has_attr("charset") or http_equiv == "content-type":
            meta.decompose()

    charset = soup.new_tag("meta")
    charset["charset"] = "utf-8"
    head.insert(0, charset)
    return head


def is_secondary_forum_page(name: str) -> bool:
    return any(pattern.match(name) for pattern in SECONDARY_KEEP_FILE_PATTERNS)


def is_secondary_blocked_href(href: str) -> bool:
    return any(
        snippet in href
        for snippet in (
            "login.php",
            "register.php",
            "messages.php",
            "invitation.php",
            "connect.php",
            "export.php",
            "online.php",
        )
    ) or (
        "search.php" in href and "search.php@action=show_user_posts&user_id=" not in href
    )


def secondary_output_relative(relative_source: Path) -> Path:
    if relative_source == Path("7dneyleta.ru/default.htm"):
        return Path("7dneyleta.ru/index.html")
    if relative_source == Path("7daysofsummer.ru/tracklist"):
        return Path("7daysofsummer.ru/index.html")
    return relative_source.parent / f"{relative_source.name}.html"


def collect_secondary_pages(src_root: Path) -> list[Path]:
    pages: list[Path] = []
    forum_dir = src_root / "7dneyleta.ru"
    if forum_dir.is_dir():
        for child in sorted(forum_dir.iterdir(), key=lambda item: item.name):
            if child.is_file() and is_secondary_forum_page(child.name):
                pages.append(child)

    tracklist = src_root / "7daysofsummer.ru" / "tracklist"
    if tracklist.is_file():
        pages.append(tracklist)
    return pages



def copy_static_assets_without_html(
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    options: BuildOptions,
    image_aliases: dict[Path, Path],
) -> None:
    for source_file in sorted(src_root.rglob("*")):
        if not source_file.is_file() or source_file.name.endswith(".WD3"):
            continue
        relative = source_file.relative_to(src_root)
        if not should_copy_asset(relative):
            continue
        if is_probably_html_file(source_file, html_cache):
            continue
        target = out_root / relative
        mirror_asset_file(source_file, target, out_root, counters, options, image_aliases)


def parse_meta_refresh_target(path: Path) -> str | None:
    try:
        soup = BeautifulSoup(read_html_document(path), "lxml")
    except OSError:
        return None

    for meta in soup.find_all("meta"):
        if (meta.get("http-equiv") or "").lower() != "refresh":
            continue
        content = meta.get("content") or ""
        match = re.search(r"url\s*=\s*(.+)$", content, flags=re.IGNORECASE)
        if not match:
            continue
        return unescape(match.group(1).strip().strip("\"'"))
    return None


def remove_selected_fragments(soup: BeautifulSoup, selectors: Iterable[str], counters: Counter[str]) -> None:
    for selector in selectors:
        for tag in list(soup.select(selector)):
            tag.decompose()
            counters["live_fragments_removed"] += 1


def prune_secondary_head(soup: BeautifulSoup, head: Tag, counters: Counter[str]) -> None:
    for script in list(head.find_all("script")):
        script.decompose()
        counters["scripts_removed"] += 1

    for meta in list(head.find_all("meta")):
        if (meta.get("http-equiv") or "").lower() == "refresh":
            meta.decompose()

    for link in list(head.find_all("link", href=True)):
        rels = {str(item).lower() for item in (link.get("rel") or [])}
        if "stylesheet" in rels or link.get("href") == "archive.css":
            continue
        link.decompose()


def strip_secondary_blocked_links(soup: BeautifulSoup, counters: Counter[str]) -> None:
    for anchor in list(soup.find_all("a", href=True)):
        href = anchor["href"]
        if not is_secondary_blocked_href(href):
            continue

        parent = anchor.parent
        if parent is not None and parent.name == "li" and parent.get_text(" ", strip=True) == anchor.get_text(" ", strip=True):
            parent.decompose()
        else:
            anchor.unwrap()
        counters["blocked_links_removed"] += 1


def remove_secondary_forum_live_fragments(soup: BeautifulSoup, counters: Counter[str]) -> None:
    remove_selected_fragments(
        soup,
        (
            "#mybb-counter",
            "#pun-ulinks",
            "#pun-status",
            "#navregister",
            "#navlogin",
            "#navsearch",
            "#navmessages",
        ),
        counters,
    )

    for form in list(soup.find_all("form")):
        form.decompose()
        counters["forms_removed"] += 1

    for script in list(soup.find_all("script")):
        script.decompose()
        counters["scripts_removed"] += 1


def remove_tracklist_live_fragments(soup: BeautifulSoup, counters: Counter[str]) -> None:
    remove_selected_fragments(
        soup,
        (
            "#navregister",
            "#navlogin",
            "#brd-visit",
            ".audio_page_player",
            "td.adm",
            "th.adm",
            ".admin-menu",
        ),
        counters,
    )

    for form in list(soup.find_all("form")):
        form.decompose()
        counters["forms_removed"] += 1

    for script in list(soup.find_all("script")):
        script.decompose()
        counters["scripts_removed"] += 1


def resolve_tracklist_virtual_target(current_src_file: Path, url_path: str, src_root: Path) -> Path | None:
    if current_src_file.parent.name != "7daysofsummer.ru":
        return None
    if url_path not in TRACKLIST_SELF_ALIASES:
        return None
    candidate = src_root / "7daysofsummer.ru" / "tracklist"
    return candidate if candidate.exists() else None


def rewrite_secondary_url(
    url: str,
    *,
    current_src_file: Path,
    current_dst_file: Path,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    published_pages: dict[Path, Path],
    attribute_name: str,
    depth: int = 0,
) -> str | None:
    parsed = urlsplit(url)
    if parsed.scheme in {"javascript", "mailto", "tel", "data"}:
        return url
    if not parsed.path and parsed.fragment:
        return url

    if parsed.scheme in {"http", "https"} and parsed.netloc:
        absolute = urlunsplit((parsed.scheme, parsed.netloc, parsed.path, parsed.query, ""))
        local_target = mirror_local_path_from_absolute(absolute, src_root)
        if local_target and local_target.exists():
            rel_target = out_root / local_target.relative_to(src_root)
            rel_target = resolve_published_image_target(rel_target, image_aliases)
            counters["links_rewritten_local"] += 1
            return urlunsplit(("", "", relative_url(current_dst_file, rel_target), "", parsed.fragment))
        return url

    path = parsed.path
    if not path:
        return url
    if path.startswith("/"):
        return None
    if path in {"archive.css", "search", "search/", "search/index.html"}:
        return path

    source_target = resolve_tracklist_virtual_target(current_src_file, path, src_root)
    if source_target is None:
        source_target = source_target_from_relative(current_src_file, path)

    try:
        relative_source_target = source_target.relative_to(src_root)
    except ValueError:
        relative_source_target = None

    if source_target.exists() and relative_source_target is not None:
        mapped = published_pages.get(source_target.resolve(strict=False))
        if mapped is not None:
            counters["internal_page_links_rewritten"] += 1
            return urlunsplit(("", "", relative_url(current_dst_file, mapped), "", parsed.fragment))

        if is_probably_html_file(source_target, html_cache):
            redirect_target = parse_meta_refresh_target(source_target)
            if redirect_target and depth < 5:
                rewritten = rewrite_secondary_url(
                    redirect_target,
                    current_src_file=source_target,
                    current_dst_file=current_dst_file,
                    src_root=src_root,
                    out_root=out_root,
                    counters=counters,
                    html_cache=html_cache,
                    image_aliases=image_aliases,
                    published_pages=published_pages,
                    attribute_name=attribute_name,
                    depth=depth + 1,
                )
                if rewritten is None:
                    return None
                rewritten_parts = urlsplit(rewritten)
                fragment = parsed.fragment or rewritten_parts.fragment
                return urlunsplit((rewritten_parts.scheme, rewritten_parts.netloc, rewritten_parts.path, rewritten_parts.query, fragment))

            external = mirror_path_to_external(path)
            if external:
                counters["links_externalized"] += 1
                return external
            return None

        rel_target = out_root / relative_source_target
        rel_target = resolve_published_image_target(rel_target, image_aliases)
        counters["links_rewritten_local"] += 1
        return urlunsplit(("", "", relative_url(current_dst_file, rel_target), "", parsed.fragment))

    external = mirror_path_to_external(path)
    if external:
        counters["links_externalized"] += 1
        return external
    return None


def rewrite_secondary_attributes(
    soup: BeautifulSoup,
    current_src_file: Path,
    current_dst_file: Path,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    published_pages: dict[Path, Path],
) -> None:
    for tag in soup.find_all(True):
        if not isinstance(getattr(tag, "attrs", None), dict):
            continue

        for attribute_name in list(tag.attrs):
            if attribute_name.lower().startswith("on"):
                del tag.attrs[attribute_name]
                counters["event_attrs_removed"] += 1

        if tag.name == "a":
            href = tag.get("href")
            if href and href.strip().lower().startswith("javascript:"):
                del tag.attrs["href"]
                counters["javascript_hrefs_neutralized"] += 1

        for attribute in ("href", "src", "poster", "background", "data"):
            if not tag.has_attr(attribute):
                continue

            original = tag[attribute]
            rewritten = rewrite_secondary_url(
                original,
                current_src_file=current_src_file,
                current_dst_file=current_dst_file,
                src_root=src_root,
                out_root=out_root,
                counters=counters,
                html_cache=html_cache,
                image_aliases=image_aliases,
                published_pages=published_pages,
                attribute_name=attribute,
            )

            if rewritten is None:
                if tag.name == "img" and attribute == "src":
                    replace_missing_media(tag, mirror_path_to_external(original), counters)
                elif tag.name == "a" and attribute == "href":
                    external = mirror_path_to_external(original)
                    if external:
                        tag[attribute] = external
                        tag["target"] = "_blank"
                        tag["rel"] = "nofollow noopener"
                        counters["links_externalized"] += 1
                    else:
                        tag.unwrap()
                else:
                    del tag[attribute]
                continue

            if tag.name == "a" and attribute == "href":
                rewritten = maybe_rewrite_anchor_to_media_viewer(
                    rewritten,
                    current_dst_file=current_dst_file,
                    out_root=out_root,
                    counters=counters,
                )
                if rewritten.startswith(("http://", "https://")):
                    tag["target"] = "_blank"
                    tag["rel"] = "nofollow noopener"

            if rewritten != original:
                tag[attribute] = rewritten


def sanitize_secondary_page(
    src_file: Path,
    dst_file: Path,
    *,
    src_root: Path,
    out_root: Path,
    counters: Counter[str],
    html_cache: dict[Path, bool],
    image_aliases: dict[Path, Path],
    published_pages: dict[Path, Path],
) -> None:
    soup = BeautifulSoup(read_html_document(src_file), "lxml")
    if soup.html is not None:
        soup.html["lang"] = "ru"

    body = soup.body
    if body is not None:
        body["class"] = list(dict.fromkeys([*body.get("class", []), "archive-readonly"]))

    head = ensure_utf8_head(soup)
    prune_secondary_head(soup, head, counters)
    add_robots_noindex(soup, head)
    add_archive_stylesheet(soup, head)

    if src_file.parent.name == "7daysofsummer.ru":
        remove_tracklist_live_fragments(soup, counters)
    else:
        remove_secondary_forum_live_fragments(soup, counters)
        add_secondary_archive_search_link(soup)

    strip_secondary_blocked_links(soup, counters)
    rewrite_secondary_attributes(
        soup,
        src_file,
        dst_file,
        src_root,
        out_root,
        counters,
        html_cache,
        image_aliases,
        published_pages,
    )
    cleanup_empty_tags(soup)

    document = str(soup)
    if document.lower().startswith("<html"):
        document = "<!DOCTYPE html>\n" + document
    write_text(dst_file, document)
    counters["pages_written"] += 1



def build_secondary_archive(src_root: Path, out_root: Path, options: BuildOptions) -> dict[str, object]:
    if not src_root.is_dir():
        raise FileNotFoundError(f"Secondary source root does not exist: {src_root}")

    counters: Counter[str] = Counter()
    html_cache: dict[Path, bool] = {}
    image_aliases: dict[Path, Path] = {}
    kept_pages = collect_secondary_pages(src_root)

    if path_exists(out_root) and not options.incremental:
        shutil.rmtree(out_root)
    out_root.mkdir(parents=True, exist_ok=True)

    copy_static_assets_without_html(src_root, out_root, counters, html_cache, options, image_aliases)

    for host in ("7dneyleta.ru", "7daysofsummer.ru"):
        ensure_generated_text(
            out_root / host / "archive.css",
            ARCHIVE_CSS,
            options=options,
            counters=counters,
            count_key="assets_copied",
            written_key="assets_written",
            reused_key="assets_reused",
        )

    published_pages = {
        page.resolve(strict=False): out_root / secondary_output_relative(page.relative_to(src_root))
        for page in kept_pages
    }

    for src_file in kept_pages:
        dst_file = published_pages[src_file.resolve(strict=False)]
        if is_generated_file_fresh(dst_file, options=options, source_paths=(src_file,)):
            counters["pages_written"] += 1
            counters["pages_reused"] += 1
            continue
        sanitize_secondary_page(
            src_file,
            dst_file,
            src_root=src_root,
            out_root=out_root,
            counters=counters,
            html_cache=html_cache,
            image_aliases=image_aliases,
            published_pages=published_pages,
        )

    forum_search_root = out_root / "7dneyleta.ru"
    search_index = build_search_bundle(forum_search_root, collect_secondary_search_documents(forum_search_root))

    report = {
        "source_root": path_to_posix(src_root),
        "output_root": path_to_posix(out_root),
        "build": build_report_metadata(counters, options),
        "search_index": search_index,
        "summary": {
            "kept_pages": len(kept_pages),
            "pages_written": counters["pages_written"],
            "assets_copied": counters["assets_copied"],
            "links_rewritten_local": counters["links_rewritten_local"],
            "links_externalized": counters["links_externalized"],
            "missing_media": counters["missing_media"],
            "scripts_removed": counters["scripts_removed"],
            "forms_removed": counters["forms_removed"],
            "blocked_links_removed": counters["blocked_links_removed"],
            "media_viewers_written": counters["media_viewers_written"],
            "image_links_rewritten_to_viewers": counters["image_links_rewritten_to_viewers"],
        },
        "kept_pages": [path_to_posix(page.relative_to(src_root)) for page in kept_pages],
        "forbidden_pattern_scan": maybe_scan_forbidden_patterns(out_root, options),
    }
    return report


def render_landing_page(forum_href: str, trim_local_media_sentence: bool = False) -> str:
    landing = LANDING_PAGE.replace("__FORUM_HREF__", forum_href)
    if trim_local_media_sentence:
        landing = landing.replace(PRIMARY_LANDING_TRIMMED_SENTENCE, "")
    return landing



def write_multi_archive_landing_page(out_root: Path, primary_prefix: str, primary_forum_dir: str, secondary_prefix: str) -> None:
    landing = MULTI_ARCHIVE_LANDING_PAGE.replace("__PRIMARY_HREF__", f"{primary_prefix}/{primary_forum_dir}/index.html")
    landing = landing.replace("__SECONDARY_HREF__", f"{secondary_prefix}/7dneyleta.ru/index.html")
    write_text(out_root / "index.html", landing)



def has_existing_secondary_archive_output(out_root: Path, secondary_prefix: str) -> bool:
    return (out_root / secondary_prefix / "7dneyleta.ru" / "index.html").is_file()



def should_render_multi_archive_landing_page(
    out_root: Path,
    secondary_src: str,
    secondary_prefix: str,
    disable_secondary: bool,
) -> bool:
    if disable_secondary:
        return False
    secondary_src_root = Path(secondary_src).resolve()
    return secondary_src_root.is_dir() or has_existing_secondary_archive_output(out_root, secondary_prefix)



def write_root_outputs(
    out_root: Path,
    primary_prefix: str,
    primary_forum_dir: str,
    secondary_prefix: str,
    include_secondary: bool,
) -> None:
    write_text(out_root / ".nojekyll", "")
    if include_secondary:
        write_multi_archive_landing_page(out_root, primary_prefix, primary_forum_dir, secondary_prefix)
    else:
        write_text(out_root / "index.html", render_landing_page(f"{primary_prefix}/{primary_forum_dir}/index.html", trim_local_media_sentence=True))



def main() -> None:
    args = parse_args()
    out_root = Path(args.out).resolve()

    if args.only == "root-landing":
        include_secondary = should_render_multi_archive_landing_page(
            out_root,
            args.secondary_src,
            args.secondary_prefix,
            args.disable_secondary,
        )
        out_root.mkdir(parents=True, exist_ok=True)
        write_root_outputs(
            out_root,
            args.primary_prefix,
            args.forum_dir,
            args.secondary_prefix,
            include_secondary=include_secondary,
        )
        print(
            json.dumps(
                {
                    "partial_build": "root-landing",
                    "output_root": path_to_posix(out_root),
                    "landing_variant": "multi-archive" if include_secondary else "single-archive",
                    "written_files": [
                        path_to_posix(out_root / "index.html"),
                        path_to_posix(out_root / ".nojekyll"),
                    ],
                    "report_updated": False,
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return

    options = BuildOptions.from_args(args)
    src_root = Path(args.src).resolve()
    out_root = Path(args.out).resolve()
    report_path = Path(args.report).resolve()
    primary_out_root = out_root / args.primary_prefix
    secondary_src_root = Path(args.secondary_src).resolve()

    if path_exists(out_root) and not options.incremental:
        shutil.rmtree(out_root)
    out_root.mkdir(parents=True, exist_ok=True)

    report = build_archive(src_root, primary_out_root, args.forum_dir, report_path, options)
    secondary_report = None

    if not args.disable_secondary and secondary_src_root.is_dir():
        secondary_out_root = out_root / args.secondary_prefix
        secondary_report = build_secondary_archive(secondary_src_root, secondary_out_root, options)
        report["secondary_archive"] = secondary_report

    write_json(report_path, report, pretty=True)
    write_root_outputs(
        out_root,
        args.primary_prefix,
        args.forum_dir,
        args.secondary_prefix,
        include_secondary=secondary_report is not None,
    )

    print(json.dumps(report["summary"], ensure_ascii=False, indent=2))
    if secondary_report is not None:
        print(json.dumps({"secondary_archive": secondary_report["summary"]}, ensure_ascii=False, indent=2))

from datetime import datetime, timedelta, timezone

SEARCH_SCHEMA_VERSION = 2
SEARCH_FIELD_NAMES = ("body", "topic", "forum", "author")
SEARCH_DEFAULT_FIELD = "body"
SEARCH_DATE_INDEX_FILENAME = "dates.json"
SECONDARY_FORUM_TIME_OFFSET_SECONDS = 3 * 60 * 60
SEARCH_V2_ASSET_CACHE: dict[str, str] = {}


def load_search_v2_asset(filename: str) -> str:
    cached = SEARCH_V2_ASSET_CACHE.get(filename)
    if cached is not None:
        return cached
    asset_path = Path(__file__).resolve().parent / filename
    cached = asset_path.read_text(encoding="utf-8")
    SEARCH_V2_ASSET_CACHE[filename] = cached
    return cached



def render_search_page(site_title: str) -> str:
    return load_search_v2_asset("search_v2_page.html").replace("__SITE_TITLE__", escape(site_title))



def render_search_css() -> str:
    return load_search_v2_asset("search_v2.css")



def render_search_js() -> str:
    return load_search_v2_asset("search_v2.js")



def render_search_worker_js() -> str:
    return load_search_v2_asset("search_v2_worker.js")



def write_search_bundle_payload(search_root: Path, filename: str, data: object) -> None:
    write_json(search_root / filename, data)



def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build a read-only GitHub Pages archive from offline forum dumps.")
    parser.add_argument("--src", help="Primary source dump root, e.g. 7dl_site")
    parser.add_argument("--out", required=True, help="Output directory, e.g. docs")
    parser.add_argument("--forum-dir", required=True, help="Primary forum directory inside source root")
    parser.add_argument("--report", help="Path to JSON build report")
    parser.add_argument("--primary-prefix", default="bl7dl-2x2forum-ru", help="Output subdirectory for the primary archive")
    parser.add_argument("--secondary-src", default="7dneyleta_site", help="Secondary source dump root")
    parser.add_argument("--secondary-prefix", default="7dneyleta-ru", help="Output subdirectory for the secondary archive")
    parser.add_argument(
        "--incremental",
        action="store_true",
        help="Reuse existing output files when inputs look unchanged; does not prune stale artifacts.",
    )
    parser.add_argument(
        "--fast",
        action="store_true",
        help="Shortcut local iteration mode: implies --incremental and skips the forbidden-pattern scan.",
    )
    parser.add_argument(
        "--only",
        choices=("all", "root-landing", "search"),
        default="all",
        help="Limit the run to one output area. 'root-landing' rewrites only docs/index.html and docs/.nojekyll. 'search' rebuilds only search bundles from existing docs/.",
    )
    parser.add_argument("--disable-secondary", action="store_true", help="Skip building the secondary archive")
    args = parser.parse_args()
    if args.only not in {"root-landing", "search"}:
        if not args.src:
            parser.error("--src is required unless --only root-landing or --only search is used")
    if args.only != "root-landing" and not args.report:
        parser.error("--report is required unless --only root-landing is used")
    return args



def search_content_text(container: Tag | None) -> tuple[str, str]:
    if container is None:
        return "", ""
    fragment = BeautifulSoup(str(container), "lxml").find(True)
    if fragment is None:
        return "", ""
    for selector in (".lastedit",):
        for tag in list(fragment.select(selector)):
            tag.decompose()
    text = extract_text(fragment)
    return text, truncate_search_excerpt(text)



def extract_secondary_posted_at(post: Tag) -> tuple[str, str]:
    permalink = extract_text(post.select_one("a.permalink"))
    if re.match(r"^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$", permalink):
        return permalink, permalink

    sort_key = ""
    timestamp = post.get("data-posted")
    if isinstance(timestamp, str) and timestamp.isdigit():
        dt = datetime.fromtimestamp(int(timestamp), timezone.utc) + timedelta(seconds=SECONDARY_FORUM_TIME_OFFSET_SECONDS)
        sort_key = dt.strftime("%Y-%m-%d %H:%M:%S")
    return permalink, sort_key



def collect_primary_search_documents(archive_root: Path) -> list[dict[str, str]]:
    documents: list[dict[str, str]] = []

    for page in sorted(archive_root.iterdir(), key=lambda path: path.name):
        if not page.is_file() or not PRIMARY_TOPIC_OUTPUT_PATTERN.match(page.name):
            continue

        soup = BeautifulSoup(read_html_document(page), "lxml")
        topic_title = extract_text(soup.select_one("h1.page-title a")) or extract_text(soup.select_one("h1.page-title"))
        breadcrumb_items = [extract_text(node) for node in soup.select(".pathname-box a.nav span, .pathname-box a.nav")]
        breadcrumb_items = [item for item in breadcrumb_items if item]
        forum_title = breadcrumb_items[-1] if breadcrumb_items else ""

        for post in soup.select("div.post[id]"):
            post_id = collapse_inline_whitespace(post.get("id") or "")
            if not post_id.startswith("p"):
                continue

            author = extract_text(post.select_one(".postprofile dt strong")) or extract_text(post.select_one("p.author"))
            author_line = extract_text(post.select_one("p.author"))
            posted_at = extract_primary_posted_at(author_line)
            body_text, excerpt = search_content_text(post.select_one(".content"))
            documents.append(
                {
                    "url": f"../{page.name}#{post_id}",
                    "post_id": post_id,
                    "topic_title": topic_title,
                    "forum_title": forum_title,
                    "author": author,
                    "posted_at": posted_at,
                    "sort_key": primary_post_sort_key(author_line),
                    "excerpt": excerpt,
                    "body_text": body_text,
                }
            )

    return documents



def collect_secondary_search_documents(archive_root: Path) -> list[dict[str, str]]:
    documents: list[dict[str, str]] = []

    for page in sorted(archive_root.iterdir(), key=lambda path: path.name):
        if not page.is_file() or not SECONDARY_TOPIC_OUTPUT_PATTERN.match(page.name):
            continue

        soup = BeautifulSoup(read_html_document(page), "lxml")
        topic_title = extract_text(soup.select_one("#pun-main > h1 span")) or extract_text(soup.select_one("#pun-main > h1"))
        breadcrumb_links = [extract_text(node) for node in soup.select("#pun-crumbs1 a")]
        breadcrumb_links = [item for item in breadcrumb_links if item]
        forum_title = breadcrumb_links[-1] if breadcrumb_links else ""

        for post in soup.select("div.post[id]"):
            post_id = collapse_inline_whitespace(post.get("id") or "")
            if not post_id.startswith("p"):
                continue

            author = extract_text(post.select_one(".pa-author a")) or extract_text(post.select_one(".pa-author strong"))
            posted_at, sort_key = extract_secondary_posted_at(post)
            body_text, excerpt = search_content_text(post.select_one(".post-content"))
            documents.append(
                {
                    "url": f"../{page.name}#{post_id}",
                    "post_id": post_id,
                    "topic_title": topic_title,
                    "forum_title": forum_title,
                    "author": author,
                    "posted_at": posted_at,
                    "sort_key": sort_key,
                    "excerpt": excerpt,
                    "body_text": body_text,
                }
            )

    return documents



def build_search_bundle(archive_root: Path, documents: list[dict[str, str]]) -> dict[str, object]:
    site_title = extract_search_site_title(archive_root)
    search_root = archive_root / "search"
    if search_root.exists():
        shutil.rmtree(search_root)
    search_root.mkdir(parents=True, exist_ok=True)

    field_postings = {field: defaultdict(dict) for field in SEARCH_FIELD_NAMES}
    field_lexicons = {field: set() for field in SEARCH_FIELD_NAMES}
    doc_shards: list[list[dict[str, object]]] = []
    current_shard: list[dict[str, object]] = []
    dated_documents: list[list[object]] = []

    for doc_id, document in enumerate(documents):
        doc_record = {
            "doc_id": doc_id,
            "url": document["url"],
            "post_id": document["post_id"],
            "topic_title": document["topic_title"],
            "forum_title": document["forum_title"],
            "author": document["author"],
            "posted_at": document["posted_at"],
            "sort_key": document["sort_key"],
            "excerpt": document["excerpt"],
            "body_text": document["body_text"],
        }
        current_shard.append(doc_record)
        if len(current_shard) == SEARCH_DOC_SHARD_SIZE:
            doc_shards.append(current_shard)
            current_shard = []

        if document["sort_key"]:
            dated_documents.append([document["sort_key"], doc_id])

        field_texts = {
            "body": document["body_text"],
            "topic": document["topic_title"],
            "forum": document["forum_title"],
            "author": document["author"],
        }
        for field, field_text in field_texts.items():
            for token in tokenize_search_text(field_text):
                bucket = field_postings[field][search_term_bucket(token)]
                bucket.setdefault(token, []).append(doc_id)
                field_lexicons[field].add(token)

    if current_shard or not doc_shards:
        doc_shards.append(current_shard)

    for shard_number, shard_docs in enumerate(doc_shards):
        write_search_bundle_payload(search_root, f"docs-{shard_number:03d}.json", shard_docs)

    for field in SEARCH_FIELD_NAMES:
        write_search_bundle_payload(search_root, f"lexicon-{field}.json", sorted(field_lexicons[field]))
        for bucket_number in range(SEARCH_TERM_BUCKETS):
            payload = field_postings[field].get(bucket_number, {})
            payload = {token: doc_ids for token, doc_ids in sorted(payload.items())}
            write_search_bundle_payload(search_root, f"terms-{field}-{bucket_number:02d}.json", payload)

    dated_documents.sort(key=lambda item: item[0])
    write_search_bundle_payload(search_root, SEARCH_DATE_INDEX_FILENAME, dated_documents)

    manifest = {
        "enabled": True,
        "schema_version": SEARCH_SCHEMA_VERSION,
        "site_title": site_title,
        "documents": len(documents),
        "fields": list(SEARCH_FIELD_NAMES),
        "default_field": SEARCH_DEFAULT_FIELD,
        "term_buckets": SEARCH_TERM_BUCKETS,
        "doc_shard_size": SEARCH_DOC_SHARD_SIZE,
        "doc_shards": len(doc_shards),
        "date_index": SEARCH_DATE_INDEX_FILENAME,
        "supports": {
            "boolean": True,
            "phrases": True,
            "prefix_wildcard": True,
            "field_search": True,
            "date_filters": True,
        },
        "output_dir": "search",
    }
    write_search_bundle_payload(search_root, "manifest.json", manifest)
    write_text(search_root / "index.html", render_search_page(site_title))
    write_text(search_root / "search.css", render_search_css())
    write_text(search_root / "search.js", render_search_js())
    write_text(search_root / "search-worker.js", render_search_worker_js())

    return {
        "enabled": True,
        "schema_version": SEARCH_SCHEMA_VERSION,
        "documents": len(documents),
        "fields": list(SEARCH_FIELD_NAMES),
        "default_field": SEARCH_DEFAULT_FIELD,
        "term_buckets": SEARCH_TERM_BUCKETS,
        "doc_shards": len(doc_shards),
        "date_index": SEARCH_DATE_INDEX_FILENAME,
        "output_dir": path_to_posix(search_root),
    }




def normalize_search_text(value: str) -> str:
    normalized = value.casefold().replace("ё", "е")
    normalized = re.sub(r"[^0-9a-zа-я]+", " ", normalized)
    return re.sub(r"\s+", " ", normalized).strip()



def tokenize_search_text(value: str) -> list[str]:
    tokens = [token for token in normalize_search_text(value).split(" ") if len(token) >= 2]
    return list(dict.fromkeys(tokens))



def primary_post_sort_key(author_line: str) -> str:
    match = re.search(r"(\d{1,2})\s+([А-Яа-яЁё]+)\s+(\d{4})\s*-\s*(\d{1,2}):(\d{2})", author_line)
    if not match:
        return ""

    day, month_token, year, hour, minute = match.groups()
    month_key = month_token.casefold().replace("ё", "е")
    month_map = {
        "янв": "01",
        "фев": "02",
        "мар": "03",
        "апр": "04",
        "май": "05",
        "мая": "05",
        "июн": "06",
        "июл": "07",
        "авг": "08",
        "сен": "09",
        "сент": "09",
        "окт": "10",
        "ноя": "11",
        "дек": "12",
    }
    month = next((value for key, value in month_map.items() if month_key.startswith(key)), "")
    if not month:
        return ""
    return f"{year}-{month}-{int(day):02d} {int(hour):02d}:{minute}:00"



def extract_primary_posted_at(author_line: str) -> str:
    match = re.search(r"\sв\s(.+)$", author_line)
    if match:
        return collapse_inline_whitespace(match.group(1))
    return author_line

def rebuild_search_from_existing_docs(out_root: Path, report_path: Path, args: argparse.Namespace) -> dict[str, object]:
    primary_archive_root = out_root / args.primary_prefix / args.forum_dir
    if not primary_archive_root.is_dir():
        raise SystemExit(f"Primary archive root not found: {primary_archive_root}")

    primary_search_index = build_search_bundle(primary_archive_root, collect_primary_search_documents(primary_archive_root))
    secondary_search_index = None

    secondary_archive_root = out_root / args.secondary_prefix / "7dneyleta.ru"
    if not args.disable_secondary and secondary_archive_root.is_dir():
        secondary_search_index = build_search_bundle(secondary_archive_root, collect_secondary_search_documents(secondary_archive_root))

    report: dict[str, object] = {}
    if report_path.is_file():
        try:
            report = json.loads(report_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            report = {}

    report["search_index"] = primary_search_index
    report["search_bundle_version"] = SEARCH_SCHEMA_VERSION
    if secondary_search_index is not None:
        secondary_report = report.get("secondary_archive")
        if not isinstance(secondary_report, dict):
            secondary_report = {}
        secondary_report["search_index"] = secondary_search_index
        report["secondary_archive"] = secondary_report

    report_path.parent.mkdir(parents=True, exist_ok=True)
    write_json(report_path, report, pretty=True)

    return {
        "partial_build": "search",
        "search_bundle_version": SEARCH_SCHEMA_VERSION,
        "report_updated": True,
        "primary_search": primary_search_index,
        "secondary_search": secondary_search_index,
    }



def main() -> None:
    args = parse_args()
    out_root = Path(args.out).resolve()

    if args.only == "root-landing":
        include_secondary = should_render_multi_archive_landing_page(
            out_root,
            args.secondary_src,
            args.secondary_prefix,
            args.disable_secondary,
        )
        out_root.mkdir(parents=True, exist_ok=True)
        write_root_outputs(
            out_root,
            args.primary_prefix,
            args.forum_dir,
            args.secondary_prefix,
            include_secondary=include_secondary,
        )
        print(
            json.dumps(
                {
                    "partial_build": "root-landing",
                    "output_root": path_to_posix(out_root),
                    "landing_variant": "multi-archive" if include_secondary else "single-archive",
                    "written_files": [
                        path_to_posix(out_root / "index.html"),
                        path_to_posix(out_root / ".nojekyll"),
                    ],
                    "report_updated": False,
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return

    if args.only == "search":
        summary = rebuild_search_from_existing_docs(out_root, Path(args.report).resolve(), args)
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        return

    options = BuildOptions.from_args(args)
    src_root = Path(args.src).resolve()
    out_root = Path(args.out).resolve()
    report_path = Path(args.report).resolve()
    primary_out_root = out_root / args.primary_prefix
    secondary_src_root = Path(args.secondary_src).resolve()

    if path_exists(out_root) and not options.incremental:
        shutil.rmtree(out_root)
    out_root.mkdir(parents=True, exist_ok=True)

    report = build_archive(src_root, primary_out_root, args.forum_dir, report_path, options)
    secondary_report = None

    if not args.disable_secondary and secondary_src_root.is_dir():
        secondary_out_root = out_root / args.secondary_prefix
        secondary_report = build_secondary_archive(secondary_src_root, secondary_out_root, options)
        report["secondary_archive"] = secondary_report

    write_json(report_path, report, pretty=True)
    write_root_outputs(
        out_root,
        args.primary_prefix,
        args.forum_dir,
        args.secondary_prefix,
        include_secondary=secondary_report is not None,
    )

    print(json.dumps(report["summary"], ensure_ascii=False, indent=2))
    if secondary_report is not None:
        print(json.dumps({"secondary_archive": secondary_report["summary"]}, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()



