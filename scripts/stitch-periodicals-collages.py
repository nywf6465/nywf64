#!/usr/bin/env python3
"""
Stitch periodicals magazine tile blocks into seamless single JPEG composites.

Eliminates CSS-grid subpixel hairline gaps by replacing multi-tile collages with
one image per collage (1px overlap, darkest-wins at joins).

Usage (from repo root):
  python3 scripts/stitch-periodicals-collages.py
"""
from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OVERLAP = 1

ARTICLE_SLUGS = [
    "life631206",
    "life640117",
    "life640424",
    "life640501",
    "life640508",
    "newsweek640113",
    "look640211",
    "look640211b",
    "look640211c",
    "look640211d",
    "post640328",
    "post640523",
]


def paste_darkest(canvas: Image.Image, tile: Image.Image, x: int, y: int) -> None:
    cw, ch = canvas.size
    tw, th = tile.size
    if x < 0:
        tile = tile.crop((-x, 0, tw, th))
        tw = tile.size[0]
        x = 0
    if y < 0:
        tile = tile.crop((0, -y, tw, th))
        th = tile.size[1]
        y = 0
    tw = min(tw, cw - x)
    th = min(th, ch - y)
    if tw <= 0 or th <= 0:
        return
    tile = tile.crop((0, 0, tw, th))
    base = np.array(canvas.crop((x, y, x + tw, y + th))).astype(np.int16)
    over = np.array(tile).astype(np.int16)
    virgin = base.min(axis=2) >= 254
    out = np.minimum(base, over)
    out[virgin] = over[virgin]
    canvas.paste(Image.fromarray(out.astype(np.uint8)), (x, y))


def stitch_grid(tiles: list[Image.Image], columns: int) -> Image.Image:
    ncols = columns
    nrows = (len(tiles) + ncols - 1) // ncols
    rows: list[list[Image.Image]] = []
    for r in range(nrows):
        row: list[Image.Image] = []
        for c in range(ncols):
            i = r * ncols + c
            if i >= len(tiles):
                break
            row.append(tiles[i].convert("RGB"))
        rows.append(row)

    norm: list[list[Image.Image]] = []
    for row in rows:
        h = max(t.height for t in row)
        nr = []
        for t in row:
            if t.height == h:
                nr.append(t)
            else:
                nw = max(1, int(round(t.width * h / t.height)))
                nr.append(t.resize((nw, h), Image.Resampling.LANCZOS))
        norm.append(nr)

    def native_w(row: list[Image.Image]) -> int:
        return sum(t.width for t in row) - OVERLAP * (len(row) - 1)

    target_w = max(native_w(r) for r in norm)
    scaled: list[list[Image.Image]] = []
    heights: list[int] = []
    for row in norm:
        rw = native_w(row)
        scale = target_w / rw if rw else 1.0
        new = []
        for t in row:
            if abs(scale - 1.0) < 1e-6:
                new.append(t)
            else:
                new.append(
                    t.resize(
                        (
                            max(1, int(round(t.width * scale))),
                            max(1, int(round(t.height * scale))),
                        ),
                        Image.Resampling.LANCZOS,
                    )
                )
        scaled.append(new)
        heights.append(new[0].height)

    total_h = sum(heights) - OVERLAP * (len(scaled) - 1)
    canvas = Image.new("RGB", (target_w, max(1, total_h)), (255, 255, 255))
    y = 0
    for ri, row in enumerate(scaled):
        x = 0
        for t in row:
            paste_darkest(canvas, t, x, y)
            x += t.width - OVERLAP
        y += heights[ri] - OVERLAP
    return canvas


def parse_collages(page_text: str) -> list[dict]:
    m = re.search(r"const COLLAGES(?::[^=]+)?=\s*\[", page_text)
    if not m:
        return []
    start = m.end() - 1
    depth = 0
    i = start
    while i < len(page_text):
        if page_text[i] == "[":
            depth += 1
        elif page_text[i] == "]":
            depth -= 1
            if depth == 0:
                body = page_text[start + 1 : i]
                break
        i += 1
    else:
        return []

    collages = []
    for chunk in re.split(r"\n  \{\n", body):
        if "src:" not in chunk:
            continue
        cols_m = re.search(r"columns:\s*(\d+)", chunk)
        columns = int(cols_m.group(1)) if cols_m else 3
        bordered = "bordered: false" not in chunk[:120]
        caption_m = re.search(r"caption:\s*(.+?),?\n", chunk)
        caption = caption_m.group(1).strip().rstrip(",") if caption_m else None
        max_w_m = re.search(r"maxWidth:\s*(\d+)", chunk)
        max_width = int(max_w_m.group(1)) if max_w_m else None
        tiles = [
            {"src": s, "width": int(w), "height": int(h)}
            for s, w, h in re.findall(
                r'src:\s*"([^"]+)",\s*width:\s*(\d+),\s*height:\s*(\d+)', chunk
            )
        ]
        if tiles and all("collage-" not in t["src"] for t in tiles):
            collages.append(
                {
                    "columns": columns,
                    "bordered": bordered,
                    "caption": caption,
                    "maxWidth": max_width,
                    "tiles": tiles,
                }
            )
    return collages


