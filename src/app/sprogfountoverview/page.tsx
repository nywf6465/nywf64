import type { Metadata } from "next";
import Image from "next/image";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sprogfountoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountain of Progress South — Overview — nywf64.com",
  description:
    "Fountain of Progress South overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Fountain of Progress South overview — follows the **overview** prototype
 * (same stack as /nprogfountoverview / /astfountoverview).
 * Stack: header → hero → nav bar (sprogfount menu) → overview body → nav2 → footer
 */
export default function SprogfountOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of Progress South">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/sprogfountoverview/hero-banner.jpg"
            alt="Fountain of Progress South at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SprogfountNavChrome />

      <section
        className={styles.overview}
        aria-label="Fountain of Progress South overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fountain of Progress South displays a five-point star layout
              of water jets with a sunken basin in the center and a series of
              water streams in the outer area.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/sprogfountoverview/photo.jpg"
              alt="Fountain of Progress South — five-point star layout of water jets"
              width={958}
              height={689}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/sprogfountoverview"
        overviewHref="/sprogfountoverview"
        nextHref="/sprogfount01"
      />
    </>
  );
}
