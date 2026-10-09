import type { Metadata } from "next";
import Image from "next/image";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./indonesoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Indonesia — Overview — nywf64.com",
  description:
    "Indonesia overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Indonesia overview — follows the **overview** prototype
 * (same stack as /indiaoverview / /hawaiioverview).
 * Route slug: `/indonesoverview`.
 */
export default function IndonesOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Indonesia">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/indonesoverview/hero-banner.jpg"
            alt="Indonesia at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IndonesNavChrome />

      <section className={styles.overview} aria-label="Indonesia overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Highlights among many displays is a large theater-restaurant where
              Javanese and Balinese dancers and musicians perform.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/indonesoverview/photo.jpg"
              alt="Indonesia — theater-restaurant with Javanese and Balinese dancers and musicians"
              width={1584}
              height={1365}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/indonesoverview"
        overviewHref="/indonesoverview"
        nextHref="/indones01"
      />
    </>
  );
}
