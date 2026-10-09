import type { Metadata } from "next";
import Image from "next/image";
import { PoolinNavChrome } from "@/components/PoolinNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./poolin07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Parker Pen Brochure — Pool of Industry — nywf64.com",
  description:
    "Parker Pen Pavilion brochure describing the Fountain of the Planets at the Pool of Industry — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pool of Industry — The Parker Pen Brochure (custom text brochure).
 * Body from legacy poolin07.html. Not a PDF BrochurePage — transcribed
 * promotional brochure with images.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Poolin07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Pool of Industry">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/poolinoverview/hero-banner.jpg"
            alt="Pool of Industry at the 1964/1965 New York World’s Fair"
            width={1904}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <PoolinNavChrome />

      <article className={styles.article} aria-labelledby="poolin07-title">
        <header className={styles.titleBar}>
          <h1 id="poolin07-title" className={styles.titleBarMain}>
            The Parker Pen Brochure
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            The Parker Pen Pavilion is best remembered for its International
            Penfriend program. But the pavilion had another notoriety. It was
            situated at the mid-point of the Pool of Industry. This afforded
            visitors an impressive view of the Fountain of the Planets and the
            nightly water and fireworks show. As a courtesy to their visitors
            and to those gathered in front of the pavilion to watch the show,
            Parker distributed these brochures describing the fountain.
          </p>

          <figure className={styles.coverFigure}>
            <div className={styles.coverRow}>
              <Image
                src="/images/poolin07/fount04.jpg"
                alt="Fountains"
                width={350}
                height={252}
                className={styles.coverPhoto}
                unoptimized
              />
              <Image
                src="/images/poolin07/fount99.jpg"
                alt="Logo"
                width={200}
                height={120}
                className={styles.coverLogo}
                unoptimized
              />
            </div>
            <figcaption className={styles.source}>
              SOURCE: Parker Pen Pavilion Promotional Brochure
            </figcaption>
          </figure>

          <p className={styles.banner}>
            <span className={styles.bannerLead}>N</span>EVER{" "}
            <span className={styles.bannerLead}>B</span>EFORE{" "}
            <span className={styles.bannerLead}>A</span>{" "}
            <span className={styles.bannerLead}>F</span>OUNTAIN{" "}
            <span className={styles.bannerLead}>L</span>IKE{" "}
            <span className={styles.bannerLead}>T</span>HIS
          </p>

          <div className={styles.columns}>
            <div>
              <p>
                The Parker Pen Company is happy to have you visit us to view the
                Fountain of the Planets fireworks and water show. The sight that
                you will experience is so unique, we thought you would like to
                know more about the fountain, its design and its operation.
              </p>
              <p className={styles.subhead}>ASYMMETRY FOR DEPTH</p>
              <p>
                The fountain is not symmetrical, but has been designed to create
                varying degrees of depth perception from any viewing point.
                According to Robert Langer of Hamel and Langer, who engineered
                the fountain, the view from the Parker Pavilion is perhaps the
                best to be had.
              </p>
              <p className={styles.subhead}>DESIGN</p>
              <p>
                The water, light and color controls are so versatile that an
                infinite number of programs can be produced. But the creation of
                the five actual presentations provides a story in itself.
                Briefly, hundreds of water patterns were sketched onto
                transparent sheets and then, by laying one on top of another,
                patterns were selected to blend with the music. Coordinated
                colors were then added to the sketches.
              </p>
              <p>
                The fountain is programmed electronically. Instructions have
                been fed into a computer which &quot;memorizes&quot; the data.
                Each performance is controlled for varying weather conditions to
                eliminate the possibility of heavy winds carrying water and
                fireworks into the crowd.
              </p>
              <p>
                This new form of art has allowed the musician, artist and
                engineer to combine talents and produce an awesome spectacle.
                Jacques Belasco supplied the musical arrangements. Abby Bent did
                the art direction and Hamel and Langer coordinated the
                engineering feats. Abby supervises the performance almost every
                night from the control house at the left of the Bell pavilion.
              </p>
              <p className={styles.subhead}>THE FOUNTAINS</p>
              <p>
                The pool covers six and one-half acres and holds 15 million
                gallons of water. The fountains are made up of some 2,000
                nozzles ranging from one-half inch to over two inches in
                diameter. During the peak of a performance, as much as 100 tons
                of water are pushed into the air at one time, with some streams
                soaring to 150 feet. The water in the Fountains of the Planets
                is recirculated -- an important fact for thirsty New Yorkers.
              </p>
            </div>
            <div>
              <p className={styles.subhead}>LIGHTING</p>
              <p>
                The light source incorporates a new type of lamp developed by
                General Electric specifically for this fountain. The actual
                color of the light is a warm white, instead of the usual harsh
                white characteristic of regular lamps, and it adds additional
                sparkle and liveliness to the fountain.
              </p>
              <p>
                In order to make the most efficient use of this new lamp, Bausch
                and Lomb developed a color separation process called Dichroic
                filtering. The filters, clear rather than colored, separate the
                light like a prism, permitting the desired color to pass through
                without diminution of its natural brilliance. The result is pure
                colored light.
              </p>
              <p>
                When the fountain is illuminated, 700,000 watts are used to
                attain 150 million candle power. Regular lights would require
                five million watts.
              </p>
              <p className={styles.subhead}>SOUND</p>
              <p>
                The loudspeaker, another first, was designed by RCA and is the
                most powerful ever built. You can see it in the center -- 16
                feet in diameter and weighing more than 7,000 pounds. It
                projects sound in a 360-degree pattern with exceptional fidelity
                and is made of materials not affected by moisture.
              </p>
              <p className={styles.subhead}>FIREWORKS</p>
              <p>
                There are almost 500 cylinders located throughout the fountain.
                Early each morning, pyrotechnic experts walk out on ramps
                submerged just below the surface of the water. They clean out
                each cylinder, load the fireworks and snap on a thin plastic
                cover. This protects each charge from the fountain&apos;s splash
                until the moment of firing. The charge then blasts through the
                plastic on its journey skyward.
              </p>
              <p>
                This two and one-half million dollar spectacular is truly an
                extraordinary display of water, color and sound. We at Parker
                are most fortunate to have a regular ringside seat which we are
                glad to share with you. Won&apos;t you and your family visit us
                again and register for an International Penfriend. Our amazing
                computer will match you with your just-right overseas pen pal in
                seconds.
              </p>
            </div>
          </div>

          <div className={styles.pavilionLogo}>
            <Image
              src="/images/poolin07/fount05.jpg"
              alt="Parker Pen Pavilion"
              width={256}
              height={102}
              unoptimized
            />
          </div>

          <aside className={styles.note}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              The story of the Pools, Fountains and Effects of the Fair is an
              unusual Feature in that there&apos;s not as much to be said and so
              much to see. Can one truly capture the beauty and significance of
              these incredible contributions of the Fair to the enjoyment of the
              Fairgoers? I hope this feature will give a small idea of what it
              must have been like.
            </p>
            <p>
              Many thanks to those who contributed to this story. To Bill Cotter
              who waited nearly a year to see his contributions on-line! To
              Craig Bavaro for loaning his wonderful collection of Fair
              Corporation Publicity shots. To Bradd Schiffman whose father took
              many beautiful photos of the Fountains. And to Ron Shurr, Gary
              Holmes, Ray Dashner, Larry Hubble, Bruce Mentone and Joan Lyon for
              their excellent contributions as well.
            </p>
            <p className={styles.noteSign}>
              Bill Young
              <br />
              November, 2001
            </p>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/poolin06"
        explicitPrevious
        overviewHref="/poolinoverview"
        nextHref="/poolinoverview"
      />
    </>
  );
}
