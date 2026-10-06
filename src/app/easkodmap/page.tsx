import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./easkodmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Eastman Kodak — nywf64.com",
  description:
    "Locate the Eastman Kodak Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak locate-it map page (`/easkodmap`).
 * Stack: hero → EaskodNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy easkodmap.shtml (Industrial Area cream map + easkodmap.gif arrow).
 */
export default function EaskodMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkodmap-title">
        <LocateMapTitleBar titleId="easkodmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/easkodmap/locate-map.jpg"
              alt="Eastman Kodak Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Eastman Kodak"
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
        previousHref="/easkod01"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod02"
      />
    </>
  );
}
