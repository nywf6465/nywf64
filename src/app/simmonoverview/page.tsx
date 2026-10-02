import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./simmonoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Simmons — Overview — nywf64.com",
  description:
    "Simmons overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Simmons overview — follows the **overview** prototype
 * (same stack as /amptheoverview / /panamgoverview).
 */
export default function SimmonOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Simmons">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/simmonoverview/hero-banner.jpg"
            alt="Simmons at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SimmonNavChrome />

      <section className={styles.overview} aria-label="Simmons overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors can take half-hour naps in rest alcoves or view model
              rooms cleverly designed to provide extra sleeping space.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/simmonoverview/photo.jpg"
              alt="Simmons pavilion at the 1964/1965 New York World’s Fair"
              width={1577}
              height={997}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/simmonoverview"
        overviewHref="/simmonoverview"
        nextHref="/summon01"
      />
    </>
  );
}
