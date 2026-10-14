import type { ReactNode } from "react";
import Image from "next/image";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/lifeMagazineArticlePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type LifeTile = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type LifeCollage = {
  tiles: LifeTile[];
  columns?: number;
  /** When false, omit the 1px collage frame (legacy unbordered strips). */
  bordered?: boolean;
  /** Optional artist / credit line under the collage (legacy caption). */
  caption?: ReactNode;
  /** Optional max width override in px (default 900). */
  maxWidth?: number;
};

export type LifeMagazineArticlePageProps = {
  title: string;
  titleId?: string;
  previousHref?: string;
  collages: LifeCollage[];
};

/**
 * Life Magazine article scan pages (legacy lifeYYMMDD.html).
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → collages → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * No NEXT — article pages do not advance sequentially.
 */
export function LifeMagazineArticlePage({
  title,
  titleId = "life-article-title",
  previousHref = "/life01",
  collages,
}: LifeMagazineArticlePageProps) {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Magazine Articles of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/periodicals/periodicalshero.jpg"
            alt='The “Magazine Articles on the Fair” — periodicals covering the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PeriodicalsNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.blocks}>
            {collages.map((collage, index) => {
              const columns = collage.columns ?? 3;
              const bordered = collage.bordered !== false;
              const maxWidth = collage.maxWidth ?? 900;
              return (
                <div key={`collage-${index}`} className={styles.collageWrap}>
                  <div
                    className={
                      bordered
                        ? styles.collage
                        : `${styles.collage} ${styles.collageUnbordered}`
                    }
                    style={{
                      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                      width: `min(${maxWidth}px, 100%)`,
                    }}
                    role="group"
                    aria-label="Magazine scan panels"
                  >
                    {collage.tiles.map((tile, tileIndex) => (
                      <Image
                        key={`${tile.src}-${tileIndex}`}
                        src={tile.src}
                        alt={tile.alt ?? ""}
                        width={tile.width}
                        height={tile.height}
                        className={styles.tile}
                        unoptimized
                      />
                    ))}
                  </div>
                  {collage.caption ? (
                    <p
                      className={styles.caption}
                      style={{ width: `min(${maxWidth}px, 100%)` }}
                    >
                      {collage.caption}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/periodicalsoverview"
        hideNext
      />
    </>
  );
}
