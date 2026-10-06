import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";
import styles from "./sprogfountmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fountain of Progress South — nywf64.com",
  description:
    "Locate the Fountain of Progress South on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress South locate-it map page (`/sprogfountmap`).
 * Stack: hero → SprogfountNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy sprogfountmap.shtml (Transportation Area cream map + sprogfountmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function SprogfountMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of Progress South">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sprogfountoverview/hero-banner.jpg"
            alt="Fountain of Progress South at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SprogfountNavChrome />

      <article className={styles.article} aria-labelledby="sprogfountmap-title">
        <LocateMapTitleBar titleId="sprogfountmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/sprogfountmap/locate-map.jpg"
              alt="Fountain of Progress South location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the fountain"
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
        previousHref="/sprogfount01"
        explicitPrevious
        overviewHref="/sprogfountoverview"
        nextHref="/sprogfount02"
      />
    </>
  );
}
