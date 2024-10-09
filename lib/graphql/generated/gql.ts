/* eslint-disable */
import * as types from './graphql'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment CommentFragment on Comment {\n    status\n    author {\n      node {\n        url\n        name\n        email\n        avatar {\n          url\n          width\n          height\n          size\n        }\n      }\n    }\n    content(format: RENDERED)\n    databaseId\n    dateGmt\n    replies {\n      edges {\n        node {\n          author {\n            node {\n              url\n              name\n              email\n              avatar {\n                url\n                width\n                height\n                size\n              }\n            }\n          }\n          content(format: RENDERED)\n          databaseId\n          dateGmt\n        }\n      }\n    }\n  }\n':
    types.CommentFragmentFragmentDoc,
  '\n  fragment MediaItemFragment on MediaItem {\n    altText\n    mediaDetails {\n      height\n      width\n    }\n    sourceUrl(size: MEDIUM)\n  }\n':
    types.MediaItemFragmentFragmentDoc,
  '\n  fragment PostTypeSEOFragment on PostTypeSEO {\n    title\n    metaDesc\n    readingTime\n    metaRobotsNofollow\n    metaRobotsNoindex\n    canonical\n    opengraphDescription\n    opengraphTitle\n    opengraphType\n    opengraphUrl\n    opengraphImage {\n      altText\n      sourceUrl(size: LARGE)\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n':
    types.PostTypeSeoFragmentFragmentDoc,
  '\n  query GetPageBySlug($slug: ID = "URI") {\n    page(idType: URI, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      date\n      modified\n      featuredImage {\n        node {\n          ...MediaItemFragment\n        }\n      }\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n    }\n  }\n':
    types.GetPageBySlugDocument,
  '\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            node {\n              ...MediaItemFragment\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n':
    types.GetAllPostsDocument,
  '\n  query GetPostBySlug($slug: ID!) {\n    post(idType: SLUG, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      date\n      modified\n      featuredImage {\n        node {\n          ...MediaItemFragment\n        }\n      }\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n      categories {\n        edges {\n          node {\n            name\n            slug\n          }\n        }\n      }\n      tags {\n        edges {\n          node {\n            name\n            slug\n          }\n        }\n      }\n      comments {\n        edges {\n          node {\n            ...CommentFragment\n          }\n        }\n      }\n    }\n  }\n':
    types.GetPostBySlugDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment CommentFragment on Comment {\n    status\n    author {\n      node {\n        url\n        name\n        email\n        avatar {\n          url\n          width\n          height\n          size\n        }\n      }\n    }\n    content(format: RENDERED)\n    databaseId\n    dateGmt\n    replies {\n      edges {\n        node {\n          author {\n            node {\n              url\n              name\n              email\n              avatar {\n                url\n                width\n                height\n                size\n              }\n            }\n          }\n          content(format: RENDERED)\n          databaseId\n          dateGmt\n        }\n      }\n    }\n  }\n'
): typeof import('./graphql').CommentFragmentFragmentDoc
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment MediaItemFragment on MediaItem {\n    altText\n    mediaDetails {\n      height\n      width\n    }\n    sourceUrl(size: MEDIUM)\n  }\n'
): typeof import('./graphql').MediaItemFragmentFragmentDoc
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PostTypeSEOFragment on PostTypeSEO {\n    title\n    metaDesc\n    readingTime\n    metaRobotsNofollow\n    metaRobotsNoindex\n    canonical\n    opengraphDescription\n    opengraphTitle\n    opengraphType\n    opengraphUrl\n    opengraphImage {\n      altText\n      sourceUrl(size: LARGE)\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n'
): typeof import('./graphql').PostTypeSeoFragmentFragmentDoc
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPageBySlug($slug: ID = "URI") {\n    page(idType: URI, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      date\n      modified\n      featuredImage {\n        node {\n          ...MediaItemFragment\n        }\n      }\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n    }\n  }\n'
): typeof import('./graphql').GetPageBySlugDocument
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            node {\n              ...MediaItemFragment\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n'
): typeof import('./graphql').GetAllPostsDocument
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPostBySlug($slug: ID!) {\n    post(idType: SLUG, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      date\n      modified\n      featuredImage {\n        node {\n          ...MediaItemFragment\n        }\n      }\n      author {\n        node {\n          name\n          avatar {\n            url\n          }\n        }\n      }\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n      categories {\n        edges {\n          node {\n            name\n            slug\n          }\n        }\n      }\n      tags {\n        edges {\n          node {\n            name\n            slug\n          }\n        }\n      }\n      comments {\n        edges {\n          node {\n            ...CommentFragment\n          }\n        }\n      }\n    }\n  }\n'
): typeof import('./graphql').GetPostBySlugDocument

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}
