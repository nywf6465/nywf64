import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/stitchedScanGallery.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type ScanFigure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  source?: ReactNode;
};

export type StitchedScanGalleryPageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  title: ReactNode;
  titleId: string;
  scans: ScanFigure[];
  previousHref: string;
  nextHref: string;
  overviewHref: string;
};

export function StitchedScanGalleryPage({
  heroLabel,
  hero,
  nav,
  title,
  titleId,
  scans,
  previousHref,
  nextHref,
  overviewHref,
}: StitchedScanGalleryPageProps) {
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
          <div className={styles.gallery}>
            {scans.map((scan) => (
              <figure key={scan.src} className={styles.figure}>
                <span className={styles.frame}>
                  <Image
                    src={scan.src}
                    alt={scan.alt}
                    width={scan.width}
                    height={scan.height}
                    className={styles.img}
                    unoptimized
                  />
                </span>
                {scan.source ? (
                  <figcaption className={styles.source}>{scan.source}</figcaption>
                ) : null}
              </figure>
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
