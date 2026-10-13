import Image from "next/image";
import styles from "./PreviewHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Official Preview Book hero for every page whose route begins with
 * `preview`. Sized like A-page / pavilion overview heroes via overviewPageHero
 * (`--letter-hero-height`).
 */
export function PreviewHero() {
  return (
    <section className={styles.hero} aria-label="The Official Preview Book">
      <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
        <Image
          src="/images/preview/previewhero.jpg"
          alt="The Official Preview Book — 1964/1965 New York World’s Fair"
          width={1902}
          height={827}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
