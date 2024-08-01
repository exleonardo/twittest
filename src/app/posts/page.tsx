import { MainHeader } from '@/components/header'
import { Pagination } from '@/components/pagination/ui/pagination'
import { Posts } from '@/components/posts'
import { pagePagination } from '@/helpers/pagination'

import s from './page.module.scss'

type PostsPageProps = {
  searchParams: {
    page: string
  }
}
export default function PostsPage({ searchParams }: PostsPageProps) {
  return (
    <div>
      <MainHeader />
      <Posts currentPage={searchParams.page} />
      <div className={s.paginationBlock}>
        {pagePagination.map((pages, index) => (
          <Pagination currentPage={searchParams.page} key={index} page={pages} />
        ))}
      </div>
    </div>
  )
}
