import type { Metadata } from "next";
import Image from "next/image";
import { PepsiNavChrome } from "@/components/PepsiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./pepsioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pepsi — Overview — nywf64.com",
  description:
    "Pepsi-Cola Pavilion overview at the 1964/1965 New York World’s Fair — It's a Small World on nywf64.com.",
};

/**
 * Pepsi overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (pepsi menu) → overview body → nav2 → footer
 */
export default function PepsiOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pepsi-Cola Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/pepsioverview/hero-banner.jpg"
            alt="Pepsi-Cola Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PepsiNavChrome />

      <section className={styles.overview} aria-label="Pepsi overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A salute to the children of the world, designed by Walt Disney,
              presents animated figures frolicking in miniature settings of many
              lands.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/pepsioverview/photo.jpg"
              alt="Animated figures in miniature settings at the Pepsi-Cola Pavilion It's a Small World"
              width={1615}
              height={974}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/pepsioverview"
        overviewHref="/pepsioverview"
        nextHref="/pepsi01"
      />
    </>
  );
}
