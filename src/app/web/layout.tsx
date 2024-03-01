import React from 'react'

import Footer from '../../components/web-layout/Footer'
import FixedHeader from '../../components/web-layout/FixedHeader'

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="container mx-auto bg-white shadow-md p-4 min-h-[calc(100vh-3rem)] mt-12 flex flex-col">
      <FixedHeader />
      <div className="content flex-1">{children}</div>
      <Footer />
    </main>
  )
}
