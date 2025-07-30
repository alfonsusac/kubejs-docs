import { ArticleLayoutTemplate } from "@/component/article"
import { folders } from "../../../../content/folders/+index"
import { prose } from "@/component/prose"
import { CardDescription, CardLink, CardTitle } from "@/component/card"

export default function DocsFolderStructurePage() { 


  return (
    <ArticleLayoutTemplate>
      <prose.h1>{folders.$title}</prose.h1>
      <prose.p>{folders.$subtitle}</prose.p>

      <section className="mt-8 flex flex-col gap-2">
        {Object.entries(folders.$collection).map(([slug, folder]) => (
          <CardLink href={`/docs/folder-structure/${ slug }`} key={slug}>
            <CardTitle key={folder.$title}>{folder.$title}</CardTitle>
            <CardDescription>{folder.$subtitle}</CardDescription>
          </CardLink>
        ))}
      </section>
    </ArticleLayoutTemplate>
  )
}