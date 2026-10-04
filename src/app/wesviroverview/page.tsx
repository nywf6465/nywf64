import type { Metadata } from "next";
import Image from "next/image";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wesviroverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "West Virginia — Overview — nywf64.com",
  description:
    "West Virginia Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (wesvir menu) → overview body → nav2 → footer
 */
export default function WesvirOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="West Virginia">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/wesviroverview/hero-banner.jpg"
            alt="West Virginia at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WesvirNavChrome />

      <section className={styles.overview} aria-label="West Virginia overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Highlights include a trip through a coal mine, an exhibition of
              glassblowing and a chance to win a mountaintop vacation home.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wesviroverview/photo.jpg"
              alt="West Virginia Pavilion at the Fair"
              width={1458}
              height={1079}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/wesviroverview"
        overviewHref="/wesviroverview"
        nextHref="/wesvir01"
      />
    </>
  );
}
