import type { Metadata } from "next";
import Image from "next/image";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./austriamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Austria — nywf64.com",
  description:
    "Locate the Austria pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria locate-it map page (`/austriamap`).
 * Stack: hero → AustriaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy austriamap.shtml (International Area map + austriamap.gif arrow).
 */
export default function AustriaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Austria">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/austriaoverview/hero-banner.jpg"
            alt="Austria at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AustriaNavChrome />

      <article className={styles.article} aria-labelledby="austriamap-title">
        <LocateMapTitleBar titleId="austriamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/austriamap/locate-map.jpg"
              alt="Austria pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Austria"
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
        previousHref="/austria01"
        explicitPrevious
        overviewHref="/austria01"
        nextHref="/austria02"
      />
    </>
  );
}
