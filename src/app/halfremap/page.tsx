import type { Metadata } from "next";
import Image from "next/image";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./halfremap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hall of Free Enterprise — nywf64.com",
  description:
    "Locate the Hall of Free Enterprise on the International Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise locate-it map page (`/halfremap`).
 * Stack: hero → HalfreNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy halfremap.shtml (International Area cream map + halfremap.gif).
 */
export default function HalfremapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Free Enterprise">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/halfreoverview/hero-banner.jpg"
            alt="Hall of Free Enterprise at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HalfreNavChrome />

      <article className={styles.article} aria-labelledby="halfremap-title">
        <LocateMapTitleBar titleId="halfremap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/halfremap/locate-map.jpg"
              alt="Hall of Free Enterprise location on the International Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
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
        previousHref="/halfre01"
        explicitPrevious
        overviewHref="/halfreoverview"
        nextHref="/halfre02"
      />
    </>
  );
}
