import type { Metadata } from "next";
import Image from "next/image";
import { PavamiNavChrome } from "@/components/PavamiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./pavamioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion of American Interiors — Overview — nywf64.com",
  description:
    "Pavilion of American Interiors overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Pavilion of American Interiors overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /parpenoverview).
 */
export default function PavamiOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Pavilion of American Interiors"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/pavamioverview/hero-banner.jpg"
            alt="Pavilion of American Interiors at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PavamiNavChrome />

      <section
        className={styles.overview}
        aria-label="Pavilion of American Interiors overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              More than 120 manufacturers and interior designers display a wide
              range of house furnishings and fittings.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/pavamioverview/photo.jpg"
              alt="Pavilion of American Interiors at the 1964/1965 New York World’s Fair"
              width={1581}
              height={995}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/pavamioverview"
        overviewHref="/pavamioverview"
        nextHref="/pavami01"
      />
    </>
  );
}
