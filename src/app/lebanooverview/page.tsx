import type { Metadata } from "next";
import Image from "next/image";
import { LebanoNavChrome } from "@/components/LebanoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./lebanooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Lebanon — Overview — nywf64.com",
  description:
    "Lebanon overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Lebanon overview — follows the **overview** prototype
 * (same stack as /lakcruoverview / /koreaoverview).
 * Wired with the shared **lebano menu**.
 * Route slug: `/lebanooverview`.
 */
export default function LebanoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Lebanon">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/lebanooverview/hero-banner.jpg"
            alt="Lebanon pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LebanoNavChrome />

      <section className={styles.overview} aria-label="Lebanon overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Cubelike &quot;houses&quot; resembling a Lebanese village contain
              displays of artifacts, moden industry and the country&apos;s
              tourist attractions.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/lebanooverview/photo.jpg"
              alt="Lebanon — cubelike pavilion houses and tower"
              width={1584}
              height={1090}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/lebanooverview"
        overviewHref="/lebanooverview"
        nextHref="/lebano01"
      />
    </>
  );
}
