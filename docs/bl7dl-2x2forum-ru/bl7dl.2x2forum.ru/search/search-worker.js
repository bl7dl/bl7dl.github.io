const FIELD_NAMES = ["body", "topic", "forum", "author"];
const DEFAULT_FIELD = "body";
const FIELD_WEIGHTS = {
  body: 1,
  topic: 3,
  forum: 2,
  author: 2.5,
};
const PHRASE_BONUS = 6;
const PREFIX_WEIGHT = 0.8;
const MAX_WILDCARD_TERMS = 2048;
const MAX_RESULTS = 5000;

const state = {
  manifest: null,
  lexicons: new Map(),
  postings: new Map(),
  docShards: new Map(),
  docById: new Map(),
  dateEntries: null,
  dateMap: null,
  allDocIds: null,
  lastMatches: [],
};

function collapseWhitespace(value) {
  return String(value || "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeSearchText(value) {
  return collapseWhitespace(
    String(value || "")
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^0-9a-zа-я]+/g, " ")
  );
}

function tokenizeSearchText(value) {
  return normalizeSearchText(value)
    .split(" ")
    .filter((token) => token.length >= 2);
}

function hashToken(token, bucketCount) {
  let hashValue = 2166136261;
  for (const char of token) {
    hashValue ^= char.codePointAt(0);
    hashValue = Math.imul(hashValue, 16777619) >>> 0;
  }
  return hashValue % bucketCount;
}

function jsonUrl(filename) {
  return new URL(filename, self.location.href).toString();
}

async function fetchJson(filename) {
  const response = await fetch(jsonUrl(filename));
  if (!response.ok) {
    throw new Error(`Не удалось загрузить ${filename}: ${response.status}`);
  }
  return response.json();
}

async function ensureManifest() {
  if (state.manifest) {
    return state.manifest;
  }
  const manifest = await fetchJson("manifest.json");
  if (!manifest || manifest.schema_version !== 2) {
    throw new Error("Поддерживается только search bundle schema v2.");
  }
  state.manifest = manifest;
  return manifest;
}

async function getLexicon(field) {
  if (state.lexicons.has(field)) {
    return state.lexicons.get(field);
  }
  const lexicon = await fetchJson(`lexicon-${field}.json`);
  state.lexicons.set(field, Array.isArray(lexicon) ? lexicon : []);
  return state.lexicons.get(field);
}

async function getTermBucket(field, bucketNumber) {
  const key = `${field}:${bucketNumber}`;
  if (state.postings.has(key)) {
    return state.postings.get(key);
  }
  const bucket = await fetchJson(`terms-${field}-${String(bucketNumber).padStart(2, "0")}.json`);
  state.postings.set(key, bucket && typeof bucket === "object" ? bucket : {});
  return state.postings.get(key);
}

async function getDocShard(shardNumber) {
  if (state.docShards.has(shardNumber)) {
    return state.docShards.get(shardNumber);
  }
  const shard = await fetchJson(`docs-${String(shardNumber).padStart(3, "0")}.json`);
  const records = Array.isArray(shard) ? shard : [];
  for (const record of records) {
    if (record && typeof record.doc_id === "number") {
      state.docById.set(record.doc_id, record);
    }
  }
  state.docShards.set(shardNumber, records);
  return records;
}

async function getDoc(docId) {
  if (state.docById.has(docId)) {
    return state.docById.get(docId);
  }
  const manifest = await ensureManifest();
  const shardNumber = Math.floor(docId / manifest.doc_shard_size);
  await getDocShard(shardNumber);
  return state.docById.get(docId) || null;
}

async function getDocs(docIds) {
  const manifest = await ensureManifest();
  const shardNumbers = new Set();
  for (const docId of docIds) {
    if (!state.docById.has(docId)) {
      shardNumbers.add(Math.floor(docId / manifest.doc_shard_size));
    }
  }
  await Promise.all(Array.from(shardNumbers, (value) => getDocShard(value)));
  return docIds.map((docId) => state.docById.get(docId)).filter(Boolean);
}

async function getDateEntries() {
  if (state.dateEntries) {
    return state.dateEntries;
  }
  const manifest = await ensureManifest();
  const entries = await fetchJson(manifest.date_index || "dates.json");
  state.dateEntries = Array.isArray(entries) ? entries : [];
  state.dateMap = new Map(state.dateEntries.map((entry) => [entry[1], entry[0]]));
  return state.dateEntries;
}

