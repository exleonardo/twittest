'use client'
import { useAuth } from '@/components/auth/hooks/useAuth'
import { Notification } from '@/components/notification'

import s from '../style/auth-form.module.scss'

export const Auth = () => {
  const { emailInputRef, globalMessage, notification, passwordInputRef, status, submitHandler } =
    useAuth()

  return (
    <>
      <div className={s.title}>any password and any valid email</div>
      <section className={s.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={s.control}>
            <label htmlFor={'email'}>Your Email</label>
            <input id={'email'} ref={emailInputRef} type={'email'} />
          </div>
          <div className={s.control}>
            <label htmlFor={'password'}>Your Password</label>
            <input id={'password'} ref={passwordInputRef} type={'password'} />
          </div>
          <div className={s.actions}>
            <button type={'submit'}>Login</button>
          </div>
        </form>
      </section>
      {notification && (
        <Notification message={globalMessage} status={status} title={'LOADING...'} />
      )}
    </>
  )
}
