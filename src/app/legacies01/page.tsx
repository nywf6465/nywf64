import type { Metadata } from "next";
import Image from "next/image";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legacies01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: '"The List" — The Fair that Survived — nywf64.com',
  description:
    "The List of buildings to be relocated after the 1964/1965 New York World’s Fair — from the archives of the New York World’s Fair 1964-1965 Corporation on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

type ListRow = {
  num: string;
  name: string;
  dest: string;
};

/** Page 1 of the Feb 16, 1966 relocation list (legacy items 1–34). */
const RELOCATED_PAGE_1: ListRow[] = [
  { num: "1.", name: "Johnson's Wax", dest: "Racine, Wisconsin" },
  { num: "2.", name: "Florida Citrus Orange", dest: "Lakeland, Florida" },
  {
    num: "3.",
    name: "Wisconsin",
    dest: "Rotunda to Boscobel, Wisconsin (Blacksmith Shop) - Balance to Poconos, Penna as Ski Lodge",
  },
  {
    num: "4.",
    name: "Socony-Mobil",
    dest: "Eastern Press, New Haven, Connecticut",
  },
  {
    num: "5.",
    name: "Austria",
    dest: "Upper New York State - Ski Lodge",
  },
  {
    num: "6.",
    name: "Christian Science",
    dest: "Poway, California (north of San Diego)",
  },
  { num: "7.", name: "Malaysia", dest: "University of Plano, Texas" },
  { num: "8.", name: "Thailand", dest: "Expo. 67, Montreal, Canada" },
  { num: "9.", name: "Boy Scouts", dest: "Long Island Boy Scouts" },
  {
    num: "10.",
    name: "Steak House",
    dest: "U.S. Military Academy, West Point",
  },
  {
    num: "11.",
    name: "Les Poupees de Paris",
    dest: "Evers Sea Plane Base, Bronx N. Y.",
  },
  {
    num: "12.",
    name: "Wax Museum",
    dest: "Evers Sea Plane Base, Bronx N. Y.",
  },
  { num: "13.", name: "Denmark", dest: "Westport, Connecticut" },
  { num: "14.", name: "Berlin", dest: "Walls to Verrazano College" },
  {
    num: "15.",
    name: "Japan - Stone Work",
    dest: "Manhattanville College - Westchester, New York",
  },
  {
    num: "16.",
    name: "Schaefer's",
    dest: "Purchased by Herman S. Eaton, 429 Broome Street, New York for re-location. Only furnishings and equipment now committed.",
  },
  {
    num: "17.",
    name: "Montana",
    dest: "Two buildings to be relocated (part in Great Barrington, Mass. and part to Wolfe Construction, Hazelett, New Jersey",
  },
  { num: "18.", name: "Minnesota", dest: "Resort in Michigan" },
  {
    num: "19.",
    name: "West Virginia",
    dest: "Museum in Charleston, West Virginia",
  },
  {
    num: "20.",
    name: "Mormon Temple",
    dest: "Chapel in Plainview, Long Island",
  },
  { num: "21.", name: "Spain", dest: "St. Louis, Missouri" },
  { num: "22.", name: "Parker Pen", dest: "Coney Island, New York" },
  { num: "23.", name: "Swiss Sky Ride", dest: "Site not yet selected" },
  {
    num: "24.",
    name: "Auto Thrill Show",
    dest: "Stands to Syracuse, New York",
  },
  { num: "25.", name: "Indonesia", dest: "Steel to Indonesia" },
  { num: "26.", name: "Equipment for Fairs", dest: "Site not known" },
  {
    num: "27.",
    name: "Switzerland",
    dest: "Ski Lodge in New Hampshire",
  },
  {
    num: "28.",
    name: "United States Rubber",
    dest: "Tire configuration to Detroit",
  },
  {
    num: "29.",
    name: "Maintenance Annex 1 & 2",
    dest: "New Brunswick, New Jersey",
  },
  {
    num: "30.",
    name: "Identity Building",
    dest: "Great Neck Public Schools, Long Island",
  },
  {
    num: "31.",
    name: "South Precinct",
    dest: "Great Neck Pulbic Schools, Long Island",
  },
  {
    num: "32.",
    name: "Orange Julius Stands (2)",
    dest: "Site not yet known.",
  },
  { num: "33.", name: "India", dest: "Sika Chemical Co., New Jersey" },
  {
    num: "34.",
    name: "Long Island Railroad",
    dest: "Part to Malverne, L. I. (exhibit)",
  },
];

