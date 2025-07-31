import { CardGridSection } from "@/component/card-grid-lists"
import { BlockEventPage } from "./BlockEvents"
import { CardDescription, CardLink, CardTitle } from "@/component/card"
import { StandalonePage } from "@/lib/docs/docs2"

const eventGroups = {
  BlockEvents: BlockEventPage
}

export const EventGroupsPage = StandalonePage({
  href: "/docs/api/events",
  title: "Events",
  subtitle: "List of all events that KubeJS supports.",
  content: `
  <EventGroupList />

  ## Event Types

  There are three main types of events in KubeJS which differ based on where and when they are fired:

  ### Startup

  Scripts go into the \`startup_scripts/\` folder. Startup scripts run once, at startup, on both the client and server. Most events that require registering or modifying something at game start (like custom blocks, items, and fluids) will be Startup events.

  ### Server

  Scripts go into the \`server_scripts/\` folder. It will be reloaded when you run \`/reload\` command. Server events are always accessible, even in single-player worlds. Most events that make changes to the world while the game is running (such as breaking blocks, teleporting players, or adding recipes) will go here.

  ### Client

  Scripts go into the \`client_scripts/\` folder. Will be reloaded when you press \`F3+T\`. Most changes that are per-client (such as resource packs, Painter, and JEI) are client events.

  `,
  data: {
    events: eventGroups,
  },
  components: {
    EventGroupList: () => <CardGridSection>
      {Object.entries(eventGroups).map(([name, eventGroup]) => <CardLink key={name}
        href={`/docs/api/events/${ name }`}>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{eventGroup.$subtitle}</CardDescription>
        <CardDescription className="pt-2">{Object.entries(eventGroup.$data?.events ?? {}).length} Events</CardDescription>
      </CardLink>)}
    </CardGridSection>
  }
})


