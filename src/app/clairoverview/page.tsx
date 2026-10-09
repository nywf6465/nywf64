import type { Metadata } from "next";
import Image from "next/image";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./clairoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Clairol — Overview — nywf64.com",
  description:
    "Clairol overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol overview — follows the **overview** prototype
 * (same stack as /citservoverview / /chucenoverview).
 */
export default function ClairOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Clairol">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/clairoverview/hero-banner.jpg"
            alt="Clairol at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ClairNavChrome />

      <section className={styles.overview} aria-label="Clairol overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Ladies can see themselves in various hair colors, view a film on
              beauty and talk with experts.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/clairoverview/photo.jpg"
              alt="Clairol — pavilion model with circular Beauty Bar"
              width={1624}
              height={975}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/clairoverview"
        overviewHref="/clairoverview"
        nextHref="/clair01"
      />
    </>
  );
}
