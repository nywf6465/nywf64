import type { Metadata } from "next";
import Image from "next/image";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisphoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Unisphere — Overview — nywf64.com",
  description:
    "Unisphere overview at the 1964/1965 New York World’s Fair — symbol of the Fair on nywf64.com.",
};

/**
 * Unisphere overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (unisph menu) → overview body → nav2 → footer
 */
export default function UnisphOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <section className={styles.overview} aria-label="Unisphere overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Symbol of the Fair, this 12-story high stainless-steel model of
              the earth was built and presented by United States Steel.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/unisphoverview/photo.jpg"
              alt="Unisphere — stainless-steel model of the earth"
              width={958}
              height={1117}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/unisphoverview"
        overviewHref="/unisphoverview"
        nextHref="/unisph01"
      />
    </>
  );
}
