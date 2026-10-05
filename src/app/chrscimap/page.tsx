import type { Metadata } from "next";
import Image from "next/image";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrscimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Christian Science — nywf64.com",
  description:
    "Locate the Christian Science pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science locate-it map page (`/chrscimap`).
 * Stack: hero → ChrsciNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy chrscimap.shtml (International Area map + chrscimap.gif arrow).
 */
export default function ChrscimapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Christian Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chrscioverview/hero-banner.jpg"
            alt="Christian Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChrsciNavChrome />

      <article className={styles.article} aria-labelledby="chrscimap-title">
        <LocateMapTitleBar titleId="chrscimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chrscimap/locate-map.jpg"
              alt="Christian Science pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Christian Science"
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
        previousHref="/chrsci01"
        explicitPrevious
        overviewHref="/chrscioverview"
        nextHref="/chrsci02"
      />
    </>
  );
}
