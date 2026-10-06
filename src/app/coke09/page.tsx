import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coke09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Did you Know? — Coca-Cola — nywf64.com",
  description:
    "Did you Know? — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola — Did you Know?
 * Body from legacy coke09.html (custom trivia / feature page).
 * Legacy wording (Rio de Janerio, Garmish-Partenkirchen,
 * Musical Director-Constultant, carilloneur, recitels,
 * Coca-Company, World's fair) preserved.
 *
 * Stack: hero → CokeNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Coke09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Coca-Cola">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cokeoverview/hero-banner.jpg"
            alt="Coca-Cola at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CokeNavChrome />

      <article className={styles.article} aria-labelledby="coke09-title">
        <header className={styles.titleBar}>
          <h1 id="coke09-title" className={styles.titleBarMain}>
            Did you Know?
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionTitle}>Did You Know?</h2>

          <ul className={styles.bullets}>
            <li>
              <span className={styles.bulletLead}>
                The New Orleans Mardi Gras Scene
              </span>{" "}
              of &quot;Global Holiday&quot; was never created as a part of the
              exhibit for reasons unknown. Only five &quot;Isolation Areas&quot;
              were on display - the Hong Kong Street, Taj Mahal, Bavarian Lodge,
              Cambodian Rain Forest and Rio de Janerio Harbor.
            </li>
            <li>
              <span className={styles.bulletLead}>
                According to the October 8, 1965 issue of <em>Time</em> Magazine,{" "}
              </span>
              <em>
                &quot;Coca-Cola will send its electronically croaking bullfrog
                to Caroline Kennedy, who said she wanted it.&quot;
              </em>{" "}
              Caroline and Mrs. Kennedy were among the pavilion&apos;s many
              visitors during the run of the Fair.
            </li>
            <li>
              <span className={styles.bulletLead}>
                The 610 bell Electronic Carillon{" "}
              </span>
              was donated to Stone Mountain Park outside of Atlanta,
              Coca-Cola&apos;s hometown, following the close of the Fair in 1965
              where it can still be heard today! Guests can hear concerts at the
              Carillon (it now has 732 bells) every day. Concerts are at 1:00,
              3:00 and 5:00 PM on Sundays and at 12:00 PM &amp; 4:00 PM,
              Monday-Saturday. Concerts are live on Saturday and Sunday and are
              taped, Monday through Friday. Stone Mountain Park&apos;s carillon
              has been played by Mabel Sharp for over 30 years.
            </li>
          </ul>

          <hr className={styles.rule} />

          <h2 className={styles.sectionTitle}>&quot;Global Holiday&quot;</h2>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/coke09/coke34.jpg"
              alt="Hong Kong Street Scene"
              width={500}
              height={428}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Hong Kong Street Scene from The Coca-Cola Company&apos;s
              &quot;Global Holiday&quot;
            </figcaption>
            <p className={styles.source}>
              Source: Peter Warner Collection Courtesy Bradd Schiffman Collection
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              <span className={styles.lead}>Entering the Global Holiday</span>{" "}
              from the sunny courtyard of the pavilion, guests find themselves in
              the lobby of an old-world hotel in Hong Kong. An ancient unattended
              switchboard blinks, and a voice in Chinese summons the operator
              through the headphone resting on the dusty registration desk.
            </p>
            <p>
              Leaving the hotel, visitors are in a crowded Hong Kong street where
              well-worn cobblestones push through the asphalt pavement. Overhead
              hundreds of Chinese signs hide the night sky. Babbling conversations
              from houses, wind bells and tinkling Chinese music blend with the
              smell of pungent spice and fresh fish. Lining the streets are shops
              bursting with native Chinese wares. Across floating sampans in the
              harbor are Kowloon&apos;s twinkling lights.
            </p>
            <p>
              From the congested street, a blue stone path leads to a peaceful and
              romantic Indian garden. In the distance, past a spray of fountains,
              is the moon-bathed Taj Mahal. Delicate music and jasmine fill the
              air.
            </p>
            <p>
              A pause, and visitors walk into a cozy ski lodge high in the
              Garmish-Partenkirchen area of the German Alps. The rough pine walls
              are decorated with ski club insignias. A welcoming fire crackles in
              the stove, and upstairs, people are singing German folk tunes.
              Outside, in the cool, balsam-scented air, visitors see the front of
              the rustic, snow-covered lodge perched on a rocky ledge. The Alps
              glisten in the distance.
            </p>
            <p>
              Leaving the mountains, walkers enter a humid Indo-Chinese rain
              forest. Their feet sink into the leaf-matted jungle floor. Through
              the dense, lush foliage, penetrated only by a few sunbeams, is the
              stone face of a god of the Temple of Angkor Wat. Two bottles of
              Coca-Cola cool in a rushing stream near-by. The sound of the water
              tumbling over the rocks mixes with the chattering of monkeys and the
              shrill calls of the jungle birds. Looking at the safari jeep parked
              in the underbrush, the visitor may catch a movement out of the
              corner of his eye. The monkey moved! Looking more closely, he also
              sees that the frog croaking on the side of the pond is breathing and
              a near-by ant-eater is nodding his scaly head.
            </p>
            <p>
              Ending the Global Holiday, the visitor boards a cruise ship anchored
              off Copacabana beach for a night view of Rio de Janerio. From the
              deck, guests can see the shining lights of the buildings on shore.
              Gay Latin music bubbles from the mirrored lounge, bright with party
              decorations.
            </p>
            <p>
              American magazines and newspapers have complimented the Global
              Holiday. <em>Time</em> called it &quot;the Fair&apos;s best trip of
              all,&quot; and commented that, unlike some exhibits where visitors
              are whisked by on moving platforms, people can see the exhibit at
              their own speed. <em>Time</em> included it in its &quot;Best of the
              Fair&quot; list.
            </p>
            <p>
              <em>Forbes</em>, a business publication, said it was up to The
              Coca-Company&apos;s &quot;very high standards.&quot; The magazine
              said the walk-through has an &quot;almost magical transition through
              sight, sound and smell.&quot;
            </p>
            <p>
              <em>New York World Telegram and Sun</em> hailed it as the &quot;most
              attractive free exhibit . . . Adding sound, temperature and scent to
              already vivid scenes . . . the exhibit designers created an effect
              that is stunning, realistic.&quot;
            </p>
            <p>
              Following the Global Holiday in the World of Refreshment is an
              exhibit of paintings and sculpture from Georgia, the home of The
              Coca-Cola Company.
            </p>
          </div>

          <h3 className={styles.subhead}>Art and Artifice</h3>

          <div className={styles.body}>
            <p>
              Formal art isn&apos;t the only kind at the pavilion. Art and
              artifice of another type went into the creation of the special
              effects in the Global Holiday, but calculated realism, rather than
              art for its own sake was the goal.
            </p>
          </div>

          <figure className={styles.figureNarrow} style={{ maxWidth: 285 }}>
            <Image
              src="/images/coke09/coke35.jpg"
              alt="Gerard Van Duyn & Frank Pisani"
              width={285}
              height={237}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Designer Gerard Van Duyn, left, assisted by Frank Pisani, pores over
              plans for Rio scene.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Blending the actual and the artificial is the key to the special
              effects. The Global Holiday is an isolation area which takes the
              visitor away from the disturbances from the environment outside. The
              isolation area is divided into experience areas, each of which has
              three zones: touch, intermediate and scenic. In the touch zones,
              people&apos;s attention is directed to particular effects; full
              scale and real materials are used. The scenic zones are really
              theatrical effects intended to be seen only. The intermediate zone
              establishes the change in perspective from real to make-believe and
              visually bridges the other two.
            </p>
            <p>
              Unlike Fair exhibits where the position of the viewer is carefully
              controlled, the Global Holiday was planned so that people can see
              and touch everything. At the point where visitors view the Taj
              Mahal, real marble and blue stone tiles were used in the touch zone.
              People can lean on the edge of the fountain and put their hands in
              the water. The sari-clad figure sitting on the far edge of the pool
              establishes the perspective and the model of the Taj, made to scale
              from actual floor plans, completes the theatrical scene. Where
              visitors cannot touch the stone, vinyl floor covering and wood
              molding, painted white and brushed with feathers dipped in darker
              paint, create the illusion of marble.
            </p>
            <p>
              Even when materials in the Global Holiday are true to life, colors
              may be altered to create special moods. To give the ship&apos;s deck
              a romantic feeling, it was painted pink to look like a reflection of
              the evening glow from the shore lights.
            </p>
            <p>
              The lifeboat in this scene was so real, it attracted a
              &quot;stowaway.&quot; For nine days, successfully evading searching
              police, 12-year-old Dominick Tucci lived at the Fair and slept in
              the lifeboat one night. A small plaque was placed on the boat to
              commemorate his adventure -- &quot;Dominick Slept Here.&quot;
            </p>
          </div>

          <figure className={styles.figureNarrow} style={{ maxWidth: 145 }}>
            <Image
              src="/images/coke09/coke36.jpg"
              alt="Dominick Tucci & Father"
              width={145}
              height={255}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Dominick Tucci and happy dad.
            </figcaption>
            <p className={styles.source}>
              Source: <em>The Refresher</em>, The Coca-Cola Company Magazine,
              Date Unknown, courtesy Bradd Schiffman Collection
            </p>
          </figure>

          <hr className={styles.rule} />

          <h2 className={styles.sectionTitle}>The Carillon</h2>

          <figure className={styles.figureNarrow} style={{ maxWidth: 340 }}>
            <Image
              src="/images/coke09/coke50.jpg"
              alt="John Klein at the Console"
              width={340}
              height={450}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionPlain}>
              John Klein, one of America&apos;s most outstanding and versatile
              musicians, has been named Musical Director-Constultant of The
              Coca-Cola Company Pavilion at the 1964-1965 New York World&apos;s
              Fair. Mr. Klein is an accomplished carilloneur, composer, arranger,
              organist, pianist and recording artist. He has been a musical
              pioneer of modern carillon music and Fairgoers will be able to watch
              him at the console of the world&apos;s largest carillon as he
              performs the daily recitels. Mr. Klein was the official carillonneur
              of the Seattle World&apos;s Fair. He also gave recitals in 1958 at
              the International Carillon Festival in Cobh, Ireland and the
              Brussels World Fair. In 1959, for the first time in history,
              carillon music played by Mr. Klein was part of the Salzburg Music
              Festival.
            </figcaption>
          </figure>

          <h3 className={styles.displayHeadStack}>
            <span>World&apos;s Largest Carillon</span>
            <span>Featured at The Coca-Cola</span>
            <span>Company Pavilion</span>
          </h3>

          <div className={styles.twoCol}>
            <div>
              <p>
                The largest carillon in the world is installed in The Coca-Cola
                Company Pavilion.
              </p>
              <p>
                The stirring sound of its bells will peal from the Coca-Cola tower
                which rises 120 feet above the Fair.
              </p>
              <p>
                This unique musical installation, built by Schulmerich Carillons,
                Inc., of Sellersville, Pa., pioneers of modern carillon
                development, combines the unprecedented number of 610 bells into a
                single instrument.
              </p>
              <p>
                The bells are actually tiny rods of traditional cast bronze which
                produce pure bell tones when struck with miniature hammers. The
                sound is barely audible, but tuned far more accurately than even
                the most carefully cast conventional bell.
              </p>
              <p>
                Banks of high-fidelity speakers amplify the bell notes more than a
                million times to produce the richly sonorous tones and joyous
                peals of carillon music.
              </p>
            </div>
            <div>
              <p>
                If the World&apos;s Fair carillon consisted of traditional cast
                bells, they would weigh more than 2,000,000 pounds and still not
                provide all the musical advantages and diversity of this modern
                carillon.
              </p>
              <p>
                Because of its size it possesses great musical versatility and
                offers unique opportunities for outstanding carillonneurs to
                perform works which require full orchestration, as well as any
                type of light popular music from showtunes to folk songs.
              </p>
              <p>
                A glass-enclosed area at the base of the Coca-Cola tower contains
                a giant console from which the carillon&apos;s 610 bells are
                sounded. Fairgoers will be able to watch master carillonneurs, who
                are outstanding musicians, perform an imaginative choice of
                classical and popular music.
              </p>
            </div>
          </div>

          <h3 className={styles.musicalRefreshment}>
            A Wonderful World of Musical Refreshment
          </h3>

          <div className={styles.twoCol}>
            <div>
              <p>
                For millions of visitors from every corner of the globe the
                evocative bell music of the world&apos;s largest carillon will be
                the most memorable sound at the world&apos;s greatest fair.
              </p>
              <p>
                Visitors will hear the carillon strike the hours, and twice a day
                there will be carillon concerts. Music from the 125 lands where
                Coca-Cola is sold will also be played on special national days.
                When important visitors come to the Fair appropriate music will be
                played on the carillon.
              </p>
              <p>
                The console from which the carillonneur will control his
                instrument is so located within the court area of the pavilion as
                to accommodate
              </p>
            </div>
            <div>
              <p>
                groups who will gather there not only to watch the master musician
                perform, but also to join with him in choral accompaniment.
              </p>
              <p>
                Various special groups of visitors, from throughout the United
                States and the world, have been invited to visit the pavilion and
                join with the carillonneur in musically celebrating events of
                particular interest to them, such as national holidays, feast
                days; by singing their own songs.
              </p>
              <p>
                There is space available also for folk dances which might seem
                appropriate to add to the carillon music and the choral voices.
              </p>
            </div>
          </div>

          <p className={styles.source}>
            Source: Pamphlet: <em>News of the World of Refreshment</em>
          </p>

          <div className={styles.storyLink}>
            <Link
              href="/stories/schulmerich-carillons"
              className={styles.storyThumb}
            >
              <Image
                src="/images/coke09/schulmeric01.jpg"
                alt="Schulmerich Carillons"
                width={100}
                height={101}
                className={styles.storyThumbImg}
                unoptimized
              />
              <span className={styles.storyThumbLabel}>Click HERE</span>
            </Link>
            <p className={styles.storyCopy}>
              Bradd Schiffman&apos;s feature takes a look at the{" "}
              <strong>Schulmerich Carillons</strong> of the Fair. Best remembered
              for Coca-Cola&apos;s carillon, Schulmerich also provided bells for
              three other major pavilions. This is the story of the Carillons at
              the Fair. Click the link to the left to view Bradd&apos;s excellent
              feature!
            </p>
          </div>

          <hr className={styles.rule} />

          <h2 className={styles.sectionTitle}>K2US</h2>

          <h3 className={styles.displayHead}>
            The Coca-Cola Company Pavilion Is Headquarters At World&apos;s Fair
            For Amateur Radio Operators
          </h3>

          <div className={styles.twoCol}>
            <div>
              <p>
                The finest three-position sending and receiving station ever built
                for world-wide amateur radio communication has been installed in
                The Coca-Cola Company Pavilion at the New York World&apos;s Fair.
              </p>
              <p>
                Visitors to the exhibit will be able to watch and listen to
                amateur radio operators talking to their counterparts around the
                world from the Fair.
              </p>
              <p>
                &quot;Ham&quot; radio operators anywhere on the globe will be able
                to tune in to the excitement and glamour of the World&apos;s Fair
                by contacting K2US, the special call letters assigned to the
                &quot;shortwave voice of the Fair.&quot;
              </p>
              <p>
                Any amateur radio operator who visits the exhibit will be allowed
                to broadcast from the
              </p>

              <figure className={styles.figure} style={{ maxWidth: 250 }}>
                <Image
                  src="/images/coke09/coke49.jpg"
                  alt="Huntoon and Hoover"
                  width={250}
                  height={162}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.captionPlain}>
                  Mr. John Huntoon, left, of the American Radio Relay League,
                  together with League President, Mr. Herbert Hoover Jr., admire
                  the radio facility in The Coca-Cola Company Pavilion at the New
                  York World&apos;s Fair.
                </figcaption>
              </figure>
            </div>
            <div>
              <p>
                studio after presenting a &quot;ham radio ticket&quot; or amateur
                radio operator license.
              </p>
              <p>
                And if a glimpse of &quot;ham&quot; radio in action encourages
                visitors to learn more about it, educational information on this
                fascinating scientific hobby will be available.
              </p>
              <p>
                Volunteer members of the Hudson Amateur Radio Council in
                cooperation with The American Radio Relay League will keep the
                World&apos;s Fair station on the air.
              </p>
              <p>
                The American Radio Relay League is the national non-profit
                membership association for &quot;hams&quot; in this country.
                Herbert Hoover, Jr. is the president of the League. It was founded
                in 1914 and will celebrate its 50th anniversary during the first
                year of the New York World&apos;s fair. Headquarters are in West
                Hartford, Conn.
              </p>
              <p>
                Public service is one of the American Radio Relay League&apos;s
                most important functions. Its &quot;Amateur Radio Emergency
                Corps&quot; forms a valuable nucleus of back-up communications for
                disaster work.
              </p>
              <p>
                The &quot;Radio Amateur Civil Emergency Service&quot; maintains a
                series of national, regional and local networks ready to aid civil
                defense communication if needed.
              </p>
              <p>
                An estimated 350,000 &quot;hams&quot; all over the world keep the
                airwaves busy and in the United States about 250,000 amateur radio
                operators are licensed by the FCC.
              </p>
            </div>
          </div>

          <p className={styles.source}>
            Source: Pamphlet: <em>News of the World of Refreshment</em>
          </p>

          <figure className={styles.figure} style={{ maxWidth: 400 }}>
            <Image
              src="/images/coke09/coke37.jpg"
              alt="K2US Log Sheet"
              width={400}
              height={531}
              className={styles.photoNoBorder}
              unoptimized
            />
            <figcaption className={styles.captionPlain}>
              Ham operator&apos;s Log Sheet to be completed when transmitting from
              K2US at the Coca-Cola Pavilion
            </figcaption>
          </figure>

          <hr className={styles.rule} />

          <h2 className={styles.sectionTitle}>U.S.O. Lounge</h2>

          <figure className={styles.figure} style={{ maxWidth: 600 }}>
            <Image
              src="/images/coke09/coke51.jpg"
              alt="Anita Bryant greets Servicemen"
              width={600}
              height={224}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionPlain}>
              Glamorous singing star Anita Bryant, whose tours of overseas bases
              with Bob Hope have made her a favorite with service personnel, has
              been chosen as the official hostess for the USO Lounge in The
              Coca-Cola Company Pavilion at the New York World&apos;s Fair. Anita
              will spend as much time as she can at the Fair and also help arrange
              for other stars to make personal appearances at the USO Lounge. She
              says she&apos;s looking forward to this special assignment and hopes
              the service friends she made on her overseas tours will visit her at
              The Coca-Cola Company Pavilion.
            </figcaption>
          </figure>

          <h3 className={styles.displayHeadCenter}>
            U.S.O. Lounge for Servicemen
            <br />
            at World&apos;s Fair
          </h3>

          <div className={styles.twoCol}>
            <div>
              <p>
                The USO Lounge will be in The Coca-Cola Company Pavilion at the
                New York World&apos;s Fair and serve as an invaluable reception
                center and rendezvous point for all free-world servicemen who
                visit the Fair.
              </p>
              <p>
                This attractive lounge will occupy 1,110 square feet of space in
                the pavilion and has been designed by architect Creighton Jones.
              </p>
              <p>
                Here servicemen and their families will be able to relax in
                comfort between enjoying the sights of the Fair.
              </p>
              <p>
                There will be a direct tie-line between the USO Times Square
                Center and the USO World&apos;s Fair Lounge so service personnel
                and their families visiting the Fair can be informed of the total
                services offered by USO of New York City.
              </p>
              <p>
                An estimated one million American and Allied Service personnel and
                their families are expected to use the facilities of the USO
                Lounge.
              </p>
            </div>
            <div className={styles.usoSide}>
              <figure className={styles.figure} style={{ maxWidth: 325 }}>
                <Image
                  src="/images/coke09/coke52.jpg"
                  alt="Digby and Quintana"
                  width={325}
                  height={348}
                  className={styles.photo}
                  unoptimized
                />
                <figcaption className={styles.captionPlain}>
                  The Navy and the Army plan a joint &quot;Operation World&apos;s
                  Fair&quot; at the USO Times Square Center, New York, which is
                  linked by a direct tie-line with the USO World&apos;s Fair
                  Lounge in The Coca-Cola Company Pavilion. Left, FN Larry Digby,
                  Plainwell, Mich. Right, SP5 John Quintana, Espanola, New Mexico.
                </figcaption>
              </figure>
              <Image
                src="/images/coke09/coke53.jpg"
                alt="Slogan and Logo"
                width={250}
                height={157}
                className={styles.photoNoBorder}
                unoptimized
              />
            </div>
          </div>

          <p className={styles.source}>
            Source: Pamphlet: <em>News of the World of Refreshment</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/coke08"
        explicitPrevious
        overviewHref="/cokeoverview"
        nextHref="/coke10"
      />
    </>
  );
}
