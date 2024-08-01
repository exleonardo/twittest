import Link from 'next/link'

import s from '../style/pagination.module.scss'

type PaginationType = {
  currentPage: string
  page: number
}
export const Pagination = ({ currentPage, page }: PaginationType) => {
  const classes = page === +currentPage ? s.activePage : s.paginationItem

  return (
    <ul className={s.paginationContainer}>
      <Link className={classes} href={`/posts?page=${page || 1}`}>
        <div className={'arrow left'} />
        {page}
      </Link>
    </ul>
  )
}
