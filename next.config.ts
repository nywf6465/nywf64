import type { NextConfig } from "next";

/**
 * When the legacy dump is available, map planned routes to static archive
 * content HTML (not .shtml chrome). Stems from src/lib/legacy.ts.
 *
 * Footer “Last Updated” date is computed at render from newest src/public mtime
 * (see src/lib/siteUpdated.ts) — not baked into env at config load.
 */

const nextConfig: NextConfig = {
  // Allow Cursor Try Live / desktop preview proxies + Cloudflare quick tunnels
  // Without trycloudflare here, client components never hydrate over the tunnel
  // (hamburger onClick is a no-op — SSR button only).
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.sh",
    "*.cursor.com",
    "*.cursorapi.com",
    "*.trycloudflare.com",
  ],
  async redirects() {
    return [
      // Retarget mistaken `us*` prefix → canonical `unista*` United States routes
      {
        source: "/usoverview",
        destination: "/unistaoverview",
        permanent: true,
      },
      {
        source: "/us01",
        destination: "/unista01",
        permanent: true,
      },
      // Fountains of the Fairs — old foufair* / foufairoverview → Foucault / foufaioverview
      {
        source: "/foufairoverview",
        destination: "/foufaioverview",
        permanent: true,
      },
      {
        source: "/foufair01",
        destination: "/Foucault01",
        permanent: true,
      },
      {
        source: "/foufair02",
        destination: "/Foucault02",
        permanent: true,
      },
      {
        source: "/foufair03",
        destination: "/Foucault03",
        permanent: true,
      },
      {
        source: "/foufair04",
        destination: "/Foucault04",
        permanent: true,
      },
      // Lunar Fountain — mistaken lunfont* (missing “u”) → lunfount*
      {
        source: "/lunfontoverview",
        destination: "/lunfountoverview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
