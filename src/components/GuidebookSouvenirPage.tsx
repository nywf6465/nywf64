import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/guidebookSouvenirPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Official Guidebook & Souvenir Map page (“guidebook” standard).
 * Canonical instance: /bell01. Legacy attraction `*01` pages use this layout.
 *
 * HARD RULE — navy title banner: keep the full-width navy (`#26346e`) title bar
 * immediately beneath the attraction nav. Default text is “1964 & 1965 Official
 * Guidebook & Souvenir Map” (override with `title` when legacy appends “Entries”).
 *
 * Stack: hero → attraction nav → navy title bar → three columns → Nav2Bar.
 * Columns: 1964 Official Guide Book, 1965 Official Guide Book,
 * 1964 Official Souvenir Map.
 *
 * Each caption is three lines, left aligned at the lower right of its cover.
 * Locate It sits at the upper right of the map cover. When `map.locateHref`
 * is omitted, Locate It stays visible but is not a link. Covers keep a 1px
 * frame and have no rule beneath them. The legacy "Revised" line is not shown.
 *
 * When a year sets `omittedFromGuide`, the column shows only the not-included
 * note and cover. Optional `map.entry` places a pavilion block under the map
 * column (legacy amind01 layout).
 *
 * When a year sets `omittedFromGuide`, the column shows only the not-included
 * note and cover. Optional `map.entry` places a pavilion block under the map
 * column (legacy amind01 layout).
 *
 * Type follows the legacy font tags: Times New Roman where no face is set,
 * Arial where face="Arial" is set, at the original HTML size steps.
 * 1964 pavilion names and highlight labels default to Times. 1965 pavilion
 * names and highlight labels default to Arial. The 1964 admission mark is a
 * larger roman asterisk; the 1965 mark is an italic pilcrow.
 *
 * For new guidebooks, copy src/app/bell01/page.tsx and fill props from the
 * legacy *01.html — see AGENTS.md “Guidebook standard”.
 */

export type GuidebookFace = "times" | "arial";

export type GuidebookImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type GuidebookHighlight = {
  label: string;
  body: ReactNode;
  labelFace?: GuidebookFace;
};

export type GuidebookYearContent = {
  cover: GuidebookImage;
  logo?: GuidebookImage;
  /** Pavilion name; may include line breaks (e.g. PORT AUTHORITY / HELIPORT). */
  name?: ReactNode;
  nameFace?: GuidebookFace;
  /** Italic lead sentence. Typical of the 1965 column. */
  summary?: ReactNode;
  copy?: ReactNode;
  /** Sentence(s) after the admission mark, such as "Admission: free." */
  admission?: string | string[];
  highlights?: GuidebookHighlight[];
  /**
   * When true, show the legacy “not included in the Official Guide Book”
   * note above the cover and omit logo / name / copy (e.g. /amind01).
   */
  omittedFromGuide?: boolean;
  /**
   * Optional burgundy italic status note. When `omittedFromGuide` is true,
   * replaces the default not-included sentence. When false, shown under the
   * cover caption block (e.g. /ampthe01 1965 Wonder World / Florida note).
   */
  statusNote?: ReactNode;
};

export type GuidebookMapEntry = {
  logo: GuidebookImage;
  name: ReactNode;
  nameFace?: GuidebookFace;
  copy: ReactNode;
  /** Burgundy italic note under the entry (e.g. “never built”). */
  note?: ReactNode;
};

export type GuidebookMapContent = {
  cover: GuidebookImage;
  areaMap: GuidebookImage;
  locateHref: string;
  /**
   * Noun in the map-column caption (“exhibit”, “fountain”, …).
   * Defaults to “exhibit”.
   */
  subjectNoun?: string;
  /**
   * Optional pavilion block below the map header when guide years omit
   * an entry (legacy layout used by /amind01).
   */
  entry?: GuidebookMapEntry;
};

