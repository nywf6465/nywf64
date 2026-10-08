import type { Metadata } from "next";
import Image from "next/image";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./serscimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Sermons from Science — nywf64.com",
  description:
    "Locate Sermons from Science on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science locate-it map page (`/serscimap`).
 * Stack: hero → SersciNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy serscimap.shtml (International Area map + serscimap.gif arrow).
 */
export default function SerscimapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Sermons from Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/serscioverview/hero-banner.jpg"
            alt="Sermons from Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SersciNavChrome />

      <article className={styles.article} aria-labelledby="serscimap-title">
        <LocateMapTitleBar titleId="serscimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/serscimap/locate-map.jpg"
              alt="Sermons from Science location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Sermons from Science pavilion"
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
        previousHref="/sersci01"
        explicitPrevious
        overviewHref="/serscioverview"
        nextHref="/sersci02"
      />
    </>
  );
}
