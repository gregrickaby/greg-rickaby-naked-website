import {graphql} from '@/lib/graphql/generated/gql'

export const FeaturedImageFragment = graphql(`
  fragment MediaItemFragment on MediaItem {
    altText
    mediaDetails {
      height
      width
    }
    sourceUrl(size: MEDIUM)
  }
`)
