import type { Metadata } from "next";
import Image from "next/image";
import { CLinks } from "@/components/CLinks";
import styles from "./c.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "C \u2014 The Attractions from A to Z \u2014 nywf64.com",
  description:
    "C: Caribbean to Continental Park \u2014 Attractions from A to Z at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` model). */
export default function CPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="C — Caribbean to Continental Park"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/c-hero.jpg"
            alt="C — The C Attractions — Caribbean to Continental Park — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <CLinks />
      <LetterPagesNav2 letter="C" />
    </main>
  );
}
