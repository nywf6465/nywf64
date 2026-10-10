import type { Metadata } from "next";
import Image from "next/image";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar09.module.css";

export const metadata: Metadata = {
  title: "Illustration Sources — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Illustration Sources — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

/**
 * The Hunt for International Exhibitors — Illustration Sources.
 * Body from legacy intpar09.html (Page 9).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar09Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar09-title">
        <header className={styles.titleBar}>
          <h1 id="intpar09-title" className={styles.titleBarMain}>
            Illustration Sources
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar09/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>Illustration Sources</p>
          </header>
          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="src-sec-0">
            <h2 id="src-sec-0" className={styles.sectionHeading}>
              {"Prologue"}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"London's Crystal Palace: "}</em>{"\"Biggest World on Earth\", promotional film, United States Steel."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Robert Moses: "}</em>{"Official Photograph, New York World's Fair Corporation."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="src-sec-1">
            <h2 id="src-sec-1" className={styles.sectionHeading}>
              {"A \"Slight Diplomatic Problem\""}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"Thomas J. Deegan: "}</em>{"New York World's Fair 1964/1965"}<em>{" Fair News. "}</em>{"4 May 1963 p. 2."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Seattle World's Fair Advertisement: "}</em>{"New York World's Fair 1964/1965"}<em>{" Progress Report #4. "}</em>{"17 January 1962 p. 6."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"expo67 Logo: "}</em>{"Official Logo of the Universal and International Exposition of 1967, Montreal, Canada."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Members of the IAE Staff: "}</em>{"New York World's Fair 1964/1965"}<em>{" Progress Report #4. "}</em>{"17 January 1962 p. 27."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Kennedy, Moses and Deegan confer: "}</em>{"New York World's Fair 1964/1965"}<em>{" Fair News. "}</em>{"2 August 1962 p. 1."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural Model of the US Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #8. "}</em>{"22 April 1963 p. 36."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="src-sec-2">
            <h2 id="src-sec-2" className={styles.sectionHeading}>
              {"The Soviet Union & The Fair"}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"Site Map of the USSR Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Groundbreaking Commemoration for the Pavilion of Spain "}</em>{"(brochure)"}<em>{". "}</em>{"18 June 1963 p. 6."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Nesterov signs Participation Agreement:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #5. "}</em>{"17 May 1962 p. 35."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="src-sec-3">
            <h2 id="src-sec-3" className={styles.sectionHeading}>
              {"\"Where Pagodas & Minarets...\""}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"Architectural rendering of the Indonesia Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #9. "}</em>{"26 September 1963 p. 19."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Indonesia Pavilion Entrance:"}</em>{" "}<em>{"Official Souvenir Book of the New York World's Fair 1965. "}</em>{"Dexter Press, Nyack, N.Y. 1965."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural Model of the Spanish Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Groundbreaking Commemoration for the Pavilion of Spain "}</em>{"(brochure)"}<em>{". "}</em>{"18 June 1963 Cover."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural Rendering of the Hall of Free Enterprise: "}</em>{"New York World's Fair 1964/1965"}<em>{" Fair News. "}</em>{"22 July 1963 p. 4."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"United States Pavilion: "}</em>{"Promotional Brochure. Charles Luckman Associates. 1963."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="src-sec-4">
            <h2 id="src-sec-4" className={styles.sectionHeading}>
              {"\"War through Misunderstanding\""}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"Mural of a Refugee: "}</em>{"Promotional Brochure Pavilion of Jordan \"Mural of a Refugee.\""}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural rendering of the Jordan Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #9. "}</em>{"26 September 1963 p. 20."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural rendering of the American-Israel Pavilion:"}</em>{" ED-U-Cards. ED-U-Cards Manufacturing Corporation, Licensee to the New York World's Fair."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Jordan Pavilion Construction: "}</em>{"New York World's Fair 1964/1965"}<em>{" Fair News. "}</em>{"22 January 1964 p. 4."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"American-Israel Pavilion Construction: "}</em>{"New York World's Fair 1964/1965"}<em>{" Fair News. "}</em>{"22 February 1964 p. 1."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Architectural Model of the Pavilion of Israel (official):"}</em>{" \"Retrospective of the Work of David Resnik [Architect]\", Exhibition Catalogue p. 77, 2005."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Overview of the Fair from the Skyride:"}</em>{" "}<em>{"Official Souvenir Book of the New York World's Fair 1965. "}</em>{"Dexter Press, Nyack, N.Y. 1965."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Poletti with Ben Gurion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #2. "}</em>{"8 May 1961 p. 33."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="src-sec-5">
            <h2 id="src-sec-5" className={styles.sectionHeading}>
              {"Conclusion"}
            </h2>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>
                <em>{"Architectural Model of the Sierra Leone Pavilion:"}</em>{" New York World's Fair 1964/1965"}<em>{" Progress Report #8. "}</em>{"22 April 1963 p. 15."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Watusi Dancers:"}</em>{" Postcard"}<em>{". "}</em>{"Dexter Press, Nyack, N.Y."}
              </li>
              <li className={styles.sourceItem}>
                <em>{"Unisphere Under Construction: "}</em>{"\"Biggest World on Earth\", promotional film, United States Steel."}
              </li>
            </ul>
          </section>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar08"
        explicitPrevious
        nextHref="/intpar10"
        hideOverview
      />
    </>
  );
}
