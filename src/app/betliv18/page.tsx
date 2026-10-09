import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/betlivTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Norelco / The General / Children's World / Dorothy Draper's Dream Home — Better Living Center — nywf64.com",
  description:
    "Norelco, The General locomotive, Children's World, and Dorothy Draper's Dream Home at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

function BillCotterSource() {
  return (
    <p className={styles.source}>
      SOURCE: Photo presented courtesy Bill Cotter collection © 2010 Bill
      Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
      <u>fabulous</u> collection of World&apos;s Fair photographs at his
      website{" "}
      <a
        href="http://www.worldsfairphotos.com/"
        target="_blank"
        rel="noreferrer"
      >
        WorldsFairPhotos.com
      </a>
      .
    </p>
  );
}

/**
 * Better Living Center — Norelco / The General / Children's World /
 * Dorothy Draper's Dream Home.
 * Body from legacy betliv18.html. Legacy wording and typos are preserved.
 *
 * Stack: hero → BetlivNavChrome → navy titles → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv18Page() {
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

      <article className={styles.article} aria-labelledby="betliv18-title">
        <header className={styles.titleBar}>
          <h1 id="betliv18-title" className={styles.titleBarMain}>
            Norelco
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.adFigure}>
            <Image
              src="/images/betliv18/norelco-ad.jpg"
              alt="Norelco Speedshaver advertisement"
              width={600}
              height={991}
              className={styles.adImg}
              priority
              unoptimized
            />
          </figure>
          <p className={styles.source}>
            SOURCE: Advertisement{" "}
            <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>The General</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.lede}>
            <p>
              Those who didn&apos;t want to venture inside the Better Living
              Center to see several floors of exhibits before leaving could
              still see its largest exhibit situated just outside the building,
              an authentic Civil War locomotive called the <em>General</em>{" "}
              which had been a staple of major World&apos;s Fairs held in
              America as far back as 1893 and which had a fascinating history
              behind it.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv18/general-1964.jpg"
              alt="The General at the 1964 Fair"
              width={500}
              height={336}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The <em>General</em> on display at the Better Living Center during
              the 1964 Season of the New York World&apos;s Fair
            </figcaption>
            <BillCotterSource />
          </figure>

          <div className={styles.lede}>
            <p>
              On April 12, 1862 a group of twenty Union raiders led by a
              civilian spy, James J. Andrews, stole the <em>General</em> from
              its station in Marietta, Georgia as part of a daring attempt to
              destroy Confederate rail and telegraph lines throughout the state
              and disrupt rail service between Atlanta and Chattanooga. The
              ensuing chase of the <em>General</em> by the pursuing locomotive{" "}
              <em>Texas</em> ended when the <em>General</em> ran out of steam
              eighteen miles below Chattanooga. All of the raiders were captured
              with eight of them eventually hanged, including Andrews. The rest
              managed to escape imprisonment or were later exchanged during the
              war for Confederate prisoners. After the release of the remaining
              six raiders, Secretary of War Edwin Stanton made the raiders the
              first recipients of the Congressional Medal Of Honor (save for
              Andrews who, as a civilian, was not eligible) in recognition of
              the courage they had demonstrated in such a difficult operation.
            </p>
            <p>
              While the &quot;Great Locomotive Chase&quot; earned itself a
              permanent place in Civil War folklore, the <em>General</em> itself
              returned to nearly thirty more years of obscure service for the
              Western &amp; Atlantic Railway Company, eventually falling into a
              state of near-ruin and being described as &quot;condemned&quot;
              when retired from service. The decaying locomotive was located by
              a photographer/lecturer, E. Warren Clark, in Vinings, Georgia. He
              hit upon the idea of restoring the locomotive and having it put on
              display at the 1893 World&apos;s Columbian Exposition in Chicago
              where it proved to be a successful attraction from an attendance
              standpoint (though not from a financial standpoint for Clark, who
              went broke from the endeavor).
            </p>
            <p>
              After its display in Chicago the <em>General</em> spent most of
              the next sixty years on display in Chattanooga, being moved for
              exhibit to Baltimore in 1927, again to Chicago in 1933 for the
              Century of Progress Exposition and to New York for the 1939-1940
              World&apos;s Fair. After World War II the locomotive became the
              subject of a drawn-out dispute between Tennessee and Georgia over
              where it would be permanently displayed and these matters were
              still ongoing in the early 1960s when the <em>General</em>{" "}
              underwent a new restoration that enabled it to move under its own
              power once again. A national tour followed during the celebration
              of the Civil War centennial and, in 1964, it was decided to bring
              the locomotive to the second New York World&apos;s Fair. Because
              of a tour commitment in Louisville during Derby Week, the{" "}
              <em>General</em> wouldn&apos;t arrive at the Fair until more than
              a month after opening day.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <Image
              src="/images/betliv18/general-1939.jpg"
              alt='The "General"'
              width={600}
              height={345}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The <em>General</em> on display at the <em>1939-1940</em> New York
              World&apos;s Fair
            </figcaption>
            <p className={styles.source}>
              SOURCE: From WIKIPEDIA{" "}
              <em>
                (
                <a
                  href="http://en.wikipedia.org/wiki/The_General_(locomotive)"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://en.wikipedia.org/wiki/The_General_(locomotive)
                </a>
                ),
              </em>{" "}
              :{" "}
              <em>
                This image (call number OP-19817) is from the collection of the
                photographs of the late Otto Perry (b.1894, d.1970) held at the
                Western History Department of the Denver Public Library (
                <a
                  href="http://photoswest.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://photoswest.org/
                </a>
                ), and is copyrighted. The department actively encourages fair
                use of its images for educational purposes.
              </em>
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              After being transported to New York by railroad ferry her engine
              was fired up and the <em>General</em> traveled to Flushing Meadow
              under her own power along the Long Island Railroad tracks and
              entered its exhibit location at the Better Living Center by means
              of a special track that was laid. The <em>General</em> carried
              behind it a special &quot;museum coach&quot; filled with numerous
              railroad memorabilia that would also be a part of the display.
            </p>
            <p>
              Because of the difficulties in keeping the <em>General</em> over
              the winter months at the Fairgrounds the locomotive was only
              displayed at the Fair during the 1964 season and then returned to
              its traditional berth in Chattanooga. The locomotive would only
              travel under its own steam again one more time before finally
              moving to a permanent home in Georgia (after a Supreme Court
              ruling finally settled the matter of ownership) at the Kennesaw
              Civil War Museum where it has been displayed continuously since
              1972.
            </p>
            <p>
              The <em>General&apos;s</em> presence at a World&apos;s Fair that
              also featured an <em>original</em> copy of the{" "}
              <a href="http://www.nywf64.com/illinois05.shtml">
                Gettysburg Address in the Illinois Pavilion
              </a>{" "}
              certainly made Flushing Meadows &quot;the place to be&quot; for
              serious Civil War buffs in 1964!
            </p>
            <p>
              To learn more about the story of &quot;The Great Locomotive
              Chase&quot; visit the Kennesaw Museum&apos;s site at{" "}
              <a
                href="http://www.locomotivegeneral.com/general.html"
                target="_blank"
                rel="noreferrer"
              >
                http://www.locomotivegeneral.com/general.html
              </a>
              .
            </p>
          </div>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Children&apos;s World</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.childrenIntro}>
            <h2 className={styles.childrenTitle}>CHILDREN&apos;S WORLD</h2>
            <Image
              src="/images/betliv18/children.jpg"
              alt="Children's faces"
              width={200}
              height={394}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <div className={styles.news}>
            <h2>BETTER LIVING CENTER CHILDREN&apos;S WORLD TEACHES TOTS</h2>
            <h4>
              20 Teachers from All Sections of Country in Unusual Program for
              Four to Eight Year Olds
            </h4>
            <div className={styles.newsGrid}>
              <div>
                <p>
                  &quot;I know that only the rarest kind of best can be good
                  enough for the young&quot;, Walter de la Mare said in{" "}
                  <em>Bells and Grass</em>. This sentiment, inlaid in wood
                  outside the entrance to the Children&apos;s World, sums up the
                  attitude and program administered by Margaret Woods for the
                  Better Living Center in the ground floor facility for four to
                  eight year olds.
                </p>
                <p>
                  Twenty certified teachers from public and parochial schools
                  around the nation have been granted leaves of absence from
                  their schools in order to serve on the Better Living Center
                  teaching staff. All have been hand picked by Mrs. Woods who is
                  president of the National Education Association&apos;s
                  Elementary-Nursery-Kindergarten Department and has directed
                  workshops on creative education in twenty-two states.
                </p>
                <Image
                  src="/images/betliv18/little-girl.jpg"
                  alt="Little Girl"
                  width={130}
                  height={172}
                  className={styles.littleGirl}
                  unoptimized
                />
              </div>
              <div>
                <p>
                  The Children&apos;s World is completely surrounded with
                  one-way glass enabling parents and Better Living Center
                  visitors to see the tots without disturbing their play or
                  studies. Children are assigned to their groups according to
                  their ages. The maximum number of children in each group is
                  fifteen.
                </p>
                <p>
                  The Children&apos;s World is divided into three areas: play,
                  science and art. in the play area, there are experimental
                  toys and climbing gear, a teletrainer for good telephone
                  manners, blocks and a live baby lamb to be fed. Here the
                  children also churn butter and make ice cream for their own
                  consumption.
                </p>
                <p>
                  Going through the science area, the tots watch the hatching of
                  live chicks, observe the goings-on in their cutaway beehive
                  and ant colony, learn about magnetism and dramatize science
                  materials. Under careful supervision, they wash their own
                  aprons in a washing machine.
                </p>
                <p>
                  In the art area they will paint and sculpt, learn the use of a
                  globe and, during snack time, have juice or ice cream and
                  crackers.
                </p>
                <p>
                  The children&apos;s World is specially designed, according to
                  Mrs. Woods, to build a passion for the world of people and
                  things. The program is regarded as a &quot;learning
                  experience&quot; and provides an environment for creative
                  learning.
                </p>
                <p>
                  Children may be registered from Fair opening to 5:15 P.M. each
                  day.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.source}>
            SOURCE: <em>SPECTRACKULAR NEWS </em>
            Published by Better Living Center, New York World&apos;s Fair
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>
            Dorothy Draper&apos;s Dream Home
          </h2>
        </header>

        <div className={`${styles.articleInner} ${styles.wideInner}`}>
          <div className={styles.dreamIntro}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/betliv18/martex-ad.jpg"
                alt="BLC Directory Martex Advertisement"
                width={300}
                height={346}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <h2 className={styles.dreamTitle}>
              Dorothy Draper&apos;s Dream Home
            </h2>
          </div>

          <div className={styles.dreamBody}>
            <p className={styles.dreamCopy}>
              ... a dream of modernity that <strong>need not be a dream</strong>
              , for every detail, each fabric, every item is practical -{" "}
              <strong>and available</strong>. Your Dream Home{" "}
              <strong>can be yours</strong>! ... from marble floored Foyer to
              primrose yellow Bedroom, to garden-wall with a real tree growing
              through the roof ... to floral draperied Music Room ... oval
              Living Room ... unique &quot;open&quot; Dining Room ... blue and
              green Guest Room - a bedroom that also doubles as a casual Living
              Room ... a Kitchen that&apos;s truly any woman&apos;s dream ...
              and much more!
            </p>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/betliv18/sweepstakes.jpg"
                alt="Sweepstakes Giveaway Ad"
                width={350}
                height={417}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <p className={styles.source}>
            SOURCE: Souvenir{" "}
            <em>
              &quot;Dorothy Draper&apos;s Westinghouse Dream Home Book&quot;{" "}
            </em>
            Giveaway Sweepstakes Advertisement
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv17"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv19"
      />
    </>
  );
}
