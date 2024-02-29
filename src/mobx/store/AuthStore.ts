import * as AuthServices from '@/services/AuthServices'
import { makeAutoObservable, makeObservable } from 'mobx'

class AuthStore {
  isLoading = false
  userLogin = {} as any

  constructor() {
    makeAutoObservable(this)
    // makeObservable(this)
  }

  login = async (payload: any) => {
    this.isLoading = true
    const { data } = await AuthServices.login(payload)

    if (data) {
      this.userLogin = data.data
    }
    this.isLoading = false
  }

  logout() {
    this.userLogin = {}
  }
}

export const authStore = new AuthStore()
