import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { publicRoutes } from "./constants/routes";
import { USER_TOKEN } from "./constants/localstorage";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const userToken = request.cookies.get(USER_TOKEN)?.value;
  if (userToken && publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (!userToken && !publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/auth/log-in", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
