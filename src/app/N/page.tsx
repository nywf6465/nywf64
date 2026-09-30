import type { Metadata } from "next";
import Image from "next/image";
import { NLinks } from "@/components/NLinks";
import styles from "./n.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import { LetterPagesNav2 } from "@/components/LetterPagesNav2";

export const metadata: Metadata = {
  title: "N — The Attractions from A to Z — nywf64.com",
  description:
    "N: National Cash Register to New York State — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links → footer (copy of `/B` / `/M` model). */
export default function NPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="N — National Cash Register to New York State"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/n-hero.jpg"
            alt="N — The N Attractions — National Cash Register to New York State — Attractions from A to Z at the 1964/1965 New York World’s Fair"
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
      <NLinks />
      <LetterPagesNav2 letter="N" />
    </main>
  );
}
