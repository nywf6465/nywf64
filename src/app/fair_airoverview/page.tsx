import type { Metadata } from "next";
import Image from "next/image";
import { FairAirNavChrome } from "@/components/FairAirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_airoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Fair from the Air — Overview — nywf64.com",
  description:
    "Aerial photographs of the 1964/1965 New York World’s Fair from the Craig Bavaro and Kevin Carsh collections on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * The Fair from the Air overview — follows the **overview** prototype
 * (same stack as /aertowoverview / /clairoverview).
 */
export default function FairAirOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair from the Air">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_airoverview/airhero.jpg"
            alt="See the Fair from the Air — Sikorsky S-61 Helicopter at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
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
        aria-label="The Fair from the Air overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <BrandMark /> presents 45 photographs from the Craig Bavaro and
              Kevin Carsh collections showing aerial views of the Fair. They are
              an excellent means of studying details of the Fairgrounds long
              forgotten or never remembered.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/fair_airoverview/photo.jpg"
              alt="I Saw the Fair from the Air — Sikorsky S-61 Helicopter souvenir emblem"
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
        previousHref="/fair_airoverview"
        overviewHref="/fair_airoverview"
        nextHref="/fair_air01"
      />
    </>
  );
}
