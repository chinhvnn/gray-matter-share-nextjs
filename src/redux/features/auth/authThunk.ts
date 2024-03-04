import { createAsyncThunk } from '@reduxjs/toolkit'

import * as authService from '../../../services/AuthServices'
import { TOKEN_KEY } from '@/config/axios'
import { cookie } from '@/utils/helper'

export const AuthAction = {
  fetchLogin: 'auth/fetchLogin',
  fetchAuth: 'auth/fetchAuth',
}

export const fetchLogin = createAsyncThunk(
  AuthAction.fetchLogin,
  async ({ email, password }: any) => {
    const { data } = await authService.login({ email, password })
    if (data.token) {
      try {
        // if (typeof window !== undefined) {
        //   window.localStorage.setItem(TOKEN_KEY, data.token)
        // }
        cookie.set(TOKEN_KEY, data.token)
      } catch (error) {}
    }
    return data
  },
)

export const fetchAuth = createAsyncThunk(AuthAction.fetchAuth, async () => {
  const { data } = await authService.getAuthUser()
  return data.data
})
