import Image from "next/image";
import styles from "./MatchbooksHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * World’s Fair Matchbook Collection hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `matchbooks`.
 */
export const MATCHBOOKS_HERO = {
  src: "/images/matchbooks/matchbookshero.jpg",
  width: 1905,
  height: 826,
  alt: "World’s Fair Matchbook Collection — 1964/1965 New York World’s Fair",
} as const;

export function MatchbooksHero() {
  return (
    <section
      className={styles.hero}
      aria-label="World’s Fair Matchbook Collection"
    >
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={MATCHBOOKS_HERO.src}
          alt={MATCHBOOKS_HERO.alt}
          width={MATCHBOOKS_HERO.width}
          height={MATCHBOOKS_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
