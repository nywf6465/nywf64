import type { Metadata } from "next";
import Image from "next/image";
import { AutthrNavChrome } from "@/components/AutthrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./autthroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Auto Thrill Show — Overview — nywf64.com",
  description:
    "Auto Thrill Show overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Auto Thrill Show overview — follows the **overview** prototype
 * (same stack as /austriaoverview / /atomhosoverview).
 */
export default function AutthrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Auto Thrill Show">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/autthroverview/hero-banner.jpg"
            alt="Auto Thrill Show at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AutthrNavChrome />

      <section
        className={styles.overview}
        aria-label="Auto Thrill Show overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              &quot;Hell Drivers&quot; risk life, limb and vehicles as they
              crash, roll and leap their cars in a high-speed show.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/autthroverview/photo.jpg"
              alt="Auto Thrill Show"
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
        previousHref="/autthroverview"
        overviewHref="/autthroverview"
        nextHref="/autthr01"
      />
    </>
  );
}
