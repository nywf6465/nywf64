import type { Metadata } from "next";
import Image from "next/image";
import { LogfluNavChrome } from "@/components/LogfluNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./logfluoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Flume Ride — Overview — nywf64.com",
  description:
    "Flume Ride overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Flume Ride overview — follows the **overview** prototype
 * (same stack as /flowatskioverview / /firnatoverview).
 */
export default function LogfluOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Flume Ride">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/logfluoverview/hero-banner.jpg"
            alt="Flume Ride at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LogfluNavChrome />

      <section className={styles.overview} aria-label="Flume Ride overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A trip on a water-borne roller coaster ends with a big splash into
              swirling rapids.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/logfluoverview/photo.jpg"
              alt="Flume Ride — water-borne roller coaster splash into swirling rapids"
              width={1584}
              height={1550}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/logfluoverview"
        overviewHref="/logfluoverview"
        nextHref="/logflu01"
      />
    </>
  );
}
