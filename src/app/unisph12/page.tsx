import type { Metadata } from "next";
import Image from "next/image";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisph12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Why Unisphere? — Unisphere — nywf64.com",
  description:
    "Why Unisphere? — concept history, Robert Moses comments, and the Galaxon proposal — 1964/1965 New York World’s Fair on nywf64.com.",
};

const MOSES_ALTERNATIVES = [
  ["A.", "Pure abstraction. Absolutely nothing doing. Toss it out."],
  [
    "B.",
    "Understandable abstraction symbolizing theme, with some significance or meaning for the average person.",
  ],
  [
    "C.",
    "U.N. buildings. Kind of corny. Unoriginal. U.N. probably won't like it. Neither will some of our people, but its not impossible.",
  ],
  ["D.", "Something from electronic or invention world."],
  ["E.", "Throgs Neck or Narrows suspension bridge."],
  ["F.", "Onward and upward symbol - Heaven knows what."],
  ["G.", "Something else."],
] as const;

/**
 * Unisphere — Why Unisphere?
 * Body from legacy unisph12.html.
 * Stack: hero → UnisphNavChrome → navy title → article (+ Galaxon title) → Nav2Bar.
 */
export default function Unisph12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <article className={styles.article} aria-labelledby="unisph12-title">
        <header className={styles.titleBar}>
          <h1 id="unisph12-title" className={styles.titleBarMain}>
            Why Unisphere?
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.section} aria-label="Original concept">
            <figure className={styles.largePhoto}>
              <span className={styles.figureBordered}>
                <Image
                  src="/images/unisph12/unisph02-concept.jpg"
                  alt="Artist’s rendering of the original concept for Unisphere"
                  width={901}
                  height={534}
                  className={styles.largePhotoImg}
                  unoptimized
                />
              </span>
            </figure>
            <p className={styles.caption}>
              An artist&apos;s rendering of the original concept for Unisphere.
              According to the February 15, 1961 edition of the{" "}
              <em>Herald Tribune</em>:
            </p>
            <p className={styles.captionQuote}>
              Widest of the structural elements will be the equator. Somewhat
              narrower will be the strips representing the Tropics of Cancer and
              Capricorn. Still others will from lines of longitude and latitude.
              They will be fixed to the sphere but appeare to be independent of
              it. A light representing a satellite, will move speedily along
              each orbit at different speeds and in opposite directions.
            </p>
            <p className={styles.captionQuote}>
              Unisphere&apos;s base will be in the center of a 12-sided pool.
              One suggestion under consideration is that sculptures at the
              twelve corners of the pool represent the signs of the zodiac.
              These too would be in stainless steel.
            </p>
            <p className={styles.captionQuote}>
              The concept is that verticle fountains will form a wall of water
              around the base of the sphere. Other fountains, at the edge of the
              pool, will arch inward. The fountains will be lighted from above
              and below.
            </p>
          </section>

          <hr className={styles.rule} />

          <section className={styles.panel} aria-label="Theme center history">
            <p className={styles.source}>
              Source: &quot;<em>Remembering the Future,</em>&quot; &quot;
              <em>Something for Everyone: Robert Moses and the Fair</em>&quot;
              by Marc H. Miller, published to accompany the 1989 Queens Museum
              exhibition &quot;
              <em>
                Remembering the Future: The New York World&apos;s Fair from 1939
                to 1964.
              </em>
              &quot;
            </p>
            <p className={styles.bodyCopy}>
              The visual theme center for [Robert] Moses&apos;s Fair was the
              Unisphere, a 140-foot high, 900,000-pound steel armillary sphere
              covered with the representations of the continents and encircled
              by three giant rings denoting the first man-made satellites that
              had recently launched the space age. The emblematic Unisphere was
              to serve the 1964/65 Fair as the Trylon and Perisphere had served
              its 1939 predecessor - as the centerpiece of the fairgrounds and
              as a visual logo for Fair publicity. Occupying the central spot in
              Flushing Meadow Park, where the Trylon and Perisphere once stood,
              the Unisphere was the creation of Gilmore Clark, a longtime
              collaborator on the Flushing Meadow Park ground plan and the 1939
              Fair.
            </p>
            <p className={styles.bodyCopy}>
              The Unisphere&apos;s history was not without incident. One of
              Moses&apos; first and most difficult tasks on assuming control of
              the Fair Corporation had been to come up with a visual logo to
              rival the highly successful Trylon and Perisphere. At first he
              hoped for an appropriate plan from the design committee, which
              included both Wallace Harrison and Henry Dreyfuss, the architect
              and designer who had created the Trylon and Perisphere and its
              interior exhibit, &quot;Democracity.&quot; [Failing that,] Moses
              turned to Walter Dorwin Teague, the noted industrial designer who
              had served on the design committe of 1939, to submit a theme
              center idea. Moses&apos;s views on an appropriate central symbol
              are set forth in an August 21, 1960 memo to his assistant, Stuart
              Constable:
            </p>
            <p className={styles.bodyCopyPlain}>
              It gets down to these alternatives.
            </p>
            <table className={styles.alternatives}>
              <tbody>
                {MOSES_ALTERNATIVES.map(([letter, text]) => (
                  <tr key={letter}>
                    <td className={styles.altLetter}>{letter}</td>
                    <td>{text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.bodyCopy}>
              Teague&apos;s proposal, &quot;Journey to the Stars,&quot; was for
              a 170-foot-high steel and aluminum spiral with helium-filled
              star-shaped balloons floating above. The spiral was animated by
              moving lights. In its most abitious stage, a ride took people to
              the top. A related two-dimensional design was temporarily used as
              the Fair&apos;s logo, but in an August 12, 1960 letter to Gilmore
              Clarke, Moses expressed his disappointment with Teague&apos;s
              concept. &quot;At the risk of being put down as a barbarian, I
              think it is a cross between a part of a make and break engine and
              a bed spring, or should I say between a Malayan Tapir and a window
              shutter.&quot;
            </p>

            <div className={styles.figureRow}>
              <figure className={styles.figure}>
                <span className={styles.figureBordered}>
                  <Image
                    src="/images/unisph12/unisph04.jpg"
                    alt="Journey to the Stars as envisioned by Walter Dorwin Teague Associates"
                    width={301}
                    height={289}
                    className={styles.figureImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.figureCaption}>
                  &quot;Journey to the Stars&quot; as envisioned by the design
                  team at Walter Dorwin Teague Associates.
                </figcaption>
              </figure>
              <figure className={styles.figure}>
                <span className={styles.figureBordered}>
                  <Image
                    src="/images/unisph12/unisph265.jpg"
                    alt="Two-dimensional Journey to the Stars Fair logo"
                    width={300}
                    height={200}
                    className={styles.figureImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.figureCaption}>
                  Two-dimensional design of &quot;Journey to the Stars&quot;
                  that was temporarily used as the Fair&apos;s logo.
                </figcaption>
              </figure>
            </div>

            <figure className={styles.figure}>
              <span className={styles.figureBordered}>
                <Image
                  src="/images/unisph12/unisph05.jpg"
                  alt="The Galaxon proposed theme symbol"
                  width={358}
                  height={319}
                  className={styles.figureImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.figureCaption}>
                &quot;The Galaxon&quot; - another proposed Theme Symbol of the
                1964/1965 New York World&apos;s Fair.
              </figcaption>
            </figure>

            <p className={styles.bodyCopy}>
              Another proposal Moses rejected was &quot;The Galaxon,&quot;
              designed by Paul Rudolph, an innovated young architect and dean of
              the Yale University Department of Architecture. The 160-foot high
              340-foot in diameter, saucer-shaped concrete structure, sponsored
              by Portland Cement, featured stations for star viewing, and was
              tilted at an 18-degree angle to offer an optimum view of the
              heavens.
            </p>
            <p className={styles.bodyCopy}>
              Like the Teague and Rudolph proposals, Clarke&apos;s giant globe,
              encircled by rings, celebrated the space age that had begun with
              the Russian launching of Sputnik in 1957 and continued in America
              after John F. Kennedy&apos;s election as president in 1960. The
              Unisphere was clearly the type of &quot;understandable&quot;
              structure &quot;with some significance or meaning for the average
              person&quot; that Moses had favored in his theme center
              memorandum. As the world&apos;s largest global structure, the
              Unisphere also appealed to Moses&apos;s love of gargantuan scale.
              Since building the structure required the aid of newly invented
              high-speed computers to work out complicated technological
              problems, it also appealed to the engineer in him.
            </p>
          </section>

          <section className={styles.panel} aria-label="Comments by Robert Moses">
            <h2 className={styles.sectionHeading}>Comments by Robert Moses</h2>
            <div className={styles.mosesPortrait}>
              <figure className={styles.figure}>
                <span className={styles.figureBordered}>
                  <Image
                    src="/images/unisph12/unisph02.jpg"
                    alt="Robert Moses"
                    width={200}
                    height={265}
                    className={styles.figureImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.figureCaption}>
                  Robert Moses - President New York World&apos;s Fair 1964-1965
                  Corporation
                </figcaption>
              </figure>
            </div>
            <p className={styles.source}>
              Source: Pamphlet:{" "}
              <em>United States Steel Unisphere Ceremonies,</em> March 6, 1963
            </p>
            <p className={styles.bodyCopy}>
              We looked high and low for a challenging symbol for the New York
              World&apos;s Fair of 1964 and 1965. It had to be of the space age;
              it had to reflect the interdependence of man on the planet Earth,
              and it had to emphasize man&apos;s achievements and aspirations.
              It had to be the cynosure of all visitors, dominating Flushing
              Meadow, and built to remain as a permanent feature of the park,
              reminding succeeding generations of a pageant of surpassing
              interest and significance.
            </p>
            <p className={styles.bodyCopy}>
              And so we discarded startling abstractions and decided on a
              transparent, or shall I say diaphanous globe with orbits, with the
              contients outined, and ingenious lighting and other effects in
              place of revolving machinery.
            </p>
            <p className={styles.bodyCopy}>
              This symbol floating over the meadow is going around the world. It
              signifies the New York Fair everywhere. Its effect is
              instantaneous. It speaks volumes in a single picture.
            </p>
            <div className={styles.mosesPortrait}>
              <Image
                src="/images/unisph12/unisph264.jpg"
                alt=""
                width={150}
                height={139}
                className={styles.figureImg}
                unoptimized
              />
            </div>
            <p className={styles.source}>
              Source: Booklet: <em>The Saga of Flusing Meadow,</em> April 11,
              1966
            </p>
            <p className={styles.bodyCopy}>
              We were deluged with theme symbols - mostly abstract,
              aspirational, spiral, uplifting, flashing, or burning with a hard
              and gemlike flame, whose resembalance to anything living or dead
              was purely coincidental. I can comprehend the magnificent
              symbolism of a four-footed musical theme like that of
              Beethoven&apos;s Fifth but the symbolism proposed by the
              avant-garde at Flushing Meadow, even if it be ambrosia to the
              inteligentsia, was surely caviar to the general.
            </p>
            <p className={styles.bodyCopy}>
              Our U.S. Steel Armillary Sphere, the Unisphere, was derided by
              sour critics. They even said our wonderful fountains and
              magnificent night lighting were corny and we were accused of being
              crude, dull, defeated, uncouth Boeotians, lewd fellows of the
              baser sort.
            </p>
          </section>

          <hr className={styles.rule} />

          <section className={styles.section} aria-label="Final design">
            <figure className={styles.largePhoto}>
              <span className={styles.figureBordered}>
                <Image
                  src="/images/unisph12/unisph03-final.jpg"
                  alt="Artist John C. Wenrich rendering of the final design for Unisphere"
                  width={902}
                  height={714}
                  className={styles.largePhotoImg}
                  unoptimized
                />
              </span>
            </figure>
            <p className={styles.caption}>
              Artist John C. Wenrich rendering of the final design for Unisphere
            </p>
          </section>
        </div>

        <header className={styles.titleBar}>
          <h2 id="unisph12-galaxon" className={styles.titleBarMain}>
            The Galaxon
          </h2>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.section} aria-labelledby="unisph12-galaxon">
            <p className={styles.source}>
              Source: <em>Architectural Record</em>, July 1961
            </p>
            <p className={styles.galaxonHeadline}>
              RUDOLPH DESIGNS FOR THE NEW YORK FAIR
            </p>
            <div className={styles.galaxonLayout}>
              <div className={styles.galaxonImages}>
                <span className={styles.figureBordered}>
                  <Image
                    src="/images/unisph12/unisph248.jpg"
                    alt="Galaxon"
                    width={300}
                    height={146}
                    className={styles.figureImg}
                    unoptimized
                  />
                </span>
                <span className={styles.figureBordered}>
                  <Image
                    src="/images/unisph12/unisph247.jpg"
                    alt="Galaxon"
                    width={300}
                    height={243}
                    className={styles.figureImg}
                    unoptimized
                  />
                </span>
              </div>
              <ul className={styles.galaxonCopy}>
                <li>
                  The Galaxon, a concrete &quot;space park&quot; designed by
                  Paul Rudolph, head of the Department of Architecture at Yale
                  University, has been announced by the Portland Cement
                  Association as &quot;a proposed project&quot; for the 1964 New
                  York World&apos;s Fair. Its cost is estimated at $4 million.
                </li>
                <li>
                  Commissioned by the P.C.A. as &quot;a dramatic and imaginative
                  design in concrete,&quot; the Galaxon consists of a giant,
                  saucer-shaped platform tilted at an 18 deg angle to the earth
                  and held high above it by two curved walls rising from a
                  circular lagoon. The gleaming 300 ft diameter disc of
                  reinforced concrete would hover in the air like some huge space
                  ship.
                </li>
                <li>
                  Visitors would be lifted to the center of the &quot;saucer&quot;
                  by escalators and elevators inside the curved supporting
                  walls. From the central ring they would walk outward over
                  curved ramps to a constantly moving sidewalk on the disc&apos;s
                  outside perimeter. The sidewalk would rise and fall from the
                  160 ft hight apex of the inclined disc, to a low point
                  approximately 70 ft above the ground.
                </li>
                <li>
                  A stage is projected from one of its two supporting walls and
                  a restaurant, planetary viewing station and other educational
                  or recreational features could be located at points along its
                  top surface to make it an entertainment center.
                </li>
                <li>
                  The Galaxon was among several designs displayed at an
                  exhibition in New York of the use of concrete in so-called
                  &quot;visionary&quot; architecture.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unisph11"
        explicitPrevious
        overviewHref="/unisphoverview"
        nextHref="/unisph13"
      />
    </>
  );
}
