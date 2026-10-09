import type { Metadata } from "next";
import Image from "next/image";
import { MedphoNavChrome } from "@/components/MedphoNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./medphooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Medo Photo Supply — Overview — nywf64.com",
  description:
    "Medo Photo Supply overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Medo Photo Supply overview — follows the **overview** prototype
 * (same stack as /maspizoverview / /masonoverview).
 * Wired with the shared **medpho menu**.
 * Route slug: `/medphooverview`.
 */
export default function MedphoOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Medo Photo Supply">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/medphooverview/hero-banner.jpg"
            alt="Medo Photo Supply at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MedphoNavChrome />

      <section
        className={styles.overview}
        aria-label="Medo Photo Supply overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A circular one-story structure houses a complete camera shop.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/medphooverview/photo.jpg"
              alt="Medo Photo Supply pavilion"
              width={1584}
              height={1024}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/medphooverview"
        overviewHref="/medphooverview"
        nextHref="/medpho01"
      />
    </>
  );
}
