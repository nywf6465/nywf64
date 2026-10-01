import type { Metadata } from "next";
import Image from "next/image";
import { PorautNavChrome } from "@/components/PorautNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./porautmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Port Authority Heliport — nywf64.com",
  description:
    "Locate the Port Authority Heliport on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Port Authority Heliport locate-it map page (`/porautmap`).
 * Stack: hero → PorautNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 */
export default function PorautMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Port Authority Heliport">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/porautoverview/hero-banner.jpg"
            alt="Port Authority Heliport at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PorautNavChrome />

      <article className={styles.article} aria-labelledby="porautmap-title">
        <LocateMapTitleBar titleId="porautmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <p className={styles.introLead}>
              <strong>Locate it!</strong> The location of this pavilion or
              exhibit is indicated below.
            </p>
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/porautmap/locate-map.jpg"
              alt="Port Authority Heliport location on the Transportation Area of the 1964 Official Souvenir Map, with a red arrow pointing to the Port Authority Heliport"
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
        previousHref="/poraut01"
        explicitPrevious
        overviewHref="/porautoverview"
        nextHref="/poraut02"
      />
    </>
  );
}
