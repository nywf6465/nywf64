import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./betliv07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Deplorable Conditions — Better Living Center — nywf64.com",
  description:
    "Fair Corporation memos and Canada Dry correspondence on Better Living Center opening-day conditions — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — Deplorable Conditions.
 * Body from legacy betliv07.html (custom correspondence — no shared standard).
 * Legacy wording (soild/soiled, survere, blow, jaggered, servey, will will,
 * ignoral, Skowhegen) is preserved.
 *
 * Stack: hero → BetlivNavChrome → navy title → memos → Nav2Bar.
 */
export default function Betliv07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv07-title">
        <header className={styles.titleBar}>
          <h1 id="betliv07-title" className={styles.titleBarMain}>
            Deplorable Conditions
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            &quot;Deplorable condition.&quot; Those were the words used by
            Canada Dry Corporation to describe the Better Living Center on
            Opening Day of the Fair. While it is true that the Better Living
            Center became home for a number of exhibitors who found themselves
            homeless following the failure of the World of Food pavilion just
            prior to the opening of the Fair, the unfinished condition of the
            Better Living Center appears to have not been a direct result of
            the installation of the latecomers&apos; exhibits. The following
            exchange of New York World&apos;s Fair 1964-1965 Corporation memos
            and letters of correspondence, gleaned from the files of the New
            York World&apos;s Fair Corporation, help to shed some light on the
            conditions exhibitors and Fairgoers had to contend with during the
            first few months of the Fair.
          </p>

          <div className={styles.memo}>
            <p className={styles.date}>May 5, 1964</p>
            <div className={styles.metaRow}>
              <span>TO</span>
              <span>: Mr. J. J. Manning, Executive Official</span>
              <span>FROM</span>
              <span>: Mr. W. J. Hyland, Director of Safety</span>
              <span>SUBJECT</span>
              <span>: Better Living Pavilion</span>
            </div>
            <p>
              It has been brought to our attention that the above pavilion is
              completely opened to the public and is functioning without a
              Certificate of Occupancy or an Operations Permit. We have visited
              these premises twice within two days to warn them about complete
              intermingling of members of the public and construction workers
              throughout the premises.
            </p>
            <p>
              Due to the fact that no cooperation was in evidence we discussed
              this matter with Mr. Witt and Mr. Bond on Monday morning May 4th.
            </p>
            <p>
              Mr. Witt immediately advised Mr. Martin Stone, Director of
              Industrial Exhibits for the Fair Corporation, of this situation,
              and Mr. Stone arranged at once for a meeting with Mr. Edward H.
              Burge, President of the Company, who owns the Better Living
              Pavilion. This meeting was held at 4 P.M. Monday afternoon and
              was attended by Mr. Stone, Mr. Burge, Mr. Bond, Fair Corporation
              Safety Engineer, and the writer.
            </p>
            <p>
              Previous to this meeting the writer made a joint survey of the
              pavilion with Mr. Bond and Mr. Burns, a representative of the
              Insurance Carrier, in order that a complete report could be given
              to Mr. Burge at the meeting.
            </p>
            <p>
              We explained it to Mr. Burge that it was the writer&apos;s
              opinion that the entire building should be closed down until all
              construction work was completed. Mr. Burge however agreed to get
              busy immediately and take all the necessary steps to completely
              barricade the public from all work areas. This was also agreed to
              by Mr. Stone.
            </p>
            <p>
              Mr. Bond was to investigate the situation with regards to
              Certificate of Occupancy and Operations Permit.
            </p>
            <p>
              In addition to notifying Mr. Burge about barricading the work
              areas to keep members of the public out the following items were
              called to his attention with the request that they be taken care
              of at once.
            </p>
          </div>

          <div className={styles.memo}>
            <p className={styles.pageNum}>-2-</p>
            <ol className={styles.items}>
              <li>
                It is noted that the elevators were being operated by employees
                of the Allied Maintenance Corporation.
              </li>
              <li>
                Welding operations were being conducted on the roof with
                insufficient protection to the members of the public.
              </li>
              <li>
                There were no lights on the stairs leading to the roof level
                from the floor below nor was there any prevention made to same.
              </li>
              <li>
                There were no barricades across the opening of the stairway
                leading from the roof to the lower floors to prevent members of
                the public from falling into these stair openings.
              </li>
              <li>
                The restaurant entrance on the roof are by means of sliding
                door panels. There is no break in the continuity of the glass
                panels of these doors.
              </li>
              <li>
                The procedure for handling soild dishes and garbage now being
                done by restaurant employees on the open roof is decidedly
                unsanitary. This has been refered to Col. Gale of Health and
                Sanitation who advised he was aware of this situation and was
                taking the necessary corrective measures. We also advised Co.
                Gale of unsanitary food handling by concessionaires and Col.
                Gale has agreed to investigate. At present beach umbrellas now
                on the open roof, when opened, could easily be lifted over the
                guardrail and dropped to the roadway or sidewalk in a heavy
                wind storm.
              </li>
              <li>
                The projecting pipe in the cement floor near the dumb waiter on
                the open roof provides a survere hazard and should be removed.
              </li>
              <li>
                All loose canvas, lumber and other construction material now on
                the open roof should be removed or securely lashed down. The
                missing cover on the live panel boxes on the roof should be
                replaced and securely fastened.
              </li>
              <li>
                At present handrails and guardrails throughout the entire
                building appear to be blow the minimum of 36 inches measured
                vertically from the floor. This holds true on ramps and around
                mezzanine floors throughout the premises. They should be lifted
                to a height of no less than 36 inches from the floor.
              </li>
            </ol>
          </div>

          <div className={styles.memo}>
            <p className={styles.pageNum}>-3-</p>
            <ol className={styles.items} start={10}>
              <li>
                The temporary wiring and lights in the public washrooms on the
                roof and the floor below should be removed and permanent
                installation made.
              </li>
              <li>
                The temporary direction signs apparently erected by the
                exhibitors directing the public into construction areas should
                be removed and these areas barricaded as requested above.
              </li>
              <li>
                Suitable barricading should be erected around the refuse at the
                rear entrance to the building from the roadway. The entrance
                doors to the building at this location should be kept closed
                and locked at all times when not in use by construction workers
                to prohibit the public from entering the premises through these
                doors at the first floor.
              </li>
              <li>
                The broken glass panel in one of the main entrance doors should
                be repaired. NOTE: We were advised by the Pinkerton men
                stationed at these entrance doors that this glass panel was
                broken the night before, but at the time of the inspection no
                attempt has been made to remove the jaggered broken glass and
                install a new glass panel. It was also noted that two large
                pieces of broken glass from this door had been placed against
                the wall where the public could come in contact with it.
                Temporary blocking was done by putting potted plants in front
                of the broken door to keep the public away.
              </li>
              <li>
                The hexagonal shaped tile flooring in the lobby and from the
                curb to the building line should be securely fastened in place
                by proper grouting. At present these tiles are loose and keep
                projecting out forming a tripping hazard.
              </li>
              <li>
                Approved lighting should be installed over ramps leading from
                floor to floor inside the building.
              </li>
              <li>
                All construction material at present being stored in the public
                areas outside of the construction work areas should be removed
                and stored in a suitable location.
              </li>
            </ol>
            <p>
              A list of the above items were given to Mr. Burge together with
              the following list submitted by Mr. Bond as the result of a
              previous servey made by him.
            </p>
          </div>

          <div className={styles.memo}>
            <p className={styles.pageNum}>-4-</p>
            <ol className={styles.items}>
              <li>
                The machine room for the exterior elevators reached by means of
                a spiral stairway from the roof is accessible to the public.
              </li>
              <li>
                All propane and other bottled gas tanks located throughout the
                building should be removed.
              </li>
              <li>
                A supply of gasoline in an unapproved container was observed on
                the floor near the Van Display on the 4th floor.
              </li>
              <li>
                The penthouse terrace, rear section, was found loaded with
                debris (garbage).
              </li>
              <li>Temporary wiring was found in use in several locations.</li>
              <li>
                Holes and decided tripping hazards were observed at the floor
                of the entrance, passage elevator entry.
              </li>
              <li>
                A number of junction boxes, outlets and other electrical gear
                were observed exposed and protruding from floors and walls in
                public areas.
              </li>
            </ol>
            <p>
              From the above it can be seen that considerable work has to be
              done before this building can be made safe for public use.
            </p>
            <p>
              We have just received a phone call this morning Tuesday May 5th
              from Mr. Russ Mathews, in charge of building, who has advised the
              writer that he has kept a crew on all night complying with our
              recommendations and is keeping a day crew on today doing the same
              thing and has requested we visit with him before noon to check
              the progress made. This we have agreed to do.
            </p>
            <p className={styles.signoff}>
              W. J. HYLAND
              <br />
              Director of Safety
            </p>
            <p className={styles.cc}>
              WJH:bd
              <br />
              cc: Col. T .J. O&apos;Neill
              <br />
              Mr. Bond, Safety Engineer, World&apos;s Fair Corp.
              <br />
              Mr. Stone, Director of Industrial Exhibits
            </p>
          </div>

          <div className={styles.memo}>
            <div className={styles.letterHeadRow}>
              <span>
                J. J. Manning
                <br />
                Executive Official
              </span>
              <span>May 6, 1964</span>
            </div>
            <p>
              W. J. Hyland
              <br />
              Director of Safety
              <br />
              Better Living Building
            </p>
            <p>
              Supplementary to our report of May 5th on the above pavilion the
              writer today resurveyed this building accompanied by Mr. Burge,
              President of the Corporation owning the building, Mr. Campbell,
              Resident Engineer for the Company owning the building and Mr.
              Russell Mathews, Building Manager.
            </p>
            <p>
              Mr. Mathews on Mr. Burge&apos;s instruction had a crew work all
              night barricading the work areas still under construction to
              prevent the public from walking into these areas.
            </p>
            <p>
              In addition, Mr. Mathews has a crew working all day completing
              compliance with the suggestions given and hopes to have
              everything taken care of before tonight.
            </p>
            <p>
              Mr. Mathews has shut down the outside elevators and has blocked
              off the entrance to them at the ground level. He has also
              barricaded the entrance to these elevators from the roof
              promenade.
            </p>
            <p>
              On the roof he has removed all tables and all umbrellas and has
              closed all sliding door panels to keep the public off the outside
              promenade.
            </p>
            <p>
              In addition, he has placed rope barricades on the stairways from
              the roof promenade to the lower floors and has placed gummed
              paper across all glass doors and panels at eye level to break up
              the continuity of the panels as requested. The public can only
              reach the restaurant now by using the inside elevators.
            </p>
            <p>
              With regard to the soiled dishes and garbage problem mentioned in
              our report of May 4th, we have discussed this with Col. Gale who
              is fully aware of the existing conditions and is instituting
              corrective action with the Hilton Hotel people who are operating
              this restaurant.
            </p>
          </div>

          <div className={styles.memo}>
            <p className={styles.pageNum}>-2-</p>
            <p>
              Mr. Mathews advised that orders have been issued to install
              lights outlets on the stairs leading to the lower level from the
              roof. He has also issued orders to install temporary lights over
              the ramps inside the building at all floors.
            </p>
            <p>
              He has removed the temporary lights and wiring in the public
              washrooms on the roof floor and the floor below and has arranged
              permanent installation of the light fixtures. He has erected
              suitable barricades preventing the public from work areas still
              under construction and has a corp of carpenters making continuous
              checkups to replace all barricades removed by construction
              workmen.
            </p>
            <p>
              All exposed wiring outlets have been protected by placing display
              platforms over these outlets as originally intended and he is
              watching the exhibitors to see that they do not remove same.
            </p>
            <p>
              He has had his electricians go through the building and remove
              all unauthorized wiring erected by exhibitors.
            </p>
            <p>
              He has also removed all excess construction equipment and all
              construction equipment previously left exposed in the exhibitors
              areas has now been placed behind the barricade in the work area.
            </p>
            <p>
              At the ground floor he has given orders to the contractor (they
              were observed working) to secure the tile in the lobby and the
              promenade in front the building from the building line to the
              curb.
            </p>
            <p>
              Mr. Mathews has done an excellent job within 12 hours after our
              talk with Mr. Burge when we ordered this work done and with the
              follow through that he has instituted and the continuous patrol
              to replace the barricades we feel that the public is now being
              given adequate protection. This situation will however be watched
              continuously by the writer or members of his staff.
            </p>
          </div>

          <div className={styles.memo}>
            <p className={styles.pageNum}>-3-</p>
            <p>
              The broken glass panel in the main entrance door has not been
              replaced as yet, but the door has been closed off by means of
              potted plants and the Pinkerton men that are on guard at these
              doors have been instructed to see that these plants remain in
              place.
            </p>
            <p>
              In view of this beginning we feel that the unnecessary exposure
              to members of the public has been greatly reduced, but will will
              continue to check out this building at periodic intervals both
              night and day.
            </p>
            <p className={styles.signoff}>
              W. J. HYLAND
              <br />
              Director of Safety
            </p>
            <p className={styles.cc}>
              WJH:bd
              <br />
              cc: Col. O&apos;Neill, Charge of Security
              <br />
              Mr. Stone, Director of Industrial Exhibits
              <br />
              Mr. Bond, Safety Engineer, World&apos;s Fair Corp.
            </p>
          </div>

          <div className={styles.memo}>
            <p className={styles.date}>May 26, 1964</p>
            <p>
              Mr. Rex Reichert
              <br />
              Rex Reichert Associates, Inc.
              <br />
              11 North Madison Street
              <br />
              Boyerstown, Pennsylvania
            </p>
            <p>Dear Mr. Reichert:</p>
            <p>
              In response to your letter of May 21, 1964, and also to our
              telephone conversation which dealt with the same topic, namely
              the present condition of the Better Living Center, as I mentioned
              to you during our telephone call, there are very great problems
              inherent in effectively coordinating and installing in excess of
              125 exhibitors in a building of the nature and size of ours.
              During the first several weeks of operation, conditions
              throughout the building were somewhat hectic due to the
              continuous necessity of installing major exhibits, even though
              the building itself had for some time been completely
              constructed. During our conversation, I mentioned to you that
              this condition was vastly improved as by this date the majority
              of exhibitors are installed and the building has, in the main,
              taken on an aspect of complete integration. More specifically,
              the third floor containing the Hilton International Restaurant,
              Marco Polo Club and the Women&apos;s Headquarters has been
              completed since the opening date and is, in our opinion, a very
              attractive asset. The third floor is now substantially complete
              with the exception of the Whirlpool miracle kitchen of which the
              final assembly is being made behind an enclosure and should be
              operable by the end of this week. The other major exhibitors on
              this floor such as Hershey, Canada Dry, Sunshine and Borden&apos;s
              with their musical production featuring Elsie the Cow have been
              completed and operating for some time. Last Friday evening the
              Art Gallery featuring Four Centuries of American Masterpieces,
              under the joint sponsorship of the Skowhegen School of Painting
              and Sculpture and the Better Living Center, was officially opened
              to the public.
            </p>
          </div>

          <div className={styles.memo}>
            <div className={styles.letterHeadRow}>
              <span>
                Mr. Rex Reichert
                <br />
                Rex Reichert Associates, Inc.
              </span>
              <span>
                May 26, 1964
                <br />
                Page 2
              </span>
            </div>
            <p>
              The second mezzanine, which during the first few weeks of
              operation contained some small incomplete exhibits and exhibitors
              who were obnoxious and noisy, has been reorganized and the
              undesirable elements either removed or repositioned so that the
              overall traffic flow and quality of exhibition is at a
              satisfactory level.
            </p>
            <p>
              Several exhibits on the second floor in the vicinity of Crystal
              Palace have been rearranged and the area to which you made
              specific reference in your letter has been closed down and is
              presently being completely redesigned so that it will complement
              the Crystal Palace area. The Palace itself is undergoing a
              moderate reorganization and design in an effort to integrate all
              the elements more fully and give greater exposure to exhibitors
              through improved traffic flow and substantially increased seating
              and standing capacity so that the area can accommodate a larger
              audience. It is our belief that the Crystal Palace will be one of
              the outstanding features of the building, if not the entire Fair.
              I think the attendance in the area bears out our feelings.
            </p>
            <p>
              The first mezzanine is substantially completed and now contains a
              very attractive bar and food vending area which is integrated
              with the very fine Taylor Provisions exhibit.
            </p>
            <p>
              On the first floor the Dorothy Draper Dream House has been
              completed and in operation for some time and with the exception
              of one or two very minor exhibits, this floor is completed and we
              feel it is very attractive. The Loewy-Smith organization is
              presently preparing a proposal for a face-lifting of the lobby
              and exterior of the building which will give it a great deal of
              life and a vastly improved general appearance.
            </p>
            <p>
              I hope this recap of our telephone conversation of last week
              gives you sufficient understanding of the present condition of
              the building. I would like to reassure you that we are making a
              continuous effort to create a building as outstanding as
              possible, both for the satisfaction of our many
            </p>
          </div>

          <div className={styles.memo}>
            <div className={styles.letterHeadRow}>
              <span>
                Mr. Rex Reichert
                <br />
                Rex Reichert Associates, Inc.
              </span>
              <span>
                May 26, 1964
                <br />
                Page 3
              </span>
            </div>
            <p>
              fine exhibitors and for the general public so that it is a most
              inviting place.
            </p>
            <p>
              If you have any further inquiries, please get in contact with me
              or Mr. Mathews who is the building manager.
            </p>
            <p className={styles.signoff}>
              Yours sincerely,
              <br />
              <br />
              RICHARD G. BURGE
              <br />
              President, Better Living Center
            </p>
            <p className={styles.cc}>
              RGB:mb
              <br />
              bcc: Martin Stone
            </p>
          </div>

          <div className={styles.memo}>
            <Image
              src="/images/betliv07/canada-dry-letterhead.gif"
              alt="Canada Dry Letterhead"
              width={560}
              height={137}
              className={styles.letterhead}
              unoptimized
            />
            <p className={styles.date}>October 9, 1964</p>
            <p>
              Mr. Robert Moses
              <br />
              New York World&apos;s Fair Corporation
              <br />
              450 Seventh Avenue
              <br />
              New York, New York
            </p>
            <p>Dear Mr. Moses:</p>
            <p>Canada Dry is an exhibitor in the Better Living Center.</p>
            <p>
              Due to the poor and unfinished condition of the Better Living
              Center on opening day of the Fair, I telephoned your Operations
              Office to determine whether or not the Better Living Center had
              been issued an operating permit by the Fair Corporation. I was
              advised that such a permit had not been issued and that a
              Certificate of Occupancy was not on file. When I requested
              written confirmation of this information I was referred to your
              Legal Department. A Mr. Howard Vogel of the Department, stated
              that he could not give out any information concerning Operating
              Permits without a written request from Canada Dry Corporation.
            </p>
            <p>
              By letter dated April 27th, 1964, Mr. J. W. Reilly, Vice
              President and Secretary of Canada Dry, wrote to Mr. Vogel to
              determine if a permit had been applied for, and if so, whether it
              had been approved or disapproved. We did not receive a reply to
              this letter.
            </p>
            <p>
              On July 9th, 1964, we again wrote to Mr. Vogel and requested the
              same information. Mr. Vogel did not acknowledge receiving this
              letter nor did he reply.
            </p>
            <p>
              On August 27th, 1964, a third letter was sent to Mr. Vogel,
              Registered Mail, and to date we have not received a reply.
            </p>
            <p>
              As you are no doubt aware, Canada Dry and other exhibitors in the
              Better Living Center were unable to open their exhibits on time,
              due to the deplorable condition of the building. Photographs
              taken well after the opening date clearly show these conditions.
            </p>
          </div>

          <div className={styles.memo}>
            <div className={styles.letterHeadRow}>
              <span>
                <u>Letter To: Mr. Robert Moses</u>
              </span>
              <span>
                <u>Page 2.</u>
              </span>
              <span>
                <u>October 9, 1964</u>
              </span>
            </div>
            <p>
              Under your World&apos;s Fair Regulations, Part 3, Page 0-1,
              paragraph 1(a), participants are required to obtain an Operating
              Permit. Paragraph 1(b) lists conditions precedent under which an
              Operating Permit will issue. Canada Dry Corporation again
              requests to know the date the Better Living Center was certified
              by the Fair Corporation as to a &quot;Certificate of
              Occupancy&quot; and a &quot;Determination that the project is
              ready for operation,&quot; as required under paragraphs 1(b)1 and
              6 respectively, of the above regulations covering the issuance of
              an Operating Permit. We also desire to know the dates of any
              prior applications and the reasons they were disapproved.
            </p>
            <p>
              I am certain you will agree that information of this nature
              should be a matter of public record. Your Legal Department&apos;s
              handling of this simple request, or I should say it&apos;s
              ignoral of this request does not reflect the high standards which
              I am sure you require and have worked so hard to maintain.
            </p>
            <p>
              I trust that we will receive a reply from someone in your
              organization prior to the closing of the Fair on October 18th,
              1964.
            </p>
            <p className={styles.signoff}>
              Very truly yours,
              <br />
              <br />
              CANADA DRY CORPORATION
              <br />
              <br />
              E. P. Hartnett, Ass&apos;t Director
              <br />
              of Personnel and Public Relations
            </p>
            <p className={styles.cc}>
              EPH:lm
              <br />
              CC: Mr. A.W. Walz
              <br />
              Mr. M.W. McCaffery
            </p>
            <p className={styles.source}>
              Source (All Document Reproductions this Page): New York
              World&apos;s Fair 1964-1965 Corporation Records,
              <br />
              Manuscripts and Archives Division,{" "}
              <em>The New York Public Library</em>,
              <br />
              Astor, Lenox and Tilden Foundations
              <br />
              Reproduced here courtesy of <em>The New York Public Library</em>,
              with permission
              <br />
              May <u>not</u> be reproduced without written consent of{" "}
              <em>The New York Public Library</em>
            </p>
          </div>

          <hr className={styles.rule} />

          <figure className={styles.figure}>
            <Image
              src="/images/betliv07/canada-dry-exhibit.jpg"
              alt="Canada Dry Display"
              width={270}
              height={400}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Canada Dry Exhibit in <em>less</em> Deplorable Conditions!
            </figcaption>
            <p className={styles.source}>
              SOURCE: Photo presented courtesy Bill Cotter collection © 2010
              Bill Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
              <u>fabulous</u> collection of World&apos;s Fair photographs at
              his website{" "}
              <a
                href="http://www.worldsfairphotos.com/"
                target="_blank"
                rel="noreferrer"
              >
                WorldsFairPhotos.com
              </a>
              .
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv06"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv08"
      />
    </>
  );
}