export type GuidebookSouvenirPageProps = {
  heroLabel: string;
  hero: GuidebookImage;
  nav: ReactNode;
  guide1964: GuidebookYearContent;
  guide1965: GuidebookYearContent;
  map: GuidebookMapContent;
  previousHref: string;
  nextHref: string;
  titleId?: string;
  /**
   * Navy title-bar text. Defaults to the standard guidebook heading.
   * Some legacy pages append “Entries” (e.g. Port Authority).
   */
  title?: string;
};

const DEFAULT_TITLE = "1964 & 1965 Official Guidebook & Souvenir Map";

function Caption1964() {
  return (
    <p className={styles.intro}>
      The description of this
      <br />
      exhibit from the 1964
      <br />
      Official Guide Book
    </p>
  );
}

function Caption1965() {
  return (
    <p className={styles.intro}>
      The description of this
      <br />
      exhibit from the 1965
      <br />
      Official Guide Book
    </p>
  );
}

function CaptionMap({ subjectNoun = "exhibit" }: { subjectNoun?: string }) {
  return (
    <p className={styles.intro}>
      The location of this
      <br />
      {subjectNoun} on the 1964
      <br />
      Official Souvenir Map
    </p>
  );
}

function Admission({
  year,
  text,
}: {
  year: 1964 | 1965;
  text: string | string[];
}) {
  const lines = Array.isArray(text) ? text : [text];

  if (year === 1964) {
    return (
      <>
        {lines.map((line) => (
          <p key={line} className={styles.admission}>
            <strong className={styles.admissionStar}>* </strong>
            {line}
          </p>
        ))}
      </>
    );
  }

  return (
    <>
      {lines.map((line) => (
        <p key={line} className={styles.admission}>
          <strong>&para; </strong>
          {line}
        </p>
      ))}
    </>
  );
}

function OmittedFromGuideNote({
  year,
  note,
}: {
  year: 1964 | 1965;
  note?: ReactNode;
}) {
  return (
    <p className={styles.omittedNote}>
      {note ?? (
        <>
          A description of this exhibit was not included in the {year} Official
          Guide Book
        </>
      )}
    </p>
  );
}

function GuideColumn({
  year,
  guide,
  label,
}: {
  year: 1964 | 1965;
  guide: GuidebookYearContent;
  label: string;
}) {
  const nameFace = guide.nameFace ?? (year === 1965 ? "arial" : "times");
  const defaultLabelFace: GuidebookFace = year === 1965 ? "arial" : "times";
  const highlights = guide.highlights ?? [];
  const omitted = Boolean(guide.omittedFromGuide);

  if (omitted) {
    return (
      <section className={styles.col} aria-label={label}>
        <OmittedFromGuideNote year={year} note={guide.statusNote} />
        <Image
          src={guide.cover.src}
          alt={
            guide.cover.alt ??
            (year === 1964 ? "Cover — 1964 Guidebook" : "Cover — 1965 Guidebook")
          }
          width={guide.cover.width}
          height={guide.cover.height}
          className={styles.cover}
          unoptimized
        />
      </section>
    );
  }

  return (
    <section className={styles.col} aria-label={label}>
      <div className={styles.entryHead}>
        <Image
          src={guide.cover.src}
          alt={
            guide.cover.alt ??
            (year === 1964 ? "Cover — 1964 Guidebook" : "Cover — 1965 Guidebook")
          }
          width={guide.cover.width}
          height={guide.cover.height}
          className={styles.cover}
          unoptimized
        />
        {year === 1964 ? <Caption1964 /> : <Caption1965 />}
      </div>
      {guide.statusNote ? (
        <p className={styles.omittedNote}>{guide.statusNote}</p>
      ) : null}
      {guide.logo ? (
        <Image
          src={guide.logo.src}
          alt={guide.logo.alt ?? ""}
          width={guide.logo.width}
          height={guide.logo.height}
          className={styles.logo}
          unoptimized
        />
      ) : null}
      {guide.name ? (
        <p
          className={
            nameFace === "arial"
              ? `${styles.pavilionName} ${styles.pavilionNameSans}`
              : styles.pavilionName
          }
        >
          {guide.name}
        </p>
      ) : null}
      {guide.summary ? <p className={styles.summary}>{guide.summary}</p> : null}
      {guide.copy ? <p className={styles.copy}>{guide.copy}</p> : null}
      {year === 1964 && guide.admission ? (
        <Admission year={1964} text={guide.admission} />
      ) : null}
      {highlights.length > 0 ? (
        <>
          {year === 1964 ? (
            <p className={styles.highlightsLabel}>Highlights</p>
          ) : null}
          {highlights.map((item) => {
            const labelFace = item.labelFace ?? defaultLabelFace;
            return (
              <p
                key={item.label}
                className={
                  labelFace === "arial"
                    ? `${styles.highlight} ${styles.highlightSans}`
                    : styles.highlight
                }
              >
                <strong>{item.label} </strong>
                {item.body}
              </p>
            );
          })}
        </>
      ) : null}
      {year === 1965 && guide.admission ? (
        <Admission year={1965} text={guide.admission} />
      ) : null}
    </section>
  );
}

