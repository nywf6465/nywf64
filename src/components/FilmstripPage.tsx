import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/filmstripPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Filmstrip still/transcript page.
 * Canonical instance: /unisph08 (parts via /unisph08-02 … /unisph08-04).
 *
 * HARD RULE — navy title banner immediately beneath the attraction nav.
 *
 * Stack: hero → attraction nav → navy title → optional intro → frames →
 * optional thanks → film continue/back → Nav2Bar (topic neighbors, not film parts).
 */

export type FilmstripImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type FilmstripFrame = {
  image: FilmstripImage;
  /** Soundtrack / transcript line beside the still (may be empty). */
  caption?: ReactNode;
};

export type FilmstripPageProps = {
  heroLabel: string;
  hero: FilmstripImage;
  nav: ReactNode;
  title: string;
  titleId?: string;
  intro?: ReactNode;
  thanks?: ReactNode;
  frames: FilmstripFrame[];
  /** Legacy “Film GO BACK” hand link (previous film part). */
  filmBackHref?: string;
  /** Legacy “CONTINUE Film” hand link (next film part). */
  filmContinueHref?: string;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
};

function Sprockets() {
  return (
    <div className={styles.sprockets} aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i}>O</span>
      ))}
    </div>
  );
}

export function FilmstripPage({
  heroLabel,
  hero,
  nav,
  title,
  titleId = "filmstrip-title",
  intro,
  thanks,
  frames,
  filmBackHref,
  filmContinueHref,
  previousHref,
  nextHref,
  overviewHref,
}: FilmstripPageProps) {
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
          {filmBackHref ? (
            <div className={styles.filmNavTop}>
              <Link href={filmBackHref} className={styles.filmNavLink}>
                <Image
                  src="/images/unisph08/hand_lf.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
                Film GO BACK
              </Link>
            </div>
          ) : null}

          {intro ? <div className={styles.intro}>{intro}</div> : null}

          <div className={styles.frames}>
            {frames.map((frame, index) => (
              <div
                key={`${frame.image.src}-${index}`}
                className={styles.frameRow}
              >
                <div className={styles.reel} role="group" aria-label="Film still">
                  <Sprockets />
                  <Image
                    src={frame.image.src}
                    alt={frame.image.alt ?? ""}
                    width={frame.image.width}
                    height={frame.image.height}
                    className={styles.still}
                    unoptimized
                  />
                  <Sprockets />
                </div>
                <div
                  className={
                    frame.caption ? styles.caption : styles.captionEmpty
                  }
                >
                  {frame.caption ?? null}
                </div>
              </div>
            ))}
          </div>

          {thanks ? <p className={styles.thanks}>{thanks}</p> : null}

          {filmContinueHref ? (
            <div className={styles.filmNavBottom}>
              <Link href={filmContinueHref} className={styles.filmNavLink}>
                CONTINUE Film
                <Image
                  src="/images/unisph08/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
              </Link>
            </div>
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
