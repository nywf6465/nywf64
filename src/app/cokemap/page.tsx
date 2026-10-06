import type { Metadata } from "next";
import Image from "next/image";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./cokemap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Coca-Cola — nywf64.com",
  description:
    "Locate the Coca-Cola pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola locate-it map page (`/cokemap`).
 * Stack: hero → CokeNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy cokemap.shtml (Industrial Area map + cokemap.gif arrow).
 */
export default function CokeMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Coca-Cola">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cokeoverview/hero-banner.jpg"
            alt="Coca-Cola at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CokeNavChrome />

      <article className={styles.article} aria-labelledby="cokemap-title">
        <LocateMapTitleBar titleId="cokemap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/cokemap/locate-map.jpg"
              alt="Coca-Cola pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Coca-Cola"
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
        previousHref="/coke01"
        explicitPrevious
        overviewHref="/cokeoverview"
        nextHref="/coke02"
      />
    </>
  );
}
