import type { Metadata } from "next";
import Image from "next/image";
import { FinartNavChrome } from "@/components/FinartNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./finartmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fine Arts Pavilion — nywf64.com",
  description:
    "Locate the Fine Arts Pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fine Arts Pavilion locate-it map page (`/finartmap`).
 * Stack: hero → FinartNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy finartmap.shtml (International Area cream map + argentmap.gif).
 * Adobe Reader chrome omitted.
 */
export default function FinartMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fine Arts Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/finartoverview/hero-banner.jpg"
            alt="Fine Arts Pavilion at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FinartNavChrome />

      <article className={styles.article} aria-labelledby="finartmap-title">
        <LocateMapTitleBar titleId="finartmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/finartmap/locate-map.jpg"
              alt="Fine Arts Pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Fine Arts Pavilion"
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
        previousHref="/finart01"
        explicitPrevious
        overviewHref="/finartoverview"
        nextHref="/finart02"
      />
    </>
  );
}
