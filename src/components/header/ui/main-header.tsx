import { PATH } from '@/common/routes'
import { Button } from '@/components/button/ui/button'
import Link from 'next/link'

import s from '../style/main-header.module.scss'

export const MainHeader = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href={PATH.posts}>Events</Link>
      </div>
      <Button />
    </header>
  )
}
