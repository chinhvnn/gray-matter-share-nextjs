'use client'

import React, { FormEvent, useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchLogin } from '@/redux/features/auth/authThunk'

export default function LoginPage() {
  const dispatch = useAppDispatch()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [loginErrMsg, setLoginErrMsg] = useState('')
  const authReducer = useAppSelector((state) => state.auth)

  const onSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(fetchLogin({ email, password }))
  }

  useEffect(() => {
    if (authReducer.userLogin?._id) {
      return redirect('/')
    }
  }, [authReducer.userLogin])

  useEffect(() => {
    setLoginErrMsg(authReducer.loginErrMsg)
  }, [authReducer.loginErrMsg])

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            width={100}
            height={100}
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Chinh demo
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="error-msg text-red-500" hidden={!loginErrMsg}>
              Errors: {loginErrMsg}
            </div>
            <form method="post" className="space-y-4 md:space-y-6" onSubmit={onSubmitLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  disabled={authReducer.isLoadingLogin}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                    setLoginErrMsg('')
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  autoComplete="on"
                  disabled={authReducer.isLoadingLogin}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                    setLoginErrMsg('')
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-800 dark:ring-offset-gray-800"
                      disabled={authReducer.isLoadingLogin}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className={`text-sm font-medium text-amber-800 hover:underline dark:text-amber-700
                    ${authReducer.isLoadingLogin ? 'pointer-events-none' : ''}
                  `}
                >
                  Forgot password?
                </a>
              </div>
              <button
                disabled={authReducer.isLoadingLogin}
                className={`w-full text-white bg-amber-800  focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-800 dark:focus:ring-amber-300
                  ${authReducer.isLoadingLogin ? '' : 'hover:bg-amber-700  dark:hover:bg-amber-600'}
                `}
              >
                {authReducer.isLoadingLogin ? (
                  <div className="text-gray-400">
                    <i className="fa-solid fa-spinner animate-spin mr-2"></i>Loading...
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a
                  href="#"
                  className={`font-medium text-amber-800 hover:underline dark:text-amber-500
                    ${authReducer.isLoadingLogin ? 'pointer-events-none' : ''}
                  `}
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
