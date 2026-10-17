import Image from "next/image";
import styles from "./PhotoLabHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Photo Lab series hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `photolab`.
 */
export const PHOTOLAB_HERO = {
  src: "/images/photolab/photolabhero.jpg",
  width: 1905,
  height: 826,
  alt: "The Photo Lab Slide Set — 1964/1965 New York World’s Fair",
} as const;

export function PhotoLabHero() {
  return (
    <section className={styles.hero} aria-label="The Photo Lab Slide Set">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={PHOTOLAB_HERO.src}
          alt={PHOTOLAB_HERO.alt}
          width={PHOTOLAB_HERO.width}
          height={PHOTOLAB_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
