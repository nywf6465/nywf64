import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/guidebookSouvenirPage.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Official Guidebook & Souvenir Map page.
 * Canonical instance: /bell01. Legacy attraction `*01` pages use this layout.
 *
 * Stack: hero → attraction nav → title bar → three columns → nav2.
 * Columns: 1964 Official Guide Book, 1965 Official Guide Book,
 * 1964 Official Souvenir Map.
 *
 * Each caption is three lines, left aligned at the lower right of its cover.
 * Locate It sits at the upper right of the map cover. Covers keep a 1px frame
 * and have no rule beneath them. The legacy "Revised" line is not shown.
 *
 * Type follows the legacy font tags: Times New Roman where no face is set,
 * Arial where face="Arial" is set, at the original HTML size steps.
 * 1964 pavilion names and highlight labels default to Times. 1965 pavilion
 * names and highlight labels default to Arial. The 1964 admission mark is a
 * larger roman asterisk; the 1965 mark is an italic pilcrow.
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
  logo: GuidebookImage;
  name: string;
  nameFace?: GuidebookFace;
  /** Italic lead sentence. Typical of the 1965 column. */
  summary?: ReactNode;
  copy: ReactNode;
  /** Sentence after the admission mark, such as "Admission: free." */
  admission?: string;
  highlights?: GuidebookHighlight[];
};

export type GuidebookMapContent = {
  cover: GuidebookImage;
  areaMap: GuidebookImage;
  locateHref: string;
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
};

const TITLE = "1964 & 1965 Official Guidebook & Souvenir Map";

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

function CaptionMap() {
  return (
    <p className={styles.intro}>
      The location of this
      <br />
      exhibit on the 1964
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
  text: string;
}) {
  if (year === 1964) {
    return (
      <p className={styles.admission}>
        <strong className={styles.admissionStar}>* </strong>
        {text}
      </p>
    );
  }

  return (
    <p className={styles.admission}>
      <strong>&para; </strong>
      {text}
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
      <Image
        src={guide.logo.src}
        alt={guide.logo.alt ?? ""}
        width={guide.logo.width}
        height={guide.logo.height}
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
        {guide.name}
      </p>
      {guide.summary ? <p className={styles.summary}>{guide.summary}</p> : null}
      <p className={styles.copy}>{guide.copy}</p>
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
  return (
    <section className={styles.col} aria-label="1964 Official Souvenir Map">
      <div className={styles.entryHead}>
        <Image
          src={map.cover.src}
          alt={map.cover.alt ?? "Cover — 1964 Official Souvenir Map"}
          width={map.cover.width}
          height={map.cover.height}
          className={styles.mapCover}
          unoptimized
        />
        <div className={styles.mapSide}>
          <div className={styles.locate}>
            <Link href={map.locateHref}>
              <Image
                src={map.areaMap.src}
                alt={map.areaMap.alt ?? "Industrial area map"}
                width={map.areaMap.width}
                height={map.areaMap.height}
                className={styles.areaMap}
                unoptimized
              />
            </Link>
            <Link href={map.locateHref} className={styles.locateLink}>
              Locate It
            </Link>
          </div>
          <CaptionMap />
        </div>
      </div>
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
            {TITLE}
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
