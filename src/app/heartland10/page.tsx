import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Industry Exhibits and Revenues — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — industry exhibits and revenues. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Industry Exhibits and Revenues.
 * Body from legacy heartland10.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland10Page() {
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

      <article className={styles.article} aria-labelledby="heartland10-title">
        <header className={styles.titleBar}>
          <h1 id="heartland10-title" className={styles.titleBarMain}>
            Proposal:  Industry Exhibits and Revenues
          </h1>
        </header>

        <div className={styles.articleInner}>

          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>VII</u> <u>INDUSTRY EXHIBITS AND REVENUES</u>:
            </h2>
            <p className={styles.indent}>
              The total square footage allocated to special displays in the exhibition hall and the four State pavilions approximates 7,200 square feet. It is recommended that of this area 3,500 square feet be reserved for the display of products and services of commercial and industrial organizations of the States who wish to contribute toward the cost of the exhibition, in exchange for the benefits inherent in exposure to the enormous concentration of a World&apos;s Fair market. There is no New York World&apos;s Fair rule prohibiting industry identification in State exhibitions.
            </p>
            <p className={styles.indent}>
              If the space is allocated on the basis of the amount contributed, figured on the rate basis of the major multi-exhibitor building at the Fair (The Better Living Pavilion), it would return about $260,000. (See page 24). An audio-visual presentation of this report has been prepared by Ivel to assist in promoting contributions.
            </p>
            <p className={styles.indent}>
              Cooperating exhibitors would also be expected to pay for their own displays, within the established theme and design concept.
            </p>
            <p className={styles.indent}>
              Additional revenues might well be achieved through the direct retail sale of certain consumer products or services. This problematical revenue has not been taken into account in the proposed budget.
            </p>
            <p className={styles.pageMark}>- Page 17 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland09"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland11"
      />
    </>
  );
}
