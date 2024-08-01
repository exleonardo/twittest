'use client'
import { useEffect } from 'react'

import { State } from '@/store/projects'
import { useStoreon } from 'storeon/react'

import s from '../style/notification.module.scss'

export type NotificationProps = {
  message: string
  status: 'error' | 'pending' | 'success'
  title: string
}
export const Notification = ({ message, status, title }: NotificationProps) => {
  const { dispatch, notification } = useStoreon<State, Event>('notification')
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
      dispatch('notification', false)
    }, 3000)

    return () => {
      clearTimeout(id)
    }
  }, [notification])

  const activeClasses = `${s.notification} ${statusClasses}`

  return (
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}