function MapColumn({ map }: { map: GuidebookMapContent }) {
  const entry = map.entry;
  const nameFace = entry?.nameFace ?? "times";

  return (
    <section className={styles.col} aria-label="1964 Official Souvenir Map">
      <div
        className={
          multiLocate
            ? `${styles.entryHead} ${styles.entryHeadMultiLocate}`
            : styles.entryHead
        }
      >
        <Image
          src={map.cover.src}
          alt={map.cover.alt ?? "Cover — 1964 Official Souvenir Map"}
          width={map.cover.width}
          height={map.cover.height}
          className={styles.mapCover}
          unoptimized
        />
        <div className={styles.mapSide}>
          <div
            className={
              multiLocate ? styles.locates : undefined
            }
          >
            {locates.map((item) => (
              <div
                key={item.locateHref}
                className={styles.locate}
              >
                <Link href={item.locateHref}>
                  <Image
                    src={item.areaMap.src}
                    alt={item.areaMap.alt ?? "Area map"}
                    width={item.areaMap.width}
                    height={item.areaMap.height}
                    className={styles.areaMap}
                    unoptimized
                  />
                </Link>
                <Link href={item.locateHref} className={styles.locateLink}>
                  Locate It
                </Link>
              </div>
            ))}
          </div>
          <CaptionMap subjectNoun={map.subjectNoun} />
        </div>
      </div>
      {entry ? (
        <div className={styles.mapEntry}>
          <Image
            src={entry.logo.src}
            alt={entry.logo.alt ?? ""}
            width={entry.logo.width}
            height={entry.logo.height}
            className={styles.logo}
            unoptimized
          />
          <p
            className={
              nameFace === "arial"
                ? `${styles.pavilionName} ${styles.pavilionNameSans}`
                : styles.pavilionName
            }
          >
            {entry.name}
          </p>
          <p className={styles.copy}>{entry.copy}</p>
          {entry.note ? <p className={styles.statusNote}>{entry.note}</p> : null}
        </div>
      ) : null}
    </section>
  );
}

export function GuidebookSouvenirPage({
  heroLabel,
  hero,
  nav,
  guide1964,
  guide1965,
  map,
  previousHref,
  nextHref,
  titleId = "guidebook-souvenir-title",
  title = DEFAULT_TITLE,
}: GuidebookSouvenirPageProps) {
  return (
    <>
      <section className={styles.hero} aria-label={heroLabel}>
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
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

        <div className={styles.columns}>
          <GuideColumn
            year={1964}
            guide={guide1964}
            label="1964 Official Guide Book"
          />
          <GuideColumn
            year={1965}
            guide={guide1965}
            label="1965 Official Guide Book"
          />
          <MapColumn map={map} />
        </div>
      </article>

      <Nav2Bar
        previousHref={previousHref}
        explicitPrevious
        nextHref={nextHref}
      />
    </>
  );
}
