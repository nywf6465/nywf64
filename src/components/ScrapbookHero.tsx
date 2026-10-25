import Image from "next/image";
import styles from "./ScrapbookHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * World’s Fair Scrapbook hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `scrapbook`.
 */
export const SCRAPBOOK_HERO = {
  src: "/images/scrapbook/scrapbookhero.jpg",
  width: 1905,
  height: 826,
  alt: "World’s Fair Scrapbook — 1964/1965 New York World’s Fair",
} as const;

export function ScrapbookHero() {
  return (
    <section className={styles.hero} aria-label="World’s Fair Scrapbook">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={SCRAPBOOK_HERO.src}
          alt={SCRAPBOOK_HERO.alt}
          width={SCRAPBOOK_HERO.width}
          height={SCRAPBOOK_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
