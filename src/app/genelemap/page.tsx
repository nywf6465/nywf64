import type { Metadata } from "next";
import Image from "next/image";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./genelemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — General Electric — nywf64.com",
  description:
    "Locate the General Electric Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric locate-it map page (`/genelemap`).
 * Stack: hero → GeneleNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy genelemap.shtml (Industrial Area cream map + gemap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function GeneleMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="General Electric Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/geneleoverview/hero-banner.jpg"
            alt="General Electric Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GeneleNavChrome />

      <article className={styles.article} aria-labelledby="genelemap-title">
        <LocateMapTitleBar titleId="genelemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/genelemap/locate-map.jpg"
              alt="General Electric Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to General Electric"
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
        previousHref="/genele01"
        explicitPrevious
        overviewHref="/geneleoverview"
        nextHref="/genele02"
      />
    </>
  );
}
