import {Blocks} from '@/components/Blocks'
import {fetchGraphQL, seoGraphQL} from '@/lib/functions'
import {sanitizeText} from '@/lib/functions/sanitizeText'
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

  // No SEO? Return 404.
  if (!page?.seo) {
    return notFound()
  }

  return seoGraphQL(page.seo)
}

/**
 * Single Page.
 */
export default async function BlogPost({params}: Readonly<PageProps>) {
  // Get the page by slug.
  const {page} = await fetchGraphQL(getPageBySlug, {slug: params.slug})

  // No page title or content? Return 404.
  if (!page?.title || !page?.content) {
    return notFound()
  }

  return (
    <article className="article">
      <header>
        <h1>{sanitizeText(page.title)}</h1>
      </header>
      <Blocks content={page.content} />
    </article>
  )
}
