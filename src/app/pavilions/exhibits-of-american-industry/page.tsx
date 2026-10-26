import type { Metadata } from "next";
import Image from "next/image";
import { AmericanIndustryLinks } from "@/components/AmericanIndustryLinks";
import styles from "./industry.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Exhibits of American Industry — nywf64.com",
  description:
    "Exhibits of American Industry at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Landing: header → hero → guidebook banner → links → footer
 * (Disney Shows / Religions / Quiet Spaces / Proposed Pavilions pattern).
 * Links: All-State Properties & Macy's — same `/A` card.
 */
export default function ExhibitsOfAmericanIndustryPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="Exhibits of American Industry"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/exhibits-of-american-industry-hero.jpg"
            alt="Exhibits of American Industry at the 1964/1965 New York World’s Fair"
            width={1935}
            height={812}
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
      <AmericanIndustryLinks />
    </main>
  );
}
