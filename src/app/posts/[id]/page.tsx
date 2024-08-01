import { Card } from '@/components/card'
import { Comments } from '@/components/comments'
import { MainHeader } from '@/components/header'
import { fetchComments } from '@/helpers/comments'
import { fetchPost } from '@/helpers/post'
import { fetchUser } from '@/helpers/users'
import { Metadata } from 'next'

import s from './post.module.scss'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id)

  return {
    description: post.body,
    title: post.title,
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id)
  const comments = await fetchComments(params.id)
  const userId = await fetchUser(post.userId)

  return (
    <div>
      <MainHeader />
      <div className={s.description}>
        <Card>
          <section>
            <div>Post № : {params.id}</div>
            <div className={s.userName}>User Name : {userId.username}</div>
            <div className={s.title}>Title: {post.title}</div>
            <div className={s.text}>{post.body}</div>
          </section>
        </Card>
      </div>
      <Comments comments={comments} />
    </div>
  )
}
