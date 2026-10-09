import type { Metadata } from "next";
import Image from "next/image";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rusortmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Locate it! Map — Russian Orthodox Greek-Catholic Church of America — nywf64.com",
  description:
    "Locate the Russian Orthodox Greek-Catholic Church of America pavilion on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Russian Orthodox locate-it map page (`/rusortmap`).
 * Stack: hero → RusortNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy rusortmap.shtml (Industrial Area map + rusortmap.gif arrow).
 */
export default function RusortMapPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Russian Orthodox Greek-Catholic Church of America"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/rusortoverview/hero-banner.jpg"
            alt="Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <RusortNavChrome />

      <article className={styles.article} aria-labelledby="rusortmap-title">
        <LocateMapTitleBar titleId="rusortmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/rusortmap/locate-map.jpg"
              alt="Russian Orthodox Greek-Catholic Church of America location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
              width={1359}
              height={1213}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/rusort01"
        explicitPrevious
        overviewHref="/rusortoverview"
        nextHref="/rusort02"
      />
    </>
  );
}
