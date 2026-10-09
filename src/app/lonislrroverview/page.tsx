import type { Metadata } from "next";
import Image from "next/image";
import { LonislrrNavChrome } from "@/components/LonislrrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lonislrroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Long Island Rail Road — Overview — nywf64.com",
  description:
    "Long Island Rail Road overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Long Island Rail Road overview — follows the **overview** prototype
 * (same stack as /louisiaoverview / /lespouoverview).
 * Wired with the shared **lonislrr menu**.
 * Route slug: `/lonislrroverview`.
 */
export default function LonislrrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Long Island Rail Road">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lonislrroverview/hero-banner.jpg"
            alt="Long Island Rail Road at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LonislrrNavChrome />

      <section
        className={styles.overview}
        aria-label="Long Island Rail Road overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Open-sided tents, a duck pond and a variety of railroad displays
              give this exhibit the atmosphere of an old-fashioned county fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lonislrroverview/photo.jpg"
              alt="Long Island Rail Road — Come On In See Long Island entrance"
              width={1584}
              height={1650}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lonislrroverview"
        overviewHref="/lonislrroverview"
        nextHref="/lonislrr01"
      />
    </>
  );
}
