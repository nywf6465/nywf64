import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcenoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Schaefer — Overview — nywf64.com",
  description:
    "Schaefer Center overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Schaefer Center overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SchcenOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Schaefer">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/schcenoverview/hero-banner.jpg"
            alt="Schaefer Center at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SchcenNavChrome />

      <section className={styles.overview} aria-label="Schaefer overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A restaurant, bar and beer garden offer food and drink in a
              sporting atmosphere; a model of an old brewery is on view.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/schcenoverview/photo.jpg"
              alt="Schaefer Center at the 1964/1965 New York World’s Fair"
              width={1526}
              height={1030}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/schcenoverview"
        overviewHref="/schcenoverview"
        nextHref="/schcen01"
      />
    </>
  );
}
