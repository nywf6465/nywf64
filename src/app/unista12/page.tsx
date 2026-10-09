import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unista12.module.css";
import {
  AMERICAN_JOURNEY_SCRIPT,
  VOYAGE_TO_AMERICA_SCRIPT,
} from "./scripts";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Scripts: The American Journey and Voyage to America — United States — nywf64.com",
  description:
    "Ray Bradbury script and Voyage to America narration — United States Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

function italicize(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    ),
  );
}

function ScriptLines({ lines }: { lines: string[] }) {
  return (
    <div className={styles.scriptBlock}>
      {lines.map((line, i) => (
        <p key={i} className={styles.scriptLine}>
          {italicize(line)}
        </p>
      ))}
    </div>
  );
}

function ScriptParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className={styles.scriptBlock}>
      {paragraphs.map((para, i) => (
        <p key={i} className={styles.scriptPara}>
          {italicize(para)}
        </p>
      ))}
    </div>
  );
}

/**
 * United States Pavilion — The American Journey & Voyage to America scripts.
 * Body from legacy unista12.html (pattern /bell09).
 */
export default function Unista12Page() {
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

      <article className={styles.article} aria-labelledby="unista12-title">
        <header className={styles.titleBar}>
          <h1 id="unista12-title" className={styles.titleBarMain}>
            Scripts: <em>The American Journey</em> and{" "}
            <em>Voyage to America</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.introTitle}>&quot;The American Journey&quot;</p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/unista12/us19.jpg"
                alt="Moving Grandstand - front"
                width={450}
                height={376}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              One of 12 &quot;Moving Grandstands&quot; seating 55 people begins its travel along &quot;The
              American Journey,&quot; the multi-screen film presentation at
              the Federal Pavilion. Note the adjustable headsets for audio mounted
              on the backs of the seats.
            </figcaption>
            <p className={styles.source}>
              Source: (both photos) <em>Elevator World Magazine</em>, Vol. XII, No. 9, September
              1964
            </p>
          </figure>

          <p className={styles.introBody}>
            In the Federal Pavilion, viewers are conducted on a trip through American history in what might
            be called a drive-along theater.
          </p>
          <p className={styles.introBody}>
            Designed, built, installed and operated by Cinerama, the exhibit features bus-sized open vehicles
            which transport visitors around a city bock-square expanse of
            motion pictures, still photography and three-dimensional effects.
            Screens move aside, go up and down, even form a tunnel for the
            buses to drive through.
          </p>
          <p className={styles.introBody}>
            The 12 moving grandstands each seat 55 persons. A new group of 55 begins the trip every 80 seconds.
            Each vehicle is fitted with individual earphone equipment for
            the presentation&apos;s soundtrack.
          </p>
          <p className={styles.introBody}>
            Measuring 18 feet long and 16 feet wide and containing rows of seats each set higher than the
            last, the vehicles glide along a 1,250-foot track circling the
            pavilion building at a rate of about one mile per hour.
          </p>
          <p className={styles.introBody}>
            Jeremy H. Lepard, in charge of the film project described the film exhibit which Cinerama has
            created a the Federal Pavilion for the U.S. Government. &quot;Audiences
            actually have to learn a new way of looking at life-through-movies.
            It is something like walking down a strange street. Our technique
            produces the real feel or aura of an era.&quot;
          </p>
          <p className={styles.introBody}>
            Viewers are whisked through an environment something like a big, twisting tunnel, only this
            environment is mostly comprised of some 120 screens of various
            sizes and shapes. As Lepard describes it, &quot;We&apos;ve picked
            little nubs, shots, from other times to create an overall feeling
            of the American historical heritage. I expect that many people
            will return time and again to get the full information of our
            show.&quot;
          </p>
          <p className={styles.introBody}>
            Some 2,000 viewers an hour, 20,000 a day, can be accommodated at the Federal pavilion film show,
            which is under the supervision of U.S. Commissioner N.K. Winston
            and the U.S. Department of Commerce. One of the vehicles has
            seats equipped with a five-channel selector speaker system, so
            a viewer can elect to hear the narration in either French, German,
            Spanish, Italian or English.
          </p>
          <p className={styles.introBody}>
            The narration was written by noted science-fiction author Ray Bradbury and is delivered by
            John McIntyre of &quot;Wagon Train&quot; TV fame. Over 170 movie
            and slide projectors are utilized to create the environmental
            effect of the 13 1/2-minute ride.
          </p>
          <p className={styles.introBody}>
            &quot;The American Journey,&quot; as the show is entitled, begins with the viewer being surrounded
            by the mysterious ocean, filled with unnamed sea monsters, which
            our ancestors knew on their way to America. It is followed by
            depictions of the Indians to be found here, then shots of pioneers,
            native animals, early inventions, historical events, the trek
            Westward and the scenic wonders of America. We are brought up-to-date
            with some startling rocket effects, provided courtesy of NASA
            and the U.S. Air Force.
          </p>
          <p className={styles.introBody}>
            Over 100 historical societies provided material for the show, as well as the Library of Congress,
            the National Archives and the Smithsonian Institute. Cinerama
            sent camera crews out to many sections of the United States to
            film various American landscapes.
          </p>
          <p className={styles.introBody}>
            All this is on the second level of the Federal Pavilion. On the first level, photos along with
            other graphics depict events in the American past and controversies
            in the present which have been or are topics of discussion and
            interest.
          </p>
          <p className={styles.introBody}>
            The Federal Pavilion also houses a more-or-less conventional 600-seat theater and a 200-seat auditorium,
            both of which are used for the presentation of films. A significant
            one is a U.S. Navy cinematic duplication of a submarine&apos;s trip
            under the Arctic ice, a missile firing on the submarine Nautilus
            and a ride with the Blue Angels flying team.
          </p>
          <div className={styles.sourceBlock}>
            <p className={styles.source}>
              Source: Industrial Photography, Vol. 13, No. 5, May 1964
            </p>
          </div>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/unista12/us20.jpg"
                alt="Moving Grandstand - rear"
                width={450}
                height={292}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              A rear view of one of the &quot;Moving Grandstands&quot; as it makes its way through
              a tunnel of movie screens. Note the rail to the right of the grandstand
              which provides a contact point for power and audio and guides
              the grandstand along its route.
            </figcaption>
          </figure>

          <hr className={styles.sectionRule} />

          <div className={styles.scriptBanner}>
            <p className={styles.scriptBannerTitle}>The Script</p>
            <p className={styles.scriptBannerShow}>
              &quot;The American Journey&quot;
            </p>
            <p className={styles.scriptByline}>
              by:{" "}
              <span className={styles.scriptBylineName}>Ray Bradbury</span>
            </p>
          </div>

          <ScriptLines lines={AMERICAN_JOURNEY_SCRIPT} />

          <hr className={styles.sectionRule} />

          <div className={styles.scriptBanner}>
            <p className={styles.scriptBannerTitle}>The Script</p>
            <p className={styles.scriptBannerShow}>
              &quot;Voyage to America&quot;
            </p>
          </div>

          <ScriptParagraphs paragraphs={VOYAGE_TO_AMERICA_SCRIPT} />
        </div>
      </article>

      <Nav2Bar
        previousHref="/unista11"
        explicitPrevious
        overviewHref="/unistaoverview"
        nextHref="/unista13"
      />
    </>
  );
}
