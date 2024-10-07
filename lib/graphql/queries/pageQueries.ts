import {graphql} from '@/lib/graphql/generated/gql'

export const getPageBySlug = graphql(`
  query GetPageBySlug($slug: ID = "URI") {
    page(idType: URI, id: $slug) {
      databaseId
      content(format: RENDERED)
      title(format: RENDERED)
      featuredImage {
        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment
      }
      author {
        ...NodeWithAuthorToUserConnectionEdgeFragment
      }
      date
      modified
      seo {
        ...PostTypeSEOFragment
      }
      hideFeaturedImage {
        hideFeaturedImage
      }
    }
  }
`)
