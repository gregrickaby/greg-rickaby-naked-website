import type {CodegenConfig} from '@graphql-codegen/cli'

const schemaUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL

if (!schemaUrl) {
  throw new Error(
    'Missing environment variable: NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL'
  )
}

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: [
    './app/**/*.{ts,tsx,graphql}',
    './lib/graphql/**/*.{ts,tsx,graphql}'
  ],
  ignoreNoDocuments: true,
  watch: true,
  generates: {
    './lib/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: {unmaskFunctionName: 'getFragmentData'}
      },
      config: {
        documentMode: 'string'
      }
    },
    './lib/graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
}

export default config
