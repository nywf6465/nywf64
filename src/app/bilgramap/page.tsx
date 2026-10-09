import type { Metadata } from "next";
import Image from "next/image";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bilgramap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Billy Graham — nywf64.com",
  description:
    "Locate Billy Graham on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham locate-it map page (`/bilgramap`).
 * Stack: hero → BilgraNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy bilgramap.shtml (International Area map + bilgramap.gif arrow).
 */
export default function BilgramapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Billy Graham">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/bilgraoverview/hero-banner.jpg"
            alt="Billy Graham at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BilgraNavChrome />

      <article className={styles.article} aria-labelledby="bilgramap-title">
        <LocateMapTitleBar titleId="bilgramap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/bilgramap/locate-map.jpg"
              alt="Billy Graham location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Billy Graham"
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
        previousHref="/bilgra01"
        explicitPrevious
        overviewHref="/bilgraoverview"
        nextHref="/bilgra02"
      />
    </>
  );
}
