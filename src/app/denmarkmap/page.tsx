import type { Metadata } from "next";
import Image from "next/image";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./denmarkmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Denmark — nywf64.com",
  description:
    "Locate Denmark on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark locate-it map page (`/denmarkmap`).
 * Stack: hero → DenmarkNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy denmarkmap.shtml (International Area map + denmarkmap.gif arrow).
 */
export default function DenmarkmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Denmark">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/denmarkoverview/hero-banner.jpg"
            alt="Denmark at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DenmarkNavChrome />

      <article className={styles.article} aria-labelledby="denmarkmap-title">
        <LocateMapTitleBar titleId="denmarkmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/denmarkmap/locate-map.jpg"
              alt="Denmark location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Denmark pavilion"
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
        previousHref="/denmark01"
        explicitPrevious
        overviewHref="/denmarkoverview"
        nextHref="/denmark02"
      />
    </>
  );
}
