import type { Metadata } from "next";
import Image from "next/image";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./francemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — France — nywf64.com",
  description:
    "Locate the Pavilion of France site on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * France locate-it map page (`/francemap`).
 * Stack: hero → FranceNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy francemap.shtml (International Area cream map + francemap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function FranceMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="France">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/franceoverview/hero-banner.jpg"
            alt="France at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FranceNavChrome />

      <article className={styles.article} aria-labelledby="francemap-title">
        <LocateMapTitleBar titleId="francemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/francemap/locate-map.jpg"
              alt="Pavilion of France site location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the site"
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
        previousHref="/france01"
        explicitPrevious
        overviewHref="/franceoverview"
        nextHref="/france02"
      />
    </>
  );
}