/** Page 2 continuation (legacy items 35–36). */
const RELOCATED_PAGE_2: ListRow[] = [
  {
    num: "35.",
    name: "Hollywood (Go-Go Building)",
    dest: "Brooklyn, New York",
  },
  {
    num: "36",
    name: "Ireland",
    dest: "Steel to Grovers Marine Base, Freeport, Long Island, N. Y.",
  },
];

/** Negotiation list — destination column empty in the legacy document. */
const UNDER_NEGOTIATION: ListRow[] = [
  { num: "1.", name: "Sweden", dest: "" },
  { num: "2.", name: "Monorail", dest: "" },
  { num: "3.", name: "New England", dest: "" },
  { num: "4.", name: "Atomedic Hospital", dest: "" },
  { num: "5.", name: "Bell System ---trusses", dest: "" },
  { num: "6.", name: "Bargreen Buffet", dest: "" },
  { num: "7.", name: "Hollywood Rest. Steel", dest: "" },
  { num: "8.", name: "Guinea (Lake George)", dest: "" },
  {
    num: "9.",
    name: "China (Part of building to Toronto)",
    dest: "",
  },
];

function ListTable({ rows }: { rows: ListRow[] }) {
  return (
    <table className={styles.listTable}>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row.num}${row.name}`}>
            <td className={styles.listNum}>{row.num}</td>
            <td className={styles.listName}>{row.name}</td>
            <td className={styles.listDest}>{row.dest}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * The Fair that Survived — "The List".
 * Body from legacy legacies02.html (Page 1 after overview).
 *
 * Stack: legacieshero → LegaciesNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Legacies01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair that Survived">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/legacies/legacieshero.jpg"
            alt="The Fair that Survived — legacies of the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LegaciesNavChrome />

      <article className={styles.article} aria-labelledby="legacies01-title">
        <header className={styles.titleBar}>
          <h1 id="legacies01-title" className={styles.titleBarMain}>
            &quot;The List&quot;
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.listHeading}>The List</p>
          <p className={styles.listSubhead}>
            from the archives of the New York World&apos;s Fair 1964-1965
            Corporation
          </p>

          <p className={styles.body}>
            World&apos;s Fair enthusiast and historian, Craig Bavaro, did some
            extensive research of the records of the New York World&apos;s Fair
            1964-1965 Corporation at the New York Public Library. Among the
            documents he discovered there was a list of the pavilions that had
            found a second life after the Fair.
          </p>
          <p className={styles.body}>
            Dated February 16, 1966, the list is not entirely accurate. Some of
            these pavilions found homes in other locations or may never have
            traveled any further than the &quot;wishful thinking&quot; stage,
            eventually being demolished on the Fairgrounds.
          </p>
          <p className={styles.body}>
            Regardless, the list is intriguing. There may still be some
            undiscovered legacy buildings from the Fair scattered about the
            country! Check the rest of the Legacy Pages here at <BrandMark /> to
            see what is known for sure.
          </p>

          <div className={styles.docBox}>
            <p className={styles.docCaption}>
              Buildings to be relocated in whole or in part
            </p>
            <p className={styles.docCaption}>Elsewhere</p>
            <p className={styles.docDate}>February 16, 1966</p>
            <ListTable rows={RELOCATED_PAGE_1} />
          </div>

          <div className={styles.docBox}>
            <p className={styles.docCaption}>
              Buildings to be relocated in whole or in part
            </p>
            <p className={styles.docCaption}>Elsewhere</p>
            <p className={styles.docDate}>February 16, 1966</p>
            <p className={styles.docPage}>- 2-</p>
            <ListTable rows={RELOCATED_PAGE_2} />

            <div className={styles.negotiateBlock}>
              <p className={styles.docCaption}>
                Buildings and structures now under nogotiation
              </p>
              <p className={styles.docCaption}>
                for possible relocation elsewhere
              </p>
              <div className={styles.negotiateList}>
                <ListTable rows={UNDER_NEGOTIATION} />
              </div>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: NY World&apos;s Fair 1964-1965 Corporation, presented
            courtesy Craig Bavaro Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/legaciesoverview"
        explicitPrevious
        overviewHref="/legaciesoverview"
        nextHref="/legacies02"
      />
    </>
  );
}
