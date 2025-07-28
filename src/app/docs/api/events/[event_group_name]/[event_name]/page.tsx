import { notFound } from "next/navigation"
import { eventGroups } from "../../../../../../../content/api/events"
import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"

export default async function DocsAPIEventGroupEventPage(props: {
  params: Promise<{ event_name: string, event_group_name: string }>
}) {
  const { event_name, event_group_name } = await props.params

  const eventGroup = eventGroups.find(e => e.$name === event_group_name)
  if (!eventGroup) notFound()

  const event = eventGroup.$events[event_name]
  if (!event) notFound()


  return (
    <ArticleLayoutTemplate content={`

<FunctionTag/>

# <EventName />

<EventInfo />

## Syntax

<EventType />


      `}
      components={{
        EventName: () => event_name,
        EventInfo: () => <prose.p>{event.$info}</prose.p>,
        EventType: () => (
          <prose.pre>
            <code className="language-js">
              {event.$overloads.map(o => {
                return `
(method) ${ event_name }(
${o[1]?.map(p => `  ${p.$label}: ${p.$type}`).join(',\n')}
): ${o[0]}`.trim() + '\n'
              })}
            </code>
          </prose.pre>
        )
      }}
    />
  )
}

// (method) broken(extra: Internal.Block_, handler: (event: Internal.BlockBrokenEventJS) => void): void (+1 overload)
