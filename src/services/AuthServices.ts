import { axiosInstance } from '@/config/axios'

export const login = async ({ email, password }: any) => {
  return await axiosInstance.post('login', {
    email,
    password,
  })
}

export const getAuthUser = async () => {
  return await axiosInstance.post('admin/auth')
}

export const logout = async () => {
  return await axiosInstance.post('admin/logout', {})
}
