import type { Metadata } from "next";
import Image from "next/image";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./panamgoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pan American Highway Gardens — Overview — nywf64.com",
  description:
    "Pan American Highway Gardens overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * Pan American Highway Gardens overview — follows the **overview** prototype
 * (same stack as /alaskaoverview / /pakistoverview).
 */
export default function PanamgOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Pan American Highway Gardens">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/panamgoverview/hero-banner.jpg"
            alt="Pan American Highway Gardens at the 1964/1965 New York World’s Fair"
            width={2164}
            height={727}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PanamgNavChrome />

      <section
        className={styles.overview}
        aria-label="Pan American Highway Gardens overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Fairgoers stroll past large paintings of scenes along the new Pan
              American Highway through Latin America.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/panamgoverview/photo.jpg"
              alt="Pan American Highway Gardens at the 1964/1965 New York World’s Fair"
              width={1518}
              height={1036}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/panamgoverview"
        overviewHref="/panamgoverview"
        nextHref="/panama01"
      />
    </>
  );
}
