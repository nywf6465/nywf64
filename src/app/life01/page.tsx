import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./life01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Life Magazine Index — Magazine Articles of the Fair — nywf64.com",
  description:
    "Life Magazine index of articles covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

type LifeIssue = {
  href: string;
  src: string;
  date: string;
  volume: string;
  titles: string[];
  captionPlural?: boolean;
};

/** Body from legacy life01.html — cover thumbs link to article pages. */
const ISSUES: LifeIssue[] = [
  {
    href: "/life631206",
    src: "/images/life01/life631206.jpg",
    date: "December 6, 1963",
    volume: "Vol. 55, No. 23",
    titles: ["Return of the Dinosaurs"],
  },
  {
    href: "/life640117",
    src: "/images/life01/life640117.jpg",
    date: "January 17, 1964",
    volume: "Vol. 56, No. 3",
    titles: [
      "New York's Billion Dollar Dream Fair",
      "Problems and Pavilions",
    ],
    captionPlural: true,
  },
  {
    href: "/life640424",
    src: "/images/life01/life640424.jpg",
    date: "April 24, 1964",
    volume: "Vol. 56, No. 17",
    titles: ["Plot to Throttle the World's Fair"],
  },
  {
    href: "/life640501",
    src: "/images/life01/life640501.jpg",
    date: "May 1, 1964",
    volume: "Vol. 56, No. 18",
    titles: [
      "The Fair is a Smasheroo",
      "The Show Goes On, The Spoilers Lose the Day",
    ],
    captionPlural: true,
  },
  {
    href: "/life640508",
    src: "/images/life01/life640508.jpg",
    date: "May 8, 1964",
    volume: "Vol. 56, No. 19",
    titles: ["Middle Eastern Flare-up at the Fair"],
  },
  {
    href: "/life640807",
    src: "/images/life01/life640807.jpg",
    date: "August 7, 1964",
    volume: "Vol. 57, No. 6",
    titles: ["The Jewel of the Fair", "Fair's $7 Million Fiasco"],
    captionPlural: true,
  },
];

/**
 * Life Magazine Index — Magazine Articles / Periodicals of the Fair.
 * Body from legacy life01.html.
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * No NEXT — index page; covers link out to article routes.
 */
export default function Life01Page() {
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

      <article className={styles.article} aria-labelledby="life01-title">
        <header className={styles.titleBar}>
          <h1 id="life01-title" className={styles.titleBarMain}>
            Life Magazine Index
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
                    alt={`Life Magazine cover — ${issue.date}`}
                    width={100}
                    height={133}
                    className={styles.cover}
                    unoptimized
                  />
                </Link>
                <p className={styles.coverCaption}>
                  {issue.captionPlural
                    ? "(click image for articles)"
                    : "(click image for article)"}
                </p>
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
