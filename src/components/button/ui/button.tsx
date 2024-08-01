'use client'
import { PATH } from '@/common/routes'
import store from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createStoreon } from 'storeon'

import s from '@/components/header/style/main-header.module.scss'

import DispatchEvent = createStoreon.DispatchEvent

export const Button = () => {
  const router = useRouter()

  const logoutHandler = () => {
    Cookies.remove('loggedin')

    store.dispatch<DispatchEvent>('globalMessage', 'logout')
    store.dispatch<DispatchEvent>('notification', true)
    store.dispatch<DispatchEvent>('status', 'pending')
    router.push(PATH.base)
  }

  return (
    <button className={s.button} onClick={logoutHandler} type={'button'}>
      logout
    </button>
  )
}
