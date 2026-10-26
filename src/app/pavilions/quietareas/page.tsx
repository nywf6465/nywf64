import type { Metadata } from "next";
import Image from "next/image";
import { QuietAreasLinks } from "@/components/QuietAreasLinks";
import styles from "./quietareas.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Quiet Spaces & Rest Areas — nywf64.com",
  description:
    "Quiet Spaces & Rest Areas at the 1964/1965 New York World’s Fair — relaxing spaces on nywf64.com.",
};

/**
 * Landing: header → hero → guidebook banner → links → footer
 * (Disney Shows / Religions / Fountains pattern).
 * Links: Garden of Meditation (`/G`), Main Mall (`/M`), National Maritime
 * Union Park (`/N`) — same A-to-Z cards.
 */
export default function QuietAreasPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="Quiet Spaces & Rest Areas"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/quietareas-hero.jpg"
            alt="Quiet Spaces & Rest Areas — relaxing spaces at the 1964/1965 New York World’s Fair"
            width={1900}
            height={828}
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
      <QuietAreasLinks />
    </main>
  );
}
