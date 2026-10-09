import type { Metadata } from "next";
import Image from "next/image";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cenamermap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Central America — nywf64.com",
  description:
    "Locate Central America on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America locate-it map page (`/cenamermap`).
 * Stack: hero → CenamerNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy cenamermap.shtml (International Area map + cenamermap.gif arrow).
 * Linked from /cenamer01 via locateHref.
 */
export default function CenamermapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Central America">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cenameriverview/hero-banner.jpg"
            alt="Central America at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CenamerNavChrome />

      <article className={styles.article} aria-labelledby="cenamermap-title">
        <LocateMapTitleBar titleId="cenamermap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/cenamermap/locate-map.jpg"
              alt="Central America location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Central America and Panama"
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
        previousHref="/cenamer01"
        explicitPrevious
        overviewHref="/cenameriverview"
        nextHref="/cenamer02"
      />
    </>
  );
}
