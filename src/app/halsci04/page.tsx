import type { Metadata } from "next";
import Image from "next/image";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./halsci04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  EXHIBITORS_1964_LEFT,
  EXHIBITORS_1964_RIGHT,
} from "./exhibitors";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Hall of Science — nywf64.com",
  description:
    "Hall of Science sub-exhibitors from the 1964 World's Fair Information Manual on nywf64.com.",
};

/**
 * Hall of Science — List of Sub-Exhibitors.
 * Body from legacy halsci04.html (custom list page — no shared standard).
 * Legacy spellings (Divison, Subsidary) are preserved.
 *
 * Stack: hero → HalsciNavChrome → navy title → list → Nav2Bar.
 * Last Hall of Science topic — NEXT returns to overview.
 */
export default function Halsci04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/halscioverview/hero-banner.jpg"
            alt="Hall of Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HalsciNavChrome />

      <article className={styles.article} aria-labelledby="halsci04-title">
        <header className={styles.titleBar}>
          <h1 id="halsci04-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <ul className={styles.names}>
              {EXHIBITORS_1964_LEFT.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <ul className={styles.names}>
              {EXHIBITORS_1964_RIGHT.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <p className={styles.source}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/halsci03"
        explicitPrevious
        overviewHref="/halscioverview"
        nextHref="/halscioverview"
      />
    </>
  );
}
