import { axiosInstance } from '@/config/axios'
import { fetchInstance } from '@/config/fetch'

export const login = async ({ email, password }: any) => {
  // return await axiosInstance.post('login', {
  //   email,
  //   password,
  // })
  return await fetchInstance('login', 'POST', {
    email,
    password,
  })
}

export const getAuthUser = async () => {
  // return await axiosInstance.post('admin/auth')
  return await fetchInstance('admin/auth', 'POST')
}

export const logout = async () => {
  return await axiosInstance.post('admin/logout', {})
}
