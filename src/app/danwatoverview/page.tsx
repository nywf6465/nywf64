import type { Metadata } from "next";
import Image from "next/image";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./danwatoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Dancing Waters — Overview — nywf64.com",
  description:
    "Dancing Waters overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters overview — follows the **overview** prototype
 * (same stack as /conparoverview / /coninsoverview).
 */
export default function DanwatOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Dancing Waters">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/danwatoverview/hero-banner.jpg"
            alt="Dancing Waters at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DanwatNavChrome />

      <section
        className={styles.overview}
        aria-label="Dancing Waters overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Colored lights, music and 4,000 moving jets of water are combined
              to create a variety of unusual effects.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/danwatoverview/photo.jpg"
              alt="Dancing Waters — colored lights and moving water jets"
              width={1145}
              height={1326}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/danwatoverview"
        overviewHref="/danwatoverview"
        nextHref="/danwat01"
      />
    </>
  );
}
