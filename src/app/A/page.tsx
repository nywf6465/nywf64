import type { Metadata } from "next";
import Image from "next/image";
import { ALinks } from "@/components/ALinks";
import styles from "./a.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "A \u2014 The Attractions from A to Z \u2014 nywf64.com",
  description:
    "A: Aerial Tower Ride to Avis \u2014 Attractions from A to Z at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links (19 cards) → footer (fountains model). */
export default function APage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="A — Aerial Tower Ride to Avis"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/a-hero.jpg"
            alt="A — Aerial Tower Ride to Avis — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <ALinks />
      <LetterPagesNav2 letter="A" />
    </main>
  );
}
