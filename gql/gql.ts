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
    "\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            node {\n              mediaItemUrl\n              altText\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetAllPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPosts($first: Int!, $after: String) {\n    posts(where: {status: PUBLISH}, first: $first, after: $after) {\n      edges {\n        cursor\n        node {\n          databaseId\n          title(format: RENDERED)\n          excerpt(format: RENDERED)\n          date\n          slug\n          featuredImage {\n            node {\n              mediaItemUrl\n              altText\n            }\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): typeof import('./graphql').GetAllPostsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
