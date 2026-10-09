#!/usr/bin/env python3
"""Remove attraction overview pages and Overview menu cards."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Alias / odd overview paths → canonical attraction prefix for menu lookup
ALIAS_TO_CANONICAL = {
    "/veneerview": "veneze",
    "/cenameriverview": "cenamer",
    "/amisrloverview": "amerisr",
    "/chriscioverview": "chrsci",
    "/lithwayoverview": "litwaycro",
    "/proorthoverview": "proort",
    "/rusorthoverview": "rusort",
    "/sermscioverview": "sersci",
    "/twotriboverview": "twotho",
}

# Orphans with no content yet → atoz
FORCE_ATOZ = {
    "/intplaoverview",
    "/mormonoverview",
    "/properoverview",
}


def parse_menu_topics(text: str) -> list[tuple[str, str]]:
    topics = re.findall(
        r'\{\s*label:\s*"([^"]+)",\s*href:\s*"([^"]+)",?\s*\}',
        text,
    )
    if topics:
        return topics
    labels = re.findall(r'label:\s*"([^"]+)"', text)
    hrefs = re.findall(r'href:\s*"([^"]+)"', text)
    return list(zip(labels, hrefs))


def build_redirect_map() -> dict[str, str]:
    redirects: dict[str, str] = {}
    for menu in sorted((ROOT / "src/data").glob("*Menu.ts")):
        text = menu.read_text()
        topics = parse_menu_topics(text)
        if not topics:
            continue
        overview_href = None
        first = None
        for label, href in topics:
            if label == "Overview" and overview_href is None:
                overview_href = href
            elif label != "Overview" and first is None:
                first = href
        if overview_href and first:
            redirects[overview_href] = first

    # Alias overviews → same first topic as canonical menu
    for alias, canon in ALIAS_TO_CANONICAL.items():
        menu = ROOT / "src/data" / f"{canon}Menu.ts"
        if not menu.exists():
            continue
        topics = parse_menu_topics(menu.read_text())
        first = next((h for lab, h in topics if lab != "Overview"), None)
        if first:
            redirects[alias] = first

    for path in FORCE_ATOZ:
        redirects[path] = "/atoz"

    # Any remaining *overview app dirs → /atoz
    for d in (ROOT / "src/app").iterdir():
        if not d.is_dir():
            continue
        if d.name.endswith("overview") or d.name in {"veneerview", "cenameriverview"}:
            key = f"/{d.name}"
            redirects.setdefault(key, "/atoz")

    return redirects


def remove_overview_from_menus() -> int:
    count = 0
    for menu in sorted((ROOT / "src/data").glob("*Menu.ts")):
        text = menu.read_text()
        if 'label: "Overview"' not in text:
            continue
        # Remove Overview topic object (with trailing comma/newline)
        new, n = re.subn(
            r"\n?\s*\{\s*\n\s*label:\s*\"Overview\",\s*\n\s*href:\s*\"[^\"]+\",\s*\n\s*\},?\n",
            "\n",
            text,
            count=1,
        )
        if n == 0:
            # single-line form
            new, n = re.subn(
                r"\s*\{\s*label:\s*\"Overview\",\s*href:\s*\"[^\"]+\",?\s*\},?\n?",
                "\n",
                text,
                count=1,
            )
        if n:
            # Clean comment mentioning Overview at top
            new = re.sub(
                r" \(\+ Overview at top\)",
                "",
                new,
            )
            new = re.sub(
                r"; Overview at top\.",
                ".",
                new,
            )
            new = re.sub(
                r" \(\+ Overview at top\)\.",
                ".",
                new,
            )
            new = re.sub(
                r"Labels match uploaded menu topics \(\+ Overview at top\)\.",
                "Labels match uploaded menu topics.",
                new,
            )
            new = re.sub(
                r"Labels match the cenamer-menu-topics mockup; Overview at top\.",
                "Labels match the cenamer-menu-topics mockup.",
                new,
            )
            new = re.sub(
                r"\n{3,}",
                "\n\n",
                new,
            )
            menu.write_text(new)
            count += 1
    return count


def update_cards(redirects: dict[str, str]) -> int:
    count = 0
    for cards in (ROOT / "src/data").glob("*Cards.ts"):
        text = cards.read_text()
        orig = text

        def repl(m: re.Match[str]) -> str:
            href = m.group(1)
            dest = redirects.get(href)
            return f'href: "{dest}"' if dest else m.group(0)

        text = re.sub(r'href:\s*"(/[^"]*overview)"', repl, text)
        text = re.sub(r'href:\s*"(/veneerview)"', repl, text)
        text = re.sub(r'href:\s*"(/cenameriverview)"', repl, text)
        if text != orig:
            cards.write_text(text)
            count += 1
    return count


def update_pages(redirects: dict[str, str]) -> tuple[int, int]:
    prev_n = next_n = 0
    for page in (ROOT / "src/app").rglob("page.tsx"):
        text = page.read_text()
        orig = text

        def prev_repl(m: re.Match[str]) -> str:
            nonlocal prev_n
            href = m.group(1)
            if href in redirects or href.endswith("overview") or href in {
                "/veneerview",
                "/cenameriverview",
            }:
                prev_n += 1
                # Drop previousHref so Nav2Bar uses in-site history (components updated)
                return ""
            return m.group(0)

        # previousHref="/foooverview"  or previousHref={"/foooverview"}
        text = re.sub(
            r'\n?\s*previousHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            prev_repl,
            text,
        )

        def next_repl(m: re.Match[str]) -> str:
            nonlocal next_n
            href = m.group(1)
            dest = redirects.get(href)
            if dest:
                next_n += 1
                return f'nextHref="{dest}"'
            if href.endswith("overview"):
                next_n += 1
                return 'nextHref="/atoz"'
            return m.group(0)

        text = re.sub(
            r'nextHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            next_repl,
            text,
        )

        # overviewHref props: retarget to first topic (deprecated but kept)
        def ov_repl(m: re.Match[str]) -> str:
            href = m.group(1)
            dest = redirects.get(href, "/atoz")
            return f'overviewHref="{dest}"'

        text = re.sub(
            r'overviewHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            ov_repl,
            text,
        )

        if text != orig:
            # tidy double blank lines from removed previousHref
            text = re.sub(r"\n{3,}", "\n\n", text)
            page.write_text(text)
    return prev_n, next_n


def update_topic_stubs(redirects: dict[str, str]) -> int:
    count = 0
    for stub in (ROOT / "src/components").glob("*TopicStub.tsx"):
        text = stub.read_text()
        orig = text

        def link_repl(m: re.Match[str]) -> str:
            href = m.group(1)
            dest = redirects.get(href, "/atoz")
            return f'href="{dest}"'

        text = re.sub(
            r'href="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            link_repl,
            text,
        )
        # Rename "← Foo overview" → "← Foo"
        text = re.sub(
            r"(← [^<\n]+?) overview",
            r"\1",
            text,
        )
        text = re.sub(
            r'previousHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            lambda m: "",
            text,
        )
        text = re.sub(
            r'overviewHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            lambda m: f'overviewHref="{redirects.get(m.group(1), "/atoz")}"',
            text,
        )
        text = re.sub(
            r'nextHref="(/[^"]*(?:overview|veneerview|cenameriverview))"',
            lambda m: f'nextHref="{redirects.get(m.group(1), "/atoz")}"',
            text,
        )
        if text != orig:
            text = re.sub(r"\n{3,}", "\n\n", text)
            stub.write_text(text)
            count += 1
    return count


def update_legacy_stubs(redirects: dict[str, str]) -> int:
    path = ROOT / "src/data/legacyStubRoutes.ts"
    text = path.read_text()
    orig = text

    def repl(m: re.Match[str]) -> str:
        key = m.group(1)
        href = m.group(2)
        dest = redirects.get(href, "/atoz" if "overview" in href else href)
        return f'{key}: "{dest}"'

    text = re.sub(
        r'(overviewHref|previousHref|nextHref):\s*"(/[^"]*(?:overview|veneerview|cenameriverview))"',
        repl,
        text,
    )
    # overviewLabel: "Foo overview" → "Foo"
    text = re.sub(
        r'overviewLabel:\s*"([^"]+?) overview"',
        r'overviewLabel: "\1"',
        text,
    )
    if text != orig:
        path.write_text(text)
        return 1
    return 0


def delete_overview_routes() -> list[str]:
    deleted = []
    for d in sorted((ROOT / "src/app").iterdir()):
        if not d.is_dir():
            continue
        if d.name.endswith("overview") or d.name in {"veneerview", "cenameriverview"}:
            shutil.rmtree(d)
            deleted.append(d.name)
    return deleted


def patch_shared_page_components() -> None:
    """Make previousHref optional; only use explicitPrevious when set."""
    files = [
        "GuidebookSouvenirPage.tsx",
        "InformationManualPage.tsx",
        "PhotographsPage.tsx",
        "PostcardPage.tsx",
        "BrochurePage.tsx",
    ]
    for name in files:
        path = ROOT / "src/components" / name
        text = path.read_text()
        text2 = text.replace(
            "previousHref: string;",
            "previousHref?: string;",
        )
        # Nav2Bar call sites: explicitPrevious only when previousHref provided
        text2 = re.sub(
            r"(<Nav2Bar\n\s*)previousHref=\{previousHref\}\n\s*explicitPrevious\n",
            r"\1previousHref={previousHref}\n        explicitPrevious={Boolean(previousHref)}\n",
            text2,
        )
        # some may use previousHref={previousHref} on same patterns
        if text2 == text:
            # try alternate formatting
            text2 = re.sub(
                r"previousHref=\{previousHref\}\n(\s*)explicitPrevious\n",
                r"previousHref={previousHref}\n\1explicitPrevious={Boolean(previousHref)}\n",
                text,
            )
        path.write_text(text2)


def patch_next_config(redirects: dict[str, str]) -> None:
    path = ROOT / "next.config.ts"
    text = path.read_text()

    # Update destinations that still point at overview pages
    def dest_repl(m: re.Match[str]) -> str:
        dest = m.group(1)
        if dest in redirects:
            return f'destination: "{redirects[dest]}",'
        return m.group(0)

    text = re.sub(
        r'destination:\s*"(/[^"]*(?:overview|veneerview|cenameriverview))",',
        dest_repl,
        text,
    )

    # Insert bulk overview redirects after `return [`
    entries = []
    for src, dest in sorted(redirects.items()):
        if src == dest:
            continue
        entries.append(
            "      {\n"
            f'        source: "{src}",\n'
            f'        destination: "{dest}",\n'
            "        permanent: true,\n"
            "      },"
        )
    block = (
        "\n      // Attraction overview pages removed — send traffic to first topic\n"
        + "\n".join(entries)
        + "\n"
    )
    if "Attraction overview pages removed" not in text:
        text = text.replace(
            "async redirects() {\n    return [\n",
            "async redirects() {\n    return [" + block,
            1,
        )
    path.write_text(text)


def main() -> None:
    redirects = build_redirect_map()
    (ROOT / "scripts/overview-redirects.json").write_text(
        json.dumps(redirects, indent=2, sort_keys=True) + "\n"
    )
    print(f"redirects: {len(redirects)}")

    patch_shared_page_components()
    menus = remove_overview_from_menus()
    print(f"menus updated: {menus}")
    cards = update_cards(redirects)
    print(f"card files updated: {cards}")
    prev_n, next_n = update_pages(redirects)
    print(f"page previousHref cleared: {prev_n}, nextHref retargeted: {next_n}")
    stubs = update_topic_stubs(redirects)
    print(f"topic stubs updated: {stubs}")
    print(f"legacyStubRoutes updated: {update_legacy_stubs(redirects)}")
    deleted = delete_overview_routes()
    print(f"overview routes deleted: {len(deleted)}")
    patch_next_config(redirects)
    print("next.config.ts patched")

    # Sanity: no Overview menu cards left
    left = list((ROOT / "src/data").glob("*Menu.ts"))
    remaining = [p.name for p in left if 'label: "Overview"' in p.read_text()]
    print("menus still with Overview:", remaining)
    left_app = [
        d.name
        for d in (ROOT / "src/app").iterdir()
        if d.is_dir()
        and (d.name.endswith("overview") or d.name in {"veneerview", "cenameriverview"})
    ]
    print("overview app dirs left:", left_app)


if __name__ == "__main__":
    main()
