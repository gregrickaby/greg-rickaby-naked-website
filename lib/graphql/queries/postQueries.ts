import {graphql} from '@/lib/graphql/generated/gql'

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
              ...MediaItemFragment
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

/**
 * Get post by slug query.
 */
export const getPostBySlug = graphql(`
  query GetPostBySlug($slug: ID!) {
    post(idType: SLUG, id: $slug) {
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
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
            slug
          }
        }
      }
      comments {
        edges {
          node {
            ...CommentFragment
          }
        }
      }
    }
  }
`)
