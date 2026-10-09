<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nywf64.com — legacy page standards

## HARD RULE: navy title banner beneath the nav

Every legacy content page has a blue (navy `#26346e`) title banner at the top of the article. When creating or converting pages from legacy HTML, **always** include this banner **immediately beneath the attraction nav bar** (after `*NavChrome` / `AttractionNavChrome`). Never ship a legacy conversion that jumps from nav straight into body copy.

Required stack for legacy attraction / essay / map / manual / postcards / photographs pages:

`SiteHeader` → hero → attraction nav → **navy title banner** → body → `Nav2Bar`

## HARD RULE: Interactive Fair maps keep native size on mobile

Interactive Fair maps (legacy image maps with clickable/tappable hotspots — e.g. `/maps01` and similar area maps) **must keep their native pixel size on mobile**. Do **not** shrink-to-fit the map to the viewport width.

Visitors scroll and pan (including horizontal overflow) so hotspots remain large enough to tap. When the map scrolls left/right, the **page header and footer stay stationary**; only the map viewport pans.

Apply this whenever building or converting interactive Fair maps from legacy. Attraction “Locate It” maps (`*map` with a single pointed location) are a different pattern — follow the locate-map standard for those.

## Guidebook standard (Official Guidebook & Souvenir Map)

Canonical instance: **`/bell01`** via `GuidebookSouvenirPage` + `guidebookSouvenirPage.module.css`.  
Legacy attraction `*01.html` Official Guidebook & Souvenir Map pages use this layout. Other live examples: `/ford01`, `/unista01`, `/poraut01`.

### When to use it

Use the **guidebook** standard when the legacy page is the three-column Official Guide Book / Official Guide Book / Official Souvenir Map entry (covers, pavilion logos, 1964 & 1965 copy, map with Locate It).

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar → three columns → `Nav2Bar`

Default title bar text: **1964 & 1965 Official Guidebook & Souvenir Map**  
Some legacy pages append “Entries” (e.g. Port Authority) — pass `title` when needed.

### Body recipe (match `/bell01` / legacy `bell01.html`)

Three columns with silver dividers (stack under 720px):

1. **1964 Official Guide Book** — cover (1px frame, no rule under it), three-line caption at lower right of cover, pavilion logo, name, body copy, `*` admission line(s), highlight blocks  
2. **1965 Official Guide Book** — same structure; often an italic summary lead before the body; admission uses italic `¶` (pilcrow)  
3. **1964 Official Souvenir Map** — map cover (1px frame), **Locate It** at upper right of the cover linking to the locate-it map page, three-line caption at lower right, area-map detail image below

Do **not** show the legacy “Revised” line.

### Type

- Times New Roman where the legacy `<font>` tag sets no face (typical 1964 names, labels, body)  
- Arial where legacy sets `face="Arial"` (typical 1965 names and highlight labels)  
- Keep legacy HTML size steps  
- 1964 admission mark: larger roman asterisk `*`  
- 1965 admission mark: italic pilcrow `¶`  
- Title bar: Arial bold white on navy `#26346e`

### Build checklist for a new guidebook page (e.g. `/gm01`)

1. Fetch legacy `*01.html` and its cover/logo/map images into `public/images/<slug>01/`  
2. Add `src/app/<slug>01/page.tsx` that renders `<GuidebookSouvenirPage …>` (copy `/bell01` as the template)  
3. Reuse the attraction overview `hero-banner.jpg` for the hero  
4. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref` (often overview → guidebook → manual)  
5. Fill `guide1964`, `guide1965`, and `map` from the legacy columns — preserve wording, faces, and highlight labels  
6. Set `map.locateHref` to the attraction’s locate-it map route (e.g. `/bellmap`)  
7. Override `title` only when legacy’s navy bar differs (e.g. “… Entries”)  
8. Point menu “1964 & 1965 Official Guidebook & Souvenir Map” (or equivalent) to `/<slug>01`

Do **not** rebuild this layout from scratch — extend `PostcardPage` if a later gallery needs a shared option.

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

### Type

- Title bar: Arial bold white on navy `#26346e`  
- Section headings: Arial  
- Photo titles: Arial bold  
- SOURCE lines: Arial Narrow

