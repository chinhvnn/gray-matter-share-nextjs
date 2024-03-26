import { NextRequest, NextResponse } from 'next/server'
import { TOKEN_KEY } from './config/axios'
import { convertCookieFromStringToJson } from './utils/helper'

const privateRoute: string[] = ['/dashboard', '/web/user'] // require authentication

const protectRoute: string[] = [] // require user role

export default function middleware(req: NextRequest) {
  const cookie = convertCookieFromStringToJson(req.headers.get('cookie') || '')
  const isAuthenticated = !!cookie?.[TOKEN_KEY]

  if (!isAuthenticated && privateRoute.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  // return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/dashboard'],
}
