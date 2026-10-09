import type { Metadata } from "next";
import Image from "next/image";
import { BraraiNavChrome } from "@/components/BraraiNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./braraiindmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Brass Rail — nywf64.com",
  description:
    "Locate Brass Rail on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Brass Rail locate-it map page (`/braraiindmap`).
 * Stack: hero → BraraiNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy braraiindmap.shtml (Industrial Area map + braraiindmap.gif arrow).
 */
export default function BraraiindmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Brass Rail">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/braraioverview/hero-banner.jpg"
            alt="Brass Rail at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BraraiNavChrome />

      <article className={styles.article} aria-labelledby="braraiindmap-title">
        <LocateMapTitleBar titleId="braraiindmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/braraiindmap/locate-map.jpg"
              alt="Brass Rail location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to a Brass Rail Food Services stand"
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
        previousHref="/brarai01"
        explicitPrevious
        overviewHref="/brarai01"
        nextHref="/brarai02"
      />
    </>
  );
}
