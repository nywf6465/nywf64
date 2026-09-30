import type { Metadata } from "next";
import Image from "next/image";
import { RLinks } from "@/components/RLinks";
import styles from "./r.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "R — The Attractions from A to Z — nywf64.com",
  description:
    "R: RCA to Russian Orthodox Church — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/N` / `/O` / `/P` model). */
export default function RPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="R — RCA to Russian Orthodox Church"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/r-hero.jpg"
            alt="R — The R Attractions — RCA to Russian Orthodox Church — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <RLinks />
      <LetterPagesNav2 letter="R" />
    </main>
  );
}
