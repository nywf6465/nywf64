import type { Metadata } from "next";
import Image from "next/image";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hawaiimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hawaii — nywf64.com",
  description:
    "Locate the Hawaii pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii locate-it map page (`/hawaiimap`).
 * Stack: hero → HawaiiNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy hawaiimap.shtml (Amusement Area map + hawaiimap.gif arrow).
 * Linked from /hawaii01 via locateHref.
 */
export default function HawaiiMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hawaii">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hawaiioverview/hero-banner.jpg"
            alt="Hawaii at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HawaiiNavChrome />

      <article className={styles.article} aria-labelledby="hawaiimap-title">
        <LocateMapTitleBar titleId="hawaiimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/hawaiimap/locate-map.jpg"
              alt="Hawaii pavilion location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Hawaii"
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
        previousHref="/hawaii01"
        explicitPrevious
        overviewHref="/hawaiioverview"
        nextHref="/hawaii02"
      />
    </>
  );
}
