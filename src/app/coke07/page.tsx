import type { Metadata } from "next";
import Image from "next/image";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coke07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Releases — Coca-Cola — nywf64.com",
  description:
    "Coca-Cola pavilion press releases — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola — Press Releases.
 * Body from legacy coke07.html (custom press-release page).
 * Legacy wording (CopaCabana, Coca-Coal, Her Mr. Duffield) preserved.
 *
 * Stack: hero → CokeNavChrome → navy title → article → Nav2Bar.
 */
export default function Coke07Page() {
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

      <article className={styles.article} aria-labelledby="coke07-title">
        <header className={styles.titleBar}>
          <h1 id="coke07-title" className={styles.titleBarMain}>
            Press Releases
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.banner}>
            <Image
              src="/images/coke07/coke10.jpg"
              alt="things go better with Coke"
              width={500}
              height={280}
              className={styles.bannerImg}
              unoptimized
            />
          </div>

          <hr className={styles.rule} />

          <div className={styles.letterhead}>
            <p className={styles.letterheadLabel}>FOR:</p>
            <p>
              The Coca-Cola Company
              <br />
              Atlanta 1, Georgia
            </p>
            <p className={styles.letterheadLabel}>FROM:</p>
            <p>
              Thomas J. Deegan Company, Inc.
              <br />
              Time and Life Building
              <br />
              Rockefeller Center - NYC -20
              <br />
              PL7-7070 (Dick McCabe)
            </p>
          </div>

          <h2 className={styles.headline}>
            The Coca-Cola Company
            <br />
            World&apos;s Fair Pavilion
            <br />
            Features Unique Attractions
          </h2>

          <div className={styles.body}>
            <p>
              The Coca-Cola Company Pavilion at the 1964-65 New York World&apos;s
              Fair is expected to be one of the most dramatic exhibits in the
              exposition. Featured will be a 120-foot tower rising from the
              graceful center court of the pavilion, housing the world&apos;s
              biggest and finest electronic carillon.
            </p>
            <p>
              Fair visitors will also be able to make a free 17-minute tour of
              the world in the &quot;Global Holiday&quot; attraction which
              features &quot;experience areas&quot; in which the visitor will be
              transported by visual devices, sounds, temperature and smells to
              six world-famous locations. These locations include the oriental
              city of Hong Kong; the serenity of the Taj Mahal in India; a cold
              and frosty Bavarian ski lodge; a refreshing and fragrant tropical
              forest featuring the ancient temple of Angkor Wat, the promenade
              deck of a cruise ship off the coast of the famous CopaCabana Beach
              of Rio de Janeiro and the exciting Mardi Gras carnival of New
              Orleans.
            </p>
            <p>
              The Coca-Cola Company Pavilion will also include a radio
              communication facility manned by amateur radio operators of the
              Hudson Amateur Radio Council, in cooperation with the American
              Radio Relay League. In effect, this radio facility becomes the
              voice of the World&apos;s Fair to the world via shortwaves.
              Servicemen from all over the world are expected to visit the USO
              Lounge, also a part of The Coca-Cola Company Fair Pavilion.
            </p>
          </div>

          <p className={styles.endMark}># # #</p>

          <hr className={styles.rule} />

          <div className={styles.letterhead}>
            <p>
              Thomas J. Deegan Company, Inc.
              <br />
              Time and Life Building
              <br />
              Rockefeller Center - NYC -20
              <br />
              PL7-7070 (Dick McCabe)
            </p>
          </div>

          <h2 className={styles.headline}>
            A Description of the Global Holiday
            <br />
            to be Featured by The Coca-Cola Company
            <br />
            at the New York World&apos;s Fair
          </h2>

          <div className={styles.body}>
            <p>
              The first stop on the Global Holiday by The Coca-Cola Company at
              the New York World&apos;s Fair is the exotic, bustling, oriental
              city of Hong Kong that is nestled against the hills of Victoria. A
              visitor to this exotic city will have the total experience of being
              there, surrounded by the Chinese shops along the streets that
              bristle with color, and object d&apos;art of the area. He will see
              exciting vistas up side streets and down a long street to Fragrant
              Harbor, the harbor of Hong Kong, and across to the City of Kowloon,
              and further on to the very border of China. Sampans and junks will
              be bobbing in the harbor; the visitor will be caught up in the
              whirl of Chinese humanity.....the sound of people mingling with the
              sounds of wind bells, the clatter of rickshaws on cobblestone
              streets, the tinkle of Chinese music as it comes from the shops
              along the way.
            </p>

            <h3 className={styles.sectionHead}>TAJ MAHAL</h3>
            <p>
              From the jumble of feverish activity in Hong Kong, the visitor will
              suddenly find himself in the serenity of a Victorian garden located
              very close to the awe-inspiring Taj Mahal. The mood is
              contemplative. The detail is one of infinite care and the image is
              one of the most refreshing in the Global Holiday. Examples of
              Indian and Victorian architecture may be examined by the visitor
              in the fore-ground creating a proscenium for a vista of the
              beautiful Taj Mahal in the distance. The refreshing quality of the
              experience is further accentuated by the cool fountains which
              abound in this Victorian Park.
            </p>

            <p className={styles.pageMark}>- 2 -</p>

            <h3 className={styles.sectionHead}>BEAUTIFUL BAVARIA</h3>
            <p>
              Visitors are next transported into a cold and frosty winter scene,
              entering a typical Bavarian ski lodge, its locale being high on a
              mountain top in the area of Garmisch-Partenkirchen and
              Oberammergau. Vistas from windows and balconies look off into miles
              of distance to the great snow capped and fir tree studded Alps.
              This scene is highly animated, with skiers going down the slopes,
              ski lifts rising and cog wheel trains going through the mountains.
              The occasional drifts of snow will flake off of the ski lodge roof
              and fall down in front of the balcony. The time is near the end of
              the ski season, and down on the lower slopes of the great mountain
              the visitor will see the early spring flowers. The ski lodge will
              have all of the trappings in evidence. The sound of the crackling
              fire, of the music in the background, will add to the atmosphere of
              fun.
            </p>

            <h3 className={styles.sectionHead}>TROPICAL FOREST - ANGKOR WAT</h3>
            <p>
              From the previous scene which was ice cold, our travelers will walk
              into a fascinating moist and cool fragrant tropical forest, will
              see and hear the call of birds, the chatter of monkeys, and will be
              engulfed in the dense growth of the forest. When first entering
              they will be enthralled by a great and ancient temple of Angkor
              Wat. This temple and others like it were built around 1100 A.D. and
              were rediscovered in 1860. In this context our visitors become
              explorers, and leaving the temple will thread their way further
              through this fragrant tropical forest, pass waterfalls, view an
              archeologist&apos;s camp and see Buddhist monks gay in their orange
              robes on holiday, too.
            </p>

            <p className={styles.pageMark}>- 3 -</p>

            <h3 className={styles.sectionHead}>RIO DE JANEIRO</h3>
            <p>
              From the lush forests of Angkor Wat our guests will walk on to the
              promenade deck of a cruise ship bobbing at anchor off the coast at
              the famous CopaCabana Beach. it is night, the lights from the
              hotels and boulevard along CopaCabana Beach will reflect back into
              the ocean, and off to the right of this scene silhouetted against
              the sky will be famous Sugar Loaf. Our cruise passengers will
              experience the throbbing of the ship&apos;s engines. They will hear
              gay Latin music coming from the ship&apos;s lounge and see
              passengers enjoying themselves. The night air is filled with the
              refreshing salt spray. The passengers are also given the sensation
              of the ship softly pitching at anchor. Romance is in the air as is
              the occasional call of the sea gulls.
            </p>

            <h3 className={styles.sectionHead}>NEW ORLEANS - MARDI GRAS</h3>
            <p>
              From the gay, but quiet beauty of the scene just departed, our
              visitors are thrust into the excitement of carnival in gay New
              Orleans at Mardi Gras. There will be dancers in the streets, a
              display of fireworks seen off in the distance, the music of Bourbon
              Street in muted tones, the laughter of children and grownups in the
              spirit of carnival. The wrought iron balconies and the fascinating
              shops below will abound everywhere.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke07/coke11.jpg"
              alt="Angkor Wat god-king at Coca-Cola"
              width={400}
              height={459}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Ted Duffield, Creative Director for the Coca-Cola Company Pavilion
              at the New York World&apos;s Fair, can&apos;t help feeling at home
              in each of the &quot;global holiday&quot; areas. A million-miler,
              he has visited practically every major city and country in the
              world during his ten years as Sales Promotion Manager of The
              Coca-Cola Export Corporation. Her Mr. Duffield, right, The
              Coca-Coal Company Pavilion&apos;s own travel expert, inspects the
              progress of the fabled temple of Angkor Wat. The sculpture is of an
              ancient god-king.
            </figcaption>
            <p className={styles.source}>
              Source: Pre-Fair Publicity Photograph Courtesy Gary Holmes
              collection
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/coke06"
        explicitPrevious
        overviewHref="/cokeoverview"
        nextHref="/coke08"
      />
    </>
  );
}
