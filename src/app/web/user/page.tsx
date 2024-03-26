'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import RatingStar from '@/components/common/RatingStar'
import { redirect } from 'next/navigation'

export default function UserProfile() {
  const dispatch = useAppDispatch()
  const authReducer = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (!authReducer.userLogin?._id) {
      return redirect('/')
    }
  }, [authReducer.userLogin])

  return (
    <div>
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center">
          <div className="rounded-md overflow-hidden border border-yellow-800 h-full mr-5">
            <Image
              src={authReducer.userLogin?.profileImgUrl}
              alt="profile-img"
              width={40}
              height={40}
              className="w-20 min-h-20 text-center"
            />
          </div>
          <div className="user-info">
            <div className="name flex mb-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                Verified
              </span>
            </div>
            <div className="coin mb-2 text-green-800 font-bold">
              1000 <span>Coin</span>
            </div>
            <div className="rating mb-2">
              <RatingStar rating={1} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authReducer.userLogin?.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Best techno</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authReducer.userLogin?.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Coin</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authReducer.userLogin?.coin}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Payment activities</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {authReducer.userLogin?.paymentActivities?.length > 0 &&
                  authReducer.userLogin?.paymentActivities.map((activity: any) => (
                    <>{activity?.id}</>
                  ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
