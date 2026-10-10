import type { Metadata } from "next";
import Image from "next/image";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_airoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "See the Fair from the Air — Overview — nywf64.com",
  description:
    "See the Fair from the Air overview — aerial photographs of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * See the Fair from the Air overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /fair_eraoverview).
 * Shared erahero is reused on later fair_air pages.
 */
export default function FairAirOverviewPage() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="See the Fair from the Air"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_air/erahero.jpg"
            alt="See the Fair from the Air — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairAirNavChrome />

      <section
        className={styles.overview}
        aria-label="See the Fair from the Air overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              nywf64.com presents 45 photographs from the Craig Bavaro and Kevin
              Karsh collections showing the Fair from the air.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fair_airoverview/photo.jpg"
              alt="I Saw the Fair from the Air — Sikorsky S-61 Helicopter souvenir"
              width={1536}
              height={1024}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        overviewHref="/fair_airoverview"
        nextHref="/fair_air01"
      />
    </>
  );
}
