'use client'

import config from '@/lib/config'
import ReactDOM from 'react-dom'

/**
 * Preload resources component.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#resource-hints
 */
export function PreloadResources() {
  ReactDOM.preload(config.gravatarUrl, {as: 'fetch'})
  ReactDOM.preload('/bg.avif', {as: 'image'})
  return null
}
