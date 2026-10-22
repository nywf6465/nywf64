import Image from "next/image";
import styles from "./PcardsHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * World’s Fair Postcard Collection hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `pcards`.
 */
export const PCARDS_HERO = {
  src: "/images/pcards/pcardshero.jpg",
  width: 1905,
  height: 826,
  alt: "World’s Fair Postcard Collection — 1964/1965 New York World’s Fair",
} as const;

export function PcardsHero() {
  return (
    <section
      className={styles.hero}
      aria-label="World’s Fair Postcard Collection"
    >
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={PCARDS_HERO.src}
          alt={PCARDS_HERO.alt}
          width={PCARDS_HERO.width}
          height={PCARDS_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
