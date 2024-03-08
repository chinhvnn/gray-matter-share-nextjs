import React from 'react'

import Footer from '../../components/web/Footer'
import FixedHeader from '../../components/web/FixedHeader'

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="content-wrapper-web">
      <main className="container mx-auto bg-white shadow-md p-4 min-h-[calc(100vh-3rem-12rem)] mt-12 flex flex-col">
        <FixedHeader />
        <div className="content flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
