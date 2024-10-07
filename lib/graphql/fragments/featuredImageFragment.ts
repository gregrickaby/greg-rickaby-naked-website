import {graphql} from '@/lib/graphql/generated/gql'

export const FeaturedImageFragment = graphql(`
  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {
    node {
      altText
      sourceUrl
      mediaDetails {
        height
        width
      }
    }
  }
`)
