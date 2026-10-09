import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevup05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Progress Report — Seven-Up — nywf64.com",
  description:
    "Construction progress report for the 7-Up International Sandwich Gardens — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up — Progress Report.
 * Body from legacy sevup05.html (7up Leader construction progress).
 *
 * Stack: hero → SevupNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sevup05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevup05-title">
        <header className={styles.titleBar}>
          <h1 id="sevup05-title" className={styles.titleBarMain}>
            Progress Report
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.masthead} aria-hidden="true">
            <span className={styles.mastheadProgress}>progress</span>{" "}
            <span className={styles.mastheadReport}>report</span>
          </p>
          <p className={styles.deck}>
            the 7-Up International Sandwich Gardens grow
          </p>

          <figure className={styles.figureCentered} style={{ maxWidth: 426 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup05/sevup21.jpg"
                alt="7-Up International Sandwich Gardens construction site"
                width={426}
                height={235}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              The 7-Up International Sandwich Gardens are shaped by 143 tons of
              specially-fabricated steel, trucked from Bethlehem, Pa., by
              police-escorted convoy. At right, 80-foot girders from legs of the
              7-Up clock tower, rising above arches of dining shells in which
              fairgoers will enjoy 7-Up with international sandwiches and
              entertainment. In domed Fair Pavilion (left), daily special events
              will be featured.
            </figcaption>
          </figure>

          <div className={styles.columns}>
            <div>
              <p>
                In the construction field office on the site of the 7-Up
                International Sandwich Gardens, files of blueprints stamped
                COMPLETED grow thicker, as April 22 draws near.
              </p>
              <p>
                April 22! Opening day of the 1964-1965 New York World&apos;s Fair,
                where the 7-Up International Sandwich Gardens will provide an
                oasis of international sandwiches and entertainment for the
                70,000,000 visitors the Fair will attract.
              </p>
              <p>
                Early phases of construction offered little visible evidence of
                progress. There was plenty of activity, though -- surveying,
                grading, running underground utility connections, soil testing.
              </p>
              <p>
                To reach solid footing in the filled-in marsh of Flushing Meadow,
                61 pilings, each 80-feet long, were driven in clusters. A 20-ton
                concrete cap was poured over each cluster.
              </p>
              <p>
                The 143-ton steel framework they support was fabricated at
                Bethlehem, Pa., and delivered by a six-truck convoy. Police escort
                was required to maneuver the 80-foot sections of the 7-Up clock
                tower through traffic. As cranes lifted steel into place, progress
                became visible.
              </p>
              <p>
                The 107-foot 7-Up clock tower rises above the Gardens&apos;
                two-story central building and the arches of 25-foot-square
                dining shells grouped around it. Glass walls of the building&apos;s
                25&apos; x 75&apos;
              </p>
            </div>
            <div>
              <p>
                upper level, housing the 7-Up International Room for 7-Up
                Developers and special guests, are being installed.
              </p>
              <p>
                A 25&apos; x 75&apos; observation deck, between the upper level
                and the tower, extends the building&apos;s lower level to an area
                25&apos; x 150&apos;. There, international sandwiches will be
                prepared and served.
              </p>
              <p>
                Fiberglass, in colorful patterns, soon will roof the dining
                shells, where visitors will enjoy 7-Up and international
                entertainment as they dine.
              </p>
              <p>
                Hundreds of items used in constructing and equipping the 7-Up
                International Sandwich Gardens are specially designed to project
                the image of 7-Up quality and international popularity.
              </p>
              <p>
                As construction is completed, landscaping will be started.
                Plantings will be placed in earth from the many lands where 7-Up
                is famous.
              </p>
              <p>
                John Furnas, general manager for Seven-Up New York World&apos;s
                Fair Associates, confidently states that April 22 will find the
                7-Up International Sandwich Gardens ready to welcome your
                customers with hospitality they&apos;ll enjoy, appreciate and
                remember as one of their most pleasant experiences at the
                1964-1965 New York World&apos;s Fair.
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <p className={styles.rowCaption}>
              Two-story building, hub of the 7-Up International Sandwich Gardens,
              awaits installation of glass walls. On top floor will be the 7-Up
              International Room, for 7-Up Developers and special guests. On first
              floor and in area roofed by a 75-foot observation deck, 7-Up
              international sandwiches will be prepared and served. Structure seen
              through framework is neighboring duPont pavilion. Between right
              corner of building and the tower, which will feature the
              world-famous 7-Up trademark, is the General Electric pavilion.
            </p>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup22.jpg"
                  alt="Two-story hub building under construction"
                  width={337}
                  height={198}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <div className={styles.pair}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup23.jpg"
                  alt="7-Up clock tower steel skeleton"
                  width={316}
                  height={212}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                The 72-ton steel skeleton of the 7-Up clock tower rises to
                commanding height of 107 feet. To obtain solid footing on the
                filled-in Flushing Meadow site of the Fair, 61 pilings were driven
                80-feet deep, with 20-ton concrete caps poured over each cluster
                of pilings. Crown-shaped objects in foreground are fountains of
                Hoover Promenade, a section of the main concourse leading from the
                Unisphere to the Fountain of the Planets. The 7-Up International
                Sandwich Gardens front on the concourse, and are bordered on one
                side by Avenue of Europe.
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup24.jpg"
                  alt="Close-up of tower sphere skeleton"
                  width={234}
                  height={294}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Skeleton of 21-foot sphere suspended in tower will be encased in a
                plastic shell bearing four giant replicas of the 7-Up trademark.
                Five-foot clock faces and clock mechanism will be mounted in upper
                sphere. Ten 15-foot replicas of the 7-Up clock tower are being
                built at Fair entrances by The Watchmakers of Switzerland. The
                7-Up clock and replicas, regulated by a master chronometer, will
                record &quot;Official World&apos;s Fair Time.&quot;
              </figcaption>
            </figure>
          </div>

          <div className={styles.shellRow}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup25.jpg"
                  alt="Dining shell arches and steps"
                  width={320}
                  height={209}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <p className={styles.shellCaption}>
              Arches frame workmen installing steps leading to second-floor
              observation deck and the 7-Up International Room. fiberglass shells
              will span arches, to form dining areas 25-feet square. On lower
              level of central building, diners will select sandwiches from menu
              representing four world areas. Group of shells at entrance will
              feature displays portraying the international popularity of 7-Up.
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: <em>the 7up Leader</em>, Volume V No. 1, January/February
            1964
          </p>

          <hr className={styles.rule} />

          <p className={styles.sectionDeck}>it&apos;s World&apos;s Fair time . . .</p>
          <h2 className={styles.sectionHeadline}>
            &quot;Let&apos;s Meet Under the 7-Up Clock&quot;
          </h2>

          <div className={styles.towerStack}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup26.jpg"
                  alt="Looking up into the 7-Up tower"
                  width={414}
                  height={339}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Race against time is symbolized by unfinished clock frame atop
                7-Up International Sandwich Gardens tower. The race is won, as
                John Furnas (right, below), general manager for Seven-Up New York
                World&apos;s Fair Associates, sees clock faces installed, with
                Peter Hugentobler, Watchmakers of Switzerland official,
                supervising.
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup27.jpg"
                  alt="Clock face installation"
                  width={416}
                  height={525}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <div className={styles.columns}>
            <div>
              <p>
                It&apos;s Fair time! Time to join with New York World&apos;s Fair
                visitors from around the world, as they say{" "}
                <em>&quot;Let&apos;s meet under the 7-Up Clock.&quot;</em>
              </p>
              <p>
                You&apos;ll hear it said in the many languages of the many lands
                where 7-Up is a famed and favorite international symbol of
                enjoyment. Make the 7-Up International Sandwich Gardens your
                rendezvous, too. It will be the international hub of Fair activity
                for visitors coming from around the national and around the world
                in the spirit of the Fair&apos;s theme{" "}
                <em>&quot;Peace through Understanding.&quot;</em>
              </p>
              <p>
                In the 7-Up International Sandwich Gardens, the race against time
                -- the frantic, all-out final drive to be ready for opening day --
                has been won. The 7-Up tower clock&apos;s four faces arrived in
                time to mark the last two weeks of the countdown to opening day.
              </p>
              <p>
                Landscape architects moved in, and &quot;spring&quot; came to the
                7-Up Gardens&apos; site at the corner of the Avenue of Europe and
                Hoover Promenade. With the man-made spring came the first public
                guests to enjoy the hospitality of the 7-Up International Sandwich
                Gardens at a special preview.
              </p>
              <p>
                Preview visitors were members and distinguished guests of the
                Missouri Society of New York, including Governor John M. Dalton,
                U. s. Senator Stuart Symington, Congressman Edward Long and other
                dignitaries from Missouri, home of The Seven-Up Company.
              </p>
            </div>
            <div>
              <p>
                The Visount Hinchingbrooke, heir to the title Earl of Sandwich,
                jetted from England to attend this and the Fair opening as
                &quot;sandwich consultant&quot; to the 7-Up International Sandwich
                Gardens.
              </p>
              <p>
                St. Louis Explorer Scout Charles Smith, at the Fair to represent
                7-Up at the Boy Scout Pavilion&apos;s opening, doubled as
                representative for the nation&apos;s 5,000,000 Scouts in
                presenting an official World&apos;s fair neckerchief to Governor
                Dalton. Flagpoles for the Scout&apos;s Avenue of Flags were
                contributed by The Seven-Up Company.
              </p>
              <p>
                Seven-Up was prominent in events formally opening the Fair,
                highlighted by the opening day parade.
              </p>
              <p>
                Dominating the parade, seen on network television, was the 7-Up
                stilt-walker, costumed to create a 20-foot replica of the 7-Up
                tower. At the base of this spectacle capered two midget
                international chefs and a giant animated 7-Up bottle. Next came 38
                marchers bearing signs which spelled &quot;Meet you under the 7-Up
                clock&quot; and &quot;7-Up International Sandwich Gardens.&quot;
              </p>
              <p>
                An estimated 250,000 opening-day visitors applauded the 7-Up
                paraders, then became the first among millions who will suggest,
                &quot;Let&apos;s meet under the 7-Up clock.&quot; It&apos;s fair
                time!
              </p>
            </div>
          </div>

          <figure className={styles.figureCentered} style={{ maxWidth: 364 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup05/sevup28.jpg"
                alt="Chuck Smith and Howard Ridgway"
                width={364}
                height={260}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Being briefed for role as 7-Up representative at Fair events, St.
              Louis Explorer Scout Chuck Smith views earth sent by 7-Up Developers
              in 47 lands for 7-Up International Sandwich Gardens &quot;ground
              uniting.&quot; Howard Ridgway, The Seven-Up Co. vice president, and
              president of Seven-Up Export Corp., briefs Smith, who took part in
              opening of Scouts&apos; Avenue of Flags. Flagpoles were presented by
              The Seven-Up Co.
            </figcaption>
          </figure>

          <div className={styles.floatBox}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup05/sevup29.jpg"
                  alt="Installation of dining shell roofs"
                  width={416}
                  height={503}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Perfect fit! Arrival of pre-fabricated fiberglass roofs for dining
                shells marked a milestone in race to meet opening day. Their
                installation put the 7-Up Gardens &quot;under roof.&quot;
              </figcaption>
            </figure>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume V No. 2, March/April 1964
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sevup04"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup06"
      />
    </>
  );
}
