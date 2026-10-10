import type { Metadata } from "next";
import Image from "next/image";
import { FairEraNavChrome } from "@/components/FairEraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./fair_era02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Events of 1965 — 1964/1965 The Era of the Fair — nywf64.com",
  description:
    "Events of 1965 — news, movies, television, music, and farewells during the second season of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * 1964/1965 The Era of the Fair — Events of 1965.
 * Body from legacy fair_era03.html (mapped to /fair_era02 as Page 2 after overview).
 *
 * Stack: erahero → FairEraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function FairEra02Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="1964/1965 The Era of the Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fair_era/erahero.jpg"
            alt="1964/1965 The Era of the Fair — New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FairEraNavChrome />

      <article className={styles.article} aria-labelledby="fair-era02-title">
        <header className={styles.titleBar}>
          <h1 id="fair-era02-title" className={styles.titleBarMain}>
            Events of 1965
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            The 1964/1965 New York World&apos;s Fair continued to make news in
            1965, but the news wasn&apos;t good. Magazines and newspapers devoted
            stories of the Exposition&apos;s financial difficulties along with
            constant criticism of the Fair and its management.
          </p>

          <h2 className={styles.yearHeading}>The year was 1965</h2>

          <section className={styles.section} aria-label="A look at the news">
            <p className={styles.sectionTitle}>A look at the news ... </p>
            <p className={styles.body}>
              <Image
                src="/images/fair_era02/196505.jpg"
                alt="Houston Astrodome"
                width={300}
                height={320}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              The <em>Astrodome </em>opens in Houston, United Nations
              International Children&apos;s Emergency Fund (UNICEF) is awarded
              the <em>Nobel Peace Prize </em>...{" "}
              <span className={styles.month}>in January</span>, President
              Johnson outlines plans for a &quot;Great Society&quot; in his
              second State of the Union message to Congress; 84 are killed when
              an Eastern Air Lines DC-7B plunges into the Atlantic 11 minutes
              after take-off from Kennedy International in New York ...{" "}
              <span className={styles.month}>in February</span>, four are
              arrested in New York in a plot to destroy three US National
              Monuments -- Statue of Liberty, Liberty Bell, Washington Monument;
              Malcolm X is assassinated ...{" "}
              <span className={styles.month}>in March</span>, 25,000
              demonstrators, led by Dr. Martin Luther King, march from Selma to
              Montgomery, Alabama ...{" "}
              <span className={styles.month}>in April</span>, the Palm Sunday
              tornadoes snake across Iowa, Illinois, Wisconsin, Indiana, Ohio
              and Michigan leaving 271 dead in their wake ...{" "}
              <span className={styles.month}>in May</span>,{" "}
              <em>The Subject was Roses </em>and <em>Fiddler on the Roof </em>
              win the <em>Tony Award </em>for Best Play and Best Musical; first
              strikes on North Vietnamese air bases by US planes;{" "}
              <em>Early Bird</em> communications satellite relays live television
              between Europe and North America for the first time ...{" "}
              <span className={styles.month}>in June</span>, Major Edward White
              takes a 20-minute Space Walk outside his Gemini 4 spacecraft;
              State Department says President Johnson has authorized US
              Commanders in Vietnam to commit American ground forces to combat
              if the South Vietnamese army requests their aid ...{" "}
              <span className={styles.month}>in July</span>, citing
              &quot;mounting aggression&quot; by the Communists, President
              Johnson announces troop strength would be increased from 75,000 to
              125,000 men in Vietnam; President Johnson signs the
              Medicare-Social Security bill; silver is eliminated in dimes and
              quarters ... <span className={styles.month}>in August</span>, one
              of the most serious riots in US history breaks out in the Watts
              section of Los Angeles; Gemini 5 completes a 8-day 120-orbit
              mission; President Johnson signs the Voting Rights Act of 1965 ...{" "}
              <span className={styles.month}>in September</span>, India and
              Pakistan go to war over Kashmir; President Johnson creates the
              National Foundation for the Arts; hurricane <em>Betsy</em> lashes
              Florida and Louisiana leaving 60 dead...{" "}
              <span className={styles.month}>in October</span>,{" "}
              <Image
                src="/images/fair_era02/196503.jpg"
                alt="Pope Paul VI"
                width={141}
                height={143}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              Pope Paul VI arrives in New York to address the UN and visits the
              Vatican Pavilion at the New York World&apos;s Fair; attempt to
              dock two vehicles together in space is called off after a
              catastrophic failure of the <em>Agena</em> target rocket minutes
              after lift-off ...{" "}
              <span className={styles.month}>in November</span>, a massive
              power blackout hits the northeast and leaves 30 million people in
              an 80,000 square mile area without power for up to 14 hours; a
              United Air Lines Boeing 727 bursts into flames after the gear
              collapse in a hard landing at Salt Lake City killing 41 of the 89
              aboard; cruise liner <em>Yarmouth Castle</em> burns off the
              Bahamas leaving 84 dead, 464 rescued ...{" "}
              <span className={styles.month}>in December</span>, Gemini 6 and
              Gemini 7 successfully rendezvous in space; First Daughter Luci
              Johnson is engaged to Patrick Nugent.
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we saw at the movies"
          >
            <p className={styles.sectionTitle}>What we saw at the movies ...</p>
            <p className={`${styles.body} ${styles.italics}`}>
              The Ipcress File ...{" "}
              <Image
                src="/images/fair_era02/196502.jpg"
                alt="Sound of Music Scene"
                width={200}
                height={157}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              The Sound of Music ... The Greatest Story Ever Told ... Cat Ballou
              ... Von Ryann&apos;s Express ... The Agony and the Ecstasy ...
              Help! ... The Sandpiper ... How to Stuff a Wild Bikini ... That
              Darned Cat ... The Spy who Came in From the Cold ... Thunderball
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we watched on television"
          >
            <p className={styles.sectionTitle}>
              What we watched on television ...
            </p>
            <p className={`${styles.body} ${styles.italics}`}>
              The Man from U.N.C.L.E. ... The Wild, Wild West ... Get Smart ... I
              Spy ... Honey West ... Green Acres ... Hogan&apos;s Heroes
            </p>
          </section>

          <section
            className={styles.section}
            aria-label="What we listened to on our transistor radios"
          >
            <p className={styles.sectionTitle}>
              What we listened to on our transistor radios ...
            </p>
            <p className={styles.body}>
              <em>Downtown - </em>Petula Clark<em> ... You&apos;ve Lost that
              Lovin&apos; Feelin&apos; - </em>
              Righteous Brothers<em> ... This Diamond Ring - </em>Gary Lewis
              &amp; The Playboys<em> ... My Girl - </em>Temptations<em> ...
              Stop! In the Name of Love - </em>
              Supremes<em> ... Mrs. Brown You&apos;ve Got a Lovely Daughter -
              </em>
              Herman&apos;s Hermits<em> ... Help Me, Rhonda - </em>Beach Boys
              <em> ... I Can&apos;t Help Myself - </em>Four Tops<em> ... Mr.
              Tambourine Man - </em>
              Byrds<em> ... (I Can&apos;t Get No) Satisfaction - </em>Rolling
              Stones<em> ... I&apos;m Henry VIII, I Am - </em>Herman&apos;s
              Hermits<em> ... I Got You Babe - </em>Sonny &amp; Cher{" "}
              <em>... Eve of Destruction - </em>Barry McGuire<em> ... Yesterday
              - </em>
              The Beatles<em> ... Get Off of My Cloud - </em>Rolling Stones
              <em> ... I Hear a Symphony - </em>Supremes<em> ... Turn! Turn!
              Turn! - </em>
              Byrds<em> ... Over and Over - </em>Dave Clark Five<em> ... Ticket
              to Ride - </em>
              The Beatles ... <em>I&apos;m Telling You Now</em> - Freddie &amp;
              The Dreamers ... <em>Game of Love</em> - Wayne Fontana &amp; The
              Mindbenders
            </p>
          </section>

          <section className={styles.section} aria-label="We said Good Bye to">
            <p className={styles.sectionTitle}>We said Good Bye to ...</p>
            <p className={styles.body}>
              Magician Harry Blackstone, 80, November 16 ... Motion Picture
              Actress Clara Bow, 60, September 27 ... British Statesman Sir
              Winston Churchill, 90, January 24 ...{" "}
              <Image
                src="/images/fair_era02/196501.jpg"
                alt="Nat King Cole"
                width={100}
                height={145}
                className={`${styles.floatLeft} ${styles.inlineArt}`}
                unoptimized
              />
              Singer Nat King Cole, 45, February 15 ... Actress Dorothy
              Dandridge, 60, September 8 ... Poet T.S. Elliot, 76, January 4,
              British aviation pioneer Sir Geoffrey de Haviland, 82, May 21,
              exiled Egyptian monarch King Farouk, 45, March 18 ... former
              Supreme Court associate justice Felix Frankfurter, 82, February 22
              ... Playwright Lorriane Hansberry, 34, January 12 ... Actress Judy
              Holliday, 42, June 7 ... NFL founder Curly Lambeau, 67, June 1 ...
              Playwright Somerset Maugham, 91, December 16 ... Actress Jeanette
              MacDonald, 57, January 14 ... Black Nationalist Leader Malcolm X,
              39, February 21 ... Broadcaster Edward R. Murrow, 57, April 27 ...
              First woman Cabinet Officer Francis Perkins, 83, May 14 ... Beauty
              expert Helena Rubenstein, 94, April 1 ... Physician Albert
              Schweitzer, 90, September 4 ... Motion Picture Producer David O.
              Selznick, 63, June 22 ... Statesman Adlai Stevenson, 65, July 14
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/fair_era01"
        explicitPrevious
        nextHref="/fair_eraoverview"
      />
    </>
  );
}
