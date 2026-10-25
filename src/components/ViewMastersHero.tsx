import Image from "next/image";
import styles from "./ViewMastersHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * The View-Masters Reels hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `vm`.
 */
export const VIEW_MASTERS_HERO = {
  src: "/images/viewmasters/viewmastershero.jpg",
  width: 1905,
  height: 826,
  alt: "The View-Masters — 1964/1965 New York World’s Fair",
} as const;

export function ViewMastersHero() {
  return (
    <section className={styles.hero} aria-label="The View-Masters">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={VIEW_MASTERS_HERO.src}
          alt={VIEW_MASTERS_HERO.alt}
          width={VIEW_MASTERS_HERO.width}
          height={VIEW_MASTERS_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
