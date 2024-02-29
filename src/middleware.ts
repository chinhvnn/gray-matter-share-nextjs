import { NextRequest, NextResponse } from 'next/server'

const privateRoute: string[] = ['/login'] // require authentication

const protectRoute: string[] = [] // require user role

export default function middleware(req: NextRequest) {
  console.log('111', req.nextUrl.pathname)

  if (!privateRoute.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  // return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login'],
}
