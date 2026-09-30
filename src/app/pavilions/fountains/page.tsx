import type { Metadata } from "next";
import Image from "next/image";
import { FountainsLinks } from "@/components/FountainsLinks";
import styles from "./fountains.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Fountains, Lighting & Effects — nywf64.com",
  description:
    "Fountains, Lighting & Effects at the 1964/1965 New York World’s Fair — water, light, and spectacle on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links section → footer (Disney Shows pattern). */
export default function FountainsPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="Fountains, Lighting & Effects"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fountains-hero.jpg"
            alt="Fountains, Lighting & Effects — fountains and effects at the 1964/1965 New York World’s Fair"
            width={1914}
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
      <FountainsLinks />
    </main>
  );
}
