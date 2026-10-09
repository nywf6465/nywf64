import type { Metadata } from "next";
import Image from "next/image";
import { LightingNavChrome } from "@/components/LightingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lightingoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lighting & Effects — Overview — nywf64.com",
  description:
    "Lighting & Effects overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Lighting & Effects overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /poorefoverview).
 */
export default function LightingOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lighting & Effects">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lightingoverview/hero-banner.jpg"
            alt="Lighting & Effects at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LightingNavChrome />

      <section
        className={styles.overview}
        aria-label="Lighting & Effects overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair&apos;s spectacular lighting and effects made the Fair a
              wonderland of color at night.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lightingoverview/photo.jpg"
              alt="Lighting & Effects — Fair night color and spectacle"
              width={930}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lightingoverview"
        overviewHref="/lightingoverview"
        nextHref="/lighting01"
      />
    </>
  );
}
