import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betliv11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Lifesavers Tower / Hilton Cafe' International — Better Living Center — nywf64.com",
  description:
    "Lifesavers glass elevator tower and Hilton Cafe' International at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — Lifesavers Tower / Hilton Cafe' International.
 * Body from legacy betliv11.html (custom photo essay — no shared standard).
 * Legacy wording (Vews, Russion, WESPHALIAN, WFTM, Cafe') is preserved.
 *
 * Stack: hero → BetlivNavChrome → navy titles → article → Nav2Bar.
 */
export default function Betliv11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv11-title">
        <header className={styles.titleBar}>
          <h1 id="betliv11-title" className={styles.titleBarMain}>
            Lifesavers Tower
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.towerSplit}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/betliv11/tower-elevator.jpg"
                alt="Lifesavers Glass Tower Elevator"
                width={846}
                height={1859}
                className={styles.photoImg}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Lifesavers Glass Tower Elevator
              </figcaption>
            </figure>
            <div className={styles.lede}>
              <p>
                With all visitors required to make their way from the top of
                the Better Living Center down to the exit, the ideal way to go
                was to take the glass elevator on the building&apos;s exterior
                to the rooftop. Glass elevators were themselves a novelty in
                the mid-1960s (the first having been installed in a San Diego
                hotel only a decade earlier). By letting the rider enjoy the
                visual experience of rising up in the total safety of an
                enclosure, they offered something refreshingly different from
                the claustrophobic setting of a traditional elevator. For many
                a Fairgoer, a ride in the Better Living Center&apos;s
                &quot;Glass Tower&quot; elevator and the New York State
                Pavilion&apos;s &quot;Sky Streak&quot; elevators would be their
                first exposure to this new kind of technology.
              </p>
              <p>
                The Better Living Center&apos;s elevator had an official
                sponsor in Lifesavers candy. This represented a nice bit of
                symmetry with the 1939 New York World&apos;s Fair where
                Lifesavers had sponsored the famous <em>Parachute Tower</em>{" "}
                which took passengers up to the highest point possible in the
                Fair in a harness that then dropped them back to Earth as if
                they were in a parachute. The Glass Tower elevator would not
                provide a similar thrill but the apparatus, adorned by a giant
                white Life Savers symbol at the top, could take Fairgoers up to
                the second highest observation point in the entire Fair
                offering a fine panoramic view that could be enhanced through
                the use of coin-operated telescopic binoculars. The giant white
                Life Saver on the top of the tower was added <em>during</em>{" "}
                the Fair; when it opened there was only one <em>inside</em> the
                tower.
              </p>
            </div>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv11/tower-closer.jpg"
              alt="Closer view of the Life Save Tower"
              width={500}
              height={319}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Closer View of the Lifesaver Tower
            </figcaption>
            <p className={styles.source}>
              SOURCE: Photo courtesy Bob Sivilic collection © 2010 Bob Sivilic,
              All Rights Reserved.
            </p>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv11/tower-pavilion.jpg"
              alt="BLC and Glass Tower"
              width={500}
              height={336}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Better Living Center featuring the Lifesavers Glass Tower
              Elevator
            </figcaption>
            <p className={styles.source}>
              SOURCE: Photo courtesy Bill Cotter collection © 2010 Bill Cotter,
              All Rights Reserved.
            </p>
          </figure>

          <figure className={styles.figure} style={{ maxWidth: 315 }}>
            <Image
              src="/images/betliv11/tower-view.jpg"
              alt="Lifesavers Tower"
              width={315}
              height={400}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              One more view of the Lifesavers Glass Tower Elevator
            </figcaption>
            <p className={styles.source}>
              SOURCE: Photo courtesy Gary Holmes collection © 2010 Gary Holmes,
              All Rights Reserved.
            </p>
          </figure>

          <hr className={styles.rule} />

          <h2 className={styles.viewHeading}>The View from the Top</h2>
          <div className={styles.panorama}>
            <div className={styles.panoramaInner}>
              {[
                {
                  src: "/images/betliv11/view-cafe-terrace.jpg",
                  w: 500,
                  h: 339,
                  alt: "View from Cafe Terrace",
                },
                {
                  src: "/images/betliv11/view-kodak-nystate.jpg",
                  w: 500,
                  h: 338,
                  alt: "View featuring Kodak and NY State",
                },
                {
                  src: "/images/betliv11/view-schaefer-unisphere.jpg",
                  w: 500,
                  h: 339,
                  alt: "View featuring Schaefer & Unispher",
                },
                {
                  src: "/images/betliv11/view-tower-of-light.jpg",
                  w: 500,
                  h: 339,
                  alt: "View Featuring Tower of Light",
                },
                {
                  src: "/images/betliv11/view-pool-industry.jpg",
                  w: 500,
                  h: 338,
                  alt: "View Featuring Pavilion of Pool of Industry & Fountains",
                },
                {
                  src: "/images/betliv11/view-russian-orthodox.jpg",
                  w: 500,
                  h: 339,
                  alt: "View Featuring Russion Orthodox Church",
                },
              ].map((photo) => (
                <figure key={photo.src} className={styles.figure}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.w}
                    height={photo.h}
                    className={styles.photoImg}
                    unoptimized
                  />
                </figure>
              ))}
              <p className={styles.caption}>
                Panorama of Vews of the 1964-1965 New York World&apos;s Fair
                from the Cafe Hilton Terrace and Observation Deck on the top of
                the Better Living Center - The Fair&apos;s Second Highest
                Vantage Point.
              </p>
              <p className={styles.source}>
                SOURCE: Photos this page (unless otherwise noted) presented
                courtesy Bill Cotter collection 2010 Bill Cotter, All Rights
                Reserved. See more images from Bill&apos;s <u>fabulous</u>{" "}
                collection of World&apos;s Fair photographs at his website{" "}
                <a
                  href="http://www.worldsfairphotos.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WorldsFairPhotos.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Hilton Cafe&apos; International</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.lede}>
            <p>
              Once on the rooftop of the Better Living Center, visitors had the
              option of starting their tour of the building by taking a
              stairway down to the third floor or having a meal in the{" "}
              <em>Café International</em> sponsored by the Hilton hotel chain.
              Offering &quot;delectable dishes from five world areas&quot;
              thanks to the services of five kitchens and guest chefs from the
              finest of Hilton&apos;s worldwide hotels. Diners could even enjoy
              their meal outside on the terrace while taking in the spectacular
              view of the Fairgrounds.
            </p>
            <p>
              For the Fair&apos;s second season, Hilton discontinued their
              sponsorship of the cafe.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv11/cafe-rendering.jpg"
              alt="Artist's Rendering of Cafe' International"
              width={500}
              height={317}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Artist&apos;s Rendering of the Hilton <em>Cafe&apos; International</em>
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>Cafe&apos; International</em> Souvenir Postcard
            </p>
          </figure>

          <div className={styles.news}>
            <h2>
              FIVE KITCHENS ARE FEATURED IN ROOFTOP HILTON CAFE INTERNATIONAL
            </h2>
            <div className={styles.newsGrid}>
              <div>
                <p>
                  Master chefs of five continents preside over their native
                  delicacies in the Hilton Cafe International on the Better
                  Living Center penthouse floor. 18,000 square feet of space
                  are devoted to delicious dining from North America, South
                  America, Europe, the Mediterranean and the Orient.
                </p>
                <p>
                  A semi-circular promenade gives access to the five open
                  kitchens. Patrons may walk from one to another to select a
                  variety of dishes. They may also limit their selection to one
                  kitchen, any one of which is equipped to provide a complete
                  meal.
                </p>
                <p>
                  After guests have brought their selections from the kitchens
                  to their tables, they receive service from colorfully
                  costumed waitresses who provide cocktails, bread-and-butter,
                  beverages and desserts.
                </p>
              </div>
              <div>
                <p>
                  There is a cocktail lounge which offers a view of the Fair as
                  does the Cafe itself through sliding glass doors and, when
                  the weather permits, from colorful umbrella tables.
                </p>
                <p>
                  WFTM, New York&apos;s first stereo station, originates its
                  program &quot;Wendy Barrie at the World&apos;s Fair&quot;
                  from the Cafe. Miss Barrie circulates among the diners,
                  interviewing celebrities and ordinary Fairgoers alike. The
                  program is heard Monday through Friday at 1:05 P.M.
                </p>
              </div>
            </div>
            <p className={styles.source} style={{ textAlign: "left" }}>
              SOURCE: <em>SPECTRACKULAR NEWS </em>
              Published by Better Living Center, New York World&apos;s Fair
            </p>
          </div>

          <div className={styles.pair}>
            <Image
              src="/images/betliv11/menu-cover.jpg"
              alt="Menu Cover"
              width={290}
              height={248}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
            <div>
              <Image
                src="/images/betliv11/cafe-floorplan.jpg"
                alt="Cafe Floorplan"
                width={300}
                height={233}
                className={`${styles.photoImg} ${styles.photoPlain}`}
                unoptimized
              />
              <p className={styles.chefNote}>
                HILTON&apos;S WORLD&apos;S FAIR CHEFS
                <br />
                FROM HILTON HOTELS ON FIVE CONTINENTS,
                <br />
                FLOWN TO THE FAIR ON
                <Image
                  src="/images/betliv11/hilton-logo.jpg"
                  alt=""
                  width={60}
                  height={28}
                  className={styles.logo}
                  unoptimized
                />
              </p>
            </div>
          </div>

          <div className={styles.kitchenRow}>
            <div className={`${styles.menuCard} ${styles.south}`}>
              <h3>SOUTH AMERICA</h3>
              <p>
                <strong>Appetizers</strong>
              </p>
              <p>SHRIMP COCKTAIL WITH AVOCADO .95</p>
              <p>&quot;TOTOPOS&quot; -- FRIED TORTILLA CHIPS WITH GUACAMOLE SAUCE .75</p>
              <p>&quot;TORTILLAS&quot; -- FRESHLY MADE BY OUR TORTILLERA .75</p>
              <p>RIPE TROPICAL FRUIT CUP .75</p>
              <p>
                <strong>Soups</strong>
              </p>
              <p>CONSOMME &quot;TLALPANO&quot; WITH CHICKEN AND AVOCADO .60</p>
              <p>
                <strong>Light Entrees</strong>
              </p>
              <p>&quot;EMPANADA&quot; -- CHILEAN MEAT TURNOVER WITH A TYPICAL COLE SLAW 1.40</p>
              <p>
                <strong>Main Entrees</strong>
              </p>
              <p>
                &quot;ARROZ CON POLLO&quot; -- CHICKEN, RICE AND VEGETABLES IN
                CASSEROLE WITH RICE 2.50
              </p>
              <p>SPIT ROASTED YOUNG PORK WITH BAKED &quot;PLANTAIN&quot; BANANA AND COLE SLAW 2.75</p>
            </div>
            <Image
              src="/images/betliv11/kitchen-south-america.jpg"
              alt="South American Kitchen"
              width={300}
              height={301}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <div className={styles.kitchenRow}>
            <div className={`${styles.menuCard} ${styles.europe}`}>
              <h3>EUROPE</h3>
              <p>
                <strong>Appetizers</strong>
              </p>
              <p>TYPICAL HORS D&apos;OEUVRE PLATE .95</p>
              <p>WESPHALIAN HAM AND MELON .95</p>
              <p>
                <strong>Soups</strong>
              </p>
              <p>CREAM OF FRESH ASPARAGUS SOUP .60</p>
              <p>
                <strong>Light Entrees</strong>
              </p>
              <p>
                &quot;A FRENCH OMELETTE&quot; WITH HERBS, HAM OR MUSHROOMS AND
                FRENCH FRIED POTATOES 1.50
              </p>
              <p>
                <strong>Main Entrees</strong>
              </p>
              <p>&quot;POT AU FEU&quot; -- BEEF, CHICKEN AND VEGETABLES IN A BROTH 2.75</p>
              <p>
                &quot;QUICHE LORRAINE&quot; -- AN INDIVIDUAL SWISS CHEESE PIE
                WITH A GREEN SALAD 1.50
              </p>
              <p>VEAL CUTLET &quot;PARMIGIANA&quot; -- WITH CHEESE, TOMATO SAUCE AND SALAD BOWL 2.75</p>
              <p>
                &quot;MELTON MOWBRAY PIE&quot; -- AN ENGLISH MEAT PLATE WITH A
                RED CURRANT SAUCE 2.25
              </p>
            </div>
            <Image
              src="/images/betliv11/kitchen-europe.jpg"
              alt="European Kitchen"
              width={300}
              height={302}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <div className={styles.kitchenRow}>
            <div className={`${styles.menuCard} ${styles.north}`}>
              <h3>NORTH AMERICA</h3>
              <p>
                <strong>Light Entrees</strong>
              </p>
              <p>CHEF&apos;S SALAD BOWL 1.75</p>
              <p>CHICKEN SALAD BOWL 1.75</p>
              <p>SUMMER FRUIT BOAT 1.75</p>
              <p>
                <strong>Main Entrees</strong>
              </p>
              <p>
                &quot;BARBECUED WHOLE BABY CHICKEN&quot; WITH COLE SLAW OR
                POTATO SALAD 2.75
              </p>
              <p>&quot;CHARCOAL BROILED SIRLOIN STEAK&quot; WITH GREEN SALAD AND BAKED POTATO 3.95</p>
              <p>
                <strong>Sandwiches</strong>
              </p>
              <p>&quot;THE PICNICKER&quot; -- COUNTRY EGG, BAKED HAM AND CHICKEN SALAD ON SOFT ROLLS 1.50</p>
              <p>
                &quot;THE LUMBERJACK&quot; -- A HEARTY CANADIAN FAVORITE, HAM
                AND SWISS CHEESE IN WHOLE FRENCH LOAF 1.50
              </p>
              <p>
                &quot;THE NEW YORKER&quot; -- SLICED TURKEY AND CORNED BEEF ON
                OLD FASHIONED PUMPERNICKEL 1.50
              </p>
              <p>
                &quot;THE RED AND WHITE&quot; -- SMOKED ATLANTIC SALMON AND
                CREAM CHEESE ON HOME MADE RYE BREAD 1.50
              </p>
              <p>&quot;THE HILTON HAMBURGER&quot; -- COLE SLAW AND POTATO CHIPS 1.45</p>
            </div>
            <Image
              src="/images/betliv11/kitchen-north-america.jpg"
              alt="North American Kitchen"
              width={300}
              height={299}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <div className={styles.kitchenRow}>
            <div className={`${styles.menuCard} ${styles.med}`}>
              <h3>MEDITERRANEAN</h3>
              <p>
                <strong>Appetizers</strong>
              </p>
              <p>
                &quot;DOLMAS&quot; -- STUFFED TOMATO, PEPPER AND VINE LEAF-- HOT
                WITH MEAT, OR COLD WITH PINE NUT RICE .75
              </p>
              <p>&quot;BOUREKAKIA&quot; -- CHEESE BAKED IN PASTRY CRUST .75</p>
              <p>
                <strong>Soups</strong>
              </p>
              <p>CHILLED GAZPACHO -- A COLD SPANISH TOMATO SOUP .60</p>
              <p>
                <strong>Light Entrees</strong>
              </p>
              <p>
                &quot;SOUVLAKIA ME PITTA&quot; -- CHARCOAL GRILLED LAMB, WRAPPED
                IN GREEK COUNTRY BREAD 2.25
              </p>
              <p>
                <strong>Main Entrees</strong>
              </p>
              <p>&quot;DONER KEBAB&quot; -- ROAST HERB SEASONED LAMB ON A SPIT WITH IC PILAFF RICE 2.50</p>
              <p>&quot;KILIC SIS&quot; -- CHARCOAL GRILLED SWORDFISH ON A SKEWER, WITH RICE 2.25</p>
              <p>GRILLED BABY SEA BASS WITH LEMON AND A TYPICAL SALAD 2.50</p>
            </div>
            <Image
              src="/images/betliv11/kitchen-mediterranean.jpg"
              alt="Mediterranean Kitchen"
              width={300}
              height={299}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <div className={styles.kitchenRow}>
            <div className={`${styles.menuCard} ${styles.orient}`}>
              <h3>ORIENT</h3>
              <p>
                <strong>Appetizers</strong>
              </p>
              <p>SMOKE OVEN BARBECUED SPARERIBS 1.25</p>
              <p>FRIED STUFFED SHRIMPS AND BAMBOO SHOOTS .95</p>
              <p>
                <strong>Soups</strong>
              </p>
              <p>&quot;HONG CHU&quot; WON TON SOUP .60</p>
              <p>
                <strong>Light Entrees</strong>
              </p>
              <p>
                LIGHT CRISP FRIED SHRIMPS, FISH AND VEGETABLES &quot;TEMPURA
                STYLE&quot; 1.75
              </p>
              <p>
                <strong>Main Entrees</strong>
              </p>
              <p>
                &quot;CHICKEN WITH PINEAPPLE,&quot; WATER CHESTNUTS, CHINESE
                VEGETABLES &amp; FRIED OR PLAIN RICE 2.50
              </p>
              <p>
                &quot;A FILET OF BEEF CURRY&quot; WITH PILAFF RICE AND
                APPROPRIATE CONDIMENTS 2.75
              </p>
            </div>
            <Image
              src="/images/betliv11/kitchen-orient.jpg"
              alt="Oriental Kitchen"
              width={300}
              height={299}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <p className={styles.source} style={{ textAlign: "left" }}>
            SOURCE: Menu, Hilton Cafe&apos; International
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv10"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv12"
      />
    </>
  );
}
