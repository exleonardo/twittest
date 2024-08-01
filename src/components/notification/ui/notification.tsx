'use client'
import { useEffect } from 'react'

import { notification } from '@/store/actions'
import store, { EventsState, State } from '@/store/projects'
import { createStoreon } from 'storeon'

import s from '../style/notification.module.scss'

import DispatchEvent = createStoreon.DispatchEvent

export type NotificationProps = {
  message: string
  status: 'error' | 'pending' | 'success'
  title: string
}
export const Notification = ({ message, status, title }: NotificationProps) => {
  let statusClasses = ''

  if (status === 'success') {
    statusClasses = s.success
  }

  if (status === 'error') {
    statusClasses = s.error
  }

  if (status === 'pending') {
    statusClasses = s.pending
  }
  useEffect(() => {
    const id = setTimeout(() => {
      store.dispatch<DispatchEvent<State, EventsState>>(notification, false)
    }, 3000)

    return () => {
      clearTimeout(id)
    }
  }, [])

  const activeClasses = `${s.notification} ${statusClasses}`

  return (
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}
