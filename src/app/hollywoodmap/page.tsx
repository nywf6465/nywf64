import type { Metadata } from "next";
import Image from "next/image";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hollywoodmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Hollywood — nywf64.com",
  description:
    "Locate the Hollywood U.S.A. Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function HollywoodMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hollywood">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hollywoodoverview/hero-banner.jpg"
            alt="Hollywood pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HollywoodNavChrome />

      <article className={styles.article} aria-labelledby="hollywoodmap-title">
        <LocateMapTitleBar titleId="hollywoodmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/hollywoodmap/locate-map.jpg"
              alt="Hollywood U.S.A. Pavilion location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to Hollywood"
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
        previousHref="/hollywood01"
        explicitPrevious
        overviewHref="/hollywoodoverview"
        nextHref="/hollywood02"
      />
    </>
  );
}
