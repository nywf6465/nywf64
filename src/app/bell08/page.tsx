import type { Metadata } from "next";
import Image from "next/image";
import { BellNavChrome } from "@/components/BellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bell08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Ride of Communications — Bell System — nywf64.com",
  description:
    "The Ride of Communications at the Bell System Pavilion — From Drumbeat to Telstar at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bell System — The Ride of Communications.
 * Body from legacy bell08.html (custom feature / magazine reprint — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → BellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE where captions apply.
 */
export default function Bell08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <article className={styles.article} aria-labelledby="bell08-title">
        <header className={styles.titleBar}>
          <h1 id="bell08-title" className={styles.titleBarMain}>
            The Ride of Communications
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.blockHeading}>
            BELL SYSTEM PAVILION
            <br />
            NEW YORK WORLD&apos;S FAIR 1964-1965
          </h2>
          <p className={styles.lede}>
            A Chair ride through a series of scenes which show the story of
            communications. After being seated comfortably in your own contour
            chair -- each fitted with its own separate sound system -- you will
            see the miracles -- and progress of communications come alive during
            the next 14 minutes through such new theatrical techniques as three
            dimensional stage and film settings, and front and rear projections
            of still and motion pictures -- all accompanied to original music by
            Morton Gould with lyrics by Joseph Langland.
          </p>
          <figure className={`${styles.figure} ${styles.figureCentered}`}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/bell08/bell17.jpg"
                alt="Boarding the moving chairs"
                width={460}
                height={368}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.source}>
              SOURCE: A.T.& T. Photo Archives
            </figcaption>
          </figure>

          <h2 className={styles.blockHeading}>Cocoon Seating</h2>
          <div className={styles.split}>
            <figure className={`${styles.splitFigure} ${styles.splitFigureEnd}`}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell15.jpg"
                  alt="Chair advertisement"
                  width={210}
                  height={265}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <p className={styles.splitText}>
              Cocoon-like, glass fiber seating has been developed for Bell
              Telephone pavilion. Interior of seat is covered with nylon
              upholstery and full foam seat and back. Interior also includes
              thin, acoustical absorbent urethane foam underneath cotton jersey
              fabric. Seats number 1000 are mounted on conveyor belts that take
              people through Bell&apos;s exhibit. They have green exterior and
              blue interior. American Seating Co., 901 Broadway, Grand Rapids,
              Mich.
            </p>
          </div>
          <p className={styles.source}>
            SOURCE: American Seating Co. advertisement, publication unknown
          </p>

          <h2 className={styles.blockHeading}>Bell System Ride</h2>
          <div className={styles.split}>
            <p className={styles.splitText}>
              The complete story of communications is told in a 10-minute ride
              through 50 three-dimensional scenes, into which are projected film
              characters. This ride is one of the Fair&apos;s really big A-V
              stories ... it incorporates a 104-foot special black material
              screen supplied by the Trans-Lux Corporation. LEFT: Battery of 65
              16mm Norelco projectors in the Bell Systems pavilion. They provide
              the show for Bell&apos;s &quot;1,000 chair ride.&quot;
            </p>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell23.jpg"
                  alt="Row of projectors"
                  width={210}
                  height={251}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <p className={styles.source}>
            SOURCE: Industrial Photography, Vol. 13 No. 5, May 1964
          </p>

          <hr className={styles.sectionRule} />

          <h2 className={styles.featureTitle}>BELL SYSTEM PAVILION</h2>
          <p className={styles.featureTagline}>
            armchair &quot;sound ride&quot; takes 1,000 viewers on film journey
            &quot;From Drumbeat to Telstar&quot;
          </p>

          <div className={styles.split}>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell63.jpg"
                  alt="Pavilion Aerial"
                  width={346}
                  height={376}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                The Bell System Pavilion is a 400-foot &quot;floating wing&quot;
                which offers a chair ride and series of live demonstrations.
              </figcaption>
            </figure>
            <div className={`${styles.prose} ${styles.dropCap}`}>
              <p>
                THE &quot;RIDE&quot; in the Bell System Pavilion is one of the
                most complex and interesting film experiences of the Fair. The
                1,000 moving armchairs with built-in speakers in two continuous
                loops of 500 each on two levels carry spectators through a
                15-minute program which involves 65 motion pictures on
                individual screens.
              </p>
              <p>
                Titled <em>From Drumbeat to Telstar</em>, the program takes us
                from man&apos;s first efforts to communicate -- with voice,
                drumbeats, smoke signals -- on through the discovery of symbols,
                numbers, the written word and modern developments -- the
                telephone and Telstar. The story is told by speakers
                synchronized to the action on the screen for each individual
                chair.
              </p>
              <Image
                src="/images/bell08/bell65.jpg"
                alt=""
                width={161}
                height={94}
                className={styles.inlineLogo}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.split}>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell64.jpg"
                  alt="Waiting Lines"
                  width={306}
                  height={241}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Familiar visitor&apos;s line awaiting turn along Bell&apos;s
                ride. Crowd control is very good here.
              </figcaption>
            </figure>
            <div className={styles.prose}>
              <p>
                The ride was conceived by the Pavilion&apos;s designer, Jo
                Mielziner, working with architect Harrison &amp; Ambramovich,
                motion picture engineers -- the Reevesound Company, and the film
                producers, Owen Murphy Productions.
              </p>
              <p>
                On the 65 screens -- which cannot be seen as screens at all
                since they are veiled in various thicknesses of gauze curtains
                called scrims -- are short pieces of action performed by Hal
                Holbrook, noted stage actor of &quot;Mark Twain&quot; fame.
              </p>
            </div>
          </div>

          <div className={styles.split}>
            <div className={styles.prose}>
              <p>
                Mr. Holbrook will be seen calling &quot;hello&quot; in an early
                part of the ride, sending smoke signals, inventing the printing
                press or the telephone. It takes an average of six seconds for
                each chair to pass each individual screen (although many of the
                screens are grouped in a single tableau). On the screens are
                endlessly repeated actions on looped films which run from six to
                15 seconds.
              </p>
            </div>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell61.jpg"
                  alt="Ride Train Chairs"
                  width={306}
                  height={182}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Sound-equipped upholstered chairs which carry visitors along the
                ride.
              </figcaption>
            </figure>
          </div>

          <div className={styles.prose}>
            <p>
              What is amazing about this is that there is no point at which the
              action can be seen to obviously stop and repeat itself -- no jerks
              at the splices to spoil the smoothness.
            </p>
            <p>
              Director Paul Cohen, of Owen Murphy Productions, achieved this by
              working with Mr. Holbrook until he was able to perform an action
              &quot;forward&quot; and then smoothly continue &quot;backward&quot;
              to the point of origination of the action. In other words, he
              would pick up a pen, write a few words, fold the paper, and lay it
              aside. Then he would continue right on doing the same thing, but
              backwards.
            </p>
            <p>
              With this forward and backward action on film, editors could then
              print the &quot;forward&quot; portion straight, reverse print the
              &quot;backward&quot; portion, and splice almost anywhere in the
              action without it being noticeable on the screen. If this sounds
              complicated, it most assuredly is, but it works.
            </p>
            <p>
              To achieve the effect of having none of the screens visible,
              Designer Joe Mielziner has used multiple scrims before each one,
              and the figures in the film are performing entirely with limbo
              backgrounds. There are no frame lines anywhere visible. This was
              accomplished by photographing the action on a blue cyclorama set.
              Then, by printing this through a blue filter, a matte exactly
              matching the action is obtained. Printing both together produces a
              film with no background, no frame lines, and the character
              entirely in limbo.
            </p>
          </div>

          <div className={styles.split}>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell59.jpg"
                  alt='Scene from "Drumbeat to Telstar"'
                  width={303}
                  height={212}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Scenes for the 65 loop films which carry the story of &quot;From
                Drumbeat to Telstar&quot; along the chair ride are seen through
                scrims of varying styles, thickness so that there is no apparent
                background, no visible frame lines. Resulting fuzziness (at
                time) doesn&apos;t improve quality.
              </figcaption>
            </figure>
            <div className={styles.prose}>
              <p>
                Each of the 65 loops in the program is changed daily. It is
                estimated that an average loop goes through 5,000 runs during
                the 12-hour day before it is discarded. For the producer, this
                means a regular editing staff constantly preparing new loops for
                the projectors.
              </p>
              <p>
                With all these extraordinary complexities, it is a tribute to
                the designer, producer and engineers that the Bell System ride
                started operating at 10 AM on the opening day of the Fair and
                has continued with no breakdowns ever since. The Pavilion&apos;s
                percentage of visitors has steadily increased and{" "}
                <em>From Drumbeat to Telstar</em> seems settled into a long,
                successful run.
              </p>
            </div>
          </div>

          <h2 className={styles.subhead}>
            Design and Engineering of the Bell Show
          </h2>

          <div className={styles.split}>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell62.jpg"
                  alt="Banks of Projectors"
                  width={340}
                  height={308}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Battery of 65 Norelco 16mm projectors lines up along slightly
                curved ramp behind the 1,000 chair ride in the Pavilion.
                Overhead-first-surface mirrors increase projection distance and
                image size.
              </figcaption>
            </figure>
            <div className={`${styles.prose} ${styles.dropCap}`}>
              <p>
                DESIGN AND ENGINEERING installation in the Bell System Pavilion
                was a major task in itself, primarily centering on the 1,000
                chair &quot;sound&quot; ride which occupies a mobile ramp in the
                &quot;floating&quot; wing of the wide structure.
              </p>
              <p>
                Produced by Jo Mielziner of New York, this unusual theatrical
                presentation has projection and sound systems of unique
                capability which were created by Reevesound. A monaural sound
                system of special two-ear design is built into each of the 1,000
                upholstered lounge-type chairs.
              </p>
              <p>
                This sound system utilized two tracks on Reevesound&apos;s
                four-track, sixteen-millimeter reproducing system, with like
                programs being fed through right and left ear speakers,
                positioned at the upper inside of the chairs. Individuals are
                provided with a sound program that is synchronized with the
                ride.
              </p>
            </div>
          </div>

          <div className={styles.split}>
            <div className={styles.prose}>
              <p>
                Reevesound&apos;s projection system in the cavern includes a
                battery of sixty-five 16mm Norelco projectors equipped with 1600
                watt Zeiss Xenosol II light sources, first-surface mirrors,
                continuous duty synchronous motors and specially designed film
                loop supports.
              </p>
              <p>
                Projectors, lamps, rectifiers and loop racks are located on long
                platforms behind a series of rear projection screens. A
                first-surface mirror placed at the front of each projector
                mechanism receives light from the projector, redirects it to
                similar, larger mirrors positioned overhead, which transfer
                light to rear projection screens ahead. This system of mirror
                optics is used to increase projection distance and image size.
              </p>
              <p>
                This combination of continuous 16mm film loops, synchronous
                motors and Xenon lamps gives the Reevesound system long
                operating life with minimum maintenance requirements on film and
                projection equipment.
              </p>
            </div>
            <figure className={styles.splitFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell60.jpg"
                  alt="Projector Closeup"
                  width={144}
                  height={141}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Closeup of one of the 65 Reevesound-modified 16mm Norelco
                projectors used along chair ride in the Bell Pavilion. Each
                projector is equipped with 1600-watt Zeiss Xenosol-II lighting
                source, a first-surface mirror and the 16mm film &quot;loop&quot;
                rack which can be seen at left in scene.
              </figcaption>
            </figure>
          </div>

          <div className={styles.theaterPair}>
            <figure className={styles.theaterItem}>
              <p className={`${styles.caption} ${styles.theaterCaption}`}>
                Exterior of small &quot;stand-up&quot; theater in main downstairs
                exhibit area. Audiences of 80-100 persons see a multi-screen
                slide presentation on many facets of telephone service; show is
                repeated every 15 minutes
              </p>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell67.jpg"
                  alt="Stand-up Theatre Entrance"
                  width={300}
                  height={243}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.theaterItem}>
              <p className={`${styles.caption} ${styles.theaterCaption}`}>
                Inside the &quot;stand-up theater: the slide show utilizes
                colorful lighting effects, Technamation techniques. Scenes come
                up on several panels individually and &quot;en masse&quot;
                through both front and rear projection.
              </p>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bell08/bell68.jpg"
                  alt="Theatre Screen"
                  width={300}
                  height={180}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <p className={styles.source}>
            SOURCE: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bell07"
        overviewHref="/bell01"
        nextHref="/bellridescripts"
      />
    </>
  );
}
