import {graphql} from '@/lib/graphql/generated/gql'

export const CommentFragment = graphql(`
  fragment CommentFragment on Comment {
    status
    author {
      node {
        url
        name
        email
        avatar {
          url
          width
          height
          size
        }
      }
    }
    content(format: RENDERED)
    databaseId
    dateGmt
    replies {
      edges {
        node {
          author {
            node {
              url
              name
              email
              avatar {
                url
                width
                height
                size
              }
            }
          }
          content(format: RENDERED)
          databaseId
          dateGmt
        }
      }
    }
  }
`)
