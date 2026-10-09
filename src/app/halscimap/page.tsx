import type { Metadata } from "next";
import Image from "next/image";
import { HalsciNavChrome } from "@/components/HalsciNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./halscimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hall of Science — nywf64.com",
  description:
    "Locate the Hall of Science on the Transportation Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Science locate-it map page (`/halscimap`).
 * Stack: hero → HalsciNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy halscimap.shtml (Transportation Area cream map +
 * halscimap.gif).
 */
export default function HalscimapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/halscioverview/hero-banner.jpg"
            alt="Hall of Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HalsciNavChrome />

      <article className={styles.article} aria-labelledby="halscimap-title">
        <LocateMapTitleBar titleId="halscimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/halscimap/locate-map.jpg"
              alt="Hall of Science location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/halsci01"
        explicitPrevious
        overviewHref="/halscioverview"
        nextHref="/halsci02"
      />
    </>
  );
}
