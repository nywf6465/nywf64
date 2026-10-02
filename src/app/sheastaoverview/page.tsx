import type { Metadata } from "next";
import Image from "next/image";
import { SheastaNavChrome } from "@/components/SheastaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sheastaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Shea Stadium — Overview — nywf64.com",
  description:
    "Shea Stadium overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Shea Stadium overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SheastaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Shea Stadium">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sheastaoverview/hero-banner.jpg"
            alt="Shea Stadium at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SheastaNavChrome />

      <section className={styles.overview} aria-label="Shea Stadium overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This home of two teams — the New York Mets (baseball) and Jets
              (football) — is one of the most modern stadiums in the world.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sheastaoverview/photo.jpg"
              alt="Shea Stadium at the 1964/1965 New York World’s Fair"
              width={1589}
              height={989}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sheastaoverview"
        overviewHref="/sheastaoverview"
        nextHref="/sheasta01"
      />
    </>
  );
}
