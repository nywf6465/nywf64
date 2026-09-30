import type { Metadata } from "next";
import Image from "next/image";
import { WLinks } from "@/components/WLinks";
import styles from "./w.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "W — The Attractions from A to Z — nywf64.com",
  description:
    "W: Walter's Wax Museum to World's Fair Pavilion — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/V` model). */
export default function WPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="W — Walter's Wax Museum to World's Fair Pavilion"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/w-hero.jpg"
            alt="W — The W Attractions — Walter's Wax Museum to World's Fair Pavilion — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <WLinks />
      <LetterPagesNav2 letter="W" />
    </main>
  );
}
