import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betliv09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  EXHIBITORS_1964_LEFT,
  EXHIBITORS_1964_RIGHT,
  EXHIBITORS_1965_LEFT,
  EXHIBITORS_1965_RIGHT,
  type ExhibitorLine,
} from "./exhibitors";

export const metadata: Metadata = {
  title:
    "Lists of Sub-Exhibitors — Better Living Center — nywf64.com",
  description:
    "Better Living Center sub-exhibitors from the 1964 and 1965 World's Fair Information Manuals on nywf64.com.",
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
 * Better Living Center — Lists of Sub-Exhibitors.
 * Body from legacy betliv09.html (custom two-list page — no shared standard).
 * Legacy spellings (Mnaufacturing, Rubbber, Hendredon, Niagra, Pittsburg,
 * Schumacker, Comnpany) are preserved.
 *
 * Stack: hero → BetlivNavChrome → navy titles → lists → Nav2Bar.
 */
export default function Betliv09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv09-title">
        <header className={styles.titleBar}>
          <h1 id="betliv09-title" className={styles.titleBarMain}>
            List of Sub-Exhibitors from 1964 World&apos;s Fair Information
            Manual
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <NameList items={EXHIBITORS_1964_LEFT} />
            <NameList items={EXHIBITORS_1964_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: World&apos;s Fair Information Manual 1964
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>
            List of Sub-Exhibitors from 1965 World&apos;s Fair Information
            Manual
          </h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.columns}>
            <NameList items={EXHIBITORS_1965_LEFT} />
            <NameList items={EXHIBITORS_1965_RIGHT} />
          </div>
          <p className={styles.source}>
            SOURCE: World&apos;s Fair Information Manual 1965
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv08"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv10"
      />
    </>
  );
}
