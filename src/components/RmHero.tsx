import Image from "next/image";
import styles from "./RmHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Robert Moses hero for every route beginning with `rm`.
 * Sized like pavilion overview heroes (`overviewPageHero`).
 */
export function RmHero() {
  return (
    <section className={styles.hero} aria-label="Robert Moses">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/rm/hero-banner.jpg"
          alt="Robert Moses — a bit about the man and his Fair"
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
