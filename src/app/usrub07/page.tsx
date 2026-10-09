import type { Metadata } from "next";
import Image from "next/image";
import { UsrubNavChrome } from "@/components/UsrubNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./usrub07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochures — U.S. Rubber — nywf64.com",
  description:
    "U.S. Rubber publicity brochures for the giant tire at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * U.S. Rubber — Brochures (three publicity pieces).
 * Body from legacy usrub07.html. Legacy typo “pavilons” preserved.
 *
 * Stack: hero → UsrubNavChrome → navy title → brochure blocks → Nav2Bar.
 */
export default function Usrub07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="U.S. Rubber">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/usruboverview/hero-banner.jpg"
            alt="U.S. Rubber at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UsrubNavChrome />

      <article className={styles.article} aria-labelledby="usrub07-title">
        <header className={styles.titleBar}>
          <h1 id="usrub07-title" className={styles.titleBarMain}>
            Brochures
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.brochureBlock} aria-label="Pre-Fair publicity brochure">
            <div className={styles.brochurePanel}>
              <Image
                src="/images/usrub07/usrub07.jpg"
                alt="Cover Art"
                width={600}
                height={260}
                className={styles.coverImg}
                unoptimized
              />
            </div>
            <div className={styles.brochurePanel}>
              <Image
                src="/images/usrub07/usrub08.jpg"
                alt="Inside Art"
                width={600}
                height={284}
                className={styles.interiorImg}
                unoptimized
              />
              <div className={styles.columns}>
                <div className={styles.column}>
                  <p className={`${styles.brown} ${styles.brownDropCap}`}>
                    When the New York World&apos;s Fair opens in a few months, one of
                    its most spectacular features will be a gigantic U.S. Royal Tire
                    - stretching 80 feet high and carrying its 96 passengers on a
                    thrilling ride. Aboard this dramatic &quot;tire&quot;, you will have a
                    high, clear view of most of the Fair&apos;s outstanding exhibits,
                    fountains and promenades. The Fair-goers will see, from the
                    ground, a huge replica of a U.S. Royal Tire, bearing the Red
                    Circle of Security, and illuminated letters four feet high. At
                    night the &quot;tire&quot; will be floodlighted, and visible from every
                    part of the grounds and from Grand Central Parkway.
                  </p>
                  <p className={styles.brown}>
                    Many millions will see this passenger-carrying U.S. Royal Tire,
                    and thousands will ride on it.
                  </p>
                </div>
                <div className={styles.column}>
                  <p className={styles.brown}>
                    At its entrance, displays will familiarize the public with U.S.
                    Rubber&apos;s diversified tire line.
                  </p>
                  <p className={styles.brown}>
                    We hope you and your friends will see it and ride in it too. When
                    you do, you&apos;ll notice how many U.S. Rubber products have been
                    used in its construction; U.S. Vibrin® polyester resin reinforced
                    with glass fiber was utilized for the 17,500 pound laminated outer
                    shell. The gondolas, made of U.S. Expanded Royalite®, have seats
                    cushioned with Koylon® foam rubber and covered with Naugahyde® vinyl
                    upholstery, and are carpeted with Royal Vinyl Carpet. All in all,
                    our giant tire pays fitting tribute to the size and
                    diversification that distinguishes United States Rubber. See you at
                    the Fair!
                  </p>
                </div>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: U.S. Rubber pre-Fair Publicity Brochure
            </p>
          </section>

          <hr className={styles.rule} />

          <section aria-label="Driving to the Fair brochure">
            <div className={styles.brochureTwoUp}>
              <div className={styles.brochureTwoUpCover}>
                <Image
                  src="/images/usrub07/usrub09.jpg"
                  alt="Cover Art"
                  width={300}
                  height={734}
                  className={styles.coverImg}
                  unoptimized
                />
              </div>
              <div className={styles.brochureTwoUpBody}>
              <dl>
                <dt className={styles.headlineLarge}>Driving to the Fair?</dt>
                <dt className={styles.redBold}>RIDE ON U.S. ROYAL TIRES -</dt>
                <dt className={styles.redBold}>ENGINEERING TO KEEP YOUR SPARE</dt>
                <dt className={styles.redBold}>IN THE TRUNK!</dt>
                <dt className={styles.smallArial}>
                  With U.S. Royal Tires on your car, settle back and enjoy your trip
                  to the Fair. Even though it&apos;s comforting to know there&apos;s a spare
                  in the trunk, it&apos;s more reassuring to know that with U.S. Royals
                  on the wheels you&apos;ll probably never have to face the trouble and
                  bother of using that spare (until it&apos;s time to rotate your tires).
                </dt>
                <dt className={styles.centerBold}>
                  BEFORE YOU LEAVE FOR THE FAIR - OR ANYWHERE - SEE US ABOUT NEW U.S.
                  ROYAL TIRES
                </dt>
              </dl>
              <Image
                src="/images/usrub07/usrub10.jpg"
                alt="Back Page Art"
                width={260}
                height={174}
                className={styles.insetPhoto}
                unoptimized
              />
              <dl>
                <dt className={styles.centerBold}>
                  <span className={styles.red}>&nbsp;</span>
                  <span className={`${styles.red} ${styles.headlineLarge}`}>
                    Official World&apos;s Fair
                  </span>
                </dt>
                <dt className={`${styles.red} ${styles.headlineLarge}`}>
                  <span className={styles.centerBold}>
                    Ticket and Information Center
                  </span>
                </dt>
              </dl>
              </div>
            </div>
            <p className={styles.source}>SOURCE: U.S. Rubber Publicity Brochure</p>
          </section>

          <section className={styles.brochureBlock} aria-label="Giant Tire ride brochure">
            <div className={styles.brochureThreeTop}>
              <div className={styles.brochureThreeCopy}>
                <dl>
                  <dt className={`${styles.red} ${styles.headlineLarge}`}>
                    Take a Thrilling Ride Around
                  </dt>
                  <dt className={`${styles.red} ${styles.headlineLarge}`}>
                    the U.S. Royal &quot;GIANT TIRE&quot;
                  </dt>
                  <dt className={styles.smallArial}>
                    U.S. Royal&apos;s &quot;Giant Tire&quot; at the Fair is really a spectacular
                    80-foot Ferris wheel. Hop aboard one of the glass gondolas for a
                    swift and exciting ride ... see the magnificent panorama of the
                    surrounding pavilons, promenades and parks ... enjoy a birds-eye
                    view of the famous Unisphere and the fabulous General Motors
                    &quot;Futurama&quot; Building nearby.
                  </dt>
                  <dt className={styles.smallArial}>
                    For a memorable trip to the New York World&apos;s Fair, be sure your
                    visit includes a stop and a ride around the U.S. Royal &quot;Giant
                    Tire.&quot;
                  </dt>
                </dl>
              </div>
              <div className={styles.brochureThreeArt}>
                <Image
                  src="/images/usrub07/usrub12.jpg"
                  alt="Inside - Family Art"
                  width={275}
                  height={268}
                  className={styles.familyArt}
                  unoptimized
                />
              </div>
            </div>
            <Image
              src="/images/usrub07/usrub11.jpg"
              alt="Inside - Tire Art"
              width={600}
              height={451}
              className={styles.fullWidthImg}
              unoptimized
            />
            <p className={styles.source}>SOURCE: U.S. Rubber Publicity Brochure</p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/usrub06"
        explicitPrevious
        overviewHref="/usruboverview"
        nextHref="/usrub08"
      />
    </>
  );
}
