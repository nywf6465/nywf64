import type { Metadata } from "next";
import Image from "next/image";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./aertowmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Aerial Tower Ride — nywf64.com",
  description:
    "Locate the Aerial Tower Ride on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Aerial Tower Ride locate-it map page (`/aertowmap`).
 * Stack: hero → AertowNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy aermap.shtml (Amusement Area map + aermap.gif arrow).
 */
export default function AertowMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Aerial Tower Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/aertowoverview/hero-banner.jpg"
            alt="Aerial Tower Ride & Waffle Restaurant at the 1964/1965 New York World’s Fair"
            width={1911}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AertowNavChrome />

      <article className={styles.article} aria-labelledby="aertowmap-title">
        <LocateMapTitleBar titleId="aertowmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/aertowmap/locate-map.jpg"
              alt="Aerial Tower Ride location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Aerial Tower Ride"
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
        previousHref="/aertow01"
        explicitPrevious
        overviewHref="/aertowoverview"
        nextHref="/aertow02"
      />
    </>
  );
}
