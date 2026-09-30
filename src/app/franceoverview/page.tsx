import type { Metadata } from "next";
import Image from "next/image";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./franceoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "France — Overview — nywf64.com",
  description:
    "France overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * France overview — follows the **overview** prototype
 * (same stack as /formicaoverview / /logfluoverview).
 */
export default function FranceOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="France">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/franceoverview/hero-banner.jpg"
            alt="France at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FranceNavChrome />

      <section className={styles.overview} aria-label="France overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Ground was broken but the Pavilion of France was never
              constructed.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/franceoverview/photo.jpg"
              alt="France — Pavilion of France site at the New York World’s Fair"
              width={1584}
              height={1164}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/franceoverview"
        overviewHref="/franceoverview"
        nextHref="/france01"
      />
    </>
  );
}
