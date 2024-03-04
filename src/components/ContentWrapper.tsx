'use client'

import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { fetchAuth } from '@/redux/features/auth/authThunk'
import Loading from './Loading'

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch()
  const authReducer = useAppSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchAuth())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="content-wrapper">
      {authReducer.isLoading ? (
        <div className="content_wrapper__auth-loading">
          <Loading />
        </div>
      ) : (
        children
      )}
    </div>
  )
}
