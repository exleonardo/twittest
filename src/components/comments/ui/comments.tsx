import { Card } from '@/components/card'
import { CommentsData } from '@/helpers/comments'

import s from '../style/comments.module.scss'

type CommentsProps = {
  comments: CommentsData[]
}
export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className={s.description}>
      <Card>
        <section>
          <span className={s.section}>Comments</span>
          {comments.map(comment => {
            return (
              <div key={comment.id}>
                <div> Email : {comment.email}</div>
                <div className={s.name}>Name : {comment.name}</div>
                <div className={s.comment}>{comment.body}</div>
              </div>
            )
          })}
        </section>
      </Card>
    </div>
  )
}
