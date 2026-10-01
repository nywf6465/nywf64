<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# nywf64.com — legacy page standards

## HARD RULE: navy title banner beneath the nav

Every legacy content page has a blue (navy `#26346e`) title banner at the top of the article. When creating or converting pages from legacy HTML, **always** include this banner **immediately beneath the attraction nav bar** (after `*NavChrome` / `AttractionNavChrome`). Never ship a legacy conversion that jumps from nav straight into body copy.

Required stack for legacy attraction / essay / map / manual / postcard pages:

`SiteHeader` → hero → attraction nav → **navy title banner** → body → `Nav2Bar`

## Postcard standard

Canonical instance: `/bell03` via `PostcardPage`. Legacy postcard pages use this layout.

- Title bar text: `Postcards`
- Body: centered ~650px stack of postcard entries
- Each entry: front image (left, bordered) + reverse image with meta lines beneath it (right, bordered), then Arial Narrow source line(s)
- “Unauthorized Postcard” is red
- Menu / stub routes such as `/bellpostcards` redirect to `/bell03`
