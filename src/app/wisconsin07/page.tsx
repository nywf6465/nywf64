import type { Metadata } from "next";
import Image from "next/image";
import { WisconsinNavChrome } from "@/components/WisconsinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wisconsin07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Big Cheese — Wisconsin — nywf64.com",
  description:
    "The Big Cheese — World’s Largest Cheese brochure essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Wisconsin — The Big Cheese essay (1965 souvenir folder brochure).
 * Body from legacy wisconsin07.html.
 */
export default function Wisconsin07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Wisconsin">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wisconsinoverview/hero-banner.jpg"
            alt="Wisconsin pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WisconsinNavChrome />

      <article className={styles.article} aria-labelledby="wisconsin07-title">
        <header className={styles.titleBar}>
          <h1 id="wisconsin07-title" className={styles.titleBarMain}>
            The Big Cheese
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.brochureWrap}>
            <div className={styles.brochurePanel}>
              <p className={styles.folderTitle}>1965 World&apos;s Fair Souvenir Folder</p>
              <figure className={styles.coverFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/wisconsin07/wi07.jpg"
                    alt="World's Largest Cheese"
                    width={425}
                    height={281}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
              <p className={styles.cheeseTitle}>THE WORLD&apos;S LARGEST CHEESE!</p>

              <ol>
                <li>
                  The cheese was made for the Wisconsin Cheese Foundation,
                  a non-profit organization affiliated with the Wisconsin Cheese
                  Makers Association for the express purpose of promoting Wisconsin
                  cheese outside the state. The Foundation&apos;s income is derived
                  from contributions from Wisconsin cheese makers, plus special
                  gifts from the Wisconsin Dairy Industry, American Dairy Association
                  of Wisconsin and other special promotions.
                </li>
                <li>
                  The actual making of the cheese was from midnight, January
                  20 to approximately 7 p.m on January 22 -- about 43 1/2 hours
                  of continuous manufacture.
                  <ul>
                    <ul>
                      <li>
                        It was made at the factory of Steve&apos;s Cheese by owner Steve
                        Siudzinski. The factory is near Denmark, Wis., about 10 miles
                        east of Green Bay.
                      </li>
                    </ul>
                  </ul>
                </li>
                <li>
                  The actual size of the cheese is 6 1/2 feet wide, 5 1/2 feet
                  high and 14 1/2 feet long.
                </li>
                <li>The weight of the cheese is approximately 17 1/4 tons - 34,591 pounds!</li>
                <li>
                  Unusual statistics on materials used:
                  <ul>
                    <ul>
                      <li>
                        MILK: The big cheese used about 367,000 pounds of milk or
                        over 183 TONS! 17,000 quarts. This is equal to the daily production
                        of 16,000 cows, a solid line of cows which in single file would
                        stretch 20 miles! It would take ONE cow 43 years to produce the
                        necessary milk! Six Wisconsin factories and dairies cooperated
                        to provide the huge volume.
                      </li>
                      <li>SALT: Approximately two-thirds of a ton was used.</li>
                      <li>RENNET: Approximately 92 pounds of the milk coagulant were used.</li>
                      <li>COLORING: Approximately 23 pounds.</li>
                      <li>
                        MANPOWER: A crew of 25 men were on duty working in shifts
                        around the clock for 43 hours. Included were four Wisconsin cheese
                        makers who have won the famed World&apos;s Champion Cheddar Cheesemaking
                        award.
                      </li>
                    </ul>
                  </ul>
                </li>
              </ol>

              <p className={styles.subhead}>THE MAMMOTH CHEESE TAKES A MAMMOTH FORM OR &quot;HOOP&quot;!</p>
              <p>
                A specially constructed wooden hoop was built, weighing 3,000
                pounds.
              </p>
              <p>
                2&quot; x 12&quot; solid oak planks were laid over 12&quot;
                x 10&quot; fir &quot;skids&quot;. Across the oak planks is a
                floor of one inch cottonwood. Sides and ends are 2&quot; x 10&quot;
                planks of fir supported by twelve vertical 6 x 6&apos;s. The structure
                was criss-crossed by several 3/4&quot; steel tie-rods.
              </p>

              <p className={styles.subhead}>REASON FOR UNUSUAL SHAPE OF THE CHEESE</p>
              <p>
                Most mammoth cheese are cylindrical but a cheese weighing
                over 17 tons would be too wide if round, to transport by truck
                or train.
              </p>

              <p className={styles.subhead}>MANUFACTURING TIMETABLE:</p>
              <p>
                Following the pouring of the curd into the giant hoop and
                pressing to eliminate the whey, two walls were built and joined
                to two existing walls of the room where the hoop was located,
                to form a 14 by 20 refrigerated room to cool the big cheese down
                to 34 degrees.
              </p>
              <p>
                After 35 days in the cooler the sides of the huge hoop were
                removed and the cheese &quot;dried&quot; for a week, following
                which it was paraffined by a transparent wax.
              </p>

              <p className={styles.subhead}>SHIPPING TIMETABLE</p>
              <p>
                On April 14, 1964, the big cheese was loaded into a special
                glass sided trailer and transported by diesel tractor directly
                to the New York World&apos;s Fair Wisconsin exhibition area.
              </p>

              <p className={styles.subhead}>WORLD FAIR FACTS:</p>
              <p>
                The huge cheese, mounted on its special &quot;Cheese-Mobile&quot;
                45 foot tractor-trailer, is a featured attraction at the State
                of Wisconsin area. It is situated at the southwest corner of
                the 50,000 square foot site, on the Avenue of the United Nations,
                Grand Central Parkway, and at the foot of a pedestrian overpass
                over the Parkway. The 12 story stainless steel &quot;Unisphere&quot;,
                the major attraction at the Fair, is just a few steps away from
                the Wisconsin area.
              </p>
              <p>
                It is estimated that the big cheese, which is the largest
                single piece of cheese ever made in the history of mankind, will
                be seen by 12,000,000 people during the two years of the Fair.
              </p>

              <p className={styles.subhead}>NATIONWIDE TOUR OF THE BIG CHEESE!</p>
              <p>
                After appearing at the Fair from April to mid-October, 1964,
                the Cheese-Mobile toured the United States, stopping at major
                cities, various expositions, fairs and shopping centers, carrying
                the story of Wisconsin cheese to the nation.
              </p>
              <p>
                In April, 1965, the Cheese-Mobile returned to New York to
                be at the Fair until it closes permanently in October, 1965.
              </p>
              <p>
                A tour of cities not reached on the first trip is planned
                after October, 1965, following which the cheese will be delivered
                to The Borden Company.
              </p>

              <div className={styles.assistBlock}>
                <p className={styles.subhead}>
                  ASSISTING THE WISCONSIN CHEESE FOUNDATION IN THIS SPECTACULAR
                  PROMOTION OF WISCONSIN CHEESE ARE THE FOLLOWING:
                </p>
                <p>
                  The Borden Company, major financial sponsor and ultimate
                  purchaser of the big cheese;
                </p>
                <p>
                  State of Wisconsin, $35,000 appropriation, paid out through
                  the Departments of Agriculture and Conservation;
                </p>
                <p>For Motor Company, donation of a $25,000 specially designed diesel tractor;</p>
                <p>
                  Highway Trailer Co. donation of a 35 foot trailer with specially
                  built glass sides, which was fabricated by the Louis Hoffmann
                  Co. of Milwaukee;
                </p>
                <p>
                  Transicold Corp. donation of a heavy duty mobile refrigeration
                  unit to main low temperatures at Fair and on tour.
                </p>
                <p>
                  Chr. Hansen&apos;s Laboratory, Inc. of Milwaukee donation of rennet
                  and starter cultures;
                </p>
                <p>
                  The Marschall Dairy Laboratory of Madison donation of coloring
                  for the big cheese
                </p>
                <p>Diamond Crystal Salt co. donation of all salt used;</p>
                <p>
                  Kusel Co., Watertown, Wis. donation of use of newly designed
                  &quot;cheddaring vat&quot;;
                </p>
                <p>Candy &amp; Co., Inc., Chicago donation of all wax used;</p>
                <p>
                  Chas. Pfizer &amp; Co., Inc., New York maintaining and staffing
                  employees&apos; and visitors&apos; canteen, and sorbistat-K for mold elimination;
                </p>
                <p>
                  Many Wisconsin cheesemakers for donating cash based on a
                  percentage of two months&apos; volume.
                </p>
              </div>

              <figure className={styles.holidayFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/wisconsin07/wi08.jpg"
                    alt="Cheese-Mobile"
                    width={427}
                    height={244}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
            </div>

            <p className={styles.source}>
              SOURCE: Brochure <em>1965 World&apos;s Fair Souvenir Folder - The World&apos;s Largest Cheese</em>
            </p>

            <hr className={styles.rule} />

            <div className={styles.holidayBlock}>
              <p className={styles.holidayCaption}>
                A t nine a.m. on April 22, the gates of the Fair were thrown open.
                In the subsequent ugly rush for enlightenment, few visitors spared
                a thought for the months and months of unremitting toil that
                had made the whole thing possible. Indeed, some people (below)
                were unabashedly out for all they could get.
              </p>
              <figure className={styles.cartoonFigure}>
                <Image
                  src="/images/wisconsin07/wi03.jpg"
                  alt=""
                  width={328}
                  height={451}
                  className={styles.photoImg}
                  unoptimized
                />
              </figure>
              <p className={styles.source}>
                Drawing by Robert Serle Source: HOLIDAY MAGAZINE, Vol. 36 No. 1, June 1964
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/wisconsin06" nextHref="/wisconsin08" />
    </>
  );
}
