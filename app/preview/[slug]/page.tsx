import BlogContent from '@/components/BlogContent'
import FeaturedImage from '@/components/FeaturedImage'
import config from '@/lib/config'
import {formatDate} from '@/lib/functions'
import getPreview from '@/lib/queries/getPreview'
import {Metadata} from 'next'

/**
 * Route segment config.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
 */
export const dynamic = 'force-dynamic'
export const runtime = 'edge'

/**
 * Generate the metadata for each static route at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata({
  params
}: {
  params: {slug: string}
}): Promise<Metadata | null> {
  // Get the preview.
  const post = await getPreview(params.slug)

  // No preview? Bail...
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - ${config.siteName}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - ${config.siteName}`,
      description: post.excerpt,
      url: `${config.siteUrl}/blog/${params.slug}`,
      siteName: config.siteName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: post?.featuredImage?.node?.sourceUrl,
          width: post?.featuredImage?.node?.mediaDetails?.width,
          height: post?.featuredImage?.node?.mediaDetails?.height,
          alt: post?.featuredImage?.node?.altText
        }
      ]
    }
  }
}

/**
 * Preview route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Preview({params}: {params: {slug: string}}) {
  // Fetch the preview from WordPress.
  const post = await getPreview(params.slug)

  // No preview? Bail...
  if (!post) {
    return (
      <div className="container mx-auto text-center">
        <h1>Preview Error</h1>
        <p>
          Couldn&apos;t find a WordPress post with the Post ID:{' '}
          <span className="bg-yellow-200 p-1 font-mono text-black">
            {params.slug}
          </span>
        </p>
        <p>Please verify the Post ID and try again.</p>
      </div>
    )
  }

  return (
    <article>
      <header>
        <h1
          className="m-0 p-0 leading-none"
          dangerouslySetInnerHTML={{__html: post.title}}
        />
        <FeaturedImage
          image={post.featuredImage}
          hidden={post.hideFeaturedImage.hideFeaturedImage}
        />
        <p className="mt-4 italic">
          By {post.author.node.name} on{' '}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </header>
      <BlogContent content={post.content} />
      <footer className="flex items-center justify-between gap-4 pb-4">
        <div>
          <h3>Categories</h3>
          <ul className="m-0 flex list-none gap-2 p-0">
            {post.categories.nodes.map((category) => (
              <li className="m-0 p-0" key={category.databaseId}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Tags</h3>
          <ul className="m-0 flex list-none gap-2 p-0">
            {post.tags.nodes.map((tag) => (
              <li className="m-0 p-0" key={tag.databaseId}>
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </article>
  )
}
