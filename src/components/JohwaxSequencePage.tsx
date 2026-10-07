import type { ReactNode } from "react";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/johwaxSequencePage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export type JohwaxScan = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type JohwaxSequencePageProps = {
  heroLabel: string;
  hero: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
  nav: ReactNode;
  title: ReactNode;
  titleId?: string;
  /** Grid columns (legacy scan galleries use 3). */
  columns?: number;
  scans: readonly JohwaxScan[];
  /** Optional blocks between scan groups (same grid). */
  groups?: readonly (readonly JohwaxScan[])[];
  intro?: ReactNode;
  source?: ReactNode;
  previousHref: string;
  nextHref: string;
  overviewHref?: string;
};

function ScanGrid({
  scans,
  columns,
}: {
  scans: readonly JohwaxScan[];
  columns: number;
}) {
  const rows: JohwaxScan[][] = [];
  for (let i = 0; i < scans.length; i += columns) {
    rows.push(scans.slice(i, i + columns));
  }
  return (
    <>
      {rows.map((row, ri) => (
        <div key={ri} className={styles.row}>
          {row.map((scan) => (
            <figure key={scan.src} className={styles.figure}>
              <Image
                src={scan.src}
                alt={scan.alt ?? ""}
                width={scan.width}
                height={scan.height}
                className={styles.figureArt}
                unoptimized
              />
            </figure>
          ))}
        </div>
      ))}
    </>
  );
}

export function JohwaxSequencePage({
  heroLabel,
  hero,
  nav,
  title,
  titleId = "johwax-sequence-title",
  columns = 3,
  scans,
  groups,
  intro,
  source,
  previousHref,
  nextHref,
  overviewHref,
}: JohwaxSequencePageProps) {
  const scanGroups = groups ?? [scans];

  return (
    <>
      <section className={styles.hero} aria-label={heroLabel}>
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src={hero.src}
            alt={hero.alt ?? ""}
            width={hero.width}
            height={hero.height}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      {nav}

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            {title}
          </h1>
        </header>

        <div className={styles.articleInner}>
          {intro ? <div className={styles.intro}>{intro}</div> : null}
          {scanGroups.map((group, gi) => (
            <div key={gi} className={styles.group}>
              <ScanGrid scans={group} columns={columns} />
            </div>
          ))}
          {source ? <p className={styles.source}>{source}</p> : null}
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        overviewHref={overviewHref}
        nextHref={nextHref}
      />
    </>
  );
}
