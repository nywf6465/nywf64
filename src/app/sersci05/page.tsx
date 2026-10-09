import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sersci05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Floorplan — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science pavilion floorplan — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science — Pavilion Floorplan.
 * Body from legacy sersci05.html (single floorplan image).
 *
 * Stack: hero → SersciNavChrome → navy title → floorplan → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Sersci05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Sermons from Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/serscioverview/hero-banner.jpg"
            alt="Sermons from Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SersciNavChrome />

      <article className={styles.article} aria-labelledby="sersci05-title">
        <header className={styles.titleBar}>
          <h1 id="sersci05-title" className={styles.titleBarMain}>
            Pavilion Floorplan
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sersci05/sersci08.jpg"
                alt="Floorplan"
                width={550}
                height={512}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sersci04"
        explicitPrevious
        overviewHref="/serscioverview"
        nextHref="/sersci06"
      />
    </>
  );
}
