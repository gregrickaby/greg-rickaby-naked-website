import {graphql} from '@/gql'

/**
 * Get all posts with pagination query.
 */
export const getAllPosts = graphql(`
  query GetAllPosts($first: Int!, $after: String) {
    posts(where: {status: PUBLISH}, first: $first, after: $after) {
      edges {
        cursor
        node {
          databaseId
          title(format: RENDERED)
          excerpt(format: RENDERED)
          date
          slug
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`)
