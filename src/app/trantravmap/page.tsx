import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantravmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Transportation & Travel — nywf64.com",
  description:
    "Locate the Transportation & Travel Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Transportation & Travel locate-it map page (`/trantravmap`).
 * Stack: hero → TrantravNavChrome → navy title bar → left-justified body → Nav2Bar.
 */
export default function TrantravMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantravmap-title">
        <LocateMapTitleBar titleId="trantravmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/trantravmap/locate-map.jpg"
              alt="Transportation & Travel Pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
              width={987}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav01"
        explicitPrevious
        overviewHref="/trantravoverview"
        nextHref="/trantrav02"
      />
    </>
  );
}
