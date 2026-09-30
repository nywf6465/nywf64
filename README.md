# nywf64.com — New York World’s Fair 1964–65

**nywf64.com** homepage redesign matching the Project ChatGPT mockup. Brand is the domain.

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What’s in this pass

- Mockup layout: circular logo header + Space Age tagline + hamburger; night Unisphere hero; seven oval category hubs; vision section; utility bar; footer
- Primary CTA label (verbatim): **Explore the Fair**
- Palette from live header: navy `#26346e`, burgundy `#990000`
- Visitor takeaway kept in the vision section (exact wording)
- Category links wired to legacy IA hubs via `src/lib/legacy.ts`

## Follow-on

Full migration of legacy `.shtml` chrome / `.html` content and the `Image/` library. Public mid-res JPEGs / Wikimedia stand-ins are interim until the zip/FTP dump.
