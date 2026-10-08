import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelers18.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    'The Demise of "The Triumph of Man" — Travelers Insurance — nywf64.com',
  description:
    'The Demise of "The Triumph of Man" — Travelers Insurance at the 1964/1965 New York World’s Fair on nywf64.com.',
};

/** Travelers — Demise of Triumph of Man (legacy travelers18.html). */
export default function Travelers18Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={styles.article} aria-labelledby="travelers18-title">
        <header className={styles.titleBar}>
          <h1 id="travelers18-title" className={styles.titleBarMain}>
            The Demise of &quot;The Triumph of Man&quot;
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.quoteWrap}>
            <p>
              In the course of COSI&apos;s move to new facilities in November of
              1999, the &quot;Triumph of Man&quot; exhibit was{" "}
              <u>demolished</u>. A correspondence from the COSI Public
              Relations Staff stated:
            </p>
            <blockquote className={styles.quoteBlock}>
              <p>Tuesday, July 25, 2000</p>
              <p>
                &quot;After more than 30 years on display at COSI, the Triumph of
                Man exhibit was disposed of during the course of our move to the
                new COSI center when we opened in November 1999. The exhibit
                just did not fit in the new facility. It also was in bad repair
                due to the ravages of time. We did use a small part of it within
                our History of COSI exhibit which features icons from our former
                home.&quot;
              </p>
              <p>COSI PR</p>
            </blockquote>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers17"
        overviewHref="/travelersoverview"
        nextHref="/travelersoverview"
      />
    </>
  );
}
