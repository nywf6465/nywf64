import type { Metadata } from "next";
import Image from "next/image";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./belvilmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Belgian Village — nywf64.com",
  description:
    "Locate the Belgian Village on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village locate-it map page (`/belvilmap`).
 * Stack: hero → BelvilNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy belvilmap.shtml (International Area map + belvilmap.gif arrow).
 */
export default function BelvilMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Belgian Village">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/belviloverview/hero-banner.jpg"
            alt="Belgian Village at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BelvilNavChrome />

      <article className={styles.article} aria-labelledby="belvilmap-title">
        <LocateMapTitleBar titleId="belvilmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/belvilmap/locate-map.jpg"
              alt="Belgian Village location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the village"
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
        previousHref="/belvil01"
        explicitPrevious
        overviewHref="/belvil01"
        nextHref="/belvil02"
      />
    </>
  );
}