function getAllDocIds() {
  if (state.allDocIds) {
    return state.allDocIds;
  }
  const ids = new Array(state.manifest.documents);
  for (let index = 0; index < ids.length; index += 1) {
    ids[index] = index;
  }
  state.allDocIds = ids;
  return ids;
}

function lowerBound(values, target) {
  let low = 0;
  let high = values.length;
  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (values[middle] < target) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  return low;
}

function isPrimaryStart(token) {
  return Boolean(token) && (token.type === "WORD" || token.type === "PHRASE" || token.type === "LPAREN" || token.type === "NOT");
}

function lexQuery(query) {
  const tokens = [];
  let index = 0;
  while (index < query.length) {
    const char = query[index];
    if (/\s/.test(char)) {
      index += 1;
      continue;
    }
    if (char === "(") {
      tokens.push({ type: "LPAREN" });
      index += 1;
      continue;
    }
    if (char === ")") {
      tokens.push({ type: "RPAREN" });
      index += 1;
      continue;
    }
    if (char === ":") {
      tokens.push({ type: "COLON" });
      index += 1;
      continue;
    }
    if (char === "-") {
      tokens.push({ type: "NOT" });
      index += 1;
      continue;
    }
    if (char === '"') {
      let cursor = index + 1;
      let value = "";
      while (cursor < query.length) {
        const current = query[cursor];
        if (current === '"') {
          break;
        }
        if (current === "\\" && cursor + 1 < query.length) {
          value += query[cursor + 1];
          cursor += 2;
          continue;
        }
        value += current;
        cursor += 1;
      }
      tokens.push({ type: "PHRASE", value });
      index = cursor < query.length && query[cursor] === '"' ? cursor + 1 : cursor;
      continue;
    }
    let cursor = index;
    while (cursor < query.length && !/\s/.test(query[cursor]) && !['(', ')', ':', '"'].includes(query[cursor])) {
      cursor += 1;
    }
    const value = query.slice(index, cursor);
    const upper = value.toUpperCase();
    if (upper === "AND" || upper === "OR" || upper === "NOT") {
      tokens.push({ type: upper });
    } else {
      tokens.push({ type: "WORD", value });
    }
    index = cursor;
  }
  return tokens;
}

function normalizeFieldName(value) {
  const normalized = String(value || "").toLowerCase();
  return [...FIELD_NAMES, "before", "after"].includes(normalized) ? normalized : null;
}

function normalizeDateValue(value, operator) {
  const raw = collapseWhitespace(value).replace("T", " ");
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return operator === "before" ? `${raw} 23:59:59` : `${raw} 00:00:00`;
  }
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(raw)) {
    return `${raw}:00`;
  }
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(raw)) {
    return raw;
  }
  return "";
}

function makeWordNode(field, rawValue) {
  const trimmed = String(rawValue || "").trim();
  if (!trimmed) {
    return { type: "empty" };
  }
  const prefix = trimmed.endsWith("*");
  const normalized = normalizeSearchText(prefix ? trimmed.slice(0, -1) : trimmed);
  if (!normalized) {
    return { type: "empty" };
  }
  if (prefix) {
    return { type: "prefix", field: field || null, prefix: normalized };
  }
  return { type: "term", field: field || null, token: normalized };
}

function makePhraseNode(field, rawValue) {
  const tokens = tokenizeSearchText(rawValue);
  if (!tokens.length) {
    return { type: "empty" };
  }
  return {
    type: "phrase",
    field: field || null,
    phrase: tokens.join(" "),
    tokens,
  };
}

