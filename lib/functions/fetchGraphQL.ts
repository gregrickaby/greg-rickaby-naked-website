import type {TypedDocumentString} from '@/gql/graphql'

/**
 * Generic operation to fetch data from the WordPress GraphQL API.
 */
export async function fetchGraphQL<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables
): Promise<TResult> {
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL

  if (!apiUrl) {
    throw new Error('WordPress GraphQL API URL is not defined.')
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/graphql-response+json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Response Error:', errorText)
    throw new Error(`Network response was not ok: ${response.statusText}`)
  }

  const result = await response.json()

  if (result.errors) {
    console.error('GraphQL Errors:', result.errors)
    throw new Error(`GraphQL Error: ${JSON.stringify(result.errors)}`)
  }

  return result.data as TResult
}
