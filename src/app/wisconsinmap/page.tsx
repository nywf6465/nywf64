import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import styles from "./wisconsinmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Wisconsin — nywf64.com",
  description:
    "Locate the Wisconsin Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin locate-it map page (`/wisconsinmap`).
 * Stack: hero → WisconsinNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy wisconsinmap.shtml (Federal & State Area map + wisconsinmap.gif arrow).
 */
export default function WisconsinMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Wisconsin">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wisconsinoverview/hero-banner.jpg"
            alt="Wisconsin pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WisconsinNavChrome />

      <article className={styles.article} aria-labelledby="wisconsinmap-title">
        <LocateMapTitleBar titleId="wisconsinmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/wisconsinmap/locate-map.jpg"
              alt="Wisconsin Pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Wisconsin"
              width={1076}
              height={1233}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wisconsin01"
        overviewHref="/wisconsinoverview"
        nextHref="/wisconsin02"
      />
    </>
  );
}
