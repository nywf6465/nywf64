import type { Metadata } from "next";
import Image from "next/image";
import { BrilionNavChrome } from "@/components/BrilionNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./brilionoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "British Lion Pub — Overview — nywf64.com",
  description:
    "British Lion Pub overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * British Lion Pub overview — follows the **overview** prototype
 * (same stack as /braraioverview / /boyscooverview).
 */
export default function BrilionOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="British Lion Pub">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/brilionoverview/hero-banner.jpg"
            alt="British Lion Pub at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BrilionNavChrome />

      <section
        className={styles.overview}
        aria-label="British Lion Pub overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In a replica of a 17th Century Tudor inn, traditional British food
              and drink are served.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/brilionoverview/photo.jpg"
              alt="British Lion Pub — Tudor inn replica"
              width={958}
              height={677}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/brilionoverview"
        overviewHref="/brilionoverview"
        nextHref="/brilion01"
      />
    </>
  );
}
