import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { readFile } from "fs/promises"
import { notFound } from "next/navigation"
import { isObjectType } from "../../../../../../content/api/helper"
import { ClassTag, PackageTag } from "@/component/mdx"
import { CardLink, CardTitle } from "@/component/card"
import { CardGridSection } from "@/component/card-grid-lists"

export default async function DocsAPIObjectsCategoryPage(props: {
  params: Promise<{ category: string }>,
}) {
  const { category } = await props.params

  const has_file = await readFile(`./content/api/objects/${ category }.ts`).catch(() => null)
  if (!has_file)
    return notFound()

  const pkg = await import(`@/../content/api/objects/${ category }`)

  return <ArticleLayoutTemplate>
    <PackageTag />
    <prose.h1>{category}</prose.h1>

    <CardGridSection>
      {Object.entries(pkg).map(([name, value]) => {
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