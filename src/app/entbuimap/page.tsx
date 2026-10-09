import type { Metadata } from "next";
import Image from "next/image";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./entbuimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Entrance Building — nywf64.com",
  description:
    "Locate the Entrance Building on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Building locate-it map page (`/entbuimap`).
 * Stack: hero → EntbuiNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy entbuimap.shtml (Industrial Area cream map + entbuimap.gif arrow).
 */
export default function EntbuiMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Entrance Building">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/entbuioverview/hero-banner.jpg"
            alt="Entrance Building at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EntbuiNavChrome />

      <article className={styles.article} aria-labelledby="entbuimap-title">
        <LocateMapTitleBar titleId="entbuimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/entbuimap/locate-map.jpg"
              alt="Entrance Building location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Entrance Building"
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
        previousHref="/entbui01"
        explicitPrevious
        overviewHref="/entbuioverview"
        nextHref="/entbui02"
      />
    </>
  );
}
