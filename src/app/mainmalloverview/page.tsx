import type { Metadata } from "next";
import Image from "next/image";
import { MainmallNavChrome } from "@/components/MainmallNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./mainmalloverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Main Mall — Overview — nywf64.com",
  description:
    "Main Mall overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Main Mall overview — follows the **overview** prototype
 * (same stack as /lakcruoverview / /koreaoverview).
 * Wired with the shared **mainmall menu**.
 * Route slug: `/mainmalloverview`.
 */
export default function MainmallOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Main Mall">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/mainmalloverview/hero-banner.jpg"
            alt="Main Mall at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MainmallNavChrome />

      <section className={styles.overview} aria-label="Main Mall overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The Fair&apos;s Main Mall ran from Unisphere along the Fountain of
              the Fairs to the Pool of Industry.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/mainmalloverview/photo.jpg"
              alt="Main Mall — view toward Unisphere"
              width={1584}
              height={1098}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/mainmalloverview"
        overviewHref="/mainmalloverview"
        nextHref="/mainmall01"
      />
    </>
  );
}
