import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegaciesNavChrome } from "@/components/LegaciesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./legacies03.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Legacies Locations II — The Fair that Survived — nywf64.com",
  description:
    "Legacies Locations II — more surviving buildings and artifacts from the 1964/1965 New York World’s Fair found across the country on nywf64.com.",
};

/**
 * The Fair that Survived — Legacies Locations II.
 * Body from legacy legacies04.html (Page 3 after overview).
 *
 * Stack: legacieshero → LegaciesNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Legacies03Page() {
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

      <article className={styles.article} aria-labelledby="legacies03-title">
        <header className={styles.titleBar}>
          <h1 id="legacies03-title" className={styles.titleBarMain}>
            Legacy Locations
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.contactHead}>
            Do you know of a 1964/1965 World&apos;s Fair Legacy?
          </p>
          <p className={styles.body}>
            If you know of a Legacy of the 1964/1965 World&apos;s Fair that
            isn&apos;t listed on these pages, or if you have additional
            information on listings that you&apos;d like to share, please
            contact{" "}
            <a href="mailto:nywf6465@gmail.com?subject=Another%20Legacy%20to%20Report:">
              Bill Young
            </a>{" "}
            at nywf6465@gmail.com. Thank you!
          </p>

          <p className={styles.body}>
            Dave Kelly reports &quot;If you are looking for another remnant from
            the fair, look in Groton, Connecticut. St. Mary&apos;s Catholic
            Church was the rotunda at the Vatican Pavilion.&quot; - April 23,
            2000
          </p>
          <p className={styles.body}>
            Curtis Cates of BBQ Productions sent along these photos of remnants
            of the Vatican Pavilion - May 17, 2000
          </p>

          <div className={styles.photoRow}>
            <Image
              src="/images/legacies03/legacy03.jpg"
              alt="Vatican Pavilion Starburst at St. Mary's Catholic Church"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies03/legacy04.jpg"
              alt="Interior view of stained glass"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
          </div>
          <div className={styles.pairCaptions}>
            <p>
              Vatican Pavilion Starburst, St. Mary&apos;s Catholic Church,
              Groton
            </p>
            <p>Interior view of Stained Glass</p>
          </div>

          <p className={styles.body}>
            Curtis also reports that the bas relief sculpture displayed on the
            exterior entrance wall of the Vatican Pavilion can be found in
            Kennebunk, Maine (photos courtesy Leigh Block)
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy06.jpg"
              alt="Vatican Pavilion bas relief sculpture in Kennebunk, Maine"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.body}>
            The accompanying plaque states: &quot;This magnificent sculpture,
            designed and executed by Vytautask Jonyans, adorned the facade of
            the Vatican Pavilion at the World&apos;s Fair in New York City
            (1964-1965). It depicts the church militant, the church suffering,
            and the church triumphant, that is, the church here on Earth, in
            Purgatory and Heaven. In 1967 the Franciscans in Kennebunk, Me
            dedicated this historical work of art to the silent church in
            Lithuania.&quot;
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy07.jpg"
              alt="Plaque for Vatican Pavilion sculpture in Kennebunk"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            <a
              href="http://www.bbqproductions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BBQ Productions&apos; website
            </a>{" "}
            lists a link to the Mankato State University Website where they
            claim to have a World&apos;s Fair Fountain. It appears that it
            might be a re-arrangement of the Fountains of the Fair. Perhaps a
            visitor can verify what fountain it is. Elizabeth Klug - April 26,
            2000
          </p>
          <p className={styles.body}>
            Visitor Dot Condon writes &quot;I don&apos;t know if it&apos;s still
            there, but the front of the Ireland Pavilion was used for the front
            of a restaurant in NYC. I think it was on East 57th Street, near 3rd
            Avenue. It&apos;s been a few years since I was around there.&quot; -
            April 25, 2000
          </p>
          <p className={styles.body}>
            Eugene Brennan reports that &quot;another exhibit out there that
            exists fully intact is the replica of the{" "}
            <Link href="/bountyoverview">H.M.S. Bounty</Link> which was built by
            MGM in 1960 for its film of the same name. This ship was anchored in
            Flushing Bay area near the WF Marina and was listed and described in
            the 1964 official guidebook as a Fair attraction in the &apos;Flushing
            Bay Area&apos; along with the Marina and Shea Stadium. I believe the
            Bounty only exhibited for the &apos;64 season and had sailed on by
            the time &apos;65 rolled around. It had several owners through the
            years including Ted Turner. Currently it is anchored and permanently
            based in St. Petersburg, FL.&quot; - May 1, 2000
          </p>
          <p className={styles.body}>
            Mr. Brennan also had this interesting observation on an unusual Fair
            Legacy: &quot;Here&apos;s a little known phenomena; about a year ago
            I visited Flushing Meadow Park in the Fall. At places the grass which
            is located where the &apos;64-&apos;65 buildings were located was
            actually a slightly different color than topsoil where there were no
            pavilions. In some places you could make out the building lines,
            particularly around the Unisphere/NY State Pavilion area. Either the
            City replanted those sites with a different type of grass or the
            buried foundations are affecting the topsoil overhead. In addition,
            the structural foundation of the Trylon buried after the &apos;39
            fair is &apos;rising up&apos; next to the Unisphere due to the
            settling of the landfill on which the Park is laid out. With a little
            imagination it almost looked like ghost buildings of the Fairs
            reasserting themselves! I have not been there since so I can&apos;t
            say this is still the case. Only a true NYWF fanatic would appreciate
            the beauty and irony of this!&quot; - May 1, 2000
          </p>

          <p className={styles.body}>
            Two display cars from the Long Island Railroad Display are in the
            process of being restored at Mitchell Field in Uniondale, NY. as
            reported by Wayne Beers. The restoration group&apos;s web page
            reports: &quot;The front end of an ALCo. FA-1 cab unit locomotive ...
            and the tail end of an observation car were used to attract visitors
            to what the railroad had to offer. After the fair ended, the displays
            were donated to Camp Tanglewood, a day camp in Lynbrook, NY. They sat
            there until the camp closed it&apos;s doors.&quot;
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy29.jpg"
              alt="Long Island Railroad display cars - cab and observation car"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Front end of cab / Tail end of observation car
            </figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy28.jpg"
              alt="Long Island Railroad restoration group"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Restoration group poses.
            </figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy27.jpg"
              alt="Long Island Railroad interior restoration"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Interior restoration. Anyone with pictures of original interior,
              please contact Wayne Beers.
            </figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy26.jpg"
              alt="Long Island Railroad restoration shot"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>Restoration shot.</figcaption>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy25.jpg"
              alt="Long Island Railroad on-going restoration"
              width={300}
              height={203}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              On-going restoration.
            </figcaption>
          </figure>
          <p className={styles.caption}>
            Photos courtesy Curtis Cates of BBQ Productions
          </p>

          <p className={styles.body}>
            The Christian Science Pavilion was shipped via the Panama Canal to
            Poway, California where it became a Christian Science church. Sadly,
            the church/pavilion was demolished in 2006 to make way for a new
            sanctuary. The church in Poway tried to sell the pavilion for $1 to
            anyone who would remove it from the Poway site. They were unable to
            find any takers for the offer and the structure was demolished.
            World&apos;s Fair enthusiast Gary Holmes salvaged one of the
            skylights from the pavilion and it is awaiting restoration at his
            home.
          </p>
          <p className={styles.body}>
            Mr. Yowell posted the following on the Message Board: &quot;For those
            interested in what happened to Greyhound&apos;s Glide-A-Rides after
            the Fair, page 96 of the October 8, 1965 Time Magazine provides some
            clues. - May 7, 2000
          </p>
          <p className={styles.body}>
            To read a reprint of this October 8, 1965 Time Magazine article,
            entitled &quot;BARGAINS - The Great Souvenir Sale&quot;, see{" "}
            <Link href="/legacies05">Page 2</Link>.
          </p>
          <p className={styles.body}>
            Marty Biniasz of Buffalo NY sent the following: &quot;As for the
            Greyhound Glide-A-Ride vehicles, many of them have been operating on
            the grounds of the Erie County Fair in Buffalo. In addition to the
            64/65 trains, the EC Fair also have vehicles from the 67 Fair. Until
            a recent paint job, you could see the Glide-A-Ride logos. The trains
            are in good condition but the fiberglass is starting to give out
            after many years of use. They are a little ruff around the
            edges.&quot; - June 5, 2000
          </p>
          <p className={styles.body}>
            Several visitors have taken me to task for not including the Disney
            exhibits in the list of Legacies. My apologies, as they are wonderful
            legacies that we all can still enjoy today! Dean Lundstrom writes:
            &quot;With regards to your Legacies, I would like to point out some
            very obvious ones which I don&apos;t think too many people nowadays
            connect to the &apos;64 fair. Four of the top five shows were produced
            by Walt Disney and, as I&apos;m sure you know, all of them can be
            seen in the Disney parks. They have changed a bit but are more or
            less true to their original content. These include: &quot;Great
            Moments with Mr. Lincoln&quot; from the Illinois pavilion who can be
            seen at the Main Street Opera House in Disneyland; &quot;It&apos;s A
            Small World&quot; from the Pepsi Cola pavilion which is at most of
            the parks but the version at Disneyland is probably closest to the
            original with the fiberglass flume for the boats to travel in; an
            updated &quot;Carousel of Progress&quot; from the General Electric
            pavilion that can be seen at Disney World&apos;s Magic Kingdom with
            the original theme song restored to the show; and the Ford pavilion
            dinosaurs that now reside in a primeval diorama alongside the
            Disneyland Railroad.&quot;
          </p>
          <p className={styles.body}>
            An article appeared in late &apos;65 or early &apos;66 in the New
            York Times entitled &quot;World&apos;s Fair Pavilion Will Get New
            Life as Office Building&quot; The article states: The India Pavilion
            of the 1964-65 World&apos;s Fair will rise again. The pavilion, now
            lying in heaps in a lot in Lyndhurst, NJ will become an office
            building in nearby Clifton. Helm enterprises of Passaic, an
            organization headed by Howard Greef, has purchased the pavilion and
            plans to reconstruct it on a two-acre site facing the Garden State
            Parkway ... When the fair closed, the building was sold to a
            Lyndhurst branch of a Swiss chemicals company, which has now sold it
            to Helm. The pavilion had been carefully dismantled and all its
            trusses, beams and panels numbered so that the building could be
            re-assembled on another site ... Helm plans to double its size. Glass
            will be used to stretch the facade and to enclose an area of 40,000
            square feet, an increase of 20,000 square feet. The rotunda, which
            originally housed a restaurant, will look as it did at the fair, but
            an advertising agency -- Martin-Sands -- will occupy it.&quot;
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy10.jpg"
              alt="Artist's sketch of India Pavilion reassembly in Clifton NJ"
              width={300}
              height={214}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Artist&apos;s sketch of how the re-assembled pavilion would look on
              its Clifton NJ site. Smaller inset shows the pavilion on its site
              at the Fair.
            </figcaption>
          </figure>
          <p className={styles.body}>
            Does anyone know if the pavilion was ever reconstructed in Clifton?
            Does such a structure exist along the Garden State Parkway. Please
            send eMail if you can shed light on this World&apos;s Fair mystery.
          </p>

          <p className={styles.body}>
            Mike Kraus passed along this photo of the Lithuanian Wayside Shrine,
            displayed in the Garden of Meditation at the Fair. NYWF &apos;64
            Collector John Riccardelli believes it was restored and placed in
            Central Park. Mike says &quot;If this can be confirmed, then we have
            another Legacy item!&quot; - July 9, 2000
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy30.jpg"
              alt="Lithuanian Wayside Shrine"
              width={180}
              height={270}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            Bruce Mentone forwarded this review he found in the Queens Tribune
            of La Motta&apos;s Waterside Restaurant: 10 Matinecock Ave., Port
            Washington:
          </p>
          <p className={styles.body}>
            &quot;As for their their &apos;red and white umbrella,&apos; it was
            built by Owens-Corning Fiberglass Corporation as part of the Sinclair
            Oil company&apos;s exhibition at the 1964/65 New York World&apos;s
            Fair. Their history on the back of each menu explains &apos;Sinclair
            was awarded the contract to supply fuel to the fair&apos;s 825-boat
            state-of-the-art marina in Flushing Bay, and they placed the umbrella
            over the floating fuel dock at the front of the marina. The umbrella
            became the main attraction of the World&apos;s Fair Marina and the
            focus of thousands of photographs.&apos;
          </p>
          <p className={styles.body}>
            The dock was abandoned after the fair, and in 1968 Mario S. LaMotta
            joined with Sinclair Oil to renovate the dock and tow it to Manhasset
            Bay where it sat at the head of the Bay Marina and was used once
            again for refueling. When the Marina began construction of
            LaMotta&apos;s waterside restaurant in 1993, the historic
            &apos;umbrella&apos; was built in to the restaurant&apos;s
            construction and now serves as an easy landmark from the coast on the
            water as you near the restaurant as well as the protection for a
            different kind of world-class fare.
          </p>
          <p className={styles.body}>
            — Tamara Hartman, Queens Tribune&quot;
          </p>

          <p className={styles.body}>
            Robert Santos Jr. writes: &quot;Are you aware that the SkyRide that
            was at the Fair exists and is still used today at Six Flags Great
            Adventure here in New Jersey? I noticed a commerative plaque on one
            of the steel uprights that documented its history while at the park
            recently. The plaque was kind of hidden and was the only reference to
            the ride&apos;s history.&quot; - October 16, 2000
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy54.jpg"
              alt="Commemorative plaque at Six Flags Great Adventure"
              width={243}
              height={335}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Commemorative plaque at Six Flags - photo courtesy of Charles Aybar
            </figcaption>
          </figure>

          <p className={styles.body}>
            &quot;I worked at the Mormon Pavilion in both &apos;64 &amp;
            &apos;65. It was the first exhibit on your left as you came in the
            main gate to the Fair. In front was a replica of the east 3 spires of
            the Salt Lake City Mormon temple. After the Fair the precast stone
            slabs that made up the walls of the main building were transported to
            Plainview, LI, NY and there became the walls of the new Plainview
            Chapel of the Church of Jesus Christ of Latter Day Saints. The chapel
            was recently refurbished and still looks good as new.&quot; Phil
            Terrill, Bountiful, Utah, March 15, 2001.
          </p>
          <p className={styles.body}>
            &quot;At the entrance to the parking lot of the town pool in Garden
            City, NY (Long Island) is a sculpture of a dolphin (porpoise) which
            was originally from the Florida Pavilion.&quot; Donald B. O&apos;Neil,
            May 31, 2001.
          </p>
          <p className={styles.body}>
            &quot;I&apos;m forwarding a colored photo of the sculpture that was
            on the ground level (west side) of the United States Pavilion. It is
            now located at the Farleigh Dickinson College in Teaneck, NJ It has
            markings on it that it was commissioned for the 1964 New York
            World&apos;s Fair&quot; Bob Tremper, February 10, 2002.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy50.jpg"
              alt="United States Pavilion sculpture at Fairleigh Dickinson"
              width={300}
              height={212}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            Mr. John Brennan was involved with the demoliton of the Japanese
            Pavilion and prepared the stones of the beautiful Japanese Wall to be
            transported to Manhattanville College in Purchase, NY. Mr. Brennan
            writes:
          </p>
          <p className={styles.body}>
            The Japanese Pavilion at the Fair was a square in its outline. The
            exterior walls were made of concrete. These walls sloped inward and
            were about 20 feet high. It was as if it were to become a pyramid,
            but it was a pyramid that was cut off when it reached some 20 feet in
            height. When these concrete walls were done, the plans called for a
            facade, made of lava stones, to be laid up on the outside faces of
            these sloping walls.These stones were dark in color, almost a black.
            They varied in size but had a varying thickness of about eight
            inches, as I remember them. They each could be carried by one
            man.They were to be set about one inch from the outside faces of the
            walls. The one inch space between the walls and the stones was to be
            filled with mortar. This method of building the facing material onto
            an existing wall was a technique well known in Japan but not so in
            the United States. It required, after the stones were set in place,
            that the joints between them be stuffed with rags to prevent leakage
            of the mortar. The high strength mortar (5000 P.S.I., I believe) was
            then mixed and carefully ladled into the space behind the stones. The
            rags were left iin place until the mortar had become solid. This
            procedure was carried out by workmen who had been brought in from
            Japan for the purpose. In order for them to work, it was necessary to
            get the approval of the Bricklayers&apos; union in New York, which
            had jurisdiction of the work there. A deal was struck and the Japanese
            workers were approved. I do not know the details of that deal. When
            the rags were removed from between the joints, the visible parts of
            the lava stones were not stained and the mortar itself was at least
            one inch inwards of the surface of the stones. There were also
            carvings made in the lava stones. These carvings extended over many
            stones and each one had a special meaning. I am not sure what those
            meanings were, but they would have been significant to a
            knowledgeable person I think, but am not sure, that these carvings
            were made after the stones had been set. For example, there was a
            carving of the sun in its course through the sky. This carving was 20
            or more feet in length. It would, I think, have been impossible to
            make this meaningful carving before the stones were laid up.
          </p>
          <p className={styles.body}>
            Another part of the gift to Manhattanville College was the stones and
            the sculpture that the designers of the pavillion had used in the
            decorative gardens outside the building itself. The placement of
            these garden stones and sculptures was a consideration of great
            importance. The sculptures in this portion of the gift were made by a
            very well-known Japanese sculptor by the name of Noguchi.
          </p>
          <p className={styles.body}>
            When the time came for me to deliver on my promise to transport both
            the lava stones and the garden stones and sculptures, we had to think
            of the best way we could preserve the stones without damaging them
            too much in the process. The garden stones and sculptures did not
            present a problem since they were not fixed in place and could be
            readily gotten at. The lava stones, however, were another matter. They
            were affixed to the building with 5000 P.S.I. mortar. I probably do
            not remember, nor will I try to tell, all the alternative ways we
            considered, but I do remember what we did. First we painted on each
            stone a serial number which would identify where it had been set in
            the wall. Then we hired a photographer who was to take pictures of
            each outdside face of the wall. These photographs were to show the
            numbers on each stone and would preserve a record of the carving in
            the stones. We then hired a crane with a wrecking ball. The crane
            would swing the ball and hit the inside of the wall and thereby
            &quot;pop&quot; the lava stones off the outside face. This worked well
            enough and the stones along with the photographs were delivered to
            the college. Where exactly the stones were located on the campus I do
            not know. The photographs, no doubt, were given to the administration
            up there. Submitted May 8, 2002.
          </p>

          <p className={styles.body}>
            Jim Crouch, Woodward, Oklahoma writes: &quot;These photo&apos;s are
            of what I believe to be the street lamps from 64-65 NYWF that are now
            in the Oklahoma City State Fair Park. The entire Fair Grounds used to
            be swarmed with these lamps. What remains today you pretty much have
            pics of. They are in two locations. Approx 26 of them (two rows of
            approx 13) are in front of the &quot;Travel And Transportation
            building&quot; (where you see the B-52) and about 12 in one row in
            front of &quot;Made In Oklahoma Building&quot; (where you see a row
            of pointed roofs). I should have counted them to be exact. But that
            is darn close. These are slowly being replaced with newer lamps!&quot;
            Jim also reports that a park bench from the Oklahoma pavilion is
            located in Woodward, OK. - August 6, 2002
          </p>
          <div className={styles.photoRow}>
            <Image
              src="/images/legacies03/legacy49.jpg"
              alt="World's Fair street lamps at Oklahoma City State Fair Park"
              width={300}
              height={225}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies03/legacy48.jpg"
              alt="World's Fair street lamps at Oklahoma City State Fair Park"
              width={300}
              height={225}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/legacies03/legacy47.jpg"
              alt="World's Fair street lamps at Oklahoma City State Fair Park"
              width={300}
              height={225}
              className={styles.photo}
              unoptimized
            />
          </div>

          <p className={styles.body}>
            Brad Rim reports the discovery of still more World&apos;s Fair street
            lights at the Hotel Villa Vosilla at Hunter Mountain in Upstate New
            York - December, 2002
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/legacy53.jpg"
              alt="World's Fair street lights at Hotel Villa Vosilla"
              width={350}
              height={262}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.body}>
            &quot;I did not see mentioned on your site the liturgical banners
            from the Vatican Pavilion. For many years, they were hung in
            Rockefeller Memorial Chapel and Harper Library at the University of
            Chicago. Because of deterioration, the banners were taken down for
            archival conservation. Perhaps someone at the University has more
            information or pictures.&quot; John Allread, December 13, 2002
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/pavami48.jpg"
              alt="Celestial Centerpiece from Pavilion of American Interiors"
              width={250}
              height={184}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.body}>
            Kevin W. Tucker reports that the Celestial Centerpiece, created for
            and displayed at International Silver&apos;s exhibit in the{" "}
            <Link href="/pavamioverview">Pavilion of American Interiors</Link>{" "}
            has been acquired by the Dallas Museum of Art. Mr. Tucker, The Margot
            B. Perot Curator of Decorative Arts and Design of the Dallas Museum
            of Art said, &quot;The Celestial Centerpiece is an exceptional
            realization of the futuristic visions of the Space Age and
            unquestionably stands as one of the most significant American silver
            objects produced in the latter half of the 20th century.&quot; August
            2, 2005
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/legacies03/lonislrr01.jpg"
              alt="Restored Long Island Railroad miniature train"
              width={460}
              height={345}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              (Photo courtesy of Greg Gottlieb)
            </figcaption>
          </figure>
          <p className={styles.body}>
            Ray Liotti reports that the{" "}
            <Link href="/lonislrroverview">miniature train</Link> of the Long
            Island Railroad Exhibit has been restored and is in operation at the
            Railroad Museum of Long Island in Riverhead, New York. September 1,
            2004
          </p>
          <p className={styles.body}>
            &quot;The probability machine used in the IBM pavilion was part of an
            exhibit of The Pacific Science Center in Seattle, Washington. It was
            used in conjunction with a permanent mathamatics exhibit sponsored by
            IBM. I remember seeing it during most of my visits to the Science
            Center during the 1970s and 1980s. It must have ended up in the
            Science Centers hands shortly after the Fair was over. It was visible
            from the road outside the Science Center as well since it was very
            tall. During a major renovation to the Science Center in 1990 the
            exhibit was converted to a new group visitor entrance and the
            probability machine went along with it. It&apos;s possible the
            Science Center has it in storage to use in future exhibits.&quot; Tim
            Babcock, March 1, 2007.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/legacies02"
        explicitPrevious
        overviewHref="/legaciesoverview"
        nextHref="/legacies04"
      />
    </>
  );
}
