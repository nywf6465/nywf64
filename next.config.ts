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
      // General Motors — friendly slugs → numbered routes
      {
        source: "/gmguidebook",
        destination: "/gm01",
        permanent: true,
      },
      {
        source: "/gmmanual",
        destination: "/gm02",
        permanent: true,
      },
      {
        source: "/gmpostcards",
        destination: "/gm03",
        permanent: true,
      },
      {
        source: "/gmadvertising",
        destination: "/gm04",
        permanent: true,
      },
      {
        source: "/gmphotographalbumi",
        destination: "/gm05",
        permanent: true,
      },
      {
        source: "/gmphotographalbumii",
        destination: "/gm06",
        permanent: true,
      },
      {
        source: "/gmphotographalbumiii",
        destination: "/gm07",
        permanent: true,
      },
      {
        source: "/gmpressreleases",
        destination: "/gm08",
        permanent: true,
      },
      {
        source: "/gminvitationpreview",
        destination: "/gm09",
        permanent: true,
      },
      {
        source: "/gmsouvenirbook",
        destination: "/gm10",
        permanent: true,
      },
      {
        source: "/gmtranscriptfuturama",
        destination: "/gm11",
        permanent: true,
      },
      {
        source: "/gmletsgotothefair",
        destination: "/gm12",
        permanent: true,
      },
      {
        source: "/gmyourguide",
        destination: "/gm13",
        permanent: true,
      },
      {
        source: "/gmseethefuturefirst",
        destination: "/gm14",
        permanent: true,
      },
      {
        source: "/gmmaileronce",
        destination: "/gm15",
        permanent: true,
      },
      {
        source: "/gmfrigidaire",
        destination: "/gm16",
        permanent: true,
      },
      {
        source: "/gmno1show",
        destination: "/gm17",
        permanent: true,
      },
      {
        source: "/gmoldsmarch1964",
        destination: "/gm18",
        permanent: true,
      },
      {
        source: "/gmoldsmay1964",
        destination: "/gm19",
        permanent: true,
      },
      {
        source: "/gmpontiacjan1964",
        destination: "/gm20",
        permanent: true,
      },
      {
        source: "/gmpontiacmarch1964",
        destination: "/gm21",
        permanent: true,
      },
      {
        source: "/gmlighting",
        destination: "/gm22",
        permanent: true,
      },
      {
        source: "/gmdesignsummary",
        destination: "/gm23",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
