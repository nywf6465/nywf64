import type { Metadata } from "next";
import Image from "next/image";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { LocateMapFullSizeLink } from "@/components/LocateMapFullSizeLink";
import { LocateMapIntroLead } from "@/components/LocateMapIntroLead";
import { LocateMapTitleBar } from "@/components/LocateMapTitleBar";
import { Nav2Bar } from "@/components/Nav2Bar";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import styles from "./johwaxmap.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Locate it! Map — Johnson Wax — nywf64.com",
  description:
    "Locate the Johnson Wax Pavilion on the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function JohwaxMapPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Johnson Wax Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={JOHWAX_HERO.src}
            alt={JOHWAX_HERO.alt}
            width={JOHWAX_HERO.width}
            height={JOHWAX_HERO.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JohwaxNavChrome />

      <article className={styles.article} aria-labelledby="johwaxmap-title">
        <LocateMapTitleBar titleId="johwaxmap-title" />
        <div className={styles.articleInner}>
          <div className={styles.intro}>
            <LocateMapIntroLead />
            <LocateMapFullSizeLink />
          </div>
          <div className={styles.mapWrap}>
            <Image
              src="/images/johwaxmap/locate-map.jpg"
              alt="Johnson Wax Pavilion location on the Industrial Area of the 1964 Official Souvenir Map"
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
        previousHref="/johwax01"
        explicitPrevious
        overviewHref="/johwaxoverview"
        nextHref="/johwax02"
      />
    </>
  );
}
