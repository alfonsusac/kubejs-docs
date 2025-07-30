import { notFound } from "next/navigation"
import { ArticleLayoutTemplate } from "@/component/article"
import { prose } from "@/component/prose"
import { isEventHandler, isMethodType, isObjectType } from "../../../../../../../content/api/helper"
import { RenderMethodOverloads, tokenColors } from "../../../../../../../content/api/helper.display"
import { EventGroupsPage } from "../../../../../../../content/api/events/+index"

export default async function DocsAPIEventGroupEventPage(props: {
  params: Promise<{ event_name: string, event_group_name: string }>
}) {
  const { event_name, event_group_name } = await props.params

  const eventGroupPage = EventGroupsPage.$collection.events[event_group_name as keyof typeof EventGroupsPage.$collection.events]
  if (!eventGroupPage) {
    notFound()
  }

  const event = eventGroupPage.$collection?.events[event_name]
  if (!event) {
    notFound()
  }

  if (!isEventHandler(event))
    throw new Error(`Event ${ event_name } is not a valid event handler. Missing $info or $scope.`)

  const eventEventHandler = event.$overloads[0].$params.find(p => p.$type.$type === 'method')?.$type
  if (!isMethodType(eventEventHandler))
    throw new Error(`Event ${ event_name } does not have a valid event handler object type.`)

  const eventHandlerEventObject = eventEventHandler.$overloads[0].$params[0].$type
  if (!isObjectType(eventHandlerEventObject))
    throw new Error(`Event ${ event_name } does not have a valid event handler object type.`)


  return (
    <ArticleLayoutTemplate content={`

<FunctionTag/>

# <EventName />

<EventInfo />

## Syntax

<EventType />

<EventHandlerEventType />


      `}
      components={{
        EventName: () => event_name,
        EventInfo: () => <prose.p>{event.$info}</prose.p>,
        EventType: () => (
          <prose.pre>
            <code className="language-js">
              <RenderMethodOverloads data={event} methodName={event_name} splitLines />
            </code>
          </prose.pre>
        ),
        EventHandlerEventType: () => (
          <>
            <>
              <prose.h2>
                <prose.code className="text-xl bg-transparent p-0 font-normal">
                  <span className={tokenColors.param}>event: </span>
                  <span className={tokenColors.type}>{eventHandlerEventObject.$label}</span>
                </prose.code>
              </prose.h2>
              <prose.p className="pb-3">
                This is the object that is passed to the event handler function. It contains various properties and methods that can be used to interact with the event.
              </prose.p>
              {Object.entries(eventHandlerEventObject.getAvailableAPI()).map(([name, m], i) => (
                <div key={i} className="my-3">
                  <p>
                    {m.$type === 'method' && <RenderMethodOverloads data={m} methodName={name} />}
                  </p>
                  <prose.p className="my-0 ml-4">
                    {m.$type === 'method' && m.$info}
                  </prose.p>
                </div>
              ))}
            </>
          </>
        ),
      }}
    />
  )
}

// (method) broken(extra: Internal.Block_, handler: (event: Internal.BlockBrokenEventJS) => void): void (+1 overload)
