import type { Metadata } from "next";
import Image from "next/image";
import { HertzNavChrome } from "@/components/HertzNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hertzmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hertz — nywf64.com",
  description:
    "Locate the Hertz Travel Center on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hertz locate-it map page (`/hertzmap`).
 * Stack: hero → HertzNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy hertzmap.shtml (Transportation Area map + hertzmap.gif arrow).
 * Linked from /hertz01 via locateHref.
 */
export default function HertzMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hertz">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hertzoverview/hero-banner.jpg"
            alt="Hertz Travel Center at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HertzNavChrome />

      <article className={styles.article} aria-labelledby="hertzmap-title">
        <LocateMapTitleBar titleId="hertzmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/hertzmap/locate-map.jpg"
              alt="Hertz Travel Center location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Hertz"
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
        previousHref="/hertz01"
        explicitPrevious
        overviewHref="/hertzoverview"
        nextHref="/hertz02"
      />
    </>
  );
}
