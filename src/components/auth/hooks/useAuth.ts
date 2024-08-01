import { FormEvent, useRef } from 'react'

import { PATH } from '@/common/routes'
import { loginUser } from '@/helpers/login'
import { EventsState, State } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createStoreon } from 'storeon'
import { useStoreon } from 'storeon/react'

import store from '../../../store/projects'
import DispatchEvent = createStoreon.DispatchEvent

export const useAuth = () => {
  const { globalMessage, notification, status } = useStoreon<State, EventsState>(
    'notification',
    'globalMessage',
    'status'
  )
  const router = useRouter()
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current?.value
    const enteredPassword = passwordInputRef.current?.value

    try {
      store.dispatch<DispatchEvent<State, EventsState>>('notification', 'true')
      const res = await loginUser(enteredEmail, enteredPassword)

      Cookies.set('loggedin', 'true')

      store.dispatch<DispatchEvent<State, EventsState>>('status', 'success')

      store.dispatch<DispatchEvent<State, EventsState>>('globalMessage', res.message)
      router.push(PATH.posts)
    } catch (e: any) {
      store.dispatch<DispatchEvent<State, EventsState>>('status', 'error')
      store.dispatch<DispatchEvent<State, EventsState>>('globalMessage', e.message)
      store.dispatch<DispatchEvent<State, EventsState>>('notification', true)
    }
  }

  return { emailInputRef, globalMessage, notification, passwordInputRef, status, submitHandler }
}
