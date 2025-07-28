import { readdir, writeFile } from "fs/promises"
import { TypeBuilder, type TypeBuilderAbstract } from "./type-gen"

export async function getDocs(rootDir: string = './content') {
  const type_builder = new TypeBuilder("DocsDirectory", undefined, true)
  const docs = {}
  await readCollection(rootDir, docs, type_builder, true)
  await writeFile("./src/docs-types.ts", type_builder.build())
  return docs
}


async function readCollection(currdir: string, docs: object, type_builder: TypeBuilderAbstract, isRoot: boolean = false) {
  // Upon reaching a collection,
  // 1. read folders first, gather their collection id to collection_info.
  // 2. check page.tsx, complement collection info from here to collection_info.

  // Validate this directory
  const dirs = await readdir(currdir, { withFileTypes: true })
  const page_tsx_found = dirs.some(d => d.isFile() && d.name === "page.tsx")

  // Gather all folders
  const folders = dirs.filter(d => d.isDirectory()).map(d => d.name)
  const collections_schema = Object.fromEntries(folders.map(f => [f, {}])) as Record<string, {
    type?: string, // Decode this. Use zod?
    import?: Record<string, "string" | ""> // Validate this from `type` 
    render?: (value: any) => React.JSX.Element // Validate this from `type`
  }>

  // Check more info on
  const page_tsx_dir = currdir + '/page.tsx'
  const page = processPageTsx(page_tsx_dir)

}


async function processPageTsx(dir: string) {
  const content = await import(`@/..${ dir }`)
  validatePageTsxContent(content)


}

async function validatePageTsxContent(content: any) {

}