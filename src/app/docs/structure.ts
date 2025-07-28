
type Section = ReturnType<typeof Section>
function Section(title: string, content: SubSection[]) {
  return {
    title: title,
    items: content,
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

export const docs_structure = [
  Section("Getting Started", [
    SubSection("Tutorials", "/docs/tutorials", "A collection of tutorials to help you get started with KubeJS."),
    SubSection("Tips", "/docs/tips", "A collection of tips and tricks to help you use KubeJS effectively."),
    SubSection("Folder Structure", "/docs/folder-structure", "Learn about the folder structure of /kubejs."),
    SubSection("Addons", "/docs/addons", "All KubeJS mod integrations"),
    SubSection("Tooling", "/docs/tooling", "Tools to help you develop KubeJS scripts."),
  ]),
  Section("References", [
    SubSection("Events", "/docs/api/events", "List of all events that KubeJS supports."),
    SubSection("Recipes", "/docs/api/recipes"),
    SubSection("Items", "/docs/api/items"),
    SubSection("Blocks", "/docs/api/blocks"),
    SubSection("Worldgen", "/docs/api/worldgen"),
    SubSection("Data Pack", "/docs/api/datapack"),
    SubSection("Commands", "/docs/api/commands"),
  ]),
]