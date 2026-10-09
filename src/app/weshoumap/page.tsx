import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import styles from "./weshoumap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Westinghouse — nywf64.com",
  description:
    "Locate the Westinghouse pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Westinghouse locate-it map page (`/weshoumap`).
 * Stack: hero → WeshouNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy weshoumap.shtml (Federal & State Area + weshoumap.gif).
 */
export default function WeshouMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={styles.article} aria-labelledby="weshoumap-title">
        <LocateMapTitleBar titleId="weshoumap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/weshoumap/locate-map.jpg"
              alt="Westinghouse pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Westinghouse"
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
        previousHref="/weshou01"
        explicitPrevious
        overviewHref="/weshouoverview"
        nextHref="/weshou02"
      />
    </>
  );
}
