import type { Metadata } from "next";
import Image from "next/image";
import { LouisiaNavChrome } from "@/components/LouisiaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./louisiaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Louisiana — Overview — nywf64.com",
  description:
    "Louisiana overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Louisiana overview — follows the **overview** prototype
 * (same stack as /lespouoverview / /lebanooverview).
 * Wired with the shared **louisia menu**.
 * Route slug: `/louisiaoverview`.
 */
export default function LouisiaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Louisiana">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/louisiaoverview/hero-banner.jpg"
            alt="Louisiana pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LouisiaNavChrome />

      <section className={styles.overview} aria-label="Louisiana overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A reconstruction of New Orleans&apos; famous Bourbon Street features
              well-known jazz musicians, Creole food and sidewalk shops.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/louisiaoverview/photo.jpg"
              alt="Louisiana — jazz musicians on Bourbon Street reconstruction"
              width={1584}
              height={985}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/louisiaoverview"
        overviewHref="/louisiaoverview"
        nextHref="/louisia01"
      />
    </>
  );
}
