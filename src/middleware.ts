'use server'

import { NextRequest, NextResponse } from 'next/server'
import { TOKEN_KEY } from './config/axios'
import { convertCookieFromStringToJson } from './utils/helper'
import * as authService from '@/services/AuthServices'
import { cookies } from 'next/headers'

export const config = {
  matcher: ['/', '/login', '/dashboard', '/web/user', '/web'],
}

const privateRoute: string[] = ['/dashboard', '/web/user'] // require authentication

const protectRoute: string[] = [] // require user role

export default async function middleware(req: NextRequest) {
  const cookie = convertCookieFromStringToJson(req.headers.get('cookie') || '')
  const isAuthenticated = !!cookie?.[TOKEN_KEY]

  // const query: any = await authService.getAuthUser()
  // const data = (await query.json()).data || null
  // cookies().set() not available in middleware

  if (!isAuthenticated && privateRoute.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  // return NextResponse.next()
}
