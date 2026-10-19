import Image from "next/image";
import styles from "./MainlinerHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Blackhawk Films / MAINLINER series hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 */
export const MAINLINER_HERO = {
  src: "/images/mainliner/mainlinerhero.jpg",
  width: 1905,
  height: 826,
  alt: "The Blackhawk Films Slide Set — 1964/1965 New York World’s Fair",
} as const;

export function MainlinerHero() {
  return (
    <section className={styles.hero} aria-label="The Blackhawk Films Slide Set">
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={MAINLINER_HERO.src}
          alt={MAINLINER_HERO.alt}
          width={MAINLINER_HERO.width}
          height={MAINLINER_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
