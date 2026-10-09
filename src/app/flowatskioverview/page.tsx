import type { Metadata } from "next";
import Image from "next/image";
import { FlowatskiNavChrome } from "@/components/FlowatskiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./flowatskioverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Florida Citrus Water Ski Show — Overview — nywf64.com",
  description:
    "Florida Citrus Water Ski Show overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida Citrus Water Ski Show overview — follows the **overview** prototype
 * (same stack as /firnatoverview / /finartoverview).
 */
export default function FlowatskiOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Florida Citrus Water Ski Show"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/flowatskioverview/hero-banner.jpg"
            alt="Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FlowatskiNavChrome />

      <section
        className={styles.overview}
        aria-label="Florida Citrus Water Ski Show overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Experts put on an exciting display of aquatic skills.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/flowatskioverview/photo.jpg"
              alt="Florida Citrus Water Ski Show — aquatic skiing performance"
              width={1584}
              height={1075}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/flowatskioverview"
        overviewHref="/flowatskioverview"
        nextHref="/flowatski01"
      />
    </>
  );
}
