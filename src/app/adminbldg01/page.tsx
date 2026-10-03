import type { Metadata } from "next";
import Image from "next/image";
import { AdminbldgNavChrome } from "@/components/AdminbldgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./adminbldg01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "At the Fair — Administration Building — nywf64.com",
  description:
    "The Administration Building at the 1964/1965 New York World’s Fair — headquarters of the Fair Corporation — from nywf64.com.",
};

const ROOM_SPACES = [
  "President Moses' Office",
  "President's Dining Room",
  "Directors' Room",
  "Conference Room",
  "Protocol Reception Room",
  "Protocol Offices",
  "Secretariat and General Office",
  "Public Relations",
  "Information Services",
  "Ticket Office",
  "Pass Office",
  "Accounting",
  "Payroll",
  "Insurance Department",
  "Construction Permit Office",
  "Map Room",
  "Model Room",
  "Plans Files",
  "Central Files",
  "Duplicating",
  "Mail Room",
  "Switchboard",
  "Cafeteria",
  "Kitchen",
  "Serving Area",
  "Meter-Room",
  "Boiler Room",
  "Maintenance Facilities",
  "Lobby",
] as const;

/**
 * Administration Building — At the Fair.
 * Body from legacy adminbldg02.html, remapped to /adminbldg01
 * (Introduction omitted — same pattern as fisher01 / rm01).
 *
 * Stack: hero → AdminbldgNavChrome → navy title banner → body → Nav2Bar
 */
export default function Adminbldg01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Administration Building">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/adminbldgoverview/hero-banner.jpg"
            alt="Administration Building at the 1964/1965 New York World’s Fair"
            width={1914}
            height={822}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AdminbldgNavChrome />

      <article className={styles.article} aria-labelledby="adminbldg01-title">
        <header className={styles.titleBar}>
          <h1 id="adminbldg01-title" className={styles.titleBarMain}>
            At the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={`${styles.figure} ${styles.figureWide}`}>
            <Image
              src="/images/adminbldg01/artists-rendering.jpg"
              alt="Artist's rendering of the World's Fair Administration Building"
              width={600}
              height={348}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <span className={styles.capTitle}>
                Artist&apos;s Rendering of the World&apos;s Fair Administration
                Building
              </span>
              <span className={styles.capSource}>
                SOURCE: World&apos;s Fair Progress Report No. 1
              </span>
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The Administration Building of the 1964-1965 New York World&apos;s
              Fair is easy to overlook because it wasn&apos;t really an
              attraction at all. It was the working headquarters of the New York
              World&apos;s Fair 1964-1965 Corporation - essentially the command
              center from which Robert Moses and the Fair organization planned
              and operated the exposition.
            </p>

            <p>
              It predates the opening of the Fair by several years. The
              Administration Building was one of the very first new structures
              erected for the Fair. Designed by the architectural firm of
              Skidmore, Owings &amp; Merrill, the structure was dedicated on
              January 9, 1961. Up until that time the Corporation operated out
              of temporary offices.
            </p>

            <p>
              In 1960 Robert Moses announced that a new headquarters would be
              constructed on the Fair site. The building was to be a
              prefabricated &quot;Butler-type&quot; building purchased for
              approximately $127,000, with James King &amp; Son contracted to
              erect, finish and equip it. The exposed steel frame and exterior
              cross-bracing were integral to the design and allowed it to be
              erected rapidly. The total project, including a cafeteria, was
              reported at approximately $600,000. The buiding was necessarilly
              built at a low cost as Moses was determined to spend as little as
              possible on temporary structures. The building was considered a
              temporary structure when it was built and was constructed under
              the special building provisions used for the Fair.
            </p>

            <p>
              Architecturally it was almost the opposite of the spectacular
              exhibition buildings going up around it. It was a relatively
              restrained, functional, low-rise modern building. It wasn&apos;t
              intended to compete with General Motors, Ford, IBM or the other
              exhibitors for public attention. It was an office building
              designed to get the Fair built and keep it running. The building
              was constructed in an &quot;H&quot; shape with offices running
              along the lateral sections and common areas, such as the
              cafeteria, occupied the middle section.
            </p>

            <p>
              The building stood away from the great concentration of visitor
              attractions, toward the northwestern portion of the Fair complex.
              The Fair Corporation didn&apos;t need prime exhibit frontage for
              its offices, and administrators needed relatively easy access to
              the outside world without fighting their way through visitor
              areas.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.figureMap}`}>
            <Image
              src="/images/adminbldg01/location-map.jpg"
              alt="Location map of the Administration Building on the Fairgrounds"
              width={331}
              height={400}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              Once completed, the building became the administrative nerve
              center for the entire operation. Moses, as president of the New
              York World&apos;s Fair Corporation, worked there along with the
              enormous organization assembled to design, build, promote and
              operate the Fair. Departments dealing with engineering,
              exhibitors, concessions, finance, publicity, ticketing and
              countless operational matters were based there.
            </p>

            <p>
              A surprising number of important events associated with the Fair
              occurred there before visitors ever entered the grounds in 1964.
              This was where the Fair Corporation dealt with prospective
              exhibitors and concessionaires, architects, engineers and
              government representatives. Models, drawings, contracts and
              construction issues passed through the organization headquartered
              there. In a sense, while the Unisphere became the Fair&apos;s
              symbolic center, the Administration Building was the
              organizational center.
            </p>

            <p>
              Among the spaces identified on the blueprint layout of the
              Administration Building (below) are:
            </p>
          </div>

          <ol className={styles.roomList}>
            {ROOM_SPACES.map((space) => (
              <li key={space}>{space}</li>
            ))}
          </ol>

          <figure className={`${styles.figure} ${styles.figureBlueprint}`}>
            <Image
              src="/images/adminbldg01/blueprint-annotated.jpg"
              alt="Annotated blueprint layout of the Administration Building"
              width={900}
              height={569}
              className={`${styles.photo} ${styles.photoNoBorder}`}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              Calling it the Fair&apos;s nerve center really isn&apos;t and
              exageration. Robert Moses had his own little executive complex.
              Moses&apos; office is marked simply: PRESIDENT MOSES. Immediately
              around it were his secretary and administrative personnel. Nearby
              were a conference room, President&apos;s Dining Room and
              Directors&apos; Room. The physical layout provided him with the
              facilities to conduct meetings, entertain people, confer with
              directors and adminster the Fair from the site. The Administration
              Building wasn&apos;t analogous merely to the adminstrative office
              of an amusement park. It was closer to a small municipal
              government headquarters for a temporary city receiving millions of
              visitors.
            </p>
          </div>

          <figure className={`${styles.figure} ${styles.figureEntrance}`}>
            <Image
              src="/images/adminbldg01/admin-building-at-fair.jpg"
              alt="The entrance to the Administration Building"
              width={400}
              height={230}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <span className={styles.capTitle}>
                The entrance to the Administration Building
              </span>
              <span className={styles.capSource}>
                SOURCE: Booklet:{" "}
                <em>The Saga of Flushing Meadows</em>
              </span>
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              When the Fair Corporation&apos;s involvement with the site ended
              and the property reverted to city use, the building became part of
              the New York City Parks operation at Flushing Meadows-Corona Park
              and came to be known as the Olmsted Center/Olmsted Building
              serving as Park Department offices.
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/adminbldgoverview"
        overviewHref="/adminbldgoverview"
        nextHref="/adminbldg02"
      />
    </>
  );
}
