import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "U.S. Navy and Marine Corps — Transportation & Travel — nywf64.com",
  description:
    "U.S. Navy and Marine Corps exhibit at the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

function Newsletter27() {
  return (
    <section className={styles.newsletterBlock}>
      <p className={styles.source}>
        Source: T&amp;T Pavilion Newsletter, No. 29, March 2, 1964
      </p>
      <Image
        src="/images/trantrav11/tratra38.jpg"
        alt="Newsletter Header"
        width={600}
        height={106}
        className={styles.borderlessImg}
        unoptimized
      />
      <div className={styles.newsletterMeta}>
        <span>Number 29</span>
        <span>March 2, 1964</span>
      </div>
      <Image
        src="/images/trantrav11/tratra52.jpg"
        alt="Scale Model of Exhibit"
        width={400}
        height={301}
        className={styles.framedImg}
        unoptimized
      />
      <p className={styles.newsItem}>
        <u>THE FLEET&apos;S IN</u> -- U.S. Navy and Marine Corps participation in
        the Transportation &amp; Travel Pavilion has just been confirmed by the
        Department of Defense. Theme of the exhibit will be &quot;Around the World
        with the U.S. Navy.&quot;
      </p>
      <p className={styles.newsItem}>
        <u>THREE DIMENSIONAL</u> -- Highlight of the Navy-Marine exhibit will be an
        unique Navy-developed motion picture device that projects 35 mm color film
        onto a 180-degree concave screen filling almost the entire field of vision
        of the spectator. Special film footage depicting many of the unusual
        aspects of surface, air and underwater transportation currently in use by,
        or being developed by the Navy is now being shot by its camera crews
        throughout the world.
      </p>
      <p className={styles.newsItem}>
        <u>AROUND THE WORLD IN 180 DEGREES</u> -- Among the unusual sensations
        scheduled to be experienced by visitors to the Navy theater will be: a
        voyage under an Arctic icecap; a high speed ride in a hydrofoil vessel;
        surface travel and submersion in a &quot;Polaris&quot; submarine; catapulting
        from, and landing on, an aircraft carrier; a practice session with the
        Navy&apos;s &quot;Blue Angel&quot; precision flying team; a free-fall
        parachute jump; a combat ride in a Marine Corps helicopter over the jungles
        and rice fields of South Viet Nam and a high-speed, low-level flight on the
        Navy&apos;s world record-holding &quot;Phantom&quot; jet.
      </p>
      <p className={styles.newsItem}>
        <u>MODEL SHIPS</u> -- Also scheduled to be part of the Navy-Marine Corps
        exhibit is a display of scale models of ships and other types of equipment
        in use, or under development, by the Navy. The models, some of which will be
        accompanied by small-screen continuously-running motion pictures showing
        them in action, will be arranged in arcade form to entertain visitors
        waiting to enter the main theater.
      </p>
      <p className={styles.newsItem}>
        <u>ANCHORS AWEIGH</u> -- The Navy-Marine Corps exhibit will be located on
        the main floor of the building adjoining, appropriately enough, the special
        T&amp;T Cruise Ship Travel Center. Announcements of additional
        military-service exhibits are expected soon.
      </p>
      <Image
        src="/images/trantrav11/tratra40.jpg"
        alt="Newsletter Footer"
        width={600}
        height={27}
        className={styles.borderlessImg}
        unoptimized
      />
    </section>
  );
}

