import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { readFile } from "fs/promises"
import { notFound } from "next/navigation"
import { ClassTag, PackageTag } from "@/component/mdx"
import { CardLink, CardTitle } from "@/component/card"
import { CardGridSection } from "@/component/card-grid-lists"
import { isObjectType } from "../../../../../../../content/api/helper"

export default async function DocsAPIObjectsCategoryPage(props: {
  params: Promise<{ category: string, entry: string }>,
}) {
  const { category, entry } = await props.params

  const has_file = await readFile(`./content/api/objects/${ category }.ts`).catch(() => null)
  if (!has_file)
    return notFound()

  const pkg = await import(`@/../content/api/objects/${ category }`)
  if (entry in pkg === false)
    return notFound()

  const entryItem = pkg[entry]
  if (!isObjectType(entryItem))
    throw new Error(`Entry "${ entry }" in package "${ category }" is not an object type.`)

  return <ArticleLayoutTemplate>
    <ClassTag />
    <prose.h1>{entry}</prose.h1>
    <prose.p>{entryItem.$info}</prose.p>
    
    <CardGridSection>
      {Object.entries(entryItem.$members).map(([name, value]) => {
        if (!isObjectType(value)) return
        return (
          <section key={name}>
            <CardLink href={`/docs/api/objects/${ category }/${ name }`}>
              <ClassTag />
              <CardTitle className="mt-0">{name}</CardTitle>
            </CardLink>
          </section>
        )
      })}
    </CardGridSection>

  </ArticleLayoutTemplate>

}