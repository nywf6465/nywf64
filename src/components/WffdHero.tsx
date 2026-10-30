import Image from "next/image";
import styles from "./WffdHero.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * World’s Fair Fire & Police Departments hero.
 * Same pixel size as the IBM pavilion hero (`ibm01` / `ibmoverview`): 1905×826.
 * Use on every page whose route begins with `wffd`.
 */
export const WFFD_HERO = {
  src: "/images/wffd/hero-banner.jpg",
  width: 1905,
  height: 826,
  alt: "World’s Fair Fire & Police Departments",
} as const;

export function WffdHero() {
  return (
    <section
      className={styles.hero}
      aria-label="World’s Fair Fire & Police Departments"
    >
      <div
        className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
      >
        <Image
          src={WFFD_HERO.src}
          alt={WFFD_HERO.alt}
          width={WFFD_HERO.width}
          height={WFFD_HERO.height}
          priority
          sizes="100vw"
          className={overviewHeroStyles.art}
          unoptimized
        />
      </div>
    </section>
  );
}
