import type { Metadata } from "next";
import Image from "next/image";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./swiskymap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Swiss Sky Ride — nywf64.com",
  description:
    "Locate the Swiss Sky Ride on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride locate-it map page (`/swiskymap`).
 * Body from legacy swiskymap.shtml (International Area map + swiskymap.gif overlay).
 */
export default function SwiskyMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Swiss Sky Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/swiskyoverview/hero-banner.jpg"
            alt="Swiss Sky Ride at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwiskyNavChrome />

      <article className={styles.article} aria-labelledby="swiskymap-title">
        <LocateMapTitleBar titleId="swiskymap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/swiskymap/locate-map.jpg"
              alt="Swiss Sky Ride route on the International Area of the 1964 Official Souvenir Map, with a red overlay marking the cable ride"
              width={910}
              height={1158}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/swisky01"
        explicitPrevious
        overviewHref="/swiskyoverview"
        nextHref="/swisky02"
      />
    </>
  );
}
