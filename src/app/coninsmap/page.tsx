import type { Metadata } from "next";
import Image from "next/image";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coninsmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Continental Insurance — nywf64.com",
  description:
    "Locate Continental Insurance on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance locate-it map page (`/coninsmap`).
 * Stack: hero → ConinsNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy coninsmap.shtml (Industrial Area map + coninsmap.gif arrow).
 */
export default function ConinsmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Insurance">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/coninsoverview/hero-banner.jpg"
            alt="Continental Insurance at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConinsNavChrome />

      <article className={styles.article} aria-labelledby="coninsmap-title">
        <LocateMapTitleBar titleId="coninsmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/coninsmap/locate-map.jpg"
              alt="Continental Insurance location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Continental Insurance pavilion"
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
        previousHref="/conins01"
        explicitPrevious
        overviewHref="/coninsoverview"
        nextHref="/conins02"
      />
    </>
  );
}
