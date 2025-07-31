import { Document } from "flexsearch"
import { writeFileSync } from "fs"

export type SearchDocument = {
  id: string
  title: string
  href: string
  subtitle: string
  content: string
}

export async function indexDocuments(searchDocuments: SearchDocument[]) {
  const index = new Document({
    document: {
      id: "id",
      index: ["title", "subtitle", "content"],
      store: ["title", "href", "subtitle"]
    }
  })

  for (const page of searchDocuments) {
    index.add(page)
  }

  index.export(async function (key, data) {
    writeFileSync("./public/search-index.json", data, "utf8")
  });


}