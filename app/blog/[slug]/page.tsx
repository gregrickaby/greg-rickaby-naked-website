import {Blocks} from '@/components/Blocks'
import {Comments} from '@/components/Comments'
import {fetchGraphQL, formatDate, seoGraphQL} from '@/lib/functions'
import {sanitizeText} from '@/lib/functions/sanitizeText'
import {getPostBySlug} from '@/lib/graphql'
import {notFound} from 'next/navigation'

/**
 * Blog Post props.
 */
interface BlogPostProps {
  params: {
    slug: string
  }
}

/**
 * Generate metadata.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata({params}: BlogPostProps) {
  const {post} = await fetchGraphQL(getPostBySlug, {slug: params.slug})

  // No page? No problem.
  if (!post?.seo) {
    return notFound()
  }

  return seoGraphQL(post.seo)
}

/**
 * Blog Post.
 */
export default async function BlogPost({params}: Readonly<BlogPostProps>) {
  const {post} = await fetchGraphQL(getPostBySlug, {slug: params.slug})

  // No post? No problem.
  if (!post) {
    return notFound()
  }

  return (
    <article className="prose mx-auto max-w-3xl px-12 lg:prose-xl dark:prose-invert lg:px-0">
      <header>
        <h1>{sanitizeText(post.title)}</h1>
        <div className="font-sans text-sm">
          Published to{' '}
          <span className="font-bold">
            {post.categories.edges
              .map((category) => category.node.name)
              .join(', ')}
          </span>{' '}
          on <time>{formatDate(post.date)} </time>
        </div>
      </header>
      <Blocks content={post.content} />
      <footer>
        <p className="font-bold">
          Tagged with:{' '}
          <span className="font-normal">
            {post.tags.edges.map((tag) => tag.node.name).join(', ')}
          </span>
        </p>
      </footer>
      <Comments comments={post.comments} postId={post.databaseId} />
    </article>
  )
}
