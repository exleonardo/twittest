'use client'
import { PATH } from '@/common/routes'
import store from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import s from '@/components/header/style/main-header.module.scss'

export const Button = () => {
  const router = useRouter()

  const logoutHandler = () => {
    Cookies.remove('loggedin')

    store.dispatch('globalMessage', 'logout')
    store.dispatch('notification', true)
    store.dispatch('status', 'pending')
    router.push(PATH.base)
  }

  return (
    <button className={s.button} onClick={logoutHandler} type={'button'}>
      logout
    </button>
  )
}
