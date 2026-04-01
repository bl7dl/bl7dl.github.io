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
    meta.className = "archive-search-result-meta";
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
    excerpt.className = "archive-search-result-excerpt";
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
    const worker = new Worker(new URL("search-worker.js", searchBaseUrl).toString());
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

    function runSearch() {
      const query = queryInput.value.trim();
      syncQueryToLocation(query);
      resetResults();
      if (!query) {
        setStatus("Введите поисковый запрос.");
        return;
      }
      setStatus("Ищу…", "busy");
      worker.postMessage({ type: "search", query, limit: RESULTS_PER_PAGE });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!ready) {
        setStatus("Поиск ещё инициализируется…", "busy");
        return;
      }
      runSearch();
    });

    moreButton.addEventListener("click", () => {
      if (renderedCount >= totalCount) {
        return;
      }
      moreButton.disabled = true;
      setStatus(`Загружаю результаты ${renderedCount + 1}-${Math.min(renderedCount + RESULTS_PER_PAGE, totalCount)}…`, "busy");
      worker.postMessage({ type: "page", offset: renderedCount, limit: RESULTS_PER_PAGE });
    });

    worker.addEventListener("message", (event) => {
      const payload = event.data || {};
      if (payload.type === "ready") {
        ready = true;
        const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
        if (initialQuery) {
          queryInput.value = initialQuery;
          if (!initialQuerySubmitted) {
            initialQuerySubmitted = true;
            runSearch();
          }
        } else {
          setStatus("Введите поисковый запрос.");
        }
        return;
      }

      if (payload.type === "results") {
        totalCount = payload.total || 0;
        if (!totalCount) {
          resetResults();
          setStatus(payload.message || "Ничего не найдено.");
          return;
        }
        renderBatch(Array.isArray(payload.items) ? payload.items : [], payload.mode, payload.took_ms);
        return;
      }

      if (payload.type === "error") {
        moreWrap.classList.add("archive-hidden");
        moreButton.disabled = false;
        setStatus(payload.message || "Не удалось выполнить поиск.", "error");
      }
    });

    worker.addEventListener("error", () => {
      setStatus("Ошибка в search-worker.js.", "error");
    });

    setStatus("Инициализирую поиск…", "busy");
    worker.postMessage({ type: "init", base_url: searchBaseUrl });
  });
})();
