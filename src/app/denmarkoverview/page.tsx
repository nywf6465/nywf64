import type { Metadata } from "next";
import Image from "next/image";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./denmarkoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Denmark — Overview — nywf64.com",
  description:
    "Denmark overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark overview — follows the **overview** prototype
 * (same stack as /democroverview / /danwatoverview).
 */
export default function DenmarkOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Denmark">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/denmarkoverview/hero-banner.jpg"
            alt="Denmark at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DenmarkNavChrome />

      <section className={styles.overview} aria-label="Denmark overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Children can romp in a novel playground while parents sample fine
              Danish products in shops, restaurants and sidewalk cafe.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/denmarkoverview/photo.jpg"
              alt="Denmark pavilion — shops, restaurants and sidewalk cafe"
              width={1540}
              height={1028}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/denmarkoverview"
        overviewHref="/denmarkoverview"
        nextHref="/denmark01"
      />
    </>
  );
}
