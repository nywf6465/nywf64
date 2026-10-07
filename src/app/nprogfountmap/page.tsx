import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";
import styles from "./nprogfountmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Fountain of Progress North — nywf64.com",
  description:
    "Locate the Fountain of Progress North on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress North locate-it map page (`/nprogfountmap`).
 * Stack: hero → NprogfountNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy nprogfountmap.shtml (Transportation Area cream map + nprogfountmap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function NprogfountMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of Progress North">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/nprogfountoverview/hero-banner.jpg"
            alt="Fountain of Progress North at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <NprogfountNavChrome />

      <article className={styles.article} aria-labelledby="nprogfountmap-title">
        <LocateMapTitleBar titleId="nprogfountmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/nprogfountmap/locate-map.jpg"
              alt="Fountain of Progress North location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the fountain"
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
        previousHref="/nprogfount01"
        explicitPrevious
        overviewHref="/nprogfountoverview"
        nextHref="/nprogfount02"
      />
    </>
  );
}
