import type { Metadata } from "next";
import Image from "next/image";
import { CarparNavChrome } from "@/components/CarparNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./carparmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Carousel Park — nywf64.com",
  description:
    "Locate Carousel Park on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carousel Park locate-it map page (`/carparmap`).
 * Stack: hero → CarparNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy carparmap.shtml (Amusement Area map + carparmap.gif arrow).
 * Linked from /carpar01 via locateHref.
 */
export default function CarparmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Carousel Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/carparoverview/hero-banner.jpg"
            alt="Carousel Park at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CarparNavChrome />

      <article className={styles.article} aria-labelledby="carparmap-title">
        <LocateMapTitleBar titleId="carparmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/carparmap/locate-map.jpg"
              alt="Carousel Park location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Carousel Park"
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
        previousHref="/carpar01"
        explicitPrevious
        overviewHref="/carparoverview"
        nextHref="/carpar02"
      />
    </>
  );
}
