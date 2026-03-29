(function () {
  const RESULTS_PER_PAGE = 50;
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
      .replace(/ё/g, "е")
      .replace(/[^0-9a-zа-я]+/gi, " ")
      .replace(/\s+/g, " ")
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
        "<h2><a href=\"" + escapeHtml(doc.url) + "\">" + escapeHtml(doc.topic_title || "Сообщение") + "</a></h2>",
        "<p class=\"archive-search-meta\">" + escapeHtml(doc.author || "Неизвестный автор"),
        doc.forum_title ? " • " + escapeHtml(doc.forum_title) : "",
        doc.posted_at ? " • " + escapeHtml(doc.posted_at) : "",
        "</p>",
        doc.excerpt ? "<p class=\"archive-search-snippet\">" + escapeHtml(doc.excerpt) + "</p>" : "",
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
        throw new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ " + filename);
      }
      return response.json();
    });
  }

  function loadJsonWithScript(filename) {
    if (Object.prototype.hasOwnProperty.call(inlinePayloads, filename)) {
      return Promise.resolve(inlinePayloads[filename]);
    }
    if (!scriptCache.has(filename)) {
      const scriptName = filename.replace(/\.json$/, ".data.js");
      const promise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = scriptName;
        script.onload = function () {
          if (Object.prototype.hasOwnProperty.call(inlinePayloads, filename)) {
            resolve(inlinePayloads[filename]);
            return;
          }
          reject(new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ " + filename));
        };
        script.onerror = function () {
          reject(new Error("РќРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ " + scriptName));
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
          throw new Error("Не удалось загрузить manifest.json");
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
          throw new Error("Не удалось загрузить " + filename);
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
          throw new Error("Не удалось загрузить " + filename);
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
      setStatus("Введите хотя бы один токен длиной от 2 символов.");
      resultsNode.innerHTML = '<li class="archive-search-empty">Поиск по пустому запросу не выполняется.</li>';
      return;
    }

    setStatus("Загрузка индекса…");
    const manifest = await loadManifest();
    const postingLists = [];

    for (const token of tokens) {
      const bucketNumber = searchBucket(token, manifest.term_buckets);
      const bucket = await loadTermsBucket(bucketNumber);
      const posting = bucket[token];
      if (!Array.isArray(posting) || posting.length === 0) {
        setStatus("Ничего не найдено.");
        resultsNode.innerHTML = '<li class="archive-search-empty">Подходящих сообщений не найдено.</li>';
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
      setStatus("Ничего не найдено.");
      resultsNode.innerHTML = '<li class="archive-search-empty">Подходящих сообщений не найдено.</li>';
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
    setStatus("Найдено сообщений: " + dedupedResults.length + ".");
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
      setStatus("Поиск временно недоступен.");
      resultsNode.innerHTML = '<li class="archive-search-empty">Не удалось загрузить поисковой индекс.</li>';
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
      setStatus("Поиск временно недоступен.");
      resultsNode.innerHTML = '<li class="archive-search-empty">Не удалось загрузить поисковой индекс.</li>';
    });
  } else {
    setStatus("Введите запрос, чтобы начать поиск.");
  }
})();
