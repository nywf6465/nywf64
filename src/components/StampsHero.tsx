import Image from "next/image";
import styles from "./StampsHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Postage Stamps of the Fair hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `stamps`.
 */
export const STAMPS_HERO = {
  src: "/images/stamps/stampshero.jpg",
  width: 1905,
  height: 826,
  alt: "The Postage Stamps of the Fair — 1964/1965 New York World’s Fair",
} as const;

export function StampsHero() {
  return (
    <section
      className={styles.hero}
      aria-label="The Postage Stamps of the Fair"
    >
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={STAMPS_HERO.src}
          alt={STAMPS_HERO.alt}
          width={STAMPS_HERO.width}
          height={STAMPS_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
