import Image from "next/image";
import styles from "./EducardsHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * The “Edu-Cards” Set hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `educards`.
 */
export const EDUCARDS_HERO = {
  src: "/images/educards/educardshero.jpg",
  width: 1905,
  height: 826,
  alt: "The Edu-Cards Set — 1964/1965 New York World’s Fair",
} as const;

export function EducardsHero() {
  return (
    <section className={styles.hero} aria-label="The Edu-Cards Set">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={EDUCARDS_HERO.src}
          alt={EDUCARDS_HERO.alt}
          width={EDUCARDS_HERO.width}
          height={EDUCARDS_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
