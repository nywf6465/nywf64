import type { Metadata } from "next";
import Image from "next/image";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./africamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Africa — nywf64.com",
  description:
    "Locate the Africa pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Africa locate-it map page (`/africamap`).
 * Stack: hero → AfricaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy africamap.shtml (International Area map + africamap.gif arrow).
 */
export default function AfricaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Africa">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/africaoverview/hero-banner.jpg"
            alt="Africa pavilion at the 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AfricaNavChrome />

      <article className={styles.article} aria-labelledby="africamap-title">
        <LocateMapTitleBar titleId="africamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/africamap/locate-map.jpg"
              alt="Africa pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Africa"
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
        previousHref="/africa01"
        explicitPrevious
        overviewHref="/africa01"
        nextHref="/africa02"
      />
    </>
  );
}
