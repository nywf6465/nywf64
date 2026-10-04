import type { Metadata } from "next";
import Image from "next/image";
import { SinclairNavChrome } from "@/components/SinclairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sinclairoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sinclair — Overview — nywf64.com",
  description:
    "Sinclair Dinoland overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Sinclair overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SinclairOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sinclair">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sinclairoverview/hero-banner.jpg"
            alt="Sinclair at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SinclairNavChrome />

      <section className={styles.overview} aria-label="Sinclair overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Life as it existed 165 million years ago is re-created in a
              display of life-sized dinosaurs.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sinclairoverview/photo.jpg"
              alt="Sinclair Dinoland at the 1964/1965 New York World’s Fair"
              width={1582}
              height={994}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sinclairoverview"
        overviewHref="/sinclairoverview"
        nextHref="/sinclair01"
      />
    </>
  );
}
