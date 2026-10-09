import type { Metadata } from "next";
import Image from "next/image";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chucanoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Chunky Candy — Overview — nywf64.com",
  description:
    "Chunky Candy overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy overview — follows the **overview** prototype
 * (same stack as /chukininnoverview / /cengrioverview).
 */
export default function ChucanOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Chunky Candy">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/chucanoverview/hero-banner.jpg"
            alt="Chunky Candy at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChucanNavChrome />

      <section className={styles.overview} aria-label="Chunky Candy overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Children can watch candy being made in a glass-walled factory, and
              play in a sculpture garden.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/chucanoverview/photo.jpg"
              alt="Chunky Candy — glass-walled factory and sculpture garden"
              width={1590}
              height={996}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/chucanoverview"
        overviewHref="/chucanoverview"
        nextHref="/chucan01"
      />
    </>
  );
}
