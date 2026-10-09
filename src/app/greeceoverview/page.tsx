import type { Metadata } from "next";
import Image from "next/image";
import { GreeceNavChrome } from "@/components/GreeceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./greeceoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Greece — Overview — nywf64.com",
  description:
    "Greece overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greece overview — follows the **overview** prototype
 * (same stack as /genfoooverview / /gencigoverview).
 */
export default function GreeceOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Greece">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/greeceoverview/hero-banner.jpg"
            alt="Greece at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreeceNavChrome />

      <section className={styles.overview} aria-label="Greece overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A sound-and-light show dramatizes Greek contributions to Western
              thought; a terrace restaurant serves national specialties.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/greeceoverview/photo.jpg"
              alt="Greece — sound-and-light show and terrace restaurant"
              width={1584}
              height={1070}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/greeceoverview"
        overviewHref="/greeceoverview"
        nextHref="/greece01"
      />
    </>
  );
}
