import {graphql} from '@/lib/graphql/generated/gql'

export const SeoFragment = graphql(`
  fragment PostTypeSEOFragment on PostTypeSEO {
    title
    metaDesc
    readingTime
    metaRobotsNofollow
    metaRobotsNoindex
    canonical
    opengraphDescription
    opengraphTitle
    opengraphType
    opengraphUrl
    opengraphImage {
      altText
      sourceUrl(size: LARGE)
      mediaDetails {
        height
        width
      }
    }
  }
`)
