import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PeriodicalsNavChrome } from "@/components/PeriodicalsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import {
  adjacentLooksGuidePages,
  getLooksGuidePage,
} from "@/data/looksguidePages";
import styles from "./looksguide07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

const PAGE = 7;
const meta = getLooksGuidePage(PAGE)!;
const { previous, next } = adjacentLooksGuidePages(PAGE);

type PanelTile = { src: string; width: number; height: number };

function panel(n: number, heights: [number, number, number]): PanelTile[] {
  return [1, 2, 3].map((s, i) => ({
    src: `/images/looksguide07/${n}.${s}.jpg`,
    width: 350,
    height: heights[i],
  }));
}

const PANEL_ROWS: PanelTile[][][] = [
  [panel(23, [175, 175, 175]), panel(24, [175, 175, 175])],
  [panel(25, [176, 175, 175]), panel(26, [175, 175, 175])],
  [panel(27, [175, 175, 175]), panel(28, [175, 175, 175])],
  [panel(29, [175, 176, 175]), panel(30, [175, 175, 175])],
  [panel(31, [176, 175, 175]), panel(32, [175, 175, 175])],
];

export const metadata: Metadata = {
  title: `LOOK's Guide to the N.Y. World's Fair - ${meta.titleSuffix} — nywf64.com`,
  description:
    "LOOK's Guide to the N.Y. World's Fair — What You'll See and Do — Look Magazine guide covering the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * LOOK's Guide to the N.Y. World's Fair — page 07 (legacy looksguide.07.html).
 * Nav bar shows Page 8. No NEXT.
 * Left-hand → looksguide06; right-hand → looksguide08.
 *
 * Stack: periodicalshero → PeriodicalsNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Looksguide07Page() {
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

      <article className={styles.article} aria-labelledby="looksguide07-title">
        <header className={styles.titleBar}>
          <h1 id="looksguide07-title" className={styles.titleBarMain}>
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
                  src="/images/looksguide07/hand_lf.gif"
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
                {row.map((p, panelIndex) => (
                  <div
                    key={`panel-${rowIndex}-${panelIndex}`}
                    className={styles.panel}
                    role="group"
                    aria-label="Guide panel"
                  >
                    {p.map((tile) => (
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
                  src="/images/looksguide07/hand_rg.gif"
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
