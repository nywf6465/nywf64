import type { Metadata } from "next";
import Image from "next/image";
import { RestaurantsLinks } from "@/components/RestaurantsLinks";
import styles from "./restaurants.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "Restaurants, Bars & Eateries — nywf64.com",
  description:
    "Restaurants, Bars & Eateries at the 1964/1965 New York World’s Fair — dining and refreshment on nywf64.com.",
};

/**
 * Landing: header → hero → guidebook banner → links → footer
 * (Disney Shows / Religions / Fountains pattern).
 * Cards match letter-page attractions (e.g. Aerial Tower on `/A`, Brass Rail on `/B`).
 */
export default function RestaurantsPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="Restaurants, Bars & Eateries"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/restaurants-hero.jpg"
            alt="Restaurants, Bars & Eateries — dining and refreshment at the 1964/1965 New York World’s Fair"
            width={1956}
            height={804}
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
      <RestaurantsLinks />
    </main>
  );
}
