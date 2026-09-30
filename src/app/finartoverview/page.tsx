import type { Metadata } from "next";
import Image from "next/image";
import { FinartNavChrome } from "@/components/FinartNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./finartoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fine Arts Pavilion — Overview — nywf64.com",
  description:
    "Fine Arts Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fine Arts Pavilion overview — follows the **overview** prototype
 * (same stack as /fiestaoverview / /fesgasoverview).
 */
export default function FinartOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fine Arts Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/finartoverview/hero-banner.jpg"
            alt="Fine Arts Pavilion at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FinartNavChrome />

      <section
        className={styles.overview}
        aria-label="Fine Arts Pavilion overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Sponsored by the Long Island Arts Center, this pavilion displays
              the work of 250 American artists.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/finartoverview/photo.jpg"
              alt="Fine Arts Pavilion — exhibition of American artists"
              width={1584}
              height={1280}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/finartoverview"
        overviewHref="/finartoverview"
        nextHref="/finart01"
      />
    </>
  );
}
