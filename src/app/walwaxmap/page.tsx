import type { Metadata } from "next";
import Image from "next/image";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { WalwaxNavChrome } from "@/components/WalwaxNavChrome";
import styles from "./walwaxmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Walter's International Wax Museum — nywf64.com",
  description:
    "Locate Walter's International Wax Museum on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Walter's International Wax Museum locate-it map page (`/walwaxmap`).
 * Stack: hero → WalwaxNavChrome → navy title bar → left-justified body → Nav2Bar.
 * Body from legacy walwaxmap.shtml (Amusement Area + walwaxmap.gif).
 */
export default function WalwaxMapPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Walter's International Wax Museum"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/walwaxoverview/hero-banner.jpg"
            alt="Walter's International Wax Museum at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WalwaxNavChrome />

      <article className={styles.article} aria-labelledby="walwaxmap-title">
        <LocateMapTitleBar titleId="walwaxmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>

          <div className={styles.mapWrap}>
            <Image
              src="/images/walwaxmap/locate-map.jpg"
              alt="Walter's International Wax Museum location on the Amusement Area of the 1964 Official Souvenir Map, with a red arrow pointing to Walter's International Wax Museum"
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
        previousHref="/walwax01"
        explicitPrevious
        overviewHref="/walwaxoverview"
        nextHref="/walwax02"
      />
    </>
  );
}
