import { Document } from "flexsearch"
import { writeFileSync } from "fs"
import { readFile } from "fs/promises"

export type SearchDocument = {
  id: string
  title: string
  href: string
  subtitle: string
  content: string
}

const SEARCH_INDEX_FILE = "./public/search-index.json"

function newDocument() {
  return new Document({
    tokenize: "forward",
    resolution: 9,
    document: {
      id: "id",
      index: ["title", "subtitle", "content"],
      store: ["title", "href", "subtitle"]
    }
  })
}

export async function indexDocuments(searchDocuments: SearchDocument[]) {
  const index = newDocument()
  for (const page of searchDocuments) {
    index.add(page)
  }
  index.export(async function (key, data) {
    writeFileSync(SEARCH_INDEX_FILE, data, "utf8")
  })
  return index
}

export async function loadIndexedDocuments() {
  try {
    const index = newDocument()
    const data = await readFile(SEARCH_INDEX_FILE, "utf-8")
    index.import('', data)
    return index
  } catch (error) {
    console.error("Error loading search index:", error)
    throw error
  }
}

// ^ Indexing
// -------------------------------------------------
// v Searching

const normalize = (str: string) => str.toLowerCase()

export function searchDocuments(index: Document, query: string) {
  const searchResults = query ? index.search(query, { enrich: true }) : null

  const results = searchResults!

  const FIELD_PRIORITY = {
    title: 100,
    subtitle: 60,
    content: 30,
  }

  const TYPE_PRIORITY = {
    guide: 1000,
    "non-api": 500,
    api: 100,
  }

  const seen = new Map<string, { doc: any, score: number }>()

  for (const fieldGroup of results) {
    const fieldWeight = FIELD_PRIORITY[fieldGroup.field as keyof typeof FIELD_PRIORITY] ?? 0

    for (const { id: _id, doc } of fieldGroup.result) {
      const id = _id.toString()

      const typeWeight = TYPE_PRIORITY[doc?.type as keyof typeof TYPE_PRIORITY] ?? 0

      // Boost for exact title match
      const exactBoost = normalize(doc?.title?.toString() ?? "").includes(normalize(query ?? "")) ? 200 : 0

      const score = fieldWeight + typeWeight + exactBoost

      if (!seen.has(id.toString())) {
        seen.set(id, { doc, score })
      } else {
        // Keep higher score if seen before
        const existing = seen.get(id)!
        existing.score = Math.max(existing.score, score)
      }
    }
  }

  // Final sorted list
  const rankedResults = Array.from(seen.values())
    .sort((a, b) => b.score - a.score)
    .map(entry => entry.doc)

  return { rankedResults, searchResults }
}