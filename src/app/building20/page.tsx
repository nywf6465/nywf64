import type { Metadata } from "next";
import Image from "next/image";
import { BuildingNavChrome } from "@/components/BuildingNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./building20.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Interim Period — Building the Fair — nywf64.com",
  description:
    "Interim Period — winter between the 1964 and 1965 seasons, from Building the Fair on nywf64.com.",
};

function WinterPair({
  left,
  right,
}: {
  left: {
    file: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  right: {
    file: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
}) {
  return (
    <div className={styles.photoPair}>
      <figure className={styles.figure} style={{ maxWidth: left.width }}>
        <Image
          src={`/images/building20/${left.file}`}
          alt={left.alt}
          width={left.width}
          height={left.height}
          className={styles.photo}
          unoptimized
        />
        <figcaption className={styles.caption}>{left.caption}</figcaption>
      </figure>
      <figure className={styles.figure} style={{ maxWidth: right.width }}>
        <Image
          src={`/images/building20/${right.file}`}
          alt={right.alt}
          width={right.width}
          height={right.height}
          className={styles.photo}
          unoptimized
        />
        <figcaption className={styles.caption}>{right.caption}</figcaption>
      </figure>
    </div>
  );
}

/**
 * Building the Fair — Interim Period.
 * Body from legacy building21.html (mapped to /building20 as Page 20 after overview).
 *
 * Stack: buildinghero → BuildingNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Building20Page() {
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

      <article className={styles.article} aria-labelledby="building20-title">
        <header className={styles.titleBar}>
          <h1 id="building20-title" className={styles.titleBarMain}>
            Interim Period
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.dateRange}>
            October 19, 1964 - April 20, 1965
          </p>

          <figure className={styles.singleFigure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/building20/building213.jpg"
              alt="Unisphere night sequence"
              width={400}
              height={270}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.sourceCenter}>
              SOURCE: Photography by Max Mordecai
            </p>
          </figure>

          <h2 className={styles.lookingBack}>LOOKING BACK - LOOKING AHEAD</h2>
          <p className={styles.fairIn1965}>&quot;THE FAIR IN 1965&quot;</p>

          <div className={styles.letterBox}>
            <p>
              This progress report, the last before the second season of the Fair
              opens, gives facts as to 1964, summarizes our accomplishments to
              date, records our winter housekeeping and planning activities and
              foreshadows a new Exposition next summer.
            </p>
            <p>
              No doubt we failed to anticipate some difficulties and made
              mistakes, but the public response, excepting a few discordant
              voices, has been friendly, grateful and favorable, and we now go on
              to a larger attendance and further worldwide interest and support
              as the gates reopen. Judging by their unsolicited testimony, the
              enthusiasm of visitors, especially those coming from outside of the
              city, has been astonishing. We are now earnestly addressing
              ourselves primarily to those in the metropolitan area who somehow
              have not yet reached the Fair, who have no special travel problems
              and can come to Flushing Meadow often.
            </p>
            <p>
              We have had some financial problems because actual attendance, for
              reasons still obscure, did not in the first season come up to
              expectations. High costs, which affect everyone and everything,
              have been troublesome. We have made cuts in our budget but must
              keep the Fair safe and clean. It was necessary, for reasons
              familiar to everyone, to have an unusual number of special police
              on security, and there have been special jurisdictional labor
              problems involving maintenance. We may decide to keep the Fair open
              through Sunday, November 14th.
            </p>
            <p>
              We have faithfully pursued the objectives which we announced at the
              inception of the Fair -- an Olympics of progress on a shrinking
              globe in an expanding universe dedicated to fee competition of
              ideas and achievements in all fields of human endeavor, domestic
              and foreign, and a mighty drive to promote world friendship and
              peace.
            </p>
            <p>To sum up:</p>
            <ul>
              <li>
                We promise a brighter, more stimulating Fair with all of the best
                of the old and many new features.
              </li>
              <li>
                We aim at 37,500,000 visitors next season and believe that with
                honest, convincing promotion we shall attract that number.
              </li>
              <li>We shall profit by mistakes in operation in 1964.</li>
              <li>
                We intend to pay our noteholders in full, repair, restore and
                improve post-Fair Flushing Meadow Park, but some additions
                originally contemplated will have to wait.
              </li>
              <li>
                We shall retain as part of the permanent park several desirable
                pavilions and other structures. It should be noted that
                demolition, salvage, restoration and park improvements are
                inseparable, inextricably interwoven parts of a single problem.
                Only one agency can do this work successfully, whatever the
                source of funds. The neglect and mistakes following the
                1939-1940 Fair should not be repeated after the Fair of
                1964-1965.
              </li>
              <li>
                We can make no promises at this time as to the $24,000,000 plus
                spent by the City on permanent park improvements. It may well be
                that we shall recommend to the City that some part of any balance
                be used to make Flushing Meadow Park a fitting memento of two
                Fairs.
              </li>
              <li>
                Particular attention is called to the positive, measurable
                financial benefits of the Fair to the City&apos;s treasury and to
                private business in all its ramifications. The Fair has been an
                undeniable boon to the city.
              </li>
            </ul>
            <div className={styles.letterSign}>
              <Image
                src="/images/building20/building04.gif"
                alt="Robert Moses signature"
                width={150}
                height={39}
                className={styles.signature}
                unoptimized
              />
              <p className={styles.letterRole}>President</p>
              <p className={styles.letterDate}>January 26, 1965</p>
            </div>
          </div>
          <p className={styles.source}>
            SOURCE: <em>The Fair in 1965</em> - NY World&apos;s Fair Corporation
            Publication, January 26, 1965
          </p>

          <hr className={styles.rule} />

          <p className={styles.intro}>
            The first season of the Fair closed to the public on October 18,
            1964. The time between the 1964 and 1965 seasons was called the
            &quot;Interim Period.&quot; The Fair Corporation and exhibitors used
            this six month period to spruce up pavilions and grounds and to make
            plans for the second, and final, season of the Fair. The series of
            photographs by photographer Frank Bauman that follow appeared in the
            April 20, 1965 edition of <em>Look</em> Magazine (Vol. 29 No. 8). They
            show the Fair in the snowy mantle of the Winter of 1965.
          </p>

          <WinterPair
            left={{
              file: "building202.jpg",
              width: 217,
              height: 290,
              alt: "Billy Graham Pavilion — Winter 1965",
              caption: "Sun warms Billy Graham Pavilion. -",
            }}
            right={{
              file: "building203.jpg",
              width: 217,
              height: 290,
              alt: "World’s Fair telephones — Winter 1965",
              caption: "- Icicles spangle phone booths.",
            }}
          />

          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="engineering">
            <h2 id="engineering" className={styles.sectionLabel}>
              ENGINEERING
            </h2>
            <p className={styles.body}>
              The interim program for &quot;putting the Fair to bed&quot; started
              as planned on October 19th, the day after the close of the 1964
              season.
            </p>
            <p className={styles.body}>
              The program is divided generally into three major tasks; (a)
              winterization of the physical plant to provide protection over the
              winter months, (b) repair and rehabilitation of certain facilities,
              and (c) de-winterization next spring.
            </p>
            <p className={styles.body}>
              Contracts for work were awarded prior to the Fair closing. The
              &quot;General Construction&quot; contract, which consists of
              repairs to roads and parking fields, cleaning of the Flushing River
              culverts, paving of additional malls, flushing of storm and
              sanitary sewer lines, and certain other miscellaneous exterior work
              was awarded to Slatter Contracting Co.
            </p>
            <p className={styles.body}>
              The &quot;Building Contract,&quot; which includes all interim
              building work (except electrical) and exterior painting was awarded
              to Sawyer &amp; Dolfinger. This contract also covers erection of
              temporary barricades at entrances, and the winterization and
              protection of toll booths and turnstiles.
            </p>
            <p className={styles.body}>
              Electrical work, to include all pools and fountains and street
              lighting, is being accomplished under supervision of one of the
              World&apos;s Fair consultants by World&apos;s Fair Maintenance
              Corporation and Allied World&apos;s fair Service Corporation.
            </p>
            <p className={styles.body}>
              Landscaping work, which consists primarily of widening existing
              display beds and providing additional display beds in the Courts of
              the Sun and the Moon is being done by Roman Landscape Co. as an
              extension of their present contract.
            </p>
            <p className={styles.body}>
              Work at the U.S. Space Park, which the Fair Corporation is required
              to do under the terms of its agreement with the government, was
              awarded to W.J. Barney Corporation.
            </p>
            <p className={styles.body}>
              In addition, several smaller contracts were awarded for
              waterproofing of the Singer Bowl, exterior fencing at the Hall of
              Science, and additional post and chain fencing for protection of
              grassed areas.
            </p>
            <p className={styles.subhead}>Progress</p>
            <p className={styles.body}>
              All winterization work was substantially completed by the scheduled
              date, December 15, 1964. No significant problems were encountered
              except in the Meadow Lake parking fields where it was found
              necessary to postpone paving repairs until spring due to a greater
              ground settlement in the area than had been anticipated.
            </p>
            <p className={styles.body}>
              Work forces on the site have been de-mobilized until
              de-winterization operations can start, but under the terms of the
              General Construction and Building Contracts, these contractors are
              on a standby basis, ready to respond immediately for any emergency
              work which may develop.
            </p>
            <p className={styles.subhead}>De-winterization</p>
            <p className={styles.body}>
              The start of de-winterization work will depend to some extent on
              weather conditions.
            </p>
            <p className={styles.body}>
              Exterior painting of World&apos;s Fair structures will begin the
              latter part of February, and it is anticipated that all other
              de-winterizing operations will be in full swing by the first of
              March. Completion is scheduled for the first of April.
            </p>
            <p className={styles.body}>
              The period between April 1st and the opening of the Fair on April
              21st will be used for general cleanup of the site.
            </p>
            <p className={styles.subhead}>Exhibitor Engineering Plans</p>
            <p className={styles.body}>
              Since the close of the Fair on October 18 there have been 119
              exhibitor&apos;s pavilions either winterized or underway for
              winterization. This figure represents approximately 80% of all
              pavilions and the remaining are those that, due to nature and
              design, require little or no work.
            </p>
            <p className={styles.body}>
              As of this date 73 exhibitor&apos;s pavilions are planning
              refurbishing and/or alteration work for the 1965 season. Nineteen of
              the 73 are known to be planning an entirely new facility. Much of
              the work that will be done is specifically a refinement of
              operations to facilitate more pleasant conditions for the visitors
              this year.
            </p>
            <p className={styles.source}>
              SOURCE: <em>The Fair in 1965</em> - NY World&apos;s Fair Corporation
              Publication, January 26, 1965
            </p>
          </section>

          <hr className={styles.rule} />

          <WinterPair
            left={{
              file: "building204.jpg",
              width: 213,
              height: 294,
              alt: "Alaska Pavilion — Winter 1965",
              caption: "Totem pole fronts Alaska. -",
            }}
            right={{
              file: "building205.jpg",
              width: 213,
              height: 294,
              alt: "Hong Kong Pavilion — Winter 1965",
              caption: "- Hong Kong bridge.",
            }}
          />

          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="attendance">
            <h2 id="attendance" className={styles.sectionLabel}>
              ATTENDANCE
            </h2>
            <p className={styles.body}>
              The operating season of the Fair commenced on April 22, 1964 and
              ended on October 18, 1964. During this season of 180 days, the total
              paid attendance amounted to 27,148,280. Of this attendance
              16,540,053 were admitted on the submission of advance sales tickets.
              This leaves 14,136,590 advance sale tickets still outstanding. The
              Fair is in a much better position now to attract a larger attendance
              in the 1965 season than in 1964. The tremendously favorable
              word-of-mouth advertising given the Fair by the millions who saw it
              affords a basis of high hopes for the 1965 Season.
            </p>
            <p className={styles.body}>
              A survey, based on a sampling of 10,000 visitors to the Fair,
              showed that 48.3% of the visitors came from the Metropolitan Area.
              93.1% of those interviewed felt that the Fair was worthwhile coming
              to see mainly by reason of its magnitude, educational value and
              beauty. 98.4% found the Fair grounds clean and 99% though the Fair
              personnel presented a clean appearance and were courteous.
            </p>
            <p className={styles.body}>
              Since the close of the Fair, work is progressing in completing the
              records, reviewing 1964&apos;s operation results and establishing
              new budgets for the interim and 1965 operating seasons and for the
              post-Fair period.
            </p>
            <p className={styles.source}>
              SOURCE: <em>The Fair in 1965</em> - NY World&apos;s Fair Corporation
              Publication, January 26, 1965
            </p>
          </section>

          <hr className={styles.rule} />

          <WinterPair
            left={{
              file: "building206.jpg",
              width: 207,
              height: 288,
              alt: "Hawaii Pavilion — Winter 1965",
              caption: "Snow caps Hawaiian village. -",
            }}
            right={{
              file: "building207.jpg",
              width: 212,
              height: 288,
              alt: "Chrysler Pavilion — Winter 1965",
              caption: "- Logs bridge Chrysler moat.",
            }}
          />

          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="operations">
            <h2 id="operations" className={styles.sectionLabel}>
              OPERATIONS
            </h2>
            <p className={styles.body}>
              Looking forward to a well-kept Fairsite for the new season, the
              maintenance operation is busy with routine refuse removal at all
              collection points and at all restaurants remaining open during the
              interim period.
            </p>
            <p className={styles.body}>
              Leaf removal and pruning was completed by late November and snow
              removal preparations made to assure access to all fire hydrants and
              keep all other traffic lanes open for working parties.
            </p>
            <p className={styles.body}>
              Motorized equipment not in use was winterized, the rest being kept
              efficiently operating.
            </p>
            <p className={styles.body}>
              Both the uniformed and detective forces of the World&apos;s Fair
              Police department have been on regular, constant patrol duty since
              the Fair closed its gates in October. Vacant as well as occupied
              buildings have been under continuous surveillance to prevent
              pilferage and vandalism.
            </p>
            <p className={styles.body}>
              Safety inspectors are also regularly combing the grounds and
              buildings to remove hazards to workers, and eliminate anything
              potentially dangerous to visitors before the Fair reopens.
            </p>
            <p className={styles.body}>
              The World&apos;s Fair Fire Department, in addition to its normal
              duties, patrols the entire site, checking all buildings for
              combustible materials or other potential fire starters. Radio
              contact is maintained at all times with dispatchers at department
              headquarters.
            </p>
            <p className={styles.source}>
              SOURCE: <em>The Fair in 1965</em> - NY World&apos;s Fair Corporation
              Publication, January 26, 1965
            </p>
          </section>

          <hr className={styles.rule} />

          <WinterPair
            left={{
              file: "building208.jpg",
              width: 215,
              height: 295,
              alt: "Johnson Wax Golden Rondelle — Winter 1965",
              caption: "Johnson Golden Rondelle. -",
            }}
            right={{
              file: "building209.jpg",
              width: 217,
              height: 295,
              alt: "UAR Building — Winter 1965",
              caption: "- Ramses II stares from UAR Building.",
            }}
          />

          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="regulations">
            <h2 id="regulations" className={styles.regsTitle}>
              REGULATIONS GOVERNING OPERATIONS FOR INTERIM PERIOD
            </h2>
            <p className={styles.regsDates}>
              (October 19, 1964 - April 20, 1965)
            </p>

            <p className={styles.subhead}>
              <u>General</u>
            </p>
            <ol className={styles.list}>
              <li>
                All construction work, including the furnishing of labor and
                supplies and all deliveries during the interim Fair period, are
                required to take place Monday through Friday between the hours of
                7:00 A.M. and 5:00 P.M.
              </li>
              <li>
                No exhibit or concession may be open to the public during the
                interim season. In this regard, no charity benefits, public
                attended previews, or similar events will be permitted and no food
                concessions or operations will be permitted to remain open with
                the exception of two Brass Rail (Sites No. 19, and 50A)
                restaurants authorized by the Fair Corporation.
              </li>
              <li>
                Bus service will be operated when required. The United States Post
                Office and the Service Branch of the First National City Bank will
                remain in operation.
              </li>
              <li>
                All access to the Fair site will be subject to the control of the
                Director of Security.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Security</u>
            </p>
            <ol className={styles.list}>
              <li>
                The Fair Corporation will in general provide day and night police
                and fire protection within the limits of the Fair grounds. The
                Fair Corporation shall not be responsible for the loss or damage
                of any property of any participant. It shall be the
                participant&apos;s responsibility to secure and maintain any area
                leased to him during the term of his agreement with the Fair
                Corporation.
              </li>
              <li>
                World&apos;s Fair Police are responsible for the security of the
                Fair grounds, exclusive of areas which are the responsibility of
                the participant pursuant to his lease or other agreement with the
                Fair Corporation.
              </li>
              <li>
                Such police, during the execution of their duties, shall have full
                authority to stop and search all vehicles, and question the
                occupants thereof on the Fair Site. The orders, directions and
                instructions of such police will be complied with at all times.
                Anyone failing to comply therewith will be ejected from the Fair
                site and may thereafter be denied permission to re-enter the Fair
                Site.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Operations</u>
            </p>
            <p className={styles.body}>
              It is the present intention of the Fair Corporation that the
              following operations and services will be provided by the Fair
              Corporation during the interim Fair period:
            </p>
            <ol className={styles.nestedList}>
              <li>
                <u>Police</u>: Security for the Fair site will be provided by
                means of a foot and motor-patrol system. Precinct #1 will be open.
              </li>
              <li>
                <u>Fire</u>: Three fire companies will provide fire protection.
              </li>
              <li>
                <u>Safety</u>: The World&apos;s Fair Safety Department will
                function throughout the interim period.
              </li>
              <li>
                <u>Medical</u>: All first aid stations will be closed. The
                Atomedic Hospital, however will operate with a skeleton force, and
                will serve primarily as a first aid station. Ambulance service
                will be available from the Atomedic Hospital to New York City
                Hospitals.
              </li>
              <li>
                <u>Communications</u>: Emergency communications systems, both
                radio and telephones, will be maintained. Emergency phones in the
                &quot;serpentine&quot; system will remain in use, and those phones
                used for Precinct reporting will report directly to Precinct #1.
              </li>
              <li>
                <u>Lighting</u>: During evening hours, the Fair site will remain
                lighted to the extent deemed appropriate by the Fair Corporation.
                Exhibitors, concessionaires and participants are encouraged to
                provide exterior lighting.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Admission to the Fair Site</u>
            </p>
            <p className={styles.body}>
              Admission to the Fair site will be limited to employees of the
              World&apos;s Fair; employees of maintenance and security
              organizations employed by the Fair; employees of exhibitors and
              concessionaires, and contractors and their employees.
            </p>

            <p className={styles.subhead}>
              <u>Vehicle Restriction</u>
            </p>
            <p className={styles.body}>
              No private vehicles will be permitted on the Fair site.
            </p>

            <p className={styles.subhead}>
              <u>Passes</u>
            </p>
            <ol className={styles.list}>
              <li>
                Starting October 1, 1964 Employee Passes will be perforated with a
                suitable punch. Effective October 19, 1964 only ID Cards so
                perforated will be valid for entry upon the Fair site. Permanent
                Passes (ID Cards) for the interim period will be issued by the
                Fair Corporation to those accredited persons whose
                responsibilities require their regular presence at their
                respective projects. For temporary employees of contractors, day
                passes will be used. Both types of passes can be obtained at the
                Identity Office in the Service Building. There will be a charge of
                $1.00 for each permanent pass (ID Card.) There will be no charge
                for day passes, and such passes may be picked up in advance. Call
                WF4-5422 for information.
              </li>
              <li>
                The Labor Relations Department of the World&apos;s Fair
                Corporation will forward to the Identity Office for processing all
                union requests for passes (ID Cards) or day passes.
              </li>
              <li>
                The Fair Corporation reserves the right to reject any application
                for passes or to cancel passes for any reason satisfactory to the
                Fair Corporation. The holders of passes, will be subject to such
                restrictions as may from time to time be prescribed by the Fair
                Corporation.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Vehicle Permits</u>
            </p>
            <ol className={styles.list}>
              <li>
                Special construction equipment used by a contractor in connection
                with work at the Fair site (e.g., cranes, bulldozers, paving
                machines, dump trucks, etc.) will be permitted in and out of the
                Fair site without permits, but, the drivers of such equipment will
                be subject to all other Fair Regulations.
              </li>
              <li>
                All vehicles not identified with a Fair Corporation&apos;s
                official decal, other than the equipment described above, must
                obtain a vehicle permit to gain access to the Fair site. such
                permits may be obtained from the Truck Delivery Operations Unit,
                located in the trailer inside the Fowler-Avery Gate to the Fair.
              </li>
              <li>
                Daily and monthly permits will be issued. there will be no charge
                for these permits, which may be obtained in advance.
              </li>
              <li>
                The Fair Corporation reserves the right to refuse to issue, or to
                confiscate any such permit for any reason deemed sufficient by the
                Fair Corporation, including violations of the 15 mile per hour
                speed limit, or the damaging of the facilities located on the Fair
                grounds.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Gates</u>
            </p>
            <ol className={styles.list}>
              <li>
                Personnel: Gates 1,2,6, Fowler-Avery and the Top of the Fair Gates
                will be open to persons carrying passes (ID Cards and day
                passes.) Workmen&apos;s tools will be permitted through the Pass
                Gates and on buses.
              </li>
              <li>
                Day passes will be mutilated at the gate, and returned to the
                holder for use as identification on the Fair site. If the holder
                has to leave and return on the same day, a handstamping process
                will be used.
              </li>
              <li>
                All packages being carried on or off the Fair site will be subject
                to inspection.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Vehicles</u>
            </p>
            <ol className={styles.list}>
              <li>
                Two vehicular gates, Fowler-Avery and 111th Street, will be
                operated by the Fair Corporation. Vehicles with the Fair
                Corporation&apos;s official decal may use Gate #2. Emergency
                vehicles and vehicles on emergency utility service, will be
                permitted to use all operating gates.
              </li>
              <li>
                Construction vehicles (as discussed previously) may use either the
                Fowler-Avery or 111th Street Gates.
              </li>
              <li>
                Vehicles having Fair Corporation official decals may use all
                operating gates.
              </li>
              <li>
                Vehicles which do not have both a monthly permit and a decal
                reading &quot;World&apos;s Fair Delivery&quot; are required to use
                the Fowler-Avery Gate only.
              </li>
              <li>
                Vehicles having daily truck permits are required to use the
                Fowler-Avery Gate only. Daily permits will be surrendered upon
                leaving such gate.
              </li>
              <li>
                All vehicles are required to stop at a designated area inside the
                Fowler-Avery Gate in order that driver credentials may be
                verified.
              </li>
              <li>
                All vehicles will be subject to manifest checks upon entry and
                departure from all gates.
              </li>
            </ol>

            <p className={styles.subhead}>
              <u>Parking</u>
            </p>
            <ol className={styles.list}>
              <li>
                Roosevelt Avenue &quot;VIP&quot; Parking Area: this parking area
                will be operated under present instructions. Deliveries to Service
                Building and Identity Building will be made through this lot.
              </li>
              <li>
                Lawrence Street Parking Area: This area will be used for parking
                by personnel employed on the Fair site. Admission to the lot is by
                ID Card or day pass. There will be no charge. Bus service will be
                available from this area to points within the Fair site. The
                reserved parking area will continue in operation.
              </li>
              <li>
                East Meadow Lake Parking Area: This area will be used by personnel
                employed on the Fair site. Admission to the lot is by ID Card or
                day pass. There will be no charge. Bus service will be available
                from Gate #6 to points within the Fair grounds.
              </li>
              <li>
                111th Street Parking Area: This area will be used by persons
                visiting the Top of the Fair and the Terrace Club. There will be
                no charge.
              </li>
              <li>
                Roosevelt Avenue Bus Parking Area: This area will be used by
                employees of the Fair security and maintenance organizations. The
                entrance will be on 126th Street. parking will be on a
                first-come, first-served basis. There will be no charge.
              </li>
            </ol>
            <p className={styles.source}>
              SOURCE: <em>Operations Manual</em> - NY World&apos;s Fair
              Corporation Publication
            </p>
          </section>

          <hr className={styles.rule} />

          <WinterPair
            left={{
              file: "building210.jpg",
              width: 219,
              height: 292,
              alt: "IBM egg theater — Winter 1965",
              caption: 'IBM\'s "egg" theater. -',
            }}
            right={{
              file: "building211.jpg",
              width: 219,
              height: 292,
              alt: "General Electric Pavilion — Winter 1965",
              caption: "- GE lights up a winter's night.",
            }}
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/building19"
        explicitPrevious
        nextHref="/building21"
      />
    </>
  );
}