function parseQuery(query) {
  const tokens = lexQuery(query);
  let position = 0;

  function peek(offset = 0) {
    return tokens[position + offset] || null;
  }

  function consume(expectedType) {
    const token = peek();
    if (!token || token.type !== expectedType) {
      throw new Error(`Ожидался токен ${expectedType}.`);
    }
    position += 1;
    return token;
  }

  function parseDateFilter(fieldName) {
    const token = peek();
    if (!token || (token.type !== "WORD" && token.type !== "PHRASE")) {
      throw new Error(`После ${fieldName}: нужна дата в формате YYYY-MM-DD.`);
    }
    position += 1;
    const normalized = normalizeDateValue(token.value || "", fieldName);
    if (!normalized) {
      throw new Error(`Неверный формат даты для ${fieldName}:. Используйте YYYY-MM-DD или YYYY-MM-DD HH:MM[:SS].`);
    }
    return { type: "date_filter", operator: fieldName, value: normalized };
  }

  function parseFieldPrimary(fieldName) {
    const token = peek();
    if (!token) {
      throw new Error(`После ${fieldName}: нужен поисковый аргумент.`);
    }
    if (fieldName === "before" || fieldName === "after") {
      return parseDateFilter(fieldName);
    }
    if (token.type === "LPAREN") {
      consume("LPAREN");
      const expression = parseOr();
      if (peek() && peek().type === "RPAREN") {
        consume("RPAREN");
      } else {
        throw new Error("Не закрыта скобка после field:-запроса.");
      }
      return { type: "field_scope", field: fieldName, expr: expression };
    }
    if (token.type === "PHRASE") {
      position += 1;
      return makePhraseNode(fieldName, token.value);
    }
    if (token.type === "WORD") {
      position += 1;
      return makeWordNode(fieldName, token.value);
    }
    throw new Error(`После ${fieldName}: нужен термин, фраза или группа в скобках.`);
  }

  function parsePrimary() {
    const token = peek();
    if (!token) {
      return { type: "empty" };
    }
    if (token.type === "WORD" && peek(1) && peek(1).type === "COLON") {
      position += 1;
      consume("COLON");
      const fieldName = normalizeFieldName(token.value);
      if (!fieldName) {
        throw new Error(`Неизвестное поле ${token.value}.`);
      }
      return parseFieldPrimary(fieldName);
    }
    if (token.type === "LPAREN") {
      consume("LPAREN");
      const expression = parseOr();
      if (peek() && peek().type === "RPAREN") {
        consume("RPAREN");
      } else {
        throw new Error("Не закрыта скобка.");
      }
      return expression;
    }
    if (token.type === "PHRASE") {
      position += 1;
      return makePhraseNode(null, token.value);
    }
    if (token.type === "WORD") {
      position += 1;
      return makeWordNode(null, token.value);
    }
    throw new Error("Не удалось разобрать запрос.");
  }

  function parseUnary() {
    let negateCount = 0;
    while (peek() && peek().type === "NOT") {
      position += 1;
      negateCount += 1;
    }
    let node = parsePrimary();
    while (negateCount > 0) {
      node = { type: "not", expr: node };
      negateCount -= 1;
    }
    return node;
  }

  function parseAnd() {
    let node = parseUnary();
    while (true) {
      const token = peek();
      if (!token || token.type === "OR" || token.type === "RPAREN") {
        return node;
      }
      if (token.type === "AND") {
        position += 1;
      } else if (!isPrimaryStart(token)) {
        return node;
      }
      const right = parseUnary();
      node = { type: "and", left: node, right };
    }
  }

  function parseOr() {
    let node = parseAnd();
    while (peek() && peek().type === "OR") {
      consume("OR");
      const right = parseAnd();
      node = { type: "or", left: node, right };
    }
    return node;
  }

  const expression = parseOr();
  if (position < tokens.length) {
    throw new Error(`Лишний фрагмент запроса: ${tokens[position].value || tokens[position].type}.`);
  }
  return expression;
}

function cloneMap(map) {
  return new Map(map);
}

function unionMaps(left, right) {
  const result = new Map(left);
  for (const [docId, score] of right) {
    result.set(docId, (result.get(docId) || 0) + score);
  }
  return result;
}

function intersectMaps(left, right) {
  const small = left.size <= right.size ? left : right;
  const large = left.size <= right.size ? right : left;
  const result = new Map();
  for (const [docId, score] of small) {
    if (large.has(docId)) {
      result.set(docId, score + (large.get(docId) || 0));
    }
  }
  return result;
}

function subtractMaps(left, right) {
  const result = new Map();
  for (const [docId, score] of left) {
    if (!right.has(docId)) {
      result.set(docId, score);
    }
  }
  return result;
}

function complementMap(inner) {
  const result = new Map();
  for (const docId of getAllDocIds()) {
    if (!inner.has(docId)) {
      result.set(docId, 0);
    }
  }
  return result;
}

function effectiveField(nodeField, scopeField) {
  return nodeField || scopeField || state.manifest.default_field || DEFAULT_FIELD;
}

