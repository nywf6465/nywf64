import type { Metadata } from "next";
import Image from "next/image";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./poolinoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pool of Industry — Overview — nywf64.com",
  description:
    "Pool of Industry overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Pool of Industry overview — follows the **overview** prototype
 * (same stack as /fouplaoverview / /foufaioverview).
 */
export default function PoolinOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pool of Industry ">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/poolinoverview/hero-banner.jpg"
            alt="Pool of Industry "
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PoolinNavChrome />

      <section
        className={styles.overview}
        aria-label="Pool of Industry overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A gigantic symphony of fireworks, water, color and music occurs
              every evening.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/poolinoverview/photo.jpg"
              alt="Pool of Industry — fireworks, water, color and music"
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
        previousHref="/poolinoverview"
        overviewHref="/poolinoverview"
        nextHref="/poolin01"
      />
    </>
  );
}
