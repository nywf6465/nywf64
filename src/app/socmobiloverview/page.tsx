import type { Metadata } from "next";
import Image from "next/image";
import { SocmobilNavChrome } from "@/components/SocmobilNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./socmobiloverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Socony Mobil — Overview — nywf64.com",
  description:
    "Socony Mobil overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Socony Mobil overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SocmobilOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Socony Mobil">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/socmobiloverview/hero-banner.jpg"
            alt="Socony Mobil at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SocmobilNavChrome />

      <section className={styles.overview} aria-label="Socony Mobil overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors take part in a simulated cross-country driving game that
              tests their skills at the wheel.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/socmobiloverview/photo.jpg"
              alt="Socony Mobil pavilion at the 1964/1965 New York World’s Fair"
              width={1590}
              height={989}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/socmobiloverview"
        overviewHref="/socmobiloverview"
        nextHref="/socmobil01"
      />
    </>
  );
}
