export default async function DocsPage(props: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await props.params

  return (
    <div id="docs_page_details" className="max-w-2xl mx-auto">
      <section className="my-10">

        <div>
          {slug.join(' / ')}
        </div>

      </section>
    </div>
  )
}