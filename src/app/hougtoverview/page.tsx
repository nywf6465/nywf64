import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougtoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "House of Good Taste — Overview — nywf64.com",
  description:
    "House of Good Taste overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * House of Good Taste overview — follows the **overview** prototype
 * (same stack as /honkonoverview / /hawaiioverview).
 */
export default function HougtOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <section
        className={styles.overview}
        aria-label="House of Good Taste overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Three fully furnished houses -- traditional, contemporary and
              modern -- display the latest in comfortable living.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/hougtoverview/photo.jpg"
              alt="House of Good Taste — traditional, contemporary, and modern furnished houses"
              width={1584}
              height={637}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/hougtoverview"
        overviewHref="/hougtoverview"
        nextHref="/hougt01"
      />
    </>
  );
}
