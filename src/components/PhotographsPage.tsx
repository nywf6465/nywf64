import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/photographsPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Photograph Album page (“photographs” standard).
 * Canonical instance: /aertow03. Legacy attraction photograph albums use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav. This layout renders “Photograph Album”.
 *
 * Do NOT include the legacy “Photograph Scrap Book” banner image under the title
 * bar — omit it on every photographs conversion.
 *
 * Stack: hero → attraction nav → navy title bar → photograph sections → Nav2Bar.
 *
 * Body recipe (from legacy aertow03.html / /aertow03):
 * 1) Named sections (Commercial Photographs, Fairgoer Photographs, …)
 * 2) Each section: heading, then light-grey (#ccc) tray of photo cards
 * 3) Each card: 2px bordered photo, then photo → caption → SOURCE
 *    (bold title/caption, then Arial Narrow SOURCE under it)
 * 4) Desktop: photograph cards are centered in the tray; mobile: left-aligned
 *
 * HARD RULE — photo → caption → SOURCE on every card (see AGENTS.md).
 *
 * For new albums, copy src/app/aertow03/page.tsx and fill `sections` from the
 * legacy HTML — see AGENTS.md “Photographs standard”.
 */

export type PhotographImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type PhotographCard = {
  image: PhotographImage;
  /** Bold Arial title under the photo. Omit when legacy has SOURCE only. */
  title?: ReactNode;
  /** Arial Narrow SOURCE / credit line under the title (or photo). */
  source: ReactNode;
};

export type PhotographSection = {
  heading: string;
  photos: PhotographCard[];
};

export type PhotographsPageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  sections: PhotographSection[];
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  titleId?: string;
  /** Navy title-bar text. Defaults to “Photograph Album”. */
  title?: string;
  /** Optional lead copy above photograph sections (e.g. Bill Cotter intro). */
  intro?: ReactNode;
};

const DEFAULT_TITLE = "Photograph Album";

export function PhotographsPage({
  heroLabel,
  hero,
  nav,
  sections,
  previousHref,
  nextHref,
  overviewHref,
  titleId = "photograph-album-title",
  title = DEFAULT_TITLE,
  intro,
}: PhotographsPageProps) {
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
          {intro ? <div className={styles.intro}>{intro}</div> : null}
          <div className={styles.sections}>
            {sections.map((section) => (
              <section
                key={section.heading}
                className={styles.section}
                aria-label={section.heading}
              >
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                <div className={styles.tray}>
                  <div className={styles.photos}>
                    {section.photos.map((photo, index) => (
                      <figure
                        key={`${section.heading}-${photo.image.src}-${index}`}
                        className={styles.card}
                        style={{ width: photo.image.width }}
                      >
                        <div className={styles.frame}>
                          <Image
                            src={photo.image.src}
                            alt={photo.image.alt ?? ""}
                            width={photo.image.width}
                            height={photo.image.height}
                            className={styles.photo}
                            unoptimized
                          />
                        </div>
                        <figcaption className={styles.caption}>
                          {photo.title ? (
                            <p className={styles.captionTitle}>{photo.title}</p>
                          ) : null}
                          <p className={styles.captionSource}>{photo.source}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </section>
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
