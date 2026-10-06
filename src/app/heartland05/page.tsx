import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Why a Heartland Exhibit? — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — why a Heartland exhibit. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Why a Heartland Exhibit?.
 * Body from legacy heartland05.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland05Page() {
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

      <article className={styles.article} aria-labelledby="heartland05-title">
        <header className={styles.titleBar}>
          <h1 id="heartland05-title" className={styles.titleBarMain}>
            Proposal:  Why a Heartland Exhibit?
          </h1>
        </header>

        <div className={styles.articleInner}>

          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland05/7.jpg"
                alt="Proposed Pavilion"
                width={600}
                height={324}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>II</u> <u>WHY A HEARTLAND STATES EXHIBIT</u>:
            </h2>
            <p className={styles.indent}>
              Because the exhibit is a vehicle for creating and putting across to the world a forceful image of the Heartland States as the inner fortress of America, whose growth and strength are vital to our national survival . . . . as a modern community on the verge of monumental developments as inevitable as the pioneer destiny that created and sustained it only two and three generations ago . . . .{" "}
              <u>as the commonwealth core of America, rich in PEOPLE, POWER and POTENTIAL for the nucleonic age</u>. This is the <u>Theme</u> of our NYWF&nbsp;Exhibition . . . . to be housed in a pavilion whose shape evolves organically out of its unique exhibit techniques....
            </p>
            <p className={styles.indent}>
              Because sharing exhibit costs also give to each and all of the Midland Community States an equal and inexpensive way of strongly reinforcing the promotion of special interests in Tourism and Industrial Development.
            </p>
            <p className={styles.indent}>
              Because it is a way of gaining more popular support, sympathy and understanding of the issues that affect the welfare of <u>each and all</u> of the Heartland States. These states share a common heritage, and a common destiny . . . . and a unity of problems and interests in agriculture and development of natural resources that need communal action in Congress, and the understanding, sympathy and support of <u>all</u> U.S. citizens and their elected public officials.
            </p>
            <p className={styles.indent}>
              For these same reasons, it is manifestly desirable that the State of Iowa be invited to join in this common project.
            </p>
            <p className={styles.pageMark}>- Page 3 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland04"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland06"
      />
    </>
  );
}
