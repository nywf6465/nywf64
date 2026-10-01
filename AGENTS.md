<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nywf64.com — legacy page standards

## HARD RULE: navy title banner beneath the nav

Every legacy content page has a blue (navy `#26346e`) title banner at the top of the article. When creating or converting pages from legacy HTML, **always** include this banner **immediately beneath the attraction nav bar** (after `*NavChrome` / `AttractionNavChrome`). Never ship a legacy conversion that jumps from nav straight into body copy.

Required stack for legacy attraction / essay / map / manual pages:

`SiteHeader` → hero → attraction nav → **navy title banner** → body → `Nav2Bar`

How to include it:

- Guidebook (`*01`): built into `GuidebookSouvenirPage` (default title `1964 & 1965 Official Guidebook & Souvenir Map`)
- Information Manual (`*02`): built into `InformationManualPage` (default title `World's Fair Information Manual`)
- Locate-it map (`*map`): use `LocateMapTitleBar` (title `1964 Official Souvenir Map`)
- One-off essays / interviews (e.g. fisher, rm, dawson): same full-width navy `.titleBar` header pattern — centered Arial white title on `#26346e`

Do not replace the banner with a plain `<h1>` in the body. Match legacy title wording when the source page uses a different bar text (e.g. Port Authority appends “Entries”).
