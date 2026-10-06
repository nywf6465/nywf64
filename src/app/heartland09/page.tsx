import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Attendance Estimate — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — attendance estimate. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Attendance Estimate.
 * Body from legacy heartland09.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland09Page() {
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

      <article className={styles.article} aria-labelledby="heartland09-title">
        <header className={styles.titleBar}>
          <h1 id="heartland09-title" className={styles.titleBarMain}>
            Proposal:  Attendance Estimate
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>VI</u> <u>ATTENDANCE ESTIMATE</u>:
            </h2>
            <p className={styles.indent}>
              Original calculations by traffic engineers of the New York
              World&apos;s Fair 1964-1965 Corporation, called for potential Fair
              attendance during the two seasons, of 70,000,000. In view of
              population increases, transportation improvements made apparent
              since Fair organization; and particularly in view of the
              unexpectedly large attendance to date at Century 21 Exposition,
              these estimates may be too conservative.
            </p>
            <p className={styles.indent}>
              It is thus logical to conclude that a unique show technique and
              attractive exhibits, fortified with a reasonable amount of
              professional public relations promotion, can be expected to develop
              attendance most of the time at near capacity levels.
            </p>
            <p className={styles.indent}>
              In order to assure this, the budge includes a sum for public
              relations aimed directly at new syndicate feature editors and
              columnists, major home magazine editors, TV&nbsp;and radio network
              public interest programs and editors of child education
              publications. This is a minimal program. It is expected that the
              informative, exciting Rocket Belt Ride, reinforced by theme and
              design of our exhibit story and state exhibits, and by publicized
              celebrity visits and special events, will find a ready welcome from
              major media whose coverage can trigger additional, unsolicited
              publicity features across the country.
            </p>
            <p className={styles.indent}>
              Due to the special nature of the Panavision show and its expected
              physical effect on the viewers, as well as the necessity for
              frequent crowd turnover, we propose that the actual filming be
              limited to twelve minutes, with an interval of eight minutes for
              change of audience.
            </p>
            <p className={styles.pageMark}>- Page 15 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>ATTENDANCE ESTIMATE</u> (Cont&apos;d)
            </h2>
            <p className={styles.indent}>
              This will allow three shows per hour, or thirty-six per day.
              Capacity audience for the 360 days of the Fair will be 4,847,040
              in the 374-seat theatre.
            </p>
            <p className={styles.indent}>
              We believe that a conservative estimate of the actual audience would
              be 60% of capacity, or a total of 2,908,224, and have calculated
              our projected revenue on that basis, with an admission charge
              (through coin-operated turnstiles) of 50 cents for adults and 25
              cents for children under 12 years of age. Assuming an{" "}
              <u>average</u> family of two adults and two children, we arrive at
              the following estimated revenue figures:
            </p>
            <table className={styles.dataTable}>
              <tbody>
                <tr>
                  <td>Adults-</td>
                  <td className={styles.num}>1,454,112</td>
                  <td>@</td>
                  <td>50 cents</td>
                  <td className={styles.num}>$ 727,056.00</td>
                </tr>
                <tr>
                  <td>Children-</td>
                  <td className={styles.num}>1,454,112</td>
                  <td>@</td>
                  <td>25 cents</td>
                  <td className={styles.num}>363,528,00</td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td className={styles.num}>---------------</td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td className={styles.num}>$ 1,089,584.00</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    (At capacity operation, which is of course never a realistic
                    expectation, this figure could conceivably approach a total
                    of $1,817,640.)
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={styles.pageMark}>- Page 16 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland08"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland10"
      />
    </>
  );
}
