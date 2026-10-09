import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hollywoodoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hollywood — Overview — nywf64.com",
  description:
    "Hollywood overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hollywood overview — follows the **overview** prototype
 * (same stack as /hertzoverview / /hawaiioverview).
 */
export default function HollywoodOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hollywood">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/hollywoodoverview/hero-banner.jpg"
            alt="Hollywood at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HollywoodNavChrome />

      <section className={styles.overview} aria-label="Hollywood overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Behind a facsimile of Grauman&apos;s Chinese Theater, movie sets,
              props and costumes bring to life filmland&apos;s present and past.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/hollywoodoverview/photo.jpg"
              alt="Hollywood — Grauman's Chinese Theater facsimile, movie sets, props, and costumes"
              width={1254}
              height={1254}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/hollywoodoverview"
        overviewHref="/hollywoodoverview"
        nextHref="/hollywood01"
      />
    </>
  );
}
