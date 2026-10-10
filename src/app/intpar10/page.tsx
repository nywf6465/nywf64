import type { Metadata } from "next";
import Image from "next/image";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar10.module.css";

export const metadata: Metadata = {
  title: "Bibliography — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Bibliography — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

/**
 * The Hunt for International Exhibitors — Bibliography.
 * Body from legacy intpar10.html (Page 10).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar10Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar10-title">
        <header className={styles.titleBar}>
          <h1 id="intpar10-title" className={styles.titleBarMain}>
            Bibliography
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar10/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>Bibliography</p>
          </header>
          <hr className={styles.rule} />

          <h2 className={styles.majorHeading}>{"Primary Resources"}</h2>
          <section className={styles.section} aria-labelledby="bib-sec-0">
            <h3 id="bib-sec-0" className={styles.sectionHeading}>
              {"Magazine Articles"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                {"Brooks, John. \"Diplomacy at Flushing Meadow.\" "}<em>{"New Yorker"}</em>{", 1 June 1963, 40."}
              </li>
              <li className={styles.bibItem}>
                {"\"Here is How Things Might Look Someday.\" "}<em>{"Life"}</em>{", 1 May 1964."}
              </li>
              <li className={styles.bibItem}>
                {"Joe McCarthy. \"Moses (Robert) and the Promised Land,\" "}<em>{"Reader's Digest"}</em>{", September 1964."}
              </li>
              <li className={styles.bibItem}>
                {"\"The World of Already.\" "}<em>{"Time"}</em>{", 5 June 1964, 40."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="bib-sec-1">
            <h3 id="bib-sec-1" className={styles.sectionHeading}>
              {"Newspapers"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                <em>{"Christian Science Monitor"}</em>{". 10 January 1963."}
              </li>
              <li className={styles.bibItem}>
                <em>{"Daily News "}</em>{"(New York). 4 October 1962."}
              </li>
              <li className={styles.bibItem}>
                <em>{"Journal America"}</em>{" (New York). 8 October 1962, 21 February 1965."}
              </li>
              <li className={styles.bibItem}>
                <em>{"New York Mirror"}</em>{". 4 October 1962."}
              </li>
              <li className={styles.bibItem}>
                <em>{"New York Post"}</em>{". 5 October 1962."}
              </li>
              <li className={styles.bibItem}>
                <em>{"New York Times"}</em>{". 21 August 1959-17 October 1965, 5 June 1971."}
              </li>
              <li className={styles.bibItem}>
                <em>{"Newsday"}</em>{". 8 January 1966."}
              </li>
              <li className={styles.bibItem}>
                <em>{"Washington Post"}</em>{". 2 July 1964."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="bib-sec-2">
            <h3 id="bib-sec-2" className={styles.sectionHeading}>
              {"Books"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                {"Moses, Robert. "}<em>{"Public Works: A Dangerous Trade"}</em>{". New York: McGraw Hill, 1970."}
              </li>
              <li className={styles.bibItem}>
                {"Nicholson, Bruce. "}<em>{"Hi, Ho, Come to the Fair"}</em>{". Huntington Beach, Ca.: Pelagian Press, 1989."}
              </li>
              <li className={styles.bibItem}>
                {"Reid, Alistair. "}<em>{"To Be Alive! From the Film by Frances Thompson and Alexander Hammid"}</em>{". New York: MacMillan Company, 1966."}
              </li>
              <li className={styles.bibItem}>
                {"Time-Life Books, ed. "}<em>{"Official Guide New York World's Fair 1964/1965"}</em>{". New York: Time Incorporated, 1964."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="bib-sec-3">
            <h3 id="bib-sec-3" className={styles.sectionHeading}>
              {"Archival Collections"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                {"World's Fair Corporation Archives, New York World's Fair 1964-1965. Located at the New York Public Library, Special Collections, Division of Manuscripts and Archives. New York, NY."}
              </li>
              <li className={styles.bibItem}>
                {"Poletti Papers. Located at Columbia University, Lehman Suite. New York, NY."}
              </li>
            </ul>
          </section>
          <h2 className={styles.majorHeading}>{"Secondary Resources"}</h2>
          <section className={styles.section} aria-labelledby="bib-sec-4">
            <h3 id="bib-sec-4" className={styles.sectionHeading}>
              {"Books about the 1964 Fair"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                {"Rosenblum, Robert, Rosemarie Haag Bletter, Morris Dickstein, Helen A. Harrison, Marc H. Miller, Sheldon J. Reaven, and Ileen Sheppard. "}<em>{"Remembering the Future: The New York World's Fair from 1939 to 1964"}</em>{". New York, Rizzoli, 1989."}
              </li>
              <li className={styles.bibItem}>
                {"Caro, Robert A. "}<em>{"The Power Broker: Robert Moses and the Fall of New York"}</em>{". New York: Knopf, 1974."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="bib-sec-5">
            <h3 id="bib-sec-5" className={styles.sectionHeading}>
              {"Books about World's Fair History"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                {"Benedict, Burton. \"The Anthropology of World's Fairs.\" In "}<em>{"The Anthropology of World's Fairs"}</em>{", ed. Burton Benedict, 1-65. Berkeley, California: Scholar Press, 1983."}
              </li>
              <li className={styles.bibItem}>
                {"Haddow, Robert H. "}<em>{"Pavilions of Plenty: Exhibiting American Culture Abroad in the 1950s"}</em>{". Washington: Smithsonian Institution Press, 1997."}
              </li>
              <li className={styles.bibItem}>
                {"Luckhurst, Kenneth W. "}<em>{"The Story of Exhibitions"}</em>{". London: Studio Publications, 1951."}
              </li>
              <li className={styles.bibItem}>
                {"Mattie, Erik. "}<em>{"World's Fairs"}</em>{". New York: Princeton Architectural Press, 1998."}
              </li>
              <li className={styles.bibItem}>
                {"Rydell, Robert. "}<em>{"All the World's a Fair: Visions of Empire at American International Expositions, 1876-1916"}</em>{". Chicago: The University of Chicago Press, 1984."}
              </li>
              <li className={styles.bibItem}>
                {"--. \"The Literature of International Expositions.\" In "}<em>{"Books of the Fairs"}</em>{", ed. Smithsonian Institution Libraries, 1-10. Chicago: American Library Association, 1992."}
              </li>
              <li className={styles.bibItem}>
                {"--. "}<em>{"World of Fairs: The Century of Progress Expositions"}</em>{". Chicago: The University of Chicago Press, 1993."}
              </li>
              <li className={styles.bibItem}>
                {"Rydell, Robert, John E. Findling, and Kimberley D. Pelle. "}<em>{"Fair America"}</em>{". Washington, D.C.: Smithsonian Institution Press, 2000."}
              </li>
            </ul>
          </section>
          <section className={styles.section} aria-labelledby="bib-sec-6">
            <h3 id="bib-sec-6" className={styles.sectionHeading}>
              {"Film"}
            </h3>
            <ul className={styles.bibList}>
              <li className={styles.bibItem}>
                <em>{"New York World's Fair: Memories of 1964"}</em>{". TV's Magic Memories. Directed by Alexander Hammid and Wheaton Galentine. 55 min. Orland Park, IL: Moviecraft, 1991. Videocassette."}
              </li>
              <li className={styles.bibItem}>
                <em>{"The 1964 World's Fair: Relieve [sic] the Wonder"}</em>{". Produced by Connecticut Public Television. 60 minutes. Hannington Park, NJ: Janson Video, Inc., 1996. Videocassette."}
              </li>
            </ul>
          </section>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar09"
        explicitPrevious
        nextHref="/intpar01"
        hideOverview
      />
    </>
  );
}
