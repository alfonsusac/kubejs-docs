import { ArticleLayoutTemplate } from "@/component/article"
import { notFound } from "next/navigation"
import { CardGridSection } from "@/component/card-grid-lists"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { prose } from "@/component/prose"
import { ClientPill, ServerPill, StartupPill } from "../../-components"
import { isEventHandler } from "../../../../../../content/api/helper"
import { eventGroups } from "../../../../../../content/api/events/+index"

export default async function DocsAPIEventGroupPage(props: {
  params: Promise<{ event_group_name: string }>
}) {
  const { event_group_name } = await props.params
  
  const eventGroup = eventGroups.$collection[event_group_name as keyof typeof eventGroups.$collection]
  if (!eventGroup) {
    notFound()
  }

  const events = Object.entries(eventGroup.$events)

  const currUrl = `/docs/api/events/${ event_group_name }`

  return (
    <ArticleLayoutTemplate
      content={`

<ObjectTag/>

# <EventGroupName />

<EventGroupInfo />

<EventGroupEventsSummary />

## Events

<EventGroupEvents />

        `}
      components={{
        EventGroupName: () => event_group_name,
        EventGroupInfo: () => <prose.p>{eventGroup.$subtitle}</prose.p>,
        EventGroupEventsSummary: () => {
          return (
            <prose.ul>
              {Object.entries(eventGroup.$events).map(([eName, e]) => {
                if (!isEventHandler(e)) return null
                return (
                  <prose.li key={eName}>
                    <prose.code>.{eName}()</prose.code>: {e.$info}
                  </prose.li>
                )
              })}
            </prose.ul>
          )
        },
        EventGroupEvents: () => <CardGridSection>
          {events.map(([eName, e]) => {
            if (!isEventHandler(e)) return null
            return <CardLink key={eName} href={currUrl + '/' + eName}>
              <CardTitle><prose.code>{eName}</prose.code></CardTitle>
              <CardDescription>{e.$info}</CardDescription>
              <div className="flex gap-1 pt-1">
                {e.$scope.includes('startup') && <StartupPill />}
                {e.$scope.includes('server') && <ServerPill />}
                {e.$scope.includes('client') && <ClientPill />}
              </div>
            </CardLink>
          })}
        </CardGridSection>
      }}
    />
  )
}