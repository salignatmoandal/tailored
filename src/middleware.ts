import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/auth/sign-in",  // Mise à jour du chemin
    "/auth/sign-up",  // Si vous avez aussi une page d'inscription
    "/api/clerk-webhook",
  ],
  
  ignoredRoutes: [
    "/api/clerk-webhook",
  ]
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};