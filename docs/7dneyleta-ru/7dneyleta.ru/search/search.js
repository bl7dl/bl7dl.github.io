(() => {
  const RESULTS_PER_PAGE = 50;

  function createResultItem(documentRecord) {
    const item = document.createElement("li");
    item.className = "archive-search-result";

    const title = document.createElement("h2");
    title.className = "archive-search-result-title";
    const link = document.createElement("a");
    link.href = documentRecord.url;
    link.textContent = documentRecord.topic_title || documentRecord.url;
    title.appendChild(link);

    const meta = document.createElement("p");
    meta.className = "archive-search-meta archive-search-result-meta";
    const metaParts = [];
    if (documentRecord.author) {
      metaParts.push(`Автор: ${documentRecord.author}`);
    }
    if (documentRecord.posted_at) {
      metaParts.push(documentRecord.posted_at);
    }
    if (documentRecord.forum_title) {
      metaParts.push(`Раздел: ${documentRecord.forum_title}`);
    }
    meta.textContent = metaParts.join(" | ");

    const excerpt = document.createElement("p");
    excerpt.className = "archive-search-snippet archive-search-result-excerpt";
    excerpt.textContent = documentRecord.excerpt || "";

    item.appendChild(title);
    if (meta.textContent) {
      item.appendChild(meta);
    }
    if (excerpt.textContent) {
      item.appendChild(excerpt);
    }
    return item;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("archive-search-form");
    const queryInput = document.getElementById("archive-search-query");
    const status = document.getElementById("archive-search-status");
    const results = document.getElementById("archive-search-results");
    const moreWrap = document.getElementById("archive-search-more-wrap");
    const moreButton = document.getElementById("archive-search-more");

    if (!(form instanceof HTMLFormElement) || !(queryInput instanceof HTMLInputElement) || !(status instanceof HTMLElement) || !(results instanceof HTMLElement) || !(moreWrap instanceof HTMLElement) || !(moreButton instanceof HTMLButtonElement)) {
      return;
    }

    const searchBaseUrl = new URL("./", window.location.href).toString();
    const isFileProtocol = window.location.protocol === "file:";
    let worker = null;
    let fileRuntime = null;
    let renderedCount = 0;
    let totalCount = 0;
    let ready = false;
    let initialQuerySubmitted = false;

    function setStatus(message, state = "idle") {
      status.textContent = message;
      status.dataset.state = state;
    }

    function resetResults() {
      results.innerHTML = "";
      renderedCount = 0;
      totalCount = 0;
      moreWrap.classList.add("archive-hidden");
      moreButton.disabled = false;
    }

    function showEmptyResult(message) {
      results.innerHTML = "";
      const item = document.createElement("li");
      item.className = "archive-search-empty";
      item.textContent = message;
      results.appendChild(item);
      moreWrap.classList.add("archive-hidden");
      moreButton.disabled = false;
    }

    function syncQueryToLocation(value) {
      const url = new URL(window.location.href);
      if (value) {
        url.searchParams.set("q", value);
      } else {
        url.searchParams.delete("q");
      }
      history.replaceState(null, "", url.toString());
    }

    function describeProgress(tookMs) {
      if (!totalCount) {
        return "Ничего не найдено.";
      }
      const rangeEnd = Math.min(renderedCount, totalCount);
      const suffix = Number.isFinite(tookMs) ? ` Запрос выполнен за ${tookMs.toFixed(1)} мс.` : "";
      return `Найдено ${totalCount} результатов. Показаны 1-${rangeEnd}.${suffix}`;
    }

    function renderBatch(items, mode, tookMs) {
      if (mode === "search") {
        results.innerHTML = "";
      }
      const fragment = document.createDocumentFragment();
      for (const item of items) {
        fragment.appendChild(createResultItem(item));
      }
      results.appendChild(fragment);
      renderedCount += items.length;
      moreWrap.classList.toggle("archive-hidden", renderedCount >= totalCount);
      moreButton.disabled = false;
      setStatus(describeProgress(tookMs));
    }

    function handleReady() {
      ready = true;
      const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
      if (initialQuery) {
        queryInput.value = initialQuery;
        if (!initialQuerySubmitted) {
          initialQuerySubmitted = true;
          void runSearch();
        }
      } else {
        setStatus("Введите поисковый запрос.");
      }
    }

    function handleResults(payload) {
      totalCount = payload.total || 0;
      if (!totalCount) {
        resetResults();
        setStatus(payload.message || "Ничего не найдено.");
        showEmptyResult("Подходящих сообщений не найдено.");
        return;
      }
      renderBatch(Array.isArray(payload.items) ? payload.items : [], payload.mode, payload.took_ms);
    }

    function handleError(message, isWorkerFailure = false) {
      moreWrap.classList.add("archive-hidden");
      moreButton.disabled = false;
      if (!results.children.length) {
        showEmptyResult(message);
      }
      setStatus(message, "error");
      if (isWorkerFailure) {
        ready = false;
      }
    }

    function handlePayload(payload) {
      if (payload.type === "ready") {
        handleReady();
        return;
      }
      if (payload.type === "results") {
        handleResults(payload);
        return;
      }
      if (payload.type === "error") {
        handleError(payload.message || "Не удалось выполнить поиск.");
      }
    }

    function loadScript(url) {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Не удалось загрузить ${url}.`));
        document.head.appendChild(script);
      });
    }

    async function ensureFileRuntime() {
      if (fileRuntime) {
        return fileRuntime;
      }
      if (!self.ArchiveSearchFile) {
        await loadScript(new URL("search-file.js", searchBaseUrl).toString());
      }
      if (!self.ArchiveSearchFile) {
        throw new Error("Не удалось инициализировать локальный поиск.");
      }
      fileRuntime = self.ArchiveSearchFile;
      return fileRuntime;
    }

    async function runSearch() {
      const query = queryInput.value.trim();
      syncQueryToLocation(query);
      resetResults();
      if (!query) {
        setStatus("Введите поисковый запрос.");
        showEmptyResult("Поиск по пустому запросу не выполняется.");
        return;
      }
      setStatus("Ищу…", "busy");
      if (isFileProtocol) {
        try {
          const runtime = await ensureFileRuntime();
          handlePayload(await runtime.search(query, RESULTS_PER_PAGE));
        } catch (error) {
          handleError(error instanceof Error ? error.message : "Не удалось выполнить поиск.");
        }
        return;
      }
      if (worker) {
        worker.postMessage({ type: "search", query, limit: RESULTS_PER_PAGE });
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!ready) {
        setStatus("Поиск ещё инициализируется…", "busy");
        return;
      }
      void runSearch();
    });

    moreButton.addEventListener("click", async () => {
      if (renderedCount >= totalCount) {
        return;
      }
      moreButton.disabled = true;
      setStatus(`Загружаю результаты ${renderedCount + 1}-${Math.min(renderedCount + RESULTS_PER_PAGE, totalCount)}…`, "busy");
      if (isFileProtocol) {
        try {
          const runtime = await ensureFileRuntime();
          handlePayload(await runtime.page(renderedCount, RESULTS_PER_PAGE));
        } catch (error) {
          handleError(error instanceof Error ? error.message : "Не удалось выполнить поиск.");
        }
        return;
      }
      if (worker) {
        worker.postMessage({ type: "page", offset: renderedCount, limit: RESULTS_PER_PAGE });
      }
    });

    async function initializeFileMode() {
      try {
        const runtime = await ensureFileRuntime();
        handlePayload(await runtime.init(searchBaseUrl));
      } catch (error) {
        handleError(error instanceof Error ? error.message : "Не удалось инициализировать локальный поиск.");
      }
    }

    function initializeWorkerMode() {
      worker = new Worker(new URL("search-worker.js", searchBaseUrl).toString());
      worker.addEventListener("message", (event) => {
        handlePayload(event.data || {});
      });
      worker.addEventListener("error", () => {
        handleError("Ошибка в search-worker.js.", true);
      });
      worker.postMessage({ type: "init", base_url: searchBaseUrl });
    }

    setStatus("Инициализирую поиск…", "busy");
    if (isFileProtocol) {
      void initializeFileMode();
    } else {
      initializeWorkerMode();
    }
  });
})();
