import type { Metadata } from "next";
import Image from "next/image";
import { LowengarNavChrome } from "@/components/LowengarNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lowengaroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lowenbrau Gardens — Overview — nywf64.com",
  description:
    "Lowenbrau Gardens overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Lowenbrau Gardens overview — follows the **overview** prototype
 * (same stack as /lonislrroverview / /louisiaoverview).
 * Wired with the shared **lowengar menu**.
 * Route slug: `/lowengaroverview`.
 * Name spelling matches hero graphic (no umlaut): Lowenbrau Gardens.
 */
export default function LowengarOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lowenbrau Gardens">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lowengaroverview/hero-banner.jpg"
            alt="Lowenbrau Gardens at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LowengarNavChrome />

      <section
        className={styles.overview}
        aria-label="Lowenbrau Gardens overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Bavarian food and beer are served in a replica of an open-air cafe
              in a village square.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lowengaroverview/photo.jpg"
              alt="Lowenbrau Gardens — entrance and beer garden"
              width={1584}
              height={1088}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lowengaroverview"
        overviewHref="/lowengaroverview"
        nextHref="/lowengar01"
      />
    </>
  );
}

