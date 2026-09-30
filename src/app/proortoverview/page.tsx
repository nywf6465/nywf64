import type { Metadata } from "next";
import Image from "next/image";
import { ProortNavChrome } from "@/components/ProortNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./proortoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Protestant & Orthodox Center — Overview — nywf64.com",
  description:
    "Protestant & Orthodox Center overview at the 1964/1965 New York World’s Fair — Religions on nywf64.com.",
};

/**
 * Protestant & Orthodox Center overview — follows the **overview** prototype
 * (same stack as /morchuoverview / /litwaycrooverview).
 */
export default function ProortOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Protestant & Orthodox Center"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/proortoverview/hero-banner.jpg"
            alt="Protestant & Orthodox Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ProortNavChrome />

      <section
        className={styles.overview}
        aria-label="Protestant & Orthodox Center overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              An allegorical film and religious exhibits and art works
              illustrate the theme &apos;Jesus Christ, the Light of the
              World.&apos;
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/proortoverview/photo.jpg"
              alt="Protestant & Orthodox Center pavilion"
              width={958}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/proortoverview"
        overviewHref="/proortoverview"
        nextHref="/proort01"
      />
    </>
  );
}
