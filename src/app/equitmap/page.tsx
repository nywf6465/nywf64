import type { Metadata } from "next";
import Image from "next/image";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./equitmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Equitable Life — nywf64.com",
  description:
    "Locate the Equitable Life Assurance Society pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life locate-it map page (`/equitmap`).
 * Stack: hero → EquitNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy equitmap.shtml (Industrial Area cream map + equitmap.gif arrow).
 */
export default function EquitMapPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Equitable Life Assurance Society"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/equitoverview/hero-banner.jpg"
            alt="Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair"
            width={2066}
            height={761}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EquitNavChrome />

      <article className={styles.article} aria-labelledby="equitmap-title">
        <LocateMapTitleBar titleId="equitmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/equitmap/locate-map.jpg"
              alt="Equitable Life Assurance Society location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Equitable Life"
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
        previousHref="/equit01"
        explicitPrevious
        overviewHref="/equitoverview"
        nextHref="/equit02"
      />
    </>
  );
}
