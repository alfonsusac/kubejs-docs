import type { EventGroup } from "../helper"
import type { Page } from "../helper.page"

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