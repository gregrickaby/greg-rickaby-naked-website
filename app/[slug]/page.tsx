import {Blocks} from '@/components/Blocks'
import {fetchGraphQL, seoGraphQL} from '@/lib/functions'
import {getPageBySlug} from '@/lib/graphql'
import {notFound} from 'next/navigation'

/**
 * Page props.
 */
interface PageProps {
  params: {
    slug: string
  }
}

/**
 * Generate metadata.
 */
export async function generateMetadata({params}: Readonly<PageProps>) {
  const {page} = await fetchGraphQL(getPageBySlug, {slug: params.slug})
  return seoGraphQL(page?.seo ?? {})
}

/**
 * Single Page.
 */
export default async function BlogPost({params}: Readonly<PageProps>) {
  // Get the page by slug.
  const {page} = await fetchGraphQL(getPageBySlug, {slug: params.slug})

  // No page? No problem.
  if (!page) {
    return notFound()
  }

  return (
    <article className="article">
      <header>
        <h1 dangerouslySetInnerHTML={{__html: page.title}} />
      </header>
      <Blocks content={page.content} />
    </article>
  )
}
