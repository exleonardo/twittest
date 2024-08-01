import { FormEvent, useRef } from 'react'

import { PATH } from '@/common/routes'
import { loginUser } from '@/helpers/login'
import { Events, State } from '@/store/projects'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useStoreon } from 'storeon/react'

export const useAuth = () => {
  const { dispatch, globalMessage, notification, status } = useStoreon<State, Events>(
    'notification',
    'globalMessage',
    'status'
  )
  const router = useRouter()
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    try {
      dispatch('notification', true)
      const res = await loginUser(enteredEmail, enteredPassword)

      Cookies.set('loggedin', 'true')

      dispatch('status', 'success')

      dispatch('globalMessage', res.message)
      router.push(PATH.posts)
    } catch (e) {
      dispatch('status', 'error')
      dispatch('globalMessage', e.message)
      dispatch('notification', true)
    }
  }

  return { emailInputRef, globalMessage, notification, passwordInputRef, status, submitHandler }
}
