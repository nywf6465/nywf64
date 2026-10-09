import type { Metadata } from "next";
import Image from "next/image";
import { ConparNavChrome } from "@/components/ConparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./conparoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Continental Park — Overview — nywf64.com",
  description:
    "Continental Park overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Park overview — follows the **overview** prototype
 * (same stack as /coninsoverview / /conciroverview).
 */
export default function ConparOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Park">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/conparoverview/hero-banner.jpg"
            alt="Continental Park at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConparNavChrome />

      <section
        className={styles.overview}
        aria-label="Continental Park overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              The area includes a children&apos;s zoo, a gorilla compound and
              picnic facilities.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/conparoverview/photo.jpg"
              alt="Continental Park — children's zoo, gorilla compound and picnic facilities"
              width={1276}
              height={880}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/conparoverview"
        overviewHref="/conparoverview"
        nextHref="/conpar01"
      />
    </>
  );
}
