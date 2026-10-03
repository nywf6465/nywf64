<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nywf64.com — legacy page standards

## HARD RULE: navy title banner beneath the nav

Every legacy content page has a blue (navy `#26346e`) title banner at the top of the article. When creating or converting pages from legacy HTML, **always** include this banner **immediately beneath the attraction nav bar** (after `*NavChrome` / `AttractionNavChrome`). Never ship a legacy conversion that jumps from nav straight into body copy.

Required stack for legacy attraction / essay / map / manual / postcards pages:

`SiteHeader` → hero → attraction nav → **navy title banner** → body → `Nav2Bar`

## Postcards standard

Canonical instance: **`/bell03`** via `PostcardPage` + `postcardPage.module.css`.  
Legacy attraction postcard pages (often `*03.html`, menu label “Postcards”) use this layout.

### When to use it

Use the **postcards** standard when the legacy page is a postcard gallery: navy bar titled “Postcards”, stacked front/reverse card pairs with catalog meta and publisher source lines.

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar **Postcards** → centered postcard entries → `Nav2Bar` (`explicitPrevious`)

### Body recipe (match `/bell03` / legacy `bell03.html`)

Each entry, top to bottom:

1. **Row** — front image (left, ~450px, `border="1"`) + reverse column (right, ~300px)  
2. **Reverse column** — reverse image (`border="1"`), then meta lines under it (pavilion / area name, Official or Unauthorized Postcard, catalog numbers such as Dexter / Manhattan)  
3. **Sources** — Arial Narrow line(s) under the whole pair (`Source: Postcard Published by …`)

“Unauthorized Postcard” is **red** (`#f00`), matching legacy `color="red"`.

Desktop keeps front + reverse side by side (content max-width ~760px so 450+300 fits). Under ~720px, stack front above reverse.

### Type

- Title bar: Arial bold white on navy `#26346e`  
- Meta lines: Arial  
- Source lines: Arial Narrow (~13px)

### Build checklist for a new postcards page (e.g. `/ford03`)

1. Fetch legacy postcard HTML and `Image/pcards/…` (or equivalent) into `public/images/<slug>03/`  
2. Add `src/app/<slug>03/page.tsx` that renders `<PostcardPage …>` (copy `/bell03` as the template)  
3. Reuse the attraction overview `hero-banner.jpg` for the hero  
4. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref` to menu neighbors  
5. Map each legacy table to an `entries[]` item: `front`, `reverse`, `meta`, `sources`  
6. Point stub routes such as `/<slug>postcards` at `/<slug>03` with `redirect()`  
7. Update the attraction menu “Postcards” topic to `/<slug>03`

Do **not** rebuild this layout from scratch — extend `PostcardPage` if a later gallery needs a shared option.

## Brochure standard

Canonical instance: **`/unisph09`** via `BrochurePage` + `brochurePage.module.css`.  
Legacy attraction brochure, pamphlet, and presentation PDF-download pages use this layout (menu labels such as “Brochure: …”, “Pamphlet: …”, or “Presentation: …”).

### When to use it

Use the **brochure** standard when the legacy page is a single PDF download: navy title bar naming the document, a bordered cover image that links to the PDF, and one short instructional paragraph. Do **not** use this for multi-page filmstrips, photo albums, or guidebook text pages.

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar → bordered cover (links to PDF) → one instructional paragraph → `Nav2Bar` (`explicitPrevious`)

### Omit Adobe Reader content

Legacy pages almost always include:

1. A **second paragraph** requiring Adobe Reader  
2. An **Adobe Reader logo / icon** linking to adobe.com  

**Always remove both** before shipping. Keep only the first paragraph that explains the PDF and “Click or tap the image above”.

### Body recipe (match `/unisph09` / legacy `unisph09.html`)

1. **Title bar** — use the legacy navy-bar wording exactly (including “Brochure:”, “Pamphlet:”, or “Presentation:” prefixes)  
2. **Cover** — bordered (`1px` black) image linking to the PDF in a new tab; use legacy cover dimensions  
3. **Copy** — one Arial paragraph: document saved in **PDF format**; bold underlined “Click or tap the image above”; mention the *zoom feature*  
4. **Document noun** — pass `documentNoun` (`brochure` / `pamphlet` / `presentation`) so the paragraph matches the legacy wording

### Type

- Title bar: Arial bold white on navy `#26346e`  
- Body: Arial (~0.95rem, line-height ~1.55)  
- Tap hint: bold + underline

### Build checklist for a new brochure page (e.g. `/ford07`)

1. Fetch legacy HTML; note title-bar text, cover image, PDF href, and document noun  
2. Download cover → `public/images/<slug>/…` and PDF → `public/pdf/<attraction>/…`  
3. Add `src/app/<slug>/page.tsx` that renders `<BrochurePage …>` (copy `/unisph09`)  
4. Reuse the attraction overview `hero-banner.jpg` for the hero  
5. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref` to menu neighbors  
6. Set `title`, `cover`, `pdfHref`, `pdfAriaLabel`, and `documentNoun`  
7. **Delete** the Adobe Reader paragraph and logo (never port them)  
8. Remove the slug from `LEGACY_STUB_ROUTES`

Do **not** rebuild this layout from scratch — extend `BrochurePage` if a later PDF page needs a shared option.
