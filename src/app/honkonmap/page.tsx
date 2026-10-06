import type { Metadata } from "next";
import Image from "next/image";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./honkonmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hong Kong — nywf64.com",
  description:
    "Locate the Hong Kong pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hong Kong locate-it map page (`/honkonmap`).
 * Body from legacy honkonmap.shtml (International Area map + honkonmap.gif arrow).
 * Cream background from intl-map-rebuild clean-background.jpg (no yellowing).
 */
export default function HonkonMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hong Kong">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/honkonoverview/hero-banner.jpg"
            alt="Hong Kong at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HonkonNavChrome />

      <article className={styles.article} aria-labelledby="honkonmap-title">
        <LocateMapTitleBar titleId="honkonmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/honkonmap/locate-map.jpg"
              alt="Hong Kong pavilion location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to Hong Kong"
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
        previousHref="/honkon01"
        explicitPrevious
        overviewHref="/honkonoverview"
        nextHref="/honkon02"
      />
    </>
  );
}
