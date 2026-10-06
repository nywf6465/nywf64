import type { Metadata } from "next";
import Image from "next/image";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hawaii04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Hawaii — nywf64.com",
  description:
    "Hawaii pavilion sub-exhibitors from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

const EXHIBITORS = [
  "Orchids of Hawaii International, Inc.",
  "Pineapple Growers Association of Hawaii",
  "Joseph E. Seagram & Sons, Inc.",
  "Naniloa Gift Lanai",
  "Mildred's of Hawaii",
  "First National Bank of Hawaii",
  "Hawaii Visitors' Bureau and Book Shop",
  "Hawaiian Sugar Planters Association",
  "Jamin Sales",
  "United Airlines",
  "Bank of Hawaii",
] as const;

const CONCESSIONS = [
  "The Five Volcanos Restaurant - Hawaii-Ahn",
  "The Snack Bar - Hawaii-Ahn",
  "The Alohatheatre - Greater Productions of Hawaii, Inc.",
  "The Hat Stand - Arlington Hat-A-Rama Corporation",
  "Native Village and Outrigger Canoes",
] as const;

/**
 * Hawaii — List of Sub-Exhibitors.
 * Body from legacy hawaii04.html (custom list page — no shared standard).
 * Legacy spellings (“Five Volcanos”, “Alohatheatre”) preserved.
 *
 * Stack: hero → HawaiiNavChrome → navy title → list → Nav2Bar.
 */
export default function Hawaii04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Hawaii">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hawaiioverview/hero-banner.jpg"
            alt="Hawaii at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HawaiiNavChrome />

      <article className={styles.article} aria-labelledby="hawaii04-title">
        <header className={styles.titleBar}>
          <h1 id="hawaii04-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <ul className={styles.names}>
            {EXHIBITORS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <p className={styles.concessionsLead}>Other concessions are:</p>

          <ul className={styles.names}>
            {CONCESSIONS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <p className={styles.source}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hawaii03"
        explicitPrevious
        overviewHref="/hawaiioverview"
        nextHref="/hawaii05"
      />
    </>
  );
}
