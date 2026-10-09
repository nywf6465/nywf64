import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Description of the Site — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — description of the site. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Description of the Site.
 * Body from legacy heartland04.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland04Page() {
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

      <article className={styles.article} aria-labelledby="heartland04-title">
        <header className={styles.titleBar}>
          <h1 id="heartland04-title" className={styles.titleBarMain}>
            Proposal:  Description of the Site
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland04/3.jpg"
                alt="Proposed Pavilion"
                width={600}
                height={392}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>I</u> <u>DESCRIPTION OF SITE</u>:
            </h2>
            <p className={styles.indent}>
              (a) <u>Location</u>: The site offered by the World&apos;s Fair
              constitutes an area of 77.260 square feet, or any desired part
              thereof; it is a tongue-shaped peninsula, adjoining the space
              allocated to Puerto Rico, and is surrounded by footpaths and a main
              intramural bus artery, directly on the route from the chief entrance
              to the Fair Grounds, immediately accessible from the so-called
              &quot;V.I.P.&quot; entrance from the Fair&apos;s administration
              building. The Fair estimates that about 70% of the expected
              70,000,000 visitors will enter through the main gate.
            </p>
            <p className={styles.indent}>
              Another important advantage of the location is its proximity to the
              large Federal Government exhibit, which is certain to draw the
              maximum possible traffic. (The Federal exhibit in Seattle is the
              greatest drawing card of the entire Century 21 Exposition).
            </p>
            <p className={styles.indent}>
              (b) <u>Area</u>: The recommendations and proposed designs submitted
              herewith, call for the use of only 43,656 square feet of the
              proffered space, which is believed adequate to accomplish the
              desired objectives of the four states involved. The use of
              additional land would result in increased costs for buildings,
              landscaping and maintenance, without commensurate gain in value to
              the states.
            </p>
            <p className={styles.indent}>
              (c) <u>Conclusion</u>: It is therefore recommended that the
              approximate 43,656 square foot area of Bock 37 be applied for and
              accepted for the purposes of this exhibit.
            </p>
            <p className={styles.pageMark}>- Page 2 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland03"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland05"
      />
    </>
  );
}
