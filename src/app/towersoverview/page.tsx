import type { Metadata } from "next";
import Image from "next/image";
import { TowersNavChrome } from "@/components/TowersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./towersoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Entrance Towers — Overview — nywf64.com",
  description:
    "Entrance Towers overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Towers overview — follows the **overview** prototype
 * (same stack as /easternoverview / /entbuioverview).
 */
export default function TowersOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Entrance Towers">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/towersoverview/hero-banner.jpg"
            alt="Entrance Towers at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TowersNavChrome />

      <section
        className={styles.overview}
        aria-label="Entrance Towers overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The five entrance towers serve as landmarks to locate the
              entrances to the Fairgrounds.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/towersoverview/photo.jpg"
              alt="Entrance Towers — Fairgrounds landmark near General Motors Futurama"
              width={1584}
              height={1039}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/towersoverview"
        overviewHref="/towersoverview"
        nextHref="/towers01"
      />
    </>
  );
}
