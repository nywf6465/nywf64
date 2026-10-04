import type { Metadata } from "next";
import Image from "next/image";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bilgra08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Movie with a Message | The Miracle of TODD-AO | Brochure — Billy Graham — nywf64.com",
  description:
    "Movie with a Message, The Miracle of TODD-AO, and a souvenir brochure from the Billy Graham Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham — Movie with a Message / The Miracle of TODD-AO / Brochure.
 * Body from legacy bilgra08.html (custom multi-section feature).
 *
 * Stack: hero → BilgraNavChrome → navy titles → article sections → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav (and between sections).
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (mans extra, Bronkbank elsewhere) is preserved here as shown.
 */
export default function Bilgra08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Billy Graham">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/bilgraoverview/hero-banner.jpg"
            alt="Billy Graham Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BilgraNavChrome />

      <article className={styles.article} aria-labelledby="bilgra08-title">
        <header className={styles.titleBar}>
          <h1 id="bilgra08-title" className={styles.titleBarMain}>
            Movie with a Message
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/bilgra08/bilgra45.jpg"
                alt="On location shooting"
                width={300}
                height={315}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Billy Graham (right) discusses scene with Dick Ross, producer of
              Mr. Graham&apos;s World&apos;s Fair production, &quot;Man in the
              Fifth Dimension.&quot;
            </figcaption>
            <p className={styles.storyHeadline}>Movie With A Message</p>
          </figure>

          <div className={styles.body}>
            <p>
              A good film, in the opinion of many movie critics, is one which
              evokes a positive emotional response. The noted playwright,
              Maxwell Anderson, likened such a response to a religious
              experience.
            </p>
            <p>
              If this is the criterion for judging films, then there is an
              extremely good film being shown hourly in the Billy Graham
              Pavilion. The avowed purpose of &quot;Man in the Fifth
              Dimension&quot; is to move viewers to receive Christ as Savior
              and Lord -- right there and then. Certainly, this is a call to a
              positive emotional response, whose demand for immediacy and
              importance of decision is without precedent in film annals. But
              judging from the lines making their way to the counseling rooms
              behind doors at each end of the screen, it is a successful call.
            </p>
            <p>
              The film, the focal point of the &quot;crusade in Flushing
              Meadow,&quot; is shown in a red-carpeted, gold-draped theater
              which seats 400. The exterior brick walls of the theater are
              striking photo presentations in themselves. They are lined with
              14 photographic enlargements which trace Mr. Graham&apos;s
              worldwide crusades. Two backlighted panels are four feet by 20
              feet, and 12 panels are nine feet by four feet.
            </p>
            <p>
              Made by Mr. Graham&apos;s own World Wide Picture Company, the
              28-minute, 70mm Todd-AO color film was filmed at spiritually
              significant locales throughout the world, and details the story
              of man from the Creation. It closes with Mr. Graham&apos;s call
              to make a decision for Christ. During the first year of the Fair,
              it is estimated that more than one million people will see the
              film.
            </p>
            <p>
              A unique feature of the film presentation is a simultaneous
              translation system, similar to that in use at the United Nations,
              to reach visitors from abroad. Speaking in English, Mr. Graham is
              heard narrating the film. A control built into the arm rest of
              each chair in the air-conditioned theater can switch the sound
              track to a choice of six different languages which are heard
              through a plastic earpiece: French, Spanish, Chinese, Russian,
              Japanese and German. The multi-lingual seven-channel system was
              installed by Round Hill Associates. It is hoped that in the
              second year of the Fair, eight-channel translation will be
              possible.
            </p>
            <p>
              &quot;Man in the Fifth Dimension&quot; took seven months to
              shoot, and was World Wide Pictures&apos; most ambitious effort to
              date. Scripted by James F. Collier, it was produced by World
              Wide&apos;s president, Dick Ross. Mr. Ross was an American Film
              Festival Blue Ribbon winner for the movie &quot;Africa On The
              Bridge,&quot; a documentary of the Billy Graham Crusade in the
              emerging continent.
            </p>
            <p>
              Filming took the company from Mount Palomar, where footage was
              shot through the great 200-inch telescope there, to the Holy
              Land. Interior scenes were filmed at Paramount&apos;s Studios in
              Hollywood.
            </p>
            <p>
              Visiting the Holy Land can be a moving experience for anyone. But
              tensions between Israel and the Arab world can make location
              shooting there difficult.
            </p>
            <p>
              The religious rift splitting the Holy Land was felt when Mr. Ross
              and Jim Collier went from the Jordanian side of Jerusalem,
              through the Mandelbaum Gate to the Israeli sector for some
              advance location scouting. The rest of the crew remained behind
              at the Ambassador Hotel in Jordan.
            </p>
            <p>
              &quot;We were at the King David Hotel, not more than a couple of
              hundred yards from the Ambassador,&quot; Mr. Ross notes. &quot;but
              because of the restrictions on communications between the two
              countries, we couldn&apos;t call our friends to tell them of our
              plans.
            </p>
            <p>
              &quot;Finally, we called our London office and had them relay the
              message. We had to span continents to communicate with friends
              less than a quarter of a mile away.&quot;
            </p>
          </div>
          <p className={styles.source}>
            Source: <em>Industrial Photography</em>, May 1964
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>The Miracle of TODD-AO</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.toddLayout}>
            <div className={styles.toddSide}>
              <p className={styles.toddHeading}>
                THE MIRACLE
                <br />
                OF TODD-AO
              </p>
              <Image
                src="/images/bilgra08/bilgra40.jpg"
                alt="Actual Size 70mm Film"
                width={176}
                height={395}
                className={styles.photoPlain}
                unoptimized
              />
            </div>
            <div className={styles.toddMain}>
              <Image
                src="/images/bilgra08/bilgra41.jpg"
                alt="Filing the hall of fame sequence"
                width={300}
                height={209}
                className={styles.photoPlain}
                unoptimized
              />
              <div className={styles.body}>
                <p>
                  <span className={styles.dropcap}>T</span>ODD-AO is a
                  revolutionary motion picture process in which the
                  photographic methods and projection allow the audience to be
                  a participant in every scene. The miracle of special lenses
                  with 128 degrees of viewing angle and the curved screen
                  provide realism and intimacy, using the principles by which
                  the human eye sees.
                </p>
                <p>
                  The excitement of participation in the action is further
                  heightened by the TODD-AO 6-channel sound system reproduced
                  through five carefully spaced speakers behind the screen and
                  a battery of &quot;surround speakers&quot; at the rear of the
                  auditorium. The result to the viewer is the illusion of
                  center seats in a great concert hall.
                </p>
                <p>
                  To the left on this page is a life-size reproduction of a
                  strip of 70-millimeter film from{" "}
                  <em>Man in the 5th Dimension</em>, showing the magnetic tracks
                  on which the stereophonic sound is recorded on each side of
                  the picture frame.
                </p>
              </div>
              <Image
                src="/images/bilgra08/bilgra42.jpg"
                alt="Theater Interior"
                width={300}
                height={159}
                className={styles.photoPlain}
                unoptimized
              />
            </div>
          </div>
          <p className={styles.source}>
            Source: Souvenir Book, <em>Man in the Fifth Dimension</em>
          </p>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Brochure</h2>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.brochureSpread}>
            <Image
              src="/images/bilgra08/bilgra56.jpg"
              alt="Cover"
              width={254}
              height={481}
              className={styles.photoPlain}
              unoptimized
            />
            <div className={styles.brochureCopy}>
              <p className={styles.brochureTagline}>an evangelistic</p>
              <p className={styles.brochureTagline}>message for the</p>
              <p className={styles.brochureTagline}>millions</p>
              <p className={styles.brochureLanguages}>
                presented in 7 languages
              </p>
              <p>
                The &quot;greatest man-made show in history&quot; -- the
                spectacular New York World&apos;s Fair -- is open from April to
                October, 1964 and 1965.
              </p>
              <p>
                The Gospel of Jesus Christ is not man-made, but it will be
                proclaimed day and night in several languages through &quot;Man
                in the Fifth Dimension.&quot; This new film is to be shown 12
                times a day, seven days a week, in the specially-designed Billy
                Graham Pavilion.
              </p>
              <p>
                The dynamic message and glorious color of the film, the unusual
                wrap-around screen and the air-conditioned solitude of the
                theatre, will present the Gospel message with a powerful impact
                on every viewer.
              </p>
              <p>
                As the film closes with an invitation from Mr. Graham, a trained
                staff of counselors -- fluent in several languages -- will
                minister to each inquirer.
              </p>
            </div>
          </div>

          <div className={styles.brochureInterior}>
            <Image
              src="/images/bilgra08/bilgra57.jpg"
              alt="Interior Page"
              width={481}
              height={434}
              className={styles.photoPlain}
              unoptimized
            />
          </div>

          <div className={styles.brochureTextRow}>
            <p>
              This new evangelistic film epic, specially produced for this
              Gospel witness at the Fair, undertakes to describe mans extra or
              &quot;fifth&quot; dimension -- the life of the human spirit. In
              swift sequence the giant galaxies, tiny microscopic organisms,
              saints and savants of history, cultures and civilizations of the
              heroic past are summoned to bear testimony to the Glory of God
              and the spiritual nature of man. Then the story narrows down to
              one solitary individual, Jesus Christ, the Carpenter of Nazareth,
              and the effect of this Man upon the world. The film closes on a
              highly personal note as Mr. Graham invites viewers to receive
              Christ as Savior and Lord.
            </p>
            <div className={styles.brochureInset}>
              <Image
                src="/images/bilgra08/bilgra58.jpg"
                alt="Acropolis"
                width={150}
                height={99}
                className={styles.photoPlain}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.contactBlock}>
            <p className={styles.contactLead}>
              To request information or to offer financial assistance, write
              to:
            </p>
            <p className={styles.contactName}>
              THE BILLY GRAHAM EVANGELISTIC ASSOCIATION
            </p>
            <p className={styles.contactAddr}>
              1300 Harmon Place, Minneapolis 3, Minnesota
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 481 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/bilgra08/bilgra55.jpg"
                alt="Back Page"
                width={481}
                height={296}
                className={styles.photoPlain}
                unoptimized
              />
            </span>
            <p className={styles.source}>
              Source: Souvenir Brochure, Billy Graham Pavilion
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bilgra07"
        explicitPrevious
        overviewHref="/bilgraoverview"
        nextHref="/bilgra09"
      />
    </>
  );
}
