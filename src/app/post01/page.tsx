import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./post01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Saturday Evening Post Index — Magazine Articles of the Fair — nywf64.com",
  description:
    "Saturday Evening Post index of articles covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

type PostIssue = {
  href: string;
  src: string;
  width: number;
  height: number;
  date: string;
  volume: string;
  titles: ReactNode[];
  caption: string;
};

/** Body from legacy post01.html — cover thumbs link to article pages. */
const ISSUES: PostIssue[] = [
  {
    href: "/post640328",
    src: "/images/post01/post640328.jpg",
    width: 100,
    height: 133,
    date: "March 28, 1964",
    volume: "Vol. 237, No. 12",
    titles: [
      <>
        The <i>Pieta</i>:  Masterpiece at the fair
      </>,
    ],
    caption: "(click image for article)",
  },
  {
    href: "/post640523",
    src: "/images/post01/post640523.jpg",
    width: 100,
    height: 133,
    date: "May 23, 1964",
    volume: "Vol. 237, No. 20",
    titles: [
      "The great fair",
      "The old s.o.b. does it again",
      "Who needs the World's Fair?",
    ],
    caption: "(click image for articles)",
  },
];

/**
 * Saturday Evening Post Index — Magazine Articles / Periodicals of the Fair.
 * Body from legacy post01.html.
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * No NEXT — index page; covers link out to article routes.
 */
export default function Post01Page() {
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

      <article className={styles.article} aria-labelledby="post01-title">
        <header className={styles.titleBar}>
          <h1 id="post01-title" className={styles.titleBarMain}>
            Saturday Evening Post Index
          </h1>
        </header>

        <div className={styles.articleInner}>
          {ISSUES.map((issue) => (
            <div key={issue.href} className={styles.issue}>
              <div className={styles.coverBlock}>
                <Link
                  href={issue.href}
                  className={styles.coverLink}
                  aria-label={`${issue.date} — Saturday Evening Post articles`}
                >
                  <Image
                    src={issue.src}
                    alt={`Saturday Evening Post cover — ${issue.date}`}
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
                  {issue.titles.map((title, i) => (
                    <li key={i}>{title}</li>
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
