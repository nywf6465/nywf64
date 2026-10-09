import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./worfoooverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "World of Food — Overview — nywf64.com",
  description:
    "World of Food Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World of Food overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (worfoo menu) → overview body → nav2 → footer
 */
export default function WorfooOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="World of Food">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/worfoooverview/hero-banner.jpg"
            alt="World of Food at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WorfooNavChrome />

      <section className={styles.overview} aria-label="World of Food overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The World of Food pavilion was to have housed exhibits relating to
              nutrition and the food industry. The pavillion was started, steel
              framework was erected, but was never completed.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/worfoooverview/photo.jpg"
              alt="World of Food pavilion concept rendering"
              width={1557}
              height={1010}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/worfoooverview"
        overviewHref="/worfoooverview"
        nextHref="/worfoo01"
      />
    </>
  );
}