async function searchTerm(field, token) {
  const bucketNumber = hashToken(token, state.manifest.term_buckets);
  const bucket = await getTermBucket(field, bucketNumber);
  const docIds = Array.isArray(bucket[token]) ? bucket[token] : [];
  const result = new Map();
  const score = FIELD_WEIGHTS[field] || 1;
  for (const docId of docIds) {
    result.set(docId, score);
  }
  return result;
}

async function searchPrefix(field, prefix) {
  const lexicon = await getLexicon(field);
  const start = lowerBound(lexicon, prefix);
  const tokensByBucket = new Map();
  let collected = 0;

  for (let index = start; index < lexicon.length; index += 1) {
    const token = lexicon[index];
    if (!token.startsWith(prefix)) {
      break;
    }
    const bucket = hashToken(token, state.manifest.term_buckets);
    const bucketTokens = tokensByBucket.get(bucket) || [];
    bucketTokens.push(token);
    tokensByBucket.set(bucket, bucketTokens);
    collected += 1;
    if (collected >= MAX_WILDCARD_TERMS) {
      break;
    }
  }

  const result = new Map();
  const baseScore = (FIELD_WEIGHTS[field] || 1) * PREFIX_WEIGHT;
  for (const [bucketNumber, tokens] of tokensByBucket) {
    const bucket = await getTermBucket(field, bucketNumber);
    for (const token of tokens) {
      const docIds = Array.isArray(bucket[token]) ? bucket[token] : [];
      for (const docId of docIds) {
        result.set(docId, (result.get(docId) || 0) + baseScore);
      }
    }
  }
  return result;
}

function getFieldText(documentRecord, field) {
  if (!documentRecord) {
    return "";
  }
  if (field === "body") {
    return documentRecord.body_text || "";
  }
  if (field === "topic") {
    return documentRecord.topic_title || "";
  }
  if (field === "forum") {
    return documentRecord.forum_title || "";
  }
  if (field === "author") {
    return documentRecord.author || "";
  }
  return "";
}

async function searchPhrase(field, node) {
  let candidates = null;
  const uniqueTokens = Array.from(new Set(node.tokens));
  for (const token of uniqueTokens) {
    const tokenMatches = await searchTerm(field, token);
    candidates = candidates ? intersectMaps(candidates, tokenMatches) : tokenMatches;
    if (!candidates.size) {
      return new Map();
    }
  }

  const candidateIds = Array.from(candidates.keys());
  const documents = await getDocs(candidateIds);
  const result = new Map();
  const phraseScore = (FIELD_WEIGHTS[field] || 1) * node.tokens.length + PHRASE_BONUS;
  for (const documentRecord of documents) {
    const haystack = normalizeSearchText(getFieldText(documentRecord, field));
    if (haystack.includes(node.phrase)) {
      result.set(documentRecord.doc_id, phraseScore);
    }
  }
  return result;
}

async function searchDateFilter(node) {
  const entries = await getDateEntries();
  const result = new Map();
  for (const entry of entries) {
    if (!Array.isArray(entry) || entry.length < 2) {
      continue;
    }
    const sortKey = entry[0];
    const docId = entry[1];
    if (typeof sortKey !== "string" || typeof docId !== "number") {
      continue;
    }
    if (node.operator === "after" && sortKey >= node.value) {
      result.set(docId, 0);
    }
    if (node.operator === "before" && sortKey <= node.value) {
      result.set(docId, 0);
    }
  }
  return result;
}

async function evaluate(node, scopeField = null) {
  if (!node || node.type === "empty") {
    return new Map();
  }
  if (node.type === "field_scope") {
    return evaluate(node.expr, node.field || scopeField);
  }
  if (node.type === "and") {
    const left = await evaluate(node.left, scopeField);
    if (!left.size) {
      return left;
    }
    const right = await evaluate(node.right, scopeField);
    return intersectMaps(left, right);
  }
  if (node.type === "or") {
    const left = await evaluate(node.left, scopeField);
    const right = await evaluate(node.right, scopeField);
    return unionMaps(left, right);
  }
  if (node.type === "not") {
    const inner = await evaluate(node.expr, scopeField);
    return complementMap(inner);
  }
  if (node.type === "date_filter") {
    return searchDateFilter(node);
  }

  const field = effectiveField(node.field, scopeField);
  if (node.type === "term") {
    return searchTerm(field, node.token);
  }
  if (node.type === "prefix") {
    return searchPrefix(field, node.prefix);
  }
  if (node.type === "phrase") {
    return searchPhrase(field, node);
  }
  return new Map();
}

