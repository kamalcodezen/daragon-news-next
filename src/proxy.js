// // google proxy forcefully connect
// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"])
// // =============================

// import { auth } from "./lib/auth";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";

// export async function proxy(request) {

//     const session = await auth.api.getSession({
//         headers: await headers()
//     })
//     // console.log(session, "session")

//     if (session) {
//         return NextResponse.next()
//     }
//     return NextResponse.redirect(new URL('/login', request.url))
// }

// export const config = {
//     matcher: ['/about', "/career"],
// }




// google proxy forcefully connect
// import dns from "node:dns";
// dns.setServers(["8.8.8.8", "8.8.4.4"])
// =============================

import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    // logged in
    if (session) {
        return NextResponse.next();
    }


    // requested page
    const pathname = request.nextUrl.pathname;
    // login url
    const loginUrl = new URL("/login", request.url);
    // save redirect page
    loginUrl.searchParams.set("redirect", pathname);

    // ERROR MESSAGE
    loginUrl.searchParams.set("message", "Please login first");


    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: [
        "/about",
        "/career",
        "/news/:id*",
    ],

};