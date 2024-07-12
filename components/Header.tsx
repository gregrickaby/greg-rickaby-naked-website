import Navigation from '@/components/Navigation'
import config from '@/lib/config'
import getMenuBySlug from '@/lib/queries/getMenuBySlug'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Header component.
 */
export default async function Header() {
  // Get the primary menu.
  const menu = await getMenuBySlug('primary')

  return (
    <header className="flex flex-col items-center justify-center gap-12 text-center md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-4 md:flex-row md:text-left">
        <Link href="/">
          <Image
            alt="Greg Rickaby"
            className="mx-auto h-24 w-24 rounded-full shadow-lg"
            height={96}
            loading="eager"
            src={config.siteLogo}
            width={96}
          />
        </Link>
        <div className="flex flex-col md:text-left">
          <Link href="/" className="no-underline">
            <h1 className="mb-3 text-4xl font-bold leading-none">
              {config.siteName}
            </h1>
          </Link>
          <p className="m-0 max-w-sm p-0 text-lg">{config.siteDescription}</p>
        </div>
      </div>
      <Navigation menu={menu} />
    </header>
  )
}
