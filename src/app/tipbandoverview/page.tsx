import type { Metadata } from "next";
import Image from "next/image";
import { TipbandNavChrome } from "@/components/TipbandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./tipbandoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Tiparillo Band Pavilion — Overview — nywf64.com",
  description:
    "Tiparillo Band Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tiparillo Band Pavilion overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function TipbandOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Tiparillo Band Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/tipbandoverview/hero-banner.jpg"
            alt="Tiparillo Band Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TipbandNavChrome />

      <section
        className={styles.overview}
        aria-label="Tiparillo Band Pavilion overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Free concerts and dancing are offered at a bandshell and large
              outdoor dance floor.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/tipbandoverview/photo.jpg"
              alt="Tiparillo Band Pavilion — nighttime concert under the bandshell"
              width={1547}
              height={1017}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/tipbandoverview"
        overviewHref="/tipbandoverview"
        nextHref="/tipband01"
      />
    </>
  );
}
