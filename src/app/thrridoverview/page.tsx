import type { Metadata } from "next";
import Image from "next/image";
import { ThrridNavChrome } from "@/components/ThrridNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./thrridoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Thrill Rides — Overview — nywf64.com",
  description:
    "Thrill Rides overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thrill Rides overview — follows the **overview** prototype
 * (same stack as /solfountoverview / /spainoverview).
 */
export default function ThrridOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Thrill Rides">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/thrridoverview/hero-banner.jpg"
            alt="Thrill Rides at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ThrridNavChrome />

      <section className={styles.overview} aria-label="Thrill Rides overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Three different rides provide the traditional fun of a fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/thrridoverview/photo.jpg"
              alt="Thrill Rides — historic engraving of fairground rides"
              width={1551}
              height={1014}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/thrridoverview"
        overviewHref="/thrridoverview"
        nextHref="/thrrid01"
      />
    </>
  );
}
