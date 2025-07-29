import { Page } from "../../guide/+index"
import type { EventGroup } from "../helper"
import { BlockEventPage } from "./BlockEvents"

export const events = {
  $title: "Events",
  $subtitle: "Events are used to listen to various actions in the game, such as block breaks, entity interactions, and more.",
  $content: "",
  $collection: {
    BlockEventPage: BlockEventPage,
  },
} satisfies Page

