import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import {
  adjacentLooksGuidePages,
  getLooksGuidePage,
} from "@/data/looksguidePages";
import styles from "./looksguide02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const PAGE = 2;
const meta = getLooksGuidePage(PAGE)!;
const { previous, next } = adjacentLooksGuidePages(PAGE);

type PanelTile = { src: string; width: number; height: number };

const PANEL_ROWS: PanelTile[][][] = [
  [
    [
      { src: "/images/looksguide02/3.01.jpg", width: 350, height: 176 },
      { src: "/images/looksguide02/3.02.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/3.03.jpg", width: 350, height: 175 },
    ],
    [
      { src: "/images/looksguide02/4.01.jpg", width: 350, height: 176 },
      { src: "/images/looksguide02/4.02.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/4.03.jpg", width: 350, height: 175 },
    ],
  ],
  [
    [
      { src: "/images/looksguide02/5.01.jpg", width: 350, height: 176 },
      { src: "/images/looksguide02/5.02.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/5.03.jpg", width: 350, height: 175 },
    ],
    [
      { src: "/images/looksguide02/6.01.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/6.02.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/6.03.jpg", width: 350, height: 175 },
    ],
  ],
  [
    [
      { src: "/images/looksguide02/7.01.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/7.02.jpg", width: 350, height: 176 },
      { src: "/images/looksguide02/7.03.jpg", width: 350, height: 175 },
    ],
    [
      { src: "/images/looksguide02/8.01.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/8.02.jpg", width: 350, height: 175 },
      { src: "/images/looksguide02/8.03.jpg", width: 350, height: 175 },
    ],
  ],
];

export const metadata: Metadata = {
  title: `LOOK's Guide to the N.Y. World's Fair - ${meta.titleSuffix} — nywf64.com`,
  description:
    "LOOK's Guide to the N.Y. World's Fair — Keys to the City — Look Magazine guide covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * LOOK's Guide to the N.Y. World's Fair — page 02 (legacy looksguide.02.html).
 * Nav bar shows Page 3. No NEXT.
 * Left-hand → looksguide01 (N.Y City); right-hand → looksguide03 (Family Fair Plan).
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Looksguide02Page() {
  const previousHref = previous ? `/${previous.slug}` : "/look01";
  const nextHref = next ? `/${next.slug}` : "/look01";

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

      <article className={styles.article} aria-labelledby="looksguide02-title">
        <header className={styles.titleBar}>
          <h1 id="looksguide02-title" className={styles.titleBarMain}>
            LOOK&apos;s Guide to the N.Y. World&apos;s Fair - {meta.titleSuffix}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {previous ? (
            <p className={styles.handRow}>
              <Link
                href={previousHref}
                aria-label={`Go back to ${previous.handLabel}`}
              >
                <Image
                  src="/images/looksguide02/hand_lf.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.hand}
                  unoptimized
                />
              </Link>{" "}
              <Link href={previousHref} className={styles.handPrompt}>
                Click the Hand
              </Link>
              <span className={styles.handTarget}> to go back to </span>
              <Link href={previousHref} className={styles.handTarget}>
                {previous.handLabel}
              </Link>
            </p>
          ) : null}

          <div className={styles.panelRows}>
            {PANEL_ROWS.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className={styles.panels}>
                {row.map((panel, panelIndex) => (
                  <div
                    key={`panel-${rowIndex}-${panelIndex}`}
                    className={styles.panel}
                    role="group"
                    aria-label="Guide panel"
                  >
                    {panel.map((tile) => (
                      <Image
                        key={tile.src}
                        src={tile.src}
                        alt=""
                        width={tile.width}
                        height={tile.height}
                        unoptimized
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {next ? (
            <p className={styles.handRowEnd}>
              <Link href={nextHref} className={styles.handPrompt}>
                Click the Hand
              </Link>
              <span className={styles.handTarget}> to go to </span>
              <Link href={nextHref} className={styles.handTarget}>
                {next.handLabel}
              </Link>{" "}
              <Link href={nextHref} aria-label={`Go to ${next.handLabel}`}>
                <Image
                  src="/images/looksguide02/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.hand}
                  unoptimized
                />
              </Link>
            </p>
          ) : null}
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref="/periodicalsoverview"
        hideNext
      />
    </>
  );
}
