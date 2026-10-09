import type { Metadata } from "next";
import Image from "next/image";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./astfountoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Astral Fountain — Overview — nywf64.com",
  description:
    "Astral Fountain overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Astral Fountain overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview / /unisphoverview).
 * Stack: header → hero → nav bar (astfount menu) → overview body → nav2 → footer
 */
export default function AstfountOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Astral Fountain">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/astfountoverview/hero-banner.jpg"
            alt="Astral Fountain at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AstfountNavChrome />

      <section className={styles.overview} aria-label="Astral Fountain overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Astral Fountain is a 60-foot in diameter fretwork of stars
              rotating around a 70-foot high column of water.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/astfountoverview/photo.jpg"
              alt="Astral Fountain — fretwork of stars and column of water"
              width={958}
              height={657}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/astfountoverview"
        overviewHref="/astfountoverview"
        nextHref="/astfount01"
      />
    </>
  );
}
