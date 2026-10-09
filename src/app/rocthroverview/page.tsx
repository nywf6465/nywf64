import type { Metadata } from "next";
import Image from "next/image";
import { RocthrNavChrome } from "@/components/RocthrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rocthroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Rocket Thrower — Overview — nywf64.com",
  description:
    "The Rocket Thrower overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Rocket Thrower overview — follows the **overview** prototype
 * (same stack as /rcaoverview / /rheingoverview).
 */
export default function RocthrOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="The Rocket Thrower">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/rocthroverview/hero-banner.jpg"
            alt="The Rocket Thrower at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <RocthrNavChrome />

      <section
        className={styles.overview}
        aria-label="The Rocket Thrower overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Second only to Unisphere in prominence and importance, The Rocket
              Thrower is a bronze sculpture of a stylized figure balanced on an
              ascending curve reaching toward a constellation of stars.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/rocthroverview/photo.jpg"
              alt="The Rocket Thrower sculpture at the 1964/1965 New York World’s Fair"
              width={1553}
              height={1013}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/rocthroverview"
        overviewHref="/rocthroverview"
        nextHref="/rocthr01"
      />
    </>
  );
}
