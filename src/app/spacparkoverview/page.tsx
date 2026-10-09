import type { Metadata } from "next";
import Image from "next/image";
import { SpacparkNavChrome } from "@/components/SpacparkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spacparkoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Space Park — Overview — nywf64.com",
  description:
    "Space Park overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Space Park overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /lunfountoverview).
 */
export default function SpacparkOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Space Park">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/spacparkoverview/hero-banner.jpg"
            alt="Space Park at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpacparkNavChrome />

      <section
        className={styles.overview}
        aria-label="Space Park overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The dramatic vehicles that are carrying the United States into
              the Space Age are on display.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/spacparkoverview/photo.jpg"
              alt="Space Park — rockets and spacecraft on display at dusk"
              width={1274}
              height={1234}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/spacparkoverview"
        overviewHref="/spacparkoverview"
        nextHref="/spacpark01"
      />
    </>
  );
}
