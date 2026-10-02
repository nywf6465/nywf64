import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/advertisingPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Advertising page (“advertising” standard).
 * Canonical instance: /amex04. Legacy attraction advertising galleries use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav. This layout renders “Advertising”.
 *
 * Stack: hero → attraction nav → navy title bar → bordered ad collage → Nav2Bar.
 *
 * Body recipe (from legacy amex04.html):
 * 1) Bordered collage of advertisement tiles in a column grid
 * 2) Arial Narrow source line(s) under the collage
 *
 * For new advertising pages, copy src/app/amex04/page.tsx and fill `tiles`
 * from the legacy HTML.
 */

export type AdvertisingImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type AdvertisingPageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  tiles: AdvertisingImage[];
  /** Grid column count for the collage (legacy amex04 uses 2). */
  columns?: number;
  /** Arial Narrow source line(s) under the collage. */
  sources: ReactNode[];
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  titleId?: string;
  /** Navy title-bar text. Defaults to “Advertising”. */
  title?: string;
};

const DEFAULT_TITLE = "Advertising";

export function AdvertisingPage({
  heroLabel,
  hero,
  nav,
  tiles,
  columns = 2,
  sources,
  previousHref,
  nextHref,
  overviewHref,
  titleId = "advertising-title",
  title = DEFAULT_TITLE,
}: AdvertisingPageProps) {
  return (
    <>
      <section className={styles.hero} aria-label={heroLabel}>
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={hero.src}
            alt={hero.alt ?? ""}
            width={hero.width}
            height={hero.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.collageWrap}>
            <div
              className={styles.collage}
              style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
              role="group"
              aria-label="Advertisements"
            >
              {tiles.map((tile, index) => (
                <Image
                  key={`${tile.src}-${index}`}
                  src={tile.src}
                  alt={tile.alt ?? ""}
                  width={tile.width}
                  height={tile.height}
                  className={styles.tile}
                  unoptimized
                />
              ))}
            </div>
            {sources.map((source, index) => (
              <p key={index} className={styles.source}>
                {source}
              </p>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref={overviewHref}
        nextHref={nextHref}
      />
    </>
  );
}
