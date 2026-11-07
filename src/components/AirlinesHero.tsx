import Image from "next/image";
import styles from "./AirlinesHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Airlines & The Fair hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `airlines`.
 */
export const AIRLINES_HERO = {
  src: "/images/airlines/hero-banner.jpg",
  width: 1905,
  height: 826,
  alt: "Airlines & The Fair",
} as const;

export function AirlinesHero() {
  return (
    <section className={styles.hero} aria-label="Airlines & The Fair">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={AIRLINES_HERO.src}
          alt={AIRLINES_HERO.alt}
          width={AIRLINES_HERO.width}
          height={AIRLINES_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
