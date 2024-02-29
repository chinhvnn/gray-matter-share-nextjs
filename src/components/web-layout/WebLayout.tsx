import React from 'react'

import Footer from './Footer'
import FixedHeader from './FixedHeader'
import Banner from './Banner'

export default function WebLayout({ children }: any) {
  return (
    <main className="container mx-auto bg-white shadow-md p-4 min-h-[calc(100vh-3rem)] mt-12 flex flex-col">
      <FixedHeader />
      <Banner />
      <div className="content flex-1">{children}</div>
      <Footer />
    </main>
  )
}
