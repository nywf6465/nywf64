import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./newsweek01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Newsweek Magazine Index — Magazine Articles of the Fair — nywf64.com",
  description:
    "Newsweek Magazine index of articles covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

type NewsweekIssue = {
  href: string;
  src: string;
  width: number;
  height: number;
  date: string;
  volume: string;
  titles: string[];
  caption: string;
};

/** Body from legacy newsweek01.html — cover thumb links to article page. */
const ISSUES: NewsweekIssue[] = [
  {
    href: "/newsweek640113",
    src: "/images/newsweek01/newsweek640113.jpg",
    width: 100,
    height: 132,
    date: "January 13, 1964",
    volume: "Vol. 63, No. 2",
    titles: ["World's Fair '64:  A Preview"],
    caption: "(click image for article)",
  },
];

/**
 * Newsweek Magazine Index — Magazine Articles / Periodicals of the Fair.
 * Body from legacy newsweek01.html.
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * No NEXT — index page; cover links out to the article route.
 */
export default function Newsweek01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Magazine Articles of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/periodicals/periodicalshero.jpg"
            alt='The “Magazine Articles on the Fair” — periodicals covering the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PeriodicalsNavChrome />

      <article className={styles.article} aria-labelledby="newsweek01-title">
        <header className={styles.titleBar}>
          <h1 id="newsweek01-title" className={styles.titleBarMain}>
            Newsweek Magazine Index
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue) => (
            <div key={issue.href} className={styles.issue}>
              <div className={styles.coverBlock}>
                <Link
                  href={issue.href}
                  className={styles.coverLink}
                  aria-label={`${issue.date} — ${issue.titles.join("; ")}`}
                >
                  <Image
                    src={issue.src}
                    alt={`Newsweek Magazine cover — ${issue.date}`}
                    width={issue.width}
                    height={issue.height}
                    className={styles.cover}
                    unoptimized
                  />
                </Link>
                <p className={styles.coverCaption}>{issue.caption}</p>
              </div>

              <div className={styles.meta}>
                <p className={styles.date}>{issue.date}</p>
                <p className={styles.volume}>{issue.volume}</p>
                <ul className={styles.titles}>
                  {issue.titles.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/periodicalsoverview"
        explicitPrevious
        overviewHref="/periodicalsoverview"
        hideNext
      />
    </>
  );
}
