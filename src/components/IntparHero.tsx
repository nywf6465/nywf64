import Image from "next/image";
import styles from "./IntparHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Hunt for International Exhibitors hero for every `intpar*` route.
 * Sized like A-page / pavilion overview heroes (1910×823 via overviewPageHero).
 */
export function IntparHero() {
  return (
    <section
      className={styles.hero}
      aria-label="The Hunt for International Exhibitors"
    >
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/intpar/intparhero.jpg"
          alt="The Hunt for International Exhibitors — 1964/1965 New York World’s Fair"
          width={1910}
          height={823}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
