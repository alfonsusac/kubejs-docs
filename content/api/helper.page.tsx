export type Page = {
  $title: string,
  $subtitle: string,
  $content?: string,
  $collection?: Record<string, Page>,
} & Record<string, any>