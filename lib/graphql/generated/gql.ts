/* eslint-disable */
import * as types from './graphql';



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
    "\n  fragment NodeWithAuthorToUserConnectionEdgeFragment on NodeWithAuthorToUserConnectionEdge {\n    node {\n      name\n      avatar {\n        url\n      }\n    }\n  }\n": types.NodeWithAuthorToUserConnectionEdgeFragmentFragmentDoc,
    "\n  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n    node {\n      altText\n      sourceUrl\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n": types.NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc,
    "\n  fragment PostTypeSEOFragment on PostTypeSEO {\n    title\n    metaDesc\n    readingTime\n    metaRobotsNofollow\n    metaRobotsNoindex\n    canonical\n    opengraphDescription\n    opengraphTitle\n    opengraphType\n    opengraphUrl\n    opengraphImage {\n      altText\n      sourceUrl(size: LARGE)\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n": types.PostTypeSeoFragmentFragmentDoc,
    "\n  query GetPageBySlug($slug: ID = \"URI\") {\n    page(idType: URI, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      featuredImage {\n        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      }\n      author {\n        ...NodeWithAuthorToUserConnectionEdgeFragment\n      }\n      date\n      modified\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n    }\n  }\n": types.GetPageBySlugDocument,
    "\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetAllPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NodeWithAuthorToUserConnectionEdgeFragment on NodeWithAuthorToUserConnectionEdge {\n    node {\n      name\n      avatar {\n        url\n      }\n    }\n  }\n"): typeof import('./graphql').NodeWithAuthorToUserConnectionEdgeFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NodeWithFeaturedImageToMediaItemConnectionEdgeFragment on NodeWithFeaturedImageToMediaItemConnectionEdge {\n    node {\n      altText\n      sourceUrl\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n"): typeof import('./graphql').NodeWithFeaturedImageToMediaItemConnectionEdgeFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostTypeSEOFragment on PostTypeSEO {\n    title\n    metaDesc\n    readingTime\n    metaRobotsNofollow\n    metaRobotsNoindex\n    canonical\n    opengraphDescription\n    opengraphTitle\n    opengraphType\n    opengraphUrl\n    opengraphImage {\n      altText\n      sourceUrl(size: LARGE)\n      mediaDetails {\n        height\n        width\n      }\n    }\n  }\n"): typeof import('./graphql').PostTypeSeoFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPageBySlug($slug: ID = \"URI\") {\n    page(idType: URI, id: $slug) {\n      databaseId\n      content(format: RENDERED)\n      title(format: RENDERED)\n      featuredImage {\n        ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n      }\n      author {\n        ...NodeWithAuthorToUserConnectionEdgeFragment\n      }\n      date\n      modified\n      seo {\n        ...PostTypeSEOFragment\n      }\n      hideFeaturedImage {\n        hideFeaturedImage\n      }\n    }\n  }\n"): typeof import('./graphql').GetPageBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            ...NodeWithFeaturedImageToMediaItemConnectionEdgeFragment\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): typeof import('./graphql').GetAllPostsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
