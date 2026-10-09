import type { Metadata } from "next";
import Image from "next/image";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cenameriverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Central America — Overview — nywf64.com",
  description:
    "Central America overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America overview — follows the **overview** prototype
 * (same stack as /carparoverview / /carnivoverview).
 */
export default function CenamerOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Central America">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/cenameriverview/hero-banner.jpg"
            alt="Central America at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CenamerNavChrome />

      <section
        className={styles.overview}
        aria-label="Central America overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              An open-sided building with bright awnings presents the culture
              and commerce of five countries linked in a common market.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/cenameriverview/photo.jpg"
              alt="Central America — open-sided pavilion with awnings"
              width={958}
              height={636}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/cenameriverview"
        overviewHref="/cenameriverview"
        nextHref="/cenamer01"
      />
    </>
  );
}
