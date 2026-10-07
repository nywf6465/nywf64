import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Timetable — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — timetable. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Timetable.
 * Body from legacy heartland13.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World's Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <article className={styles.article} aria-labelledby="heartland13-title">
        <header className={styles.titleBar}>
          <h1 id="heartland13-title" className={styles.titleBarMain}>
            Proposal:  Timetable
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>X</u> <u>PROPOSED TIMETABLE</u>:
            </h2>
            <p className={styles.subhead}>
              <u>A</u>
            </p>
            <table className={styles.dataTable}>
              <tbody>
                <tr><td>1.</td><td>Contract with Architect</td><td>August 15, 1962</td></tr>
                <tr><td>2.</td><td>Architectural and Engineering Plans ready for Bidders</td><td>November 1, 1962</td></tr>
                <tr>
                  <td>3.</td>
                  <td>
                    Contracts for:
                    <ul className={styles.nestedList}>
                      <li>(a) Preparation of Site</li>
                      <li>(b) Building Construction</li>
                      <li>(c) Display Construction</li>
                      <li>(d) Landscaping</li>
                      <li>(e) Panavision Film Production</li>
                    </ul>
                  </td>
                  <td>January 2, 1963</td>
                </tr>
                <tr><td>4.</td><td>Site and Foundation Work</td><td>March, April 1963</td></tr>
                <tr><td>5.</td><td>Erection of Buildings</td><td>May to November, 1963</td></tr>
                <tr><td>6.</td><td>Monthly Reports on Construction Progress</td><td>May, 1963 to Completion</td></tr>
                <tr><td>7.</td><td>Final Designs of Exhibits and Interior Decor</td><td>January 2, 1963</td></tr>
                <tr><td>8.</td><td>Production of Panavision Film</td><td>Summer, 1963</td></tr>
                <tr><td>9.</td><td>Installation of Exhibits - Completion on or before</td><td>February 15, 1964</td></tr>
                <tr><td>10.</td><td>Completion of Landscaping</td><td>April 10, 1964</td></tr>
              </tbody>
            </table>
            <p className={styles.pageMark}>- Page 20 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>PROPOSED TIMETABLE</u>: (Cont&apos;d)
            </h2>
            <p className={styles.subhead}>
              <u>B</u>
            </p>
            <p className={styles.indent}>
              It should be noted that the contemplated expenditures are to be spread over a period of four years, as indicated in the following schedule:
            </p>
            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th></th>
                  <th>1962</th>
                  <th>1963</th>
                  <th>1964</th>
                  <th>1965</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Building Construction</td><td></td><td className={styles.num}>500,000</td><td className={styles.num}>126,000</td><td></td></tr>
                <tr><td>Architectural and Engineering Fees</td><td className={styles.num}>20,000</td><td className={styles.num}>15,000</td><td className={styles.num}>4,480</td><td></td></tr>
                <tr><td>Panavision Project</td><td className={styles.num}>25,000</td><td className={styles.num}>300,000</td><td className={styles.num}>75,000</td><td></td></tr>
                <tr><td>Exhibit Construction</td><td className={styles.num}>25,000</td><td className={styles.num}>150,000</td><td className={styles.num}>25,000</td><td></td></tr>
                <tr><td>Landscaping, etc.</td><td></td><td className={styles.num}>10,000</td><td className={styles.num}>22,000</td><td></td></tr>
                <tr><td>Fees to NYWF&nbsp;Corp.</td><td className={styles.num}>20,000</td><td></td><td></td><td></td></tr>
                <tr><td>Utilities Consumption</td><td></td><td></td><td className={styles.num}>10,000</td><td className={styles.num}>10,000</td></tr>
                <tr><td>Insurance</td><td></td><td></td><td className={styles.num}>17,500</td><td className={styles.num}>17,500</td></tr>
                <tr><td>Maintenance</td><td></td><td></td><td className={styles.num}>22,000</td><td className={styles.num}>22,000</td></tr>
                <tr><td>Electrical Maintenance</td><td></td><td></td><td className={styles.num}>12,500</td><td className={styles.num}>12,500</td></tr>
                <tr><td>Security</td><td></td><td></td><td className={styles.num}>8,250</td><td className={styles.num}>8,250</td></tr>
                <tr><td>Repairs</td><td></td><td></td><td className={styles.num}>5,000</td><td className={styles.num}>5,000</td></tr>
                <tr><td>Winter Protection, Rehabilitation</td><td></td><td></td><td className={styles.num}>5,000</td><td className={styles.num}>10,000</td></tr>
                <tr><td>Miscellaneous Supplies, Office Equipment</td><td></td><td></td><td className={styles.num}>4,000</td><td className={styles.num}>1,000</td></tr>
                <tr><td>Management and Personnel</td><td></td><td></td><td className={styles.num}>80,920</td><td className={styles.num}>80,920</td></tr>
                <tr><td>Public Relations</td><td></td><td></td><td className={styles.num}>25,000</td><td className={styles.num}>15,000</td></tr>
                <tr><td>Demolition</td><td></td><td></td><td></td><td className={styles.num}>30,000</td></tr>
                <tr><td></td><td className={styles.num}>----------</td><td className={styles.num}>----------</td><td className={styles.num}>----------</td><td className={styles.num}>----------</td></tr>
                <tr><td></td><td className={styles.num}>$ 90,000</td><td className={styles.num}>$975,000</td><td className={styles.num}>$442,650</td><td className={styles.num}>$212,170</td></tr>
              </tbody>
            </table>
            <p className={styles.pageMark}>- Page 21 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland12"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland14"
      />
    </>
  );
}
