import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./illinoismap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Illinois — nywf64.com",
  description:
    "Locate the Illinois Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Illinois locate-it map page (`/illinoismap`).
 * Body from legacy illinoismap.shtml (Federal & State Area map + illinoismap.gif).
 */
export default function IllinoisMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Illinois Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/illinoisoverview/hero-banner.jpg"
            alt="Illinois Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IllinoisNavChrome />

      <article className={styles.article} aria-labelledby="illinoismap-title">
        <LocateMapTitleBar titleId="illinoismap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/illinoismap/locate-map.jpg"
              alt="Illinois Pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Illinois"
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
        previousHref="/illinois01"
        explicitPrevious
        overviewHref="/illinoisoverview"
        nextHref="/illinois02"
      />
    </>
  );
}
