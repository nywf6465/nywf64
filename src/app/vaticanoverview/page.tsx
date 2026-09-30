import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vaticanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Vatican — Overview — nywf64.com",
  description:
    "Vatican Pavilion overview at the 1964/1965 New York World’s Fair — Michelangelo’s Pietà on nywf64.com.",
};

/**
 * Vatican overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (vatican menu) → overview body → nav2 → footer
 */
export default function VaticanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <section className={styles.overview} aria-label="Vatican overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The main exhibit is the Fair&apos;s most important work of art: the
              &quot;Pieta,&quot; Michelangelo&apos;s 466-year-old masterpiece in
              Carrara marble.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/vaticanoverview/photo.jpg"
              alt="Michelangelo’s Pietà at the Vatican Pavilion"
              width={623}
              height={706}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/vaticanoverview"
        overviewHref="/vaticanoverview"
        nextHref="/vatican01"
      />
    </>
  );
}
