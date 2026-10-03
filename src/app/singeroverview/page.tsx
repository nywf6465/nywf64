import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./singeroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Singer Bowl — Overview — nywf64.com",
  description:
    "Singer Bowl overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Singer Bowl overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SingerOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <section className={styles.overview} aria-label="Singer Bowl overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Music festivals, sports events and variety shows are held in this
              open-air stadium seating 15,000.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/singeroverview/photo.jpg"
              alt="Singer Bowl at the 1964/1965 New York World’s Fair"
              width={1754}
              height={897}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/singeroverview"
        overviewHref="/singeroverview"
        nextHref="/singer01"
      />
    </>
  );
}
