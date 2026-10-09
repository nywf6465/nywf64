import type { NextConfig } from "next";

/**
 * When the legacy dump is available, map planned routes to static archive
 * content HTML (not .shtml chrome). Stems from src/lib/legacy.ts.
 *
 * Footer “Updated” date: build-time stamp via scripts/write-site-updated.mjs
 * (see src/lib/siteUpdated.ts). Do not walk public/ at request time — that
 * made Next trace the whole asset tree into every lambda (Vercel ENOSPC).
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
  // Keep serverless traces lean — packaging failed with "no space left on
  // device" when every route NFT included ~235MB of public/ (footer mtime walk).
  outputFileTracingExcludes: {
    "*": [
      "public/**",
      "node_modules/next/dist/docs/**",
      "node_modules/**/*.md",
      "node_modules/**/*.markdown",
      "node_modules/**/README*",
      "node_modules/**/LICENSE*",
      "node_modules/**/CHANGELOG*",
      "node_modules/@types/**",
      "node_modules/typescript/**",
      "node_modules/eslint/**",
      "node_modules/eslint-config-next/**",
    ],
  },
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
      // Illinois — friendly slugs → numbered routes
      {
        source: "/illinoisguidebook",
        destination: "/illinois01",
        permanent: true,
      },
      {
        source: "/illinoismanual",
        destination: "/illinois02",
        permanent: true,
      },
      {
        source: "/illinoispostcards",
        destination: "/illinois03",
        permanent: true,
      },
      {
        source: "/illinoisphotographalbum",
        destination: "/illinois04",
        permanent: true,
      },
      {
        source: "/illinoislandoflincoln",
        destination: "/illinois05",
        permanent: true,
      },
      {
        source: "/illinoislincolnphotoexhibit",
        destination: "/illinois06",
        permanent: true,
      },
      {
        source: "/illinoisgettysburg",
        destination: "/illinois07",
        permanent: true,
      },
      {
        source: "/illinoislincolnreturns",
        destination: "/illinois08",
        permanent: true,
      },
      {
        source: "/illinoisgreatmoments",
        destination: "/illinois09",
        permanent: true,
      },
      {
        source: "/illinoisbuildinglincoln",
        destination: "/illinois10",
        permanent: true,
      },
      {
        source: "/illinoisdisneypreview",
        destination: "/illinois11",
        permanent: true,
      },
      {
        source: "/illinoisvocaltalent",
        destination: "/illinois12",
        permanent: true,
      },
      {
        source: "/illinoisdisneyland",
        destination: "/illinois13",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
