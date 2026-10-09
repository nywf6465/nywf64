import type { Metadata } from "next";
import Image from "next/image";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amerisrmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — American-Israel Pavilion — nywf64.com",
  description:
    "Locate the American-Israel Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American-Israel Pavilion locate-it map page (`/amerisrmap`).
 * Stack: hero → AmerisrNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy amerisrmap.shtml (International Area map + amerisrmap.gif arrow).
 * Linked from /amerisr01 via locateHref.
 */
export default function AmerisrMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="American-Israel Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amerisroverview/hero-banner.jpg"
            alt="American-Israel Pavilion at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmerisrNavChrome />

      <article className={styles.article} aria-labelledby="amerisrmap-title">
        <LocateMapTitleBar titleId="amerisrmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/amerisrmap/locate-map.jpg"
              alt="American-Israel Pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to American-Israel"
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
        previousHref="/amerisr01"
        explicitPrevious
        overviewHref="/amerisroverview"
        nextHref="/amerisr02"
      />
    </>
  );
}
