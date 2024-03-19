import {NextRequest, NextResponse, userAgent} from "next/server";

export const config = {
    matcher: ['/prologue'],
}

// refresh

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const { device } = userAgent(request);
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    url.searchParams.set('viewport', viewport);
    return NextResponse.rewrite(url);
}
