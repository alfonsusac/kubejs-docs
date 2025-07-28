import { Boolean, Enum, External, fsig, Generic, GenericObject, Method, nullable, Object, param, Throw } from "../helper"
import { Exception } from "../java"


const CompoundEventResult = External("CompoundEventResult", "dev.architectury.event.CompoundEventResult")




const Type = Enum("EventResultType")

const EventResult = Object("EventResult", {
  type: Method("", fsig(Type)),
  value: Method("", fsig(GenericObject)),
  override: Method("", fsig(Boolean)),
  pass: Method("", fsig(Boolean)),
  error: Method("", fsig(Boolean)),
  interruptDefault: Method("", fsig(Boolean)),
  interruptFalse: Method("", fsig(Boolean)),
  interruptTrue: Method("", fsig(Boolean)),
  arch: Method("", fsig(External("EventResult", "dev.architectury.event.EventResult"))),
  archCompound: Method("", fsig(Generic(CompoundEventResult, "T")))
}, undefined, {
  Type: Type,
})
EventResult.$members.PASS = EventResult

export const EventExit = Object("EventExit", {
  result: EventResult
}, () => Exception)

export const EventJS = Object("EventJS", {
  cancel: Method(`Cancels the event with default exit value. Execution will be stopped **immediately**.
					
		\`cancel\` denotes a \`false\` outcome.`, fsig(Throw(EventExit), param('value', nullable(GenericObject)))),
  success: Method(`Stops the event with default exit value. Execution will be stopped **immediately**.
					
		\`success\` denotes a \`true\` outcome.`, fsig(Throw(EventExit), param('value', nullable(GenericObject)))),
  exit: Method(`Stops the event with default exit value. Execution will be stopped **immediately**.
					
		\`exit\` denotes a \`default\` outcome.`, fsig(Throw(EventExit), param('value', nullable(GenericObject))))
})