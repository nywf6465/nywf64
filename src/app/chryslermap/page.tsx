import type { Metadata } from "next";
import Image from "next/image";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chryslermap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Chrysler — nywf64.com",
  description:
    "Locate the Chrysler Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chrysler locate-it map page (`/chryslermap`).
 * Stack: hero → ChryslerNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy chryslermap.shtml (Transportation Area map + chryslermap.gif arrow).
 */
export default function ChryslerMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chrysler">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chrysleroverview/hero-banner.jpg"
            alt="Chrysler at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChryslerNavChrome />

      <article className={styles.article} aria-labelledby="chryslermap-title">
        <LocateMapTitleBar titleId="chryslermap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chryslermap/locate-map.jpg"
              alt="Chrysler Pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to Chrysler"
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
        previousHref="/chrysler01"
        explicitPrevious
        overviewHref="/chrysleroverview"
        nextHref="/chrysler02"
      />
    </>
  );
}
