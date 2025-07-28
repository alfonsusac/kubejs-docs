// Title (required)
export const $title = "KubeJS Documentation"

// Description (optional)
export const $description = "Documentation for KubeJS, a mod that allows you to customize your Minecraft server with JavaScript."

// Page Content in MDX
export const $content = `

`

// Collections inside this page (optional)
export const $collections = {
  api: {
    title: "API",
    structure: [
      {
        type: "string",
        import: "identifier",
        render: (value: string) => <div>{value}</div>
      },
      {
        type: "array",
        import: "examples",
        
      }
    ]
  }
}
