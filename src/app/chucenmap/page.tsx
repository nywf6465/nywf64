import type { Metadata } from "next";
import Image from "next/image";
import { ChucenNavChrome } from "@/components/ChucenNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chucenmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Churchill Center — nywf64.com",
  description:
    "Locate the Churchill Center on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Churchill Center locate-it map page (`/chucenmap`).
 * Stack: hero → ChucenNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy chucenmap.shtml (Industrial Area map + chucenmap.gif arrow).
 */
export default function ChucenMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Churchill Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chucenoverview/hero-banner.jpg"
            alt="Churchill Center at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChucenNavChrome />

      <article className={styles.article} aria-labelledby="chucenmap-title">
        <LocateMapTitleBar titleId="chucenmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chucenmap/locate-map.jpg"
              alt="Churchill Center location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Churchill Center"
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
        previousHref="/chucen01"
        explicitPrevious
        overviewHref="/chucenoverview"
        nextHref="/chucen02"
      />
    </>
  );
}
