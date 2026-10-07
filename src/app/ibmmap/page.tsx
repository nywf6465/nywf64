import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibmmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — IBM Pavilion — nywf64.com",
  description:
    "Locate the IBM Pavilion on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM locate-it map page (`/ibmmap`).
 * Stack: hero → IbmNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy ibmmap.shtml (Industrial Area map + ibmmap.gif arrow).
 */
export default function IbmmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={styles.article} aria-labelledby="ibmmap-title">
        <LocateMapTitleBar titleId="ibmmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/ibmmap/locate-map.jpg"
              alt="IBM Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the IBM Pavilion"
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
        previousHref="/ibm01"
        explicitPrevious
        overviewHref="/ibmoverview"
        nextHref="/ibm02"
      />
    </>
  );
}
