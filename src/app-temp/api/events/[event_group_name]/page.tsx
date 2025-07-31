import { article } from "@/component/article"
import { notFound } from "next/navigation"
import { EventGroupsPage } from "../../../../../content/api/events/+index"
import { MDX } from "@/component/mdx"

export default async function DocsAPIEventGroupPage(props: {
  params: Promise<{ event_group_name: string }>
}) {
  const { event_group_name } = await props.params

  const eventGroupPage = EventGroupsPage.$data?.events[event_group_name as keyof typeof EventGroupsPage.$data.events]
  if (!eventGroupPage) {
    notFound()
  }

  return (
    <article.layout>
      <MDX
        source={eventGroupPage.$content ?? ""}
        components={eventGroupPage.$components}
      />
    </article.layout>
  )
}