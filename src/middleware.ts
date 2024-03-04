import { NextRequest, NextResponse } from 'next/server'
import { TOKEN_KEY } from './config/axios'

const privateRoute: string[] = ['/dashboard'] // require authentication

const protectRoute: string[] = [] // require user role

export default function middleware(req: NextRequest) {
  const isAuthenticated = !!req.headers.get('cookie')?.replace(`${TOKEN_KEY}=`, '')

  if (!isAuthenticated && privateRoute.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/web', req.url))
  }

  // return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/dashboard'],
}
