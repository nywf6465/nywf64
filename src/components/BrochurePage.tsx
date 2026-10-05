import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/brochurePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Brochure / PDF-download page (“brochure” standard).
 * Canonical instance: /unisph09. Legacy attraction brochure, pamphlet, and
 * presentation PDF pages use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav.
 *
 * HARD RULE — omit Adobe: never include the legacy second paragraph (Adobe
 * Reader requirement) or the Adobe Reader logo / download icon.
 *
 * Stack: hero → attraction nav → navy title bar → bordered cover (links to PDF)
 * → one instructional paragraph → Nav2Bar.
 *
 * For new brochure pages, copy src/app/unisph09/page.tsx and fill props from
 * the legacy HTML — see AGENTS.md “Brochure standard”.
 */

export type BrochureCover = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type BrochurePageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  /** Navy title-bar text (e.g. “Brochure: Building a Unisphere”). */
  title: ReactNode;
  titleId?: string;
  cover: BrochureCover;
  /** Public path to the PDF (e.g. `/pdf/unisph/how-to-make-a-unisphere.pdf`). */
  pdfHref: string;
  /** Accessible label for the cover download link. */
  pdfAriaLabel: string;
  /**
   * Noun used in the instructional paragraph (“brochure”, “pamphlet”,
   * “presentation”, “article”). Defaults to “brochure”.
   */
  documentNoun?: string;
  /** Optional SOURCE / credit line under the cover (from legacy caption). */
  source?: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
};

export function BrochurePage({
  heroLabel,
  hero,
  nav,
  title,
  titleId = "brochure-title",
  cover,
  pdfHref,
  pdfAriaLabel,
  documentNoun = "brochure",
  source,
  previousHref,
  nextHref,
  overviewHref,
}: BrochurePageProps) {
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
          <div className={styles.coverWrap}>
            <figure
              className={styles.coverFigure}
              style={{ width: cover.width }}
            >
              <a
                className={styles.coverLink}
                href={pdfHref}
                target="_blank"
                rel="noreferrer"
                aria-label={pdfAriaLabel}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt ?? ""}
                  width={cover.width}
                  height={cover.height}
                  className={styles.cover}
                  unoptimized
                />
              </a>
              {source ? (
                <figcaption className={styles.source}>{source}</figcaption>
              ) : null}
            </figure>
          </div>

          <div className={styles.body}>
            <p>
              The {documentNoun} has been saved in <strong>PDF format</strong>.{" "}
              <span className={styles.tapHint}>
                Click or tap the image above
              </span>{" "}
              to download the {documentNoun}. Once inside the document you can
              use the <em>zoom feature</em> to increase or decrease the document
              size to a comfortable viewing level.
            </p>
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
