import type { Metadata } from "next";
import Image from "next/image";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./dynmatmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Dynamic Maturity — nywf64.com",
  description:
    "Locate the Dynamic Maturity pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity locate-it map page (`/dynmatmap`).
 * Stack: hero → DynmatNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy dynmatmap.shtml (Industrial Area map + dynmatmap.gif arrow).
 */
export default function DynmatMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Dynamic Maturity">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/dynmatoverview/hero-banner.jpg"
            alt="Dynamic Maturity at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DynmatNavChrome />

      <article className={styles.article} aria-labelledby="dynmatmap-title">
        <LocateMapTitleBar titleId="dynmatmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/dynmatmap/locate-map.jpg"
              alt="Dynamic Maturity pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Dynamic Maturity"
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
        previousHref="/dynmat01"
        explicitPrevious
        overviewHref="/dynmatoverview"
        nextHref="/dynmat02"
      />
    </>
  );
}
