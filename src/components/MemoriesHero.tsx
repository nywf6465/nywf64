import Image from "next/image";
import styles from "./MemoriesHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Memories / Katherine Khalife hero for every route beginning with `memories`.
 * Sized like pavilion overview heroes (`overviewPageHero`), matching RmHero.
 */
export function MemoriesHero() {
  return (
    <section className={styles.hero} aria-label="Katherine Khalife">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/memories/hero-banner.jpg"
          alt="Katherine Khalife — Memories of the 1964 World's Fair"
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
