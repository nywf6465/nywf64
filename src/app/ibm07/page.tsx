import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibm07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Construction — IBM Pavilion — nywf64.com",
  description:
    "Construction photographs of the IBM Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM Construction page — body from legacy ibm07.html.
 * Stack: hero → IbmNavChrome → navy title → photos → Nav2Bar.
 */
export default function Ibm07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={styles.article} aria-labelledby="ibm07-title">
        <header className={styles.titleBar}>
          <h1 id="ibm07-title" className={styles.titleBarMain}>
            Construction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/ibm07/ibm36.jpg"
              alt="Steelwork"
              width={381}
              height={478}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              NEW YORK, September 30[, 1963] ... Viewed from the southeast corner,
              the IBM Pavilion at the New York World&apos;s Fair site begins to
              take form. The exterior scaffolding is erected in preparation for
              the application of a sprayed-concrete shell which will enclose the
              90-foot high Information Machine -- the main attraction of the
              pavilion.
            </figcaption>
            <p className={styles.source}>
              SOURCE: Courtesy: Gary Holmes Collection
            </p>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm07/ibm33.jpg"
              alt="Steel Frame"
              width={400}
              height={343}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm07/ibm34.jpg"
              alt="Covering the Ovoid Theater"
              width={397}
              height={270}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm07/ibm35.jpg"
              alt="Completing superstructure"
              width={478}
              height={297}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/ibm07/ibm39.jpg"
              alt="IBM Nears Completion"
              width={460}
              height={355}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>Source: online Auction</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ibm06"
        overviewHref="/ibmoverview"
        nextHref="/ibm08"
      />
    </>
  );
}
