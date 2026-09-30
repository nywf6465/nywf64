import type { Metadata } from "next";
import Image from "next/image";
import { TLinks } from "@/components/TLinks";
import styles from "./t.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "T — The Attractions from A to Z — nywf64.com",
  description:
    "T: Texas Pavilions to Two Thousand Tribes — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/S` model). */
export default function TPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="T — Texas Pavilions to Two Thousand Tribes"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/t-hero.jpg"
            alt="T — The T Attractions — Texas Pavilions to Two Thousand Tribes — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <TLinks />
      <LetterPagesNav2 letter="T" />
    </main>
  );
}
