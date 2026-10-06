import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betlivmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Better Living Center — nywf64.com",
  description:
    "Locate the Better Living Center on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center locate-it map page (`/betlivmap`).
 * Stack: hero → BetlivNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy betlivmap.shtml (Industrial Area map + betlivmap.gif arrow).
 */
export default function BetlivMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betlivmap-title">
        <LocateMapTitleBar titleId="betlivmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/betlivmap/locate-map.jpg"
              alt="Better Living Center location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/betliv01"
        explicitPrevious
        overviewHref="/betliv01"
        nextHref="/betliv02"
      />
    </>
  );
}
