import type { Metadata } from "next";
import Image from "next/image";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hawaiioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hawaii — Overview — nywf64.com",
  description:
    "Hawaii overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii overview — follows the **overview** prototype
 * (same stack as /halscioverview / /halfreoverview / /haleduoverview).
 */
export default function HawaiiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hawaii">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/hawaiioverview/hero-banner.jpg"
            alt="Hawaii at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HawaiiNavChrome />

      <section className={styles.overview} aria-label="Hawaii overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The island state comes to life in song and dance, movies,
              outrigger canoe rides, bright flowers and exotic foods.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/hawaiioverview/photo.jpg"
              alt="Hawaii — song and dance, movies, canoe rides, flowers, and foods"
              width={1584}
              height={1108}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/hawaiioverview"
        overviewHref="/hawaiioverview"
        nextHref="/hawaii01"
      />
    </>
  );
}
