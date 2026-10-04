import type { Metadata } from "next";
import Image from "next/image";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./astfountmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Astral Fountain — nywf64.com",
  description:
    "Locate the Astral Fountain on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain locate-it map page (`/astfountmap`).
 * Stack: hero → AstfountNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy astfountmap.shtml (Federal/State Area map + astfountmap.gif arrow).
 */
export default function AstfountMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Astral Fountain">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/astfountoverview/hero-banner.jpg"
            alt="Astral Fountain at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AstfountNavChrome />

      <article className={styles.article} aria-labelledby="astfountmap-title">
        <LocateMapTitleBar titleId="astfountmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/astfountmap/locate-map.jpg"
              alt="Astral Fountain location on the Federal and State Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Astral Fountain"
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
        previousHref="/astfount01"
        explicitPrevious
        overviewHref="/astfountoverview"
        nextHref="/astfount02"
      />
    </>
  );
}
