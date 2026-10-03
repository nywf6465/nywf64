<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nywf64.com — legacy page standards

## HARD RULE: navy title banner beneath the nav

Every legacy content page has a blue (navy `#26346e`) title banner at the top of the article. When creating or converting pages from legacy HTML, **always** include this banner **immediately beneath the attraction nav bar** (after `*NavChrome` / `AttractionNavChrome`). Never ship a legacy conversion that jumps from nav straight into body copy.

Required stack:

`SiteHeader` → hero → attraction nav → **navy title banner** → body → `Nav2Bar`


## Photographs standard (Photograph Album)

Canonical instance: **`/aertow03`** via `PhotographsPage` + `photographsPage.module.css`.  
Legacy attraction photograph album pages (menu label “Photograph Album”) use this layout.

### When to use it

Use the **photographs** standard when the legacy page is a Photograph Album: navy bar titled “Photograph Album”, named photo sections, photos on a light-grey tray with titles and SOURCE lines.

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar **Photograph Album** → photograph sections → `Nav2Bar` (`explicitPrevious`)

### Omit the Scrap Book banner

Legacy pages often show a wide **Photograph Scrap Book** banner image under the title bar. **Do not include it** on photographs conversions. Start content with the first section heading after the navy title bar.

### Body recipe (match `/aertow03` / legacy `aertow03.html`)

1. **Sections** — keep legacy section labels exactly (e.g. `Commercial Photographs`, `Fairgoer Photographs`)  
2. **Section tray** — light grey background `#cccccc` behind the photos in that section  
3. **Photo cards** — 2px black border around each image; bold Arial title under the photo; Arial Narrow `SOURCE:` / copyright line under the title  
4. **Alignment** — on **desktop**, center photograph cards in the tray (`justify-content: center`). On **mobile** (max-width 720px), keep cards **left-aligned** in a single column. Do not left-justify the tray on desktop.

4. Photos in a section sit in a wrapping row, **left-aligned** in the grey tray (not centered; stack left-aligned on narrow viewports)

### Type

- Title bar: Arial bold white on navy `#26346e`  
- Section headings: Arial bold  
- Photo titles: Arial bold (~13px)  
- SOURCE lines: Arial Narrow (~11px)

### Build checklist for a new photographs page (e.g. `/ford03`)

1. Fetch legacy album HTML and photo assets into `public/images/<slug>03/` — **skip** `Photo Scrapbook Banner.jpg`  
2. Add `src/app/<slug>03/page.tsx` that renders `<PhotographsPage …>` (copy `/aertow03`)  
3. Reuse the attraction overview `hero-banner.jpg` for the hero  
4. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref`  
5. Map each legacy section to `sections[]` with `heading` + `photos[]` (`image`, `title`, `source`)  
6. Point menu “Photograph Album” (or stub routes) to `/<slug>03`

Do **not** rebuild this layout from scratch — extend `PhotographsPage` if a later album needs a shared option.
