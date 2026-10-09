import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Cover/Preface/Index — Heartland States U.S.A. — nywf64.com",
  description:
    "Proposal cover, preface, and index — Heartland States U.S.A. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Cover/Preface/Index.
 * Body from legacy heartland03.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland03Page() {
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

      <article className={styles.article} aria-labelledby="heartland03-title">
        <header className={styles.titleBar}>
          <h1 id="heartland03-title" className={styles.titleBarMain}>
            Proposal:  Cover/Preface/Index
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <div className={styles.coverBlack}>
              <p className={styles.coverTitle}>HEARTLAND STATES, U.S.A.</p>
              <p>NEW YORK WORLD&apos;S FAIR 1964-65</p>
              <p>ANALYSIS AND REPORT BY <span className={styles.coverOrg}>IVEL</span></p>
            </div>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <p className={styles.sectionLabel}>R E P O R T</p>
            <table className={styles.reportTable}>
              <tbody>
                <tr><td>To</td><td>States of</td><td>North Dakota</td><td>South Dakota</td></tr>
                <tr><td></td><td></td><td>Nebraska</td><td>Kansas</td></tr>
                <tr><td></td><td colSpan={3}>Heartland New York World&apos;s Fair Exhibit Commission</td></tr>
                <tr><td>By:</td><td colSpan={3}>Ivel Construction Corporation</td></tr>
                <tr><td></td><td colSpan={3}>Brooklyn, New York</td></tr>
                <tr><td>Subject:</td><td colSpan={3}>Participation of the Heartland States in the New</td></tr>
                <tr><td></td><td colSpan={3}>York World&apos;s Fair 1964-1965</td></tr>
                <tr><td>Dated:</td><td>July</td><td>1962</td><td></td></tr>
              </tbody>
            </table>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <p className={styles.indent}>This report is submitted pursuant to a contract entered into by Heartland New York World&apos;s Fair Exhibit Commission with Ivel Construction Corporation of New York for the purpose of determining the feasibility and probable cost of a Heartland States exhibit at the New York World&apos;s Fair 1964-1965 and for the preparation of designs and renderings of a proposed exhibit.</p>
            <h2 className={styles.sectionLabel}>I N D E X</h2>
            <table className={styles.indexTable}>
              <tbody>
                <tr><td>2</td><td colSpan={2}>Description of the Site</td></tr>
                <tr><td>3</td><td colSpan={2}>Why a Heartland Exhibit?</td></tr>
                <tr><td>4</td><td colSpan={2}>Content of the Exhibit</td></tr>
                <tr><td>5-13</td><td colSpan={2}>Theme</td></tr>
                <tr><td>14</td><td colSpan={2}>Traffic Pattern</td></tr>
                <tr><td>15-16</td><td colSpan={2}>Attendance Estimates</td></tr>
                <tr><td>17</td><td colSpan={2}>Industry Exhibits and Revenues</td></tr>
                <tr><td>18</td><td colSpan={2}>Governor&apos;s Room</td></tr>
                <tr><td>19</td><td colSpan={2}>Budget</td></tr>
                <tr><td>20-21</td><td colSpan={2}>Timetable</td></tr>
                <tr><td>22-24</td><td colSpan={2}>Recommended Procedures</td></tr>
                <tr><td>25</td><td colSpan={2}>Conclusion</td></tr>
                <tr><td>26</td><td colSpan={2}>Addenda</td></tr>
                <tr><td colSpan={3}><p className={styles.pageMark}>- Page 1 -</p></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland02"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland04"
      />
    </>
  );
}
