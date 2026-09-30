import type { Metadata } from "next";
import Image from "next/image";
import { AtozLinks } from "@/components/AtozLinks";
import styles from "./atoz.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "The Attractions from A to Z — nywf64.com",
  description:
    "The Attractions from A to Z — discover the 1964/1965 New York World’s Fair alphabetically on nywf64.com.",
};

/**
 * Attractions from A to Z — pavilions-page model:
 * header → hero → guidebook banner → letter cards → footer.
 */
export default function AtozPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="The Attractions from A to Z">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/atoz-hero.jpg"
            alt="The Attractions from A to Z — discover the Fair alphabetically one attraction at a time"
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
      <AtozLinks />
    </main>
  );
}
