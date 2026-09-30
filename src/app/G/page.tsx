import type { Metadata } from "next";
import Image from "next/image";
import { GLinks } from "@/components/GLinks";
import styles from "./g.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "G — The Attractions from A to Z — nywf64.com",
  description:
    "G: Garden of Meditation to Guinea — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` model). */
export default function GPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="G — Garden of Meditation to Guinea"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/g-hero.jpg"
            alt="G — The G Attractions — Garden of Meditation to Guinea — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <GLinks />
      <LetterPagesNav2 letter="G" />
    </main>
  );
}
