import React from 'react'

import Footer from '../../components/web/Footer'
import FixedHeader from '../../components/web/FixedHeader'
import BreadCrumbs from '@/components/web/BreadCrumbs'

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="content-wrapper-web">
      <main className="container mx-auto bg-gray-200 shadow-md p-8 min-h-[calc(100vh-3.5rem-230px)] mt-14 flex flex-col">
        <FixedHeader />
        <BreadCrumbs />

        <div className="content flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
