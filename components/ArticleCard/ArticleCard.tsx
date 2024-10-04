import type {Post} from '@/graphql/graphql'
import {formatDate} from '@/lib/functions'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticleCard.module.css'

/**
 * Article Card component.
 */
export function ArticleCard({post}: Readonly<{post: Post}>) {
  return (
    <article
      className={clsx('not-prose', styles.card)}
      key={post.id}
      data-testid="article-card"
    >
      <div className={styles.wrap}>
        <div className={styles.imageWrap}>
          <Link href={`/blog/${post.slug}`}>
            <Image
              alt={post.featuredImage?.node.altText}
              className={styles.image}
              height={192}
              src={post.featuredImage?.node.mediaItemUrl}
              width={594}
            />
          </Link>
        </div>

        <div className={styles.inner}>
          <div className={styles.meta}>
            <time dateTime={post.dateGmt}>{formatDate(post.date)}</time>
          </div>
          <Link className={styles.title} href={`/blog/${post.slug}`}>
            <h3 dangerouslySetInnerHTML={{__html: post.title}} />
          </Link>
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{__html: post.excerpt}}
          />
        </div>
      </div>
    </article>
  )
}
