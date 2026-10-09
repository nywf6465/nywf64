import type { Metadata } from "next";
import Image from "next/image";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./haleduoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Hall of Education — Overview — nywf64.com",
  description:
    "Hall of Education overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education overview — follows the **overview** prototype
 * (same stack as /guineaoverview / /greeceoverview).
 */
export default function HaleduOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Education">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/haleduoverview/hero-banner.jpg"
            alt="Hall of Education at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HaleduNavChrome />

      <section className={styles.overview} aria-label="Hall of Education overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The changing goals, methods and tools of education in America are
              the concern of the exhibitors in this pavilion.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/haleduoverview/photo.jpg"
              alt="Hall of Education — changing goals, methods and tools of education"
              width={1584}
              height={985}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/haleduoverview"
        overviewHref="/haleduoverview"
        nextHref="/haledu01"
      />
    </>
  );
}
