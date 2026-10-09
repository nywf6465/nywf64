import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jordanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Jordan — Overview — nywf64.com",
  description:
    "Jordan overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jordan overview — follows the **overview** prototype
 * (same stack as /japanoverview / /jaycopoverview).
 * Wired with the shared **Jordan menu**.
 * Route slug: `/jordanoverview`.
 */
export default function JordanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <section className={styles.overview} aria-label="Jordan overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The age-old cultures of this land -- a seedbed of civilizations
              and religions -- are graphically displayed in an unusual pavilion.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/jordanoverview/photo.jpg"
              alt="Jordan pavilion — age-old cultures graphically displayed"
              width={1584}
              height={1040}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/jordan10"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan01"
      />
    </>
  );
}
