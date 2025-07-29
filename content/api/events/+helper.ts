import type { Page } from "../../guide/+index"
import type { EventGroup } from "../helper"

export function EventGroupPage(
  title: string,
  description: string,
  content: string = "",
  eventGroup: EventGroup
) {
  return {
    $title: title,
    $subtitle: description,
    $content: content,
    $events: eventGroup.$members,
  } satisfies Page
}