def process_article(slug: str) -> None:
    text = subprocess.check_output(
        ["git", "show", f"HEAD:src/app/{slug}/page.tsx"],
        text=True,
        cwd=ROOT,
    )
    # Prefer original multi-tile defs from HEAD; if HEAD already stitched, use working tree backup
    collages = parse_collages(text)
    if not collages:
        print(f"skip {slug}: no multi-tile collages in HEAD")
        return
    metas = []
    out_dir = ROOT / "public" / "images" / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    for i, col in enumerate(collages, 1):
        tiles = [
            Image.open(ROOT / "public" / t["src"].lstrip("/")).convert("RGB")
            for t in col["tiles"]
        ]
        st = stitch_grid(tiles, col["columns"])
        dest = out_dir / f"collage-{i:02d}.jpg"
        st.save(dest, quality=95, optimize=True, subsampling=0)
        metas.append((col, st.size))
        print(f"  {slug} collage-{i:02d}.jpg {st.size}")
    lines = ["const COLLAGES: LifeCollage[] = ["]
    for i, (col, (w, h)) in enumerate(metas, 1):
        out = f"/images/{slug}/collage-{i:02d}.jpg"
        lines += ["  {", "    columns: 1,"]
        if not col["bordered"]:
            lines.append("    bordered: false,")
        if col.get("maxWidth"):
            lines.append(f"    maxWidth: {col['maxWidth']},")
        lines += [
            "    tiles: [",
            f'      {{ src: "{out}", width: {w}, height: {h}, alt: "" }},',
            "    ],",
        ]
        if col.get("caption"):
            lines.append(f"    caption: {col['caption']},")
        lines.append("  },")
    lines.append("];")
    page = ROOT / "src" / "app" / slug / "page.tsx"
    cur = page.read_text()
    page.write_text(
        re.sub(
            r"const COLLAGES(?::[^=]+)?=\s*\[[\s\S]*?\n\];",
            "\n".join(lines),
            cur,
            count=1,
        )
    )


def process_looksguide(n: int) -> None:
    slug = f"looksguide{n:02d}"
    img_dir = ROOT / "public" / "images" / slug
    orig = subprocess.check_output(
        ["git", "show", f"HEAD:src/app/{slug}/page.tsx"],
        text=True,
        cwd=ROOT,
    )
    srcs = re.findall(rf'"(/images/{slug}/[^"]+\.jpg)"', orig)
    covers = [s for s in srcs if "cover." in s]
    content = [s for s in srcs if "hand_" not in s and "cover." not in s]

    if covers:
        st = stitch_grid(
            [Image.open(ROOT / "public" / p.lstrip("/")).convert("RGB") for p in covers],
            1,
        )
        st.save(img_dir / "cover-stack.jpg", quality=95, optimize=True, subsampling=0)
        print(f"  {slug} cover-stack.jpg {st.size}")

    if n == 7:
        for i, pn in enumerate(range(23, 33), 1):
            st = stitch_grid(
                [
                    Image.open(img_dir / f"{pn}.{s}.jpg").convert("RGB")
                    for s in (1, 2, 3)
                ],
                1,
            )
            st.save(img_dir / f"panel-{i:02d}.jpg", quality=95, optimize=True, subsampling=0)
            print(f"  {slug} panel-{i:02d}.jpg {st.size}")
    else:
        for i, g in enumerate([content[j : j + 3] for j in range(0, len(content), 3)], 1):
            if len(g) < 2:
                continue
            st = stitch_grid(
                [Image.open(ROOT / "public" / p.lstrip("/")).convert("RGB") for p in g],
                1,
            )
            st.save(img_dir / f"panel-{i:02d}.jpg", quality=95, optimize=True, subsampling=0)
            print(f"  {slug} panel-{i:02d}.jpg {st.size}")

    page = ROOT / "src" / "app" / slug / "page.tsx"
    text = page.read_text()

    def sync_src_wh(m: re.Match[str]) -> str:
        src = m.group(1)
        p = ROOT / "public" / src.lstrip("/")
        if not p.exists():
            return m.group(0)
        w, h = Image.open(p).size
        return f'src: "{src}", width: {w}, height: {h}'

    text = re.sub(
        rf'src:\s*"(/images/{slug}/[^"]+)",\s*width:\s*\d+,\s*height:\s*\d+',
        sync_src_wh,
        text,
    )

    def sync_jsx(m: re.Match[str]) -> str:
        src = m.group(1)
        indent = m.group(2)
        p = ROOT / "public" / src.lstrip("/")
        if not p.exists():
            return m.group(0)
        w, h = Image.open(p).size
        return f'src="{src}"\n{indent}alt=""\n{indent}width={{{w}}}\n{indent}height={{{h}}}'

    text = re.sub(
        rf'src="(/images/{slug}/(?:cover-stack|panel-\d+)\.jpg)"\n(\s*)alt=""\n\s*width=\{{\d+\}}\n\s*height=\{{\d+\}}',
        sync_jsx,
        text,
    )
    page.write_text(text)


def main() -> None:
    for slug in ARTICLE_SLUGS:
        print(f"== {slug} ==")
        process_article(slug)
    for n in range(1, 10):
        print(f"== looksguide{n:02d} ==")
        process_looksguide(n)


if __name__ == "__main__":
    main()
