import type { Metadata } from "next";
import Image from "next/image";
import { LakcruNavChrome } from "@/components/LakcruNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lakcruoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lake Cruise — Overview — nywf64.com",
  description:
    "Lake Cruise overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Lake Cruise overview — follows the **overview** prototype
 * (same stack as /koreaoverview / /kidlanoverview).
 * Wired with the shared **lakcru menu**.
 * Route slug: `/lakcruoverview`.
 */
export default function LakcruOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lake Cruise">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lakcruoverview/hero-banner.jpg"
            alt="Lake Cruise at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LakcruNavChrome />

      <section className={styles.overview} aria-label="Lake Cruise overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A leisurely 20-minute ride on Meadow Lake provides various scenic
              views of the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lakcruoverview/photo.jpg"
              alt="Lake Cruise — boarding at Meadow Lake"
              width={1584}
              height={1065}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lakcruoverview"
        overviewHref="/lakcruoverview"
        nextHref="/lakcru01"
      />
    </>
  );
}
