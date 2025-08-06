import { Page } from "@/lib/docs/docs4"

export function TutorialPage(opts: {
  title: string,
  subtitle: string,
  content?: string,
  subpages?: Record<string, Page>,
}) {
  return Page({
    title: opts.title,
    subtitle: opts.subtitle,
    content: opts.content,
    subpages: opts.subpages ?? {},
    meta: {
      prevNext: true,
    }
  })
}