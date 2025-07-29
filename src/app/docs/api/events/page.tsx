import { ArticleLayoutTemplate } from "@/component/article"
import { CardGridSection } from "@/component/card-grid-lists"
import { eventGroups } from "../../../../../content/api/events"
import { CardDescription, CardLink, CardTitle } from "@/component/card"

export default function DocsAPIEventsPage() {
  return (
    <ArticleLayoutTemplate
      components={{
        EventList: () => <CardGridSection>
          {eventGroups.map(e => <CardLink key={e.$label}
            href={`/docs/api/events/${ e.$label }`}>
            <CardTitle>{e.$label}</CardTitle>
            <CardDescription>{e.$info}</CardDescription>
            <CardDescription className="pt-2">{Object.entries(e.$members).length} Events</CardDescription>
          </CardLink>)}
        </CardGridSection>
      }}
      content={`

# Events API

Collection of Events that are available in KubeJS. These events can be used to hook into various parts of the game and modify behavior, add new features, or respond to player actions.

<EventList />


## Event Types

There are three main types of events in KubeJS which differ based on where and when they are fired:

### Startup

Scripts go into the \`startup_scripts/\` folder. Startup scripts run once, at startup, on both the client and server. Most events that require registering or modifying something at game start (like custom blocks, items, and fluids) will be Startup events.

### Server

Scripts go into the \`server_scripts/\` folder. It will be reloaded when you run \`/reload\` command. Server events are always accessible, even in single-player worlds. Most events that make changes to the world while the game is running (such as breaking blocks, teleporting players, or adding recipes) will go here.

### Client

Scripts go into the \`client_scripts/\` folder. Will be reloaded when you press \`F3+T\`. Most changes that are per-client (such as resource packs, Painter, and JEI) are client events.


      `}
    />
  )
}