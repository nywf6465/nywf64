import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougtmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — House of Good Taste — nywf64.com",
  description:
    "Locate the House of Good Taste on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougtmap.shtml (Industrial Area cream map + hougtmap.gif arrow). */
export default function HougtMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <article className={styles.article} aria-labelledby="hougtmap-title">
        <LocateMapTitleBar titleId="hougtmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/hougtmap/locate-map.jpg"
              alt="House of Good Taste location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to the pavilion"
              width={1359}
              height={1213}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt01"
        explicitPrevious
        overviewHref="/hougtoverview"
        nextHref="/hougt02"
      />
    </>
  );
}
