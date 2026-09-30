import type { Metadata } from "next";
import Image from "next/image";
import { MLinks } from "@/components/MLinks";
import styles from "./m.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "M — The Attractions from A to Z — nywf64.com",
  description:
    "M: Main Mall to Morocco — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` model). */
export default function MPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="M — Main Mall to Morocco"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/m-hero.jpg"
            alt="M — The M Attractions — Main Mall to Morocco — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <MLinks />
      <LetterPagesNav2 letter="M" />
    </main>
  );
}