### Build checklist for a new photographs page (e.g. `/ford03`)

1. Fetch legacy album HTML and photo assets into `public/images/<slug>03/` — **skip** `Photo Scrapbook Banner.jpg`  
2. Add `src/app/<slug>03/page.tsx` that renders `<PhotographsPage …>` (copy `/aertow03`)  
3. Reuse the attraction overview `hero-banner.jpg` for the hero  
4. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref`  
5. Map each legacy section to `sections[]` with `heading` + `photos[]`  
6. Point menu “Photograph Album” (or stub routes) to `/<slug>03`

Do **not** rebuild this layout from scratch — extend `PhotographsPage` if a later album needs a shared option.

## HARD RULE: no yellowing on locate-it maps

When creating or updating a **Locate it!** map page (`*map` routes, `locate-map.jpg`), **always remove the aged cream/yellow paper cast** from the legacy scan before shipping. Do not paste the yellowed legacy composite as-is.

Legacy Official Souvenir Map scans often look like yellowed paper. Recreated maps must show **neutral / white cream paper**. Red locate arrows stay exact — never neutralize or recolor arrow pixels.

### Preferred methods (in order)

1. **Clean cream base + GIF arrow** — When a clean (non-yellowed) area-map base already exists in the repo, composite the legacy `*map.gif` arrow onto it at the legacy pixel offset. Prefer this for new maps.
2. **In-place neutralize** — If compositing would risk shifting the red arrow (mismatched crop, offset, or GIF vs JPEG alignment), neutralize yellowness on the existing `locate-map.jpg` in place and **preserve red-arrow pixels exactly** (verify arrow pixel counts before/after). Do not ship a recomposite that moves the arrow.

Never leave paper yellowness visibly yellow (target near-zero yellowness on cream pixels; red arrows unchanged).

## Locate-it map standard (1964 Official Souvenir Map)

Canonical instance: **`/allstamap`** via `LocateMapTitleBar` + `LocateMapIntroLead` + `LocateMapFullSizeLink` + `locateMapPage.module.css` / page module.  
Legacy attraction `*map.shtml` / `*map.html` Locate it! pages use this layout.

### When to use it

Use the **locate-it map** standard when the legacy page is the area map with a red arrow marking the pavilion (menu “Locate it!” / Official Souvenir Map locator).

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar **1964 Official Souvenir Map** (`LocateMapTitleBar`) → intro lead + full-size map link → bordered `locate-map.jpg` → `Nav2Bar`

### Body recipe (match `/allstamap`)

1. **Intro** — `LocateMapIntroLead` (“Locate it!” in navy `#26346e`) plus `LocateMapFullSizeLink`  
2. **Map** — single composite `public/images/<slug>map/locate-map.jpg` in a 1px black frame, left-justified; natural area dimensions (do not stretch)  
3. **No yellowing** — apply the HARD RULE above before commit

### Typical area-map pixel sizes

| Area | Typical `locate-map.jpg` size |
|------|-------------------------------|
| Industrial | 1359×1213 |
| Amusement | 930×655 |
| International | 910×1158 |
| Federal & States | 1076×1233 |
| Transportation | 807×1165 |

Match the legacy page’s area and GIF placement; Industrial GIF overlays are often at `(0, 0)` — confirm per attraction.

### Build checklist for a new locate-it map page (e.g. `/denmarkmap`)

1. Fetch legacy `*map.shtml` / `*map.html` and assets (`*map.gif`, area base if needed) into `public/images/<slug>map/`  
2. Build `locate-map.jpg` with **neutral cream paper** (clean base + GIF, or in-place neutralize) — **never ship yellowed legacy paper**  
3. Verify red-arrow pixels are intact (counts unchanged if neutralizing)  
4. Add `src/app/<slug>map/page.tsx` modeled on `/allstamap` (shared LocateMap* components + page CSS)  
5. Reuse the attraction overview `hero-banner.jpg` for the hero  
6. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref` (often guidebook → map → manual)  
7. Point guidebook `map.locateHref` and menu “Locate it!” to `/<slug>map`

Do **not** rebuild this layout from scratch — reuse `LocateMapTitleBar`, `LocateMapIntroLead`, and `LocateMapFullSizeLink`.
