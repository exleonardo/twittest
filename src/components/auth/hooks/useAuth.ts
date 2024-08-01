import { FormEvent, useRef } from 'react'

import { PATH } from '@/common/routes'
import { loginUser } from '@/helpers/login'
import { Events, State } from '@/store/projects'
import Cookies from 'js-cookie'
import { NextError } from 'next/dist/lib/is-error'
import { useRouter } from 'next/navigation'
import { useStoreon } from 'storeon/react'

export const useAuth = () => {
  const { dispatch, globalMessage, notification, status } = useStoreon<State, Events>(
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
      dispatch('notification', true)
      const res = await loginUser(enteredEmail, enteredPassword)

      Cookies.set('loggedin', 'true')

      dispatch('status', 'success')

      dispatch('globalMessage', res.message)
      router.push(PATH.posts)
    } catch (e: unknown) {
      dispatch('status', 'error')
      dispatch('globalMessage', e.message)
      dispatch('notification', true)
    }
  }

  return { emailInputRef, globalMessage, notification, passwordInputRef, status, submitHandler }
}
