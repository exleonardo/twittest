'use client'
import { PATH } from '@/common/routes'
import { Events, State } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useStoreon } from 'storeon/react'

import s from '@/components/header/style/main-header.module.scss'

export const Button = () => {
  const router = useRouter()
  const { dispatch } = useStoreon<State, Events>('notification', 'globalMessage', 'status')
  const logoutHandler = () => {
    Cookies.remove('loggedin')

    dispatch('globalMessage', 'logout')
    dispatch('notification', true)
    dispatch('status', 'pending')
    router.push(PATH.base)
  }

  return (
    <button className={s.button} onClick={logoutHandler} type={'button'}>
      logout
    </button>
  )
}
