import type { Metadata } from "next";
import Image from "next/image";
import { VLinks } from "@/components/VLinks";
import styles from "./v.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "V — The Attractions from A to Z — nywf64.com",
  description:
    "V: Vatican to Venezuela — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/U` model). */
export default function VPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="V — Vatican to Venezuela"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/v-hero.jpg"
            alt="V — The V Attractions — Vatican to Venezuela — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <VLinks />
      <LetterPagesNav2 letter="V" />
    </main>
  );
}
