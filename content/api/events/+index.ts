import { Page } from "../../guide/+index"
import { BlockEventPage } from "./BlockEvents"

export const eventGroups = {
  $title: "Events",
  $subtitle: "Events are used to listen to various actions in the game, such as block breaks, entity interactions, and more.",
  $content: "",
  $collection: {
    BlockEventPage: BlockEventPage,
  },
} satisfies Page

