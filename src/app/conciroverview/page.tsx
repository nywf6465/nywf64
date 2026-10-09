import type { Metadata } from "next";
import Image from "next/image";
import { ConcirNavChrome } from "@/components/ConcirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./conciroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Continental Circus — Overview — nywf64.com",
  description:
    "Continental Circus overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Circus overview — follows the **overview** prototype
 * (same stack as /cokeoverview / /clairoverview).
 */
export default function ConcirOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Circus">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/conciroverview/hero-banner.jpg"
            alt="Continental Circus at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConcirNavChrome />

      <section
        className={styles.overview}
        aria-label="Continental Circus overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A European-style one-ring circus has been assembled beneath a
              white and yellow plastic structure that seats 5,000.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/conciroverview/photo.jpg"
              alt="Continental Circus — white and yellow tent seating 5,000"
              width={1585}
              height={998}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/conciroverview"
        overviewHref="/conciroverview"
        nextHref="/concir01"
      />
    </>
  );
}
