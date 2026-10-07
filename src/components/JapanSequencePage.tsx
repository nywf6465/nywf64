import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/japanSequencePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type SequenceImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  caption?: ReactNode;
  source?: ReactNode;
  bordered?: boolean;
};

export type JapanSequencePageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  title: ReactNode;
  titleId?: string;
  images: SequenceImage[];
  topSource?: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
};

/**
 * Centered sequential scan figures (pamphlets / pavilion guides).
 * Navy title bar + optional top source + bordered figures at legacy widths.
 */
export function JapanSequencePage({
  heroLabel,
  hero,
  nav,
  title,
  titleId = "japan-sequence-title",
  images,
  topSource,
  previousHref,
  nextHref,
  overviewHref = "/japanoverview",
}: JapanSequencePageProps) {
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
          {topSource ? <p className={styles.topSource}>{topSource}</p> : null}
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className={styles.figure}
              style={{ maxWidth: image.width }}
            >
              <span
                className={
                  image.bordered !== false ? styles.figureBordered : undefined
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt ?? ""}
                  width={image.width}
                  height={image.height}
                  className={styles.figureArt}
                  unoptimized
                />
              </span>
              {image.caption ? (
                <figcaption className={styles.caption}>{image.caption}</figcaption>
              ) : null}
              {image.source ? (
                <p className={styles.captionSource}>{image.source}</p>
              ) : null}
            </figure>
          ))}
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
