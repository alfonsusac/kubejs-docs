import { getting_started } from "./getting_started"

export const tutorial = {
  $title: "KubeJS Guide",
  $subtitle: "Learn how to use KubeJS",
  $collection: {
    getting_started,
  },
}


export function Tutorial(
  title: string,
  description: string,
  content: string = "",
): Page {
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
}