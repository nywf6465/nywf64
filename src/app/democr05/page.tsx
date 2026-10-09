import type { Metadata } from "next";
import Image from "next/image";
import { DemocrNavChrome } from "@/components/DemocrNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./democr05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import { EXHIBITORS_LEFT, EXHIBITORS_RIGHT } from "./exhibitors";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Demonstration Center — nywf64.com",
  description:
    "Demonstration Center sub-exhibitors from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Demonstration Center — List of Sub-Exhibitors.
 * Body from legacy democr05.html (custom two-column list — no PDF brochure).
 * User asked for brochure standard; legacy page is a sourced name list (same
 * pattern as /betliv09), so this uses that layout.
 * Legacy spellings (Manfuacturing, Assocaition, Comnpany, Congreations, Galler)
 * preserved.
 *
 * Stack: hero → DemocrNavChrome → navy title → two-column list → Nav2Bar.
 */
export default function Democr05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Demonstration Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/democroverview/hero-banner.jpg"
            alt="Demonstration Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={825}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DemocrNavChrome />

      <article className={styles.article} aria-labelledby="democr05-title">
        <header className={styles.titleBar}>
          <h1 id="democr05-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <ul className={styles.names}>
              {EXHIBITORS_LEFT.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <ul className={styles.names}>
              {EXHIBITORS_RIGHT.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <p className={styles.source}>
            SOURCE: 1965 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/democr04"
        explicitPrevious
        overviewHref="/democroverview"
        nextHref="/democroverview"
      />
    </>
  );
}
