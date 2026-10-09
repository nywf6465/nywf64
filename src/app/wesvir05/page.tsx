import type { Metadata } from "next";
import Image from "next/image";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wesvir05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Brochure: An Invitation to the West Virginia Pavilion — West Virginia — nywf64.com",
  description:
    "Brochure: An Invitation to the West Virginia Pavilion — West Virginia at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function LeadIn() {
  return <span className={styles.leadIn}>...... </span>;
}

/**
 * West Virginia — Invitation brochure (interleaved images + copy).
 * Body from legacy wesvir05.html.
 *
 * Stack: hero → WesvirNavChrome → navy title → article → Nav2Bar.
 */
export default function Wesvir05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="West Virginia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wesviroverview/hero-banner.jpg"
            alt="West Virginia pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WesvirNavChrome />

      <article className={styles.article} aria-labelledby="wesvir05-title">
        <header className={styles.titleBar}>
          <h1 id="wesvir05-title" className={styles.titleBarMain}>
            Brochure: An Invitation to the West Virginia Pavilion
          </h1>
        </header>

        <div className={styles.brochureWrap}>
          <div className={styles.coverRow}>
            <Image
              src="/images/wesvir05/wesvir09.jpg"
              alt="Great Seal of the State of West Virginia"
              width={187}
              height={174}
              unoptimized
            />
            <p className={styles.coverText}>
              AN
              <br />
              INVITATION
              <br />
              TO
              <br />
              THE
              <br />
              <span className={styles.coverTitle}>
                West Virginia
                <br />
                Pavilion
              </span>
              NEW
              <br />
              YORK
              <br />
              WORLD&apos;S
              <br />
              FAIR
              <br />
              1964-1965
            </p>
          </div>

          <Image
            src="/images/wesvir05/wesvir08.jpg"
            alt="World's Fair Artwork"
            width={481}
            height={282}
            className={styles.fullWidthImg}
            unoptimized
          />

          <div className={styles.panelDark}>
            <p>
              <LeadIn />
              1964 marks the beginning of West Virginia&apos;s second century as
              a State.
            </p>
            <p>
              <LeadIn />
              1964 also heralds the opening of the greatest international
              exposition in history -- the New York World&apos;s Fair.
            </p>
            <p>
              <LeadIn />
              Whereas the 1963 State Centennial reflected 100 years of history,
              progress and achievenemt in the Mountain State, the West Virginia
              Pavilion at the 1964-1965 World&apos;s Fair is intended to
              catapult the State over the threshold of today and into a new
              century of achievement -- the world of the 21st Century.
            </p>

            <p className={styles.sectionLabel}>
              THEME OF THE WORLD&apos;S FAIR:
              <hr />
            </p>
            <p>
              <LeadIn />
              As expressed by officials of the New York World&apos;s Fair,
              &quot;the basic purpose of the Fair is to help achieve &apos;Peace
              through Understanding&apos;; that is, to assist in educating the
              peoples of the world as to the interdependence of nations and the
              need for universal and lasting peace. To that end, the Fair is
              dedicated to showing man&apos;s achievements on a shrinking globe
              in an expanding universe, his inventions, discoveries, arts,
              skills and aspirations; and also to the presentation of wholesome
              entertainment.&quot;
            </p>

            <p className={styles.sectionLabel}>
              SITE OF THE WORLD&apos;S FAIR:
              <hr />
            </p>
            <p>
              <LeadIn />
              The World&apos;s Fair will take place on a 646-acre site at
              Flushing Meadow Park in the City of New York. Between 70,000,000
              and 100,000,000 visitors from all over the world are expected to
              attend the Fair during the two years between April and October,
              1964 and 1965. The World&apos;s Fair is accessible by air, by
              water, by rail, by car and by bus. More than 600 hotels and motels
              will accommodate visitors to the New York area.
            </p>
          </div>

          <p className={styles.sectionLabelLight}>
            THE WEST VIRGINIA PAVILION:
            <hr />
          </p>
          <div className={styles.brochureLight}>
            <p>
              <span className={styles.leadInLight}>...... </span>
              West Virginia&apos;s Pavilion at the New York World&apos;s Fair
              occupies a site of over 34,000 square feet in the federal and state
              sector, opposite the $17 million United States Exhibit. The
              structure, which is approximately 15,000 square feet in size,
              reflects in its design the products and resources of the State.
            </p>
            <div className={styles.splitRow}>
              <p>
                <span className={styles.leadInLight}>...... </span>
                The steel-framed building is a modified L-shape design, with a
                pergola-like extension providing an additional wing of
                landscaped garden area. Sculptured pre-cast concrete panels and
                artistically-treated glass provide an unusual pattern of
                exterior wall treatment. The outer structure also features
                majestic full color views of West Virginia&apos;s leading scenic
                resorts. Wood is used extensively for interior finishings and
                exterior grills. Five translucent domes rise above the roof and
                give further definition to the structure, functional insulation
                and polarized glare-free lighting.
              </p>
              <div className={styles.splitRowImg}>
                <Image
                  src="/images/wesvir05/wesvir10.jpg"
                  alt="Site of West Virginia Pavilion"
                  width={200}
                  height={155}
                  unoptimized
                />
              </div>
            </div>
            <p>
              <span className={styles.leadInLight}>...... </span>
              A free form reflective pool envelops three sides of the building.
              The pool is bridged by a gently inclined ramp which affords access
              to the pavilion. Adjacent to the main entrance, a towering
              sculptural symbol rises to a height of 50 feet and represents the
              aspirations of the people of West Virginia through the development
              of industry, education and natural resources.
            </p>
          </div>

          <p className={styles.sectionLabelLight}>
            THE CONCEPT:
            <hr />
          </p>
          <div className={`${styles.brochureLight} ${styles.twoCol}`}>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Upon entering the pavilion, the visitor will see, hear, breathe,
              touch and sense the spirit of West Virginia. Through guides,
              motion pictures, audio visual aids, television, recordings,
              displays and the life-like dioramas, the audience will be
              transported to places such as Hawk&apos;s Nest, Harpers Ferry,
              Blackwater Falls, Oglebay Park, White Sulphur Springs, the
              Monongahela National Forest, the West Virginia University Medical
              School, Weiss Knob
            </p>
            <p>
              Ski Slope, the State Fair, the State Capitol, Biennerhasset
              Island, Bluestone Gorge, the glass blowing crafts, major industrial
              plants and many other sectors of the state.
              <br />
              <br />
              The World&apos;s Fair will serve as a dynamic showcase for
              exhibiting a master plan of progress. Specific targets for the
              60&apos;s will be announced for the establishment and acceleration
              of defense industries, public and private development projects,
              middle income housing, jet age transportation, scientific
              installations in the aerospace and electronic fields, arterial
              highway systems, improved use
            </p>
          </div>

          <p className={styles.captionSmall}>
            INTERNATIONAL FAIR CONSULTANTS, 10 Columbus Circle, New York 19,
            N.Y. PLANNING/CONSTRUCTION/MANAGEMENT
          </p>
          <Image
            src="/images/wesvir05/wesvir11.jpg"
            alt="Artist's Rendering of Pavilion"
            width={481}
            height={139}
            className={styles.fullWidthImg}
            unoptimized
          />
          <p className={styles.captionSmallRight}>
            IRVING BOWMAN &amp; ASSOCIATES, Charleston, West Virginia FREDERIC P.
            WIEDERSUM ASSOCIATES, New York, N.Y. ARCHITECTS/ENGINEERS
          </p>

          <div className={`${styles.brochureLight} ${styles.twoCol}`}>
            <p>
              of natural resources, increased agricultural productivity,
              expansion of trade and commerce and the systematic enlargement of
              parks and forest preserves as recreational and tourist attractions
              for the entire eastern half of the United States.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              As a means of encouraging new industry, the State Department of
              Commerce will have industrial development personnel at the
              World&apos;s Fair to advise out-of-state business executives of the
              limitless opportunities and facilities for establishing new plants
              in West Virginia. Reservations will be taken for businessmen to
              make actual tours of the State, inspect sites, and
            </p>
          </div>
          <div className={`${styles.brochureLight} ${styles.twoCol}`}>
            <p>
              confer with governmental and community leaders. A vacation planning
              service in the pavilion will make all necessary travel and hotel
              accommodations for families interested in West Virginia as an ideal
              vacation center.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              The West Virginia Pavilion will feature a model community of the
              future -- an industrial park complex with provision for business
              opportunity, gracious living and recreation side by side.
              World&apos;s Fair visitors will be introduced to West Virginia as a
              Land for Relaxation -- an inviting oasis in which to live, work and
              play on a year-round basis.
            </p>
          </div>

          <Image
            src="/images/wesvir05/wesvir12.jpg"
            alt="Pavilion Layout"
            width={482}
            height={226}
            className={styles.fullWidthImg}
            unoptimized
          />

          <p className={styles.sectionLabelLight}>
            PAVILION AREAS:
            <hr />
          </p>
          <div className={`${styles.brochureLight} ${styles.pavilionAreas} ${styles.twoCol}`}>
            <div>
              <p>
                <strong>1) Informational Rotunda </strong>
                Exhibits depicting the State in all its major aspects, including
                the history, culture, government and educational institutions.
              </p>
              <p>
                <strong>2) Industrial Park </strong>
                Dramatic exhibits sponsored by West Virginia&apos;s leading
                industrial firms, including chemical, electrical, ceramic, forest
                product, glass, coal, iron, and steel, non-ferrous metals, paper,
                tobacco and textile companies.
              </p>
              <p>
                <strong>3) West Virginia Vacationland </strong>
                The largest unspoiled natural preserve in the Eastern half of the
                United States, featuring the &quot;Four Seasons Vacation
                Plan&quot; with winter, spring, summer and fall activities for the
                entire family.
              </p>
            </div>
            <div>
              <p>
                <strong>4) The Mountain Lodge </strong>
                A futuristic mountain lodge will enable World&apos;s Fair visitors
                to dine in gracious surroundings reminiscent of the natural beauty
                of the State. The circular dining area will be surrounded by
                water. Special West Virginia dishes will be served. Stereophonic
                equipment will recreate the sounds of the forest, while living
                illustrative color project the visitors into a scenic tour of the
                State.
              </p>
              <p>
                <strong>5) The Gift Shop </strong>
                Visitors will be able to take back to their home communities a
                World&apos;s Fair souvenir, such as a recording disco of the
                sounds of outer space patterned after Green Bank, a coal
                miner&apos;s cap equipped with a lamp for children, a scenic
                steropticon, or a set of stemware shown by Mrs. Kennedy during
                her televised tour of the White House.
              </p>
            </div>
          </div>

          <Image
            src="/images/wesvir05/wesvir14.jpg"
            alt="Radio Telescope"
            width={313}
            height={209}
            className={styles.fullWidthImg}
            unoptimized
          />

          <p className={styles.sectionLabelLight}>
            RADIO ASTRONOMY SKY
            <hr />
          </p>
          <div className={styles.brochureLight}>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Plans are under way for the West Virginia Pavilion to feature the
              Radio Astronomy Sky.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Looking to the future of mankind, this focal exhibit would dramatize
              the probe into the sky now under way at the national Radio
              Astronomy Observatory. At Green Bank, West Virginia, space
              scientists are opening new gates to the human horizons of knowledge.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Special effects would interpret the meaning of the Radio Telescope,
              explain its ability to &quot;see,&quot; relate its impact upon the
              world of science today, and explore the significance of this major
              window on the universe.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Conveyed with the speed of imagination, this spectacular show would
              be housed in a giant rotunda in the center of the West Virginia
              Pavilion
            </p>
          </div>

          <div className={`${styles.panelDark} ${styles.showcaseGrid}`}>
            <div className={styles.showcaseCol}>
              <hr />
              A
              <br />
              SHOWCASE
              <br />
              FOR
              <br />
              WEST
              <br />
              VIRGINIA
              <br />
              INDUSTRY
              <br />
              AND
              <br />
              TOURISM
              <br />
              AT
              <br />
              THE
              <br />
              WORLD&apos;S
              <br />
              FAIR
              <hr />
            </div>
            <div>
              <Image
                src="/images/wesvir05/wesvir13.jpg"
                alt="Hulett C. Smith"
                width={85}
                height={109}
                unoptimized
              />
              <p>
                <LeadIn />
                As part of its continuing program of encouraging the prosperous
                development of the State, the Department of Commerce will invite
                state firms to participate in the West Virginia Pavilion at the
                New York World&apos;s Fair.
              </p>
              <p>
                <LeadIn />
                Selected companies having a plant or office employing at least
                twenty-five residents of the State will be awarded free space in
                the West Virginia Pavilion.
              </p>
              <p>
                <LeadIn />
                These companies must agree to:
              </p>
              <ol className={styles.commerceList}>
                <li>
                  Limit the size of their exhibit in accordance with the rules of
                  the pavilion.
                </li>
                <li>Adhere to the highest standards of exhibit practice.</li>
                <li>
                  Contribute to the cost and maintenance of the exhibit which a)
                  will carry complete commercial identification and a full
                  corporate business message, and b) will be built according to
                  specifications and an over-all plan.
                </li>
                <li>
                  Special exhibit arrangements will be made for smaller
                  businesses and tourist organizations wishing to be represented
                  at the Fair.
                </li>
              </ol>
              <p>
                <LeadIn />
                In this, and in every other undertaking, West Virginia is dedicated
                to helping make your investment in the State a profitable one.
              </p>
              <p className={styles.signature}>
                Hulett C. Smith
                <br />
                Commissioner of Commerce
              </p>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: Invitation to Participate, West Virginia Pavilion
          </p>

          <div className={styles.governorSection}>
            <p className={styles.governorHeading}>
              A MESSAGE FROM THE GOVERNOR
              <hr />
            </p>
            <div className={styles.governorPhotos}>
              <Image
                src="/images/wesvir05/wesvir16.jpg"
                alt="State Capitol Building"
                width={198}
                height={275}
                unoptimized
              />
              <Image
                src="/images/wesvir05/wesvir15.jpg"
                alt="William Wallace Barron & Seal"
                width={119}
                height={275}
                unoptimized
              />
            </div>
            <p>
              <span className={styles.leadInLight}>...... </span>
              West Virginia&apos;s pavilion at the World&apos;s Fair will welcome
              more visitors to our midst than a half century of tourism
              accomplished prior to World War II.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              125,000,000 Americans now live within one hour&apos;s flying time
              from West Virginia. These are our actual neighbors. This is the
              audience we intend to reach through our participation at the New
              York World&apos;s Fair.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              We shall encourage more and more people to do business in our State,
              to buy our products, to extract our abundant resources, to take
              full advantage of our skilled, reservoir of manpower, to utilize our
              planning and research facilities, to avail themselves of the
              incentive system which includes 100% financing for new plants or to
              enjoy a leisurely vacation simply &quot;meandering&quot; through the
              State as our very special guests.
            </p>
            <p>
              <span className={styles.leadInLight}>...... </span>
              Once the World&apos;s Fair has ended, the people of West Virginia
              will have a new and tangible legacy -- a cultural and civic center.
              This entire building will be removed from the Fair and returned to
              West Virginia for installation at the Capitol as a permanent State
              Archive-Library-Museum, to be used and enjoyed by generations of
              children and adults alike.
            </p>
            <p className={styles.governorInvite}>
              <span className={styles.leadInLight}>...... </span>
              To all of you, may I extend this invitation:
            </p>
            <p className={styles.governorInvite}>
              <span className={styles.leadInLight}>...... </span>
              See West Virginia at the Fair!
            </p>
            <p className={styles.governorName}>William Wallace Barron</p>
            <p>Governor</p>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/wesvir04" nextHref="/wesvir06" />
    </>
  );
}
