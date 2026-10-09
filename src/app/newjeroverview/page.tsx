import type { Metadata } from "next";
import Image from "next/image";
import { NewjerNavChrome } from "@/components/NewjerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newjeroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "New Jersey — Overview — nywf64.com",
  description:
    "New Jersey overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * New Jersey overview — follows the **overview** prototype
 * (same stack as /newengoverview / /natmarparoverview).
 * Wired with the shared **newjer menu**.
 * Route slug: `/newjeroverview` (suite prefix `newjer*`, not `newer*`).
 */
export default function NewjerOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="New Jersey">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/newjeroverview/hero-banner.jpg"
            alt="New Jersey at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NewjerNavChrome />

      <section className={styles.overview} aria-label="New Jersey overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A cluster of peaked roofs suspended from soaring booms shelters
              many displays: craftsmen, Edison mementos, model trains.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/newjeroverview/photo.jpg"
              alt="New Jersey pavilion"
              width={1584}
              height={1149}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/newjeroverview"
        overviewHref="/newjeroverview"
        nextHref="/newjer01"
      />
    </>
  );
}
