'use client'
import { PATH } from '@/common/routes'
import store, { EventsState } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { StoreonDispatch } from 'storeon'

import s from '@/components/header/style/main-header.module.scss'

export const Button = () => {
  const router = useRouter()

  const logoutHandler = () => {
    Cookies.remove('loggedin')

    store.dispatch<StoreonDispatch<EventsState>>('globalMessage', 'logout')
    store.dispatch<StoreonDispatch<EventsState>>('notification', true)
    store.dispatch<StoreonDispatch<EventsState>>('status', 'pending')
    router.push(PATH.base)
  }

  return (
    <button className={s.button} onClick={logoutHandler} type={'button'}>
      logout
    </button>
  )
}
