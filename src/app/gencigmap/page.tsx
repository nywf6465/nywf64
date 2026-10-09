import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencigmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — General Cigar — nywf64.com",
  description:
    "Locate the General Cigar Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar locate-it map page (`/gencigmap`).
 * Stack: hero → GencigNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy gencigmap.shtml (Industrial Area cream map + gencigmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function GencigMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Cigar">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <article className={styles.article} aria-labelledby="gencigmap-title">
        <LocateMapTitleBar titleId="gencigmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/gencigmap/locate-map.jpg"
              alt="General Cigar Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to General Cigar"
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
        previousHref="/gencig01"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencig02"
      />
    </>
  );
}
