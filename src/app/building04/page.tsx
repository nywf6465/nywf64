import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building04.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Goals and Aspirations — Building the Fair — nywf64.com",
  description:
    "Goals and Aspirations — theme, design, and organization of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Building the Fair — Goals and Aspirations.
 * Body from legacy building05.html (mapped to /building04 as Page 4 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building04Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Building the Fair">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/building/buildinghero.jpg"
            alt="Building the Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BuildingNavChrome />

      <article className={styles.article} aria-labelledby="building04-title">
        <header className={styles.titleBar}>
          <h1 id="building04-title" className={styles.titleBarMain}>
            Goals and Aspirations
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.themeBlock}>
            <Image
              src="/images/building04/building12.jpg"
              alt="Early logo"
              width={200}
              height={193}
              className={styles.logo}
              unoptimized
            />
            <div className={styles.themeCopy}>
              <p className={styles.sectionLabel}>T H E M E</p>
              <ul className={styles.themeList}>
                <li>
                  The inventions, discoveries, arts, skills and aspirations of
                  the 20th century
                </li>
                <li>
                  The opening of the Lincoln Center for the Performing Arts
                </li>
                <li>
                  The 300th anniversary of the founding of the City of New York
                </li>
                <li>
                  The completion of the Metropolitan Arterial Highway System
                </li>
                <li>
                  Entertainment for those who seek fun as well as culture
                </li>
                <li>
                  A legacy of permanent facilities both at Flushing Meadow and
                  at the Performing Arts Center at Lincoln Square; for the
                  enjoyment of future generations
                </li>
              </ul>
              <p className={styles.themeDate}>AUGUST 15, 1960</p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              The theme and design of the World&apos;s Fair 1964-1965 are here
              described, having been worked on by the Design committee, reviewed
              by our consultants and staff, recommended by the Executive
              Committee and approved by the Directors. It is hardly necessary
              to add that I believe this program is stimulating, novel,
              significant and adapted, as it must be, to the framework of
              Flushing Meadow. It has, we believe, all the elements of success.
            </p>
            <p>
              Beyond the dramatic presentation of exhibits of beauty and utility
              and the accomplishment of our main objectives, there will be
              permanent residuary physical benefits from this Fair to remind our
              children of a great event celebrating our three centuries of
              growth. These benefits will appear in the completed and unique
              Flushing Meadow Park at the very heart of the City, in new
              arteries and bridges, in transportation, in the Center of
              Performing Arts at Lincoln Square and in many other improvements.
            </p>
            <p>
              It may take two Fairs to finish Flushing Meadow Park, but at the
              end of this one we shall surely have it in the sense that any
              great city park is ever completed. Unlike most of its
              predecessors, this Fair will be much more than a memorable
              insubstantial pageant leaving not a rack behind it.
            </p>
          </div>

          <div className={styles.signOff}>
            <p>ROBERT MOSES</p>
            <p>President</p>
          </div>

          <p className={styles.sectionLabel}>DESIGN</p>
          <figure className={styles.figure} style={{ maxWidth: 480 }}>
            <Image
              src="/images/building04/building10.jpg"
              alt="Site Concept Artwork"
              width={480}
              height={261}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.sectionLabelMuted}>EXHIBIT AREAS</p>
          <figure className={styles.figure} style={{ maxWidth: 478 }}>
            <Image
              src="/images/building04/building13.jpg"
              alt='Site by "Areas" of Exhibits'
              width={478}
              height={250}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <p className={styles.source}>
            SOURCE:{" "}
            <em>
              Pre-Fair Planning Report, New York World&apos;s Fair 1964-1965
            </em>
            , excerpted
          </p>

          <p className={styles.sectionLabelMuted}>
            NEW YORK WORLD&apos;S FAIR CORPORATION
          </p>

          <div className={styles.body}>
            <p>
              The New York World&apos;s Fair Corporation was organized on August
              19, 1959 under the Membership Corporations Law of the State of New
              York as a non-stock, non-profit corporation. Its certificate of
              incorporation, as amended to date, empowers the Corporation to
              organize, construct, hold and operate a World&apos;s Fair in the
              City of New York for the exclusively educational purpose of
              educating the peoples of the world as to the interdependence of
              nations and the need for universal peace. In furtherance of its
              educational purposes, the Corporation is empowered, among other
              things, to arrange for educational exhibits at the Fair by
              governments, commercial and industrial organizations and other
              interested persons and groups; to solicit funds, borrow money, and
              issue and sell bonds, debentures and other obligations; and to
              purchase, lease, construct, improve and maintain grounds,
              buildings and other facilities necessary or incidental to the
              Fair. The certificate of incorporation expressly provides that no
              part of the net earnings of the Corporation shall inure to the
              benefit of any person who has contributed money or property to the
              Corporation or to any member or other individual, nor shall any
              director, member, officer or employee receive any pecuniary profit
              therefrom, except reasonable compensation for services rendered.
              Under the law, all net revenue derived from any source by the
              Corporation and remaining to its credit after the close of the
              Fair and after payment of all indebtedness and liabilities of the
              Corporation must be paid to the City for use in restoring and
              improving Flushing Meadow Park and for educational purposes.
            </p>
            <p>
              The 1960 session of the State Legislature enacted a law (Chapter
              428 of the Laws of 1960) empowering the City of New York to lease
              to the Corporation certain park land owned by the City in the
              Borough of Queens, comprising the proposed site of the Fair, and
              authorizing the Corporation to conduct on such land all activities
              pertaining to the Fair. Pursuant to such law, the City has leased
              to the Corporation for the Fair site portions of Flushing Meadow
              Park and Kissena Corridor Park in the Borough of Queens from June
              1, 1960 to January 1, 1966, with an option by the Corporation to
              extend the lease until such further date to which it may be
              determined by the Corporation the Fair is to be continued. The
              lease authorizes the Corporation to conduct the World&apos;s Fair
              on the premises; to issue concessions, grants, licenses, permits
              and sub-leases to exhibitors and concessionaires upon such terms
              and for such consideration as the Corporation may determine; to
              alter, remove or demolish existing structures (except for the
              present City of New York building and the existing State
              Amphitheater, both of which are excluded from the lease and will
              remain under the control of the City Commissioner of Parks); to
              place fill or excavate the leased premises; and to erect
              structures and improvements. Plans for permanent improvements must
              be approved by the City.
            </p>

            <h2 className={styles.subHeading}>Site</h2>
            <p>
              In October, 1959, President Eisenhower appointed a commission to
              determine the feasibility of holding a World&apos;s Fair in the
              United States and to recommend a site. The Commission recommended
              the City of New York and the recommendation was approved by the
              President. The site of the Fair is in Flushing Meadow Park in the
              Borough of Queens, which was also the site of the 1939-1940 New
              York World&apos;s Fair, and the adjoining Kissena Corridor Park.
              The Fair grounds will comprise an area of approximately 646 acres
              (including Meadow Lake) out of the total of 1,351 gross acres in
              Flushing Meadow and Kissena Corridor Parks. The site will be
              adjacent to the proposed 55,000-seat City stadium which will
              occupy an area of 16 acres north of the leased area, and the
              Corporation plans to negotiate with the City for the use of the
              stadium for special events requiring a large seating capacity when
              not otherwise occupied.
            </p>

            <h2 className={styles.subHeading}>Construction</h2>
            <p>
              The Corporation&apos;s construction program includes grading,
              paving, fencing, landscaping and lighting; filling in
              approximately nine acres of Meadow Lake along its westerly shore
              and improvements at the boat basin in Flushing Bay; construction
              of certain temporary structures, such as an administration
              building, police, fire, and maintenance facilities, bus terminal
              and stations, toll entrances, and pedestrian overpasses and
              bridges; design and erection of a monumental center symbolizing
              the Fair&apos;s theme; construction of parking fields; and
              construction, improvement and replacement of necessary drainage,
              water, sewer, gas and electric utilities. The Corporation will
              also be responsible for the cost of restoring the Fair site as a
              City park and recreation area upon the termination of the Fair.
            </p>
            <p>
              The Corporation will make use of certain of the utilities which
              were installed at Flushing Meadow Park for the 1939-40
              World&apos;s Fair. The existing facilities include approximately
              10 miles of sanitary sewers, 20 miles of storm sewers, 15 miles of
              water mains, 13 miles of gas mains, electric conduits for light,
              power and communication and sewage pumping stations. In the
              opinion of Construction Engineers, a substantial percentage of the
              existing underground facilities are in usable condition. The
              extent of repairs, replacements and addition to subsurface
              utilities will depend upon the development plan of the Fair and
              the location of the buildings and, except for temporary work, will
              be subject to the approval of the City Commissioner of Parks.
              Under the lease, the City will supply water to the Fair site
              without charge to the Corporation for this or for sewer rental.
              The Corporation is required by law to prepare a special code of
              laws dealing with health, sanitation and building, which may then
              be enacted by the City Council as and for a special code of laws
              governing the area leased to the Corporation.
            </p>
            <p>
              The Corporation will not be responsible for the construction of
              pavilions and buildings of exhibitors or restaurants and other
              concessions. The design and construction of these structures will
              be undertaken by the exhibitors and concessionaires, subject to
              the approval of the Corporation&apos;s Board of Design. Such
              structures will be temporary and will be demolished by exhibitors
              and concessionaires when the Fair site reverts to the city as a
              park and recreation area upon the termination of the Fair.
            </p>
            <p>
              The City, State and Federal governments are expected to
              participate actively in the Fair. The present City Building on the
              Fair grounds is available to the City, and State participation has
              been authorized by an act of the Legislature. Appropriate enabling
              legislation authorizing Federal participation is expected to be
              enacted by the Congress.
            </p>
            <p>
              Chapter 428 of the Laws of 1960 requires that the Corporation
              shall provide and pay for police and fire department forces
              adequate for the protection of the Fair grounds. The Corporation
              expects to contract for these services, as well as for refuse
              collection, landscaping and upkeep of the grounds. The Corporation
              is also required to carry at its own expense fire insurance on all
              permanent structures and general public liability insurance in
              limits of $250,000/$1,000,000 for personal injury or death and
              $50,000 for property damage. Under the lease, the Corporation
              shall pay all costs for the care, maintenance and protection of
              the leased property and of all buildings, roads, paths, planting,
              sanitation, drainage, light, power and other utility systems and
              other work thereon.
            </p>

            <h2 className={styles.subHeading}>Indemnity</h2>
            <p>
              Under the law, the Corporation is required to indemnify the City
              against all damage on account of the use of the leased premises
              for the purposes of the World&apos;s Fair.
            </p>

            <h2 className={styles.subHeading}>Restoration</h2>
            <p>
              Under the law and the Corporation&apos;s lease with the City, the
              Corporation has the responsibility, at its own expense but under
              the supervision of the City Department of Parks, to restore the
              Fair site to a City park and recreation area upon the termination
              of the Fair. The demolition of the temporary structures will be
              carried out in accordance with specifications to be furnished by
              the Department of Parks.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building03"
        explicitPrevious
        nextHref="/building05"
      />
    </>
  );
}
