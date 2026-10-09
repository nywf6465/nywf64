import type { Metadata } from "next";
import Image from "next/image";
import { BarbufNavChrome } from "@/components/BarbufNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./barbufoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Bar, Buffet and Cafeteria — Overview — nywf64.com",
  description:
    "Bar, Buffet and Cafeteria overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bar, Buffet and Cafeteria overview — follows the **overview** prototype
 * (same stack as /twothooverview / /serscioverview).
 */
export default function BarbufOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Bar, Buffet and Cafeteria">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/barbufoverview/hero-banner.jpg"
            alt="Bar, Buffet and Cafeteria at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BarbufNavChrome />

      <section
        className={styles.overview}
        aria-label="Bar, Buffet and Cafeteria overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              An outside terrace with tables and umbrellas flanks this bar,
              buffet and cafeteria.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/barbufoverview/photo.jpg"
              alt="Bar, Buffet and Cafeteria — outside terrace"
              width={945}
              height={776}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/barbufoverview"
        overviewHref="/barbufoverview"
        nextHref="/barbuf01"
      />
    </>
  );
}
