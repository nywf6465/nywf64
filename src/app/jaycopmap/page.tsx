import type { Metadata } from "next";
import Image from "next/image";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jaycopmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Jaycopter Ride — nywf64.com",
  description:
    "Locate the Jaycopter Ride on the Lake Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jaycopter Ride locate-it map page (`/jaycopmap`).
 * Stack: hero → JaycopNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy jaycopmap.shtml (Amusement Area map + jaycopmap.gif arrow).
 */
export default function JaycopmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Jaycopter Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jaycopoverview/hero-banner.jpg"
            alt="Jaycopter Ride at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JaycopNavChrome />

      <article className={styles.article} aria-labelledby="jaycopmap-title">
        <LocateMapTitleBar titleId="jaycopmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/jaycopmap/locate-map.jpg"
              alt="Jaycopter Ride location on the Lake Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Jaycopter Ride"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jaycop01"
        explicitPrevious
        overviewHref="/jaycopoverview"
        nextHref="/jaycop02"
      />
    </>
  );
}
