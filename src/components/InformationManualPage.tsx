import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/informationManualPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * World's Fair Information Manual page (“manual” standard).
 * Canonical instance: /bell02. Legacy attraction `*02` pages use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav. This layout renders
 * “World's Fair Information Manual”; do not omit it on custom ports.
 *
 * Stack: hero → attraction nav → navy title bar → centered ~600px body → Nav2Bar.
 *
 * Body recipe (from legacy bell02.html / /bell02):
 * 1) Two-column fact sheet (underlined labels + line items)
 * 2) Primary figure + Arial Narrow source
 * 3) FEATURES heading + labeled sections (use styles.u for underlined names)
 * 4) Optional rule + secondary figure (bordered when legacy border="1")
 *
 * For new manuals, copy src/app/bell02/page.tsx and fill props from the legacy
 * *02.html — see AGENTS.md “Manual standard”.
 */

export type ManualImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  /** Optional centered title above the source (e.g. “The Bell System”). */
  title?: ReactNode;
  /** Arial Narrow source / credit line under the figure. */
  source?: ReactNode;
  /** Legacy second figure uses border="1". */
  bordered?: boolean;
};

export type ManualFactField = {
  label: string;
  lines: ReactNode[];
};

export type ManualFeature = {
  /** Underlined lead label (e.g. Exterior, Interior). */
  label?: string;
  body: ReactNode;
};

export type InformationManualPageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  factsLeft: ManualFactField[];
  factsRight: ManualFactField[];
  /** Primary photo between facts and FEATURES. Omit when legacy has none. */
  primaryFigure?: ManualImage;
  features: ManualFeature[];
  secondaryFigure?: ManualImage;
  /**
   * Optional bordered note after FEATURES (e.g. webmaster’s note on /amind02).
   */
  note?: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  titleId?: string;
  /**
   * Navy title-bar text. Defaults to the standard manual heading.
   */
  title?: string;
  featuresHeading?: string;
  /**
   * Arial Narrow SOURCE line under FEATURES when the legacy page credits the
   * manual entry without a photo (e.g. avis02).
   */
  featuresSource?: ReactNode;
};

const DEFAULT_TITLE = "World's Fair Information Manual";

function FactColumn({
  fields,
  label,
}: {
  fields: ManualFactField[];
  label: string;
}) {
  return (
    <div aria-label={label}>
      {fields.map((field) => (
        <div key={field.label} className={styles.factBlock}>
          <p className={styles.factLabel}>{field.label}</p>
          <ul className={styles.factLines}>
            {field.lines.map((line, index) => (
              <li key={`${field.label}-${index}`}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ManualFigure({ figure }: { figure: ManualImage }) {
  return (
    <figure className={styles.figure}>
      <Image
        src={figure.src}
        alt={figure.alt ?? ""}
        width={figure.width}
        height={figure.height}
        className={
          figure.bordered
            ? `${styles.figureArt} ${styles.figureArtBordered}`
            : styles.figureArt
        }
        unoptimized
      />
      {figure.title || figure.source ? (
        <figcaption className={styles.figureCaption}>
          {figure.title ? (
            <p className={styles.figureTitle}>{figure.title}</p>
          ) : null}
          {figure.source ? (
            <p className={styles.figureSource}>{figure.source}</p>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function InformationManualPage({
  heroLabel,
  hero,
  nav,
  factsLeft,
  factsRight,
  primaryFigure,
  features,
  secondaryFigure,
  note,
  previousHref,
  nextHref,
  overviewHref,
  titleId = "information-manual-title",
  title = DEFAULT_TITLE,
  featuresHeading = "FEATURES",
  featuresSource,
}: InformationManualPageProps) {
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
          <div className={styles.facts}>
            <FactColumn fields={factsLeft} label="Exhibit facts" />
            <FactColumn fields={factsRight} label="Site and construction facts" />
          </div>

          {primaryFigure ? <ManualFigure figure={primaryFigure} /> : null}

          <p className={styles.featuresHeading}>{featuresHeading}</p>
          {features.map((feature, index) => (
            <p
              key={feature.label ?? `feature-${index}`}
              className={styles.feature}
            >
              {feature.label ? (
                <>
                  <span className={styles.featureLabel}>{feature.label}</span>
                  {": "}
                </>
              ) : null}
              <span className={styles.featureBody}>{feature.body}</span>
            </p>
          ))}
          {featuresSource ? (
            <p className={styles.featuresSource}>{featuresSource}</p>
          ) : null}

          {secondaryFigure ? (
            <>
              <hr className={styles.rule} />
              <ManualFigure figure={secondaryFigure} />
            </>
          ) : null}
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
