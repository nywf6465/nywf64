import type { Metadata } from "next";
import Image from "next/image";
import { IntplaNavChrome } from "@/components/IntplaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intplamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — International Plaza — nywf64.com",
  description:
    "Locate International Plaza on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * International Plaza locate-it map page (`/intplamap`).
 * Stack: hero → IntplaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy intplamap.shtml (International Area map + intplamap.gif arrow).
 */
export default function IntplamapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="International Plaza">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/intplaoverview/hero-banner.jpg"
            alt="International Plaza at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IntplaNavChrome />

      <article className={styles.article} aria-labelledby="intplamap-title">
        <LocateMapTitleBar titleId="intplamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/intplamap/locate-map.jpg"
              alt="International Plaza location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to International Plaza"
              width={910}
              height={1158}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpla01"
        explicitPrevious
        overviewHref="/intplaoverview"
        nextHref="/intpla02"
      />
    </>
  );
}
