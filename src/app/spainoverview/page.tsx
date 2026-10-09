import type { Metadata } from "next";
import Image from "next/image";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./spainoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Spain — Overview — nywf64.com",
  description:
    "Spain Pavilion overview at the 1964/1965 New York World’s Fair — great art, fine dining and entertainment on nywf64.com.",
};

/**
 * Spain overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (Spain menu) → overview body → nav2 → footer
 */
export default function SpainOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Spain Pavilion">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/spainoverview/hero-banner.jpg"
            alt="Spain Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SpainNavChrome />

      <section className={styles.overview} aria-label="Spain overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              In a striking modern pavilion, the atmosphere of old Spain forms a
              setting for great art, fine dining and entertainment.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/spainoverview/photo.jpg"
              alt="Spain Pavilion — art, dining and entertainment"
              width={1524}
              height={1032}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/spainoverview"
        overviewHref="/spainoverview"
        nextHref="/spain01"
      />
    </>
  );
}
