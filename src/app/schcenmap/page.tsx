import type { Metadata } from "next";
import Image from "next/image";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./schcenmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Schaefer — nywf64.com",
  description:
    "Locate the Schaefer Center on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center locate-it map page (`/schcenmap`).
 * Stack: hero → SchcenNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy schcenmap.shtml (Industrial Area map + schcenmap.gif arrow).
 */
export default function SchcenMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Schaefer">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/schcenoverview/hero-banner.jpg"
            alt="Schaefer Center at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SchcenNavChrome />

      <article className={styles.article} aria-labelledby="schcenmap-title">
        <LocateMapTitleBar titleId="schcenmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/schcenmap/locate-map.jpg"
              alt="Schaefer Center location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Schaefer Center"
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
        previousHref="/schcen01"
        explicitPrevious
        overviewHref="/schcenoverview"
        nextHref="/schcen02"
      />
    </>
  );
}
