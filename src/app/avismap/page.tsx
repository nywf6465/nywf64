import type { Metadata } from "next";
import Image from "next/image";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./avismap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Avis Antique Car Ride — nywf64.com",
  description:
    "Locate the Avis Antique Car Ride on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride locate-it map page (`/avismap`).
 * Stack: hero → AvisNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy avismap.shtml (Transportation Area map + avismap.gif arrow).
 */
export default function AvisMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Avis Antique Car Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/avisoverview/hero-banner.jpg"
            alt="Avis Antique Car Ride at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AvisNavChrome />

      <article className={styles.article} aria-labelledby="avismap-title">
        <LocateMapTitleBar titleId="avismap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/avismap/locate-map.jpg"
              alt="Avis Antique Car Ride location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Avis Antique Car Ride"
              width={807}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/avis01"
        explicitPrevious
        overviewHref="/avis01"
        nextHref="/avis02"
      />
    </>
  );
}
