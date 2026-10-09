import type { Metadata } from "next";
import Image from "next/image";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./clairmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Clairol — nywf64.com",
  description:
    "Locate the Clairol Color Carousel on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol locate-it map page (`/clairmap`).
 * Body from legacy clairmap.shtml (Industrial Area map + clairmap.gif arrow).
 */
export default function ClairMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Clairol">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/clairoverview/hero-banner.jpg"
            alt="Clairol Color Carousel at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ClairNavChrome />

      <article className={styles.article} aria-labelledby="clairmap-title">
        <LocateMapTitleBar titleId="clairmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/clairmap/locate-map.jpg"
              alt="Clairol Color Carousel location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Clairol"
              width={1359}
              height={1213}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/clair01"
        explicitPrevious
        overviewHref="/clairoverview"
        nextHref="/clair02"
      />
    </>
  );
}
