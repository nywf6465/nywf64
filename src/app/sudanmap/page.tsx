import type { Metadata } from "next";
import Image from "next/image";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sudanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Sudan — nywf64.com",
  description:
    "Locate the Sudan pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan locate-it map page (`/sudanmap`).
 * Stack: hero → SudanNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy sudanmap.shtml (International Area map + sudanmap.gif arrow).
 */
export default function SudanMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sudan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sudanoverview/hero-banner.jpg"
            alt="Sudan pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SudanNavChrome />

      <article className={styles.article} aria-labelledby="sudanmap-title">
        <LocateMapTitleBar titleId="sudanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/sudanmap/locate-map.jpg"
              alt="Sudan pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Sudan"
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
        previousHref="/sudan01"
        explicitPrevious
        overviewHref="/sudanoverview"
        nextHref="/sudan02"
      />
    </>
  );
}
