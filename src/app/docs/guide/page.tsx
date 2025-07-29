import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { tutorial } from "../../../../content/guide/+index"
import { CardDescription, CardLink, CardTitle } from "@/component/card"

export default function DocsGuidePage() {
  return (
    <ArticleLayoutTemplate>
      <prose.h1>{tutorial.$title}</prose.h1>
      <prose.p>{tutorial.$subtitle}</prose.p>

      <section className="mt-8 flex flex-col gap-2">
        {Object.entries(tutorial.$collection).map(([slug, tutorial]) => (
          <CardLink href={`/docs/guide/${ slug }`} key={slug}>
            <CardTitle key={tutorial.$title}>{tutorial.$title}</CardTitle>
            <CardDescription>{tutorial.$subtitle}</CardDescription>
          </CardLink>
        ))}
      </section>

    </ArticleLayoutTemplate>
  )
}