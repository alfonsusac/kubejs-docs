import { MDX } from "../mdx"

export default async function DocsIndexPage() {

  const test = await import("../../../content/index.tsx")  

  return (
    <div id="docs_page" className="max-w-2xl mx-auto">
      <section className="my-10">
        <MDX source={content} components={{
          ArticleLists: () => {
            return (
              <div className="flex flex-col gap-12 my-12">
                {index.map((section, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold mb-2">{section.section_title}</h2>
                    <div className="grid grid-cols-2 gap-2">
                      {section.content.map((subSection, subIndex) => (
                        <a key={subIndex} href={subSection.href}
                          className="block p-4 px-4 border border-foreground/10 rounded-md hover:bg-foreground/5 flex flex-col gap-0.5">
                          <div
                            className="font-medium">
                            {subSection.title}
                          </div>
                          <div className="text-foreground/60 text-sm">
                            {subSection.description}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          }
        }} />
      </section>
    </div>
  )
}

type Section = ReturnType<typeof Section>
function Section(title: string, content: SubSection[]) {
  return {
    section_title: title,
    content: content,
  }
}

type SubSection = ReturnType<typeof SubSection>
function SubSection(title: string, href: string, description?: string) {
  return {
    title: title,
    href: href,
    description: description || "",
  }
}

const index = [
  Section("Getting Started", [
    SubSection("Tutorials", "/docs/tutorials", "A collection of tutorials to help you get started with KubeJS."),
    SubSection("Tips", "/docs/tips", "A collection of tips and tricks to help you use KubeJS effectively."),
    SubSection("Folder Structure", "/docs/folder-structure", "Learn about the folder structure of /kubejs."),
    SubSection("Addons", "/docs/addons", "All KubeJS mod integrations"),
    SubSection("Tooling", "/docs/tooling", "Tools to help you develop KubeJS scripts."),
  ]),
  Section("References", [
    SubSection("Events", "/docs/ref/events", "List of all events that KubeJS supports."),
    SubSection("Recipes", "/docs/ref/recipes"),
    SubSection("Items", "/docs/ref/items"),
    SubSection("Blocks", "/docs/ref/blocks"),
    SubSection("Worldgen", "/docs/ref/worldgen"),
    SubSection("Data Pack", "/docs/ref/datapack"),
    SubSection("Commands", "/docs/ref/commands"),
  ]),
]

const content = `
  
# Index
Collection of links to various documentation pages and resources related to KubeJS.

---

<ArticleLists />

`