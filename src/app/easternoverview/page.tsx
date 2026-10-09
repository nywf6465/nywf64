import type { Metadata } from "next";
import Image from "next/image";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./easternoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Eastern Air Lines — Overview — nywf64.com",
  description:
    "Eastern Air Lines overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastern Air Lines overview — follows the **overview** prototype
 * (same stack as /danwatoverview / /democroverview).
 */
export default function EasternOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastern Air Lines">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/easternoverview/hero-banner.jpg"
            alt="Eastern Air Lines at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EasternNavChrome />

      <section
        className={styles.overview}
        aria-label="Eastern Air Lines overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              This building is a terminal for buses to local airports.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/easternoverview/photo.jpg"
              alt="Eastern Air Lines pavilion — terminal building at the Fair"
              width={1584}
              height={1035}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/easternoverview"
        overviewHref="/easternoverview"
        nextHref="/eastern01"
      />
    </>
  );
}
