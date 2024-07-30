import {Blocks} from '@/components'
import {getGithubRepos, WP_Query} from '@/lib/api'
import Link from 'next/link'

const latestPosts = new WP_Query({
  fields: ['id', 'title', 'slug'],
  order: 'desc',
  orderby: 'date',
  post_type: 'posts',
  per_page: 5
})

const photosQuery = new WP_Query({
  fields: ['id', 'content'],
  post_type: 'pages',
  per_page: 1,
  slug: 'photos'
})

/**
 * The home page route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Home() {
  const posts = await latestPosts.getPosts()
  const repos = await getGithubRepos(7)
  const photos = await photosQuery.getPosts()

  return (
    <article className="article">
      <section>
        <h1>Welcome</h1>
        <p>
          I&apos;m a{' '}
          <a href="https://www.linkedin.com/in/gregrickaby/" rel="author">
            full-stack engineer
          </a>
          , <a href="/photos">photography enthusiast</a>, and{' '}
          <a href="https://www.amazon.com/author/gregrickaby" rel="author">
            published author
          </a>{' '}
          who has been building websites and contributing to open-source
          projects since the late 90&apos;s. I&apos;m also excited about the{' '}
          <a href="https://indieweb.org/">IndieWeb</a> movement. I love the idea
          of owning your own online identity, domain, and content.
        </p>
        <p>
          Offline, I live in south Alabama and I&apos;m married with three kids.
          My hobbies include cooking, traveling, painting, and reading. Thanks
          for stopping by! ✌️
        </p>
      </section>
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h3>Latest Posts</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  dangerouslySetInnerHTML={{__html: post.title.rendered}}
                />
              </li>
            ))}
          </ul>
          <h3>Hobby Apps</h3>
          <ul>
            <li>
              <a href="https://spellingscramble.vercel.app">
                🧩 Spelling Scramble
              </a>
            </li>
            <li>
              <a href="https://preschool-flashcards.vercel.app">
                🔤 Preschool Flashcards
              </a>
            </li>
            <li>
              <a href="https://redditviewer.vercel.app">🙈 Reddit Viewer</a>
            </li>
            <li>
              <a href="https://localwx.vercel.app">⛈️ Local Weather</a>
            </li>
          </ul>
          <h3>Popular GitHub Repos</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count}
                ⭐️)
              </li>
            ))}
          </ul>
          <h3>Blogroll</h3>
          <ul>
            <li>
              <a href="https://petapixel.com/">PetaPixel</a> 📸
            </li>
            <li>
              <a href="https://www.dpreview.com/">DP Review</a> 📸
            </li>
            <li>
              <a href="https://fstoppers.com/">Fstoppers</a> 📸
            </li>
            <li>
              <a href="https://news.ycombinator.com/">Hacker News</a> 💻
            </li>
            <li>
              <a href="https://www.timeanddate.com/news/astronomy/">
                Astronomy News
              </a>{' '}
              🌌
            </li>
            <li>
              <a href="https://www.disneytouristblog.com/">
                Disney Tourist Blog
              </a>{' '}
              🏰
            </li>
            <li>
              <a href="https://make.wordpress.org/core/">Make WordPress Core</a>{' '}
              💻
            </li>
          </ul>
          <h3>Videoroll</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/@tested">
                Adam Savage&apos;s Tested
              </a>{' '}
              🥼
            </li>
            <li>
              <a href="https://www.youtube.com/@theartofphotography">
                The Art of Photography
              </a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@HighPrairieSportsmen">
                High Prairie Sportsmen
              </a>{' '}
              🦆
            </li>
            <li>
              <a href="https://www.youtube.com/@TFLtruck">
                The Fast Lane Truck
              </a>{' '}
              🚚
            </li>
            <li>
              <a href="https://www.youtube.com/@KeithCooper">Keith Cooper</a> 🖨️
            </li>
            <li>
              <a href="https://www.youtube.com/@geraldundone">Gerald Undone</a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@MarkDenneyPhoto">Mark Denny</a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@DustinAbbottTWI">
                Dustin Abbot
              </a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@ThePhlogPhotography">
                Christian Möhrle
              </a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@jherr">Jack Herrington</a> 💻
            </li>
            <li>
              <a href="https://www.youtube.com/@PetaPixel">
                Chris Niccolls and Jordan Drake
              </a>{' '}
              📸
            </li>
            <li>
              <a href="https://www.youtube.com/@AlexArmitage">Alex Armitage</a>{' '}
              📸
            </li>
          </ul>
        </div>
        <div className="homepage-gallery">
          <h3>Recent Photos</h3>
          {photos.map((photo) => (
            <Blocks key={photo.id} content={photo.content.rendered} />
          ))}
        </div>
      </section>
    </article>
  )
}
