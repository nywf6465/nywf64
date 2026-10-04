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
 * Stack: hero → attraction nav → navy title bar → bordered ad collage(es) → Nav2Bar.
 *
 * Body recipe (from legacy amex04.html / unisph04.html):
 * 1) One or more bordered collages of advertisement tiles in a column grid
 * 2) Arial Narrow source line(s) under each collage as needed
 * 3) Optional featured advertisement image, body copy, then source
 *
 * For new advertising pages, copy src/app/amex04/page.tsx or src/app/unisph04/page.tsx
 * and fill collage tiles from the legacy HTML.
 */

export type AdvertisingImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type AdvertisingCollage = {
  tiles: AdvertisingImage[];
  /** Grid column count (legacy amex04 / unisph04 use 2). */
  columns?: number;
  /** Arial Narrow source line(s) under this collage. */
  sources?: ReactNode[];
};

export type AdvertisingFeature = {
  image: AdvertisingImage;
  /** Gray Arial body paragraphs under the featured ad image. */
  body?: ReactNode;
  /** Arial Narrow source line under the featured ad body copy. */
  source?: ReactNode;
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
  /**
   * Simple single-collage API (amex04). Ignored when `collages` is provided.
   */
  tiles?: AdvertisingImage[];
  /** Grid column count for the simple `tiles` collage. */
  columns?: number;
  /** Source lines for the simple `tiles` collage. */
  sources?: ReactNode[];
  /** Multi-collage API (unisph04). Takes precedence over `tiles`. */
  collages?: AdvertisingCollage[];
  /** Optional featured advertisement below the collages. */
  feature?: AdvertisingFeature;
  /** Show a horizontal rule before the featured advertisement. */
  featureDivider?: boolean;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
  titleId?: string;
  /** Navy title-bar text. Defaults to “Advertising”. */
  title?: string;
};

const DEFAULT_TITLE = "Advertising";

function CollageBlock({
  collage,
  defaultColumns,
}: {
  collage: AdvertisingCollage;
  defaultColumns: number;
}) {
  const columns = collage.columns ?? defaultColumns;
  return (
    <div className={styles.collageWrap}>
      <div
        className={styles.collage}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        role="group"
        aria-label="Advertisements"
      >
        {collage.tiles.map((tile, index) => (
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
      {(collage.sources ?? []).map((source, index) => (
        <p key={index} className={styles.source}>
          {source}
        </p>
      ))}
    </div>
  );
}

export function AdvertisingPage({
  heroLabel,
  hero,
  nav,
  tiles,
  columns = 2,
  sources,
  collages,
  feature,
  featureDivider = false,
  previousHref,
  nextHref,
  overviewHref,
  titleId = "advertising-title",
  title = DEFAULT_TITLE,
}: AdvertisingPageProps) {
  const resolvedCollages: AdvertisingCollage[] =
    collages ??
    (tiles
      ? [
          {
            tiles,
            columns,
            sources,
          },
        ]
      : []);

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
          <div className={styles.blocks}>
            {resolvedCollages.map((collage, index) => (
              <CollageBlock
                key={`collage-${index}`}
                collage={collage}
                defaultColumns={columns}
              />
            ))}

            {feature ? (
              <>
                {featureDivider ? <hr className={styles.divider} /> : null}
                <div className={styles.feature}>
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt ?? ""}
                    width={feature.image.width}
                    height={feature.image.height}
                    className={styles.featureArt}
                    unoptimized
                  />
                  {feature.body ? (
                    <div className={styles.featureBody}>{feature.body}</div>
                  ) : null}
                  {feature.source ? (
                    <p className={styles.source}>{feature.source}</p>
                  ) : null}
                </div>
              </>
            ) : null}
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
