import type { Metadata } from "next";
import Image from "next/image";
import { ConparNavChrome } from "@/components/ConparNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./conparmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Continental Park — nywf64.com",
  description:
    "Locate Continental Park on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Park locate-it map page (`/conparmap`).
 * Stack: hero → ConparNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy conparmap.shtml (Amusement Area map + conparmap.gif arrow).
 */
export default function ConparmapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Park">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/conparoverview/hero-banner.jpg"
            alt="Continental Park at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConparNavChrome />

      <article className={styles.article} aria-labelledby="conparmap-title">
        <LocateMapTitleBar titleId="conparmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/conparmap/locate-map.jpg"
              alt="Continental Park location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Continental Park"
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
        previousHref="/conpar01"
        explicitPrevious
        overviewHref="/conparoverview"
        nextHref="/conpar02"
      />
    </>
  );
}
