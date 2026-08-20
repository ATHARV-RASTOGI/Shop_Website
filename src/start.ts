import crypto from "node:crypto";
import { createStart, createMiddleware, createCsrfMiddleware } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === 'serverFn',
});

const securityHeadersMiddleware = createMiddleware().server(async ({ next, handlerType }) => {
  if (handlerType !== 'router') {
    return next();
  }

  const nonce = crypto.randomBytes(16).toString('base64');

  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://va.vercel-scripts.com`,
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data: https://res.cloudinary.com https://a.tile.openstreetmap.org https://b.tile.openstreetmap.org https://c.tile.openstreetmap.org",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://res.cloudinary.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
    "manifest-src 'self'",
    "upgrade-insecure-requests",
  ].join('; ');

  if (process.env.NODE_ENV === 'production') {
    setResponseHeader('Content-Security-Policy', csp);
  }

  return next({ context: { nonce } });
});

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware, csrfMiddleware, errorMiddleware],
}));
