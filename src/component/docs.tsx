import type { Page, PageCtx } from "@/lib/docs/docs3"
import { CardLink, CardTitle, CardDescription } from "./card"

export const docs = {
  subdirGrid: (ctx: PageCtx) =>
    () =>
      <section className="mt-8 flex flex-col gap-2">
        {Object.entries(ctx.page.$subdir).map(([slug, tutorial]) => (
          <CardLink href={`${ ctx.currPath }/${ slug }`} key={slug}>
            <CardTitle>{tutorial.$title}</CardTitle>
            <CardDescription>{tutorial.$subtitle}</CardDescription>
          </CardLink>
        ))}
      </section>,
  
}