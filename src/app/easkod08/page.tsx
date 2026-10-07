import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Construction — Eastman Kodak — nywf64.com",
  description:
    "Construction of the Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak construction page.
 * Body from legacy easkod08.html. Kod68 tiles are stitched into one scan.
 */
export default function Easkod08Page() {
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

      <article className={styles.article} aria-labelledby="easkod08-title">
        <header className={styles.titleBar}>
          <h1 id="easkod08-title" className={styles.titleBarMain}>
            Construction
          </h1>
        </header>
        <div className={styles.wideInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod08/kodak62.jpg"
              alt="Portland Cement Association"
              width={289}
              height={79}
              className={styles.figureImg}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod08/kod68.jpg"
              alt="Concrete at the Fair — Eastman Kodak Pavilion"
              width={900}
              height={435}
              className={`${styles.figureImg} ${styles.figureBordered}`}
              unoptimized
            />
            <p className={styles.source}>
              SOURCE: Portland Cement Association Booklet:{" "}
              <em>Concrete at the Fair</em>
            </p>
          </figure>
          <div className={styles.row}>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod08/building93.jpg"
                alt='Wooden flooring makes up the "moondeck" of the Kodak Pavilion'
                width={250}
                height={198}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>
                  Wooden flooring makes up the &quot;moondeck&quot; of the Kodak
                  Pavilion.
                </em>
              </p>
              <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
                <br />
                April 22, 1963
              </p>
            </figure>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod08/building94.jpg"
                alt="Steel framework of the Kodak Pavilion with Picture Tower in the background"
                width={233}
                height={300}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>
                  Steel framework of the pavilion which has not been covered
                  with the wooden &quot;skin.&quot; Kodak&apos;s Picture Tower
                  rises in the background.
                </em>
              </p>
              <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 8</em>
                <br />
                April 22, 1963
              </p>
            </figure>
          </div>
          <p className={styles.body}>
            A close examination of the construction photographs of the Kodak
            Pavilion reveals that wood planking covered the steel framework of
            the pavilion. This provided the underlayment for the poured concrete
            decking. It is amazing to see how much wood was used in the
            construction of a pavilion that appears to be made of free-flowing
            concrete!
          </p>
          <div className={styles.row}>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod08/building241.jpg"
                alt="Kodak Pavilion nearing completion, winter 1963-1964"
                width={316}
                height={204}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>Nearing completion - winter 1963-1964.</em>
              </p>
              <p className={styles.source}>SOURCE: online auction</p>
            </figure>
            <figure className={styles.figure}>
              <Image
                src="/images/easkod08/building114.jpg"
                alt="Aerial view of the Kodak Pavilion nearly complete"
                width={300}
                height={235}
                className={styles.figureImg}
                unoptimized
              />
              <p className={styles.caption}>
                <em>
                  The Kodak Pavilion is nearly complete in this aerial view.
                  Concrete covers the wooden flooring of the pavilion.
                </em>
              </p>
              <p className={styles.source}>
                SOURCE: NY World&apos;s Fair <em>Progress Report No. 9</em>
                <br />
                September 26, 1963
              </p>
            </figure>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod08/kodak78.jpg"
              alt="Kodak Pavilion nearing completion, Spring 1964"
              width={400}
              height={341}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              <em>Nearing completion - Spring 1964.</em>
            </p>
            <p className={styles.source}>SOURCE: Online auction</p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod07"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkod09"
      />
    </>
  );
}
