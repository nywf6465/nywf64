import Image from "next/image";
import styles from "./FisherHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Albert Fisher hero for every route beginning with `fisher`.
 * Sized like pavilion overview heroes (`overviewPageHero`), matching RmHero.
 */
export function FisherHero() {
  return (
    <section className={styles.hero} aria-label="Albert Fisher">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/fisher/hero-banner.jpg"
          alt="Albert Fisher — New York World's Fair Memories"
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
