import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vatican08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Pieta — Vatican — nywf64.com",
  description:
    "Michelangelo’s Pietà at the Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Vatican08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vatican08-title">
        <header className={styles.titleBar}>
          <h1 id="vatican08-title" className={styles.titleBarMain}>
            The Pieta
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/vatican08/vat14.jpg"
              alt="The Pieta at the Fair"
              width={418}
              height={480}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <section className={styles.section} aria-labelledby="pieta-heading">
            <h2 id="pieta-heading" className={styles.sectionHeading}>
              MICHELANGELO&apos;S PIETA
            </h2>
            <p>
              &quot;Pieta&quot; means &quot;pity&quot; or &quot;compassion.&quot;
              Michelangelo sculptured the Pieta at the request of Cardinal Jean
              de Bilheres de Lagraulas, who, at the time, represented the King
              of France at the Papal Court. Michelangelo, a youth of
              twenty-four at the time, completed the sculpture within one year
              as his contract required. In 1499, it was placed in the old
              Basilica of St. Peter.
            </p>
            <p>
              It is said that a few evenings after the sculpture had been placed
              in the Basilica, Michelangelo returned to admire it and heard a
              group of strangers praising it but attributing its artistry to
              others. Michelangelo said nothing but a night or two later shut
              himself in the chapel and by lamp light chiseled his signature on
              the band across the Virgin&apos;s chest: MICHAEL ANGELUS
              BONAROTUS FLORENTINUS FACIEBAT (Michelangelo Bounarroti of
              Florence made this). The Pieta is the only signed work of the
              master sculptor.
            </p>
          </section>

          <figure className={styles.figure}>
            <Image
              src="/images/vatican08/vat29.jpg"
              alt="The Pieta at the Fair"
              width={383}
              height={480}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <section className={styles.section} aria-labelledby="setting-heading">
            <h2 id="setting-heading" className={styles.sectionHeading}>
              THE PAVILION SETTING
            </h2>
            <p>
              As part of the preparations for the journey of the Pieta to New
              York, a plaster base added many years ago, was removed. As
              presented in the Pavilion, the Pieta has been placed as nearly as
              possible to the position intended by Michelangelo.
            </p>
            <p>
              The dark blue, flickering votive lights number more than 400 and
              are arranged in forty-eight vertical strings -- twenty-four on
              each side of the Pieta area. The 13,000-pound marble base for the
              statue was quarried in Italy and brought to New York for Pavilion
              display. The statue itself is 68&quot; high, measures 63&quot; by
              39&quot; at the base and weighs 6,6000 pounds.
            </p>
            <p>
              The bullet-proof, ceiling-to-floor plexiglas screen through which
              the Pieta is viewed is comprised of seven huge sheets weighing
              seven hundred pounds each. The shield is but one of a network of
              protective devices counted upon to assure the safety of the
              statue.
            </p>
            <p>
              The exquisitely beautiful Pieta of Michelangelo, so graciously
              loaned for display in the Vatican Pavilion, soon become the Crown
              Jewel of the Fair itself.
            </p>
            <p>
              Overwhelmingly popular in its setting of blue, the Pieta was
              viewed by millions of Pavilion visitors as they were moved slowly
              across the special exhibit theatre by means of three mobile walks
              set at various heights. Tens of thousands of Pavilion guests
              desirous of studying the sculpture at greater length, utilized the
              rear stationary walkway provided for that purpose.
            </p>
            <figure className={styles.figure}>
              <Image
                src="/images/vatican08/vat15.jpg"
                alt="Moving Viewing Walkways"
                width={317}
                height={277}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Moving walkways at various heights, enabled millions to view the
                Vatican&apos;s magnificent sculpture
              </figcaption>
            </figure>
            <p>
              Shortly before the close of the New York World&apos;s Fair, the
              Vatican Commission on Fine Arts announced that numerous requests
              from many lands had made it necessary to prohibit henceforth the
              loan or removal from Vatican City of Vatican-owned art.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="coming-heading">
            <h2 id="coming-heading" className={styles.sectionHeading}>
              THE COMING OF THE PIETA
            </h2>
            <div className={styles.flow}>
              <div className={styles.imgLeft}>
                <Image
                  src="/images/vatican08/vatpavpie1.jpg"
                  alt="X-raying the Pieta before moving"
                  width={198}
                  height={209}
                  unoptimized
                />
              </div>
              <p>
                The story of the Pieta&apos;s coming to America began in the fall
                of 1962, when His Eminence Francis Cardinal Spellman asked Pope
                John XXIII to permit Michelangelo&apos;s magnificent sculpture
                to be placed on exhibit in the proposed Vatican Pavilion at the
                New York World&apos;s Fair. Good Pope John agreed to the request
                and added that he would also loan, for the same purpose, as a
                gesture of appreciation for all America had done for the rest
                of the world, the ancient statue of Christ, the Good Shepherd.
                Pope Paul VI confirmed the actions of his predecessor and on
                the night of April 2, 1964,
              </p>
              <div className={styles.imgRight}>
                <Image
                  src="/images/vatican08/vatpavpie2.jpg"
                  alt="Pieta packed for voyage"
                  width={195}
                  height={215}
                  unoptimized
                />
              </div>
              <p>
                carefully packed to withstand the rigors of a long land and sea
                voyage, the Pieta left the Basilica of St. Peter in Vatican
                City for the first time since Michelangelo placed it there.
              </p>
              <p>
                Cushioned within a sturdy wooden case by the most modern
                materials science has devised and further secured inside a
                waterproof metal container, the Pieta spent its first night
                outside the Basilica in a courtyard of Vatican City.
              </p>
              <div className={styles.imgLeft}>
                <Image
                  src="/images/vatican08/vatpavpie3.jpg"
                  alt="Removing the Pieta from the Basilica"
                  width={195}
                  height={214}
                  unoptimized
                />
              </div>
              <p>
                Early on Sunday morning, April 5th, at the request of those to
                whom the safety of the statues had been entrusted, the TN
                CRISTFORO COLOMBO, flag ship of the Italian Line, moved slowly
                -- not into its regular passenger pier berth -- but into the
                Floating Dry-dock in the port of Naples served by the only
                derrick able to place the statues in the location aboard ship
                selected to provide the greatest possible protection for them.
              </p>
              <div className={styles.imgRight}>
                <Image
                  src="/images/vatican08/vatpavpie4.jpg"
                  alt="Loading the Pieta for journey to Naples"
                  width={197}
                  height={210}
                  unoptimized
                />
              </div>
              <p>
                Within an hour both the Pieta and the Good Shepherd were aboard
                the COLOMBO and, after returning to its regular berth and taking
                on its passengers, the pride of the Italian Line sailed for New
                York with its precious cargo.
              </p>
              <p>
                The plans formulated for the transport of the two Vatican
                treasures were as detailed and complete as months of careful
                preparation and study could make them. The Good Shepherd, packed
                in two concentric wooden cases each containing its own layer of
                cushioning material and wrapped in an asbestos blanket to
                protect it from fire, was placed in a separate compartment in
                the hold of the ship. The lashings and condition of the statue
                were inspected daily by a ship&apos;s officer and a member of
                the Pieta Transport Committee.
              </p>
              <div className={styles.imgLeft}>
                <Image
                  src="/images/vatican08/vatpavpie5.jpg"
                  alt="The Pieta on the deck of the CHRISTFORO COLOMBO"
                  width={197}
                  height={194}
                  unoptimized
                />
              </div>
              <p>
                The Pieta, its exterior case painted white with shipping marks
                of blue and topped in brilliant international orange, the color
                most discernible at sea, traveled lashed to steel deck shoes
                placed in position a few days earlier while the COLOMBO was in
                Genoa. Steel guy wires equipped with hydrostatic releases able
                to fee the entire package from its confining cables, should it
                sink below the surface of the sea, held the Pieta case to its
                deck fittings. As an added safety measure, a signaling light
                buoy ready to go into operation at a moment&apos;s notice was
                placed nearby so that if the necessity arose it would signal
                over the international radio distress frequency the location of
                the Pieta and would power a flashing beacon visible fifteen
                miles at sea level and fifty miles at air search height.
                Throughout the voyage two seamen guarded the precious cargo.
                (The Pieta was insured for six million dollars; the Good Shepherd
                for two million dollars.)
              </p>
              <p>
                Eight days later, the port of New York welcomed the COLOMBO and
                its distinguished cargo as tug boat horns blared and banners
                streamed in the early morning breeze.
              </p>
              <p>
                Moments after the COLOMBO eased into its berth at its Hudson
                River pier, the Pieta and the Good Shepherd were removed from
                the ship by the waiting derrick-barge &quot;Challenger.&quot;
              </p>
              <div className={styles.imgRight}>
                <Image
                  src="/images/vatican08/vatpavpie6.jpg"
                  alt="Arriving at Hudson River Pier in New York"
                  width={197}
                  height={205}
                  unoptimized
                />
              </div>
              <p>
                To avoid the heavy Monday morning East River traffic and the
                danger of bringing the statues through Hell Gate at the
                river&apos;s race rather than at slack tide, it was decided to
                hold the statues on the derrick-barge at the pier overnight.
              </p>
              <p>
                The following morning, April 14th, the statues began their
                second voyage as two solicitous tugs carefully guided the barge
                down the Hudson River around Manhattan Island, and up the East
                River to Flushing Bay.
              </p>
              <p>
                Arriving at Whitestone Parkway Bridge over Flushing Inlet in the
                same kind of heavy downpour that had plagued their lorry trip
                from Rome to Naples, the statues were promptly hoisted to trucks
                already in position on the bridge forty feet overhead. A few
                minutes later, their long 4,500 mile journey ended as the truck
                carrying them rolled to a stop alongside the Vatican Pavilion
                in the World&apos;s Fair grounds.
              </p>
              <p>
                On Thursday, April 16th the Pieta and the Good Shepherd were
                placed on their respective pedestals within the Pavilion. On
                Sunday, April 19th, in the presence of several hundred
                distinguished visitors, the Pieta was unveiled by His Eminence
                Paul Cardinal Marella, Legate of Pope Paul VI.
              </p>
            </div>
          </section>

          <p className={styles.source}>
            Source: <em>Official Guide Book</em>, Vatican Pavilion, New York
            World&apos;s Fair 1964-1965 and the book Vati
            <em>can Pavilion New York World&apos;s Fair 1964-1965 A Chronicle</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/vatican07"
        overviewHref="/vaticanoverview"
        nextHref="/vatican09"
      />
    </>
  );
}
