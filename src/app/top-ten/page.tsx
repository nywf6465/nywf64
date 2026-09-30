import type { Metadata } from "next";
import Image from "next/image";
import { TopTenLinks } from "@/components/TopTenLinks";
import styles from "./top-ten.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "The Top Ten Attractions — nywf64.com",
  description:
    "The Top Ten Attractions at the 1964/1965 New York World’s Fair.",
};

/** Landing: header → hero → guidebook banner → links section → footer. */
export default function TopTenPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="The Top Ten Attractions">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/top-ten-hero.jpg"
            alt="The Top Ten Attractions at the 1964/1965 New York World’s Fair"
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
      <TopTenLinks />
    </main>
  );
}
