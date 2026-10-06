import type { Metadata } from "next";
import Image from "next/image";
import { GarmedNavChrome } from "@/components/GarmedNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./garmedmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Garden of Meditation — nywf64.com",
  description:
    "Locate the Garden of Meditation on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Garden of Meditation locate-it map page (`/garmedmap`).
 * Stack: hero → GarmedNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy garmedmap.shtml (International Area cream map + garmedmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function GarmedMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Garden of Meditation">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/garmedoverview/hero-banner.jpg"
            alt="Garden of Meditation at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GarmedNavChrome />

      <article className={styles.article} aria-labelledby="garmedmap-title">
        <LocateMapTitleBar titleId="garmedmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/garmedmap/locate-map.jpg"
              alt="Garden of Meditation location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the garden"
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
        previousHref="/garmed01"
        explicitPrevious
        overviewHref="/garmedoverview"
        nextHref="/garmed02"
      />
    </>
  );
}
