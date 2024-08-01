'use client'
import { PATH } from '@/common/routes'
import store, { EventsState, State } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createStoreon } from 'storeon'

import s from '@/components/header/style/main-header.module.scss'

import DispatchEvent = createStoreon.DispatchEvent

export const Button = () => {
  const router = useRouter()

  const logoutHandler = () => {
    Cookies.remove('loggedin')

    store.dispatch<DispatchEvent<State, EventsState>>('globalMessage', 'logout')
    store.dispatch<DispatchEvent<State, EventsState>>('notification', true)
    store.dispatch<DispatchEvent<State, EventsState>>('status', 'pending')
    router.push(PATH.base)
  }

  return (
    <button className={s.button} onClick={logoutHandler} type={'button'}>
      logout
    </button>
  )
}
