import type { Metadata } from "next";
import Image from "next/image";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./julfarmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Julimar Farm — nywf64.com",
  description:
    "Locate Julimar Farm on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm locate-it map page (`/julfarmap`).
 * Stack: hero → JulfarNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy julfarmap.shtml (Industrial Area map + julfarmap.gif arrow).
 */
export default function JulfarMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Julimar Farm">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/julfaroverview/hero-banner.jpg"
            alt="Julimar Farm at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JulfarNavChrome />

      <article className={styles.article} aria-labelledby="julfarmap-title">
        <LocateMapTitleBar titleId="julfarmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/julfarmap/locate-map.jpg"
              alt="Julimar Farm location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/julfar01"
        explicitPrevious
        overviewHref="/julfaroverview"
        nextHref="/julfar02"
      />
    </>
  );
}
