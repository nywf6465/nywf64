import type { Metadata } from "next";
import Image from "next/image";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./swisky05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure — Swiss Sky Ride — nywf64.com",
  description:
    "Swiss Sky Ride brochure from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride brochure page — multi-panel HTML brochure reprint (not PDF).
 * Body from legacy swisky05.html.
 * Stack: hero → SwiskyNavChrome → navy title → brochure panels → Nav2Bar.
 */
export default function Swisky05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Swiss Sky Ride">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/swiskyoverview/hero-banner.jpg"
            alt="Swiss Sky Ride at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwiskyNavChrome />

      <article className={styles.article} aria-labelledby="swisky05-title">
        <header className={styles.titleBar}>
          <h1 id="swisky05-title" className={styles.titleBarMain}>
            Brochure
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.spread}>
            <div className={styles.spreadCol}>
              <p className={styles.headline}>FIRST--SEE THE FAIR</p>
              <p className={styles.headline}>FROM HIGH IN THE AIR</p>
              <Image
                src="/images/swisky05/swisky05.jpg"
                alt="THE SWISS SKY RIDE"
                width={300}
                height={242}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/swisky05/swisky06.jpg"
                alt="Cable Cars"
                width={300}
                height={431}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.fairLine}>
                NEW YORK <span className={styles.fairBlue}>WORLD&apos;S FAIR</span>{" "}
                1964-1965
              </p>
            </div>
            <div className={styles.spreadCol}>
              <div className={styles.whereBox}>
                <p className={styles.whereHeading}>WHERE AM I?</p>
                <p className={styles.whereHeading}>WHERE&apos;S THE SWISS SKY RIDE?</p>
                <p className={styles.whereCopy}>
                  If you enter by the Main Gate on the north side of the Fair,
                  walk down the Avenue of the Americas toward the Unisphere. The
                  Swiss Sky Ride cable station is in the park to your left, just
                  beyond the Masonic Building and adjacent to the United States
                  Pavilion.
                </p>
                <p className={styles.whereCopy}>
                  If you come in the South Gate from the parking lots by the
                  lake, walk toward the Unisphere, right turn at the Vatican
                  Pavilion and walk up the Avenue of Asia. The cable station is
                  on your left, just past the Hall of Free Enterprise.
                </p>
                <p className={styles.whereHeading}>
                  This is the way to see the Fair!
                </p>
              </div>
              <Image
                src="/images/swisky05/swisky08.jpg"
                alt="Map of Sky Ride Route"
                width={298}
                height={554}
                className={styles.photo}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.panel}>
            <Image
              src="/images/swisky05/swisky09.jpg"
              alt="Artist's Rendering of the Fair from Sky Ride"
              width={600}
              height={359}
              className={styles.photoWide}
              unoptimized
            />
            <div className={styles.panelCopy}>
              <p>
                <strong className={styles.blue}>
                  Below, the whole Fair!{" "}
                </strong>
                <span className={styles.muted}>
                  On either side, exotic pavilions of the nations reveal
                  architectures of the future. The same cable cars that thread
                  their way up mountains in many parts of the world carry you and
                  your family both ways across the fabulous World&apos;s Fair,
                  past the mammoth Unisphere, to the old world charm of
                  Switzerland&apos;s mountain chalet - or to the new world
                  atmosphere of the United States Pavilion. Photograph
                  never-to-be-forgotten scenes of magnificence from the Fair&apos;s
                  most exciting vantage point.
                </span>
              </p>
              <p className={styles.owner}>
                Owner: International Cable Ride Corporation, c/o Von Roll, Ltd.,
                Berne Works, Berne Switzerland. Manager: Fair Sky, Incorporated,
                250 Park Avenue, New York, N.Y. 10017
              </p>
            </div>
          </div>

          <div className={styles.sideCards}>
            <div className={styles.sideCard}>
              <Image
                src="/images/swisky05/swisky11.jpg"
                alt="The Swiss Pavilion"
                width={300}
                height={149}
                className={styles.photo}
                unoptimized
              />
              <p>
                <strong className={styles.blue}>THE SWISS PAVILION</strong>{" "}
                <span className={styles.small}>
                  is a delightful recreation of a tiny Alpine village, reflecting
                  the kind of charm that has made Switzerland a favorite country
                  for American tourists. the pavilion is less than 100 years from
                  the Unisphere, located at the southern end of the Sky Ride at
                  the corner of the Avenue of the United Nations and the Avenue
                  of Africa.
                </span>
              </p>
            </div>
            <div className={styles.sideCard}>
              <Image
                src="/images/swisky05/swisky10.jpg"
                alt="Swiss Chalet Restaurant"
                width={300}
                height={149}
                className={styles.photo}
                unoptimized
              />
              <p>
                <strong className={styles.blue}>
                  SWISS CHALET RESTAURANT{" "}
                </strong>
                <span className={styles.small}>
                  Dine under the peaked roof of the main lodge on traditional
                  Swiss dishes, where multilingual Swiss waiters make your meal
                  an oasis amid the hustle and bustle of the Fair. If you love
                  good food, be sure to try Cheese Fondue. It&apos;s fantastic!
                </span>
              </p>
            </div>
            <div className={styles.sideCard}>
              <Image
                src="/images/swisky05/swisky12.jpg"
                alt="Official World's Fair Time Center"
                width={300}
                height={149}
                className={styles.photo}
                unoptimized
              />
              <p>
                <strong className={styles.blue}>
                  OFFICIAL WORLDS&apos; FAIR TIME CENTER{" "}
                </strong>
                <span className={styles.small}>
                  The master clock in the Time Center shows year, month, day,
                  hour, minute, second and tenth of a second. Photograph yourself
                  and your family in front of the Master Clock for a record of a
                  Fair you will never forget.
                </span>
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/swisky04"
        explicitPrevious
        overviewHref="/swiskyoverview"
        nextHref="/swiskyoverview"
      />
    </>
  );
}
