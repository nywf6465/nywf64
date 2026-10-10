import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building19.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Operations — Building the Fair — nywf64.com",
  description:
    "Operations — invitation, exhibits, employment, attendance and admissions from Building the Fair on nywf64.com.",
};

function Photo({
  file,
  width,
  height,
  alt,
  source,
}: {
  file: string;
  width: number;
  height: number;
  alt: string;
  source: string;
}) {
  return (
    <figure className={styles.singleFigure} style={{ maxWidth: width }}>
      <Image
        src={`/images/building19/${file}`}
        alt={alt}
        width={width}
        height={height}
        className={styles.photo}
        unoptimized
      />
      <p className={styles.source}>{source}</p>
    </figure>
  );
}

/**
 * Building the Fair — Operations.
 * Body from legacy building20.html (mapped to /building19 as Page 19 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building19Page() {
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

      <article className={styles.article} aria-labelledby="building19-title">
        <header className={styles.titleBar}>
          <h1 id="building19-title" className={styles.titleBarMain}>
            Operations
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            file="building166.jpg"
            width={400}
            height={260}
            alt="Central Court"
            source="SOURCE: Photography by Max Mordecai"
          />

          <section className={styles.section} aria-labelledby="sec-invitation">
            <h2 id="sec-invitation" className={styles.sectionLabel}>
              INVITATION
            </h2>
            <div className={styles.row}>
              <div className={styles.rowLabel}>
                <u>DOMESTIC</u>:
              </div>
              <p className={styles.body} style={{ margin: 0 }}>
                By letter and through representatives of the Fair Corporation.
              </p>
            </div>
            <div className={styles.row}>
              <div className={styles.rowLabel}>
                <u>INTERNATIONAL</u>:
              </div>
              <div>
                <p className={styles.body}>
                  By the Mayor of the City of New York, with the cooperation of
                  the Department of State, and by the international visiting
                  teams acting on behalf of the Fair Corporation and working
                  through the United States embassies in the countries involved.
                  The teams are comprised of outstanding men and women in
                  business, government or letters.
                </p>
                <p className={styles.body}>
                  International participants are encouraged to appoint a
                  representative from their Consular Office in New York or
                  Embassy in Washington to act for their government in selecting
                  the exhibit site and in negotiating an agreement of
                  participation.
                </p>
              </div>
            </div>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building157.jpg"
              width={400}
              height={288}
              alt="International Area"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-intl">
            <h2 id="sec-intl" className={styles.sectionLabel}>
              OFFICE OF INTERNATIONAL AFFAIRS AND EXHIBITS
            </h2>
            <p className={styles.subhead}>
              <u>FUNCTIONS AND RESPONSIBILITIES</u>:
            </p>
            <p className={styles.body}>
              The function of the International Affairs and Exhibits Division is
              to encourage and effectuate the participation of invited foreign
              countries at the New York World&apos;s Fair; to sustain this
              participation during the Fair; and to contribute to the collective
              efforts to create better understanding between the Nations of the
              World. In connection with this function, it is the Divisions&apos;
              responsibility to do the following:
            </p>
            <p className={styles.roman}>I</p>
            <ul className={styles.list}>
              <li>
                Present the formal invitation to the Head of the Government of
                the foreign country whose participation is desired.
              </li>
              <li>
                Assist in the selection of a suitable site and the execution of
                an Agreement of Participation.
              </li>
              <li>
                Provide cost data, terms of payment, engineering, and other
                related information as needed.
              </li>
              <li>
                Motivate the designation of a liaison officer between the Fair
                and the participating country and encourage the early appointment
                of an architect.
              </li>
              <li>
                Insure the submission of preliminary and final exhibit plans and
                acquire renderings where possible.
              </li>
              <li>
                Furnish progress reports and general information publications and
                releases about the Fair.
              </li>
            </ul>
            <p className={styles.roman}>II</p>
            <p className={styles.body}>
              Render such service to the participating countries after the start
              of the Fair as may be desirable in order to maintain an effective
              liaison: for example, the reception and entertainment of
              dignitaries visiting the Fair; assisting in the planning of special
              days and events; providing solutions to the day-to-day problems
              that are bound to arise during the Fair.
            </p>
            <p className={styles.roman}>III</p>
            <p className={styles.body}>
              Stimulate thought and exchange ideas with the representatives and
              peoples of the participating countries as they make use of the
              opportunity provided by the Fair to project in the best possible
              setting their images as Nations.
            </p>
            <p className={styles.roman}>IV</p>
            <p className={styles.body}>
              Render protocol service to officials of cities, states and national
              governments and other distinguished visitors.
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
          </section>

          <section className={styles.section} aria-labelledby="sec-regs">
            <h2 id="sec-regs" className={styles.sectionLabel}>
              EXHIBIT REGULATIONS
            </h2>
            <ul className={styles.list}>
              <li>50,000 square foot maximum area per exhibit site.</li>
              <li>Structures may not exceed 80 feet in height.</li>
              <li>
                Building Coverage will not exceed 60% of any lot. Set backs must
                not be less than 15 feet at the front, 10 feet at each side, and
                5 feet at rear of lot. The area of any lot not covered by
                buildings must be landscaped. Plans of pavilions are subject to
                the approval of the Fair Corporation.
              </li>
              <li>
                Any exceptions to be applied to special cases must be determined
                by the Fair Corporation.
              </li>
            </ul>
            <Photo
              file="building14.jpg"
              width={480}
              height={335}
              alt="Typical Plot"
              source="SOURCE: Pre-Fair Planning Report, NY World&apos;s Fair Corporation"
            />
            <p className={styles.body}>
              The Building Code, The Health Code, and all Rules and Regulations
              applicable to the premises must be observed.
            </p>
            <p className={styles.body}>
              Publications covering the above stipulations are as follows:
            </p>
            <p className={styles.body}>
              Building Code. . . . . . . . . . . . . . . . . . . . $ 2.50
              <br />
              Health Code . . . . . . . . . . . . . . . . . . . . . . . .50
              <br />
              Rules &amp; Regulations. . . . . . . . . . . . . . . . . 3.00
            </p>
            <p className={styles.body}>
              Order above from:
              <br />
              Mr. Ray Tarkman, Office Manager
              <br />
              New York World&apos;s Fair 1964-1965 Corp.
              <br />
              World&apos;s Fair, New York 11380
              <br />
              WF4-2291
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building174.jpg"
              width={400}
              height={216}
              alt="Parade passes by"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-irs">
            <h2 id="sec-irs" className={styles.sectionLabel}>
              INTERNAL REVENUE SERVICE
            </h2>
            <p className={styles.subhead}>
              <u>FEATURES</u>:
            </p>
            <p className={styles.body}>
              The U.S. Internal Revenue Service has established an office in the
              World&apos;s Fair Service Building, located at the main entrance to
              the Fair grounds to service and assist all organizations represented
              at the Fair to properly understand and comply with Federal tax laws
              relative to their operations, according to Brooklyn District
              Director, Thomas E. Scanlon, within the jurisdiction the World&apos;s
              fair Corporation is situated.
            </p>
            <p className={styles.body}>
              The Internal Revenue Service World&apos;s Fair Office is staffed
              with Revenue Office personnel under the direction of J. Kenneth
              Mccloskey, Collection Manager. The Revenue Office staff will be
              augmented by additional personnel from the Brooklyn District, as
              required.
            </p>
            <p className={styles.body}>
              All organizations represented at the Fair, either foreign or
              domestic, should use the Internal Revenue Service World&apos;s Fair
              office for consultation on their tax problems and in processing of
              returns. This office is prepared to furnish informational services
              on Federal employment, excise and income taxes for exhibitors and
              concessionaires (Foreign and Domestic) and their employees. The
              varied types of Revenue forms and how they apply to organizations
              or individual taxpayers are available, as well as instructions on
              the data requested on them.
            </p>
            <p className={styles.body}>
              All exhibitors and concessionaires on the fairgrounds can expect a
              personal visit from Revenue Officers at their site location. All
              Fair representatives are invited to contact the Internal Revenue
              Service World&apos;s Fair Office. Personal visits may be made from
              8:30 a.m. to 5:00 p.m. Monday thru Friday.
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building173.jpg"
              width={400}
              height={230}
              alt="New York State Pavilion"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-emp">
            <h2 id="sec-emp" className={styles.sectionLabel}>
              EMPLOYMENT
            </h2>
            <p className={styles.body}>
              The New York World&apos;s Fair 1964-1965 Corporation will operate
              with a small permanent staff. There are presently no vacancies and
              the opportunities for employment are limited. Interviews are
              arranged by appointment only when an opening exists. Part-time,
              summer, or temporary help will not be utilized.
            </p>
            <p className={styles.body}>
              The exhibitors and concessionaires will engage the personnel
              required to operate their pavilions and facilities. Applications
              for such employment should be made directly to the exhibitors and
              concessionaires.
            </p>
            <p className={styles.body}>
              Guides, Bus Drivers, Tractor Train Operators, Conductors, Telephone
              Information Clerks and Information Booth Attendants at the Fair
              will be furnished by Greyhound At The World&apos;s Fair, Inc.
              Minimum age requirements for applicants is 18 years. No applications
              will be accepted from people wanting only summer employment.
              Fluency in at least one language in addition to English is required
              for Guides. For further information, <u>write</u> to Greyhound At
              The World&apos;s Fair, Inc., World&apos;s Fair, New York 11380.
            </p>
            <p className={styles.body}>
              The New York World&apos;s Fair Division of Pinkerton&apos;s, Inc.,
              will staff the World&apos;s Fair Police, Admissions (Female cashiers
              and ticket sellers and male ushers and ticket takers), Parking
              (Traffic control and toll collector). Applications may be obtained
              by writing to: Pinkerton&apos;s, Inc., New York World&apos;s Fair
              Division, Identity Building, World&apos;s Fair, New York 11380.
              Interviews are by appointment only.
            </p>
            <p className={styles.body}>
              Allied Maintenance Corporation will provide Maintenance and Utility
              Personnel. For applications, write to: Allied Maintenance
              Corporation, Maintenance Headquarters Bldg., World&apos;s Fair, New
              York 11380.
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building177.jpg"
              width={400}
              height={239}
              alt="Fountains of the Fair and Unisphere"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-att">
            <h2 id="sec-att" className={styles.sectionLabel}>
              ATTENDANCE
            </h2>
            <p className={styles.subhead}>
              <u>TOTAL ADMISSIONS - PERCENT BY REGIONS</u>:
            </p>
            <div className={styles.statRow}>
              <span>30%</span>
              <span>NEW YORK CITY</span>
            </div>
            <div className={styles.statRow}>
              <span>25%</span>
              <span>WITHIN 50 MILES</span>
            </div>
            <div className={styles.statRow}>
              <span>18%</span>
              <span>100 - 250 MILES</span>
            </div>
            <div className={styles.statRow}>
              <span>10%</span>
              <span>50 - 100 MILES</span>
            </div>
            <div className={styles.statRow}>
              <span>7%</span>
              <span>250 - 500 MILES</span>
            </div>
            <div className={styles.statRow}>
              <span>5%</span>
              <span>500 - 1000 MILES*</span>
            </div>
            <div className={styles.statRow}>
              <span>3%</span>
              <span>OVER 1000 MILES*</span>
            </div>
            <div className={styles.statRow}>
              <span>2%</span>
              <span>FOREIGN</span>
            </div>
            <p className={styles.note}>* Includes Eastern Canada</p>
            <p className={styles.subhead}>
              <u>70,000,000 TOTAL ADMISSIONS</u>
            </p>
            <p className={styles.body}>
              40,000,000 in 1964
              <br />
              30,000,000 in 1965
            </p>
            <p className={styles.body}>
              Estimate prepared by
              <br />
              COMPTROLLER
              <br />
              AND
              <br />
              OPERATIONS DEPARTMENT
              <br />
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
              <br />
              with the cooperation of
              <br />
              ANDREWS AND CLARK
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building175.jpg"
              width={400}
              height={262}
              alt="Unisphere"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-truck">
            <h2 id="sec-truck" className={styles.sectionLabel}>
              ADMISSIONS
              <br />
              (Trucking)
            </h2>
            <p className={styles.subhead}>
              <u>NORMAL DELIVERIES</u>
            </p>
            <p className={styles.body}>
              Normal deliveries will be made between midnight and 8:00 a.m.{" "}
              <u>No deliveries</u> will be permitted except in trucks and station
              wagons.
            </p>
            <p className={styles.body}>
              No entries will be permitted after 8:00 a.m. and all vehicles{" "}
              <u>must leave the site</u> by 8:30 a.m. Speed of all vehicles within
              the site is <u>15 miles per hour</u>.
            </p>
            <p className={styles.body}>
              The Fowler-Avery Avenue Gate is the <u>only</u> operational truck
              gate between 9:00 a.m. and midnight.{" "}
              <u>
                The Fowler-Avery Avenue, Rodman Street, Corona Avenue and 111th
                Street
              </u>{" "}
              truck gates are operational between midnight and 8:00 a.m.
            </p>
            <p className={styles.body}>
              Emergency vehicles and vehicles on emergency utility service are
              permitted to use all appropriate entrances.
            </p>
            <p className={styles.body}>
              Violation of the above will be cause for revoking entry permits.
            </p>
            <p className={styles.subhead}>
              <u>EMERGENCY DELIVERIES</u>
            </p>
            <p className={styles.body}>
              Emergency Deliveries may be made between 9:00 a.m. and midnight{" "}
              <u>only</u> at the <u>Fowler-Avery Avenue Service Gate</u>. The
              charge for emergency delivery vehicles to enter the{" "}
              <u>Fowler-Avery Gate</u> is $5.00 for each entry. Deliveries from
              outside the site during hours of public operation will be permitted
              only in actual emergencies as determined by the Director of
              Security. Deliveries will be made into Rentar Fair Corporation Area{" "}
              <u>only.</u>
            </p>
            <p className={styles.body}>
              Rentar Fair Corporation will telephone the consignee before taking
              any action. The consignee may send a messenger to carry the material
              to his exhibit. If the delivery is handled by Rentar Fair
              Corporation, no charge will be made for this service. Packages not
              exceeding 50 pounds in weight and not more than 36 inches in any
              dimension may be hand-carried through any gate using a bona fide
              pass or a $2.50 admission ticket.
            </p>
            <p className={styles.subhead}>
              <u>DELIVERY PERMITS</u>
            </p>
            <p className={styles.body}>
              <u>Monthly Permit</u> (midnight to 8:00 a.m. only) obtainable from
              the Office of Truck Delivery Operation Unit located at the
              Fowler-Avery Avenue Gate, World&apos;s Fair, New York, 11380,
              WF4-7623. $5.00 per vehicle.
            </p>
            <p className={styles.body}>
              <u>Single Entry Permit</u> (midnight to 8:00 a.m. only) obtainable
              at Fowler-Avery Avenue Gate: Good for single entry only. $1.00 per
              vehicle.
            </p>
            <p className={styles.body}>
              <u>Emergency Entry Permit</u> (9:00 a.m. to midnight) obtainable at
              Fowler-Avery Avenue Gate: Good for single entry only. $5.00 per
              vehicle.
            </p>
            <p className={styles.body}>
              Single Entry Permits and Emergency Entry Permits will be surrendered
              at Exit Gates.
            </p>
            <p className={styles.subhead}>
              <u>AUTOMOBILE AND COURTESY VEHICLES OF ALL TYPES</u>
            </p>
            <p className={styles.body}>
              Private cars, motorcycles and taxis are not permitted on the site.
              All such vehicles found on the site will be towed off the site.
            </p>
            <p className={styles.body}>
              All Construction equipment and Engineers and Construction
              supervisor&apos;s vehicles will enter and exit only between midnight
              and 8:00 a.m. at the Rodman Street Truck Gate (#7A). These vehicles
              must be off the site by 8:30 a.m.
            </p>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building178.jpg"
              width={400}
              height={272}
              alt="NY State Pavilion Towers"
              source="SOURCE: Photography by Max Mordecai"
            />
          </section>

          <section className={styles.section} aria-labelledby="sec-passes">
            <h2 id="sec-passes" className={styles.sectionLabel}>
              ADMISSIONS
              <br />
              (Passes)
            </h2>
            <p className={styles.subhead}>
              <u>WITH PICTURES</u>
            </p>
            <p className={styles.body}>
              Application should be made to the World&apos;s Fair Identification
              Department. World&apos;s Fair Service Building, WF4-5364.
            </p>
            <p className={styles.body}>
              Participants&apos; Employees identification admission cards will be
              issued by the Security Division to those accredit representatives,
              agents and employees of Participants whose duties or
              responsibilities require their continuous presence at the projects.
              the holders of such cards will be accorded free admission to the
              grounds, subject to such restrictions as may from time to time be
              prescribed by the Fair Corporation.
            </p>
            <p className={styles.body}>
              Form Applications for Participants&apos; Employees identification
              cards, accompanied by detailed instructions, were sent to
              Participants by Director of Maintenance and Security in advance of
              the opening date of the Fair. Applications were submitted in
              duplicate in ample time to allow for approval, for the photographing
              of the subjects and for the preparation and issuance of the
              identification cards.
            </p>
            <p className={styles.body}>
              The Fair Corporation reserves the right to reject any applications
              for identification cards or to cancel any outstanding identification
              card at any time for any reason satisfactory to the Fair
              Corporation.
            </p>
            <p className={styles.body}>
              A charge of <u>ONE DOLLAR</u> ($1.00) will be made for each
              identification card issued to cover the cost of photograph, etc. If
              at any time a pass is lost by an employee of a participant, there
              will be a replacement charge of $15.00 for a new pass.
            </p>
            <p className={styles.body}>
              Upon the termination of employment of any accredited representative,
              agent or employee, participants shall immediately notify the
              World&apos;s fair Identification Department of such termination and
              the pass shall be returned to the Fair Corporation for cancellation
              or a charge of $15.00 will be made.
            </p>
            <p className={styles.body}>
              Participants must return all passes requested by the Fair
              Corporation within five days after such a request is made by the
              Fair Corporation. There will be a charge of $15.00 for each pass not
              returned.
            </p>
            <p className={styles.body}>
              The Fair Corporation Reserves the right to make regular payroll
              audits of the Participants&apos; records in order that it may
              maintain at all times a correct list of accredited employees.
            </p>
            <p className={styles.subhead}>
              <u>WHITE PASSES</u>
            </p>
            <p className={styles.body}>
              All employees of the Fair Corporation, Pinkerton&apos;s, Allied
              Maintenance, etc., assigned to Fair Corporation Work.
            </p>
            <p className={styles.subhead}>
              <u>SALMON PASSES</u>
            </p>
            <p className={styles.body}>
              Employees of exhibitors and concessionaires and the exhibitor&apos;s
              division of Pinkerton&apos;s, Allied Maintenance, etc.
            </p>
            <p className={styles.subhead}>
              <u>TAN PASSES</u>
            </p>
            <p className={styles.body}>
              All repairmen permanently assigned on the site for servicing of
              equipment or installations used by the Fair Corporation or
              participants.
            </p>
            <p className={styles.subhead} style={{ textAlign: "center" }}>
              <u>WITHOUT PICTURES</u>
            </p>
            <p className={styles.body}>
              Application should be made to the Pass Control Office, Administration
              Building, WF4-8424.
            </p>
            <p className={styles.subhead}>
              <u>BLUE PASSES</u>
            </p>
            <p className={styles.body}>
              Pavilion Managers, police, working representatives of federal, state
              and city departments, etc.
            </p>
            <p className={styles.subhead}>
              <u>GOLD PASSES</u>
            </p>
            <p className={styles.body}>
              The two top executives of all firms having leases or contracts with
              the Fair Corporation, state or federal officials as prescribed. Top
              executives of the Fair Corporation, etc.
            </p>
            <p className={styles.subhead} style={{ textAlign: "center" }}>
              <u>DAY PASSES</u>
            </p>
            <p className={styles.body}>
              Day passes will be issued by the Pass Control Office located in Room
              128 of the Administration Building, WF4-8424. Request for day passes
              may be made directly to the Pass Office or through the appropriate
              department of the World&apos;s Fair Corporation.
            </p>
            <ol className={styles.list}>
              <li>
                Requests for day passes are made by submitting a &quot;Day Pass
                Application.&quot;
              </li>
              <li>
                In order to avoid delay in issuance of passes, requests should be
                submitted twenty or more days in advance.
              </li>
              <li>
                Passes will not be issued more than fourteen (14) days in advance.
              </li>
              <li>Incomplete applications will not be processed.</li>
              <li>
                A separate day pass application should be submitted for each date
                for which passes are requested.
              </li>
              <li>
                No more than two (2) officials may be designated by a pavilion to
                sign the Day Pass Application form.
              </li>
              <li>
                The number of passes requested on the &quot;Day Pass
                Application&quot; should be inserted as per the following example -{" "}
                <u>twelve (12)</u>.
              </li>
              <li>
                Names of individuals who are to receive day passes should be
                furnished on a supplemental list.
              </li>
              <li>
                All unused day passes should be returned to the Pass Control Office
                not more than one day after date stamped on pass.
              </li>
              <li>
                Violation of pass privilege will result in loss of such privilege.
              </li>
            </ol>
            <p className={styles.subhead}>
              <u>
                THE FOLLOWING CLASSIFICATIONS ARE AUTHORIZED TO APPLY FOR DAY
                PASSES
              </u>
            </p>
            <ol className={styles.list}>
              <li>
                Performers whether hired by the Fair Corporation or by Participants
              </li>
              <li>
                Visiting VIP&apos;s <u>when invited by the Fair Corporation</u> and
                on request of the Protocol Division - names to be listed.
              </li>
              <li>Deliveries (small packages), or messengers.</li>
              <li>Repairmen for temporary needs.</li>
              <li>
                Volunteer workers of religious pavilions, Masons, UNICEF and the
                Women&apos;s Advisory Council.
              </li>
              <li>
                Construction workers. Requests should be made to Mr. Joe Myers,
                Director of Plans, WF4-2258.
              </li>
              <li>Others as approved by the Director of Passes.</li>
            </ol>
            <p className={styles.source}>
              SOURCE: Operations Manual, NY World&apos;s Fair Corporation
            </p>
            <Photo
              file="building212.jpg"
              width={400}
              height={226}
              alt="NY State Pavilion"
              source="SOURCE: Photography by Max Mordecai"
            />
            <p className={styles.source}>
              SOURCE: All Photographs presented courtesy Glen Mordecai collection
              (unless otherwise indicated) and are © Copyright 2005 Glen Mordecai,
              All Rights Reserved
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/building18"
        explicitPrevious
        nextHref="/building20"
      />
    </>
  );
}
