import type { Metadata } from "next";
import Image from "next/image";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fesgasoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Festival of Gas — Overview — nywf64.com",
  description:
    "Festival of Gas overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas overview — follows the **overview** prototype
 * (same stack as /equitoverview / /towersoverview).
 */
export default function FesgasOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Festival of Gas">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/fesgasoverview/hero-banner.jpg"
            alt="Festival of Gas at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FesgasNavChrome />

      <section
        className={styles.overview}
        aria-label="Festival of Gas overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The U.S. gas industry presents cooking demonstrations, a movie,
              and displays of industrial and domestic equipment.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fesgasoverview/photo.jpg"
              alt="Festival of Gas pavilion — cooking demonstrations and equipment displays"
              width={1584}
              height={992}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/fesgasoverview"
        overviewHref="/fesgasoverview"
        nextHref="/fesgas01"
      />
    </>
  );
}
