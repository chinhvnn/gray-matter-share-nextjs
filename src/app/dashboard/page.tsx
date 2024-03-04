'use client'

import { useAppSelector } from '@/hooks/useRedux'

import Loading from '@/components/Loading'

export default function Dashboard() {
  const authReducer = useAppSelector((state) => state.auth)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Count: {authReducer.userLogin._id}</div>
        <button>Click test</button>
      </div>
    </main>
  )
}
