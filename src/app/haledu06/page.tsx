import type { Metadata } from "next";
import Image from "next/image";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./haledu06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  EXHIBITORS_1964_LEFT,
  EXHIBITORS_1964_RIGHT,
  type ExhibitorLine,
} from "./exhibitors";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Hall of Education — nywf64.com",
  description:
    "Hall of Education sub-exhibitors from the 1964 World's Fair Information Manual on nywf64.com.",
};

function NameList({ items }: { items: ExhibitorLine[] }) {
  return (
    <ul className={styles.names}>
      {items.map((item, index) => {
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
  );
}

/**
 * Hall of Education — List of Sub-Exhibitors.
 * Body from legacy haledu06.html (custom list page — no shared standard).
 * Legacy spellings (Compay, Inc/, Modernfold doors, etc.) are preserved.
 *
 * Stack: hero → HaleduNavChrome → navy title → list → Nav2Bar.
 */
export default function Haledu06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Hall of Education">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/haleduoverview/hero-banner.jpg"
            alt="Hall of Education at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HaleduNavChrome />

      <article className={styles.article} aria-labelledby="haledu06-title">
        <header className={styles.titleBar}>
          <h1 id="haledu06-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <NameList items={EXHIBITORS_1964_LEFT} />
            <NameList items={EXHIBITORS_1964_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: 1964 World&apos;s Fair Information Manual
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/haledu05"
        explicitPrevious
        overviewHref="/haleduoverview"
        nextHref="/haledu07"
      />
    </>
  );
}
