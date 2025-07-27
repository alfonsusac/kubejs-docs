export default async function DocsPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await props.params

  return (
    <div>
      {slug}
    </div>
  )
}