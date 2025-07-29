import { editing_recipes } from "./editing_recipes"
import { getting_started } from "./getting_started"

export const tutorial = {
  $title: "KubeJS Guide",
  $subtitle: "Learn how to use KubeJS",
  $content: "",
  $collection: {
    getting_started,
    editing_recipes,
  },
} satisfies Page


export function Tutorial(
  title: string,
  description: string,
  content: string = "",
) {
  return {
    $title: title,
    $subtitle: description,
    $content: content,
  }
}


export type Tutorial = ReturnType<typeof Tutorial>

export type Page = {
  $title: string,
  $subtitle: string,
  $content?: string,
  $collection?: Record<string, Page>,
} & Record<string, any>