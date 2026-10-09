import type { Metadata } from "next";
import Image from "next/image";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chinamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — China — nywf64.com",
  description:
    "Locate the Republic of China pavilion on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China locate-it map page (`/chinamap`).
 * Stack: hero → ChinaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy chinamap.shtml (International Area map + chinamap.gif arrow).
 * Linked from /china01 via locateHref.
 */
export default function ChinamapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="China">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chinaoverview/hero-banner.jpg"
            alt="China at the 1964/1965 New York World’s Fair"
            width={1906}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChinaNavChrome />

      <article className={styles.article} aria-labelledby="chinamap-title">
        <LocateMapTitleBar titleId="chinamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/chinamap/locate-map.jpg"
              alt="Republic of China pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Republic of China"
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
        previousHref="/china01"
        explicitPrevious
        overviewHref="/chinaoverview"
        nextHref="/china02"
      />
    </>
  );
}
