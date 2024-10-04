import {BlogArchive} from '@/components/BlogArchive'
import {getAllPosts} from '@/lib/api/queries'
import config from '@/lib/config'
import {fetchGraphQL} from '@/lib/functions'
import {Metadata} from 'next'

/**
 * Generate metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: `Blog - ${config.siteName}`,
    description:
      'Welcome to my blog. Here you will find posts dating back to 2013.'
  }
}

/**
 * Blog Archive.
 */
export default async function Blog() {
  const data = await fetchGraphQL(getAllPosts, {first: 10})
  const initialPosts = data.posts.edges.map((edge: any) => edge.node)
  const initialEndCursor = data.posts.pageInfo.endCursor

  return (
    <article className="article">
      <h1>Blog</h1>
      <BlogArchive
        initialPosts={initialPosts}
        initialEndCursor={initialEndCursor}
      />
    </article>
  )
}
