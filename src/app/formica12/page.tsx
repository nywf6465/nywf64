import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Family Room — Formica — nywf64.com",
  description:
    "Family Room at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Family Room.
 * Body from legacy formica12.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Formica">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/formicaoverview/hero-banner.jpg"
            alt="Formica at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <FormicaNavChrome />

      <article className={styles.article} aria-labelledby="formica12-title">
        <header className={styles.titleBar}>
          <h1 id="formica12-title" className={styles.titleBarMain}>
            Family Room
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sectionHead}>{"Family Room"}</p>
          <figure className={styles.figure}>
            <Image
              src="/images/formica12/formica63.jpg"
              alt="Floorplan featuring Family Room"
              width={200}
              height={144}
              className={styles.photoImgPlain}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/formica12/formica33.jpg"
              alt="Family Room & Television"
              width={500}
              height={488}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"\"Where the tribe can roughhouse or relax. The family room, separated from the kitchen by a stone fireplace wall, encourages informal fun. So does the amiable grouping of sofa, love seat, lounge chair, and hand-crafted rug of Creslan."}</figcaption>
            <p className={styles.source}>{"SOURCE: Souvenir Book, pp. 14-15"}</p>
            <p className={styles.caption}>{"The modular unit shelving holding books is a design still in use today. The polka-dot cabinet beneath them is used for storing records (remember them?), and the TV console includes a \"Hi-Fi stereo\". Note the colorful area rug; it will be seen again in pure white with even longer fibers at Expo67 in Montreal. It will take a few more years before it finally catches on, but eventually it will be called a \"shag carpet\", and everyone in the 1970s will own one."}</p>
          </figure>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"\"The big Skydome above the hearth fills the room with natural light by day, incandescent by night. Recessed ceiling lights enhance the appearance of art objects on the walls.\""}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 15 I hope the rug is nonflammable. By the way, that's an Eames chair, and you can still get one today if you have a lot of money. They start at around $2900."}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica12/formica34.jpg"
                alt="Family Room & Fireplace"
                width={335}
                height={426}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
          <div className={styles.split}>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica12/formica35.jpg"
                alt="Family Room Sofas"
                width={205}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"Another view of the couches. They look extremely uncomfortable to modern eyes, but that material probably wore like steel."}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 74"}</p>
            </div>
          </div>
          <div className={styles.split}>
            <div className={styles.splitStack}>
              <p className={styles.splitTextNormal}>{"View from the Eames chair. You could enter this room from the Kitchen to the left or from the main hallway behind you. The large picture window behind the drapes looks out onto a snow-covered back yard."}</p>
              <p className={styles.source}>{"SOURCE: Souvenir Book, p. 38"}</p>
            </div>
            <figure className={styles.figure} style={{ margin: 0 }}>
              <Image
                src="/images/formica12/formica36.jpg"
                alt="Family Room Game Tabe"
                width={250}
                height={259}
                className={styles.photoImg}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica11"
        overviewHref="/formicaoverview"
        nextHref="/formica13"
      />
    </>
  );
}
