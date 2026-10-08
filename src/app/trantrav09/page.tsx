import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "To the Moon and Beyond — Transportation & Travel — nywf64.com",
  description:
    "To the Moon and Beyond at the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Trantrav09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantrav09-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav09-title" className={styles.titleBarMain}>
            To the Moon and Beyond
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.adBlock}>
            <p className={styles.source}>
              Source: National Advertising for <em>To the Moon and Beyond</em>
            </p>
            <p className={styles.adLead}>YOUR MOST MEMORABLE EXPERIENCE</p>
            <p className={styles.adLead}>AT THE NEW YORK WORLD&apos;S FAIR!</p>
            <div className={styles.cineramaRow}>
              <span>THE NEW</span>
              <Image
                src="/images/trantrav09/tratra37.jpg"
                alt="CINERAMA"
                width={300}
                height={68}
                className={styles.cineramaLogo}
                unoptimized
              />
              <span>- 360° PROCESS</span>
            </div>
            <p className={styles.adLead}>
              TAKES <span className={styles.you}>YOU</span> ...
            </p>
            <Image
              src="/images/trantrav09/tratra35.jpg"
              alt=""
              width={600}
              height={263}
              className={styles.borderlessImg}
              unoptimized
            />
            <Image
              src="/images/trantrav09/tratra36.jpg"
              alt=""
              width={600}
              height={213}
              className={styles.borderlessImg}
              unoptimized
            />
            <p>
              <span className={styles.you}>YOU</span> will be propelled on the most
              fantastic, incredible voyage through billions of miles of space ... from its
              utmost outer reaches ... back to the Earth itself, and into the center of the
              minutest atom. All through the magic of Cinerama!
            </p>
            <p className={styles.adFine}>BEGINNING APRIL 22</p>
            <p><strong>TRANSPORTATION &amp; TRAVEL PAVILION</strong></p>
            <p className={styles.adFine}>3 SHOWINGS EVERY HOUR</p>
            <p className={styles.adOrder}>
              <strong>
                ORDER TICKETS IN ADVANCE and avoid the lines. Send check or money-order to
                CINERAMA, Inc., Dept. TVG, c/o Moon, 575 Lexington Ave., N.Y., N.Y. 10021.
                Adult tickets 75c each; children under 12, 25c each.
              </strong>
            </p>
          </section>

          <hr className={styles.hr} />

          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 27, February 19, 1964
            </p>
            <Image
              src="/images/trantrav09/tratra38.jpg"
              alt="Newsletter Header"
              width={600}
              height={106}
              className={styles.borderlessImg}
              unoptimized
            />
            <div className={styles.newsletterMeta}>
              <span>Number 27</span>
              <span>February 19, 1964</span>
            </div>
            <Image
              src="/images/trantrav09/tratra39.jpg"
              alt="Moses &amp; Flight Attendants"
              width={400}
              height={278}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>MOON STRUCK</u> -- World&apos;s Fair President Robert Moses holds model of
              the moon as TWA hostess Mary Nietom (left) and United Air Lines stewardess
              Maureen Costello look on. Steelwork at the rear will frame T&amp;T
              Pavilion&apos;s giant &quot;Moon Dome.&quot; (Moon model through Grosset &amp;
              Dunlap, Inc.)
            </p>
            <hr className={styles.newsletterHr} />
            <p className={styles.newsItem}>
              <u>T&amp;T TOPPED OFF</u> -- Robert Moses joined more than forty exhibitors
              and guests at topping-off ceremonies for the Transportation &amp; Travel
              Pavilion February 7. The final steel section of the building was placed into
              the Moon Dome at 2:30 P.M. Robert O. Thatcher, T&amp;T president, guaranteed
              completion of construction on schedule.
            </p>
            <p className={styles.newsItem}>
              <u>LARGEST MOON MODEL REVEALED</u> -- The 96-foot-high dome will be
              transformed in coming weeks into the largest model of the surface of the moon
              ever built. In the next step, the dome will be sheathed with more than 1,500
              plywood panels, each 4 x 8 feet in size. Under supervision of the U.S. Army
              Mapping Service, the craters, valleys, seas and other features of the moon will
              then be mapped on the plastic-coated dome.
            </p>
            <p className={styles.newsItem}>
              <u>CRATERS ON ORDER</u> -- Indicating the scope of the project is the size of
              the order placed for scale-model craters. More than 750, ranging in diameter
              from eight feet to approximately two feet, are already in production.
              Completed dome will be visible throughout the Fair, and effectively lighted at
              night.
            </p>
            <p className={styles.newsItem}>
              <u>INSIDE STORY</u> -- Inside the dome, as previously reported, Cinerama,
              Inc. will present &quot;To the Moon and Beyond,&quot; utilizing the new
              &quot;Spacearium-360&quot; technique. Dramatic motion picture will completely
              surround the audience -- on all sides and above. show is expected to rank
              among top attractions at the Fair.
            </p>
            <Image
              src="/images/trantrav09/tratra40.jpg"
              alt="Newsletter Footer"
              width={600}
              height={27}
              className={styles.borderlessImg}
              unoptimized
            />
          </section>

          <hr className={styles.hr} />

          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 34, March 31, 1964
            </p>
            <Image
              src="/images/trantrav09/tratra38.jpg"
              alt="Newsletter Header"
              width={600}
              height={106}
              className={styles.borderlessImg}
              unoptimized
            />
            <div className={styles.newsletterMeta}>
              <span>Number 34</span>
              <span>March 31, 1964</span>
            </div>
            <p className={styles.newsItem} style={{ textAlign: "center" }}>
              <u>BULLETIN</u>
            </p>
            <p className={styles.newsItem}>
              <u>FIRST EUROPEAN AIRLINE ENTERS T&amp;T</u> -- KLM Royal Dutch Airlines will
              sponsor &quot;To the Moon and Beyond,&quot; the spectacular Cinerama
              production to be presented inside the Moon Dome of the Transportation &amp;
              Travel Pavilion. KLM has also scheduled its exhibit in the T&amp;T Pavilion.
            </p>
            <p className={styles.newsItem}>
              <u>JOURNEY INTO SPACE</u> -- The space show will be one of the top hits of
              the Fair. It has been produced by Cinerama, Inc., in a dramatic new motion
              picture process called Spacearium-360. Utilizing all of a gigantic, domed
              screen, it will give viewers the sensation of soaring through the vast reaches
              of space -- passing the Moon, ranging through the Solar System, entering the
              structure of matter itself, and more.
            </p>
            <div className={styles.klmRow}>
              <Image
                src="/images/trantrav09/tratra41.jpg"
                alt="KLM Logo"
                width={150}
                height={118}
                className={styles.borderlessImg}
                unoptimized
              />
              <p className={styles.newsItem}>
                <u>FROM A TO Z (AMSTERDAM TO ZURICH)</u> -- KLM spans the world, flying to
                104 cities on all six continents. Its world-wide flight experience has been
                developed over 43 years of passenger flights. The KLM fleet of 90 planes is
                maintained at the company&apos;s own workshop at Amsterdam Airport, valued at
                $6,000,000. A total of 3,600 mechanics and engineers check and re-check KLM
                aircraft, with the company spending about 52,333 man hours a year to maintain
                one DC-8 jet.
              </p>
            </div>
            <p className={styles.newsItem} style={{ textAlign: "center" }}>* * *</p>
            <p className={styles.newsItem}>
              <u>EXECUTIVE CONCOURSE FILLS</u> -- Only a few suites remain available in the
              Executive Concourse of the T&amp;T Pavilion. The most recent new occupant:
              Insurance Company of North America...Industry participation in the T&amp;T
              Pavilion continues to expand as the opening of the Fair approaches. Look for
              announcement of an exhibit by one of the world&apos;s leading hotel chains
              within a few days.
            </p>
            <Image
              src="/images/trantrav09/tratra40.jpg"
              alt="Newsletter Footer"
              width={600}
              height={27}
              className={styles.borderlessImg}
              unoptimized
            />
          </section>

          <hr className={styles.hr} />

          <section className={styles.magazine}>
            <p className={styles.source}>
              Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon Collection
            </p>
            <h2 className={styles.magTitle}>to the MOON in Cinerama</h2>
            <p className={styles.magSub}>
              <em>exploration of outer space on an 80-foot Spacearium dome</em>
            </p>
            <Image
              src="/images/trantrav09/tratra09.jpg"
              alt="Moon Dome"
              width={600}
              height={289}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.captionItalic}>
              <em>
                KLM-Royal Dutch Airlines is sponsor of this Cinerama journey into outer space
                showing in dome theater.
              </em>
            </p>
            <div className={styles.threeCol}>
              <div>
                <p>
                  <span className={styles.dropCap}>R</span>OCKETING VIEWERS into outer space,
                  past the moon and into the far galaxies, the Cinerama film{" "}
                  <em>To the Moon and Beyond</em> projects exploration of space against the
                  80-foot dome of a Spacearium on top of the Transportation and Travel Pavilion
                  at the Fair.
                </p>
                <p>
                  Presently sponsored by the KLM Royal Dutch Airlines, the film is shown to
                  paid admissions. It was produced by Graphic Films Corporation for Cinerama,
                  Inc. and Rod Serling narrates the film.
                </p>
                <p>
                  The audience is taken within the action which generally occurs in darkness to
                  free the viewer from conventional ideas of size and time.
                </p>
                <Image
                  src="/images/trantrav09/tratra11.jpg"
                  alt="Escalator up to Moon Dome"
                  width={200}
                  height={227}
                  className={styles.framedImg}
                  unoptimized
                />
              </div>
              <div>
                <p>
                  Speeding up the events known to astronomers, the picture shows (though
                  animation) how clouds of gas whirl into great galaxies, expanding outward
                  from one another, with old generations of stars exploding to distribute the
                  gaseous components of subsequent stellar generations, visible in our time.
                </p>
                <p>
                  Returning to earth, the film takes us to a great rocky canyon to illustrate
                  the shape of matter on the stars . . . to the middle of a great forest and
                  to the bottom of the sea. In one sequence the audience finds itself at the
                  bottom of an anthole, watching the insects crawling in and out above. But
                  the intricate workings of molecular and atomic space are the films&apos; true
                  goal. From a broad view of the cosmos, attention shifts to the familiar
                  building processes that we call the chemistry of the
                </p>
                <p className={styles.captionItalic}>
                  Left<em>
                    : a moving stairway takes viewers up to the dome theater for Cinerama
                    &quot;Moon&quot; journey.
                  </em>
                </p>
              </div>
              <div>
                <Image
                  src="/images/trantrav09/tratra10.jpg"
                  alt='Scene from "To the Moon..."'
                  width={200}
                  height={200}
                  className={styles.framedImg}
                  unoptimized
                />
                <p className={styles.captionItalic}>
                  <em>
                    Scene from Graphic Films&apos; production which explores the vast events out
                    beyond outer space.
                  </em>
                </p>
                <p>
                  planets: the relation of liquid water to the diverse manifestations of life.
                  The incredible complexity of living forms is revealed.
                </p>
                <p>
                  As a stirring conclusion, the pulsing image of a single living cell is
                  invaded by the camera, accompanied by loud &quot;booms&quot; of sound on the
                  track.
                </p>
                <p>
                  <em>To the Moon</em> was lensed by Graphic films in double-frame 65mm.
                  Final magnification to the 600X screen dimension required utmost care in the
                  production of convincing special effects material. It has succeeded.
                </p>
              </div>
            </div>
          </section>

          <hr className={styles.hr} />

          <section>
            <p className={styles.source}>
              Source: Discount Ticket for <em>To the Moon and Beyond</em>
            </p>
            <Image
              src="/images/trantrav09/tratra42.jpg"
              alt="Discount Ticket"
              width={300}
              height={285}
              className={styles.framedImg}
              unoptimized
            />
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav08"
        overviewHref="/trantravoverview"
        nextHref="/trantrav10"
        explicitPrevious
      />
    </>
  );
}
