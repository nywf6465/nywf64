import type { Metadata } from "next";
import Image from "next/image";
import { FlowatskiNavChrome } from "@/components/FlowatskiNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./flowatskimap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Locate the Florida Citrus Water Ski Show on the Amusement Area of the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida Citrus Water Ski Show locate-it map page (`/flowatskimap`).
 * Stack: hero → FlowatskiNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy flowatskimap.shtml (Amusement Area cream map + flowatskimap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 * Adobe Reader chrome omitted.
 */
export default function FlowatskiMapPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Florida Citrus Water Ski Show"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/flowatskioverview/hero-banner.jpg"
            alt="Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FlowatskiNavChrome />

      <article className={styles.article} aria-labelledby="flowatskimap-title">
        <LocateMapTitleBar titleId="flowatskimap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/flowatskimap/locate-map.jpg"
              alt="Florida Citrus Water Ski Show location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Amphitheatre"
              width={930}
              height={655}
              sizes="100vw"
              className={styles.mapArt}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/flowatski01"
        explicitPrevious
        overviewHref="/flowatskioverview"
        nextHref="/flowatski02"
      />
    </>
  );
}
