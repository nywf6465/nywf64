import type { Metadata } from "next";
import Image from "next/image";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/switzFeature.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Guide — Switzerland — nywf64.com",
  description:
    "Pavilion Guide for the Switzerland Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const WATCH_BRANDS_LEFT = [
  "BENRUS",
  "FAVRE-LEUBA",
  "GIRARD PERREGAUX",
  "HELBROS",
  "HUGUENIN",
  "INCABLOC",
  "INTERNATIONAL",
  "LONGINES-WITTNAUER",
  "MIDO",
];

const WATCH_BRANDS_RIGHT = [
  "MOVADO",
  "OMEGA",
  "PATEK PHILIPPE",
  "ROLEX",
  "TISSOT",
  "VACHERON &CONSTATIN-",
  "LE COULTRE",
  "ZODIAC",
];

/**
 * Switzerland — Pavilion Guide.
 * Body from legacy switz05.html (custom pavilion guide reprint).
 */
export default function Switz05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Switzerland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/switzoverview/hero-banner.jpg"
            alt="Switzerland pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwitzNavChrome />

      <article className={styles.article} aria-labelledby="switz05-title">
        <header className={styles.titleBar}>
          <h1 id="switz05-title" className={styles.titleBarMain}>
            Pavilion Guide
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleBlack}`}>
            <Image
              src="/images/switz05/swissbw11.jpg"
              alt=""
              width={37}
              height={65}
              className={styles.logo}
              unoptimized
            />
            The Pavilion Guide
          </h2>

          <div className={styles.coverRow}>
            <div className={styles.coverArt}>
              <Image
                src="/images/switz05/swisspg1.jpg"
                alt="Cover"
                width={234}
                height={534}
                className={`${styles.photo} ${styles.bordered}`}
                unoptimized
              />
            </div>
            <div className={styles.coverCopy}>
              <p className={styles.displayRed}>ENJOY A</p>
              <p className={styles.displayRed}>CHARMING</p>
              <p className={styles.displayRed}>SPOT OF</p>
              <p className={styles.displayRed}>SWITZERLAND</p>
              <p className={styles.copyTimes}>
                Reflecting the kind of charm that has made Switzerland a favorite
                of American tourists, the Swiss Pavilion is a delightful
                recreation of a tiny Alpine village.
              </p>
              <p className={styles.copyTimes}>
                The five building village includes <em>Le Chalet, </em>an Alpine
                restaurant. The glittering $2,000,000 exhibit of Swiss
                watch-makers is housed in three peaked buildings reminiscent of
                the Alps. Another building is an Exhibit Hall where products of
                Switzerland such as cheese and chocolate are displayed and may be
                purchased, and where Switzerland&apos;s tourism industry will be
                represented.
              </p>
              <p className={styles.copyTimes}>
                The Swiss Pavilion is less than 100 yards from the Unisphere,
                located at the southern end of the Swiss Sky Ride, at the corner
                of the Avenue of the United Nations and Avenue of Africa.
              </p>
              <p className={styles.copyTimes}>
                You are invited to sample the renowned Swiss hospitality. Right
                now, plan to visit this charming spot of Switzerland at the
                World&apos;s Fair.
              </p>
            </div>
          </div>

          <div className={styles.panelDark}>
            <Image
              src="/images/switz05/swisspg2.jpg"
              alt="Alpine Restaurant"
              width={475}
              height={174}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </div>
          <p className={styles.headingRed}>Dine at an Alpine Restaurant</p>
          <p className={styles.copyTimes}>
            Have you ever dreamed of dining at a real Alpine Inn? Here at{" "}
            <em>Le Chalet, </em>multilingual Swiss waiters and waitresses in
            costume will serve you <em>fondue, fondue bourgignonne, rosti,
            emince de veau, Zug kirsch torte. </em>
            Here you can watch your favorite <em>raclette </em>being prepared at
            a hearth as the fire melts a wheel of Bagnes cheese onto your plate.
          </p>
          <p className={styles.copyTimes}>
            Dining at the Swiss Pavilion is an incredible experience of being
            able to order a French appetizer, a German entree, an Austrian or
            Italian desert ... in each case with an undefinable
            certain-something added to make the meal thoroughly Swiss. The
            restaurant&apos;s wine cellar will include six great wines of
            Switzerland never before available in the United States.
          </p>
          <p className={styles.copyTimes}>
            <em>Le Chalet</em> has exposed interior beams, a high pitched roof,
            overhanging eaves, shuttered windows and looks for all the world like
            it might be nestled against the side of a snow capped mountain.
            Inside, decor is typically Alpine Swiss with burnt wood furniture
            made in the tiny village of Montbovon just for the Fair.
          </p>
          <p className={styles.copyTimes}>
            The restaurant serves 350 on its two interior levels and also
            provides dining on a terrace and on a balcony overlooking the Fair.
            It is open between 10 a.m. and midnight.
          </p>
          <p className={styles.copyTimes}>
            Prices are moderate, dining is family style.
          </p>

          <div className={styles.panel}>
            <p
              className={styles.copyTimes}
              style={{ fontSize: "1.75rem", fontStyle: "italic", marginBottom: "0.35rem" }}
            >
              Come to the
            </p>
          </div>
          <div className={styles.panelDark}>
            <Image
              src="/images/switz05/swisspg3.jpg"
              alt="Come to the Swiss Pavilion"
              width={500}
              height={210}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </div>
          <div className={styles.panel}>
            <p className={styles.headingRed}>Visit the Exhibit Hall</p>
            <p className={styles.copyTimes}>
              Connecting the buildings of the Swiss Watchmakers with{" "}
              <em>Le Chalet</em> is an Exhibit Hall in which world renowned Swiss
              products may be purchased.
            </p>
            <p className={styles.copyTimes}>
              Here you will learn how Swiss cheeses are made and you will be able
              to buy the cheeses of your choice from a wide selection.
            </p>
            <p className={styles.copyTimes}>
              Famous Tobler chocolate will represent the Swiss chocolate
              industry, and you will learn why Swiss chocolates are believed to
              be the world&apos;s finest.
            </p>
            <p className={styles.copyTimes}>
              At the Heidi Shop, you will find Swiss cowbells, music boxes, wood
              carvings, costumes, and working reproductions of wooden Swiss clocks
              more than 500 years old. Don&apos;t miss the opportunity to pick up
              a book of renowned Swiss recipes.
            </p>
            <p className={styles.copyTimes}>
              And at the Exhibit Hall, Swiss National Tourist Office and Swissair
              representatives will answer your questions about Swiss resort
              centers and travel.
            </p>
            <p className={styles.copyTimes}>
              So, have a taste of real Swiss hospitality ... at the World&apos;s
              Fair Swiss Pavilion.
            </p>
            <p className={styles.headingRed}>Exhibit of Swiss Watchmakers</p>
            <p className={styles.copyTimes}>
              The largest and most exciting display of watches ever seen in the
              United States will be housed in three high peaked buildings
              reminiscent of the Swiss Alps. Here Monday through Friday, you can
              win a fine Swiss watch.
            </p>
            <p className={styles.copyTimes}>
              <em>
                The masterful Swiss watches included in the glittering $2,000,000
                display include collections by:
              </em>
            </p>
            <hr className={styles.brandRule} />
            <div className={styles.brandGrid}>
              <div>
                {WATCH_BRANDS_LEFT.map((brand) => (
                  <div key={brand}>{brand}</div>
                ))}
              </div>
              <div>
                {WATCH_BRANDS_RIGHT.map((brand) => (
                  <div key={brand}>{brand}</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.skyRideRow}>
            <p className={styles.skyRideLabel}>
              take the Swiss Sky Ride to the Swiss Pavilion
            </p>
            <Image
              src="/images/switz05/swisspg4.jpg"
              alt="Location Map"
              width={440}
              height={136}
              className={styles.photo}
              unoptimized
            />
          </div>

          <div className={styles.timeCenterRow}>
            <div className={styles.panelDark}>
              <Image
                src="/images/switz05/swisspg5.jpg"
                alt="Time Center"
                width={261}
                height={240}
                className={`${styles.photo} ${styles.bordered}`}
                unoptimized
              />
            </div>
            <div className={styles.panel}>
              <p className={styles.headingRed}>World&apos;s Fair Time Center</p>
              <p className={styles.copyTimes}>
                Your most treasured souvenir of the World&apos;s Fair will be your
                photograph -- or the photograph of your family -- taken before
                the Master Clock of the World&apos;s Fair Time Center at the Swiss
                Pavilion.
              </p>
              <p className={styles.copyTimes}>
                The Master Clock, so accurate that it can measure imperfections
                in the Earth&apos;s rotation, will provide an enduring record of
                the year, month, day, date, hour, minute, and tenth second of the
                photograph for your priceless record in years to come. Bring your
                movie or still camera.
              </p>
            </div>
          </div>

          <p className={styles.vacationBox}>
            After visiting the Swiss Pavilion, you will want to spend your next
            vacation in Switzerland just a few hours away by twice daily Swissair
            DC-8 jet flights.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/switz05/swisspg6.jpg"
              alt="Unisphere Logo"
              width={191}
              height={135}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.source}>Source: The Swiss Pavilion Guide</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/switz04"
        explicitPrevious
        overviewHref="/switzoverview"
        nextHref="/switz06"
      />
    </>
  );
}
