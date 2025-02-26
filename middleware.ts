// app/middleware.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { protectedRoutes } from "./lib/nextauth/protectedRoutes";

// Definiere, auf welche Routen die Authentifizierung angewendet werden soll
export function middleware(req) {
  // Routen, die Authentifizierung benötigen (hier ein Beispiel für eine Admin-Seite)
  const url = req.nextUrl.clone();
  // Prüfe, ob die Anfrage eine geschützte Route ist
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    // Überprüfen, ob der Benutzer authentifiziert ist
    const token = req.cookies.get("next-auth.session-token");
    if (!token) {
      // Umleiten zur Login-Seite, wenn der Benutzer nicht authentifiziert ist
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
  // Wenn der Benutzer authentifiziert ist, weiter mit der Anfrage
  return NextResponse.next();
}

// Definiere, welche Routen durch diese Middleware beeinflusst werden
export const config = {
  matcher: protectedRoutes,
};
