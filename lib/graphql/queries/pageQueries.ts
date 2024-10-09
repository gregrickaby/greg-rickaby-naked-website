import {graphql} from '@/lib/graphql/generated/gql'

export const getPageBySlug = graphql(`
  query GetPageBySlug($slug: ID = "URI") {
    page(idType: URI, id: $slug) {
      databaseId
      content(format: RENDERED)
      title(format: RENDERED)
      date
      modified
      featuredImage {
        node {
          ...MediaItemFragment
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      seo {
        ...PostTypeSEOFragment
      }
      hideFeaturedImage {
        hideFeaturedImage
      }
    }
  }
`)
