import { ArticleLayoutTemplate } from "@/component/article"
import { CardGridSection } from "@/component/card-grid-lists"
import { readdir } from "fs/promises"
import type { DataType } from "../../../../../content/api/helper"
import { CardDescription, CardLink, CardTitle } from "@/component/card"

export default async function DocsAPIObjectsPage() {

  const object_tree: {
    name: string,
    href: string,
    source: string,
    exported: DataType[]
  }[] = []

  const dirs = await readdir('./content/api/objects', { withFileTypes: true })

  for (const dir of dirs) {
    if (!dir.isFile()) continue // skip directories for now

    const name = dir.name
    const href = `/docs/api/objects/${ name.replaceAll('.ts', '') }`
    const source = `https://github.com/alfonsusac/kubejs-docs/blob/main/src/app/${ href }.tsx`
    const exported: DataType[] = []

    const file = await import(`../../../../../content/api/objects/${ name }`)

    Object.entries(file).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && '$typeName' in value) {
        exported.push(value as DataType)
      }
    })

    object_tree.push({ name, source, exported, href })
  }


  return (
    <ArticleLayoutTemplate
      components={{
        ObjectPackageList: () => <CardGridSection>
          {object_tree.map(pkg => (
            <CardLink key={pkg.name} href={pkg.href}>
              <CardTitle>{pkg.name}</CardTitle>
            </CardLink>
          ))}
        </CardGridSection>
      }}
      content={`

# Objects API

Collection of Objects that might be referenced in KubeJS scripts. These objects are used to interact with the game and provide various functionalities.

<ObjectPackageList />

In this documentation, objects are categorized into packages based on where they were found in the source code.

        `}

    />
  )
}