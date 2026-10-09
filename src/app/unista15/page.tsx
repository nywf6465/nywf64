import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista15.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "After the Fair — United States — nywf64.com",
  description:
    "Timeline of the United States (Federal) Pavilion after the 1964/1965 New York World’s Fair — nywf64.com.",
};

function TimelineYear({
  year,
  showStem = true,
  children,
}: {
  year: string;
  showStem?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={styles.timelineEntry} aria-label={year}>
      <div className={styles.yearCol}>
        <div className={styles.yearBadge}>{year}</div>
        {showStem ? <div className={styles.yearStem} aria-hidden="true" /> : null}
      </div>
      <div className={styles.entryContent}>{children}</div>
    </section>
  );
}

/**
 * United States Pavilion — After the Fair (timeline epilogue).
 * Body from legacy unista15.html.
 */
export default function Unista15Page() {
  return (
    <>
      <section className={styles.hero} aria-label="United States Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unistaoverview/hero-banner.jpg"
            alt="United States Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnistaNavChrome />

      <article className={styles.article} aria-labelledby="unista15-title">
        <header className={styles.titleBar}>
          <h1 id="unista15-title" className={styles.titleBarMain}>
            After the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <TimelineYear year="1963">
            <figure className={styles.figure}>
              <Image
                src="/images/unista15/us47.jpg"
                alt="Cover - US Science Pavilion Final Report"
                width={200}
                height={259}
                className={`${styles.photoImg} ${styles.photoPlain}`}
                unoptimized
              />
            </figure>
            <p className={styles.maroon}>
              Spring. While the steel framework begins to rise at the Flushing Meadows site of the
              Federal Pavilion for the 1964-1965 New York World&apos;s Fair, the
              Commerce Department issues their final report on Federal participation
              at the 1962 Seattle World&apos;s Fair. They conclude that construction
              of a permanent pavilion rather than a temporary exhibit hall
              has many benefits. Indeed, the U.S. Science Pavilion of the Seattle
              Fair is about to become the <em>Pacific Science Center</em> —
              the crown jewel of Seattle&apos;s restored World&apos;s Fair site.
            </p>
            <div className={styles.quoteBox}>
              <p className={styles.quoteCaption}>
                U.S. Science Exhibit, Seattle World&apos;s Fair, Final Report, March 15, 1963
              </p>
              <p className={styles.quoteBody}>
                &quot;One of the great permanent benefits of the U.S. Science Exhibit [at the
                Seattle World&apos;s Fair] was the Pavilion, which ... cost only slightly
                more than a temporary structure. Since there are so many worthy
                purposes which can be aided by permanent construction, it seems
                folly to waste money on temporary exhibit buildings of no residual
                value. It is strongly recommended that careful consideration
                should be given in the future to the advantages of a permanent
                exhibit structure.&quot;
              </p>
            </div>
          </TimelineYear>

          <TimelineYear year="1965">
            <p className={styles.maroon}>
              Summer. The &quot;Mayor&apos;s Committee&quot; submits a recommendation suggesting which World&apos;s
              Fair structures should remain in Post-Fair Flushing Meadows Park.
              They are bound by a guideline that says <em>&quot;buildings not
              useful for Park or closely related purposes do not belong in
              Flushing Meadow.&quot;</em> The Federal Pavilion is <em>not</em> on their list.
            </p>
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                Post-Fair Engineering Report - July 25, 1965
              </p>
              <Image
                src="/images/unista15/farefair49.jpg"
                alt="Post-Fair Engineering Report"
                width={300}
                height={227}
                className={`${styles.photoImg} ${styles.photoPlain}`}
                unoptimized
              />
            </figure>
            <div className={styles.quoteBox}>
              <p className={styles.retentionHeading}>
                &quot;The Mayor&apos;s Committee&quot; recommends these structures for retention in Post-Fair Flushing Meadows Park
              </p>
              <ul className={styles.retentionList}>
                <li>PERMANENT BUILDINGS FROM THE 1939-1940 WORLD&apos;S FAIR
                  <ul>
                    <li><strong>The City Building</strong></li>
                    <li><strong>The State Amphitheater</strong></li>
                    <li><strong>The Boathouse</strong></li>
                  </ul>
                </li>
                <li>BUILDINGS BUILT BY THE CITY OR FAIR FOR THE 1964-1965 WORLD&apos;S FAIR
                  <ul>
                    <li><strong>The Hall of Science</strong></li>
                    <li><strong>The Administration Building of the Queens Botanical Garden</strong></li>
                    <li><strong>The Singer Bowl</strong></li>
                    <li><strong>The Administration Building</strong></li>
                    <li><strong>The Post Office Building</strong></li>
                    <li><strong>The Entrance Building</strong></li>
                    <li><strong>The Maintenance Building</strong></li>
                    <li><strong>The Press Building</strong></li>
                  </ul>
                </li>
                <li>BUILDINGS BUILT BY EXHIBITORS
                  <ul>
                    <li><strong>The Unisphere</strong></li>
                    <li><strong>The Heliport</strong></li>
                    <li><strong>The World&apos;s Fair Marina</strong></li>
                    <li><strong>The New York State Building</strong></li>
                    <li><strong>The Greyhound Building</strong></li>
                    <li><strong>The Ferris Wheel</strong></li>
                    <li><strong>The Japanese Wall</strong></li>
                  </ul>
                </li>
              </ul>
            </div>
          </TimelineYear>

          <TimelineYear year="1967">
            <p className={styles.maroon}>
              Summer. A restored Flushing Meadows Corona Park is returned to the City of New York following
              demolition of the Fair. The Federal Pavilion survives the wreckers.
              The U.S. has built the pavilion as a permanent structure, driving
              2,300 piles into the old marshland of Flushing Meadows to insure
              a stable building that will last indefinitely (engineering studies
              a decade from now will indicate the structure is &quot;solid
              and stable&quot;). Although the building has no tenant, residual
              use for a $10 million, fully equiped structure can <em>certainly</em>
              be found. The exhibits have been removed but the building hasn&apos;t
              changed much otherwise since the day the Fair closed. Display
              cases, auditorium seats, movie screens and other fixtures remain
              undisturbed. Interestingly, the Federal Government retains the
              title to the building while other remaining World&apos;s Fair structures
              have been donated to the City and Parks Department.
            </p>
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                The Federal Pavilion in the restored Flushing Meadows Corona Park in June, 1967
              </p>
              <Image
                src="/images/unista15/us12.jpg"
                alt="Federal Pavilion - June 1967"
                width={400}
                height={427}
                className={styles.photoImg}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: Copyright 2001, Charles Aybar, Ph.D., All Rights Reserved
              </p>
            </figure>
          </TimelineYear>

          <TimelineYear year="1971">
            <p className={styles.maroon}>
              Summer. It was hoped that the former Federal Pavilion would be converted to a community
              college or some sort of cultural or recreational facility for
              Flushing Meadows Corona Park by now. But all plans have failed
              due to lack of financing. The old pavilion has been vacant for
              nearly six years but remains in remarkably good condition.
            </p>
            <div className={styles.quoteBox}>
              <p className={styles.quoteCaption}>Inside the Federal Pavilion, Summer 1971</p>
              <p className={styles.quoteBody}>
                &quot;Back in the summer of 1971, the operator of the renovated NYS Pavilion
                (then converted into a roller rink), in which I worked, applied
                for and received a permit to remove some fixtures from the Federal
                Pavilion. I accompanied him on his mission. While in the building
                we decided to have a look around.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;Since there was no fencing then around the building access was gained through
                one of the glass entrance doors (Hall of Education) on the second
                level. This door was opened most of the time! Inside the building
                all the lights were off, but being an electrician, the boss found
                several power panels and started turning the breakers on -- lighting
                the whole place up.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We explored several areas of the building, which was intact. One room was
                a beautiful auditorium which had these superb benches made of
                solid maple and covered with baby blue leather cushions on top.
                There were about 50 or more of these 2&apos; x 12&apos; seats -- all looking
                spanking new! These were the fixtures my boss had received the
                permit to remove.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;There was also a full, stainless steel kitchen nearby, complete with ovens,
                pots, sinks and then -- an Amana Radar Range (microwave oven)
                which I had never seen before. The place looked like it was ready
                to cook a meal for an army.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We found a door that led us between a wall and the infamous green fiberglass
                panels of the pavilion. This space had all the back lighting
                for these panels and were all lit up thanks to the boss. We were
                able to walk the length of this space.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We removed the benches, turned off the lights and left the pavilion behind.
                Those benches may still be in the NYS pavilion storage for all
                I know.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;On another occasion I had the opportunity to go down to the electrical room
                (located underneath the fountains). The sight of the power transformers
                was overwhelming. PVC was leaking everywhere from these big black
                boxes and the smell was terrible. It looked like liquid tar blasting
                out of a volcano. I was surprised that these boxes didn&apos;t blow
                up.&quot;
              </p>
              <p className={styles.attribution}>— Charles Aybar, Ph.D.</p>
            </div>
            <p className={styles.maroon}>
              It is the early 70s and economic conditions in the country have taken a down-turn. New York (along
              with other major U.S. cities) faces a financial crises the likes
              of which it has never seen that will eventually lead to near
              bankruptcy. The effect on the Park is devastating.
            </p>
          </TimelineYear>

          <TimelineYear year="1976">
            <div className={styles.quoteBox}>
              <p className={styles.quoteCaption}>Recollections of the U.S. Pavilion</p>
              <p className={styles.quoteBody}>
                &quot;At times, in the early seventies, we would find and enter through a fence
                opening. At a distance the building would look ominous, forlorn.
                As one approached, it became even more so. It sat unused, lonely,
                abused, haunting as it loomed before us. Yet it retained some
                of the glamour it once wore during its functional time. The once
                very luminous fiberglass panels were becoming faded through neglect;
                some broken by vandals. The remnants of the U.S. Seal shown in
                shadow on its mount. Most of the lettering at the top of the
                structure remained, though some had fallen through the ravages
                of time. The once manicured landscaping was now growing amok.
                A sad sight indeed.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;Inside the building the sights and smells made the exterior look beautiful.
                Escalators totally vandalized. Anything not nailed down, and
                some nailed down, was stolen or smashed. The interior was dark
                as coal at night. We had our flashlights. The building was not
                without human habitation. Discarded liquor bottles, beer bottles,
                spray paint cans were scattered about, as were a variety of condom
                packs and syringes. Other than the wisp of the outside wind and
                a stray pigeon the silence was deafening. Auditoriums and display
                areas sat silent in the littered darkness. The musty air hung
                heavily. Every now and then the sound of a drop of water hitting
                the floor from a leak somewhere. Voices would echo from the emptiness
                all around. There was also evidence of some of the City&apos;s homeless
                making this their temporary address. In the interior court a
                tree still grew in the middle of the many steps.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;As solid as it was it seemed doubtful there would be a future for this beautiful
                structure. Ideas had been proposed but seemed to have been as
                abandoned as the structure itself. Sadly, in the end, this magnificent
                structure met its fate. A very sad post-Fair script indeed. There
                was promise; but no visionaries in the City. They simply didn&apos;t
                care.&quot;
              </p>
              <p className={styles.attribution}>— Ken Thalheimer</p>
            </div>
            <p className={styles.maroon}>
              Summer. Flushing Meadows Corona Park is suffering from the city&apos;s cash crisis. Park maintenance
              is at a minimum. There is barely enough money to mow the grass
              let alone to keep personnel available to tend to old World&apos;s
              Fair pavilions. Construction has been halted on the Hall of Science
              expansion and the concrete foundation has been fenced off. The
              roof has been removed from the abandoned New York State Pavilion
              because lack of maintenance has caused some of the multi-colored
              fiberglass panels to detach and blow off in the wind, creating
              a public hazard. The Federal Pavilion has sat vacant now for
              over a decade. The exterior of the building appears much as it
              did ten years ago with only a few loose vari-colored panels and
              some graffiti here and there. Forlorn trees still grow in the
              huge planters in the courtyard. But inadequate Park security
              has allowed the interior of the pavilion to fall prey to vandals.
              Access to the building is easy through smashed plate-glass doors.
              The multi-million dollar structure has been all but destroyed
              on the inside. Holes have been punched through the interior walls
              to allow light to enter the darkened building so that drug deals
              and prostitution can be transacted more easily. Debris from the
              interior along with junk brought in by the derelicts litters
              the floors. Now the U.S. Tennis Association announces they will
              move their facilities from Forest Hills to Flushing Meadows Corona
              Park; an act which proves consequential for the Federal Pavilion
              in the year ahead.
            </p>
            <div className={styles.quoteBox}>
              <p className={styles.quoteCaption}>Inside the Federal Pavilion, Summer 1976</p>
              <p className={styles.quoteBody}>
                &quot;We walk all the way around the building until we get to the side that
                faces up the Court of the States towards Unisphere. On this side
                just a few short steps up where the lower courtyard begins is
                a large concrete wall about seven or eight feet high and four
                or five feet across. On its face you can still see the faint
                outline of where a large eagle once was mounted and the letters
                above it used to read US Pavilion.&quot;
              </p>
              <figure className={styles.figure}>
                <p className={styles.figureCaption}>Federal Pavilion, Summer 1976</p>
                <Image
                  src="/images/unista15/us15.jpg"
                  alt="Federal Pavilion - Summer 1976"
                  width={300}
                  height={305}
                  className={styles.photoImg}
                  unoptimized
                />
                <p className={styles.source}>
                  SOURCE: Copyright 2001, Craig Bavaro, All Rights Reserved
                </p>
              </figure>
              <p className={styles.quoteBody}>
                &quot;The lower courtyard ceiling seems to be mostly intact although most if
                not all of the light bulbs are either broken or gone. There are
                two large planters at the top of the stairs on opposite ends
                of the courtyard. They still have trees in them, which are obviously
                getting water through the roof opening when it rains.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We notice that all of the glass doors that lead into the building are smashed.
                We carefully pick our way through one of them into what seems
                like a reception area. It is very dark inside with the only light
                coming from the door we just entered through. We can make out
                some smashed display cases and over on one wall is what appeared
                to have once been plaster letters glued to the wall forming an
                expression. The floor is covered with massive amounts of debris
                and broken glass.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We then decide to try another entrance. This space is huge and empty. The concrete
                floor is barren of anything. This space is better lit since there
                appears to be holes in the outer walls that are letting light
                inside here and there. The ceiling is very high and black but
                it appears as if at one time some kind of large lighting or machinery
                of some type was mounted up there. I can also make out a white
                movie screen on one of the far walls. My friend and I run over
                to some of the holes where the light is coming in to further
                investigate. Some of them are big enough to fit our heads through.
                What we see is the outer curtain of multicolored panels that
                line the entire outside of the building. In the space between
                the outside wall of the building and the panels themselves are
                the remnants of light fixtures that once lit the outside of the
                building ... they have been ruined beyond salvage at this point.&quot;
              </p>
              <p className={styles.quoteBody}>
                &quot;We then decide to try one more entrance. Entering the last set of shattered
                doors we enter another set of general reception and display areas.
                Once again the entire area is in ruins. Lighting fixtures are
                hanging from the ceiling and plasterboard has been pulled from
                the walls or bashed in right where it hung on the studs. The
                floor is littered with a huge amount of interior decor debris
                and junk brought in by the vandals. After carefully picking our
                way back down through all the rubble ... we finally found our
                way back to the courtyard and the sweeping stairs down.&quot;
              </p>
              <p className={styles.attribution}>— Craig Bavaro</p>
              <p className={styles.odysseyLink}>
                Click{" "}
                <Link href="/odyssey01">
                  HERE
                </Link>{" "}
                to read Craig&apos;s entire essay{" "}
                <strong>&quot;A World&apos;s Fair Odyssey and An Afternoon of Delight&quot;</strong>
              </p>
            </div>
            <div className={styles.ruinsBox}>
              <p>
                To view the on-line photos of the vandalized Federal Pavilion at Phillip Buehler&apos;s
                <strong> &quot;Modern Ruins&quot;</strong> website, simply click the following Links:
              </p>
              <ul className={styles.ruinsList}>
                <li>
                  <a href="http://www.modern-ruins.com/fair/uspavilion.html" target="_blank" rel="noopener noreferrer">
                    U.S. Pavilion
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/eagle.html" target="_blank" rel="noopener noreferrer">
                    U.S. Entrance
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/courtyard.html" target="_blank" rel="noopener noreferrer">
                    U.S. Courtyard
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/stairs.html" target="_blank" rel="noopener noreferrer">
                    Courtyard Steps
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/escalator.html" target="_blank" rel="noopener noreferrer">
                    Vandalized Escalator
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/journey.html" target="_blank" rel="noopener noreferrer">
                    &quot;American Journey&quot; Entrance
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/greatness.html" target="_blank" rel="noopener noreferrer">
                    &quot;Greatness&quot; Exhibit Hall Entrance
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/pyramids.html" target="_blank" rel="noopener noreferrer">
                    Exhibit Hall
                  </a>
                </li>
                <li>
                  <a href="http://www.modern-ruins.com/fair/presidents.html" target="_blank" rel="noopener noreferrer">
                    &quot;Hall of Presidents&quot;
                  </a>
                </li>
              </ul>
              <p>
                Click{" "}
                <a href="http://modern-ruins.com/fair/" target="_blank" rel="noopener noreferrer">
                  HERE
                </a>{" "}
                to view the <strong><em>entire</em></strong> website.
              </p>
            </div>
          </TimelineYear>

          <TimelineYear year="1977">
            <div className={styles.quoteBox}>
              <p className={styles.quoteBody}>
                &quot;It should have been kept. Now, it&apos;s too late. The only thing to do is tear
                it down. I recommend turning the building into a branch of the
                Metropolitan Museum of Art. Now it&apos;s too late; the vandals have
                ruined the building and it should be torn down.&quot;
              </p>
              <p className={styles.attribution}>
                — Robert Moses <span style={{ fontStyle: "normal" }}>DAILY NEWS, November 11, 1976</span>
              </p>
            </div>
            <p className={styles.maroon}>
              Winter. The Federal Pavilion is demolished. No use is ever found for the building, empty for
              11 1/2 years. Its title remains in the hands of the Federal Government
              who had recently promised the City they would not turn the building
              over to a party other than City or State, for fear a developer
              would abandon a project in midstream, leaving the &quot;hulking
              white elephant as a neighborhood eyesore.&quot; Local groups
              fight in vain to save the pavilion at the last minute, arguing
              the building is still viable with damage being non-structural
              and confined mainly to the interior of the building. Newspaper
              reports at the time say it took <em>years</em> for the City to
              get the Federal commitment of $530,000 to demolish the building
              while the Federal Goverment claims it has tried for <em>years</em>
              to get the City to accept the title to the building. Officials
              estimated it would cost at least $6 million and possibly $15
              million to rehabilitate what was left after years of vandalism.
              By mid-March only the steel framework remains. Soon it will be
              a grassy circle just as it had been 15 years earlier when President
              Kennedy broke ground for the Federal Pavilion at the 1964-1965
              New York World&apos;s Fair.
            </p>
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                Demolition of the Federal Pavilion, March 1977
              </p>
              <div className={styles.demolitionStack}>
                <Image
                  src="/images/unista15/us45.jpg"
                  alt="Demolition - long shot"
                  width={328}
                  height={259}
                  className={styles.photoImg}
                  unoptimized
                />
                <Image
                  src="/images/unista15/us46.jpg"
                  alt="Demolition - corner shot"
                  width={329}
                  height={259}
                  className={styles.photoImg}
                  unoptimized
                />
                <Image
                  src="/images/unista15/us44.jpg"
                  alt="Demolition - front view"
                  width={314}
                  height={248}
                  className={styles.photoImg}
                  unoptimized
                />
              </div>
              <p className={styles.source}>
                SOURCE: Copyright 2001, Bill Young, All Rights Reserved
              </p>
            </figure>
          </TimelineYear>

          <TimelineYear year="1989">
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                &quot;Freedom of the Human Spirit&quot; stands in front of a grassy Kennedy Circle.
              </p>
              <Image
                src="/images/unista15/us13.jpg"
                alt="Kennedy Circle &amp; statue"
                width={235}
                height={356}
                className={styles.photoImg}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: Copyright 1989, Rich Post, All Rights Reserved
              </p>
            </figure>
            <p className={styles.maroon}>
              Summer. Much has happened to the Park in the succeeding 12 years since the Federal Pavilion
              was demolished. The city&apos;s financial crisis is over and, slowly,
              more money is being made available to the Park to correct the
              effects of the years of neglect. The Hall of Science expansion
              has been completed. The U.S. Tennis Association has made major
              renovations to the Fair&apos;s <em>Singer Bowl</em> stadium, now renamed
              the <em>Louis Armstrong</em> stadium, where the main tennis matches
              are played.
            </p>
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                View across Kennedy Circle toward the <em>Louis Armstrong</em> (<em>Singer Bowl</em>) stadium.
              </p>
              <Image
                src="/images/unista15/us14.jpg"
                alt="Kennedy Circle &amp; stadium"
                width={350}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: Copyright 1989, Rich Post, All Rights Reserved
              </p>
            </figure>
          </TimelineYear>

          <TimelineYear year="1996">
            <p className={styles.maroon}>
              Summer. With Flushing Meadows playing host to the U.S. Open each September, the eyes of the
              world are once again drawn to the Park in the form of major television
              coverage. The City of New York wants the cameras to see only
              good things when they pan the Park. More money is spent to clean
              and restore Unisphere and the old Fair fountains. The U.S. Open
              has outgrown <em>Louis Armstrong</em> stadium and a new stadium
              is built over the 2,300 piles that were driven to support the
              massive Federal Pavilion back in the 60s. It is dedicated in
              the name of tennis great <em>Arthur Ashe</em>.
            </p>
            <figure className={styles.figure}>
              <p className={styles.figureCaption}>
                &quot;Freedom of the Human Spirit&quot; stands in front of the <em>Arthur Ashe</em> stadium constructed
                on the site of the former Federal Pavilion.
              </p>
              <Image
                src="/images/unista15/postfair11.jpg"
                alt="Arthur Ashe stadium on pavilion site"
                width={300}
                height={207}
                className={styles.photoImg}
                unoptimized
              />
              <p className={styles.source}>
                SOURCE: Copyright 1998, Larry Hubble, All Rights Reserved
              </p>
            </figure>
          </TimelineYear>

          <TimelineYear year="TODAY" showStem={false}>
            <p className={styles.maroon}>
              The crowds come again to the area that used to be Kennedy Circle — to the place where the
              Federal Pavilion used to stand — where a different type of &quot;Challenge
              to Greatness&quot; plays out — each September at the U.S. Open
              at Flushing Meadows.
            </p>
          </TimelineYear>

          <div className={styles.webmasterBox}>
            <p>
              <strong>Webmasters note...</strong>
            </p>
            <p>
              The photographs on this page are the property of, and copyright by, their owners
              as indicated. Please DO NOT reprint them without obtaining permission
              through this website
            </p>
            <p>
              Like the New York State Pavilion feature, the story of the Federal Pavilion
              at nywf64.com wouldn&apos;t have been possible without contributions
              from many people. I&apos;d like to take this opportunity to thank
              and acknowledge them for their help: To Charles, Craig and Ken
              for writing their excellent recollections of visits to the Federal
              Pavilion in the years between the Fair and its demise. To Mary
              Ellen Coughlan for the Executive Order and Gary Holmes for the
              many Fact Sheets and photos that helped to tell the story of
              the planning for the pavilion. To Craig Bavaro for the Report
              that is the Fair Corporation&apos;s request for the <em>Franklin Center
              of Science and Education</em> as Federal participation. It was
              an unknown gem! To Bill Cotter for sending those wonderful photos
              from <em>Elevator World</em> magazine -- the only pictures I&apos;ve
              ever seen of &quot;The American Journey&quot; moving grandstands
              and to Ray Dashner for providing the soundtrack to the ride and
              to &quot;Voyage to America&quot; so that the scripts could be
              translated. And lastly, to Bruce Mentone, Rich Post, Larry Hubble,
              Charles and Craig for the photos that illustrate the Epilogue
              section. Thanks to all of you! Together, you&apos;ve told the grand
              story of the Federal participation in the Fair and the sad story
              of the pavilion&apos;s fate. Your contributions are greatly appreciated.
            </p>
            <p className={styles.signoff}>Bill Young</p>
            <p className={styles.signoff}>January 21, 2001</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unista14"
        explicitPrevious
        overviewHref="/unistaoverview"
        nextHref="/unistaoverview"
      />
    </>
  );
}
