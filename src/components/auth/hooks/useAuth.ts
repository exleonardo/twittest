import { FormEvent, useRef } from 'react'

import { PATH } from '@/common/routes'
import { loginUser } from '@/helpers/login'
import { EventsState, State, Store } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useStoreon } from 'storeon/react'

export const useAuth = () => {
  const { dispatch, globalMessage, notification, status } = useStoreon<State, EventsState>(
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
      dispatch<Store>('notification', true)
      const res = await loginUser(enteredEmail, enteredPassword)

      Cookies.set('loggedin', 'true')

      dispatch<Store>('status', 'success')

      dispatch<Store>('globalMessage', res.message)
      router.push(PATH.posts)
    } catch (e: any) {
      dispatch<Store>('status', 'error')
      dispatch<Store>('globalMessage', e.message)
      dispatch<Store>('notification', true)
    }
  }

  return { emailInputRef, globalMessage, notification, passwordInputRef, status, submitHandler }
}
