'use client'

import { Dropdown, MenuProps, Space } from 'antd'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchLogout } from '@/redux/features/auth/authThunk'

export default function FixedHeader() {
  const dispatch = useAppDispatch()
  const authReducer = useAppSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(fetchLogout())
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link href="/dashboard" className="font-semibold">
          Dashboard
        </Link>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <Link href="/user">User</Link>,
      key: '1',
    },
    {
      label: <Link href="/profile">Profile</Link>,
      key: '2',
    },
    {
      label: <span>Logout</span>,
      onClick: onLogout,
      key: '3',
    },
  ]

  return (
    <div className="fixed-header z-40 fixed h-14 bg-gray-100 left-0 top-0 w-full flex px-5 border-b border-gray-300 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* <div className="menu w-40">
          <div className="cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div> */}
        <div className="flex items-center">
          <div className="logo w-30">
            <div className="cursor-pointer text-lg font-bold text-amber-700">LOGO</div>
          </div>
          <div className="search flex-1 px-6">
            <div className="relative flex">
              <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-amber-700 bg-white bg-clip-padding pl-3 pr-8 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                placeholder="Search"
              />
              <span className="absolute right-0 top-1.5 z-10 flex items-center whitespace-nowrap px-3 text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {authReducer.userLogin?._id ? (
          <div className="user flex">
            <div className="recharge mr-5 flex items-center bg-amber-400 rounded-lg px-2 cursor-pointer">
              <span>Charge</span>
            </div>
            <div className="user-dropdown">
              <Dropdown
                menu={{ items }}
                trigger={['click']}
                placement="bottomRight"
                overlayStyle={{ minWidth: 150 }}
              >
                <div className="h-10 w-10 rounded-full bg-amber-500 cursor-pointer overflow-hidden">
                  {authReducer.userLogin?.profileImgUrl && (
                    <Image
                      src={authReducer.userLogin?.profileImgUrl}
                      alt="profile-img"
                      width={40}
                      height={40}
                      className="w-10 min-h-10 text-center"
                    />
                  )}
                </div>
              </Dropdown>
            </div>
          </div>
        ) : (
          <div className="auth-nav flex">
            <Link href={'/login'}>
              <span className="py-2.5 px-5 mr-3 font-medium text-gray-900 focus:outline-none bg-white rounded-2xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Login
              </span>
            </Link>
            <Link href={'/sign-up'}>
              <span className="py-2.5 px-5 mr-5 text-blue-600 font-bold focus:outline-none bg-white rounded-2xl border border-blue-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Create account
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
