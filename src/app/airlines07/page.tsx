import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../airlinesEssay.module.css";

export const metadata: Metadata = {
  title: "American Airlines — Airlines & The Fair — nywf64.com",
  description:
    "American Airlines Fair promotion — April 1964 timetable Q&A, 727 Astrojet, mini-guide, and travel-agent brochure — on nywf64.com.",
};

/**
 * Airlines feature page 7 (legacy airlines08.html remapped to /airlines07).
 * Stack: hero → Airlines nav (Page 8) → navy title bar → article → nav2
 * PREVIOUS → /airlines06; NEXT → /airlines08
 */
export default function Airlines07Page() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <article className={styles.article} aria-labelledby="airlines07-title">
        <header className={styles.titleBar}>
          <h1 id="airlines07-title" className={styles.titleBarMain}>
            American Airlines
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.carrierRow}>
            <Image
              src="/images/airlines07/airlines18.jpg"
              alt="Timetable Cover"
              width={212}
              height={480}
              className={styles.carrierCover}
              unoptimized
            />
            <div className={styles.americanCopy}>
              <Image
                src="/images/airlines07/airlines26.jpg"
                alt="American purchases advance tickets"
                width={200}
                height={192}
                className={styles.americanLeadPhoto}
                unoptimized
              />
              <p className={styles.americanCaption}>
                G. Marion Sadler (left), vice president and general manager of
                American Airlines, is shown presenting Thomas J. Deegan, Jr.,
                chairman of the Fair&apos;s Executive Committee, with a $101,000
                check and the agreement committing American Airlines to sell a
                million or more World&apos;s Fair tickets during the two-year
                life of the Fair.
              </p>
              <p>
                Of all the airlines to jump on the World&apos;s Fair Bandwagon,
                American promoted the Fair most in terms of how American could
                benefit the Fairgoer. They were represented at the Fair by an
                information and ticket office located in the American Express
                Pavilion.
              </p>
              <p>
                It is interesting to study American&apos;s timetable in effect
                just days after the opening of the Fair. The Unisphere is
                nowhere to be seen. Rather, American promotes the Fair as a part
                of a total vacation package in New York and spends more time
                talking about the other sights of the city then the Fair.
              </p>
              <p>
                Typical 1964 round trip <em>Astrojet</em> fares on American
                averaged $166 Coach and $212 First Class between New York and
                Dallas, $257 Coach and $330 First Class to Phoenix and $290
                Coach and $373 First Class between New York and San Francisco.
              </p>
            </div>
          </div>

          <p className={styles.qaTitle}>
            Answers to questions you
            <br />
            may want to ask when you go to
            <br />
            New York for the World&apos;s Fair.
          </p>

          <div className={styles.qaGrid}>
            <div>
              <p className={styles.qaItem}>
                <strong>Q.</strong> How much does a double room cost at a
                first-rate hotel?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> From $14 to $26.
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> Can American Airlines make arrangements for
                my stay in New York?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> Yes. American has a wide variety of package
                programs, ranging from $15.50 for two nights to $145.00 for six
                nights (per person). Call American or see your travel agent for
                details.
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> How much does a typical sight seeing tour of
                New York City cost?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> About $3.75. And you&apos;ll see the
                Washington Market, the Fulton Fish Market, Chinatown, the Bowery,
                the Empire State Building, United Nations Headquarters,
                Rockefeller Center. The Stock Exchange and lots more. Or you can
                take a boat ride around Manhattan Island for $2.50.
              </p>
              <Image
                src="/images/airlines07/airlines19.jpg"
                alt="Stock Exchange"
                width={145}
                height={192}
                className={styles.qaPhoto}
                unoptimized
              />
              <p className={styles.qaItem}>
                <strong>Q.</strong> How much is a taxi to the Fair from a hotel
                in mid-town Manhattan?
              </p>
            </div>

            <div>
              <p className={styles.qaItem}>
                <Image
                  src="/images/airlines07/airlines21.jpg"
                  alt="Token"
                  width={60}
                  height={58}
                  className={styles.qaToken}
                  unoptimized
                />
                <strong>A.</strong> About $3. But a 15c subway token will get
                you there as quickly.
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> Where is one of the best places to see the
                famous N.Y. skyline?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> From the Staten Island Ferry. And the ride
                is only a nickel.
              </p>
              <Image
                src="/images/airlines07/airlines20.jpg"
                alt="Skyline"
                width={140}
                height={91}
                className={styles.qaPhoto}
                unoptimized
              />
              <p className={styles.qaItem}>
                <strong>Q.</strong> My husband and I, our 15-year-old boy and our
                11-year-old daughter would like to fly to the World&apos;s Fair.
                Can we get any kind of discount by taking one of your planes?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> Yes. We have a new family plan for coach
                travel. When a family travels from noon Mondays to 6 a.m. Friday,
                the husband pays the full coach fare, the wife gets 25% off. All
                children 12 through 21 also get 25% off. Children under 12 fly
                for 50% off. And a child under 2 can fly free. (Discounts for
                children under 12 apply every day in the week.) The same
                discounts apply when you take your family first class. (If mother
                travels as head of the family, she pays the regular fare and the
                children get the full discount.)
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> How much is a horse-and-buggy ride through
                Central Park?
              </p>
            </div>

            <div>
              <p className={styles.qaItem}>
                <strong>A.</strong> $5 for the first half hour and $2 for
              </p>
              <Image
                src="/images/airlines07/airlines22.jpg"
                alt="Hansom Cab"
                width={104}
                height={115}
                className={styles.qaPhoto}
                unoptimized
              />
              <p className={styles.qaItem}>each additional half hour.</p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> Can I make arrangements to see a Broadway
                show?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> Yes. Tickets can be obtained in connection
                with the many package tours offered by American Airlines.
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> Where can I get more information about the
                New York World&apos;s Fair?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> Stop in at any American Airlines ticket
                office for a free descriptive booklet. Or see your travel agent
                for a copy.
              </p>
              <p className={styles.qaItem}>
                <strong>Q.</strong> What&apos;s the advantage of flying an
                American Airlines jet to the Fair?
              </p>
              <p className={styles.qaItem}>
                <strong>A.</strong> All of our jets are equipped with fan-jet
                engines. They&apos;re 30% more powerful than ordinary jets. We
                call them Astrojets. And American has conveniently scheduled
                non-stop flights to New York throughout the day.
              </p>
              <Image
                src="/images/airlines07/airlines23.jpg"
                alt="Astrojet"
                width={140}
                height={114}
                className={styles.qaPhoto}
                unoptimized
              />
            </div>
          </div>

          <p className={styles.sourceLeft}>
            SOURCE: <em>American Airlines</em> timetable, April, 1964, Bob Esler
            Collection
          </p>
          <p className={styles.sourceLeft}>
            SOURCE: Top Photo: NY World&apos;s Fair Progress Report #8, April
            22, 1963
          </p>

          <div className={styles.escapeRow}>
            <Image
              src="/images/airlines07/airlines24.jpg"
              alt="727 Advertisement"
              width={201}
              height={474}
              className={styles.escapeAd}
              unoptimized
            />
            <div className={styles.americanCopy}>
              <p className={styles.escapeHeading}>
                There&apos;s no Escaping the Fair on American Airlines!
              </p>
              <p>
                The Fair was everywhere on American. Even a trip to the lavatory
                or an inflight meal served as an opportunity to advertise the
                event as this packaged <em>Wash&apos;n Dri</em> moist towelette
                shows!
              </p>
            </div>
          </div>

          <div className={styles.toweletteRow}>
            <div className={styles.americanCopy}>
              <p>
                Today, America&apos;s airlines are retiring the venerable Boeing
                727 tri-jet from their fleets at a rapid pace as newer, quieter,
                more efficient aircraft take its place. In 1964,{" "}
                <em>everyone</em> wanted to ride this sleek new jet with its
                rocket fast takeoff. The 727 was designed to operate from
                mid-sized airports and that meant pure jet travel was now
                available to more and more travelers. A quick look at that April
                timetable shows American Airlines was operating their first and
                only 727 on the New York, Chicago, Dallas roundtrip run.{" "}
                <em>Fly to the Fair on American&apos;s new 727 Astrojet!</em>
              </p>
            </div>
            <Image
              src="/images/airlines07/airlines25.jpg"
              alt="Moist Towelette"
              width={237}
              height={181}
              className={styles.towelettePhoto}
              unoptimized
            />
          </div>

          <div className={styles.americanCopy}>
            <p>
              American published this 68 page mini-guide to the Fair, available
              to customers through American ticket offices and travel agents. It
              contains good descriptions of nearly every pavilion at the Fair
              along with information on things to see and do in New York and, of
              course, the several pages touting American as the way to go to the
              Fair.
            </p>
          </div>

          <div className={styles.guidePair}>
            <Image
              src="/images/airlines07/airlines27.jpg"
              alt="Guide Cover"
              width={230}
              height={325}
              className={styles.guidePhoto}
              unoptimized
            />
            <Image
              src="/images/airlines07/airlines28.jpg"
              alt="Guide Back"
              width={230}
              height={322}
              className={styles.guidePhoto}
              unoptimized
            />
          </div>

          <div className={styles.posterRow}>
            <div>
              <Image
                src="/images/airlines07/airlines35.jpg"
                alt="AA Poster"
                width={165}
                height={244}
                className={styles.posterPhoto}
                unoptimized
              />
              <p className={styles.posterCaption}>
                American Airlines poster advertises the Fair
              </p>
            </div>
            <div className={styles.posterCopy}>
              <h3>Fly ASTROJET To The Fair</h3>
              <p>
                Make this a New York World&apos;s Fair vacation . . . a
                combination of an exciting and glamorous city and the largest
                Fair this world has ever known. You owe yourself this memorable
                experience. And it is so easy when you fly American Airlines
                Astrojet.
              </p>
              <p>
                Every American Airlines Astrojet is a fan-jet -- 30% more
                powerful than ordinary jets. They take off faster, climb faster,
                and have greater reserve power to help get you there on time.
                Dependability, comfort and superb service are hallmarks of
                American&apos;s service. That&apos;s why experienced air
                travelers fly American.
              </p>
            </div>
          </div>
          <p className={styles.sourceLeft}>
            SOURCE: <em>American Airlines</em> World&apos;s Fair promotional
            booklet
          </p>

          <p className={styles.brochureHead}>Come to the Fair -</p>
          <p className={styles.brochureHead}>See New York, too</p>
          <p className={`${styles.brochureHead} ${styles.brochureHeadAccent}`}>
            Don&apos;t Waste a
          </p>
          <p className={`${styles.brochureHead} ${styles.brochureHeadAccent}`}>
            Minute - FLY!
          </p>

          <div className={styles.brochureRow}>
            <div className={styles.brochureCopy}>
              <p>
                Even with all the time in the world, you&apos;d want to fly to
                New York. But with so much to see and do in a few days, only
                flying makes sense. Flying, you spend practically all your time
                there ... travel in cool comfort, arrive fresh - ready for the
                excitement waiting.
              </p>
              <p>
                And what excitement there is! At the Fair, the fabulous
                Unisphere rising 120 feet above its broad reflecting
                pool...breath-taking architecture of one pavilion after another,
                housing the finest examples of industrial production, scientific
                discoveries and inventions...fascinating exhibits from the
                nations of the world and our own states. Stroll tree-shaded
                malls around cool pools, rest beside sparking fountains. See the
                latest in transportation, the finest in amusements and
                entertainment.
              </p>
              <p>
                After the Fair -- or before -- take in glamorous New York City,
                Visit famous nightclubs...the theatre...museums...cathedrals.
                From the Empire State building, look down upon the jeweled
                pattern of Manhattan...the United Nations
                buildings...broadcasting stations, Chinatown, Harlem, fabulous
                stores.
              </p>
              <p>
                <em>
                  <strong>
                    Plan your trip now -- and for reservations call our airline
                    office or the Travel Agent listed on back of this folder.
                  </strong>
                </em>
              </p>
            </div>
            <Image
              src="/images/airlines07/airlines29.jpg"
              alt="Travel Agent Brochure"
              width={212}
              height={480}
              className={styles.brochurePhoto}
              unoptimized
            />
          </div>
          <p className={styles.sourceLeft}>
            SOURCE: <em>American Airlines</em> Travel Agent brochure
          </p>

          <figure className={styles.periodicalFigure}>
            <p className={styles.periodicalCaption}>
              Periodical advertisement by American reminding readers that the
              1965 Season would be the Fair&apos;s last.
            </p>
            <Image
              src="/images/airlines07/airlines36.jpg"
              alt="Advertisement"
              width={355}
              height={506}
              className={styles.periodicalPhoto}
              unoptimized
            />
          </figure>
          <p className={styles.sourceLeft}>SOURCE: online Auction</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/airlines06"
        explicitPrevious
        nextHref="/airlines08"
      />
    </>
  );
}
