import type { Metadata } from "next";
import Image from "next/image";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fouconoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fountain of the Continents — Overview — nywf64.com",
  description:
    "Fountain of the Continents overview at the 1964/1965 New York World’s Fair — Fountains, Lighting & Effects on nywf64.com.",
};

/**
 * Fountain of the Continents overview — follows the **overview** prototype
 * (same stack as /sprogfountoverview / /nprogfountoverview / /astfountoverview).
 */
export default function FouconOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Fountain of the Continents ">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fouconoverview/hero-banner.jpg"
            alt="Fountain of the Continents "
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FouconNavChrome />

      <section
        className={styles.overview}
        aria-label="Fountain of the Continents overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fountain of the Continents rings Unisphere in its reflecting
              pool. The rising and falling of the water streams are meant to
              suggest the rotation of the globe.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fouconoverview/photo.jpg"
              alt="Fountain of the Continents — water streams ringing Unisphere"
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
        previousHref="/fouconoverview"
        overviewHref="/fouconoverview"
        nextHref="/foucon01"
      />
    </>
  );
}
