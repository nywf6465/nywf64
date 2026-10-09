import type { Metadata } from "next";
import Image from "next/image";
import { CarparNavChrome } from "@/components/CarparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./carparoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Carousel Park — Overview — nywf64.com",
  description:
    "Carousel Park overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carousel Park overview — follows the **overview** prototype
 * (same stack as /carnivoverview / /caribboverview).
 */
export default function CarparOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Carousel Park">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/carparoverview/hero-banner.jpg"
            alt="Carousel Park at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CarparNavChrome />

      <section className={styles.overview} aria-label="Carousel Park overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors can ride an oldtime merry-go-round and relax at snack bars
              and picnic tables.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/carparoverview/photo.jpg"
              alt="Carousel Park — merry-go-round and picnic area"
              width={958}
              height={680}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/carparoverview"
        overviewHref="/carparoverview"
        nextHref="/carpar01"
      />
    </>
  );
}
