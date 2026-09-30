import type { Metadata } from "next";
import Image from "next/image";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./greyhoundoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Greyhound — Overview — nywf64.com",
  description:
    "Greyhound overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound overview — follows the **overview** prototype
 * (same stack as /greeceoverview / /genfoooverview).
 */
export default function GreyhoundOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <section className={styles.overview} aria-label="Greyhound overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Among the highlights are travel exhibits, regional cooking and a
              canine fashion show.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/greyhoundoverview/photo.jpg"
              alt="Greyhound — travel exhibits, cooking, and canine fashion show"
              width={1584}
              height={1584}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/greyhoundoverview"
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound01"
      />
    </>
  );
}
