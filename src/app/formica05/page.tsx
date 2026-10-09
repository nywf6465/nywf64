import type { Metadata } from "next";
import Image from "next/image";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./formica05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Release / Photos — Formica — nywf64.com",
  description:
    "Press Release / Photos at the Formica World's Fair House — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Formica — Press Release / Photos.
 * Body from legacy formica05.html (custom essay page).
 * Adobe Reader chrome omitted.
 */
export default function Formica05Page() {
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

      <article className={styles.article} aria-labelledby="formica05-title">
        <header className={styles.titleBar}>
          <h1 id="formica05-title" className={styles.titleBarMain}>
            Press Release / Photos
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.releaseHead}>
            <Image
              src="/images/formica05/formica01.jpg"
              alt="Formica Logo"
              width={125}
              height={68}
              className={styles.photoImgPlain}
              unoptimized
            />
            <span>For Immediate Release</span>
          </div>
          <div className={styles.lede}>
            <p>{"The Formica Corporation of Cincinnati, a subsidiary of American Cyanamid Company, announced the signing of an agreement to exhibit a seven-room, 2,600 sq. ft. house at the New York 1964-1965 World's Fair."}</p>
            <p>{"The house, to be placed on a fully-landscaped half-acre plot, is being planned by Emil A. Schmidlin, architect, and Miss Ellis Leigh, designer, both of East Orange, New Jersey, it was announced by Walter A. Smith, president of Formica."}</p>
            <p>{"The Formica exhibit, situated on a hill at the Flushing Meadow site, will bear the address 64-65 Hilltop Lane."}</p>
            <p>{"In addition to demonstrating the application of all Formica laminated plastic products, the house will serve as a showcase for other Cyanamid consumer products. Besides the house itself, 7,000 more sq.ft. of space will be used to detail such products as Creslan acrylic fiber, Melmac quality melamine dinnerware, Acrylite decorative sheet, Skydome skylights and chemical aids for the farm and garden."}</p>
            <p>{"Source: Fair News , Vol. 1, No. 7, December 20, 1962, p. 7 Officials of the Formica Corporation of Cincinnati, their architect and their designer, examine plans for the seven-room \"Hilltop House\" to be erected by the American Cyanamid Company subsidiary of the New York World's Fair of 1964-1965. Left to right: Dr. John F. Nobis, director of commercial development for Formica, who has been named director of all World's Fair activities for the company; Miss Ellis Leigh, designer; Walter S. Smith, president of Formica, and Emil A. Schmidlin, architect."}</p>
          </div>
          <hr className={styles.rule} />
          <figure className={styles.figure}>
            <Image
              src="/images/formica05/formica02.jpg"
              alt="Formica officials examine plans"
              width={232}
              height={181}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>{"Source: Fair News , Vol. 1, No. 7, December 20, 1962, p. 7"}</p>
          </figure>
          <hr className={styles.rule} />
          <figure className={styles.figure}>
            <Image
              src="/images/formica05/formica64.jpg"
              alt="Architectural Model"
              width={430}
              height={273}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>{"Architectural model of the Formica World's Fair House"}</figcaption>
            <p className={styles.source}>{"SOURCE: Commercial Transparency by Photo Lab, Inc., Washington, DC"}</p>
          </figure>
          <hr className={styles.rule} />
          <figure className={styles.figure}>
            <Image
              src="/images/formica05/formica03.jpg"
              alt="Architect's Rendering of House"
              width={346}
              height={281}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>{"Source: NY World's Fair Progress Report Number 7, January 24, 1963, p. 15"}</p>
          </figure>
          <hr className={styles.rule} />
        </div>
      </article>

      <Nav2Bar
        previousHref="/formica04"
        overviewHref="/formicaoverview"
        nextHref="/formica06"
      />
    </>
  );
}
