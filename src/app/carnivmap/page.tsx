import type { Metadata } from "next";
import Image from "next/image";
import { CarnivNavChrome } from "@/components/CarnivNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./carnivmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Carnival — nywf64.com",
  description:
    "Locate Carnival on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carnival locate-it map page (`/carnivmap`).
 * Stack: hero → CarnivNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy carnivmap.shtml (Amusement Area map + carnivmap.gif arrow).
 * Linked from /carniv01 via locateHref.
 */
export default function CarnivmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Carnival">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/carnivoverview/hero-banner.jpg"
            alt="Carnival at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CarnivNavChrome />

      <article className={styles.article} aria-labelledby="carnivmap-title">
        <LocateMapTitleBar titleId="carnivmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/carnivmap/locate-map.jpg"
              alt="Carnival location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the former Texas Pavilions and Music Hall site"
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
        previousHref="/carniv01"
        explicitPrevious
        overviewHref="/carnivoverview"
        nextHref="/carniv02"
      />
    </>
  );
}
