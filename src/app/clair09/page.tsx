import type { Metadata } from "next";
import Image from "next/image";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./clair09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "After the Fair - Beauty on Wheels — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel Beauty on Wheels press releases and photographs after the 1964/1965 New York World’s Fair — from nywf64.com.",
};

const BOOKLET_CARDS = [
  {
    src: "clair51.jpg",
    height: 236,
    alt: "Viewing Clairol Film",
    caption:
      "First, they saw a three minute film that told them how the proper use of make-up and hair coloring had changed four other women's lives and suggested what a difference it could make in their own.",
  },
  {
    src: "clair59.jpg",
    height: 234,
    alt: "Identifying Present Hair Color",
    caption:
      "Next, they were greeted by a Clairol Color Consultant who identified their present hair color from one of the six basic Clairol colors. She also gave them a chart for their make-up analysis and a copy of the Carousel Magazine on Beauty Care.",
  },
  {
    src: "clair61.jpg",
    height: 233,
    alt: "Clairol Hair Color Pre-Vuers",
    caption:
      "Then, they had an opportunity to look into the Clairol Hair Color Pre-Vuers to see how they would look as a blonde, brunette or redhead. Their own faces were reflected and framed by wigs for the most lifelike picture.",
  },
  {
    src: "clair63.jpg",
    height: 235,
    alt: "Advice on New Hair Color",
    caption:
      "A Clairol hair Coloring Consultant then talked with them and if they were interested, advised them about a new hair color. She also advised them on any hair coloring problems they might have had and discussed hair care.",
  },
  {
    src: "clair58.jpg",
    height: 236,
    alt: "Charting Make-up",
    caption:
      "Finally, a Clairol Cosmetics Consultant filled in their make-up chart and recommended color-keyed cosmetics to go with either their present -- or new -- hair color to give them the most natural look.",
  },
  {
    src: "clair60.jpg",
    height: 235,
    alt: "Mrs. S. Bookmeyer",
    caption:
      'A typical carousel visitor, Mrs. S. Brookmeyer of North Miami Beach, commented on how pleased she was after the visit. "I\'ve always used Clairol hair products but now I see how cosmetics can be color keyed to my hair."',
  },
  {
    src: "clair62.jpg",
    height: 234,
    alt: "Purchasing Cosmetics",
    caption:
      "A large percent of the women who visited the Carousel went directly to one of the 163rd Street stores to purchase the hair-care items and the cosmetics recommended to compliment their skin tone and hair coloring.",
  },
  {
    src: "clair64.jpg",
    height: 236,
    alt: "Purchasing Cosmetics",
    caption:
      "The stores all reported greatly increased traffic and sales not only in their cosmetic departments, but in their entire stores. One department store sold out of a number of Clairol products within three hours of the Carousel opening. All of them had to reorder.",
  },
] as const;

/**
 * Clairol — After the Fair - Beauty on Wheels (legacy clair09.html).
 * Press releases, fact sheet, and public-relations booklet photos.
 * Legacy typos preserved (Rudder & Finn; 2,00,000).
 */
