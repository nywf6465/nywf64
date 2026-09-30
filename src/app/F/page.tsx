import type { Metadata } from "next";
import Image from "next/image";
import { FLinks } from "@/components/FLinks";
import styles from "./f.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "F — The Attractions from A to Z — nywf64.com",
  description:
    "F: Festival of Gas to Funland — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` model). */
export default function FPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="F — Festival of Gas to Funland"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/f-hero.jpg"
            alt="F — The F Attractions — Festival of Gas to Funland — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <FLinks />
      <LetterPagesNav2 letter="F" />
    </main>
  );
}
