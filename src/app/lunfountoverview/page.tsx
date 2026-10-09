import type { Metadata } from "next";
import Image from "next/image";
import { LunfountNavChrome } from "@/components/LunfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lunfountoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lunar Fountain — Overview — nywf64.com",
  description:
    "Lunar Fountain overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Lunar Fountain overview — follows the **overview** prototype
 * (same stack as /poolinoverview / /fouplaoverview).
 */
export default function LunfountOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lunar Fountain">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lunfountoverview/hero-banner.jpg"
            alt="Lunar Fountain at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LunfountNavChrome />

      <section
        className={styles.overview}
        aria-label="Lunar Fountain overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Parabolic jet streams of water, reaching heights of 30 feet,
              radiate from 16 nozzles on the top of an elliptical dome.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lunfountoverview/photo.jpg"
              alt="Lunar Fountain — parabolic jets from elliptical dome"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lunfountoverview"
        overviewHref="/lunfountoverview"
        nextHref="/lunfount01"
      />
    </>
  );
}
