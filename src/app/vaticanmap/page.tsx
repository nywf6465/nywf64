import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vaticanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Vatican — nywf64.com",
  description:
    "Locate the Vatican Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Vatican locate-it map page (`/vaticanmap`).
 * Stack: hero → VaticanNavChrome → navy title bar → left-justified body → Nav2Bar.
 */
export default function VaticanMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vaticanmap-title">
        <LocateMapTitleBar titleId="vaticanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/vaticanmap/locate-map.jpg"
              alt="International Area of the 1964 Official Souvenir Map with a red arrow pointing to the Vatican Pavilion"
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
        previousHref="/vatican01"
        explicitPrevious
        overviewHref="/vaticanoverview"
        nextHref="/vatican02"
      />
    </>
  );
}
