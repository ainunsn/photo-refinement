import { auth } from '@/app/auth'

export default auth((req) => {
  const isLoggedIn = !!req.auth

  const isPublicPage =
    req.nextUrl.pathname === '/' ||
    req.nextUrl.pathname === '/login'

  const isDashboard =
    req.nextUrl.pathname.startsWith('/dashboard')

  if (isLoggedIn && isPublicPage) {
    return Response.redirect(
      new URL('/dashboard', req.url)
    )
  }

  if (!isLoggedIn && isDashboard) {
    return Response.redirect(
      new URL('/login', req.url)
    )
  }
})