import type { Metadata } from "next";
import Image from "next/image";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genfoooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "General Foods Arches — Overview — nywf64.com",
  description:
    "General Foods Arches overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches overview — follows the **overview** prototype
 * (same stack as /gencigoverview / /garmedoverview).
 */
export default function GenfooOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Foods Arches">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/genfoooverview/hero-banner.jpg"
            alt="General Foods Arches at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GenfooNavChrome />

      <section
        className={styles.overview}
        aria-label="General Foods Arches overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Eleven giant &quot;Archways to Understanding&quot; straddle the
              roadways at strategic locations throughout the Fairgrounds.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/genfoooverview/photo.jpg"
              alt='General Foods Arches — Archways to Understanding'
              width={1584}
              height={1611}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/genfoooverview"
        overviewHref="/genfoooverview"
        nextHref="/genfoo01"
      />
    </>
  );
}
