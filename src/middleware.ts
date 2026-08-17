import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

 
  if (request.nextUrl.pathname.startsWith('/aku-bisa')) {
    if (request.nextUrl.pathname === '/aku-bisa/login') {
      return response;
    }
    // Redirect ke login jika belum ada session
    if (!user) {
      return NextResponse.redirect(new URL('/aku-bisa/login', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/aku-bisa/:path*'],
};