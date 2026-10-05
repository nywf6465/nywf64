import type { Metadata } from "next";
import Image from "next/image";
import { ChukininnNavChrome } from "@/components/ChukininnNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chukininnmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Chukin Inn — nywf64.com",
  description:
    "Locate the Chun King Inn on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chukin Inn locate-it map page (`/chukininnmap`).
 * Stack: hero → ChukininnNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy chukininnmap.shtml (Amusement Area map + chukininnmap.gif arrow).
 */
export default function ChukininnMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chukin Inn">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chukininnoverview/hero-banner.jpg"
            alt="Chukin Inn at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChukininnNavChrome />

      <article className={styles.article} aria-labelledby="chukininnmap-title">
        <LocateMapTitleBar titleId="chukininnmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chukininnmap/locate-map.jpg"
              alt="Chun King Inn location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Chun King Inn"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/chukininn01"
        explicitPrevious
        overviewHref="/chukininnoverview"
        nextHref="/chukininn02"
      />
    </>
  );
}
