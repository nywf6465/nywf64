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

## Manual standard (World's Fair Information Manual)

Canonical instance: **`/bell02`** via `InformationManualPage` + `informationManualPage.module.css`.  
Legacy attraction `*02.html` Information Manual pages use this layout.

### When to use it

Use the **manual** standard when the legacy page is a World's Fair Information Manual entry: navy bar titled “World's Fair Information Manual”, two-column fact sheet, pavilion drawing, FEATURES copy, optional second photo.

### Required stack

hero (attraction overview banner) → `*NavChrome` → navy title bar **World's Fair Information Manual** → centered ~600px body → `Nav2Bar` (`explicitPrevious`)

### Body recipe (match `/bell02` / legacy `bell02.html`)

1. **Facts** — two columns of underlined labels (`EXHIBIT`, `AUTHORIZED REPRESENTATIVE`, `LOCATION`, `AREA`, …) with line items under each label  
2. **Primary figure** — usually the line drawing; Arial Narrow `SOURCE:` / credit under it (no border unless legacy used one)  
3. **FEATURES** heading — then labeled sections (`Exterior`, `Interior`, …). Underlined inline names in feature copy use `informationManualPage.module.css` `.u`  
4. **Optional secondary figure** — horizontal rule, then bordered photo when legacy `border="1"`, optional centered title (Arial when legacy `face="Arial"`), Arial Narrow source (italicize publication titles when legacy did)

### Type

- Body / features: Times New Roman when legacy set no face  
- Source / credit lines: Arial Narrow  
- Secondary figure title: Arial when legacy `face="Arial"`  
- Title bar: Arial bold white on navy `#26346e`

### Build checklist for a new manual page (e.g. `/ford02`)

1. Fetch legacy `*02.html` and its `Image/…` assets into `public/images/<slug>02/`  
2. Add `src/app/<slug>02/page.tsx` that renders `<InformationManualPage …>` (copy `/bell02` as the template)  
3. Reuse the attraction overview `hero-banner.jpg` for the hero  
4. Pass `nav={<SlugNavChrome />}`, wire `previousHref` / `nextHref` to the menu neighbors  
5. Map left/right fact columns, figures, and features from the legacy tables — preserve wording, underlines, and `<br>` paragraph breaks  
6. Point any old stub route (e.g. `/bellmanual`) at `/<slug>02` with `redirect()`  
7. Update the attraction menu topic that said “World's Fair Information Manual” to `/<slug>02`

Do **not** rebuild this layout from scratch on each page — extend `InformationManualPage` if a later manual needs a shared option.
