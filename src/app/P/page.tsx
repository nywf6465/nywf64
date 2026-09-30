import type { Metadata } from "next";
import Image from "next/image";
import { PLinks } from "@/components/PLinks";
import styles from "./p.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "P — The Attractions from A to Z — nywf64.com",
  description:
    "P: Pakistan to Protestant Center — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/N` / `/O` model). */
export default function PPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="P — Pakistan to Protestant Center"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/p-hero.jpg"
            alt="P — The P Attractions — Pakistan to Protestant Center — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <PLinks />
      <LetterPagesNav2 letter="P" />
    </main>
  );
}
