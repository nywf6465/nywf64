import type { Metadata } from "next";
import Image from "next/image";
import { FouplaNavChrome } from "@/components/FouplaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fouplaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountain of the Planets — Overview — nywf64.com",
  description:
    "Fountain of the Planets overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Fountain of the Planets overview — follows the **overview** prototype
 * (same stack as /foufaioverview / /fouconoverview / /astfountoverview).
 */
export default function FouplaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of the Planets">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fouplaoverview/hero-banner.jpg"
            alt="Fountain of the Planets at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FouplaNavChrome />

      <section
        className={styles.overview}
        aria-label="Fountain of the Planets overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fountain of the Planets, largest in the world, shoots 10,000
              tons of water as high as 150 feet into the air in ever-changing
              patterns.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fouplaoverview/photo.jpg"
              alt="Fountain of the Planets — ever-changing water patterns"
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
        previousHref="/fouplaoverview"
        overviewHref="/fouplaoverview"
        nextHref="/foupla01"
      />
    </>
  );
}
