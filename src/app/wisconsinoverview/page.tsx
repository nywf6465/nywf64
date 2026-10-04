import type { Metadata } from "next";
import Image from "next/image";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wisconsinoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Wisconsin — Overview — nywf64.com",
  description:
    "Wisconsin Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (wisconsin menu) → overview body → nav2 → footer
 */
export default function WisconsinOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Wisconsin">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/wisconsinoverview/hero-banner.jpg"
            alt="Wisconsin at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WisconsinNavChrome />

      <section className={styles.overview} aria-label="Wisconsin overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A big, stylized tepee rises above state exhibits, including the
              world&apos;s largest cheese.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wisconsinoverview/photo.jpg"
              alt="Wisconsin Pavilion at the Fair"
              width={1737}
              height={905}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/wisconsinoverview"
        overviewHref="/wisconsinoverview"
        nextHref="/wisconsin01"
      />
    </>
  );
}
