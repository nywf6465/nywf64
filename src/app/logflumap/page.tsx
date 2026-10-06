import type { Metadata } from "next";
import Image from "next/image";
import { LogfluNavChrome } from "@/components/LogfluNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./logflumap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Flume Ride — nywf64.com",
  description:
    "Locate the Log Flume Ride on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Flume Ride locate-it map page (`/logflumap`).
 * Stack: hero → LogfluNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy logflumap.shtml (Amusement Area cream map + logflumap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 * Adobe Reader chrome omitted.
 */
export default function LogfluMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Flume Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
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

      <article className={styles.article} aria-labelledby="logflumap-title">
        <LocateMapTitleBar titleId="logflumap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/logflumap/locate-map.jpg"
              alt="Log Flume Ride location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Flume Ride"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/logflu01"
        explicitPrevious
        overviewHref="/logfluoverview"
        nextHref="/logflu02"
      />
    </>
  );
}
