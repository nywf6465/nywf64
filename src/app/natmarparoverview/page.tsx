import type { Metadata } from "next";
import Image from "next/image";
import { NatmarparNavChrome } from "@/components/NatmarparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./natmarparoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "National Maritime Union Park — Overview — nywf64.com",
  description:
    "National Maritime Union Park overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * National Maritime Union Park overview — follows the **overview** prototype
 * (same stack as /ncroverview / /morocooverview).
 * Wired with the shared **natmarpar menu**.
 * Route slug: `/natmarparoverview`.
 */
export default function NatmarparOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="National Maritime Union Park"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/natmarparoverview/hero-banner.jpg"
            alt="National Maritime Union Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NatmarparNavChrome />

      <section
        className={styles.overview}
        aria-label="National Maritime Union Park overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A quiet, restful spot away from the Fair&apos;s noise and bustle,
              this small, landscaped park is a tribute to American seamen..
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/natmarparoverview/photo.jpg"
              alt="National Maritime Union Park"
              width={1584}
              height={864}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/natmarparoverview"
        overviewHref="/natmarparoverview"
        nextHref="/natmarpar01"
      />
    </>
  );
}
