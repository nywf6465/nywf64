import type { Metadata } from "next";
import Image from "next/image";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chucanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Chunky Candy — nywf64.com",
  description:
    "Locate the Chunky Candy pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy locate-it map page (`/chucanmap`).
 * Stack: hero → ChucanNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy chucanmap.shtml (Industrial Area map + chucanmap.gif arrow).
 */
export default function ChucanMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chunky Candy">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chucanoverview/hero-banner.jpg"
            alt="Chunky Candy at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChucanNavChrome />

      <article className={styles.article} aria-labelledby="chucanmap-title">
        <LocateMapTitleBar titleId="chucanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chucanmap/locate-map.jpg"
              alt="Chunky Candy pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Chunky Candy"
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
        previousHref="/chucan01"
        explicitPrevious
        overviewHref="/chucanoverview"
        nextHref="/chucan02"
      />
    </>
  );
}
