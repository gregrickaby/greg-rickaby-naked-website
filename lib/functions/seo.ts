import config from '@/lib/config'
import type {PostTypeSeo} from '@/lib/graphql/generated/graphql'
import type {Post as RestPost} from '@/lib/types'
import {Metadata} from 'next'

/**
 * Fallback SEO.
 *
 * Gets fallback data from the global config.
 *
 * @see lib/config.ts
 */
const fallbackSeo: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.siteName} - ${config.siteDescription}`,
  description: config.siteDescription,
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    type: 'article',
    title: config.siteName,
    description: config.siteDescription,
    url: config.siteUrl
  }
}

/**
 * Map incoming SEO data from the REST API to a Next.js-friendly metadata object.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export function seoRest(post: RestPost): Metadata {
  // If no SEO data is available, return the fallback SEO.
  if (!post?.yoast_head_json) {
    return fallbackSeo
  }

  return {
    metadataBase: new URL(config.siteUrl),
    title: post.yoast_head_json.title,
    description: post.yoast_head_json.og_description,
    robots: {
      follow: post.yoast_head_json.robots.follow === 'follow',
      index: post.yoast_head_json.robots.index === 'index'
    },
    alternates: {
      canonical: post.yoast_head_json.canonical
    },
    openGraph: {
      type: 'article',
      title: post.yoast_head_json.og_title,
      description: post.yoast_head_json.og_description,
      url: post.yoast_head_json.og_url,
      publishedTime: post.yoast_head_json.article_published_time,
      modifiedTime: post.yoast_head_json.article_modified_time,
      images: [
        {
          url: post.yoast_head_json.og_image[0].url,
          width: post.yoast_head_json.og_image[0].width,
          height: post.yoast_head_json.og_image[0].height,
          type: post.yoast_head_json.og_image[0].type,
          alt: 'article image'
        }
      ]
    }
  }
}

/**
 * Map incoming SEO data from GraphQL to a Next.js-friendly metadata object.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 */
export function seoGraphQL(data: PostTypeSeo): Metadata {
  // If no SEO data is available, return the fallback SEO.
  if (!data) {
    return fallbackSeo
  }

  return {
    metadataBase: new URL(config.siteUrl),
    title: data?.title,
    description: data?.metaDesc,
    robots: {
      follow: data?.metaRobotsNofollow === 'follow',
      index: data?.metaRobotsNoindex === 'index'
    },
    alternates: {
      canonical: data?.canonical
    },
    openGraph: {
      type: data?.opengraphType === 'article' ? 'article' : 'website',
      title: data?.opengraphTitle as string,
      description: data?.opengraphDescription as string,
      url: data?.opengraphUrl as string,
      publishedTime: data?.opengraphPublishedTime as string,
      modifiedTime: data?.opengraphModifiedTime as string,
      images: [
        {
          url: data?.opengraphImage?.sourceUrl as string,
          width: data?.opengraphImage?.mediaDetails?.width as number,
          height: data?.opengraphImage?.mediaDetails?.height as number,
          alt: data?.opengraphImage?.altText as string
        }
      ]
    }
  }
}
