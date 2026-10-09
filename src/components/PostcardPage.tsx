import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/postcardPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Postcards page (“postcards” standard).
 * Canonical instance: /bell03. Legacy attraction postcard galleries use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav. This layout renders “Postcards”; do
 * not omit it on custom ports.
 *
 * Stack: hero → attraction nav → navy title bar → centered postcard entries →
 * Nav2Bar.
 *
 * Body recipe (from legacy bell03.html / /bell03):
 * 1) Front (left, bordered) + reverse (right, bordered)
 * 2) Meta lines under the reverse (Official / Unauthorized, numbers)
 * 3) Arial Narrow source line(s) under the pair
 *
 * For new postcard pages, copy src/app/bell03/page.tsx and fill `entries` from
 * the legacy HTML — see AGENTS.md “Postcards standard”.
 */

export type PostcardImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type PostcardEntry = {
  front: PostcardImage;
  reverse: PostcardImage;
  /**
   * Optional second image stacked under the front (e.g. /citserv02 reverse B).
   */
  belowFront?: PostcardImage;
  /** Lines under the reverse (pavilion, Official/Unauthorized, numbers). */
  meta: ReactNode[];
  /** Arial Narrow source line(s) under the front + reverse pair. */
  sources: ReactNode[];
};

export type PostcardPageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  entries: PostcardEntry[];
  previousHref?: string;
  nextHref: string;
  overviewHref?: string;
  titleId?: string;
  /** Navy title-bar text. Defaults to “Postcards”. */
  title?: string;
};

const DEFAULT_TITLE = "Postcards";

export function PostcardPage({
  heroLabel,
  hero,
  nav,
  entries,
  previousHref,
  nextHref,
  overviewHref,
  titleId = "postcard-title",
  title = DEFAULT_TITLE,
}: PostcardPageProps) {
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
          <div className={styles.entries}>
            {entries.map((entry, index) => (
              <section
                key={`${entry.front.src}-${index}`}
                className={styles.entry}
                aria-label={`Postcard ${index + 1}`}
              >
                <div className={styles.row}>
                  <div className={styles.front}>
                    <Image
                      src={entry.front.src}
                      alt={entry.front.alt ?? ""}
                      width={entry.front.width}
                      height={entry.front.height}
                      className={styles.frontImg}
                      unoptimized
                    />
                    {entry.belowFront ? (
                      <Image
                        src={entry.belowFront.src}
                        alt={entry.belowFront.alt ?? ""}
                        width={entry.belowFront.width}
                        height={entry.belowFront.height}
                        className={styles.frontImg}
                        unoptimized
                      />
                    ) : null}
                  </div>
                  <div className={styles.side}>
                    <Image
                      src={entry.reverse.src}
                      alt={entry.reverse.alt ?? ""}
                      width={entry.reverse.width}
                      height={entry.reverse.height}
                      className={styles.reverseImg}
                      unoptimized
                    />
                    <ul className={styles.meta}>
                      {entry.meta.map((line, lineIndex) => (
                        <li key={`meta-${index}-${lineIndex}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <ul className={styles.sources}>
                  {entry.sources.map((line, lineIndex) => (
                    <li key={`source-${index}-${lineIndex}`}>{line}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious={Boolean(previousHref)}
        overviewHref={overviewHref}
        nextHref={nextHref}
      />
    </>
  );
}
