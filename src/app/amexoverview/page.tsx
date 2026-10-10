import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amexoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "American Express — Overview — nywf64.com",
  description:
    "American Express overview at the 1964/1965 New York World’s Fair — Attractions from A to Z on nywf64.com.",
};

/**
 * American Express overview — follows the **overview** prototype
 * (same stack as /allstaoverview / /alaskaoverview / /africaoverview).
 */
export default function AmexOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <section
        className={styles.overview}
        aria-label="American Express overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Featured are banking and travel services, an international
              &quot;money tree,&quot; an art exhibit and a huge scale model of
              the Fair.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/amexoverview/photo.jpg"
              alt="American Express pavilion"
              width={1530}
              height={1028}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/amexoverview"
        overviewHref="/amexoverview"
        nextHref="/amex01"
      />
    </>
  );
}
