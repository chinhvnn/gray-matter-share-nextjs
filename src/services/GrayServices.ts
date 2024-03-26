import { axiosInstance } from '@/config/axios'

export const getGrays = async () => {
  return await axiosInstance.get('grays')
}
