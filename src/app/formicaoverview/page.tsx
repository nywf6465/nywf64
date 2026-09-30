import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formicaoverview.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Formica — Overview — nywf64.com",
  description:
    "Formica overview at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica overview — follows the **overview** prototype
 * (same stack as /logfluoverview / /flowatskioverview).
 */
export default function FormicaOverviewPage() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <section className={styles.overview} aria-label="Formica overview">
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Visitors can tour a model home which emphasizes the use of
              plastics -- and win its equivalent in a $100,000 contest.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/formicaoverview/photo.jpg"
              alt="Formica — model home emphasizing the use of plastics"
              width={1584}
              height={1566}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/formicaoverview"
        overviewHref="/formicaoverview"
        nextHref="/formica01"
      />
    </>
  );
}
