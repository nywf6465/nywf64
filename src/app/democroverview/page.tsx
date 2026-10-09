import type { Metadata } from "next";
import Image from "next/image";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./democroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Demonstration Center — Overview — nywf64.com",
  description:
    "Demonstration Center overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center overview — follows the **overview** prototype
 * (same stack as /danwatoverview / /conparoverview).
 */
export default function DemocroverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Demonstration Center">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/democroverview/hero-banner.jpg"
            alt="Demonstration Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DemocrNavChrome />

      <section
        className={styles.overview}
        aria-label="Demonstration Center overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Everything from shoes to school equipment is on view in the
              modernistic structure.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/democroverview/photo.jpg"
              alt="Demonstration Center — modernistic pavilion at the Fair"
              width={974}
              height={1004}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/democroverview"
        overviewHref="/democroverview"
        nextHref="/democr01"
      />
    </>
  );
}
