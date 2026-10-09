import type { Metadata } from "next";
import Image from "next/image";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./boyscomap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Boy Scouts of America — nywf64.com",
  description:
    "Locate Boy Scouts of America on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America locate-it map page (`/boyscomap`).
 * Stack: hero → BoyscoNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy boyscomap.shtml (Industrial Area map + boyscomap.gif arrow).
 */
export default function BoyscomapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Boy Scouts of America">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/boyscooverview/hero-banner.jpg"
            alt="Boy Scouts of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BoyscoNavChrome />

      <article className={styles.article} aria-labelledby="boyscomap-title">
        <LocateMapTitleBar titleId="boyscomap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/boyscomap/locate-map.jpg"
              alt="Boy Scouts of America location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Boy Scouts of America pavilion"
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
        previousHref="/boysco01"
        explicitPrevious
        overviewHref="/boysco01"
        nextHref="/boysco02"
      />
    </>
  );
}
