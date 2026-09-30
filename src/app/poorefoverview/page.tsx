import type { Metadata } from "next";
import Image from "next/image";
import { PoorefNavChrome } from "@/components/PoorefNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./poorefoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pool of Reflections — Overview — nywf64.com",
  description:
    "Pool of Reflections overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Pool of Reflections overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /lunfountoverview).
 */
export default function PoorefOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pool of Reflections">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/poorefoverview/hero-banner.jpg"
            alt="Pool of Reflections at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PoorefNavChrome />

      <section
        className={styles.overview}
        aria-label="Pool of Reflections overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Pool of Reflections is a series of five water ponds at stepped
              heights with water flowing from higher to lower levels forming a
              long cascading type pool.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/poorefoverview/photo.jpg"
              alt="Pool of Reflections — cascading stepped water ponds"
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
        previousHref="/poorefoverview"
        overviewHref="/poorefoverview"
        nextHref="/pooref01"
      />
    </>
  );
}
