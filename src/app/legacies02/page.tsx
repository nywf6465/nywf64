import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legacies02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Legacies Locations I — The Fair that Survived — nywf64.com",
  description:
    "Legacies Locations I — surviving buildings and artifacts from the 1964/1965 New York World’s Fair found across the country on nywf64.com.",
};

/**
 * The Fair that Survived — Legacies Locations I.
 * Body from legacy legacies03.html (Page 2 after overview).
 *
 * Stack: legacieshero → LegaciesNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Legacies02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="The Fair that Survived">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/legacies/legacieshero.jpg"
            alt="The Fair that Survived — legacies of the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <LegaciesNavChrome />

      <article className={styles.article} aria-labelledby="legacies02-title">
        <header className={styles.titleBar}>
          <h1 id="legacies02-title" className={styles.titleBarMain}>
            Legacies Locations I
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.quote}>
            &quot;One night late in the Fall they put out the blazing lights in
            The World of Tomorrow. The following morning the wrecking crews
            arrived.&quot;
          </p>
          <p className={styles.body}>
            Robert Moses was speaking of the 1939/1940 New York World&apos;s
            Fair when he made that remark. He could very well have said the same
            thing 25 years later.
          </p>
          <p className={styles.body}>
            But not everything met the fate of the wreckers. Bits and pieces of
            the 1964/1965 New York World&apos;s Fair survive to this very day.
            To be sure, one can still find the scraps of paper and souvenirs
            that mark its existence. But, there are much larger mementos to be
            found:
          </p>

          <p className={styles.body}>
            Adam writes: &quot;The Socony Mobil building is now in Poughkeepsie,
            NY. I forget who owns it but it&apos;s leased partly by the county
            and partly by the state and (after interior remodeling) used as
            offices, meeting spaces, and classrooms. The overhanging V-shaped
            roof is still a prominent feature. I [used to work there], which was
            where I heard about the building being a relic of the World&apos;s
            Fair.&quot; -eMail &amp; photo (below) from Adam, April 21, 2011
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy57.jpg"
              alt="Socony Mobil building in Poughkeepsie"
              width={500}
              height={262}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            This building (aerial below) located on the Northeast side of
            Poughkeepsie, appears to be the building that Adam refers to. Photo
            courtesy Gary Holmes.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy58.jpg"
              alt="Aerial view of Socony Mobil building in Poughkeepsie"
              width={500}
              height={298}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/socmobil01.jpg"
              alt="Artist's rendering of the Socony Mobil Pavilion"
              width={400}
              height={264}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Artist&apos;s rendering of the Socony Mobil Pavilion at the NY
              World&apos;s Fair
            </figcaption>
            <p className={styles.source}>
              SOURCE: Commercial Transparency by Photo Lab, Inc., Washington,
              DC
            </p>
          </figure>

          <p className={styles.body}>
            The U.S. Rubber Ferris Wheel was moved to Detroit, Michigan where it
            became{" "}
            <Link href="/usrub05">a giant road sign</Link> along Interstate
            Highway 94.
          </p>
          <p className={styles.body}>
            The Spanish Pavilion was disassembled and reconstructed{" "}
            <Link href="/spainoverview">in downtown Saint Louis, Missouri</Link>{" "}
            at 1 S. Broadway, where it was to become a part of the city&apos;s
            Westward Expansion area that encompassed the Gateway Arch and Busch
            Stadium. After sitting neglected and unused for years it was finally
            incorporated into a hotel, which has changed hands from time to
            time.
          </p>
          <p className={styles.body}>
            The Parker Pen Pavilion was moved to Lake of the Ozarks, Missouri to
            the <Link href="/parpenoverview">Lodge of Four Seasons</Link>. Mark
            Brown writes &quot;My family owns the Lodge of Four Seasons. It is
            true that we do indeed have the Parker Pen Pavilion onset. My
            grandfather purchased the building and brought it to the Lodge many
            years ago. It now houses offices for the Executive office as well as
            the Accounting offices. I guess it was once an outdoor structure,
            they must have since added walls so as to house the offices that we
            have. It is still in good shape.&quot; - April 17, 2000
          </p>
          <p className={styles.body}>
            <Link href="/johwax08">The Johnson Wax Golden Rondelle</Link>, minus
            the soaring canopy, was moved to downtown Racine, Wisconsin, where
            it became a part of the S.C. Johnson Companies&apos; corporate area.
            For many years, the Academy Award winning film, &quot;To be
            Alive!&quot; was shown at the theater, although it suffered from
            repeated use. The film has since been restored and is shown in full
            three-panel form by digital high-definition projection. The Rondelle
            is still used as a meeting facility and theater.
          </p>
          <p className={styles.body}>
            The Ten Pillars of Economic Wisdom that stood in front of the Hall
            of Free Enterprise were donated to the{" "}
            <a
              href="https://www.amway.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amway Corporation
            </a>
            . Mr. John Faye of Amway&apos;s Visitor Center writes &quot;You are
            right they were on the ten columns (pillars) on the front of the
            Economics Building at the NY World&apos;s Fair. When we were offered
            the building when they were dismantling the Fair we couldn&apos;t
            use the building, but asked if we could have the plaques. When we
            received them we had them flattened out and mounted on a sculpture
            we had in front of our World Headquarters building in Ada, Michigan.
            We remodeled and re-landscaped a few years back and moved the
            sculpture to another location and at that time we moved the plaques
            out along the 53 flag poles that we now have in front of our World
            Headquarters building. The plaques are now mounted on pedestal
            inclines among the flag poles with glass covers to protect
            them.&quot; - April 28,2000
          </p>
          <p className={styles.body}>
            The Coca-Cola Carillon was relocated to{" "}
            <a
              href="https://www.stonemountainpark.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stone Mountain Park
            </a>{" "}
            outside of Atlanta, Georgia, Coca-Cola&apos;s headquarters city.
            Follow the link and click-on &quot;Other Attractions&quot; within
            the Stone Mountain website to see a picture of how the Carillon looks
            today. Thanks to Elizabeth Klug for finding the website.
          </p>
          <p className={styles.body}>
            <Link href="/wisconsin05">The Wisconsin Pavilion Rotunda</Link> was
            relocated to Neillsville, Wisconsin, as a radio station and gift
            shop. It houses the studios of WCCN radio today.
          </p>
          <p className={styles.body}>
            &quot;Part of the Wisconsin Pavillion ended up at Camp Ramah in the
            Poconos. It was used as the eating area in the dinning hall. I think
            this part was what originally housed the big piece of cheese. I know
            for a fact this to be true as I worked at the camp in 1974. When I
            went to get the job for an interview, I had to go to the manager of
            the camp who lived in Queens right near the fair and he boasted of
            the connection between the camp and the Worlds Fair.&quot; -eMail
            from Michael, August 26, 2000
          </p>
          <p className={styles.body}>
            David Bruskin writes: &quot;Don&apos;t know if you knew this bit of
            trivia, but the non-teepee part of the [Wisconsin] Pavilion&apos;s
            structure was sold for $1, disassembled, transported to upstate
            Pennsylvania, and became the combined dining hall, kitchen, and
            recreation hall for Camp Ramah in the Poconos where it is in use to
            this day. If you track down Camp Ramah in the Poconos and/or Fork
            Mountain Pond (the camp&apos;s lake) in Pennsylvania on GoogleEarth,
            you can&apos;t miss it in a satellite photo; it&apos;s the largest
            structure in camp (look at the NW corner).
          </p>
          <p className={styles.body}>
            For over forty years now, nearly a quarter million campers,
            counselors, and staff have used these buildings to eat, pray, put on
            camp shows, and too many other activities to mention. At age nine, I
            watched the lunar landing on a single small B&amp;W TV (with crummy
            reception, of course) that had been placed on the stage for the
            entire camp to watch. Between being at the World&apos;s Fair and
            then recycled for extensive memory-rich usage at Camp, those wood
            walls and metal girders have hosted more happy people than most of
            the world&apos;s structures.&quot; -eMail from David, January 10,
            2009
          </p>
          <p className={styles.body}>
            The Triumph of Man exhibit of the Travelers Insurance Companies was{" "}
            <Link href="/travelers06">
              donated to the Center of Science and Industry (COSI) in Columbus,
              Ohio
            </Link>{" "}
            and was displayed there for many years. The present fate of the
            exhibit is unknown. Update: July 26,2000 An eMail received from the
            Center of Science and Industry in Columbus stated that &quot;The
            Triumph of Man,&quot; exhibited at COSI for nearly 30 years, was
            disposed of in the process of their move to a new building in
            November, 1999. The eMail stated that it &quot;did not fit in the
            new building&quot; and that it had succumbed to the ravages of time.
            A few small pieces were saved as mementoes and are on display in an
            area dedicated to the history of COSI. So it would appear almost
            certain that we have lost this legacy of the Fair.
          </p>
          <p className={styles.body}>
            <Link href="/sinclair10">Sinclair Dinoland Dinosaurs</Link>: The
            Tyrannosaurus Rex and the Brontosaurus now reside in Dinosaur Valley
            State Park in Glen Rose, TX. The Triceratops is at the Louisville
            Science Center in Louisville, KY. The Stegosaurus can be found at
            the entrance to Dinosaur National Monument in Harpers Corner, Utah.
            Corythosaurus is displayed at the Riverside Park &amp; Zoo in
            Independence, KS. The Ankylosaurus went to the Houston Museum of
            Natural Science in Houston, TX and the Struthiomimus went to the
            Milwaukee County Museum in Milwaukee, WI. The Trachodon is at the
            Brookfield Zoo in Chicago. The whereabouts of the Ornitholestes is
            unknown.
          </p>

          <Image
            src="/images/legacies02/legacy01.jpg"
            alt="Decorative World's Fair street light"
            width={141}
            height={214}
            className={`${styles.photo} ${styles.photoPlain} ${styles.floatLeft}`}
            unoptimized
          />
          <p className={styles.body}>
            The Decorative Street Lights are located at the Orange County Fair
            Speedway in Mechanicstown (Middletown) NY which is in Orange County
            about 65 miles northwest of New York City. I&apos;ve also seen a
            collection of them at a resort on the main highway through the
            Pocono Mountains in Pennsylvania. Lights have also been spotted at
            an amusement park on the New Hampshire/Massachusetts border (Canobie
            Lake Park).
          </p>

          <p className={styles.caption}>Canobie Lake lights courtesy of Doug Seed</p>
          <div className={styles.photoRow}>
            <Image
              src="/images/legacies02/legacy51.jpg"
              alt="Canobie Lake Park street light"
              width={300}
              height={259}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies02/legacy52.jpg"
              alt="Canobie Lake Park street light"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy08.jpg"
              alt="Decorative Street Lights at Orange County Fairgrounds"
              width={350}
              height={202}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Decorative Street Lights at the Orange County Fairgrounds. Photo
              courtesy Mary Ellen Coghlan, 1999.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy09.jpg"
              alt="Astral Fountain street lights at Orange County Fairgrounds"
              width={350}
              height={236}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Decorative Street Lights at the Orange County Fairgrounds. Two of
              the lights from the Astral Fountain area are located at the
              Fairgrounds in a park-like area.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy11.jpg"
              alt="World's Fair street lights at Penn Hills Resort"
              width={300}
              height={225}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              World&apos;s Fair Street Lights can be found in the Poconos at the
              Penn Hills Resort, Route 447 &amp; 191, Analomink, PA. Kathleen
              O&apos;Malley reports, &quot;The World&apos;s Fair lights are
              still all over the place, though pretty faded with age.&quot;
              January 23, 2003
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy55.jpg"
              alt="General Foods Arch"
              width={420}
              height={315}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.body}>
            <Link href="/genfoo05">General Foods Arches</Link> may be found at
            &quot;The Enchanted Forest&quot;/Water Safari in Old Forge, NY and
            at Rocky Point, RI, a defunct amusement park. Another visitor writes
            that a third GF Archway can be found at a small strip mall at Cherry
            Lane on Hempstead Turnpike in West Hempstead, Long Island, Nassau
            County, NY. Mark Lewis reports that at least one of the Arches
            survives at the Oklahoma City State Fair Park in addition to the
            street lamps relocated there from the Fair (August 16, 2006)
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy56.jpg"
              alt="General Foods Arch at Rocky Point Amusement Park"
              width={300}
              height={367}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The arch at Rocky Point Amusement Park in Rhode Island.
            </figcaption>
            <p className={styles.caption}>
              Photo courtesy Jimmy Walsh, May 9, 2006
            </p>
          </figure>

          <div className={styles.photoRow}>
            <Image
              src="/images/legacies02/legacy41.jpg"
              alt="General Foods Arch on Hempstead Turnpike"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies02/legacy42.jpg"
              alt="General Foods Arch on Hempstead Turnpike"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies02/legacy43.jpg"
              alt="General Foods Arch on Hempstead Turnpike"
              width={200}
              height={135}
              className={styles.photo}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            These photos show the Arches on the Hempstead Turnpike in Long
            Island at the Cherry Valley Center. On the top image, you can still
            see where the words &quot;Peace Through Understanding&quot; would
            have been bolted on. -eMail from Curtis Cates, August 26, 2000
          </p>
          <p className={styles.caption}>
            Photos courtesy Curtis Cates of BBQ Productions
          </p>

          <p className={styles.body}>
            The Austrian Pavilion was a part of the Cockaigne Ski Resort in
            Cherry Valley, NY, just east and just north of Jamestown. Update:
            January 25, 2011 This World&apos;s Fair legacy was lost to history
            on the night of January 24-25, 2011 when fire completely destroyed
            the former Austrian Pavilion at the Cockaigne Ski Resort.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy12.jpg"
              alt="Former Austrian Pavilion at Cockaigne Ski Resort brochure"
              width={350}
              height={263}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Former Austrian pavilion is shown in this brochure from
              Cockaigne&apos;s 1985-86 Ski Season
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies02/legacy60.jpg"
              alt="Fire destroys the former Austrian Pavilion"
              width={477}
              height={317}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Fire destroys the former Austrian Pavilion at the Cockaigne Ski
              Resort
              <br />
              January 25, 2011
            </figcaption>
            <p className={styles.source}>
              SOURCE: Jamestown <em>Post-Journal</em>, January 25, 2011
            </p>
          </figure>

          <p className={styles.body}>
            The AMF Monorail Cars were sent to Houston after the Fair with hopes
            that they might be put into operation at the newly completed Houston
            Intercontinental Airport. That did not happen.{" "}
            <Link href="/amfoverview">
              One had been sighted near Alvin, Texas. It&apos;s current status
              is unknown.
            </Link>
          </p>

          <div className={styles.inlinePair}>
            <Image
              src="/images/legacies02/tol51.jpg"
              alt="Uncle Ben Franklin figure from Tower of Light"
              width={150}
              height={240}
              className={`${styles.photo} ${styles.photoPlain}`}
              unoptimized
            />
            <Image
              src="/images/legacies02/chry50.jpg"
              alt="Carby Carburetor from Chrysler Show-Go-Round"
              width={200}
              height={155}
              className={`${styles.photo} ${styles.photoPlain}`}
              unoptimized
            />
          </div>
          <p className={styles.caption}>
            Tower of Light&apos;s &quot;Holiday with Light&quot; show figure
            &quot;Uncle Ben&quot; Franklin and a portion of &quot;Carby
            Carburetor&quot; from Chrysler&apos;s &quot;Show-Go-Round&quot;
          </p>
          <p className={styles.body}>
            Theater show are in the hands of private collector{" "}
            <a href="mailto:garyholmes@frontiernet.net?subject=UncleBen@nywf64.com">
              Gary Holmes
            </a>
            . (If you look closely, Carby is sitting atop one of the decorative
            Street Lights from the Fair. Gary has one of those too!)
          </p>
          <p className={styles.body}>Gary writes:</p>
          <Image
            src="/images/legacies02/tol50.jpg"
            alt="Uncle Ben Franklin figure"
            width={150}
            height={200}
            className={`${styles.photo} ${styles.photoPlain} ${styles.floatLeft}`}
            unoptimized
          />
          <p className={styles.body}>
            &quot;The Uncle Ben figure has a tale. When the Fair closed in
            &apos;65 I was a heartbroken kid who wrote to all the pavilions
            asking for a piece of my beloved Fair. I got dozens of rejections
            until the Tower of Light wrote me and said they would give me Uncle
            Ben! Although the men removing it broke a couple of fingers and his
            hat, I patched him back together, rewired him and won the Science
            Fair that year for my electricity exhibit, which included Ben. Ben
            has been my prize possession ever since.
          </p>
          <p className={styles.body}>
            Carby was acquired at the estate auction of the late Bill Baird, the
            puppeteer who designed the Show-Go-Round puppets [for Chrysler]. I
            had bid on the whole figure but lost, then went to the auction house
            to retrieve my deposit on the bid. Once there, the auctioneer said
            that while the whole figure had gone to someone else, they had found
            the head and arms of the &apos;64 Carby [a new head and arms were
            made for the Carby of the &apos;65 run] and sold them to me
            outright. Then he threw in the head of one of the &quot;chorus
            members&quot; of the show as well.&quot;
          </p>
          <p className={styles.body}>
            Gary also reports The Pavilion of Berlin was purchased for a college
            and never got reconstructed. It lay in a field near Woodbridge, NY.
            Mr. Holmes reports that he &quot;hasn&apos;t been near the field in
            decades, but I hear that it&apos;s pretty much deteriorated beyond
            use, unfortunately.&quot;
          </p>
          <p className={styles.body}>
            Another Holmes find! Chrysler Autofare puppets can be found at the{" "}
            <a
              href="https://www.macniderart.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Charles H. MacNider Art Museum
            </a>{" "}
            in Mason City, Iowa. The museum has the Monkey Wrenches and some of
            the singing Nuts and Bolts. The puppets were designed by famed
            puppet master Bil Baird for Chrysler&apos;s &quot;Show-Go-Round&quot;
            presentation. The museum has the largest holding of Baird puppets in
            the world.
          </p>
          <p className={styles.body}>
            Jim Weinberg reports that the Belgian Aerial Tower Ride was
            relocated to Dania, Florida where it served as an attraction at the
            Pirates World Amusement Park from 1966 to 1975. The park is long
            gone, replaced by a condominium development. The fate of the Aerial
            Tower Ride is unknown.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/legacies01"
        explicitPrevious
        overviewHref="/legaciesoverview"
        nextHref="/legacies03"
      />
    </>
  );
}
