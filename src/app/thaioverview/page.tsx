import type { Metadata } from "next";
import Image from "next/image";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thaioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Thailand — Overview — nywf64.com",
  description:
    "Thailand overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function ThaiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Thailand">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/thaioverview/hero-banner.jpg"
            alt="Thailand at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThaiNavChrome />

      <section className={styles.overview} aria-label="Thailand overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Inspired by a Buddhist shrine, this ornate pavilion houses the
              ancient treasures and modern products of an exotic land.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/thaioverview/photo.jpg"
              alt="Thailand Pavilion — ornate shrine and plaza"
              width={1589}
              height={990}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/thaioverview"
        overviewHref="/thaioverview"
        nextHref="/thai01"
      />
    </>
  );
}
