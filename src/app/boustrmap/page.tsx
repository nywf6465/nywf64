import type { Metadata } from "next";
import Image from "next/image";
import { BoustrNavChrome } from "@/components/BoustrNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./boustrmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Bourbon Street — nywf64.com",
  description:
    "Locate Bourbon Street on the Federal and State Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bourbon Street locate-it map page (`/boustrmap`).
 * Stack: hero → BoustrNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy boustrmap.shtml (Federal and State Area map + boustrmap.gif arrow).
 */
export default function BoustrmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bourbon Street">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/boustroverview/hero-banner.jpg"
            alt="Bourbon Street at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BoustrNavChrome />

      <article className={styles.article} aria-labelledby="boustrmap-title">
        <LocateMapTitleBar titleId="boustrmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/boustrmap/locate-map.jpg"
              alt="Bourbon Street location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Bourbon Street"
              width={1076}
              height={1233}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/boustr01"
        explicitPrevious
        overviewHref="/boustr01"
        nextHref="/boustr02"
      />
    </>
  );
}
