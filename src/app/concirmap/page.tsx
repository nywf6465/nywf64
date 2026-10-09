import type { Metadata } from "next";
import Image from "next/image";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./concirmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Continental Circus — nywf64.com",
  description:
    "Locate the Continental Circus on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus locate-it map page (`/concirmap`).
 * Stack: hero → ConcirNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Title bar (“1964 Official Souvenir Map”) is the map-page standard.
 * Body from legacy concirmap.shtml (Amusement Area map + conparmap.gif arrow).
 */
export default function ConcirMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Circus">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/conciroverview/hero-banner.jpg"
            alt="Continental Circus at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConcirNavChrome />

      <article className={styles.article} aria-labelledby="concirmap-title">
        <LocateMapTitleBar titleId="concirmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/concirmap/locate-map.jpg"
              alt="Continental Circus location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Continental Circus"
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
        previousHref="/concir01"
        explicitPrevious
        overviewHref="/conciroverview"
        nextHref="/concir02"
      />
    </>
  );
}
