import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./skfmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — SKF — nywf64.com",
  description:
    "Locate the SKF pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF locate-it map page (`/skfmap`).
 * Stack: hero → SkfNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy skfmap.shtml (Transportation Area map + skfmap.gif arrow).
 */
export default function SkfMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="SKF">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/skfoverview/hero-banner.jpg"
            alt="SKF pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SkfNavChrome />

      <article className={styles.article} aria-labelledby="skfmap-title">
        <LocateMapTitleBar titleId="skfmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/skfmap/locate-map.jpg"
              alt="SKF pavilion location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to SKF"
              width={807}
              height={1165}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf01"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skf02"
      />
    </>
  );
}
