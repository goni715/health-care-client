import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
import { IAuthUser } from './types/globals/globalsType';

const AuthRoutes = ['/login', '/register'];
const commonPrivateRoutes = [
   '/dashboard',
   '/dashboard/change-password',
   '/doctors',
];
const roleBasedPrivateRoutes = {
   patient: [/^\/dashboard\/patient/],
   doctor: [/^\/dashboard\/doctor/],
   admin: [/^\/dashboard\/admin/],
   super_admin: [/^\/dashboard\/super-admin/],
};
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get('accessToken')?.value;
 
  //if there is no accessToken
  if(!accessToken){
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
   } else {
      return NextResponse.redirect(new URL('/login', request.url));
   }
  }

  if(accessToken && commonPrivateRoutes.includes(pathname)){
    return NextResponse.next();
  }

  const decodedData = jwtDecode(accessToken) as IAuthUser;
  const role = decodedData?.role;

  // specific role can access his routes
  // if(role === "admin" && pathname.startsWith('/dashboard/admin')){
  //   return NextResponse.next();
  // }

  // if(role === "doctor" && pathname.startsWith('/dashboard/doctor')){
  //   return NextResponse.next();
  // }

  // if(role === "patient" && pathname.startsWith('/dashboard/patient')){
  //   return NextResponse.next();
  // }


   // specific role can access his routes

  if(role && roleBasedPrivateRoutes[role]){
    const routes = roleBasedPrivateRoutes[role]
    if(routes.some((route)=> pathname.match(route))){
      return NextResponse.next()
    }
  }

  return NextResponse.redirect(new URL('/', request.url))

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login', '/register', '/dashboard/:path*', '/doctors/:page*'],
}