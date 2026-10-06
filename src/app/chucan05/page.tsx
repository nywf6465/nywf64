import type { Metadata } from "next";
import Image from "next/image";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chucan05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Sculpture Continuum — Chunky Candy — nywf64.com",
  description:
    "The Sculpture Continuum playground at Chunky Square — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy — The Sculpture Continuum.
 * Body from legacy chucan05.html (custom candy-box / playground feature page).
 * Legacy 3×3 candy-box tiles are stitched into a single composite (unisph12 pattern).
 * Legacy wording (“itself must be part”) preserved.
 *
 * Stack: hero → ChucanNavChrome → navy title → article → Nav2Bar.
 * Last Chunky Candy topic: NEXT returns to /chucanoverview.
 */
export default function Chucan05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Chunky Candy">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chucanoverview/hero-banner.jpg"
            alt="Chunky Candy at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChucanNavChrome />

      <article className={styles.article} aria-labelledby="chucan05-title">
        <header className={styles.titleBar}>
          <h1 id="chucan05-title" className={styles.titleBarMain}>
            The Sculpture Continuum
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.boxFigure}>
            <Image
              src="/images/chucan05/chucan05.jpg"
              alt="Chunky Candy box showing the Sculpture Continuum playground"
              width={600}
              height={354}
              className={styles.boxImg}
              unoptimized
            />
          </figure>
          <p className={styles.boxSource}>SOURCE: Chunky Candy Box</p>

          <h2 className={styles.storyTitle}>THE SCULPTURE CONTINUUM</h2>
          <p className={styles.storySubtitle}>A PLAYGROUND GROUP AT</p>
          <p className={styles.storyPlace}>
            Chunky Square
            <br />
            N. Y.
            <br />
            World&apos;s Fair
          </p>

          <div className={styles.body}>
            <p>
              The famous &quot;Sculpture Continuum&quot; is composed of a group of
              13 abstract forms. The artist, Oliver O&apos;Connor Barrett, intends
              them to be used in a playground. Although these abstract forms are
              aesthetically pleasing in themselves, the most intriguing and
              original thing about them is the way in which the artist has designed
              and arranged them so that when they are viewed through any one of the
              apertures located in the sculptures themselves, two or more of these
              forms are seen in perspective to form a single realistic image - a
              giraffe, a man standing on his head, an elephant, and so forth.
              Looking through the aperture not only focuses vision on the pieces
              that make an image, but at the same time excludes all other pieces
              from view.
            </p>
            <p>
              In developing the &quot;Continuum&quot; the artist has had to solve
              many difficult problems. The pieces forming the composite image had
              to be placed in an exact line projecting from the viewing aperture.
              In determining their relative scale the distance from the hole and
              from each other had to be taken into account, as well as the height
              of the viewpoint. Furthermore, as the piece containing the aperture
              must itself must be part of another composite figure when seen from
              another direction, the aperture had to be placed so that it would
              either be part of the composite image or not interfere with it in any
              way.
            </p>
            <p>
              The creation of a sculpture continuum may be complex, but its
              enjoyment is simple and provides a delightful experience for children
              and adults alike. The Chunky Candy Corporation is proud to make it
              available to visitors at the New York World&apos;s Fair.
            </p>
          </div>

          <figure className={styles.leadFigure}>
            <Image
              src="/images/chucan05/chucan07.jpg"
              alt="Sculpture Continuum playground"
              width={399}
              height={415}
              className={styles.leadImg}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/chucan04"
        explicitPrevious
        overviewHref="/chucanoverview"
        nextHref="/chucanoverview"
      />
    </>
  );
}
