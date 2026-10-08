import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Sea Hunt, Imperial '400' & More — Transportation & Travel — nywf64.com",
  description:
    "Sea Hunt, Imperial '400' and more at the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

function NewsletterHeader() {
  return (
    <Image
      src="/images/trantrav14/tratra38.jpg"
      alt="Newsletter Header"
      width={600}
      height={106}
      className={styles.borderlessImg}
      unoptimized
    />
  );
}

function NewsletterFooter() {
  return (
    <Image
      src="/images/trantrav14/tratra40.jpg"
      alt="Newsletter Footer"
      width={600}
      height={27}
      className={styles.borderlessImg}
      unoptimized
    />
  );
}

export default function Trantrav14Page() {
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

      <article className={styles.article} aria-labelledby="trantrav14-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav14-title" className={styles.titleBarMain}>
            Sea Hunt, Imperial &apos;400&apos; &amp; More
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionHeading}>Sea Hunt</h2>
          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 30, March 5, 1964
            </p>
            <NewsletterHeader />
            <div className={styles.newsletterMeta}>
              <span>Number 30</span>
              <span>March 5, 1964</span>
            </div>
            <Image
              src="/images/trantrav14/tratra47.jpg"
              alt="Artist's Rendering &quot;Sea Hunt&quot; Set"
              width={600}
              height={169}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>SET FOR &quot;SEA HUNT&quot;</u> -- This is the stage setting for the first
              live, underwater drama in history. In it will be played some of the most
              dramatic sequences from &quot;Sea Hunt,&quot; the it television series.
              Presentation will take place in the Transportation &amp; Travel Pavilion.
            </p>
            <hr className={styles.newsletterHr} />
            <p className={styles.newsItem}>
              <u>&quot;SEA HUNT&quot; AT T&amp;T</u> -- The hundreds of millions of adults
              and children who have thrilled to the underwater adventures of &quot;Sea
              Hunt&quot; on television will have the opportunity to see some of the
              show&apos;s most exciting sequences performed at the T&amp;T Pavilion, live and
              underwater. Narrator will be the star of the TV series -- Lloyd Bridges.
            </p>
            <p className={styles.newsItem}>
              <u>WATER, WATER EVERYWHERE</u> -- The &quot;stage&quot; for this action show will
              actually be a swimming tank 36 feet wide and 12 feet deep, designed by Buster
              Crabbe. It will be filled with 40,000 gallons of water, a mixture of New York
              City&apos;s reservoir water and tropical water transported from an island
              paradise. According to producer John McKnight, the filtered combination results
              in the clearest water on earth. Natural coral, real and artificial seaweed, live
              tropical fish and an ancient Spanish shipwreck will be &quot;on stage&quot;
              throughout the performances.
            </p>
            <p className={styles.newsItem}>
              <u>&quot;HIT OF THE FAIR&quot;</u> -- &quot;Because the concept is completely
              new, because the show is based on one of the biggest TV hits and because our
              cast and story will be excellent, &apos;Sea Hunt&apos; will be the surprise hit
              of the Fair,&quot; says Mr. McKnight, a former swimming champion. He has a record
              of success, having produced the Flushing Meadow Amphitheater Show and having
              narrated the Aquashow for eight years.
            </p>
            <p className={styles.newsItem}>
              <u>PREVIEW</u> -- The plot of this first underwater drama is filled with action,
              including these spectacular events: a beautiful girl fights for her life against
              an octopus ... on opening day, April 22, the hero who rescues her discovers
              $2-million in treasure in a shipwreck ... the villain tries to steal the treasure,
              and the two men fight, far below the surface of the sea. And these are only a few
              of the moments of high adventure.
            </p>
            <p className={styles.newsItem}>
              <u>CONTINUOUS RUN</u> -- Three separate casts, each with one glamorous girl and
              two men, will make it possible to repeat performances three times each hour. The
              theater will resemble an underwater grotto. Admission will be low: 75c for
              adults and 25c for children.
            </p>
            <NewsletterFooter />
          </section>

          <hr className={styles.hr} />

          <h2 className={styles.sectionHeading}>Imperial &apos;400&apos; Motels</h2>
          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 33, March 25, 1964
            </p>
            <NewsletterHeader />
            <div className={styles.newsletterMeta}>
              <span>Number 33</span>
              <span>March 25, 1964</span>
            </div>
            <p className={styles.newsItem}>
              <u>BUILDING WITHIN A BUILDING</u> -- A full-size section of a two-story motel is
              being built on the ground floor of the Transportation &amp; Travel Pavilion by
              Imperial &apos;400&apos; National, Inc., the nation&apos;s fourth largest motel
              chain. &quot;Through this exhibit, millions of visitors will become familiar with
              our motels and will be briefed on our locations, referral system, accommodations,
              rates and hospitality,&quot; says Bernard Whitney, president of the chain.
            </p>
            <hr className={styles.newsletterHr} />
            <Image
              src="/images/trantrav14/tratra49.jpg"
              alt="Mr. &amp; Mrs. Whitney &amp; RM"
              width={300}
              height={207}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>MOSES MEETS MODEL MOTEL</u> -- Fair President Robert Moses (right) examines
              scaled-down version of full-size motel section being erected in T&amp;T by
              Imperial &apos;400&apos;. Bernard Whitney, president of Imperial, and his wife
              look on.
            </p>
            <hr className={styles.newsletterHr} />
            <p className={styles.newsItem}>
              <u>&quot;HOME AWAY FROM HOME&quot;</u> -- The full-size motel section will
              include a typical manager&apos;s apartment, bedroom and a working reservation
              desk, reproduced in detail to indicate the air of hospitality in Imperial
              &apos;400&apos; accommodations. Visitors will be able to pinpoint the locations
              of these accommodations on a large map; they will secure up-to-date directories;
              and they will hear the company&apos;s story on earphones.
            </p>
            <p className={styles.newsItem}>
              <u>SPECTACULAR GROWTH</u> -- The story which T&amp;T visitors will hear is an
              impressive one. Imperial &apos;400&apos; opened its first motel in California in
              July, 1960. Today, as it approaches its fourth anniversary, the company has more
              than 100 motels in operation or under construction in 34 states. Expansion plans
              call for the opening of a new motel every ten days.
            </p>
            <div className={styles.klmRow}>
              <Image
                src="/images/trantrav14/tratra50.jpg"
                alt="Imperial '400' Logo"
                width={150}
                height={91}
                className={styles.borderlessImg}
                unoptimized
              />
              <p className={styles.newsItem}>
                <u>ARISTOCRATS OF THE INDUSTRY</u> -- How did the corporate name evolve? Mr.
                Whitney explains that it was suggested by the familiar reference to &quot;the
                400&quot; of New York City&apos;s Social Register. &quot;But it has come to
                mean more than that,&quot; he says. &quot;Today, the 400 represents the number
                of motels we have set as our goal.&quot;
              </p>
            </div>
            <p className={styles.newsItem}>
              <u>HERE&apos;S WHY</u> -- The president attributes the company&apos;s success to
              several factors: All its motels are in strategic downtown areas...standard rates
              apply coast to coast, with advance reservations free to guests...accommodations
              offer more than usual luxury...hospitality is genuine.
            </p>
            <NewsletterFooter />
          </section>

          <hr className={styles.hr} />

          <h2 className={styles.sectionHeading}>Executive Concourse</h2>
          <section className={styles.execAd}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 32, March 24, 1964 ... add appearing in{" "}
              <em>The Wall Street Journal</em>
            </p>
            <Image
              src="/images/trantrav14/tratra48.jpg"
              alt="Artist's Rendering T&amp;T Pavilion"
              width={600}
              height={209}
              className={styles.borderlessImg}
              unoptimized
            />
            <p><em>Memo to Management Men</em></p>
            <p className={styles.execLead}>NOW YOU CAN HAVE YOUR OWN EXECUTIVE SUITE</p>
            <p className={styles.execLead}>AT THE NEW YORK WORLD&apos;S FAIR 1964-1965*</p>
            <p>
              <strong>With the start of history&apos;s greatest Fair just two months away, many corporations, brokerage houses, banks and insurance companies are looking for a gracious base of operations for business and entertainment at the site. They are finding it in the new Executive Concourse.</strong>
            </p>
            <div className={styles.execCols}>
              <div>
                <p>
                  <span className={styles.dropCap}>I</span>t started with exhibitors.
                </p>
                <p>
                  They found their own pavilions could not house the kind of luxurious office space they wanted for administration and VIP entertainment.
                </p>
                <p>
                  Then other companies began to see the once-in-a-generation value of a &quot;home office&quot; at the Fair -- for playing host to customers, special employees and friends at the biggest show ever produced. (Advance ticket sales have already exceeded $35 million, and paid advertising by the Fair and its exhibitors is expected to top $150 million in 1964, alone.)
                </p>
                <p>All these companies saw the opportunity to generate business and unique good will.</p>
                <p><strong>HEART OF THE FAIR</strong></p>
                <p>
                  To meet the need, a distinctive new section has been added to the Fair&apos;s Transportation &amp; Travel Pavilion to house the Executive Concourse. The pavilion fronts on the Grand Central Parkway, within easy reach of all exhibits.
                </p>
              </div>
              <div>
                <p>
                  Concourse space will be available for occupancy by April 1 in units from 200 square feet, divided to suit. Rental costs will be moderate. The space will be serviced by excellent restaurant and beverage catering facilities within the pavilion. Luxurious conference rooms and lobby display panels will also be available.
                </p>
                <p>
                  Not least important, this space will offer you the number-one prestige address for 1964 and 1965 -- <em>Executive Concourse, Transportation &amp; Travel Pavilion, New York World&apos;s Fair, New York, N. Y. 11380</em>.
                </p>
                <p><em>* In the Transportation &amp; Travel Pavilion</em></p>
                <div className={styles.opportunityBox}>
                  <p style={{ textAlign: "center" }}><strong>YOUR OPPORTUNITY</strong></p>
                  <p>
                    <em>
                      If you should be interested in joining such charter tenants as Shell Oil and Time Inc. in the Executive Concourse, please direct your inquiry to Transportation &amp; Travel Pavilion, Inc., Time &amp; Life Building, New York, N.Y. 10020 or call (212) CI 5-1968.
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className={styles.hr} />

          <h2 className={styles.sectionHeading}>Reno - Lake Tahoe</h2>
          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 31, March 12, 1964
            </p>
            <NewsletterHeader />
            <div className={styles.newsletterMeta}>
              <span>Number 31</span>
              <span>March 12, 1964</span>
            </div>
            <Image
              src="/images/trantrav14/tratra51.jpg"
              alt="Reno-Lake Taho Exhibit Booth"
              width={500}
              height={369}
              className={styles.borderlessImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>RENO-LAKE TAHOE IN T&amp;T</u> -- One of the nation&apos;s major resort areas, Reno and Lake Tahoe, will be represented by a major exhibit in the Transportation &amp; Travel Pavilion. Not satisfied with the 6,500,000 tourists who visited or passed through last year, Reno plans to use its World&apos;s Fair exhibit to attract even more, according to Jud Allen, Chamber of Commerce general manager.
            </p>
            <p className={styles.newsItem}>
              <u>THE HYPHEN IS NEW</u> -- The Reno-Lake Tahoe exhibit will represent the first joint promotion by the two resorts, each of which is famous in its own right. (Tahoe is 25 miles from &quot;The Biggest Little City in the World.&quot;) &quot;Individually they are great,&quot; says Mr. Allen, &quot;but together they offer vacationers the greatest variety of sports, recreation and entertainment in the nation.&quot;
            </p>
            <p className={styles.newsItem}>
              <u>STRESS ON FUN</u> -- Reno-Lake Tahoe bills itself as the second largest entertainment center in the U.S. -- in terms of numbers of comics, personalities and bands. Not so well known is the recreation: swimming, boating and other water sports...hunting and fishing...skiing at areas like Squaw Valley...touring at Carson City, the nation&apos;s smallest state capitol, and Virginia City, its liveliest ghost town. Both aspects will be highlighted in the T&amp;T exhibit.
            </p>
            <p className={styles.newsItem}>
              <u>VIP VISIT</u> -- One of the early visitors to the Reno-Lake Tahoe exhibit will be Nevada Governor Grant Sawyer. He will be in New York not only to visit the Fair but also to extol his state in connection with the 100th anniversary of its statehood.
            </p>
            <NewsletterFooter />
          </section>

          <hr className={styles.hr} />

          <h2 className={styles.sectionHeading}>Cruise Ship</h2>
          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 25, January 29, 1964
            </p>
            <NewsletterHeader />
            <div className={styles.newsletterMeta}>
              <span>Number 25</span>
              <span>January 29, 1964</span>
            </div>
            <Image
              src="/images/trantrav14/tratra58.jpg"
              alt="Artist's Conception"
              width={500}
              height={351}
              className={styles.borderlessImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>CRUISE SHIP LANDS IN T&amp;T</u> -- A gala cruise ship at its most colorful port of call...moored to a pier lined with treasure-filled stores...passengers relaxing on the breezy deck and crossing the gangplank to shop. This entire scene will be reproduced within the Transportation &amp; Travel Pavilion by the building sponsors.
            </p>
            <p className={styles.newsItem}>
              <u>POINT OF SALE FOR CRUISE AND STEAMSHIP LINES</u> -- For many of the 17 million visitors to the pavilion, the tour of the 99-foot section of a ship and the stores along the dock will spark the idea to cruise the Seven Seas. For cruise and shipping lines which want to translate this idea into action and sales, information and display offices will be available on board, each opening onto the deck. This space will be available at moderate cost for the two years of the fair -- completed and ready for occupancy.
            </p>
            <p className={styles.newsItem}>
              <u>RETAILERS&apos; PARADISE</u> -- Visitors who window shop along the pier will be looking for the value and the bargains for which foreign cruise lands are famous...and some of the nation&apos;s leading retailers will make certain that they find them. These shops represent an ideal location for sellers of cruise wear, luggage, native crafts, china, glass and other home furnishings. Several shops are still available.
            </p>
            <p className={styles.newsItem}>
              <u>MORE MAJOR NEWS COMING</u> -- Announcements to be made by T&amp;T within the next few weeks will highlight a new Travel Information Center and exhibits by the Navy, Marine Corps, Army, Air Force and others. Topping off of the Pavilion will take place next week, and the entire building will be ready for occupancy by exhibitors by March 1.
            </p>
            <NewsletterFooter />
          </section>

          <hr className={styles.hr} />

          <h2 className={styles.sectionHeading}>Travel Information Center</h2>
          <section className={styles.newsletterBlock}>
            <p className={styles.source}>
              Source: T&amp;T Pavilion Newsletter, No. 26, February 3, 1964
            </p>
            <NewsletterHeader />
            <div className={styles.newsletterMeta}>
              <span>Number 26</span>
              <span>February 3, 1964</span>
            </div>
            <p className={styles.newsItem}>
              <u>HOTEL RESERVATION &amp; TRAVEL INFORMATION CENTER</u> -- &quot;Where will we go on our next trip?&quot; The 16 million visitors to the Transportation &amp; Travel Pavilion will find countless answers to that question in the Hotel Reservation &amp; Travel Information Center sponsored by the Hotel Sales Management Association. They will find these answers in the form of dazzling color transparencies, maps, brochures and direct telephone connections to some of the nation&apos;s most exciting vacation spots.
            </p>
            <Image
              src="/images/trantrav14/tratra59.jpg"
              alt="Artist's Conception"
              width={550}
              height={330}
              className={styles.borderlessImg}
              unoptimized
            />
            <p className={styles.newsItem}>
              <u>&quot;ONE STOP SHOPPING&quot;</u> -- The bright, modern design of the Hotel Reservation &amp; Travel Information Center will encourage visitors to browse among the varied and exciting exhibits. There they will get not only good ideas but also practical information about places to go, things to do, services to use and enjoy. In short, they will get a chance for one-stop shopping for tourist attractions, vacation communities, resorts, hotels, motor inns, local transportation services, credit services and more.
            </p>
            <p className={styles.newsItem}>
              <u>LEADERS IN HOSPITALITY</u> -- The sponsor of the Center, the Hotel Sales Management Association, is made up of 2,000 hotel and motel sales executives representing the leading institutions in the U.S. and abroad. It is headed by Louis E. Rogers, of Miami&apos;s Fontainebleau.
            </p>
            <p className={styles.newsItem}>
              <u>INVITATION</u> -- &quot;The Hotel Reservation &amp; Travel Information Center in the T&amp;T Pavilion will be the most complete and exciting ever produced,&quot; Mr. Rogers says. &quot;It will make it possible for millions of Americans and foreign visitors to have fun while selecting trips for the future. We invite all members of the travel industry to participate, and we know their modest investment will be repaid many times over.&quot;
            </p>
            <NewsletterFooter />
          </section>

          <hr className={styles.hr} />

          <section className={styles.alliedBlock}>
            <p><strong>ALLIED VAN LINES, INC.</strong></p>
            <p><strong>WORLD&apos;S LARGEST MOVER</strong></p>
            <p><strong>New York World&apos;s Fair 1964-1965</strong></p>
            <p>See Allied Van Lines Exhibit in the Transportation and Travel Pavilion.</p>
            <p>
              ALLIED VAN LINES, THE WORLD&apos;S LARGEST MOVER, IS THE OFFICIAL
              MOVER-EXHIBITOR FOR THE TRANSPORTATION AND TRAVEL PAVILION AT THE NEW YORK
              WORLD&apos;S FAIR 1964-1965.
            </p>
            <Image
              src="/images/trantrav14/tratra71.jpg"
              alt="Allied Postcard"
              width={300}
              height={187}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: Postcard by Colourpicture Publishers, Inc., Boston 30, Mass. U.S.A.
            </p>
          </section>

          <hr className={styles.hr} />

          <section className={styles.goldBlock}>
            <p>Program Cover</p>
            <p>World of Ancient Gold</p>
            <p>Exhibited in the T&amp;T Pavilion</p>
            <Image
              src="/images/trantrav14/tratra70.jpg"
              alt="Guidebook - World of Ancient Gold"
              width={300}
              height={395}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: Presented courtesy Mike Kraus Collection
            </p>
          </section>

          <section className={styles.webmasterNote}>
            <p>
              <strong>Webmaster&apos;s note...</strong> Many thanks, once again, to historian
              Eric Paddon for his contribution to this on-line history of the Fair. My thanks (
              <em>also once again</em>) to Bill Cotter, Gary Holmes and Mike Kraus who supplied
              photographs and memorabilia for this presentation on the T&amp;T Pavilion.
            </p>
            <p>Bill Young</p>
            <p>May 5, 2012</p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav13"
        overviewHref="/trantravoverview"
        nextHref="/trantravoverview"
        explicitPrevious
      />
    </>
  );
}
