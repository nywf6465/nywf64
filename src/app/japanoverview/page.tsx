import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Japan — Overview — nywf64.com",
  description:
    "Japan overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Japan overview — follows the **overview** prototype
 * (same stack as /indiaoverview / /irelandoverview).
 * Wired with the shared **Japan menu**.
 * Route slug: `/japanoverview`.
 */
export default function JapanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/japanoverview/hero-banner.jpg"
            alt="Japan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JapanNavChrome />

      <section className={styles.overview} aria-label="Japan overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Executive aircraft, cameras and a high-speed computer share space
              with ancient tea ceremonies befind a finely sculptured stone wall.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/japanoverview/photo.jpg"
              alt="Japan pavilion — exhibits behind a sculptured stone wall"
              width={1584}
              height={1064}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/japan14"
        explicitPrevious
        overviewHref="/japanoverview"
        nextHref="/japan01"
      />
    </>
  );
}
