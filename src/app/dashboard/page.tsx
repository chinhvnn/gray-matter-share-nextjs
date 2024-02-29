'use client'

import { authStore } from '../../mobx/store/AuthStore'
import { observer } from 'mobx-react-lite'

import Loading from '@/components/Loading'
import DashboardLayout from './DashboardLayout'

export default observer(function WebHome() {
  return (
    <DashboardLayout>
      {authStore.isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <div>Count: {authStore.userLogin._id}</div>
            <button
              onClick={() => {
                authStore.login({ email: 'chinhqn09@gmail.com', password: '123456' })
              }}
            >
              Click test
            </button>
          </div>
        </main>
      )}
    </DashboardLayout>
  )
})
