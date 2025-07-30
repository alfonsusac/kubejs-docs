import { article } from "@/component/article"
import { notFound } from "next/navigation"
import { eventGroupsPage } from "../../../../../../content/api/events/+index"
import { MDX } from "@/component/mdx"

export default async function DocsAPIEventGroupPage(props: {
  params: Promise<{ event_group_name: string }>
}) {
  const { event_group_name } = await props.params

  const eventGroupPage = eventGroupsPage.$collection?.events[event_group_name as keyof typeof eventGroupsPage.$collection.events]
  if (!eventGroupPage) {
    notFound()
  }

  return (
    <article.layout>
      <MDX
        source={eventGroupPage.$content}
        components={eventGroupPage.$components}
      />
    </article.layout>
  )
}