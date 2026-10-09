import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Recommended Procedures — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — recommended procedures. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Recommended Procedures.
 * Body from legacy heartland14.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland14Page() {
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

      <article className={styles.article} aria-labelledby="heartland14-title">
        <header className={styles.titleBar}>
          <h1 id="heartland14-title" className={styles.titleBarMain}>
            Proposal:  Recommended Procedures
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>XI</u> <u>RECOMMENDED PROCEDURES</u>:
            </h2>
            <p className={styles.subhead}>
              <u>A</u> <u>Activation</u>:
            </p>
            <p className={styles.indent}>1. We recommend that full authority be granted by the four States to a joint non-profit Corporation organized to promote, construct and operate a combined New York World&apos;s Fair 1964-1965 exhibit, and to raise funds for that purpose.</p>
            <p className={styles.indent}>2. The Corporation will select an architect with whom it will enter into a contract covering the usual architectural functions set forth in the established practices of the American Institute off Architecture.</p>
            <p className={styles.indent}>3. For building construction and landscaping, the Corporation will negotiate with selected building and landscape contractors, preferably in the New York area, choosing the contractors either by standard bidding procedures or by negotiation.</p>
            <p className={styles.indent}>4. For interior exhibits, the Corporation will negotiate with Ivel Construction Corporation within the established budget.</p>
            <p className={styles.indent}>5. For special services, utilities, security, maintenance, insurance coverage, etc., the Corporation will make individual contracts with the various companies involved.</p>
            <p className={styles.indent}>6. As an alternative, the Corporation will enter into a management contract with Ivel Construction Corporation to cover the coordination of the entire project to timely completion, including the supervision of all services, management of operations during the two years of the Fair and the period of demolition, site-restoration, etc., the fee for these services to be negotiated.</p>
            <p className={styles.pageMark}>- Page 22 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>RECOMMENDED PROCEDURES</u>: (cont&apos;d)
            </h2>
            <p className={styles.subhead}>
              <u>B</u> <u>Financing</u>:
            </p>
            <p className={styles.indent}>
              Since it appears from the foregoing that a major portion of the total budget must be expended prior to the opening date of the Fair and well before the availability of the indicated revenues, it is recommended that consideration be given to various alternative methods of raising such portion of the initial capital as the States might collectively be unable to contribute.
            </p>
            <p className={styles.indent}>Two possible sources for such &quot;venture capital&quot; are:</p>
            <ol className={styles.alphaList} type="a">
              <li>Borrowing from a consortium of banks located in the four States, on notes or debentures secured by the names of a group of responsible public-spirited citizens, backed up by a primary lien on the exhibit revenues, less operating expenses.</li>
              <li>An underwriting through the cooperation of an investment company; a well-known New York underwriter with a Kansas City branch has expressed interest in this project on terms involving 6% interest on the debentures and an underwriting cost not to exceed 10%.</li>
            </ol>
            <p className={styles.indent}>
              In this connection, it should be noted that the requirement of funds is spread over a considerable period of time (see &quot;Timetable&quot; Page 21). Pick-up of loan commitments only when needed will hold interest charges to a minimum.
            </p>
            <p className={styles.pageMark}>- Page 23 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>B</u> - <u>FINANCING</u>: (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              The amount required for all costs up to June 1st, 1964, 40 days after the opening of the Fair, is about $1,465,000, which, for the purpose of this analysis, may be considered as &quot;venture capital&quot;.
            </p>
            <p className={styles.indent}>Following is a suggested proforma target:</p>
            <table className={styles.dataTable}>
              <tbody>
                <tr><td colSpan={2} className={styles.num}>Total Capital Required:</td><td className={styles.num}>$1,465,000.</td></tr>
                <tr><td>Contributions by Four State Governments</td><td className={styles.num}>$500,000.</td><td></td></tr>
                <tr><td>Revenue from Commercial Exhibitors</td><td className={styles.num}>260,000</td><td className={styles.num}>760,000.</td></tr>
                <tr><td></td><td className={styles.num}>----------</td><td className={styles.num}>----------</td></tr>
                <tr><td colSpan={2} className={styles.num}>Total Required Borrowing:</td><td className={styles.num}>$ 705,000.</td></tr>
              </tbody>
            </table>
            <p className={styles.indent}>
              Since this amount is substantially less than the amount of basic revenues anticipated, it is believed that a safe margin remains for payment of obligations, leaving a considerable balance to be returned pro rata to the States, thus reducing their respective net contributions:
            </p>
            <table className={styles.dataTable}>
              <tbody>
                <tr><td>Estimated Admission Revenues (at 60% capacity)</td><td className={styles.num}>$1,089,584.</td></tr>
                <tr><td>Operating and Demolition Costs Subsequent to June 1, 1964</td><td className={styles.num}>254,820.</td></tr>
                <tr><td></td><td className={styles.num}>---------</td></tr>
                <tr><td>Available for Repayment</td><td className={styles.num}>$ 834,764.</td></tr>
                <tr><td>Amount borrowed</td><td className={styles.num}>705,000.</td></tr>
                <tr><td></td><td className={styles.num}>---------</td></tr>
                <tr><td>* Contingency or Surplus to States</td><td className={styles.num}>$ 129,764.</td></tr>
                <tr><td colSpan={2}>* Less interest and underwriting costs.</td></tr>
              </tbody>
            </table>
            <p className={styles.pageMark}>- Page 24 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland13"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland15"
      />
    </>
  );
}
