import type { Metadata } from "next";
import Image from "next/image";
import { FordNavChrome } from "@/components/FordNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ford06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion Plans Announced — Ford — nywf64.com",
  description:
    "Ford Motor Company announces its pavilion plans — FAIR NEWS coverage from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford — Pavilion Plans Announced.
 * Body from legacy ford06.html (FAIR NEWS reprints).
 * Preserve typo: entertinament.
 */
export default function Ford06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Ford Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/fordoverview/hero-banner.jpg"
            alt="Ford Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FordNavChrome />

      <article className={styles.article} aria-labelledby="ford06-title">
        <header className={styles.titleBar}>
          <h1 id="ford06-title" className={styles.titleBarMain}>
            Pavilion Plans Announced
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            FORD MOTOR COMPANY ANNOUNCES ITS PAVILION PLANS
          </h2>
          <p className={styles.source}>
            Source: FAIR NEWS, Official Bulletin of the New York World&apos;s
            Fair, Vol. 2, No. 1, January 21, 1963
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/ford06/ford57.jpg"
              alt="Disney & Ford view model"
              width={353}
              height={210}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Walt Disney (left) and Henry Ford II, chairman of the board, Ford
              Motor Company, inspect a scale model of the Ford Pavilion. A major
              highlight of the entertainment and show will be an exciting
              automobile trip through a fantasy of the past, present and future.
            </figcaption>
          </figure>

          <p>
            Today, the Ford Motor Company is revealing exterior design and
            architectural styling features for its pavilion at the Fair. The
            company also announces that a unique and exciting automobile trip
            through a fantasy land of the past, present and future will be a
            distinctive and memorable feature of the pavilion.
          </p>
          <p>
            All of the Ford Pavilion&apos;s show, exhibit and entertainment
            features, including the ride fantasy, are being created by Walt
            Disney and designed by W.E.D. Enterprises, Inc.
          </p>
          <p>
            The Ford Pavilion, paralleling Grand Central Parkway diagonally
            across the parkway from the New York City Building, will occupy most
            of a seven-acre site.
          </p>
          <p>
            Incorporating the very latest architectural styling and construction
            techniques, the Ford building has been designed and engineered by
            Welton Becket, internationally-known architect, and his staff at
            Welton Becket and Associates in Los Angeles.
          </p>
          <p>
            The huge, ultramodern pavilion will feature a glass-enclosed
            rotunda-like structure, 235 feet in diameter, fifty-six feet high,
            and surrounded by sixty-four glittering pylons 100 feet tall.
            Adjoining this main entrance to the Ford Pavilion will be a flared
            rectangular show and exhibit building more than 500 feet in length
            and standing as high as a seven-story building. It will house the
            major show and entertainment features being created for Ford by Walt
            Disney and his staff.
          </p>
          <p>
            At night the rotunda portion of the pavilion will become a waterfall
            of light. Each of the eight-foot deep pylons will be illuminated with
            incandescent lights ranging from low to high density, creating the
            effect of motion.
          </p>
          <p>
            Huge glass panels enclosing the pavilion will be held in place by
            steel columns, aluminum extrusions and newly-developed neoprene
            glazing gaskets, all engineered to resist extraordinary changes in
            weather and winds of hurricane force.
          </p>
          <p>
            The central core in the pavilion, which will be completely
            air-conditioned, will contain rest rooms and a first aid station on
            the first floor level. The mezzanine level will include a reception
            lounge for Ford guests, as well as offices for operating personnel.
          </p>

          <h2 className={styles.headline}>
            TOPPING OFF OF FORD BUILDING HAILED BY ROBERT MOSES
          </h2>
          <p className={styles.source}>
            Source: FAIR NEWS, Official Bulletin of the New York World&apos;s
            Fair, Vol. 2, No. 4, April 16, 1963
          </p>

          <div className={styles.split}>
            <div>
              <p>
                A two-ton section of a 100-foot high pylon was swung into place
                early this month over the Rotunda entrance of Ford Motor
                Company&apos;s Fair Pavilion completing structural steel erection
                on the massive building.
              </p>
              <p>
                Participating in the ceremonies with Ford Motor Company
                representatives, Fair President Robert Moses hailed the topping
                of the Ford building as &quot;an important milestone in the
                construction of the Fair. There is bound to be a great exhibit
                when Ford and Disney get together.&quot;
              </p>
              <p>
                To mark the occasion, U.S. Steel&apos;s American Bridge Division
                workers went aloft with a six-foot fir tree, appropriately
                decorated with miniature automobiles and topped by a Fair flag.
                The tree was &quot;planted&quot; on the final steel section and
                flanked with flags of the United States and the United Nations,
                the latter symbolic of the international character of the Fair
                itself.
              </p>
              <p>
                Robert Lamerson, Ford resident engineer assigned to the project,
                said that exceptional weather during the past few weeks enabled
                the American Bridge crew to complete this phase of work on the
                pavilion ahead of schedule. The building will contain 3,400 tons
                of structural and finishing steel.
              </p>
              <p>
                The &quot;topping out&quot; ceremony on the Ford Pavilion was
                part of a tradition that has its origin in legend and
                superstition.
              </p>
              <p>
                History traces the custom back to the pre-Christian era in
                Scandinavian countries where neighbors helped one another erect
                homes and then held a community &quot;raising bee&quot; to
                celebrate finished work on the highest point in the house.
              </p>
              <p>
                Walt Disney and his staff at WED Enterprises, Inc., a Disney
                subsidiary, are creating and designing all of the exhibit and
                entertinament features for the Ford Pavilion.
              </p>
            </div>
            <figure className={styles.figure}>
              <Image
                src="/images/ford06/ford58.jpg"
                alt='Structural Steel "Topping Off"'
                width={172}
                height={282}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                A two-ton top section of a 100-foot high pylon as it was swung
                into place over the Rotunda entrance of Ford Motor Company&apos;s
                Fair Pavilion to mark completion of structural steel erection on
                the massive building. Workers of U.S. Steel&apos;s American Bridge
                Division later went aloft to plant a six-foot fir tree,
                appropriately decorated with miniature automobiles, and a
                World&apos;s Fair flag. Shown is steel worker, Jay Feltham holding
                the traditional &quot;topping out&quot; tree.
              </figcaption>
            </figure>
          </div>

          <h2 className={styles.headline}>INTERIORS OF EXHIBITS TAKING SHAPE</h2>
          <p className={styles.source}>
            Source: FAIR NEWS, Official Bulletin of the New York World&apos;s
            Fair, Vol. 3, No. 2, February 22, 1964
          </p>
          <p className={styles.subhead}>Ford</p>
          <figure className={styles.figure}>
            <Image
              src="/images/ford06/ford59.jpg"
              alt="Building Space City"
              width={252}
              height={182}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              Workmen constructing the Space City exhibit
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ford05"
        explicitPrevious
        overviewHref="/fordoverview"
        nextHref="/ford07"
      />
    </>
  );
}
