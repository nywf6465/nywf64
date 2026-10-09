import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Cavalcade of Custom Cars — Transportation & Travel — nywf64.com",
  description:
    "Cavalcade of Custom Cars at the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Trantrav12Page() {
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

      <article className={styles.article} aria-labelledby="trantrav12-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav12-title" className={styles.titleBarMain}>
            Cavalcade of Custom Cars
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.introRow}>
            <Image
              src="/images/trantrav12/tratra72.jpg"
              alt="Program Cover"
              width={350}
              height={482}
              className={styles.framedImg}
              unoptimized
            />
            <div className={styles.bodyArial}>
              <p>
                The producers of this show are making every effort to present the
                world&apos;s very finest automotive masterpieces. Should you have any
                suggestions, please feel invited to turn them in at the box office.
              </p>
              <p>
                <strong>WORLD WIDE</strong>
                <br />
                <strong>PRODUCTIONS, INC.</strong>
              </p>
            </div>
          </div>

          <hr className={styles.hr} />

          <Image
            src="/images/trantrav12/tratra73.jpg"
            alt="Air Car"
            width={500}
            height={242}
            className={styles.borderlessImg}
            unoptimized
          />
          <h2 className={styles.carTitle}>$50,000 XPAK 400 CAR-CRAFT</h2>
          <h2 className={styles.carTitle}>MAGAZINE EXPERIMENTAL AIR CAR</h2>
          <div className={styles.bodyArial}>
            <p>
              Built by George Barris of North Hollywood, California, the air car has
              caused more talk in the transportation industry than anything since the
              development of the jet engine.
            </p>
            <p>
              It is a &quot;ground effects&quot; machine and rides on a five inch
              cushion of air. It can ride on water as well as land, has no wheels,
              transmission or rear-end and has no frictional moving parts. Air is drawn
              in through the front and rear openings into the open plenum chamber with
              outlets, through a combination of peripheral jet inserts. A four inch
              polyethylene circular skirt is installed on the under portion of the body.
            </p>
            <p>
              Frame construction is of 3/4 inch alloy round tubing. The air car&apos;s
              dimensions are: 12 feet long; 6 feet wide and 30 inches high. Its
              stabilizer fins have an 8 foot 7 inch wing span, 57 inches high. All
              panels are hand formed from .040 half-hard aluminum.
            </p>
            <p>
              Its power source is 2 jet aircraft starter motors, 24 volts D.C., 4 h.p.,
              that turn 40,000 rpm at 300 amps. This is then reduced 8 to 1 to absorb the
              amount of load horsepower. Balanced 20 inch cast aluminum fans push 11,800
              C.I.M. free flow and under 7/8 inch static water pressure has 7,600 C.I.M.
            </p>
            <p>
              Dry weight of the car is 422 pounds including all accessories. Movement is
              obtained by a revolving jet nozzle which has an air thrust to the right,
              left, forward, reversed and stop.
            </p>
            <p>
              Scoop on top houses a penta-prism rear-view mirror which can be seen from
              inside the cab. Headlight is a curved fluorescent triple-tube which throws a
              clear light 100 feet ahead and causes no glare to approaching vehicles.
            </p>
            <p>
              Air stream indicators are mounted on the grille to register speed while the
              car is moving through the air. Contoured body is of unbreakable fibre-glass
              and bucket seats boast a waist-high safety belt. Air foam cushions in the
              upholstery are mounted throughout for safety and the floor has white plush
              carpeting. There is also an impact-resistant adjustable air foam headrest on
              a gold coil spring.
            </p>
            <p>
              The air car also has Phono-vision, the new dial telephone with a TV screen
              to enable caller to see who he is talking to when dialing with the
              double-transistor TV camera and microphone. The 6 sq. inch TV screen is
              mounted on the dashboard and is operated on any wave length from a
              transformer.
            </p>
            <p>
              A radar screen is also mounted on the dashboard, sending out waves to pick
              up the size of any obstruction on the highway or terrain.
            </p>
            <p>
              The complete car is operated by sound waves and controls will be demonstrated
              by a small push-button box 50 feet away from it. Starting, stopping, right
              and left turns and operation of the neon and fluorescent lighting system is
              all handled by wireless remote control.
            </p>
            <p>
              Body paint of nitro-cellulose lacquer consists of 35 coats using a million
              particles of a chromed aluminum called &quot;Metalflake.&quot; The fins have
              30 coats of imported Swedish pearl essence made of crushed fish scales and
              added crushed diamond-dust and then colored in kandy translucent red, white and
              blue.
            </p>
            <p>
              This particular model was designed and built for public demonstration and is
              mounted on a guide rail for safety&apos;s sake.
            </p>
            <p>All exterior trim has been gold plated for added beauty.</p>
            <p>
              The engineering and styling on this car is a prediction of things to come in
              the auto industry.
            </p>
          </div>

          <div className={styles.mediaRow}>
            <p className={styles.bodyArial}>
              This sleek golden colored Jaguar, offering a peek at Summer fun on
              ski&apos;s is one of the show stoppers at the fabulous Cavalcade of Custom
              Cars Show in the Auto-torium of the Transportation &amp; Travel Pavilion at
              the New York World&apos;s Fair.
            </p>
            <Image
              src="/images/trantrav12/tratra74.jpg"
              alt="Jaguar"
              width={400}
              height={327}
              className={styles.framedImg}
              unoptimized
            />
          </div>

          <div className={styles.mediaRow}>
            <Image
              src="/images/trantrav12/tratra75.jpg"
              alt="Modernistic Custom Car"
              width={400}
              height={322}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.bodyArial}>
              This modernistic custom car, a Detroit entry at several World Wide produced
              auto shows is one of the highlights at the Cavalcade of Custom Cars exhibit.
            </p>
          </div>

          <div className={styles.twoUp}>
            <div>
              <Image
                src="/images/trantrav12/tratra76.jpg"
                alt="Paul Anka &amp; Couger"
                width={300}
                height={238}
                className={styles.framedImg}
                unoptimized
              />
              <p className={styles.bodyArial}>
                Paul Anka, one of the many celebrities to visit Bob George&apos;s Cavalcade
                of Custom Cars Show at the New York World&apos;s Fair, poses along side of
                the &quot;Couger&quot;, entered in the &quot;Cavalcade&quot; by the Ford
                motor Company as part of the Ford Custom Caravan exhibit.
              </p>
            </div>
            <div>
              <Image
                src="/images/trantrav12/tratra77.jpg"
                alt="Paul Anka &amp; T&amp;T Hostesses"
                width={300}
                height={243}
                className={styles.framedImg}
                unoptimized
              />
              <p className={styles.bodyArial}>
                International song star Paul Anka welcomes a bevy of beauties from the
                Transportation &amp; Travel Pavilion to the Custom Car Cavalcade. Anka is
                seated in &quot;La Shabbla&quot;, one of the masterpieces of the custom auto
                world. Valued at over $250,000, it was built and is owned by John Buzzi of
                Chicago, Illinois.
              </p>
            </div>
          </div>

          <div className={styles.mediaRow}>
            <p className={styles.bodyArial}>
              Benny Goodman, the King of Swing, tries out <em>The Maharajah</em>, the
              world&apos;s leading custom auto, at the Cavalcade&apos;s opening, 1964
              World&apos;s Fair. Bob George, of World-Wide Productions, dubbed &quot;The Mike
              Todd of the Custom Car World,&quot; took BG on a tour of the entire exhibit and
              Goodman sat in every car. The world&apos;s leading producer of custom car
              shows, George has also been involved in production of jazz shows featuring such
              artists as Stan Kenton, Count Basie, and Joe Williams . . . .
            </p>
            <Image
              src="/images/trantrav12/tratra78.jpg"
              alt="Benny Goodman &amp; Bob George"
              width={300}
              height={330}
              className={styles.framedImg}
              unoptimized
            />
          </div>

          <div className={styles.mediaRow}>
            <Image
              src="/images/trantrav12/tratra79.jpg"
              alt="Lil' Bandit"
              width={350}
              height={277}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.bodyArial}>
              George Jessel is the delighted prisoner of Lee Levine (left) and Barbara Sands,
              hostesses at the Cavalcade of Custom Cars, while admiring the Lil&apos;
              Bandit, a custom car beauty of Blue-Metal Flake finish owned by Whitey Agh and
              Andy Lennon of Long Island.
            </p>
          </div>

          <Image
            src="/images/trantrav12/tratra80.jpg"
            alt="Barbara Sands &amp; 69'er"
            width={400}
            height={314}
            className={styles.framedImg}
            unoptimized
          />
          <p className={styles.bodyArial}>
            Flushing Meadow, N. Y. -- Lovely Barbara Sands of Sommerset, New Jersey, stage,
            screen &amp; TV star is shown in the 69&apos;er, a $15,000 custom made car. The
            69&apos;er is one of the many elegant custom cars shown in the Cavalcade of Custom
            Cars exhibition at the N.Y. World&apos;s Fair Transportation &amp; Travel
            Pavilion. Miss Sands is currently featured in &quot;Way Out West&quot;.
          </p>

          <div className={styles.mediaRow}>
            <Image
              src="/images/trantrav12/tratra82.jpg"
              alt="1923 Chandler"
              width={300}
              height={289}
              className={styles.framedImg}
              unoptimized
            />
            <p className={styles.bodyArial}>
              Popular disc jockey Freddie Robins (right) joins some visiting entertainers on
              the running board of a 1923 Chandler, loaned to the Cavalcade of Custom Cars by
              Charlie Bates Old Fashioned Saloon.
            </p>
          </div>

          <div className={styles.mediaRow}>
            <p className={styles.bodyArial}>
              Georgie Jessel makes like a real Maharaja seated at the controls of &quot;The
              Maharaja,&quot; one of the world&apos;s most elegant custom autos at the
              Cavalcade of Custom Cars in the World&apos;s Fair&apos;s Transportation &amp;
              Travel Pavilion. Jessel is also the entertainment director-coordinator for the
              show.
            </p>
            <Image
              src="/images/trantrav12/tratra81.jpg"
              alt="Jessel &amp; The Maharaja"
              width={300}
              height={242}
              className={styles.framedImg}
              unoptimized
            />
          </div>

          <Image
            src="/images/trantrav12/tratra83.jpg"
            alt="Lloyd Bridges, George Jessel &amp; Bob George"
            width={500}
            height={372}
            className={styles.framedImg}
            unoptimized
          />
          <p className={styles.bodyArial}>
            While casing a custom job called &quot;Lil&apos; Bandit&quot;, George Jessel
            breaks-up Sea Hunt star Lloyd Bridges and Cavalcade producer Bob George at the
            Cavalcade of Custom Cars.
          </p>

          <p className={styles.source}>
            Source: Selections from the Official Program, <em>Cavalcade of Custom Cars</em>
          </p>
          <Image
            src="/images/trantrav12/tratra84.jpg"
            alt="Jessel &amp; Selinium-1"
            width={600}
            height={292}
            className={styles.framedImg}
            unoptimized
          />
          <p className={styles.bodyArial}>
            Just to be different, instead of kicking the tires, George Jessel tries the balance
            on the Selinium-1, one of the stars of the Cavalcade of Custom Cars.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav11"
        overviewHref="/trantravoverview"
        nextHref="/trantrav13"
        explicitPrevious
      />
    </>
  );
}
