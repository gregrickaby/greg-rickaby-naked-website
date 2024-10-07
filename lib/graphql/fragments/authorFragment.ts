import {graphql} from '@/lib/graphql/generated/gql'

export const AuthorFragment = graphql(`
  fragment NodeWithAuthorToUserConnectionEdgeFragment on NodeWithAuthorToUserConnectionEdge {
    node {
      name
      avatar {
        url
      }
    }
  }
`)
