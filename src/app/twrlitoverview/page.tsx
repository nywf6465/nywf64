import type { Metadata } from "next";
import Image from "next/image";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twrlitoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Tower of Light — Overview — nywf64.com",
  description:
    "Tower of Light Pavilion overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tower of Light overview — follows the **overview** prototype
 * (canonical instance: /illinoisoverview).
 * Stack: header → hero → nav bar (twrlit menu) → overview body → nav2 → footer
 */
export default function TwrlitOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Tower of Light">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/twrlitoverview/hero-banner.jpg"
            alt="Tower of Light at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwrlitNavChrome />

      <section className={styles.overview} aria-label="Tower of Light overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              A musical show depicts the benefits of electricity. Pointing
              skyward from the pavilion is the world&apos;s most powerful
              searchlight.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/twrlitoverview/photo.jpg"
              alt="Tower of Light Pavilion illuminated at night"
              width={1576}
              height={998}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/twrlitoverview"
        overviewHref="/twrlitoverview"
        nextHref="/twrlit01"
      />
    </>
  );
}
