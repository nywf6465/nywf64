import type { Metadata } from "next";
import Image from "next/image";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Library USA — United States — nywf64.com",
  description:
    "Library/U.S.A. folio and Univac computer demonstration — United States Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion — Library USA (custom folio).
 * Body from legacy unista13.html.
 */
export default function Unista13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <article className={styles.article} aria-labelledby="unista13-title">
        <header className={styles.titleBar}>
          <h1 id="unista13-title" className={styles.titleBarMain}>
            Library USA
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.folioTop}>
            <div>
              <p className={styles.challengeLines}>CHALLENGE</p>
              <p className={styles.challengeLines}>TO</p>
              <p className={styles.challengeLines}>GREATNESS</p>
            </div>
            <div className={styles.orangeRule} aria-hidden="true" />
            <div className={styles.sealCol}>
              <figure className={styles.sealFigure}>
                <Image
                  src="/images/unista13/us48.jpg"
                  alt="Great Seal of the United States"
                  width={200}
                  height={239}
                  className={styles.sealImg}
                  unoptimized
                />
              </figure>
              <p className={styles.folioOrange}>
                The United States Pavilion at the 1964-1965 New York World&apos;s Fair presents an exhibition
                dedicated to the spirit of the American people, reflecting the
                courage and determination that made possible the nation&apos;s past
                great achievements and underscoring the major challenges that
                face the American people today. Exhibits deal with vital subjects:
                economic growth and development, urban renewal, health, education,
                creativity, scientific research and discovery, the world community
                and outer space. The exhibition gives emphasis to the opportunity,
                defined by President Johnson, &quot;to move not only toward the
                rich society and the powerful society, but upward to the Great
                Society.&quot;
              </p>
              <p className={styles.folioOrange}>
                This personalized folio, prepared especially for you by the American Library Association,
                is symbolic of the continuing challenge to increase each person&apos;s
                free access to sources of information.
              </p>
              <p className={styles.fairLine}>NEW YORK WORLD&apos;S FAIR 1964-1965</p>
            </div>
          </div>

          <hr className={styles.sectionRule} />

          <figure className={styles.logoFigure}>
            <Image
              src="/images/unista13/us49.jpg"
              alt="Library U.S.A. Logo"
              width={450}
              height={310}
              className={styles.logoImg}
              unoptimized
            />
          </figure>

          <p className={styles.computerNote}>
            An important library information service of the future is being demonstrated
            here today. Data stored in this 490 Real-Time Computer may be request from, transmitted to and printed at any location in the
            country -- or throughout the world -- where data transmission
            facilities are available.
          </p>

          <figure className={styles.creditsFigure}>
            <Image
              src="/images/unista13/us50.jpg"
              alt="Credits"
              width={400}
              height={212}
              className={styles.creditsImg}
              unoptimized
            />
          </figure>

          <hr className={styles.sectionRule} />

          <h2 className={styles.descSectionTitle}>
            DESCRIPTION OF LIBRARY/U.S.A.
          </h2>
          <p className={styles.descBody}>
            LIBRARY/U.S.A. IS THE INFORMATION CENTER FOR THE UNITED STATES
            PAVILION. IT IS SPONSORED BY THE AMERICAN LIBRARY ASSOCIATION
            TO ACQUAINT YOU WITH THE INDISPENSABLE NATURE OF LIBRARIES AS
            A NATIONAL RESOURCE. LIBRARIANS ON DUTY ARE PREPARED TO ANSWER
            ANY QUESTION YOU MAY ASK. A UNIVAC COMPUTER AIDS THEM IN RESPONDING
            TO QUESTIONS ABOUT THE EXHIBITS IN THE U.S. PAVILION. REFERENCE
            BOOKS ARE USED TO LOCATE INFORMATION ON ALL OTHER SUBJECTS.
          </p>
          <p className={styles.descBody}>
            FOR YOUR BROWSING PLEASURE, LIBRARY/U.S.A. FEATURES A REPRESENTATIVE
            COLLECTION OF BOOKS MIRRORING THE SELECTIONS MADE RECENTLY FOR
            THE PRESIDENT&apos;S LIBRARY AT THE WHITE HOUSE. ALSO, A MODERN CHILDREN&apos;S
            LIBRARY DISPLAYS THE LATEST IN LIBRARY SERVICE FOR CHILDREN.
            YOUNG ADULTS MAY &apos;DIAL-A-BOOK&apos; TO HEAR ONE MINUTE REVIEWS OF
            OLD FAVORITES AND NEW BOOKS. TINY TOTS WILL ENJOY STORYTELLING
            AND MOVIES IN THE CHILDREN&apos;S WORLD THEATER.
          </p>

          <h2 className={styles.descSectionTitle}>ROLE OF THE COMPUTER</h2>
          <p className={styles.descBody}>
            THE PURPOSE OF THE COMPUTER IN LIBRARY/U.S.A. IS TO DEMONSTRATE
            HOW MACHINE STORAGE AND RETRIEVAL OF INFORMATION MAY IN TIME
            SUPPLEMENT CONVENTIONAL LIBRARY REFERENCE ACTIVITY.
          </p>
          <p className={styles.descBody}>
            VISIBLE TO YOU IN THE GLASS ENCLOSED ROOM IS THE UNIVAC 490
            REAL-TIME COMPUTER. IT CONTAINS THE INFORMATION STORAGE DEVICES
            AND COMMUNICATIONS EQUIPMENT NEEDED TO RESPOND TO YOUR REQUEST.
            THE DATA FOR ALL LIBRARY/U.S.A. APPLICATIONS IS STORED ON A MAGNETIC
            DRUM CALLED FASTRAND. THE FASTRAND DRUM REVOLVES CONTINUALLY
            AT HIGH SPEED AND THE AVERAGE TIME REQUIRED TO FIND INFORMATION
            ON IT IS MEASURED IN THOUSANDTHS OF A SECOND.
          </p>
          <p className={styles.descBody}>
            THE UNISET IS THE INPUT DEVICE USED BY THE LIBRARIAN TO ENTER
            YOUR REQUEST INTO THE SYSTEM. THERE IS A UNISET STATIONED AT
            EACH OF THE SIX LIBRARY/U.S.A. REFERENCE DESKS AND EACH TRANSMITS
            THE REQUEST TO THE COMPUTER OVER A CABLE LINE.
          </p>
          <p className={styles.descBody}>
            WHEN THE COMPUTER RECEIVES THE INPUT REQUEST, IT COMPOSES
            A RESPONSE AUTOMATICALLY BY EXTRACTING SELECTIONS OF DATA FROM
            THE FASTRAND DRUM AND COMMUNICATES IT TO THE HIGH SPEED PRINTER
            LOCATED BEHIND THE LIBRARIAN. BY THESE MEANS MORE THAN 1,200
            WORDS CAN BE PRINTED IN LESS THAN FOUR SECONDS AFTER THE LIBRARIAN
            INITIATES THE REQUEST ON THE UNISET.
          </p>
          <p className={styles.descBody}>
            THE UNIVAC 490 REAL-TIME COMPUTER POSSESSES POWERFUL COMMUNICATION
            CAPABILITIES AND MAY BE CONNECTED TO OTHER COMPUTERS OR DATA
            TRANSMITTING DEVICES ANYWHERE IN THE WORLD WHERE DATA TRANSMISSION
            LINES ARE AVAILABLE. BY DIALING THROUGH DATA-PHONE CONNECTIONS.
            FOR EXAMPLE, A REQUESTER IN LOS ANGELES MAY OBTAIN INFORMATION
            FROM LIBRARY/U.S.A. IN NEW YORK. LAST YEAR THIS WAS DEMONSTRATED
            BY UNIVAC WITH COMPUTERS LOCATED IN ST. LOUIS, NEW ORLEANS, AND
            WASHINGTON, D.C. IN ADDITION. THIS YEAR ANY NATION-WIDE TELETYPEWRITER
            MACHINE WILL BE ABLE TO COMMUNICATE DIRECTLY WITH THE UNIVAC
            490 AT LIBRARY/U.S.A.
          </p>
          <p className={styles.descBody}>
            AN IMPORTANT FEATURE OF THE UNIVAC 490 REAL-TIME COMPUTER
            IS ITS ABILITY TO CONCURRENTLY PROCESS SEPARATE REQUESTS INITIATED
            FROM DIFFERENT REMOTE POINTS AT THE SAME TIME. THIS FEATURE COMBINED
            WITH THE COMPUTER&apos;S HIGH SPEED, MEASURED IN MILLIONTHS OF A SECOND,
            ALLOWS THE LIBRARIAN AT LIBRARY/U.S.A. TO RESPOND TO YOUR REQUEST
            EFFICIENTLY AND INDEPENDENTLY OF ALL OTHER INQUIRIES.
          </p>
          <p className={styles.descBody}>
            INFORMATION ON 75 DIFFERENT TOPICS TREATED IN THE U.S. PAVILION
            EXHIBITS IS STORED IN THE COMPUTER&apos;S FASTRAND MEMORY. YOU MAY
            ASK FOR INFORMATION OF THREE DIFFERENT KINDS:
          </p>
          <ol className={styles.descList}>
            <li>
              ESSAYS. ENCYCLOPEDIA BRITANNICA EDITORS WROTE ORIGINAL ESSAYS
              FOR ADULTS AND FOR CHILDREN. THE ADULT ESSAYS WERE THEN TRANSLATED
              INTO GERMAN, FRENCH AND SPANISH.
            </li>
            <li>
              READING LISTS. TO SUPPLEMENT THE ESSAYS, TWENTY DIFFERENT
              LIBRARIES ACROSS THE COUNTRY PREPARED LISTS OF BOOKS AT FIVE
              LEVELS. TITLES OF BOOKS WERE CAREFULLY SELECTED AND ARE PROBABLY
              AVAILABLE IN YOUR HOME TOWN LIBRARY.
            </li>
            <li>
              MAGAZINE ARTICLES. THROUGH THE COURTESY OF THE H.W. WILSON
              COMPANY, A CURRENT INDEX TO SELECTED ARTICLES FROM 18 POPULAR
              MAGAZINES IS STORED IN THE COMPUTER. NEW ARTICLES ARE ENTERED
              INTO THE MACHINE REGULARLY SO THAT THE COMPUTER&apos;S MEMORY ALWAYS
              HAS THE MOST UP TO DATE LISTINGS OF ARTICLES RELATED TO THE VARIOUS
              U.S. PAVILION EXHIBITS. THROUGH THE UNISET, THE LIBRARIAN MAY
              REQUEST LISTS OF ARTICLES IN COMBINATION TO SUIT YOUR INTERESTS.
            </li>
          </ol>
          <p className={styles.descBody}>
            THE AMERICAN LIBRARY ASSOCIATION ACKNOWLEDGES SUPPORT RECEIVED
            FROM ITS PRINCIPAL SPONSORS -UNIVAC DIVISION OF SPERRY RAND CORP.,
            ENCYCLOPEDIA BRITANNICA, WORLD BOOK ENCYCLOPEDIA, BRO-DART INDUSTRIES,
            EASTMAN KODAK CO., H.W. WILSON CO., FORDHAM EQUIPMENT CO., AMERICAN
            TELEPHONE &amp; TELEGRAPH CO., THE COUNCIL ON LIBRARY RESOURCES,
            INC., AND THE NATIONAL SCIENCE FOUNDATION. THE GENEROUS COOPERATION
            OF AMERICAN AND FOREIGN BOOK PUBLISHERS IS GREATLY APPRECIATED.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unista12"
        explicitPrevious
        overviewHref="/unistaoverview"
        nextHref="/unista14"
      />
    </>
  );
}
