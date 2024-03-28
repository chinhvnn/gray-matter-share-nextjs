import React from 'react'

import Footer from '../../components/web/Footer'
import FixedHeader from '../../components/web/FixedHeader'
import BreadCrumbs from '@/components/web/BreadCrumbs'
import * as authService from '../../services/AuthServices'

export default async function WebLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {
  try {
    const { data }: any = await authService.getAuthUser()
    params.authUser = data
  } catch (error) {
    params.error = error
  }
  return (
    <div className="content-wrapper-web">
      <main className="container mx-auto bg-gray-200 shadow-md p-8 min-h-[calc(100vh-3.5rem-230px)] mt-14 flex flex-col">
        <FixedHeader params={params} />
        <BreadCrumbs />
        <div className="content mt-5 flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
