import { article } from "@/component/article"
import { EventGroupsPage } from "../../../../content/api/events/+index"
import { prose } from "@/component/prose"
import { MDX } from "@/component/mdx"

export default function DocsAPIEventsPage() {
  return (
    <article.layout>
      <prose.h1>{EventGroupsPage.$title}</prose.h1>
      <prose.p>{EventGroupsPage.$subtitle}</prose.p>
      <MDX
        source={EventGroupsPage.$content ?? ""}
        components={EventGroupsPage.$components}
      />
    </article.layout>
  )
}