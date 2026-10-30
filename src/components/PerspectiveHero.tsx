import Image from "next/image";
import styles from "./PerspectiveHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Perisphere’s Perspective / The Fairs and Flushing Meadows hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `perspective`.
 */
export const PERSPECTIVE_HERO = {
  src: "/images/perspective/hero-banner.jpg",
  width: 1905,
  height: 826,
  alt: "The Fairs and Flushing Meadows — Perisphere’s Perspective",
} as const;

export function PerspectiveHero() {
  return (
    <section
      className={styles.hero}
      aria-label="The Fairs and Flushing Meadows"
    >
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={PERSPECTIVE_HERO.src}
          alt={PERSPECTIVE_HERO.alt}
          width={PERSPECTIVE_HERO.width}
          height={PERSPECTIVE_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
