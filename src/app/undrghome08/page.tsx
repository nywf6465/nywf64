import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/undrghomeLegacy.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Booklet (continued) — Underground World Home — nywf64.com",
  description:
    "Souvenir booklet (continued) for the Underground World Home at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Underground World Home — souvenir booklet continued (legacy undrghome08.html).
 */
export default function Undrghome08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <article className={styles.article} aria-labelledby="undrghome08-title">
        <header className={styles.titleBar}>
          <h1 id="undrghome08-title" className={styles.titleBarMain}>
            Booklet (continued)
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.bodyBooklet}`}>
          <p>
            <strong>Where </strong>can one build underground?
          </p>
          <p>
            From a Colorado Rockies peak 9,500&apos; above sea-level to a Long
            Island swamp, experience in UNDERGROUND HOME construction shows one
            can build anywhere!
          </p>
          <p>
            The construction techniques developed by the Underground World Home
            Corporation make it possible to build a home in any substratum, be
            it granite or bog land. The secret lies in the oblong, concrete-steel
            shell that not only seals out all moisture but is engineered to
            protect the home from earthquakes and other natural hazards for
            several lifetimes.
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome08/uwh19.jpg"
              alt="Construction cut-away"
              width={464}
              height={488}
              className={styles.photoPlain}
              unoptimized
            />
          </figure>

          <p>
            Here a cross-section of the shell encasing the UNDERGROUND HOME at
            the World&apos;s Fair reveals the unique construction features of
            this revolutionary concept of residential design.
          </p>
          <p>
            Protected against accidental puncture by Celotex panels, the
            three-layered membrane forms a water-tight seal around the entire
            shell. Inside the membrane, the concrete-steel shell varies in
            thickness from 20&quot; on the floor to between 10&quot; and 13&quot;
            for the walls and ceiling. The 18&quot; girders, forming the interior
            frame, support a dead load of over 2 million pounds of soil,
            permitting the homeowner to build surface structures such as garages
            and sun-rooms in addition to a small park or garden.
          </p>
          <p>
            All connections through the shell and its protective membrane,
            including air-vents, utility lines and sewage pipes, are water
            sealed and enter at a central point assuring ready accessibility.
          </p>
          <p>
            This unique, sealed shell can enclose a world of any dimension or
            content. The thousands of tons of natural soil or rock insulation
            protecting it from surface sound and the attack of the elements make
            it an ideal container for any structure in which people work, live,
            play or study.
          </p>

          <p className={styles.bookletSectionTitle}>
            Examples of current underground construction
          </p>
          <p>
            <em>
              &quot;I&apos;m not talking castles in the sky. These are strictly
              below the turf.&quot;
            </em>
            <br />
            Alex Bilanow Washington Daily News October 2, 1964
          </p>
          <p>
            <strong>Accomplished</strong>
          </p>
          <p>
            . 10-room home, Plainview, Texas: The underground residential
            prototype, inhabited by family of 4 for 3 years.
            <br />
            . Luxury private home, Duncanville, Texas: Featuring the first
            `outdoor&apos; patio.
            <br />
            . Shopping center, Osaka, Japan: 185 retail stores, mall, parking
            area overhead.
            <br />
            . Underground Home, New York World&apos;s Fair - 516,000 toured it
            during the 1964 season!
            <br />
            . Underground Home, under a Colorado mountaintop 9,500 feet above sea
            level! [see previous page]
            <br />
            . High School, Lake Worth, Texas: 18 classrooms for 475 students.
          </p>
          <p>
            <strong>In Construction</strong>
          </p>
          <p>
            . Model Home, Las Vegas, Nevada: First underground housing
            development beneath dwellers&apos; private golf course.
            <br />
            . &quot;First 21st Century City,&quot; Pittsburgh, Pennsylvania:
            75-acre ravine being converted into a $250-million research center.
          </p>
          <p>
            <strong>Proposed</strong>
          </p>
          <p>
            . Ultra-luxurious underground restaurant, Central Park, New York
            City, N. Y
            <br />
            . Underground School, Lake Worth, Texas: To accommodate nine grades,
            1,300 students.
            <br />
            . Underground Motels and Restaurants near airports and large
            transportation terminals everywhere.
          </p>
          <p>
            Today, from a hospital in Stockholm, Sweden, to a shopping center in
            Osaka, Japan, the development of underground structures is expanding
            along with man&apos;s need for an environment he can control.
          </p>
          <p>
            Proposed underground construction, serving industry and commerce: (1)
            Underground Shopping Center, (2) Underground Motel, (3) Underground
            Restaurant and Night Club.
          </p>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome08/uwh20.jpg"
              alt="Underground Shopping Center"
              width={464}
              height={301}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionNumber}>1</figcaption>
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome08/uwh21.jpg"
              alt="Airport Hotel"
              width={464}
              height={300}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionNumber}>2</figcaption>
          </figure>

          <figure className={styles.figureCenter}>
            <Image
              src="/images/undrghome08/uwh22.jpg"
              alt="Restaurant & Night Club"
              width={464}
              height={305}
              className={styles.photoBorder}
              unoptimized
            />
            <figcaption className={styles.captionNumber}>3</figcaption>
          </figure>

          <p className={styles.sourceNarrowLeft}>SOURCE: Souvenir Booklet</p>

          <p>
            Design and construction techniques and the actual services of 18
            different engineering specialists go into the planning of
            construction by the Underground World Home Corporation.
          </p>
          <p>
            At present, UNDERGROUND HOMES completed or in development in various
            parts of the United States are all custom installations. Currently,
            construction costs for these Homes in the United States vary between
            $12 and $24 per square foot, depending on the expense of local
            labor and materials. The development of prefabricated shells for
            non-custom installations is expected to radically lower the
            over&shy;all construction costs.
          </p>
          <p>For further information, write the</p>
          <p style={{ textAlign: "center" }}>
            <strong>Underground World Home Corporation,</strong>
            <br />
            P. O. Box 18, Mahwah, New Jersey.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome07"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghome09"
      />
    </>
  );
}
