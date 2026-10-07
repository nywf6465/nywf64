import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Pavilion and Exhibit — Greyhound — nywf64.com",
  description:
    "The Greyhound Pavilion and Circle Theater exhibit at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  legend,
  source,
  bordered = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  legend?: ReactNode;
  source?: string;
  bordered?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      <span className={bordered ? styles.photoFrame : styles.photoFramePlain}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      {legend ? <div className={styles.legend}>{legend}</div> : null}
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      {source ? <p className={styles.source}>{source}</p> : null}
    </figure>
  );
}

/**
 * Greyhound — The Pavilion and Exhibit.
 * Body from legacy greyhound07.html (Marketing Letter No. 4 + Business Screen).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Typos preserved: “many now ask”; “wich”; “whose interest are”; “considerable more”.
 */
export default function Greyhound07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <article className={styles.article} aria-labelledby="greyhound07-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound07-title" className={styles.titleBarMain}>
            The Pavilion and Exhibit
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound07/greyhound05.jpg"
            alt="Greyhound Pavilion Artist's Concept"
            width={600}
            height={368}
          />

          <h2 className={styles.sectionTitle}>
            GREYHOUND EXHIBIT AT THE WORLD&apos;S FAIR
          </h2>

          <p>
            With its Greyhound at the World&apos;s Fair, Inc. and the location
            in the Transportation Section of the New York World&apos;s Fair
            1964/1965, The Greyhound Corporation has an excellent opportunity to
            &quot;sell&quot; to a good percentage of the anticipated 80 million
            people who are expected to attend the two-year New York World&apos;s
            Fair, the virtues of bus travel and the over-all services and
            subsidiaries of The Greyhound Corporation. In searching for the
            techniques which would be most valuable in the transmission of this
            basic message to the Fair audience, a great many factors were
            considered, and it was decided that a Greyhound World&apos;s Fair
            Exhibit would provide a &quot;showcase&quot; for the over-all
            Greyhound story.
          </p>
          <p>
            In addition to the means available to us at our numerous terminals,
            travel bureaus and agents throughout the country, as well as through
            our TV shows in 56 major markets and 300 newspapers, aboard GWF
            equipment, GWF tour guides and GWF information booths, the Fair-goer
            will also be invited into the Greyhound Exhibit Pavilion through the
            use of directional signing at the front of the building. Upon
            entering the Exhibit, the Fair-goer will be guided along a series of
            attractive descriptive panels which form a corridor some 30 feet
            long. The panels themselves will describe the scope of the Greyhound
            Corporation, its subsidiaries and services. Having negotiated this
            area, the Fair-goer will be guided through an entrance into the
            Circle Theater section.
          </p>

          <Photo
            src="/images/greyhound07/greyhound07.jpg"
            alt="Cooridor of Descriptive Panels"
            width={600}
            height={307}
            bordered={false}
            caption={
              <span className={styles.captionEm}>
                30-foot long Corridor of Descriptive Panels leads to Circle
                Theater entrance. Information Circle kiosks can be seen against
                the rear wall of the Pavilion.
              </span>
            }
          />

          <p>
            There are approximately 60 people in the group that the Fair-goer
            finds himself in, who have been conducted into a triangular area
            bound on two sides with 12 foot walls and appropriately railed in.
            After about one minute, a voice instructs the audience to keep their
            eyes on the wall before them. As the narration continues, the
            audience is given a description of a brief interesting history of
            ground transportation, both orally and through the use of an
            exciting series of colorful transparencies and projections. As the
            audience slowly revolves, this description then culminates in a rear
            projected, color sound film which pans down closer and closer to a
            Greyhound bus traveling through the countryside.
          </p>
          <p>
            As the camera virtually reaches the bus itself, the area beyond the
            walls is suddenly filled with a special stereo sound effect and full
            dimension color sound motion picture of the experience of being in
            the bus itself. For three minutes the audience shares with the bus
            passengers the intimacy and pleasure of bus travel, &quot;seeing
            America close-up.&quot; As the film progresses and then goes dark,
            the audience has very slowly revolved, and is once again reached
            through voice narration, which proceeds to describe the large,
            lighted map of the United States and Canada in front of which the
            audience now passes; seeing as they go all of the cross-country,
            regional and local Greyhound bus routes which criss-cross the United
            States and Canada. This experience lasts approximately one and a
            half minutes. In his closing remarks, the narrator thanks the
            audience for their interest and invites them to step to the
            Information Counter, which will be immediately to their right after
            they have exited from the theater into the Exhibit Pavilion Area.
          </p>
          <p>
            This exciting and highly communicative show is made possible through
            the unprecedented use of a 38 foot diameter turntable as the moving
            Circle Theater. All of the mechanical apparatus and projection
            equipment are self-contained and are designed so as to require a
            minimum of maintenance.
          </p>

          <Photo
            src="/images/greyhound07/greyhound06.jpg"
            alt="Floorplan"
            width={600}
            height={219}
            bordered={false}
            legend={
              <>
                <span className={styles.legendItem}>
                  Greyhound Pavilion Exhibit Area Floorplan
                </span>
                <span className={styles.legendItem}>
                  A- Corridor of Descriptive Panels
                </span>
                <span className={styles.legendItem}>B- Circle Theater</span>
                <span className={styles.legendItem}>C- Information Circle</span>
                <span className={styles.legendItem}>
                  D- Lady Greyhound Circle Area
                </span>
              </>
            }
          />

          <p>
            Having thus been instructed in the very core of the Greyhound story,
            the Fair-goer many now ask specific questions about travel and costs
            or any subsidiary services at one of several Information Circles.
            This Information Circle Area and its surrounding environment is
            designed in excellent contemporary taste and is provided with
            time-saving devices for the people staffing the area. These devices
            include a simultaneous projection screen, which permits the attendant
            to either hand write an answer to a particular question on a lighted
            panel at the counter, or place in this panel a pre-printed set of
            information which is then immediately cast upon an overhead umbrella
            screen, visible to passers-by and, of course, to the member of the
            audience who has provoked this particular answer. All of this is
            geared toward developing and sustaining the image of The Greyhound
            Corporation as a fast, accurate and courteous service organization
            whose interest are customer-oriented.
          </p>
          <p>
            Specifically beamed at the growing leisure time travel market,
            consisting of those who are older and desire tours both independent
            and escorted, we provide at the left of the Exhibit Pavilion the
            Lady Greyhound Circle Area, where people can relax and watch a 12
            minute color sound movie of actual Greyhound tours. During the past
            year, we have produced these 12 minute films covering selected
            sections of the USA, Canada and Mexico.
          </p>
          <p>
            This is a smartly styled area which utilizes actual Greyhound bus
            seats set among planters, dividers, etc. The seating arrangement is
            designed so as to permit the seated audience to view two rear
            projection-type screens which will take them through various
            Greyhound tours through self-operated continuous projection with
            selected breaks to complete the showing or for other events.
          </p>
          <p>
            The screens roll back away and there is a small Special Events Stage
            which will, at predetermined times during the day, present such
            interesting events as &quot;Lady Greyhound Appearances,&quot; and
            other special cooperative event programs as will be determined prior
            to and during the Fair.
          </p>
          <p>
            From this point, the Fair-goer has the alternate opportunities of
            stopping at the Post House Restaurant for food or drink or exiting
            from the pavilion.
          </p>
          <p>
            All in all, each member of the audience will have been treated
            cordially in an air-conditioned, smartly modern styled exhibit and
            will have developed an understanding of The Greyhound Corporation
            which will create a lasting impression and will influence their
            future choice of a transportation medium.
          </p>
          <p>
            Statistically, the exhibit can handle as many as 1,200 people per
            hour through the theater alone, and, of course, considerable more
            should they choose to look at the panel story, seek information,
            shop at the newsstand, relax in the Lady Greyhound Leisure Circle or
            have a meal at the most modern Post House Restaurant.
          </p>
          <p className={styles.source}>
            SOURCE: Greyhound Corporation, New York World&apos;s Fair Marketing
            Information Letter No. 4, January 20, 1964
          </p>

          <hr className={styles.sectionRule} />

          <h2 className={styles.sectionTitleLarge}>
            Across the Land in CinemaScope
          </h2>
          <p className={styles.sectionSub}>
            from the Golden Gate to Manhattan&apos;s Towers by Greyhound
          </p>

          <Photo
            src="/images/greyhound07/greyhound08.jpg"
            alt="CinemaScope scene from the Circle Theater film"
            width={600}
            height={383}
            bordered={false}
            caption={
              <span className={styles.captionEm}>
                A scene from the all-too-brief, four-minute CinemaScope color
                picture wich carries viewers on A Greyhound trip from California
                to New York and is the feature attraction in the Circle Theater
                (see sketch below).
              </span>
            }
          />

          <div className={styles.twoCol}>
            <div className={styles.twoColCopy}>
              <p>
                <span className={styles.dropCap}>B</span>
                EHIND THE WIDE FACADE of the Greyhound Pavilion, lobby film
                showings of travel pictures entertain waiting bus riders but the
                main attraction is in the turntable &quot;Circle Theater&quot;
                which alternates illuminated transparencies, an animated map and
                synchronized slide showings on multiple screens with{" "}
                <em>the main feature: </em>a four-minute 35mm CinemaScope film
                journey from coast-to-coast, produced by Fred Niles
                Communications Centers, Inc. The film carries its viewers from
                the Golden Gate to the Grand Canyon (spectacular shots) --
                through the Midwest and on to the towers of Manhattan.
              </p>
              <p>
                The turntable show is fast-paced, there&apos;s no long wait as
                four synchronized projectors show slides of travel history, give
                way to animated U.S. map. The &quot;audio&quot; then cites
                advantage of bus travel and guests are told about tours. But the
                &quot;big show&quot; is that four-minute CinemaScope film.
              </p>
            </div>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound07/greyhound09.jpg"
                alt="Circle Theater Entrance"
                width={300}
                height={506}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </div>

          <Photo
            src="/images/greyhound07/greyhound10.jpg"
            alt="Theater Floorplan"
            width={600}
            height={487}
            bordered={false}
            caption={
              <>
                CIRCLE THEATER DESIGN FEATURES:
                <br />
                (A) Transparencies show travel history. (B) &amp; (C) Projected
                scenes and aerial view are featured
                <br />
                (D) Screens for the synchronized slides.
              </>
            }
            source="Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon Collection"
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound06"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound08"
      />
    </>
  );
}
