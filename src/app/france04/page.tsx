import type { Metadata } from "next";
import Image from "next/image";
import { FranceNavChrome } from "@/components/FranceNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./france04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — France — nywf64.com",
  description:
    "Press releases for the Pavilion of France at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function FromHeader() {
  return (
    <div className={styles.fromRow}>
      <span className={styles.fromLabel}>FROM:</span>
      <ul className={styles.fromAddress}>
        <li>Bill Doll &amp; Company</li>
        <li>1700 Broadway</li>
        <li>New York 19, N. Y. JUdson6-8894</li>
      </ul>
    </div>
  );
}

/**
 * France — Press Releases.
 * Body from legacy france04.html (press kit + Herald Tribune clipping).
 *
 * Stack: hero → FranceNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (Pairs Show Girls, de Gaule, Camps Elysees, etc.) is preserved.
 */
export default function France04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="France">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/franceoverview/hero-banner.jpg"
            alt="France at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FranceNavChrome />

      <article className={styles.article} aria-labelledby="france04-title">
        <header className={styles.titleBar}>
          <h1 id="france04-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france04/france12.jpg"
                alt="Artist's Rendering - Pavilion of France"
                width={600}
                height={364}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Artist&apos;s Rendering of The Pavilion of France
            </figcaption>
          </figure>

          <div className={`${styles.release} ${styles.releaseGray}`}>
            <FromHeader />
            <p className={styles.releaseTitle}>
              N. Y. WORLD&apos;S FAIR WILL GET $10,000,000 FRENCH PAVILION:
            </p>
            <p
              className={`${styles.releaseTitle} ${styles.releaseTitleUnderline}`}
            >
              &quot;FOLIES BERGERE&quot;, AND MAXIM&apos;S AMONG MYRIAD
              ATTRACTIONS
            </p>
            <p>
              Anthony B. Golff, President of International Expositions
              Corporation, announced that work has begun on the $10,000,000
              French Pavilion which will be one of the largest exhibits in the
              international section of the 1964-65 New York World&apos;s Fair.
            </p>
            <p>
              Two of the prime attractions to be housed in the colorful complex
              of modern structures will be the original &quot;Folies
              Bergere&quot;, imported from Paris and presented in a 1500 seat
              theatre, and Maxim&apos;s Restaurant, which will be under the
              personal supervision of M. Louis Vaudable, current proprietor and
              scion of the founders of the world famous gourmet paradise on Rue
              Royale.
            </p>
            <p>
              Mr. Golff, who heads up the French Pavilion management
              organization, has a background of twenty-five years of
              international exposition experience. He emphasized that, in
              addition to dramatizing the best in French food and entertainment,
              there will be almost 200 exhibits, utilizing over 100,000 square
              feet of space, designed from an industrial point of view to show
              what is being done for trade and economy of France and to promote
              understanding between France and America. In part, the exhibits
              depicting a cross section of French Life will include &quot;The
              World of Women&quot; featuring latest fashion collections of the
              great couturiers, furs, jewelry, and perfumes. Other groups will
              display regional wines, cheeses, gourmet foods, handicrafts, home
              products and industrial creations ranging from gadgets to motor
              cars.
            </p>
            <p>
              The French Pavilion will rise on a large terraced and landscaped
              plot fronting on the World&apos;s Fair&apos;s own Moon Fountain
              with its spectacular water displays which will be illuminated at
              night.
            </p>
            <p>
              All exhibits and attractions will be housed in, under and around a
              triumvirate of buildings of pure geometrical form. One is
              rectangular in shape. Another, the largest ellipse ever built, is
              designed like a mammoth oval - the symbol of life and nature. The
              third is a massive pyramid rising to a height of 250 feet - in an
              avant garde simulation of the Eiffel Tower.
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <div className={`${styles.release} ${styles.releaseGray}`}>
            <p className={styles.pageNum}>-2-</p>
            <p>
              The rectangular building will house industrial exhibits in addition
              to Maxim&apos;s Restaurant which will seat 500 in its main dining
              room designed by John Greer in lush Directoire decor. Adjoining is
              a bar with a capacity of 85, and a Moulin Rouge Terrace where 165
              persons may dine and see intimate Parisian entertainment.
              Throughout the day, the best known mannequins of Paris will present
              fashion shows produced by leading French fashion houses.
            </p>
            <p>
              The giant ellipsoid will contain the world&apos;s most modern 1500
              seat theatre which will house the &quot;Folies Bergere&quot;. It
              will have a completely electronic stage capable of handling all of
              the scenic and mechanical effects required by the lavish revue. In
              the tradition of Paris musical theatres, the playhouse will be
              surrounded on three sides by a horse-shoe balcony and will be
              decorated in the style of Louis XIV.
            </p>
            <p>
              &quot;Follies Bergere&quot; will have an imported cast of over 100
              singers, dancers, show girls and featured entertainers. It will be
              presented by M. Paul Derval, with scenery by Michael Gyarmathy, and
              choreographed by Billy Petch. It will be brought here directly from
              Paris and will play several reserved seat performances daily.
            </p>
            <p>
              In a rotunda beneath the ellipse the world&apos;s largest
              &quot;maquette&quot; - a three dimensional animated and illuminated
              model of The City of Light - will be presented in continuous twenty
              minute showings at which 1,500 spectators can watch a panorama of
              the City of Paris as its lights and sounds range from dawn to
              midnight. The &quot;maquette&quot;, with its intricate detail and
              thousands of miniature buildings, is currently being constructed in
              Paris where twenty-five Parisian artisans will be working on it for
              the next year and a half. It is expected to cost almost a million
              dollars.
            </p>
            <p>
              In the towering Pyramid, visitors will ascend to the top level by
              elevator to view &quot;The Treasurers of Versailles&quot;, an
              enormous collection of paintings and other objects of art displayed
              beneath a vaulted cathedral ceiling and surrounded by stained glass
              walls. An open gallery will permit the highest view of the Fair
              grounds and egress will be by a sloping ramp edged with exhibits.
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <div className={`${styles.release} ${styles.releaseGray}`}>
            <p className={styles.pageNum}>-3-</p>
            <p>
              On the Main Concourse level will be additional exhibits and
              numerous specialty restaurants including: a Wine Cave where patrons
              will receive a wine taster&apos;s cup and be invited to sample the
              vintages under the tutelage of an expert; The Cafe Beaux Arts
              patterned after the sidewalk cafes of the Champs Elysees; and the
              Kronenburg Brasserie, an exact replica of an Alsatian beer garden,
              featuring music and provincial entertainment from all regions of
              France. The French Pavilion will be able to feed 3,500 people at
              one time in its combined restaurant facilities.
            </p>
            <p>
              Chief consulting Architect for the Pavilion is Charles Rieger, the
              well-known French designer, and project architects are Katz,
              Waisman, Weber and Strauss. The engineers are Bernard Shaw and
              Associates, construction is by Rand Construction Company and
              traffic management by International Expediters, Inc. Exhibit design
              and construction is by 3-Dimensional Exhibits of Chicago who have
              already leased 80,000 square feet in Long Island City for the
              exclusive use of creating and designing French Pavilion exhibit
              displays.
            </p>
            <p>
              Cole Fischer and Rogow will serve as advertising and public
              relations representatives, and Bill Doll and Company will handle
              the national and international publicity and exploitation campaign.
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <div className={styles.quoteBox}>
            <p>
              &quot;THIS IS JOHN CHAPMAN, DRAMA CRITIC OF THE NEW YORK DAILY NEWS.
              I HAVE BEEN CHEERED UP BY THE RECENT ANNOUNCEMENT THAT THE 1964
              WORLD&apos;S FAIR WILL HAVE A TEN MILLION DOLLAR FRENCH PAVILION,
              COMPLETE WITH A MAXIM&apos;S RESTAURANT AND THE REAL FOLIES
              BERGERE. UP TO NOW, PLANS FOR THE FAIR HAVE SOUNDED PRETTY SOLEMN,
              AND I&apos;VE BEEN WISHING MIKE TODD WERE ALIVE AND FULL OF CRAZY
              PLANS. THE FOLIES BERGERE WILL HELP.&quot;
            </p>
            <p className={styles.quoteAttr}>JOHN CHAPMAN . . . N. Y. DAILY NEWS</p>
          </div>

          <div className={`${styles.release} ${styles.releaseGreen}`}>
            <FromHeader />
            <p className={styles.releaseTitle}>
              FRENCH PAVILION AT NEW YORK WORLD&apos;S FAIR
            </p>
            <p
              className={`${styles.releaseTitle} ${styles.releaseTitleUnderline}`}
            >
              TO SELL $100,000,000 IN FRENCH MERCHANDISE
            </p>
            <p>
              An estimated $100,000,000 in the widest-variety of
              French-manufactured products, from machinery and motor cars to
              vintage wines and gourmet foods, will be sold at the French
              Pavilion during the two-year run of the 1964-65 N.Y. World&apos;s
              Fair.
            </p>
            <p>
              This volume of orders for merchandise with a
              &quot;Made-in-France&quot; label was predicted today by Anthony B.
              Golff, President of International Expositions Corporation and head
              of the French Pavilion management organization.
            </p>
            <p>
              Golff also announces that the French Pavilion management is
              proceeding with plans to make use of French equipment and materials
              in the construction of all the Pavilion buildings and its
              exhibition marts to the greatest degree possible. All equipment and
              merchandise imported from France for building or display purposes
              will be shipped by French carriers.
            </p>
            <p>
              Several million dollars will be spent for materials of French
              manufacture in the actual construction of the Pavilion. Tremendous
              orders for plate glass alone are being placed with French
              companies, since it is contemplated the building of the $10,000,000
              Pavilion will involve the use of at least two square acres of plate
              glass.
            </p>
            <p>
              French perfumes, cosmetics, jewelry, gowns, chapeaux, furs and
              handicrafts generally associated in the American mind with French
              industry will of course enjoy prominent display at the Pavilion.
              Golff emphasizes, however, that the entire extensive range of
              French industry will be completely represented. This will include
              exhibits of automobiles, motor scooters, bicycles, ball bearings,
              casters, metals, chemicals, plastics and a wealth of other products
              dramatizing the industrial might of France.
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/france04/france13.jpg"
                alt="Anthony B. Golff"
                width={400}
                height={504}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Anthony B. Golff, president of International Expositions
              Corporation, whose $10,000,000 French Pavilion will be one of the
              largest exhibits in the international section of the 1964-65 New
              York World&apos;s Fair, is a distinguished leader in the field of
              visual display and merchandising, and in the field of expositions.
            </figcaption>
          </figure>

          <div className={`${styles.release} ${styles.releaseBlue}`}>
            <FromHeader />
            <p
              className={`${styles.releaseTitle} ${styles.releaseTitleUnderline}`}
            >
              ANTHONY B. GOLFF
            </p>
            <p>
              Anthony B. Golff, President of International Expositions
              Corporation, has distinguished himself in the field of visual
              display and merchandising. International Expositions Corporation, a
              creative and management organization specializing in trade fairs
              and international fairs, is the only complete management
              organization covering design, production and management.
            </p>
            <p>
              Mr. Golff was the builder of the Polish Pavilion at the New York
              World&apos;s Trade Fair for 1959-60. During the same period Mr.
              Golff supervised the building of the Polish Pavilion at the Chicago
              International Trade Fair, and designed and built the Spanish
              Pavilion for the same event. He executed the Iranian Government&apos;s
              in both New York and Chicago and prepared the Trade Promotion
              Program for the Iranian Government. His designs were given first
              place citations in both cities. In New York he created the
              spectacular main display for Iran which was designed in the
              tradition of the fabled ruins of Persepolis, once a great city of
              Persia. Mr. Golff has performed creative work for the Indonesian
              Government.
            </p>
            <p>
              A former display director for Milliron&apos;s, a leading department
              store Los Angeles, Anthony Golff started his career as a designer,
              went on to store-planning and display, and has become a leading
              figure in the field of exposition. He has been active in
              merchandising and marketing for over twenty years.
            </p>
            <p>
              In his early display and planning, Mr. Golff was considered an
              authority in his work and consequently was called upon to write
              many articles in the leading display and advertising journals. He
              organized and participated in national and local display groups on
              the West Coast. His work has taken him throughout the United States
              and he has participated in every major exposition. On his work Mr.
              Golff remarks, &quot;In the field of marketing and merchandising,
              the use of exhibitions dates back to early history, yet the method
              is still in its infancy as far as the ultimate potential is
              concerned.&quot;
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <div className={`${styles.release} ${styles.releaseYellow}`}>
            <FromHeader />
            <p className={styles.releaseTitle}>
              CREPES SUZETTE BID TO REPLACE HOT DOGS
            </p>
            <p
              className={`${styles.releaseTitle} ${styles.releaseTitleUnderline}`}
            >
              AS WORLD&apos;S FAIR SNACK AT THE FRENCH PAVILION
            </p>
            <p>
              As American as . . . . what? Not hot dogs, amis, but crepes
              suzette. The distinctly French pancakes are making a strong bid to
              reign as the Number One Snack at the 1964-65 New York World&apos;s
              Fair. They&apos;ll be concocted and served up before the
              customer&apos;s eyes on the Terrace of the Fair&apos;s French
              Pavilion. It&apos;s the prediction of Anthony B. Golff, head of the
              management organization for the $10,000,000 Pavilion that crepes
              suzette will be the flaming favorites in the Fair&apos;s gourmet
              sweepstakes.
            </p>
            <p>
              So hold the mustard but heavy on the Grand Marnier. We&apos;re
              toasting the chef instead of the rolls next season!
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <div className={`${styles.release} ${styles.releaseGray}`}>
            <FromHeader />
            <p className={styles.releaseTitle}>
              MRS. DWIGHT D. EISENHOWER WILL SERVE
            </p>
            <p
              className={`${styles.releaseTitle} ${styles.releaseTitleUnderline}`}
            >
              ON FRENCH PAVILION ADVISORY COMMITTEE
            </p>
            <p>
              Mrs. Dwight D. Eisenhower has agreed to serve on the International
              Advisory Committee for the French Pavilion at the 1964-65 New York
              World&apos;s Fair, it was announced by Anthony B. Golff, President
              of International Expositions Corporation and head of the French
              Pavilion management organization.
            </p>
            <p>
              In accepting a Committee role associating her with what will become
              one of the largest exhibits in the international section of the
              Fair, with the twofold purpose of demonstrating the industrial
              might of France and the promotion of understanding between France
              and America, Mrs. Eisenhower joins a distinguished group of social
              and cultural leaders.
            </p>
            <p>
              On the Advisory Committee are Anthony B. Golff, Director of the
              French Pavilion; Mrs. Albert D. Lasker, Chairman; Mrs. Hugh
              Auchincloss, His Excellency Henri Bonnet, Rene Bouche, James H.
              Boyce, Charles Boyer, Mrs. David K. E. Bruce, William A. M. Burden,
              The Honorable Jefferson Caffrey, Claude Cartier, Philip Cortney,
              Miss Elizabeth Fairall, The Honorable James M. Gavin, Mrs. Thomas
              Hitchcock, The Honorable Amory Houghton, Alexis Lichine, Governor
              Theodore McKeldin, Leo J. Pierce, Richard de Rochemont, Baron
              Edmund Rothschild, Bronier Thibaut, Louis Vaudable and George D.
              Widener.
            </p>
            <p>
              Almost 200 exhibits, utilizing over 100,000 square feet of space,
              will give full display of the entire extensive range of French
              industry. An estimated $100,000,000 in sales of
              &quot;made-in-France&quot; products is expected at the French
              Pavilion during the two-year run of the Fair.
            </p>
            <p>
              The best in French food and entertainment will be dramatized at the
              French Pavilion with such spectacular presentations as the original
              &quot;Folies Bergere&quot; and the internationally-famed Maxim&apos;s
              Restaurant.
            </p>
            <p className={styles.stars}>* * *</p>
          </div>

          <p className={styles.source}>
            SOURCE: All Above: Pavilion of France Press Kit
          </p>

          <hr className={styles.rule} />

          <h2 className={styles.heraldTitle}>Pairs Show Girls at Fair</h2>

          <div className={styles.heraldLayout}>
            <div className={styles.heraldLeft}>
              <p className={styles.heraldFrom}>FROM FRANCE</p>
              <p className={styles.heraldByline}>By Ralph Chapman</p>
              <p className={styles.heraldStaff}>
                of the Herald Tribune Staff
              </p>
              <p>
                French delicacies to delight the eye as well as the palate were
                assured were assured for the New York World&apos;s Fair yesterday
                with the announcement that the exhibit of that country will
                include the Folies Bergere and an off-shoot of Maxim&apos;s,
                gourmet gathering place in Paris.
              </p>
              <p>
                The show, according to promoters of the multi-building display on
                a 77,000-square-foot site in the international section, &quot;will
                have an imported cast of over 100 singers, dancers, show girls
                and featured entertainers . . . It will be brought here directly
                from Paris and will play several reserved seat performances
                daily.&quot; There will be 1,500 seats.
              </p>
              <p>
                Maxim&apos;s &quot;will be under the personal supervision of Louis
                Vaudable, current proprietor and scion of the founders of the
                world famous gourmet paradise on the Rue Royal.&quot;
              </p>
              <p>
                The French exhibit is not being sponsored by the de Gaule
                government because France is a member of the Bureau of
                International Expositions which has turned thumbs down on the one
                which will open in Flushing Meadow on April 22, 1963. Instead, it
                is being financed by a number of private organizations pledged to
                spend $10 million on construction, rentals, displays and staff.
              </p>
            </div>

            <div className={styles.heraldRight}>
              <figure className={styles.heraldFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/france04/france14.jpg"
                    alt="French Pavilion"
                    width={380}
                    height={281}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>
                  FROM FRANCE, LAVISHLY - Architect&apos;s rendering of the $10
                  million French Pavilion which will be built for the New York
                  World&apos;s Fair. Left: the ellipse, which will contain a
                  1,500-seat theater where the &quot;Folies Bergere&quot; will be
                  presented. Center: rectangular structure will house Maxim&apos;s
                  Restaurant of Paris. Right: the pyramid of &quot;The Treasures
                  of Versailles,&quot; a collection of French art objects.
                </figcaption>
              </figure>

              <div className={styles.heraldBottom}>
                <div className={styles.heraldCol}>
                  <p>
                    Architects for the project have used basic shapes for the
                    three buildings -- rectangle ellipse and pyramid.
                  </p>
                  <p>
                    The raised rectangle will house Maxim&apos;s and a variety of
                    industrial exhibits. The latter will be designed to show
                    developments in French trade and industry and to promote
                    better understanding between France and the U.S.
                  </p>
                  <p>
                    The ellipse, a giant white egg, will be the home of the Folies
                    Bergere. There will be a horse-shoe shaped balcony and an
                    electronic stage. Decarters will be in the style of Louis XIV.
                    A lower rotunda will be the site of a three dimensional
                    animated and illuminated model of Paris, changing to represent
                    the lights and sounds of the city from dawn to late at night.
                  </p>
                </div>
                <div className={styles.heraldCol}>
                  <p>
                    The pyramid was described yesterday as an &quot;avant garde
                    simulation of the Eiffel Tower.&quot; It will be 120 feet high
                    with the top level devoted to the &quot;Treasures of
                    Versailles,&quot; a collection of paintings and objects
                    d&apos;art.
                  </p>
                  <p>
                    Attractions on the main concourse will include a wine cave
                    (for tasting), a replica of the sidewalk cafes of the Camps
                    Elysees, and an Alsatian beer garden.
                  </p>
                  <p>
                    Anthony B. Golff, president of International Expositions
                    Corp., which is managing the French exhibit, said that work
                    on the complex will begin Dec. 18th.
                  </p>
                  <p className={styles.heraldStars}>* * *</p>
                </div>
              </div>
            </div>
          </div>

          <p className={styles.source}>
            SOURCE: <em>New York Herald Tribune</em> Friday, December 7, 1962
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/france03"
        explicitPrevious
        overviewHref="/franceoverview"
        nextHref="/france05"
      />
    </>
  );
}
