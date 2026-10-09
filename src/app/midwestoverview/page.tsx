import type { Metadata } from "next";
import Image from "next/image";
import { MidwestNavChrome } from "@/components/MidwestNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./midwestoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Midwestern States — Overview — nywf64.com",
  description:
    "Midwestern States overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Midwestern States overview — follows the **overview** prototype
 * (same stack as /mexicooverview / /medphooverview).
 * Wired with the shared **midwest menu**.
 * Route slug: `/midwestoverview`.
 */
export default function MidwestOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Midwestern States">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/midwestoverview/hero-banner.jpg"
            alt="Midwestern States at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MidwestNavChrome />

      <section
        className={styles.overview}
        aria-label="Midwestern States overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              {
                "The Midwestern States Exhibit would showcase the states of North and South Dakota, Nebraska, Kansas, Colorado, Iowa, Minnesota, Missouri, Montant and Wyoming.\u00A0 It was never built."
              }
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/midwestoverview/photo.jpg"
              alt="Midwestern States exhibit proposal"
              width={1584}
              height={873}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/midwestoverview"
        overviewHref="/midwestoverview"
        nextHref="/midwest01"
      />
    </>
  );
}
