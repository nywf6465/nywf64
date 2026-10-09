import type { Metadata } from "next";
import Image from "next/image";
import { AmpridNavChrome } from "@/components/AmpridNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ampridmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Amphicar Ride — nywf64.com",
  description:
    "Locate the Amphicar Ride on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphicar Ride locate-it map page (`/ampridmap`).
 * Stack: hero → AmpridNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy ampridmap.shtml (Amusement Area map + ampridmap.gif arrow).
 * Linked from /amprid01 via locateHref.
 */
export default function AmpridMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Amphicar Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ampridoverview/hero-banner.jpg"
            alt="Amphicar Ride at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmpridNavChrome />

      <article className={styles.article} aria-labelledby="ampridmap-title">
        <LocateMapTitleBar titleId="ampridmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/ampridmap/locate-map.jpg"
              alt="Amphicar Ride location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Amphicar"
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
        previousHref="/amprid01"
        explicitPrevious
        overviewHref="/ampridoverview"
        nextHref="/amprid02"
      />
    </>
  );
}
