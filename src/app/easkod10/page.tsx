import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Article: The Kodak Pavilion — Eastman Kodak — nywf64.com",
  description:
    "Business Screen magazine article on the Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak pavilion article.
 * Body from legacy easkod10.html.
 */
export default function Easkod10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod10-title">
        <header className={styles.titleBar}>
          <h1 id="easkod10-title" className={styles.titleBarMain}>
            Article: The Kodak Pavilion
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.headline}>THE KODAK PAVILION</p>
          <p className={`${styles.italicLead} ${styles.center}`}>
            within its free-form building, two theaters
            <br />
            with 70mm films and many visual displays
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod50.jpg"
              alt="Shadow-box kiosks"
              width={450}
              height={176}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              <em>
                Shadow-box &quot;kiosks&quot; present Recordak features on
                rear-projected continuous slides, using Eastman Carousel
                equipment in system.
              </em>
            </p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod51.jpg"
              alt="Slide projection installation"
              width={150}
              height={162}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              <em>
                Slide projection installation in kiosk showing modified Eastman
                Carousel projector with 450-watt Cinemeccanica Xetron light
                beam.
              </em>
            </p>
          </figure>
          <p className={styles.body}>
            THE ARTISTRY of visualization expected of a leader in photographic
            equipment and materials has been achieved in the imaginative and
            exciting free-form building of the Kodak Pavilion.
          </p>
          <p className={styles.body}>
            Picture-making opportunities abound on its &quot;Moondeck&quot;
            roof; the world&apos;s largest outdoor color prints illuminate the
            dominant &quot;Picture Tower.&quot; Within, a pair of round theaters
            each present excellent 70mm motion pictures.
          </p>
          <div className={styles.row}>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod10/kod52.jpg"
                alt='Kodak "Instamatic" kiosk'
                width={300}
                height={371}
                className={styles.figureImg}
                unoptimized
              />
            </figure>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod10/kod53.jpg"
                alt="Film projector"
                width={300}
                height={187}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                Above:{" "}
                <em>
                  Kodak&apos;s &quot;chimpanzee&quot; film projected in the
                  &quot;Instamatic&quot; kiosk
                </em>{" "}
                (at left)
                <em>
                  {" "}
                  is assured bright, sharp images by use of modified Eastman
                  16mm arc mechanism with its Zeiss Xenosol II lamphouse and
                  continuous film loop. Long operating life, minimum care were
                  objectives.
                </em>
              </p>
            </figure>
          </div>
          <p className={styles.body}>
            Dozens of small &apos;kiosks&quot; around the exhibit areas offer
            rear-projected slides and motion pictures on Kodak products and a
            good part of the pavilion is devoted to examples of the best in
            modern picture-taking; aerial photography, TIROS weather pictures,
            and the like.
          </p>
          <p className={styles.body}>
            And throughout the Fairgrounds, Kodak signs point out good picture
            possibilities, including correct exposures and even simple prints
            for the camera fan!
          </p>
          <p className={styles.subhead}>Projection Engineering</p>
          <p className={styles.body}>
            Working closely with producers, architects, technical representatives
            of Eastman Kodak Company and Eastman Chemical Products, Inc. from
            earliest planning stages, Reevesound provided more than two dozen
            motion picture technical systems for the Kodak Pavilion. These
            include projection, sound and control devices located in two
            theaters and in a number of individual displays strategically
            located throughout the Pavilion.
          </p>
          <p className={styles.body}>
            Reevesound&apos;s projection, sound and control system in the Dome
            Theater includes one Norelco 35/70mm projector operating at 70mm,
            equipped with a 2500 watt Zeiss Xenosol II light source. A special
            selsyn drive electrically interlocks the projector and a
            pre-programmed 60-channel sound system and a dimmer bank for
            synchronous operation of theater lights.
          </p>
          <p className={styles.body}>
            As adapted by Reevesound, an Industrial Timer controller utilizes
            sixty of eighty-two available channels, regulating thirty load
            circuits. One foot of tape controls sixteen seconds of program time.
            Interlock drive paces the tape as it controls faders, spots, screen
            and cove light, a six-channel sound system, an atom model and a
            Spitz star field projector, main feature of a thirteen-minute film.
          </p>
          <p className={styles.subhead}>&quot;The Searching Eye&quot;</p>
          <p className={styles.body}>
            Shown daily in the circular Tower Theater, the 20-minute color
            motion picture, <em>The Searching Eye</em>, is one of the focal
            points of the Kodak Pavilion. Produced by Saul Bass, the film
            dramatizes the heights of sensitivity to which vision may be honed
            on a motion picture screen.
          </p>
          <p className={styles.body}>
            Reevesound&apos;s unusual motion picture system in the Tower Theatre
            includes two 35/70mm Norelco projectors equipped with 2500 watt
            Zeiss Xenosol II lighting sources, plus a multi-channel control and
            audio system.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod54.jpg"
              alt="Kodak Pavilion Picture Tower"
              width={300}
              height={309}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              Visible all over the Fairgrounds,{" "}
              <em>
                the Kodak Picture Tower dominates the free-form Pavilion
                building with its multitude of visual shows.
              </em>
            </p>
          </figure>
          <p className={styles.body}>
            Reevesound&apos;s selsyn system electronically interlocks the two
            Norelco projectors. One presents a 35mm film while its mate shows a
            70mm film. Screen images resulting from this interlock operation of
            35mm and 70mm projection give the film producer a dual format
            capability which he needs to develop his theme and story.
          </p>
          <p className={styles.body}>
            This special system allows the two projectors to show alternate
            segments of film. The 35mm machine opens the show, projecting
            first-generation prints from original camera film. As the show
            progresses, the 70-mm projector picks up the story, showing
            composite prints all made from intermediates.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod56.jpg"
              alt="Tower Theater projection system"
              width={150}
              height={161}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              Tower Theater{" "}
              <em>
                projection system uses two 35/70mm Norelco projectors with
                2,500-watt Xenosol arc lamps and magnetic sound heads.
              </em>
            </p>
          </figure>
          <p className={styles.body}>
            Transitions from one machine to another are timed with great
            accuracy. Automatic dowsers close to keep lamp heat off black leader
            on the machine that is not in use. The dowser operations were
            programmed during production of the film, and operate by control
            tones carried on two of the magnetic stripes on the 35mm print.
          </p>
          <p className={styles.body}>
            Special Kodak/Reevesound motion picture systems are located in
            ground-level kiosks at Eastman Kodak Pavilion, displaying uses of
            photography in science. Systems include Eastman Model 25-B 16mm arc
            projector mechanism equipped with 1600 watt Zeiss Xenosol II light
            source and 130-foot 16mm Reevesound synchronous loop equipment.
          </p>
          <p className={styles.body}>
            First-surface mirrors mounted at front of projector mechanism and
            above projection equipment re-direct light until it reaches rear
            projection screen, where image is formed.
          </p>
          <p className={styles.body}>
            This special system for projecting a seven-minute sound motion
            picture utilizes a Xenon light source and continuous film loop for
            long operating life with minimum maintenance requirements.
          </p>
          <p className={styles.body}>
            An unusual Reevesound system in the Astronaut Bubble is designed to
            activate an animated astronaut in sync with optical sound track on
            16mm film and motion picture display. The sound track carries
            narration, as well as a subsonic signal to activate the astronaut.
            The system includes a Reevesound-modified Eastman 25-B 16mm
            mechanism equipped with a 900-watt Xenon arc lamp.
          </p>
          <div className={styles.row}>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod10/kod58.jpg"
                alt="Timer controller"
                width={150}
                height={170}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>
                  Modified Industrial Timer controller utilizes 60 of 82
                  available channels to control dimmer bank, 35/70mm projector,
                  six-channel sound system and other devices in the Dome
                  Theater.
                </em>
              </p>
            </figure>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod10/kod57.jpg"
                alt="Lumitron dimmer bank"
                width={150}
                height={172}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>
                  Lumitron dimmer bank atop six-channel sound system activate
                  fader, spots, screen, and cove lights in Dome Theater. Both
                  units are automatically controlled by Timer shown a t left.
                </em>
              </p>
            </figure>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod55.jpg"
              alt="Entrance to Tower Theater"
              width={300}
              height={212}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              At entrance to pavilion&apos;s Tower Theater,{" "}
              <em>
                this lighted panel proclaims &quot;The Searching Eye&quot; 70mm
                film feature, gives credits for production
              </em>
              .
            </p>
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod10/kod59.jpg"
              alt="Entrance to Dome Theater"
              width={300}
              height={362}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              <em>
                Below: one of comapny&apos;s many well-trained
                &quot;hosts&quot; greets visitors at entrance to Dome Theater
                where Eastman Chemical film is shown.
              </em>
            </p>
          </figure>
          <p className={styles.source}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod09"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod11"
      />
    </>
  );
}
