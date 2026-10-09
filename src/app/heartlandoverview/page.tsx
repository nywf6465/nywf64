import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartlandoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Heartland States U.S.A. — Overview — nywf64.com",
  description:
    "Heartland States U.S.A. overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Heartland States U.S.A. overview — follows the **overview** prototype
 * (same stack as /hawaiioverview / /halscioverview).
 */
export default function HeartlandOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <section
        className={styles.overview}
        aria-label="Heartland States U.S.A. overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Heartland States U.S.A. Pavilion would showcase the exhibits
              of the states of North and South Dakota, Nebraska and Kansas. It
              was never built.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/heartlandoverview/photo.jpg"
              alt="Heartland States U.S.A. — proposed pavilion for Dakota, Nebraska, and Kansas"
              width={1584}
              height={599}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/heartlandoverview"
        overviewHref="/heartlandoverview"
        nextHref="/heartland01"
      />
    </>
  );
}
