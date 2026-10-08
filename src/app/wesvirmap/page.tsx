import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";
import styles from "./wesvirmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — West Virginia — nywf64.com",
  description:
    "Locate the West Virginia Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia locate-it map page (`/wesvirmap`).
 * Stack: hero → WesvirNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy wesvirmap.shtml (Federal & State Area map + wesvirmap.gif arrow).
 */
export default function WesvirMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="West Virginia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wesviroverview/hero-banner.jpg"
            alt="West Virginia pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WesvirNavChrome />

      <article className={styles.article} aria-labelledby="wesvirmap-title">
        <LocateMapTitleBar titleId="wesvirmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/wesvirmap/locate-map.jpg"
              alt="West Virginia Pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to West Virginia"
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
        previousHref="/wesvir01"
        overviewHref="/wesviroverview"
        nextHref="/wesvir02"
      />
    </>
  );
}
