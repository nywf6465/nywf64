import Image from "next/image";
import styles from "./DawsonHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Greg Dawson hero for every route beginning with `dawson`.
 * Sized like pavilion overview heroes (`overviewPageHero`), matching RmHero.
 */
export function DawsonHero() {
  return (
    <section className={styles.hero} aria-label="Greg Dawson">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/dawson/hero-banner.jpg"
          alt="Greg Dawson — Director of Public Relations, New York World's Fair 1964/1965"
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
