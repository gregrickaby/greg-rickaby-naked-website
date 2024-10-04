import type {CodegenConfig} from '@graphql-codegen/cli'

/**
 * GraphQL Codegen configuration.
 *
 * @see https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config
 */
const config: CodegenConfig = {
  documents: '**/*.tsx',
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL,
  watch: true,
  generates: {
    './gql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    }
  }
}

export default config
