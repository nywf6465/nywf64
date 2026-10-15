import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchNavChrome } from "@/components/ArchNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./archtray.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Slide Tray — The Architectural Series of Slides — nywf64.com",
  description:
    "Slide tray for The Architectural Series — over 100 Photo Lab slides of architectural renderings from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Legacy arch02 slide tray — thumbs arch5401…arch5470, then S180A…S187D. */
const NUMERIC_SLIDES = Array.from({ length: 70 }, (_, i) => {
  const id = 5401 + i;
  return {
    key: String(id),
    href: `/arch${id}`,
    thumb: `/images/arch/${id}Small.jpg`,
    label: `Slide ${id}`,
  };
});
const S_SERIES_SLIDES = [180, 181, 182, 183, 184, 185, 186, 187].flatMap((set) =>
  (["A", "B", "C", "D"] as const).map((letter) => ({
    key: `S${set}${letter}`,
    href: `/archS${set}${letter}`,
    thumb: `/images/arch/S-${set}${letter}Small.jpg`,
    label: `Slide S${set}-${letter}`,
  })),
);
const SLIDES = [...NUMERIC_SLIDES, ...S_SERIES_SLIDES];

/**
 * Architectural Series Slide Tray (legacy arch02.html).
 * Nav bar shows Page 1. NEXT → first slide (/arch5401); PREVIOUS → overview.
 *
 * Stack: archhero → ArchNavChrome → navy title → tray → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function ArchTrayPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Architectural Series of Slides"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/arch/archhero.jpg"
            alt="The Architectural Series of Slides — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchNavChrome />

      <article className={styles.article} aria-labelledby="archtray-title">
        <header className={styles.titleBar}>
          <h1 id="archtray-title" className={styles.titleBarMain}>
            Slide Tray
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            To navigate the slide tray, simply click on any slide to be taken to
            a larger image of that slide. You may use the link on the Navigation
            Menu to return to this slide tray at any time. To progress from
            slide to slide, select NEXT in the navigation bar. PREVIOUS will
            return you to the prior slide.
          </p>

          <div className={styles.tray} role="list" aria-label="Slide tray">
            {SLIDES.map((slide) => (
              <Link
                key={slide.key}
                href={slide.href}
                className={styles.thumbLink}
                role="listitem"
                aria-label={slide.label}
              >
                <Image
                  src={slide.thumb}
                  alt=""
                  width={100}
                  height={100}
                  className={styles.thumb}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/archoverview"
        explicitPrevious
        overviewHref="/archoverview"
        nextHref="/arch5401"
      />
    </>
  );
}
