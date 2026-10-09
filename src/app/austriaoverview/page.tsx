import type { Metadata } from "next";
import Image from "next/image";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./austriaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Austria — Overview — nywf64.com",
  description:
    "Austria overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Austria overview — follows the **overview** prototype
 * (same stack as /atomhosoverview / /arlhatoverview).
 */
export default function AustriaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Austria">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/austriaoverview/hero-banner.jpg"
            alt="Austria at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AustriaNavChrome />

      <section className={styles.overview} aria-label="Austria overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Art and industry, culture and tourism are featured in this
              striking pavilion that echoes the lines of an Alpine lodge.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/austriaoverview/photo.jpg"
              alt="Austria"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/austriaoverview"
        overviewHref="/austriaoverview"
        nextHref="/austria01"
      />
    </>
  );
}
