import type { Metadata } from "next";
import Image from "next/image";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./entbuioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Entrance Building — Overview — nywf64.com",
  description:
    "Entrance Building overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Building overview — follows the **overview** prototype
 * (same stack as /easternoverview / /danwatoverview).
 */
export default function EntbuiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Entrance Building">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/entbuioverview/hero-banner.jpg"
            alt="Entrance Building at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EntbuiNavChrome />

      <section
        className={styles.overview}
        aria-label="Entrance Building overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Entrance Building connects arriving and departing subway
              trains with the Fairgrounds. It houses many of the various service
              facilities of the Fair and provides comfort stations for
              Fairgoers.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/entbuioverview/photo.jpg"
              alt="Entrance Building — subway entrance and Fair service facilities"
              width={1584}
              height={1012}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/entbuioverview"
        overviewHref="/entbuioverview"
        nextHref="/entbui01"
      />
    </>
  );
}
