import type { Metadata } from "next";
import Image from "next/image";
import { EquitNavChrome } from "@/components/EquitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./equitoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Equitable Life Assurance Society — Overview — nywf64.com",
  description:
    "Equitable Life Assurance Society overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Equitable Life Assurance Society overview — follows the **overview** prototype
 * (same stack as /easternoverview / /towersoverview).
 */
export default function EquitOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Equitable Life Assurance Society"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/equitoverview/hero-banner.jpg"
            alt="Equitable Life Assurance Society of the United States at the 1964/1965 New York World’s Fair"
            width={2066}
            height={761}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EquitNavChrome />

      <section
        className={styles.overview}
        aria-label="Equitable Life Assurance Society overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A tabulator flashes the exact U.S. population every 12 seconds;
              displays chart population trends around the world.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/equitoverview/photo.jpg"
              alt="Equitable Life Assurance Society pavilion with population tabulator"
              width={1584}
              height={976}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/equitoverview"
        overviewHref="/equitoverview"
        nextHref="/equit01"
      />
    </>
  );
}
