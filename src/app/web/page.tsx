'use client'

import { authStore } from '../../mobx/store/AuthStore'
import { observer } from 'mobx-react-lite'

import Loading from '@/components/Loading'
import WebLayout from '../../components/web-layout/WebLayout'

export default observer(function WebHome() {
  return <WebLayout>Home page</WebLayout>
})