function collectNeedles(node, scopeField = null, needles = []) {
  if (!node || node.type === "empty") {
    return needles;
  }
  if (node.type === "field_scope") {
    return collectNeedles(node.expr, node.field || scopeField, needles);
  }
  if (node.type === "and" || node.type === "or") {
    collectNeedles(node.left, scopeField, needles);
    collectNeedles(node.right, scopeField, needles);
    return needles;
  }
  if (node.type === "not" || node.type === "date_filter") {
    return needles;
  }
  const field = effectiveField(node.field, scopeField);
  if (field === "body") {
    if (node.type === "term") {
      needles.push(node.token);
    }
    if (node.type === "prefix") {
      needles.push(node.prefix);
    }
    if (node.type === "phrase") {
      needles.push(node.phrase);
    }
  }
  return needles;
}

function compareMatches(left, right) {
  if (right.score !== left.score) {
    return right.score - left.score;
  }
  const leftSort = state.dateMap && state.dateMap.get(left.docId) ? state.dateMap.get(left.docId) : "";
  const rightSort = state.dateMap && state.dateMap.get(right.docId) ? state.dateMap.get(right.docId) : "";
  if (leftSort !== rightSort) {
    return rightSort.localeCompare(leftSort);
  }
  return right.docId - left.docId;
}

async function buildItems(offset, limit, needles) {
  const slice = state.lastMatches.slice(offset, offset + limit);
  const docIds = slice.map((match) => match.docId);
  const documents = await getDocs(docIds);
  const byId = new Map(documents.map((documentRecord) => [documentRecord.doc_id, documentRecord]));
  return slice
    .map((match) => {
      const documentRecord = byId.get(match.docId);
      if (!documentRecord) {
        return null;
      }
      return {
        url: documentRecord.url,
        topic_title: documentRecord.topic_title,
        forum_title: documentRecord.forum_title,
        author: documentRecord.author,
        posted_at: documentRecord.posted_at,
        excerpt: documentRecord.excerpt,
        score: match.score,
        needles,
      };
    })
    .filter(Boolean);
}

async function runSearch(query, limit) {
  await ensureManifest();
  await getDateEntries();
  const ast = parseQuery(query);
  const needles = collectNeedles(ast);
  const resultMap = await evaluate(ast);
  const matches = Array.from(resultMap, ([docId, score]) => ({ docId, score }));
  matches.sort(compareMatches);
  if (matches.length > MAX_RESULTS) {
    matches.length = MAX_RESULTS;
  }
  state.lastMatches = matches;
  return {
    total: matches.length,
    items: await buildItems(0, limit, needles),
    needles,
  };
}

self.addEventListener("message", async (event) => {
  const payload = event.data || {};
  try {
    if (payload.type === "init") {
      const manifest = await ensureManifest();
      self.postMessage({ type: "ready", site_title: manifest.site_title || "" });
      return;
    }

    if (payload.type === "search") {
      const startedAt = performance.now();
      const query = collapseWhitespace(payload.query || "");
      if (!query) {
        state.lastMatches = [];
        self.postMessage({ type: "results", mode: "search", total: 0, items: [], message: "Введите поисковый запрос.", took_ms: 0 });
        return;
      }
      const searchResult = await runSearch(query, Number(payload.limit) || 50);
      self.postMessage({
        type: "results",
        mode: "search",
        total: searchResult.total,
        items: searchResult.items,
        took_ms: performance.now() - startedAt,
        message: searchResult.total ? "" : "Ничего не найдено.",
      });
      return;
    }

    if (payload.type === "page") {
      const startedAt = performance.now();
      const offset = Math.max(0, Number(payload.offset) || 0);
      const limit = Math.max(1, Number(payload.limit) || 50);
      const items = await buildItems(offset, limit, []);
      self.postMessage({
        type: "results",
        mode: "page",
        total: state.lastMatches.length,
        items,
        took_ms: performance.now() - startedAt,
      });
    }
  } catch (error) {
    self.postMessage({
      type: "error",
      message: error instanceof Error ? error.message : "Не удалось выполнить поиск.",
    });
  }
});
