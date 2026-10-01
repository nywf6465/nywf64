import type { Metadata } from "next";
import Image from "next/image";
import { BellNavChrome } from "@/components/BellNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bellmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Bell System — nywf64.com",
  description:
    "Locate the Bell System Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System locate-it map page (`/bellmap`).
 * Stack: hero → BellNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 */
export default function BellMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <article className={styles.article} aria-labelledby="bellmap-title">
        <LocateMapTitleBar titleId="bellmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/bellmap/locate-map.jpg"
              alt="Bell System Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Bell System"
              width={1206}
              height={1253}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bell01"
        explicitPrevious
        overviewHref="/belloverview"
        nextHref="/bell02"
      />
    </>
  );
}
