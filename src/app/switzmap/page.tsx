import type { Metadata } from "next";
import Image from "next/image";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./switzmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Switzerland — nywf64.com",
  description:
    "Locate the Switzerland pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland locate-it map page (`/switzmap`).
 * Body from legacy switzmap.shtml (International Area map + switzmap.gif arrow).
 */
export default function SwitzMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Switzerland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/switzoverview/hero-banner.jpg"
            alt="Switzerland pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwitzNavChrome />

      <article className={styles.article} aria-labelledby="switzmap-title">
        <LocateMapTitleBar titleId="switzmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/switzmap/locate-map.jpg"
              alt="Switzerland pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Switzerland"
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
        previousHref="/switz01"
        explicitPrevious
        overviewHref="/switzoverview"
        nextHref="/switz02"
      />
    </>
  );
}
