import { PageGroup, StandalonePage } from "@/lib/docs/docs2"
import { EventGroupsPage } from "./api/events/+index"

export const docs_structure = [
  PageGroup("Getting Started", [
    StandalonePage("/docs/guide", "Tutorials", "A collection of tutorials to help you get started with KubeJS."),
    StandalonePage("/docs/tips", "Tips", "A collection of tips and tricks to help you use KubeJS effectively."),
    StandalonePage("/docs/folder-structure", "Folder Structure", "Learn about the folder structure of /kubejs."),
    StandalonePage("/docs/addons", "Addons", "All KubeJS mod integrations"),
    StandalonePage("/docs/tooling", "Tooling", "Tools to help you develop KubeJS scripts."),
  ]),
  PageGroup("References", [
    EventGroupsPage,
    StandalonePage("/docs/api/objects", "Objects", "List of all objects that KubeJS supports."),
    StandalonePage("/docs/api/datapack", "Data Pack"),
    StandalonePage("/docs/api/commands", "Commands"),
  ]),
]

