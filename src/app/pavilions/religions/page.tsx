import type { Metadata } from "next";
import Image from "next/image";
import { ReligionsLinks } from "@/components/ReligionsLinks";
import styles from "./religions.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Religions — nywf64.com",
  description:
    "Religions at the 1964/1965 New York World’s Fair — religious pavilions and exhibits on nywf64.com.",
};

/** Landing: header → hero → guidebook banner → links section → footer (Disney Shows pattern). */
export default function ReligionsPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="Religions">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/religions-hero.jpg"
            alt="Religions — religious pavilions and exhibits at the 1964/1965 New York World’s Fair"
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
      <ReligionsLinks />
    </main>
  );
}
