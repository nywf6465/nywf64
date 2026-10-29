import Image from "next/image";
import styles from "./HolmesHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Gary Holmes hero for every route beginning with `holmes`.
 * Sized like pavilion overview heroes (`overviewPageHero`), matching RmHero.
 */
export function HolmesHero() {
  return (
    <section className={styles.hero} aria-label="Gary Holmes">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/holmes/hero-banner.jpg"
          alt="Gary Holmes — To the Fair or Bust by Bike or by Bus!"
          width={2172}
          height={724}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
