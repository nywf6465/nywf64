import type { Metadata } from "next";
import Image from "next/image";
import { MorocoNavChrome } from "@/components/MorocoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./morocooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Morocco — Overview — nywf64.com",
  description:
    "Morocco overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Morocco overview — follows the **overview** prototype
 * (same stack as /montanaoverview / /amfoverview).
 * Wired with the shared **moroco menu**.
 * Route slug: `/morocooverview` (spelling as specified — not “morocco”).
 */
export default function MorocoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Morocco">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/morocooverview/hero-banner.jpg"
            alt="Morocco at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MorocoNavChrome />

      <section className={styles.overview} aria-label="Morocco overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A bazaar and restaurant under Moorish arches reproduce the sights
              and sounds of North Africa.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/morocooverview/photo.jpg"
              alt="Morocco pavilion"
              width={1584}
              height={965}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/morocooverview"
        overviewHref="/morocooverview"
        nextHref="/moroco01"
      />
    </>
  );
}
