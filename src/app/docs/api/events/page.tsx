import { article } from "@/component/article"
import { eventGroupsPage } from "../../../../../content/api/events/+index"
import { prose } from "@/component/prose"
import { MDX } from "@/component/mdx"

export default function DocsAPIEventsPage() {
  return (
    <article.layout>
      <prose.h1>{eventGroupsPage.$title}</prose.h1>
      <prose.p>{eventGroupsPage.$subtitle}</prose.p>
      <MDX
        source={eventGroupsPage.$content}
        components={eventGroupsPage.$components}
      />
    </article.layout>
  )
}