export default function Trantrav11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantrav11-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav11-title" className={styles.titleBarMain}>
            U.S. Navy and Marine Corps
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Newsletter27 />
          <hr className={styles.hr} />

          <section className={styles.articleSection}>
            <p className={styles.source}>
              Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
              Collection
            </p>
            <h2 className={styles.articleTitle}>NAVY CINE-GLOBE CRUISER</h2>
            <p className={styles.articleSub}>
              <em>ultra-realism of a superb training device</em>
            </p>
            <p className={styles.articleSub}>
              <em>surrounds viewers with action on the screen</em>
            </p>

            <div className={styles.photoPair}>
              <figure>
                <Image
                  src="/images/trantrav11/tratra53.jpg"
                  alt="Cine-Globe Cruiser Scene"
                  width={290}
                  height={227}
                  className={styles.framedImg}
                  unoptimized
                />
                <figcaption className={styles.captionItalic}>
                  <em>
                    Cine-Globe Cruiser scene shows a Navy fighter on a
                    &quot;strike&quot; mission, viewed from the pilot&apos;s angle;
                    audience figures are in foreground.
                  </em>
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/trantrav11/tratra54.jpg"
                  alt="Opening Cine-Globe Cruiser Scene"
                  width={290}
                  height={216}
                  className={styles.framedImg}
                  unoptimized
                />
                <figcaption className={styles.captionItalic}>
                  <em>
                    Opening scene in the Cine-Globe Cruiser show has jet trails
                    revolving outward until they fill the entire area of hemispheric
                    screen.
                  </em>
                </figcaption>
              </figure>
            </div>

            <div className={styles.threeCol}>
              <div>
                <p>
                  <span className={styles.dropCap}>T</span>HE &quot;WRAP-AROUND&quot;
                  projection system developed by The Jam Handy Organization is
                  bringing Fair visitors a bigger-than-life look at the Navy and
                  Marine Corps in action. The system is used in a Cine-Globe Cruiser
                  theater within the Travel &amp; Transportation Pavilion.
                </p>
                <p>
                  Landing a fast jet on an aircraft carrier, plunging beneath the sea
                  in a nuclear submarine, hitting the beach with the Marines ... all
                  these are typical scenes as the Cine-Globe presentation gives
                  amazing realism on its hemispheric screen. The system uses a
                  Handy-designed lens of a unique type that completely fills the
                  spectator&apos;s field of vision. The screen curves around and
                  above the viewer to give the &quot;you are there&quot; effect.
                </p>
                <p>
                  Standard-gauge 35mm film is used and the &quot;taking&quot; lens for
                  production of the sequences is similar to that of the projection
                  lens so that the simulated 3-D effect of the system is without
                  image distortion. The Cine-Globe system was originally devised by
                  JHO with the cooperation of the U.S. Navy to provide a realistic
                  training device for Naval Aviation and in Marine Corps tank training.
                  It simulates combat conditions, especially those involving fast
                  motion (such as a jet plane attack). The lens covers an extremely
                  wide angle (142 degrees) to almost match the field of vision of the
                  human eye.
                </p>
                <p><strong>Ten Minutes of Real Action</strong></p>
                <p>
                  The 10-minute presentation takes place in a theater with room on its
                  upper tiers (above the projector) for about 75 standees; a dozen or
                  so children are permitted
                </p>
                <figure>
                  <figcaption className={styles.captionItalic}>
                    <em>
                      The U.S. Army has this small walk-in theater in the Travel
                      &amp; Transportation Pavilion. It offers a movie, transparencies
                      and dioramas of modern Army.
                    </em>
                  </figcaption>
                  <Image
                    src="/images/trantrav11/tratra56.jpg"
                    alt="Army Theater"
                    width={200}
                    height={240}
                    className={styles.framedImg}
                    unoptimized
                  />
                </figure>
              </div>
              <div>
                <p>
                  to sit on the floor &quot;within&quot; the screen area, practically
                  &quot;inside&quot; the picture.
                </p>
                <p>
                  The Cine-Globe Cruiser&apos;s physical setup, utilizing a single
                  very wide-angle lens for both production and projection, standard
                  35mm motion picture films and a fold-up-and-carry hemispheric screen
                  has already been utilized by the Jam Handy Organization in some
                  stunning <em>commercial</em> presentations.
                </p>
                <p>
                  It is this kind of &quot;carry-out&quot; idea which business users
                  of the film will be seeking at the Fair. The cost and complexity of
                  larger, &quot;permanent-type&quot; exhibits discourages their use
                  outside of the exposition grounds.
                </p>
                <figure>
                  <figcaption className={styles.captionItalic}>
                    <em>
                      Small continuous repeater projectors like these offer films on
                      Navy and Marine Corps subjects in the Transportation Pavilion.
                    </em>
                  </figcaption>
                  <Image
                    src="/images/trantrav11/tratra55.jpg"
                    alt="Continuous 16mm Projection Balls"
                    width={200}
                    height={251}
                    className={styles.framedImg}
                    unoptimized
                  />
                </figure>
                <p><strong>The Army&apos;s Little Theater</strong></p>
                <p>
                  Typical of dozens of such installations around the Fair is the small
                  (10 persons) &quot;walk-in&quot; theater in the T&amp;T Pavilion now
                  showing a <em>Man on the Moon</em> film under U.S. Army auspices.
                </p>
                <p>
                  Also featured in the Navy and Marine Corps exhibit area at the Fair are
                  six 16mm rear-projection (continuous) motion picture setups enclosed
                  in round balls set on poles. Films shown are concerned with life in
                  the services and the advantage they offer to young men and women.
                </p>
              </div>
              <div>
                <figure>
                  <figcaption className={styles.captionItalic}>
                    Below<em>
                      : Young viewers are encouraged to sit on the floor,
                      &quot;inside&quot; the Cine-Globe Cruiser screen area which
                      surrounds them. Their parents stand in tiers up and beyond the
                      projector.
                    </em>
                  </figcaption>
                  <Image
                    src="/images/trantrav11/tratra57.jpg"
                    alt="Inside the Cine-Globe Cruiser"
                    width={400}
                    height={491}
                    className={styles.framedImg}
                    unoptimized
                  />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav10"
        overviewHref="/trantravoverview"
        nextHref="/trantrav12"
        explicitPrevious
      />
    </>
  );
}
