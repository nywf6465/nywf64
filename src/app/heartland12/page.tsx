import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Budget — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — budget. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Budget.
 * Body from legacy heartland12.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland12Page() {
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

      <article className={styles.article} aria-labelledby="heartland12-title">
        <header className={styles.titleBar}>
          <h1 id="heartland12-title" className={styles.titleBarMain}>
            Proposal:  Budget
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>IX</u> <u>PROPOSED BUDGET</u>:
            </h2>
            <table className={styles.dataTable}>
              <tbody>
                <tr><td>1.</td><td colSpan={2}><u>Site Preparation and Construction</u></td></tr>
                <tr><td></td><td><u>a</u> Construction of Exhibition Hall and Panascenium, 16,200 square feet @ $30.</td><td className={styles.num}>$ 486,000.</td></tr>
                <tr><td></td><td><u>b</u> Construction of four State pavilions @ $35,000.</td><td className={styles.num}>140,000.</td></tr>
                <tr><td></td><td><u>c</u> .Landscaping, paving, etc.</td><td className={styles.num}>32,000.</td></tr>
                <tr><td></td><td><u>d</u> Exhibits, Models, Special Effects, Decor</td><td className={styles.num}>200,000.</td></tr>
                <tr><td></td><td><u>e</u> Architect&apos;s Fee - 6% of <u>a</u>, <u>b</u> and <u>c</u></td><td className={styles.num}>39,480.</td></tr>
                <tr><td></td><td><u>f</u> Panavision Production, including all costs</td><td className={styles.num}>400,000.</td></tr>
                <tr><td></td><td><u>g</u> Demolition, removal of debris, site restoration</td><td className={styles.num}>30,000.</td></tr>
                <tr><td colSpan={2}></td><td className={styles.num}>------------------</td></tr>
                <tr><td colSpan={2}></td><td className={styles.num}>$ 1,327,480.</td></tr>
                <tr><td>2.</td><td colSpan={2}><u>Operating Expenses</u></td></tr>
                <tr><td></td><td><u>a</u> Fees to NYWF, examination of plans, utility connections, etc.</td><td className={styles.num}>20,000.</td></tr>
                <tr><td></td><td><u>b</u> Utilities consumption</td><td className={styles.num}>20,000.</td></tr>
                <tr><td></td><td><u>c</u> Insurance</td><td className={styles.num}>35,000.</td></tr>
                <tr><td></td><td><u>d</u> Maintenance, Air Conditioning Watch, Cleaning, Landscape Care</td><td className={styles.num}>44,000.</td></tr>
                <tr><td></td><td><u>e</u> Electrical maintenance - 2 years</td><td className={styles.num}>25,000.</td></tr>
                <tr><td></td><td><u>f</u> Security (Pinkerton)</td><td className={styles.num}>16,500.</td></tr>
                <tr><td></td><td><u>g</u> General repairs, 2-year contingency</td><td className={styles.num}>10,000.</td></tr>
                <tr><td></td><td><u>h</u> Winter protection and rehabilitation, 1964-1965</td><td className={styles.num}>15,000.</td></tr>
                <tr><td></td><td><u>i</u> Miscellaneous supplies, office equipment</td><td className={styles.num}>5,000.</td></tr>
                <tr><td>3.</td><td colSpan={2}><u>Management and Personnel</u></td></tr>
                <tr><td></td><td><u>a</u> Movie Projectionists</td><td className={styles.num}>60,000.</td></tr>
                <tr><td></td><td><u>b</u> General Manager - 2 years</td><td className={styles.num}>30,000.</td></tr>
                <tr><td></td><td><u>c</u> Assistant Manager - 2 years</td><td className={styles.num}>20,000.</td></tr>
                <tr><td></td><td><u>d</u> 12 College Student Guides @ $80. per week, 54 weeks</td><td className={styles.num}>51,840.</td></tr>
                <tr><td>4.</td><td>Public Relations Program</td><td className={styles.num}>40,000.</td></tr>
                <tr><td colSpan={2}></td><td className={styles.num}>------------------</td></tr>
                <tr><td colSpan={2}></td><td className={styles.num}>$ 392,340</td></tr>
                <tr><td colSpan={3} className={styles.budgetTotal}>Total - $ 1,719,820.</td></tr>
              </tbody>
            </table>
            <p className={styles.pageMark}>- Page 19 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland11"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland13"
      />
    </>
  );
}
