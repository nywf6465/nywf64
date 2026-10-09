import type { Metadata } from "next";
import Image from "next/image";
import { KidlanNavChrome } from "@/components/KidlanNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./kidlanmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Kiddyland — nywf64.com",
  description:
    "Locate Kiddyland on the Lake Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Kiddyland locate-it map page (`/kidlanmap`).
 * Stack: hero → KidlanNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy kidlanmap.shtml (Amusement Area map + funlan/kidlanmap.gif arrow).
 */
export default function KidlanmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Kiddyland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/kidlanoverview/hero-banner.jpg"
            alt="Kiddyland at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <KidlanNavChrome />

      <article className={styles.article} aria-labelledby="kidlanmap-title">
        <LocateMapTitleBar titleId="kidlanmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/kidlanmap/locate-map.jpg"
              alt="Kiddyland location on the Lake Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Kiddyland"
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
        previousHref="/kidlan01"
        explicitPrevious
        overviewHref="/kidlanoverview"
        nextHref="/kidlanoverview"
      />
    </>
  );
}
