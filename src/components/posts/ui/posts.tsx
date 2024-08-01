import { PATH } from '@/common/routes'
import { Card } from '@/components/card'
import { fetchPosts } from '@/helpers/posts'
import Link from 'next/link'

import s from '../style/posts.module.scss'

type PostsType = {
  currentPage: string
}
export const Posts = async ({ currentPage }: PostsType) => {
  const posts = await fetchPosts(+currentPage)

  return (
    <div>
      {posts.map(post => (
        <Link href={`${PATH.posts}/${post.id}`} key={post.id}>
          <Card>
            <div className={s.post}>
              <div>Post №: {post.id}</div>
              <div>{post.title}</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
