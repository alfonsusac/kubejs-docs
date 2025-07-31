// import { readdir } from "fs/promises"
// import { isObjectType, type DataType } from "../../../../content/api/helper"

// export async function getAPIObjects() {

//   const object_tree: {
//     name: string,
//     href: string,
//     source: string,
//     exported: DataType[]
//   }[] = []

//   const dirs = await readdir('./content/api/objects', { withFileTypes: true })

//   for (const dir of dirs) {
//     if (!dir.isFile()) continue // skip directories for now

//     const name = dir.name
//     const href = `/docs/api/objects/${ name.replaceAll('.ts', '') }`
//     const source = `https://github.com/alfonsusac/kubejs-docs/blob/main/src/app/${ href }.tsx`
//     const exported: DataType[] = []

//     const file = await import(`../../../../../content/api/objects/${ name }`)

//     // Iterate over the exported members of the file
//     Object.entries(file).forEach(([key, valueFn]) => {
//       if (typeof valueFn !== "function") return // skip non-function exports
//       const value = valueFn() // Call the function to get the actual object type
//       if (isObjectType(value)) {
//         exported.push(value as DataType)
//       }
//     })

//     object_tree.push({ name, source, exported, href })
//   }

//   return object_tree
// }