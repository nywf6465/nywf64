import Image from "next/image";
import styles from "./OdysseyHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * A World’s Fair Odyssey hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `odyssey`.
 */
export const ODYSSEY_HERO = {
  src: "/images/odyssey/hero-banner.jpg",
  width: 1905,
  height: 826,
  alt: "A World’s Fair Odyssey — 1964/1965 New York World’s Fair",
} as const;

export function OdysseyHero() {
  return (
    <section className={styles.hero} aria-label="A World’s Fair Odyssey">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={ODYSSEY_HERO.src}
          alt={ODYSSEY_HERO.alt}
          width={ODYSSEY_HERO.width}
          height={ODYSSEY_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
