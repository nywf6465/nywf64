import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amexmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — American Express — nywf64.com",
  description:
    "Locate the American Express Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express locate-it map page (`/amexmap`).
 * Stack: hero → AmexNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy amexmap.shtml (Industrial Area map + amexmap.gif arrow).
 */
export default function AmexMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <article className={styles.article} aria-labelledby="amexmap-title">
        <LocateMapTitleBar titleId="amexmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/amexmap/locate-map.jpg"
              alt="American Express Pavilion location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to American Express"
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
        previousHref="/amex01"
        explicitPrevious
        overviewHref="/amex01"
        nextHref="/amex02"
      />
    </>
  );
}
