import type { Metadata } from "next";
import Image from "next/image";
import { FirnatNavChrome } from "@/components/FirnatNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./firnatmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — First National City Bank — nywf64.com",
  description:
    "Locate First National City Bank on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * First National City Bank locate-it map page (`/firnatmap`).
 * Stack: hero → FirnatNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy firnatmap.shtml (Industrial Area cream map + firnatmap.gif).
 * Adobe Reader chrome omitted.
 */
export default function FirnatMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="First National City Bank">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/firnatoverview/hero-banner.jpg"
            alt="First National City Bank at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FirnatNavChrome />

      <article className={styles.article} aria-labelledby="firnatmap-title">
        <LocateMapTitleBar titleId="firnatmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/firnatmap/locate-map.jpg"
              alt="First National City Bank location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to First National City Bank"
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
        previousHref="/firnat01"
        explicitPrevious
        overviewHref="/firnatoverview"
        nextHref="/firnat02"
      />
    </>
  );
}
