import { StandalonePage, type Page } from "@/lib/docs/docs2"
import { editing_recipes } from "./editing_recipes"
import { getting_started } from "./getting_started"
import { editing_tags } from "./editing_tags"

export const TutorialPage = StandalonePage(
  "/docs/guide",
  "Guides",
  "A collection of tutorials to help you get started with KubeJS.",
  ``,
  {
    getting_started,
    editing_recipes,
    editing_tags,
  }
)

// export const tutorial = {
//   $title: "KubeJS Guide",
//   $subtitle: "Learn how to use KubeJS",
//   $content: "",
//   $collection: {
//     getting_started,
//     editing_recipes,
//   },
// } satisfies Page


export function Tutorial(
  title: string,
  description: string,
  content: string = "",
) {
  return StandalonePage(
    `/docs/guide/${title.toLowerCase().replace(/\s+/g, "-")}`,
    title,
    description,
    content,
  )
}

