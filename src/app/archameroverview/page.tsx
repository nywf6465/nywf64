import type { Metadata } from "next";
import Image from "next/image";
import { ArchamerNavChrome } from "@/components/ArchamerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./archameroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Arch of the Americas — Overview — nywf64.com",
  description:
    "Arch of the Americas overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Arch of the Americas overview — follows the **overview** prototype
 * (same stack as /argentoverview / /amptheoverview).
 */
export default function ArchamerOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Arch of the Americas">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/archameroverview/hero-banner.jpg"
            alt="Arch of the Americas at the 1964/1965 New York World’s Fair"
            width={1912}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchamerNavChrome />

      <section
        className={styles.overview}
        aria-label="Arch of the Americas overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Arch of the Americas was an exhibit that was to be sponsored
              by the Organization of American States. It was never constructed.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/archameroverview/photo.jpg"
              alt="Arch of the Americas"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/archameroverview"
        overviewHref="/archameroverview"
        nextHref="/archamer01"
      />
    </>
  );
}
