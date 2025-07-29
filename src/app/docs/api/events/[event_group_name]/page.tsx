import { ArticleLayoutTemplate } from "@/component/article"
import { eventGroups } from "../../../../../../content/api/events"
import { notFound } from "next/navigation"
import { CardGridSection } from "@/component/card-grid-lists"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { prose } from "@/component/prose"
import { ClientPill, ServerPill, StartupPill } from "../../-components"
import { isEventHandler } from "../../../../../../content/api/helper"

export default async function DocsAPIEventGroupPage(props: {
  params: Promise<{ event_group_name: string }>
}) {
  const { event_group_name } = await props.params

  const eventGroup = eventGroups.find(e => e.$label === event_group_name)
  if (!eventGroup) notFound()

  const events = Object.entries(eventGroup.$members)

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
        EventGroupInfo: () => <prose.p>{eventGroup.$info}</prose.p>,
        EventGroupEventsSummary: () => {
          return (
            <prose.ul>
              {Object.entries(eventGroup.$members).map(([eName, e]) => {
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