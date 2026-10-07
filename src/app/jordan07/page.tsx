import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jordan07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Fair News — Jordan — nywf64.com",
  description:
    "Fair News and Business Screen coverage of the Jordan Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jordan — Fair News (italic title).
 * Body from legacy jordan07.html (custom Fair News clippings + Business Screen
 * “Images of Modern Jordan” section).
 *
 * Stack: hero → JordanNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Jordan07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan07-title">
        <header className={styles.titleBar}>
          <h1 id="jordan07-title" className={styles.titleBarMain}>
            Fair News
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/jordan07/jordan09.jpg"
            alt="Fair News Banner"
            width={600}
            height={141}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeading}>
            Groundbreakings for Jordan and Sudan
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan07/jordan10.jpg"
                    alt="Artist's Rendering - Jordan Pavilion"
                    width={300}
                    height={157}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  The Pavilion of the Hashemite Kingdom of Jordan.
                </figcaption>
                <hr className={styles.captionRule} />
              </figure>
              <p>
                The Hashemite Kingdom of Jordan broke ground on July 2nd for its
                pavilion. Both Robert Moses, president of the New York
                World&apos;s Fair, and Charles Poletti, vice president of
                International Affairs and Exhibits for the
              </p>
            </div>
            <div className={styles.col}>
              <p>
                exposition, spoke briefly, mentioning the importance of the Dead
                Sea Scrolls and the 35-ft. column from Jerash which will be
                featured attractions of the exhibit. His Excellency Abdul Monem
                Rifa&apos;i, Jordan&apos;s Ambassador to the United Nations,
                received the Fair medallion.
              </p>
              <p>
                Ground was broken for the Republic of Sudan on June 27th. His
                Excellency Dr. Osman El-Hadari, Ambassador of Sudan to the United
                States, and His Excellency Omar Abdel Hamid Adeel, Ambassador of
                Sudan to the United Nations, spoke briefly with Fair President
                Robert Moses and former Governor Charles Poletti. The pavilion,
                Islamic in design, is by Noel and Miller. Rising on a 14,000 sq.
                ft. site, it will house a small theatre, a specialty shop, and
                displays of Sudanese products and handicrafts.
              </p>
            </div>
          </div>

          <Image
            src="/images/jordan07/jordan11.jpg"
            alt="Fair News Banner"
            width={600}
            height={135}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeading}>
            Pavilion of Jordan to Display History and Culture of Holy Land
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.figureNarrow}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan07/jordan12.jpg"
                    alt="King Hussein I of Jordan"
                    width={100}
                    height={115}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  His Majesty King Hussein I
                </figcaption>
              </figure>
              <p>
                His Majesty King Hussein I of the Hashemite Kingdom of Jordan
                will visit the Fair in late April, according to word received by
                Mr. Moses and Governor Poletti. The monarch is expected to tour
                the grounds and inspect, especially, his country&apos;s pavilion.
              </p>
              <p>
                The pavilion of the Hashemite Kingdom of Jordan is a unique
                architectural undertaking which was designed to depict the
                ancient Land of Jordan - the cradle of all Western civilization.
                In Jordan, a country rich in religious background, are found the
                great shrines of Jerusalem, Bethlehem and Jericho, and the
                storied
              </p>
            </div>
            <div className={styles.col}>
              <p>River Jordan and the Dead Sea.</p>
              <p>
                Throughout the centuries, the art of Christian man has continually
                strived to represent the glory and the suffering of Christ as He
                approached Calvary. The stained glass windows of the Jordan
                Pavilion attempt to convey The Holy Spirit which emanates from
                the 14 Stations of the Way of the Cross in the Holy City of
                Jerusalem. The Pavilion&apos;s skylights of multicolored
                many-faceted glass reflect the spirit of light ever present in
                the Holy Land - the light from above which brings inspiration and
                direction to man below.
              </p>
              <p>
                On exhibition in the pavilion will be a collection of Dead Sea
                Scrolls which were discovered during 1947 in caves on the banks
                of the Dead Sea. These Scrolls comprise the earliest known
                manuscripts of the Old Testament. An ancient column brought from
                the old Jordanian city of Jerash will stand near the pavilion.
                This column is a gift from His Majesty King Hussein to the
                World&apos;s Fair and the City of New York, and will remain in
                Flushing Meadow Park after the conclusion of the Fair.
              </p>
            </div>
          </div>

          <Image
            src="/images/jordan07/jordan13.jpg"
            alt="Fair News Banner"
            width={600}
            height={139}
            className={styles.banner}
            unoptimized
          />

          <h2 className={styles.issueHeadingItalic}>
            Fair Protocol Office Prepares for Visiting State Dignitaries
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <p>
                One of the most important functions of the Fair&apos;s operating
                seasons will be the supervision of official Fair ceremonies and
                the handling of visits by chiefs of state and other prominent
                governmental, business and community leaders from the United
                States and abroad. This responsibility rests with the Office of
                the Chief of Protocol, located in the Fair&apos;s Administration
                Building.
              </p>
              <p>
                All official Fair invitations will be issued by protocol, which
                will keep a master guest list, available to all exhibitors.
                Liaison will be maintained with the U.S. World&apos;s Fair
                Commissioner, the Commissioners General of international
                pavilions, the managers of state, industrial and transportation
                exhibits, and officials of the New York City, New York State and
                Federal governments. Visits by dignitaries will be handled
              </p>
            </div>
            <div className={styles.col}>
              <p>
                in conjunction with the Fair host division and respective
                exhibitor representatives.
              </p>
              <p>
                Ambassador Richard C. Patterson, Jr. is Chief of Protocol.
                Serving as Deputy Chief of Protocol is Gates Davison, formerly of
                the Fair&apos;s International Division. Other officers include
                Roberto deMendoza, Assistant Chief of Protocol and Saeed Kahn,
                assistant to the Chief of Protocol.
              </p>
              <p>
                Communications and Public Relations will service news media with
                all information received from Protocol regarding details of
                special visits, arrival and departure time, press conferences,
                speeches, public appearances, official receptions, dinners,
                banquets and other highlights.
              </p>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: <em>Fair News</em> Issues - Official Newsletters of the
            1964-1965 New York World&apos;s Fair
          </p>
          <hr className={styles.sectionRule} />

          <h2 className={styles.modernTitle}>The Images of Modern Jordan</h2>

          <div className={styles.modernBody}>
            <p>
              <span className={styles.dropCap}>J</span>
              ORDAN&apos;S PAVILION, scene of much controversy over a mural on
              the wall which calls attention to the plight of homeless
              Palestinian Arabs (which has aroused objections from Israeli
              groups) features an open hall downstairs with a lunch counter and
              a stage equipped for live or film showings in the center. There is
              a seating capacity of 125. Just off the same hall are actual
              specimens of the Dead Sea Scrolls.
            </p>
            <p>
              The film being shown here on a regular basis is{" "}
              <em>This Is Jordan</em> (produced by United States Productions)
              showing many of the travel attractions of modern Jordan. Equipment
              used is a Triangle 16mm continuous projector.
            </p>
            <p>
              Upstairs, opposite the mural, are continuous slide projectors,
              operating with individual sound tapes which describe Jordan&apos;s
              expanding economy and increasing number of schools, hospitals,
              roads and other facilities.
            </p>
          </div>

          <p className={styles.photoCaption}>
            Jordan uses six of these round balls, containing continuous slide
            projectors and accompanying sound..
          </p>
          <figure className={styles.wideFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/jordan07/jordan40.jpg"
                alt="Jordan Projectors"
                width={600}
                height={219}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.source}>
            SOURCE: <em>Business Screen Magazine</em> World&apos;s Fair Report
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan06"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan08"
      />
    </>
  );
}
