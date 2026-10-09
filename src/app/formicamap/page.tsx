import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formicamap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Formica — nywf64.com",
  description:
    "Locate the Formica World's Fair House on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica locate-it map page (`/formicamap`).
 * Stack: hero → FormicaNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy formicamap.shtml (Industrial Area cream map + formicamap.gif).
 * Yellowing removed: clean cream base + GIF arrow.
 */
export default function FormicaMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formicamap-title">
        <LocateMapTitleBar titleId="formicamap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/formicamap/locate-map.jpg"
              alt="Formica World's Fair House location on the Industrial Area of the 1964 Official Souvenir Map, with a red arrow pointing to Formica"
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
        previousHref="/formica01"
        explicitPrevious
        overviewHref="/formicaoverview"
        nextHref="/formica02"
      />
    </>
  );
}
