import type { Metadata } from "next";
import Image from "next/image";
import { ULinks } from "@/components/ULinks";
import styles from "./u.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "U — The Attractions from A to Z — nywf64.com",
  description:
    "U: U.S. Post Office to United States — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/T` model). */
export default function UPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="U — U.S. Post Office to United States"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/u-hero.jpg"
            alt="U — The U Attractions — U.S. Post Office to United States — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <ULinks />
      <LetterPagesNav2 letter="U" />
    </main>
  );
}
