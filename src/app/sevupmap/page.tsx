import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevupmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Seven-Up — nywf64.com",
  description:
    "Locate Seven-Up on the Industrial Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up locate-it map page (`/sevupmap`).
 * Stack: hero → SevupNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy sevupmap.shtml (Industrial Area map + sevupmap.gif arrow).
 */
export default function SevupmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevupmap-title">
        <LocateMapTitleBar titleId="sevupmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/sevupmap/locate-map.jpg"
              alt="Seven-Up location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Seven-Up pavilion"
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
        previousHref="/sevup01"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup02"
      />
    </>
  );
}
