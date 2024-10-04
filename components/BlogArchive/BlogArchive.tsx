'use client'

import {ArticleCard} from '@/components/ArticleCard'
import type {Post} from '@/gql/graphql'
import {getAllPosts} from '@/lib/api/queries'
import {fetchGraphQL} from '@/lib/functions'
import {useCallback, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

/**
 * Blog Archive route with infinite scroll.
 */
export function BlogArchive({
  initialPosts,
  initialEndCursor
}: {
  initialPosts: Post[]
  initialEndCursor: string
}) {
  // Set up state.
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [endCursor, setEndCursor] = useState<string | null>(initialEndCursor)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)

  // Fetch more posts.
  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      // Fetch next set of posts using the end cursor for pagination.
      const data = await fetchGraphQL(getAllPosts, {
        first: 10,
        after: endCursor
      })
      const newPosts = data.posts.edges.map((edge: any) => edge.node)

      // Update state.
      if (newPosts.length === 0 || !data.posts.pageInfo.hasNextPage) {
        setHasMore(false)
      } else {
        setPosts((prevPosts) => [...prevPosts, ...newPosts])
        setEndCursor(data.posts.pageInfo.endCursor) // Set the new end cursor for the next fetch.
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
      next={fetchPosts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
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
