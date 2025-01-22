import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Get the user data from the session
    const user = request.cookies.get('user')?.value;

    if (!user) {
      // If no user is logged in, redirect to home page
      return NextResponse.redirect(new URL('/', request.url));
    }

    try {
      const userData = JSON.parse(user);
      if (userData.role !== 'ADMIN' && userData.role !== 'ADM') {
        // If user is not an admin, redirect to challenges
        return NextResponse.redirect(new URL('/challenges', request.url));
      }
    } catch (error) {
      // If there's an error parsing the user data, redirect to home
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: '/admin/:path*',
} 