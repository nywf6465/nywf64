import type { Metadata } from "next";
import Image from "next/image";
import { DisneyShowsLinks } from "@/components/DisneyShowsLinks";
import styles from "./disney-shows.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "The Disney Shows — nywf64.com",
  description:
    "The Disney Shows at the 1964/1965 New York World’s Fair — attractions and entertainment from Walt Disney.",
};

/** Landing: header → hero → guidebook banner → links section → footer. */
export default function DisneyShowsPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="The Disney Shows">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/disney-hero.jpg"
            alt="The Disney Shows — Walt Disney attractions at the 1964/1965 New York World’s Fair"
            width={1913}
            height={822}
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
      <DisneyShowsLinks />
    </main>
  );
}
