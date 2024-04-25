import {type NextRequest, NextResponse} from 'next/server'
import {updateSession} from '@/utils/supabase/middleware'
import {createClient} from "@/utils/supabase/server";

export async function middleware(request: NextRequest) {
    if(true){
        return NextResponse.next();
    }
    const session = await updateSession(request);

    if(['/login', '/signup', '/profile', '/', "/classOf24"].indexOf(request.nextUrl.pathname) > -1){
        return NextResponse.next();
    }

    const supabase = createClient();
    const userResponse = await supabase.auth.getUser();
    if(userResponse.data.user){
        return session;
    }

    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
