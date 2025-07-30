import { article, ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { MDX } from "@/component/mdx"
import { FolderStructurePage } from "../../../../../content/folders/+index"

export default async function DocsFolderStructureSlugsPage(props: {
  params: Promise<{ slugs: string[] }>
}) {
  const { slugs } = await props.params
  const slug1 = slugs[0] as keyof typeof folders.$collection

  const folders = FolderStructurePage
  const folder = folders.$collection[slug1]
  if (!folder) {
    throw new Error(`Folder ${ slug1 } does not exist.`)
  }

  const prevNext = article.getPrevNext(slug1, folders.$collection)

  return (
    <ArticleLayoutTemplate>
      <prose.h1>{folder.$title}</prose.h1>
      <prose.p>{folder.$subtitle}</prose.p>
      <prose.hr className="my-8" />
      <MDX
        source={folder.$content}
      />
      <article.PrevNext
        data={prevNext}
        href={`/docs/folder-structure/`}
      />
    </ArticleLayoutTemplate>
  )

}