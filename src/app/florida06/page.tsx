import type { Metadata } from "next";
import Image from "next/image";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./florida06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Florida — nywf64.com",
  description:
    "Florida Pavilion sub-exhibitors from the 1964 World's Fair Information Manual on nywf64.com.",
};

const LEFT = [
  "Patricia Murphy Gift Shop",
  "Horne's Enterprises",
  "Sweet Corn Advisory Comm.",
  "Advance Distributors, Inc.",
  "Watson, Hubert & Sously",
  "Fruit Fair Corp.",
  "Lehigh Development Co.",
  "Wometco Vending of Jacksonville",
  "National Airlines",
  "Polk County Development Board",
  "City of Jacksonville",
  "Palm Beach County",
  "Greater Orlando Chamber of Commerce",
  "Broward County",
  "Gulf American Land Corp.",
  "St. Petersburg Chamber of Commerce",
  "Tampa-Hillsborough County",
  { text: "World's Fair Exhibit, Inc.", indent: true },
] as const;

const RIGHT = [
  "Florida Citrus Commission",
  "Florida Fresh Citrus Shippers",
  "Coppertone",
  "Metro, Miami, & Miami Beach Exhibits",
  "Florida Historical and Cultural Arts Exhibit",
  "Florida Universities, Jr. Colleges",
  "Florida Highways, Roads, Attractions",
  "Florida Recreation",
  "Daytona Beach Area Chamber of Commerce",
  "Wellman & Lord Engineering",
  "World's Fair Authority of Brevard County Inc.",
  "Hialeah Race Course",
  "Atlantic Missile Range",
  "Eastern Air Lines",
  "Mackle Brothers",
  "Minute Maid Company",
  "Florida Development Commission",
] as const;

/**
 * Florida — List of Sub-Exhibitors.
 * Body from legacy florida06.html (custom two-column list).
 * Preserve typo: Watson, Hubert & Sously.
 *
 * Stack: hero → FloridaNavChrome → navy title → lists → Nav2Bar.
 */
export default function Florida06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Florida">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/floridaoverview/hero-banner.jpg"
            alt="Florida Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FloridaNavChrome />

      <article className={styles.article} aria-labelledby="florida06-title">
        <header className={styles.titleBar}>
          <h1 id="florida06-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <ul className={styles.names}>
              {LEFT.map((item, index) => {
                const indent = typeof item !== "string";
                const text = typeof item === "string" ? item : item.text;
                return (
                  <li
                    key={`${text}-${index}`}
                    className={indent ? styles.indent : undefined}
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className={styles.names}>
              {RIGHT.map((text, index) => (
                <li key={`${text}-${index}`}>{text}</li>
              ))}
            </ul>
          </div>
          <p className={styles.source}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/florida05"
        explicitPrevious
        overviewHref="/floridaoverview"
        nextHref="/florida07"
      />
    </>
  );
}
