import {Portfolio} from '@/components/Portfolio'
import Link from 'next/link'

/**
 * The home page route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Home() {
  return (
    <div className="article px-12 lg:px-0">
      <h1>Hello There 👋</h1>
      <p>
        I&apos;m a{' '}
        <a
          aria-label="follow on LinkedIn"
          href="https://www.linkedin.com/in/gregrickaby/"
          rel="author"
        >
          full-stack engineer
        </a>
        ,{' '}
        <Link
          aria-label="follow on Threads"
          href="https://www.threads.net/@gregoryrickaby"
          rel="author"
        >
          photography enthusiast
        </Link>
        , and{' '}
        <a
          aria-label="view my amazon author profile"
          href="https://www.amazon.com/author/gregrickaby"
          rel="author"
        >
          published author
        </a>{' '}
        living in Southeast Alabama. I&apos;m married with three kids and some
        of my other hobbies include cooking, traveling, and reading.
      </p>
      <Portfolio />
    </div>
  )
}
