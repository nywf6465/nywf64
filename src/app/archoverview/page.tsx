import type { Metadata } from "next";
import Image from "next/image";
import { ArchNavChrome } from "@/components/ArchNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./archoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Architectural Series of Slides — Overview — nywf64.com",
  description:
    "The Architectural Series of slides — Photo Lab of Washington, D.C. architectural drawings and models of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Architectural Series of Slides overview — follows the **overview** prototype
 * (same stack as /periodicalsoverview / /minimodsoverview / /booksoverview).
 * Hero sized to match ibm01 / ibmoverview (1905×826). No Page notation.
 */
export default function ArchOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Architectural Series of Slides"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/arch/archhero.jpg"
            alt="The Architectural Series of Slides — 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ArchNavChrome />

      <section
        className={styles.overview}
        aria-label="Architectural Series of Slides overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <em>Enjoy our presentation of</em>{" "}
              <strong>
                <em>The Architectural Series</em>
              </strong>{" "}
              of slides produced by Photo Lab of Washington, D.C. The 1964-1965
              New York World&apos;s Fair Corporation spared no expense in
              commissioning prominent artists and model makers to create
              beautiful architectural drawings and models to advertise the Fair.
              The slide tray is set up with over 100 of these beautiful
              illustrations for you to explore.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/archoverview/photo.jpg"
              alt="Architect's renderings — Unisphere (Weinrich Horizontal), New York World's Fair 1964-1965 attractions"
              width={1254}
              height={1254}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/archoverview"
        nextHref="/archtray"
      />
    </>
  );
}
