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

Canonical instances:
- **`/maps01`** — 1964 Official Souvenir Map (`MapsLinks` hub card + locate-it full-size note)
- **`/maps02`** — Industrial Area Map (`MapsLinks` hub card)
- **`/maps03`** — International Area Map (`MapsLinks` hub card)
- **`/maps04`** — Federal & State Area Map (`MapsLinks` hub card)
- **`/maps05`** — Transportation Area Map (`MapsLinks` hub card)
- **`/maps06`** — Amusement Area Map (`MapsLinks` hub card)

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
