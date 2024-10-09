'use client'

import {ArticleCard} from '@/components/ArticleCard'
import {fetchGraphQL} from '@/lib/functions'
import {getAllPosts} from '@/lib/graphql'
import {Post} from '@/lib/graphql/generated/graphql'
import {useCallback, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface BlogArchiveProps {
  initialPosts: Post[]
  initialEndCursor: string | null
}

/**
 * Blog Archive.
 */
export function BlogArchive({
  initialPosts,
  initialEndCursor
}: Readonly<BlogArchiveProps>) {
  // Set up state.
  const [posts, setPosts] = useState<Partial<Post>[]>(initialPosts)
  const [endCursor, setEndCursor] = useState<string | null>(initialEndCursor)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  // Fetch more posts.
  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      // Fetch next set of posts using the end cursor for pagination.
      const {posts} = await fetchGraphQL(getAllPosts, {
        first: 10,
        after: endCursor
      })
      const newPosts = posts?.edges?.map((edge) => edge?.node)

      // Update state.
      if (newPosts?.length === 0 || !posts?.pageInfo?.hasNextPage) {
        setHasMore(false)
      } else {
        setPosts((prevPosts) => [
          ...prevPosts,
          ...(newPosts as Partial<Post>[])
        ])
        setEndCursor(posts?.pageInfo?.endCursor ?? null)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }, [endCursor, loading, hasMore])

  return (
    <InfiniteScroll
      dataLength={posts.length}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      next={fetchPosts}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen all my posts!</b>
        </p>
      }
    >
      {posts.map((post, index) => (
        <ArticleCard key={index} post={post} />
      ))}
    </InfiniteScroll>
  )
}
