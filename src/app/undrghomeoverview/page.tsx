import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./undrghomeoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Underground World Home — Overview — nywf64.com",
  description:
    "Underground World Home overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (undrghome menu) → overview body → nav2 → footer
 */
export default function UndrghomeOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <section
        className={styles.overview}
        aria-label="Underground World Home overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The advantages of underground living are realistically displayed
              in an ultramodern 10-room house built below the earth&apos;s
              surface.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/undrghomeoverview/photo.jpg"
              alt="Underground Home pavilion exterior at the Fair"
              width={1635}
              height={962}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/undrghomeoverview"
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome01"
      />
    </>
  );
}
