import type { Metadata } from "next";
import Image from "next/image";
import { PrebuiNavChrome } from "@/components/PrebuiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./prebuioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Building & Public Relations — Overview — nywf64.com",
  description:
    "Press Building & Public Relations overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Press Building overview — follows the **overview** prototype
 * (same stack as /rcaoverview / /rheingoverview).
 */
export default function PrebuiOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Press Building & Public Relations"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/prebuioverview/hero-banner.jpg"
            alt="Press Building & Public Relations at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PrebuiNavChrome />

      <section
        className={styles.overview}
        aria-label="Press Building & Public Relations overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The purpose of the Press Building is to provide a convenient,
              comfortable and functional center for the working press and for
              Public Relations and Publicity.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/prebuioverview/photo.jpg"
              alt="Press Building at the 1964/1965 New York World’s Fair"
              width={2135}
              height={736}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/prebuioverview"
        overviewHref="/prebuioverview"
        nextHref="/prebuilt01"
      />
    </>
  );
}
