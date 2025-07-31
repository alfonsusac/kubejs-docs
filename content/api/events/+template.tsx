import { StartupPill, ServerPill, ClientPill } from "@/app-temp/api/-components"
import { CardLink, CardTitle, CardDescription } from "@/component/card"
import { CardGridSection } from "@/component/card-grid-lists"
import { prose } from "@/component/prose"
import { StandalonePage } from "@/lib/docs/docs2"
import { EventGroup, isEventHandler } from "../helper"


export function EventGroupPage(
  eventGroup: EventGroup,
  content: string,
) {
  return StandalonePage({
    href: `/docs/api/events/${ eventGroup.$label }`,
    title: eventGroup.$label,
    subtitle: eventGroup.$info,
    content: `
    <ObjectTag/>
    # <EventGroupName />

    <EventGroupInfo />

    <EventGroupEventsSummary />

    ${ content }

    ## Event Object API Reference

    <EventGroupEvents />
    `,
    data: {
      events: eventGroup.$members,
    },
    components: {
      EventGroupName: () => eventGroup.$label,
      EventGroupInfo: () => <prose.p>{eventGroup.$info}</prose.p>,
      EventGroupEventsSummary: () => {
        return (
          <prose.ul>
            {global.Object.entries(eventGroup.$members).map(([eName, e]) => {
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
        {global.Object.entries(eventGroup.$members).map(([eName, e]) => {
          if (!isEventHandler(e)) return null
          return <CardLink key={eName} href={`/docs/api/events/${ eventGroup.$label }/${ eName }`}>
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
    }
  })
}