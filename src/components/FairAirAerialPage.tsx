import Image from "next/image";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/components/fairAirAerialPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type FairAirAerialPageProps = {
  pageNum: number;
  title: string;
  photoSrc: string;
  photoAlt: string;
  photoWidth: number;
  photoHeight: number;
  caption: string;
  previousHref: string;
  nextHref: string;
};

/**
 * Shared layout for See the Fair from the Air photograph pages
 * (legacy fair_air02–fair_air46).
 *
 * Stack: airhero → FairAirNavChrome → navy title → aerial photo → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export function FairAirAerialPage({
  pageNum,
  title,
  photoSrc,
  photoAlt,
  photoWidth,
  photoHeight,
  caption,
  previousHref,
  nextHref,
}: FairAirAerialPageProps) {
  const titleId = `fair-air${String(pageNum).padStart(2, "0")}-title`;

  return (
    <>
      <section
        className={styles.hero}
        aria-label="See the Fair from the Air"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_air/airhero.jpg"
            alt="See the Fair from the Air — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairAirNavChrome />

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src={photoSrc}
            alt={photoAlt}
            width={photoWidth}
            height={photoHeight}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.photo}
            unoptimized
            priority
          />
          <p className={styles.caption}>
            <span className={styles.captionLead}>{title}</span>
            {caption}
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        nextHref={nextHref}
      />
    </>
  );
}
