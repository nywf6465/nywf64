import type { Metadata } from "next";
import Image from "next/image";
import { DupontNavChrome } from "@/components/DupontNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./dupont14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Red Room — DuPont — nywf64.com",
  description:
    "The Red Room chemistry demonstrations at the DuPont Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * DuPont — The Red Room.
 * Body from legacy dupont14.html (custom feature page — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → DupontNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (pro cess, or orlon) preserved.
 */
export default function Dupont14Page() {
  return (
    <>
      <section className={styles.hero} aria-label="DuPont">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/dupontoverview/hero-banner.jpg"
            alt="DuPont Pavilion at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <DupontNavChrome />

      <article className={styles.article} aria-labelledby="dupont14-title">
        <header className={styles.titleBar}>
          <h1 id="dupont14-title" className={styles.titleBarMain}>
            The Red Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.lede}>
            Each half hour, DuPont&apos;s twin theaters funneled 600 visitors
            into the Red Room, a &quot;stand up&quot; theater which offered a
            12-minute show of chemistry &quot;magic.&quot;
          </p>
          <p className={styles.lede}>
            Four casts, each with three actors, performed the demonstrations.
            Preparations for the shows were made by a total of six &quot;prep
            boys.&quot; A pool of 20 musicians took turns providing background
            music.
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont14/dupont08.jpg"
                alt="Chemical Wizardry display in the Red Room"
                width={165}
                height={136}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Chemical Wizardry display in the Red Room
            </figcaption>
          </figure>

          <p className={styles.lede}>
            Last year these &quot;magic&quot; shows consumed 15,275 lbs. of dry
            ice; 100,000 feet of &quot;Dacron&quot; polyester fiber; 9000 rubber
            balls; and 145 gallons of simulated tomato juice, in addition to
            copious quantities of more than 25 other chemicals.
          </p>

          <p className={styles.dashner}>
            <span className={styles.dashnerName}>Ray Dashner</span>, tape
            recorder in hand, preserved the soundtracks of many of the New York
            World&apos;s Fair shows for his own enjoyment. Now, relive the
            sounds of the Fair through Ray&apos;s fabulous recordings!
          </p>

          <div className={styles.listenRow}>
            <p className={styles.listenTitle}>
              Du Pont&apos;s
              <br />
              <em>&quot;Wonderful World of Chemistry&quot;</em>
              <br />
              Demonstrations
              <br />
              Soundtrack 1965
            </p>
            <div>
              <a
                className={styles.listenLink}
                href="/audio/dupont/Dashner_DuPont_Demo.mp3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/dupont14/sound.gif"
                  alt=""
                  width={20}
                  height={23}
                  className={styles.soundIcon}
                  unoptimized
                />
                LISTEN! <span className={styles.listenSize}>(4.59MB)</span>
              </a>
              <p className={styles.source}>
                Source: Ray Dashner Archives 2007 All Rights Reserved
              </p>
            </div>
          </div>
          <audio
            className={styles.player}
            controls
            preload="none"
            src="/audio/dupont/Dashner_DuPont_Demo.mp3"
          >
            Your browser does not support the audio element.
          </audio>

          <h2 className={styles.sectionHead}>
            Synopsis of Chemistry Demonstrations
          </h2>

          <figure className={`${styles.figure} ${styles.figureCentered}`}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont14/dupont25.jpg"
                alt='"Wonderful World of Chemistry" Logo'
                width={180}
                height={155}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <p className={styles.demo}>
            <span className={styles.demoLabel}>
              1. Freezing a Flower in Freon.
            </span>{" "}
            In this demonstration a flower such as a carnation or a rose is
            dipped for a few moments in Freon. Since the Freon is at about 50
            degrees below zero, the flower freezes instantly. The flower is
            removed from the Freon and when struck on the table top, it shatters
            like glass.
          </p>
          <p className={styles.source}>
            Source: Book <em>&quot;Science at the Fair&quot;</em>
          </p>

          <p className={styles.demo}>
            <span className={styles.demoLabel}>
              2. Rubber vs. Adiprene Balls in Freon.
            </span>{" "}
            A rubber ball frozen in Freon will shatter like glass when dropped
            on the floor. A ball made of DuPont Adiprene, on the other hand,
            retains its elasticity and bounces after its immersion in Freon.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>3. Disappearing Blue.</span> In
            this demonstration a large flask containing a clear liquid changes
            to a deep blue color when the flask is shaken. This blue color
            slowly changes back into a clear solution again. This can be done
            repeatedly by simply shaking the flask. This demonstration is based
            on the fact that a certain indicating dye will turn deep blue when
            combined with air which is accomplished by the shaking. Another
            chemical in the flask reverses this situation and the liquid becomes
            colorless.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>4. Hindu Rope Trick.</span> This
            demonstration features DuPont Stren which is a Nylon fishing line.
            It is so fine and transparent that we can reconstruct the well known
            Hindu Rope Trick by attaching the Stren to a piece of manila rope
            and using it to lift the rope, which then hovers in mid-air as
            though unsupported.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>5. Conductive Paint.</span> A tape
            recorder is separated from its loud-speaker by a panel of transparent
            plastic sheet so that although the tape recorder is mechanically
            operating, no sound comes out of the loudspeaker since it is not
            electrically connected. An aerosol dispenser containing a paint
            which conducts electricity is used to &quot;spray&quot; 2
            &quot;wires&quot; leading from the tape recorder to the speaker.
            Completion of the second &quot;wire&quot; electrically connects the
            speaker and it begins to play.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>6. Instant Nylon.</span> A large
            container contains 2 liquids, one of them floating on the other.
            Where the two liquids meet, polymerization occurs and pure nylon is
            produced. This film of nylon can be lifted out of the liquids by
            wearing rubber gloves and reaching through the top liquid. this
            process is continuous and a cord of nylon can be drawn continuously
            from this container until one of the liquids is depleted.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>7. Dacron 88.</span> A strand of
            unstretched Dacron 88 is held and stretched to over twice its length.
            When the strand is released, the stretched fiber bunches up or
            fluffs since each individual filament has now become crimped by the
            stretching pro cess.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>8. Baymal.</span> A tube about
            3&apos; long and 4&quot; in diameter is partly filled with a thick
            white liquid, Baymal. This substance is thixotropic; i.e., the liquid
            gels or becomes firm in about 10 seconds so that if the cylinder is
            held vertically with the liquid Baymal at the bottom, in 10 seconds
            it can be turned over so that the Baymal stays at the top. The
            Baymal can be liquefied by simply shaking the tube after which it
            will gel again. This can be done endlessly.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>9. Lucite Paint.</span> Lucite
            Paint is also thixotropic, which is the reason for its
            &quot;no-drip&quot; qualities. To prove this, we drape an expensive
            fur or orlon coat over a table using it as a drop cloth. The open
            can of paint is placed on the coat and a panel held above the coat
            is painted.
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont14/dupont18.jpg"
                alt="Tipersul demonstration"
                width={448}
                height={267}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Showman&apos;s hand is shielded by &quot;Tipersul&quot; fibrous
              potassium titanate when he holds 1800°F. coupling.
            </figcaption>
          </figure>

          <p className={styles.demo}>
            <span className={styles.demoLabel}>10. Tipersul.</span> A performer
            lays a piece of 1/8&quot; Tipersul on his open palm and an assistant
            places a red hot bolt on the Tipersul. This thin sheet protects his
            hand and the performer shows the high temperature of the bolt by
            dropping it on a piece of wood which catches fire.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>
              11. Mylar and Butacite Drum.
            </span>{" "}
            Two drums about 3&apos; in diameter have their ends covered with
            Mylar and Butacite respectively. A heavy solid Lucite bowling ball
            is dropped onto the plastic sheets from a height of about 3&apos;.
            upon striking the Mylar, the ball rebounds sharply. The Butacite
            drum, however, cushions the blow and the rebound of the ball is
            substantially less.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>12. Jacob&apos;s Ladder.</span> A
            50,000-volt arc up to a foot long is generated between two vertical
            rods in the form of a &quot;V&quot;. A piece of wood placed in the
            gap catches fire immediately because of the intensity of the arc. A
            sheet of Mylar is then placed in the gap, power turned on, but the
            arc does not strike due to the high insulating ability of the Mylar.
            As soon as the Mylar sheet is removed, the arc is immediately
            generated.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>13. Zepel.</span> A piece of cloth
            is prepared with the letters Z-E-P-E-L printed on it with Zepel which
            cannot be seen. Stains of various sorts such as ink, tomato juice,
            salad oil, etc., are poured on the cloth and stain it completely
            except where the material has been treated with Zepel. The letters
            Z-E-P-E-L then stand out since they are unstained.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>14. Iodine Clock.</span> In this
            demonstration a small quantity of clear liquid is added to a large
            flask containing another clear liquid. In the order of 10 seconds
            the solution turns instantly black.
          </p>

          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/dupont14/dupont17.jpg"
                alt="Color Sequence demonstration"
                width={192}
                height={325}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Dyes change liquid&apos;s color each time it&apos;s poured.
            </figcaption>
          </figure>

          <p className={styles.demo}>
            <span className={styles.demoLabel}>15. Color Sequence.</span> The
            black solution from the previous demonstration is then poured into 4
            beakers. The black solution becomes colorless, then red, then wine
            colored and finally blue as it is transferred from one beaker to the
            other.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>16. Parabolic Mirrors.</span> Two
            highly polished parabolic mirrors 5&apos; in diameter are mounted to
            face each other. A light source at the focal point of one mirror is
            used to reflect light from that mirror through a distance of about
            50&apos; to the other mirror. The second mirror refocuses the light
            at its focal point at which a match can be ignited.
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>17. Vortex Gun.</span> A Vortex
            Gun 4&apos; in diameter generates a vortex (concentrated jet of air)
            which is used to blow out a flame, rattle a sheet of paper, etc. (at
            a distance of 40&apos; to 60&apos;)/
          </p>
          <p className={styles.demo}>
            <span className={styles.demoLabel}>18. Chemiluminescence.</span> A
            small amount of liquid is added to about a quart of liquid in a
            6-qt. spherical flask. when the mixture is shaken, intense blue or
            yellow is produced. This light is generated completely by the
            chemicals in the flask.
          </p>
          <p className={styles.source}>
            Source: Above photos presented courtesy Bill Cotter Collection and
            are © Copyright 2007 Bill Cotter, All Rights Reserved
          </p>

          <p className={styles.cotter}>
            <span className={styles.cotterName}>Bill Cotter</span>, World&apos;s
            Fair enthusiast, has been collecting images of the 1964/1965 New York
            World&apos;s Fair for many years. He shares with us here some views
            of It&apos;s a Small World. If you would like to see more photos from
            Bill&apos;s fabulous collection of World&apos;s Fair images, visit
            his website at{" "}
            <a
              href="http://www.worldsfairphotos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WorldsFairPhotos.com
            </a>
            .
          </p>

          <div className={styles.photoGrid}>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/dupont14/dupont47.jpg"
                  alt="Color Sequence"
                  width={400}
                  height={269}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Color Sequence Demonstration
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/dupont14/dupont48.jpg"
                  alt="ZEPEL Demonstration"
                  width={400}
                  height={268}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                ZEPEL Stain Blocking Demonstration
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/dupont14/dupont49.jpg"
                  alt="Iodine Clock"
                  width={400}
                  height={266}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>Iodine Clock</figcaption>
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/dupont13"
        explicitPrevious
        overviewHref="/dupontoverview"
        nextHref="/dupont15"
      />
    </>
  );
}
