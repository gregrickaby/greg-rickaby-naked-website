import {BlogArchive} from '@/components/BlogArchive'
import config from '@/lib/config'
import {fetchGraphQL} from '@/lib/functions'
import {getAllPosts} from '@/lib/graphql'
import {Metadata} from 'next'
import {notFound} from 'next/navigation'

/**
 * Generate metadata.
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
  const {posts} = await fetchGraphQL(getAllPosts, {first: 10})

  // No posts? Return 404.
  if (!posts?.edges) {
    return notFound()
  }

  const initialPosts = posts.edges.map((edge) => edge.node)
  const initialEndCursor: string | null = posts?.pageInfo?.endCursor ?? null

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
