import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])
const isApiRoute = createRouteMatcher(['/trpc(.*)', '/dashboard(.*)'])

export default clerkMiddleware((auth, request) => {
  if (isApiRoute(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
	