import ContentWrapper from '@/components/dashboard/ContentWrapper'
import StoreProvider from '@/components/dashboard/StoreProvider'
import React from 'react'

export default function DashboardLayout({ children }: any) {
  return <ContentWrapper>{children}</ContentWrapper>
}