export default function Clair09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Clairol">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/clairoverview/hero-banner.jpg"
            alt="Clairol Color Carousel at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ClairNavChrome />

      <article className={styles.article} aria-labelledby="clair09-title">
        <header className={styles.titleBar}>
          <h1 id="clair09-title" className={styles.titleBarMain}>
            After the Fair - Beauty on Wheels
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/clair09/clair48.jpg"
            alt="Transport Vans"
            width={600}
            height={227}
            className={styles.leadPhoto}
            unoptimized
          />

          <div className={styles.release}>
            <div className={styles.releaseHead}>
              <div>
                <p className={styles.label}>FROM:</p>
                <p>
                  Jerry Halprin
                  <br />
                  RUDER &amp; FINN INCORPORATED
                  <br />
                  130 East 59th Street
                  <br />
                  New York, New York 10022
                  <br />
                  PLaza 9-1800
                </p>
                <p className={styles.label}>FOR:</p>
                <p>CLAIROL</p>
              </div>
              <p className={styles.immediate}>FOR IMMEDIATE RELEASE</p>
            </div>

            <h2 className={styles.releaseTitle}>
              CLAIROL WORLD&apos;S FAIR CAROUSEL
              <br />
              STARTS TOUR OF MAJOR U.S. CITIES
            </h2>

            <p>
              NEW YORK CITY, March 4 [, 1966] -- New Yorkers had a &quot;last
              look&quot; today at one of the great hits of the recent World&apos;s
              Fair before it left on a tour of the U.S.
            </p>
            <p>
              The Clairol Color Carousel -- a mobile version of the successful
              Clairol Fair Pavilion -- was on exhibition in the parking lot of
              Leone&apos;s Restaurant just off Times Square on 48th Street.
            </p>
            <p>
              The Carousel, transported on two great vans, arrived at the parking
              lot at 1 a.m. for assembly. By dawn, the crew had it connected,
              unfolded, lighted and ready for visitors.
            </p>
            <p>
              A total of 60 carpenters, body truck men, hydraulic engineers,
              metal workers, scenic artists and air conditioning experts have
              been working for the past three months at the Feller Scenery Studio
              in the Bronx creating the mobile Carousel.
            </p>
            <p>
              However, when the Carousel arrives at each of its shopping center
              stops across the country, it will take four men about five hours to
              assemble the unique exhibition.
            </p>
            <p>
              New Yorkers will have one more opportunity to visit the popular
              Clairol Carousel at the Garden State Plaza Shopping Center,
              Paramus, N.J., May 4 to 7.
            </p>
            <p>
              Clairol executives, including Bruce S. Gelb, President, expressed
              great satisfaction at the conversion of the Fair Pavilion into a
              mobile exhibition.
            </p>
            <p>
              &quot;Our personal consultations with more than 2,00,000 women
              visitors at the Clairol Pavilion at the Fair told us that this is a
              beauty experience all women will enjoy and value,&quot; Mr. Gelb
              stated. &quot;That&apos;s why we decided to take the Carousel to
              those women who did not have the opportunity to visit the Pavilion
              at the New York Fair -- and those who want to enjoy it again. Now
              that we&apos;ve seen the mobile Carousel in its completed form,
              we&apos;re more certain than ever that this will be one of the
              greatest beauty services ever offered to the American woman,&quot;
              said Mr. Gelb.
            </p>
            <p>
              Scheduled for 19 major shopping centers in the next nine months,
              the Carousel is planned to be one of the most important promotions
              ever created for America&apos;s shopping centers. Local fashion
              shows, beauty presentations and other events will be part of the
              excitement centered around the Carousel in each of the 19 cities it
              will visit. The Carousel will remain 10 days at each center, with
              the exception of Garden State Plaza, where a shorter stay has been
              arranged.
            </p>
            <p>
              The uniquely designed Carousel utilizes two large van trucks whose
              sides are technically constructed so that they can be lowered and
              joined into one 32 ft. x 32 ft. exhibition area resembling the
              Clairol Carousel building at the Fair.
            </p>
            <p>
              Forty-five hundred women will be able to go through the Carousel
              each day, view a new motion picture describing the total natural
              look of beauty, and receive free personalized beauty consultations.
            </p>
            <p>
              The Carousel is staffed by a troupe of Clairol Color Consultants --
              14 blondes, brunettes and redheads, specially trained in cosmetics
              and haircolor. Dramatizing a new decorative trend in uniform dress
              for females, the consultants wear ensembles in exotic &quot;tropical
              island&quot; colors, created to harmonize with the Carousel itself.
            </p>
            <p>
              As was the case at the World&apos;s Fair, admission to the Carousel
              will be &quot;for women only,&quot; and will be free.
            </p>
            <p>
              Following the preview in mid-town New York City this afternoon, the
              Carousel departed for its first shopping center opening -- the two
              vans taking to the road toward the 163rd Street Shopping Center in
              Miami Beach, and the 14 Color Consultants departing by air. The
              Carousel opens in Miami on March 10.
            </p>
            <p>
              Other cities included in the tour are Washington, Baltimore,
              Philadelphia, Paramus, Boston, Pittsburgh, Cleveland, Detroit,
              Milwaukee, Chicago, St. Louis, Kansas City, Denver, Seattle, San
              Francisco, Los Angeles, Dallas and Houston.
            </p>
            <p className={styles.hash}># # #</p>
            <p className={styles.source}>
              Source: Rudder &amp; Finn Press Release
            </p>
          </div>

          <div className={styles.miamiLead}>
            <div className={styles.miamiLeadCopy}>
              <Image
                src="/images/clair09/clair56.jpg"
                alt="Vans"
                width={100}
                height={43}
                className={styles.vanIcon}
                unoptimized
              />
              <p>
                <strong>
                  The Colorful Caravan sets-up at the
                  <br />
                  first Shopping Center, 163rd St., Miami
                </strong>
              </p>
            </div>
            <Image
              src="/images/clair09/clair55.jpg"
              alt="Shopping Center Sign"
              width={150}
              height={216}
              className={styles.signPhoto}
              unoptimized
            />
          </div>

          <div className={styles.setupGrid}>
            <div className={styles.setupCol}>
              <Image
                src="/images/clair09/clair49.jpg"
                alt="Set up"
                width={280}
                height={199}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair09/clair50.jpg"
                alt="Waiting in Line"
                width={280}
                height={245}
                className={styles.photo}
                unoptimized
              />
            </div>
            <div className={styles.setupCol}>
              <Image
                src="/images/clair09/clair54.jpg"
                alt="Set up"
                width={280}
                height={164}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair09/clair53.jpg"
                alt="Set up"
                width={280}
                height={137}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair09/clair52.jpg"
                alt="Entering the Carousel"
                width={280}
                height={199}
                className={styles.photo}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.release}>
            <p className={styles.factTitle}>
              <span>F A C T</span> <span>S H E E T</span>
            </p>
            <p>
              <strong>WHAT IS THE CLAIROL COLOR CAROUSEL?</strong>
              <br />
              The Carousel is a mobile version of the Clairol pavilion at the
              recent New York World&apos;s Fair. It was uniquely designed to
              utilize two large van trucks whose sides are technically constructed
              so that they can be lowered and joined into one 32 ft. x 32 ft.
              exhibition area resembling the Clairol building at the Fair.
            </p>
            <p>
              <strong>WHERE WILL THE CAROUSEL BE SEEN?</strong>
              <br />
              During 1966 the Carousel will travel to 19 shopping centers in major
              cities from coast to coast. The building will be set up in either
              the center parking lot or shopping mall. This is the first shopping
              center promotion of its kind to be projected on a national basis.
            </p>
            <p>
              <strong>WHO MAY VISIT THE EXHIBIT?</strong>
              <br />
              As was the case at the World&apos;s Fair, admission to the Carousel
              will be restricted to women, and will be free. Forty-five hundred
              women will be able to go through the Carousel daily. More than two
              million women visited the Carousel during the two Fair seasons, and
              an additional million are expected to see it in 1966.
            </p>
            <p>
              <strong>WHAT DOES THE CAROUSEL OFFER?</strong>
              <br />
              Women will see a new 3 1/2 minute film highlighting dramatic changes
              in appearance of four women who received beauty consultations at the
              Clairol World&apos;s Fair pavilion. Personalized beauty
              consultations also will be offered to the 4500 daily visitors to the
              Carousel, by a staff of trained color consultants. They will be able
              to see themselves as blondes, brunettes and redheads, by peering into
              the Clairol Hair Color Pre-Vuers, which contain Fashion Tress wigs
              in different colors and styles.
            </p>
            <p>
              <strong>ARE LOCAL STORES PARTICIPATING?</strong>
              <br />
              Stores in each shopping center will provide fashions, in cooperation
              with the National Cotton Council, for fashion shows to be held on a
              stage outside the Carousel. There will be separate fashion shows for
              teen-agers and adults, all based on the theme of the natural look of
              beauty. Many stores will additionally hold their own fashion
              promotions keyed to the Carousel visit.
            </p>
            <p>
              <strong>ARE ANY SPECIAL EVENTS PLANNED?</strong>
              <br />
              A number of events will be held, many of which will feature
              hairdressers offering hairstyling presentations. The Carousel&apos;s
              color consultants also will give lectures and consultations to civic
              groups, women&apos;s clubs and organizations prior to and during the
              ten-day run in each city.
            </p>
            <p>
              <strong>WHO CREATED THE CAROUSEL?</strong>
              <br />
              The Carousel was designed for Clairol by William Cecil. David Mintz
              was Technical Consultant. Scenic Design Studios built and designed
              the trucks and display.
            </p>
            <p className={styles.hash}># # #</p>
            <p>
              Jerry Halprin
              <br />
              RUDER &amp; FINN INCORPORATED
              <br />
              130 East 59th Street
              <br />
              New York, New York 10022
              <br />
              PLaza 9-1800
              <br />
              <br />
              March 4, 1966
            </p>
            <p className={styles.source}>
              Source: Rudder &amp; Finn Press Release
            </p>
          </div>

          <Image
            src="/images/clair09/clair57.jpg"
            alt="Advertisement Copy"
            width={400}
            height={407}
            className={styles.adPhoto}
            unoptimized
          />

          <div className={styles.booklet}>
            <p className={styles.bookletLead}>
              <strong>
                Miami women responded by visiting the Carousel
                <br />
                Up to 4,000 personal beauty consultations were given daily
              </strong>
            </p>

            <div className={styles.bookletGrid}>
              {BOOKLET_CARDS.map((card) => (
                <figure key={card.src} className={styles.bookletCard}>
                  <figcaption className={styles.bookletCaption}>
                    {card.caption}
                  </figcaption>
                  <Image
                    src={`/images/clair09/${card.src}`}
                    alt={card.alt}
                    width={280}
                    height={card.height}
                    className={styles.photo}
                    unoptimized
                  />
                </figure>
              ))}
            </div>

            <p className={styles.source}>
              Source: All (except as noted), Public Relations Booklet{" "}
              <em>Clairol Color Carousel ... beauty on wheels, </em>
              Gregory Dawson, Inc.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/clair08"
        overviewHref="/clairoverview"
        nextHref="/clairoverview"
      />
    </>
  );
}
