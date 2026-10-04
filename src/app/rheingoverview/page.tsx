import type { Metadata } from "next";
import Image from "next/image";
import { RheingNavChrome } from "@/components/RheingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rheingoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Rheingold — Overview — nywf64.com",
  description:
    "Rheingold overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Rheingold overview — follows the **overview** prototype
 * (same stack as /rcaoverview / /africaoverview).
 */
export default function RheingOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Rheingold">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/rheingoverview/hero-banner.jpg"
            alt="Rheingold at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <RheingNavChrome />

      <section className={styles.overview} aria-label="Rheingold overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Gas lamps cast a glow on a cobblestone street where a tavern, a
              restaurant and an outdoor cafe&apos; recreate the New York of
              1904.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/rheingoverview/photo.jpg"
              alt="Rheingold Little Old New York at the 1964/1965 New York World’s Fair"
              width={1923}
              height={818}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/rheingoverview"
        overviewHref="/rheingoverview"
        nextHref="/rheing01"
      />
    </>
  );
}
