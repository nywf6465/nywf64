import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Preparation of the Site — Building the Fair — nywf64.com",
  description:
    "Preparation of the Site for the World’s Fair 1964-1965 — Building the Fair on nywf64.com.",
};

/**
 * Building the Fair — Preparation of the Site.
 * Body from legacy building03.html (mapped to /building02 as Page 2 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Building02Page() {
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

      <article className={styles.article} aria-labelledby="building02-title">
        <header className={styles.titleBar}>
          <h1 id="building02-title" className={styles.titleBarMain}>
            Preparation of the Site
          </h1>
        </header>

        <div className={styles.articleInner}>
          <header className={styles.docTitle}>
            <p className={styles.docTitleMain}>PREPARATION OF THE SITE</p>
            <p className={styles.docTitleMid}>FOR THE</p>
            <p className={styles.docTitleMain}>WORLD&apos;S FAIR 1964-1965</p>
          </header>

          <div className={styles.letterBox}>
            <p className={styles.letterDate}>April 18, 1960</p>
            <p className={styles.letterAddr}>Hon. Robert F. Wagner</p>
            <p className={styles.letterAddr}>Mayor of the City of New York</p>
            <p className={styles.letterAddr}>City Hall</p>
            <p className={styles.letterAddr}>New York 7, N. Y.</p>
            <p className={styles.letterSalute}>Dear Sir:</p>
            <p>
              On October 30, 1959 I requested that the City provide a sufficient
              sum for preparation of a preliminary consultants&apos; report on
              the development of Flushing Meadow Park as a site for the
              World&apos;s Fair of 1964-1965. Funds for this purpose were voted
              on December 3, 1959 to engage the services of Clarke and Rapuano,
              Andrews &amp; Clark, and Richard C. Guthridge.
            </p>
            <p>
              Conferences were held with various federal, state and city
              agencies involved and the report which follows represents
              conclusions more or less unanimously agreed to. I believe this
              report will serve admirably as a basis for the groundwork for the
              Fair and for the park restoration which will follow.
            </p>
            <p>
              To sum up, it is the object of this report to establish, or rather
              re-establish, the framework for the new Fair. There will be plenty
              of room within this framework for new concepts, forms and
              functions, but the essential character of the Meadow as modified
              and molded for the Fair of 1939-1940 must still be a controlling
              factor in the building of the Fair of 1964-1965.
            </p>
            <p className={styles.letterClose}>Cordially,</p>
            <Image
              src="/images/building02/building04.gif"
              alt="Robert Moses signature"
              width={150}
              height={39}
              className={styles.signature}
              unoptimized
            />
            <p className={styles.letterRole}>Commissioner of Parks</p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building02/building03.jpg"
              alt="Flushing Meadow aerial - 1960"
              width={400}
              height={591}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Flushing Meadow Park - April 18, 1960
            </figcaption>
          </figure>

          <div className={styles.letterBox}>
            <p className={styles.letterDate}>April 18, 1960</p>
            <p className={styles.letterAddr}>Hon. Robert F. Wagner</p>
            <p className={styles.letterAddr}>Mayor of the City of New York</p>
            <p className={styles.letterAddr}>City Hall</p>
            <p className={styles.letterAddr}>New York 7, N. Y.</p>
            <p className={styles.letterSalute}>Dear Sir:</p>
            <p>
              The Board of Estimate approved an agreement between the City of
              New York, through the Commissioner of Parks, with the undersigned
              on December 3, 1959 for preparation of a study and report on the
              use of Flushing Meadow Park in the Borough of Queens as the site
              for the World&apos;s Fair.
            </p>
            <p>
              We have prepared and delivered to you 2,000 copies of the required
              printed report.
            </p>
            <p>
              Our findings and recommendations, set forth in detail in a
              supplementary report submitted separately, are summarized in this
              report.
            </p>
            <p>
              The wholehearted co-operation of the City Construction
              Coordinator&apos;s office, the City Parks Department and many
              other City agencies has been invaluable in the preparation of this
              report
            </p>
            <p className={styles.letterClose}>Respectfully submitted,</p>
            <p className={styles.letterFirm}>CLARKE AND RAPUANO</p>
            <p className={styles.letterFirm}>ANDREWS &amp; CLARK</p>
            <p className={styles.letterFirm}>RICHARD C. GUTHRIDGE</p>
          </div>

          <section className={styles.section} aria-labelledby="lease-lines">
            <h2 id="lease-lines" className={styles.sectionHeading}>
              Lease Lines
            </h2>
            <p>
              [The following] portions of Flushing Meadow Park and Kissena
              Corridor Park [are] recommended for lease to the Fair Corporation
              in accordance with the act authorizing the lease. With minor
              exception, these portions include Flushing Meadow Park from
              Roosevelt Avenue to 69th Road and Kissena Corridor Park between
              Lawrence and Main Streets, comprising an area of 646 acres.
              Deducting Meadow Lake, the remaining net usable area totals 565
              acres, an area we deem to be adequate for the Fair. This net area
              includes 9 acres of new land made by filling a limited section of
              Meadow Lake along its westerly shore. This filling should be at
              the expense of the Fair Corporation.
            </p>
            <p>
              It is recommended that all present leases, affecting lands now
              temporarily assigned to other City agencies within this area to be
              leased to the Fair Corporation, be terminated by the end of 1962.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="parking">
            <h2 id="parking" className={styles.sectionHeading}>
              Parking
            </h2>
            <p>
              The estimated annual attendance at the 1964-1965 World&apos;s Fair
              is 40,000,000. Guided by 1939-1940 World&apos;s Fair experience,
              and in consideration of the increase in car registration and the
              improved highway network which will lead to the Fair in 1964, we
              recommend the construction of seven automobile parking fields with
              a capacity of 20,000 cars.
            </p>
            <p>
              Kissena Corridor Park is separated from the main area of the Fair
              by two barriers, Lawrence Street and the proposed Van Wyck
              Expressway Extension, which will prevent its satisfactory
              integration for exhibition uses within the principal portion of
              the Fair grounds. Therefore, the Kissena Corridor area is suitable
              only for automobile parking.
            </p>
            <p>
              It is recommended that the parking fields be constructed,
              maintained and operated by the Fair Corporation.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="existing">
            <h2 id="existing" className={styles.sectionHeading}>
              Existing Conditions
            </h2>
            <p>
              We have checked the utility lines to determine their condition and
              found that a large percentage of these lines are usable although
              they are in need of repairs. The extent of replacements or
              additions to these lines depends upon the development of the plan
              of the Fair and hence cannot be determined at this time. We
              recommend that all replacements and additions be built by the Fair
              Corporation at its expense and that those facilities, which the
              Department of Parks determines necessary for the restoration and
              future development of the Park, be of permanent construction.
            </p>
            <p>
              We recommend that the Fair Corporation be permitted to use the
              present Boat House on the easterly shore of Meadow Lake. However,
              the City Building should remain under the control of the
              Commissioner of Parks, and should house the official city exhibit.
              The State Amphitheater should house the State pageant if the State
              wishes to use the structure in this way or should be available to
              the Fair Corporation for some theatrical concession. The
              Corporation may also use the existing piles and foundations of
              former structures if further investigation shows them to be safe
              for the uses intended. We recommend also that the Corporation may
              alter or eliminate the existing park improvements and the pattern
              of park roads and paths with the understanding, however, that they
              be reconstructed as shown on the plan of the restored park.
            </p>
            <p>
              The existing large trees planted for the 1939-1940 World&apos;s
              Fair, shown on the aerial photograph, shall not be removed without
              permission of the Department of Parks.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="codes">
            <h2 id="codes" className={styles.sectionHeading}>
              Special Building and Sanitary Codes
            </h2>
            <p>
              We have reviewed the action taken in 1939 by the State, the City
              and the former Fair Corporation in respect to adoption of special
              building and sanitary codes applicable then. Similar codes,
              brought up to date by committees of the Fair Corporation, should
              be adopted for the 1964-1965 World&apos;s Fair.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="exhibits">
            <h2 id="exhibits" className={styles.sectionHeading}>
              City, State and Federal Exhibits
            </h2>
            <p>
              It is recommended that a City exhibit, to be designed, built,
              maintained and manned by a temporary commission, be housed in the
              present City building. Only minor alterations to make the
              structure suitable for exhibition use will be required.
            </p>
            <p>
              It is suggested that the State arrange for an exhibit in the
              existing Amphitheater building, which should be appropriately
              altered. This structure was built by the State for the 1939-1940
              World&apos;s Fair.
            </p>
            <p>
              It is suggested that the Federal exhibit be housed in a building
              prominently situated and reflecting our country&apos;s leadership.
            </p>
            <p>
              Required legislation to assure the City&apos;s and the Federal
              government&apos;s exhibits should be enacted. We understand that
              the statute for State participation has already been adopted.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="stadium">
            <h2 id="stadium" className={styles.sectionHeading}>
              Stadium
            </h2>
            <p>
              It is assumed that the proposed Stadium with 55,000 seats, will be
              in operation prior to the opening date of the 1964-1965
              World&apos;s Fair. It is suggested that combination tickets,
              admitting the holder to both the Stadium and the Fair, be offered
              for sale. It is also suggested that the Fair Corporation arrange
              to rent the Stadium, when it is not in use by regular tenants, for
              special events which may require a large seating capacity, thus
              adding to the interest of the Fair.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="duration">
            <h2 id="duration" className={styles.sectionHeading}>
              Duration of the Fair
            </h2>
            <p>
              Tentative estimates of the costs of construction and operation,
              based in part on the 1939-1940 World&apos;s Fair, indicate that it
              will not be possible to finance and operate the Fair successfully
              unless it runs for two years.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="transport">
            <h2 id="transport" className={styles.sectionHeading}>
              Intramural Transportation
            </h2>
            <p>
              We suggest electric tractor trains, special buses and lounge cars
              as suitable means of transportation for patrons within the Fair
              grounds.
            </p>
            <p>
              Operation of the intermural transportation system should be by
              contract with experienced transportation corporations.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="restoration">
            <h2 id="restoration" className={styles.sectionHeading}>
              Park Restoration
            </h2>
            <p>
              A plan has been prepared to show the restored park. Modification
              and details will be developed by the Department of Parks prior to
              reconstruction. All restoration work shall be done by the Fair
              Corporation at its expense.
            </p>
            <p>
              We are of the opinion that no consideration be given to proposals
              to turn the Fair, when it ends, into an international university
              or an enterprise of similar character. Flushing Meadow Park must
              by law be turned back to the City as a usable park for the benefit
              of the people of the City of New York.
            </p>
          </section>

          <p className={styles.source}>
            SOURCE: Report,{" "}
            <em>Preparation of the Site for the World&apos;s Fair 1964-1965</em>,
            excerpted
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building01"
        explicitPrevious
        nextHref="/building03"
      />
    </>
  );
}
