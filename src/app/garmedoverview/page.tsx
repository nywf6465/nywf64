import type { Metadata } from "next";
import Image from "next/image";
import { GarmedNavChrome } from "@/components/GarmedNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./garmedoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Garden of Meditation — Overview — nywf64.com",
  description:
    "Garden of Meditation overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Garden of Meditation overview — follows the **overview** prototype
 * (same stack as /funlanoverview / /franceoverview).
 */
export default function GarmedOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Garden of Meditation">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/garmedoverview/hero-banner.jpg"
            alt="Garden of Meditation at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GarmedNavChrome />

      <section
        className={styles.overview}
        aria-label="Garden of Meditation overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A two-acre park set aside by the Fair provides a quiet spot for
              relaxation.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/garmedoverview/photo.jpg"
              alt="Garden of Meditation — quiet park for relaxation"
              width={1584}
              height={1198}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/garmedoverview"
        overviewHref="/garmedoverview"
        nextHref="/garmed01"
      />
    </>
  );
}
