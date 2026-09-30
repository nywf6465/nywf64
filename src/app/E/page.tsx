import type { Metadata } from "next";
import Image from "next/image";
import { ELinks } from "@/components/ELinks";
import styles from "./e.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "E \u2014 The Attractions from A to Z \u2014 nywf64.com",
  description:
    "E: Eastern Air Lines to Equitable Life \u2014 Attractions from A to Z at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` model). */
export default function EPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="E — Eastern Air Lines to Equitable Life"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/e-hero.jpg"
            alt="E — The E Attractions — Eastern Air Lines to Equitable Life — Attractions from A to Z at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <section className={styles.banner} aria-label="Guidebook banner">
        <div className={styles.bannerFrame}>
          <Image
            src="/images/guidebook-banner.jpg"
            alt=""
            width={1206}
            height={180}
            sizes="100vw"
            className={styles.bannerArt}
            unoptimized
          />
        </div>
      </section>
      <ELinks />
      <LetterPagesNav2 letter="E" />
    </main>
  );
}
