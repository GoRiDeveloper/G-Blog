import { NextResponse, type NextRequest } from 'next/server';

/**
 * Middleware to be used before any server-side rendering.
 *
 * @param { NextRequest } request - Next server request.
 *
 * @returns { NextResponse<unknown> | undefined } Functionality before rendering any server-side components.
 */
// Middleware para utilizarse antes de cualquier renderizado de parte del servidor.
export function middleware(request: NextRequest): NextResponse<unknown> | undefined {
    if (request.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/main/home', request.url));
}

export const config = {
    matcher: '/',
};
