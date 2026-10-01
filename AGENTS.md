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

Do **not** rebuild this layout from scratch — extend `GuidebookSouvenirPage` if a later guidebook needs a shared option.
