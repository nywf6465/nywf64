import type { Metadata } from "next";
import Image from "next/image";
import { MatwNavChrome } from "@/components/MatwNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./matw01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Page 1 — The “Men at Work” Book — nywf64.com",
  description:
    "Page 1 of Men at Work — Luciano Guarnieri’s Official Art Book of the 1964/1965 New York World’s Fair, with remarks by Robert Moses and Alessandro Olschki on nywf64.com.",
};

/**
 * The “Men at Work” Book — Page 1.
 * Body from legacy MatW02.html (first content page after overview).
 *
 * Stack: matwhero → MatwNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Matw01Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="The Men at Work Book"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/matw/matwhero.jpg"
            alt='The “Men at Work” Book — Official Art Book of the 1964/1965 New York World’s Fair'
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <MatwNavChrome />

      <article className={styles.article} aria-labelledby="matw01-title">
        <header className={styles.titleBar}>
          <h1 id="matw01-title" className={styles.titleBarMain}>
            Page 1
          </h1>
        </header>

        <div className={styles.articleInner}>
          <section className={styles.block} aria-label="Luciano Guarnieri">
            <Image
              src="/images/matw01/matw34.jpg"
              alt="Men at Work — construction sketch by Luciano Guarnieri"
              width={590}
              height={231}
              className={styles.blockImage}
              sizes="(max-width: 720px) 100vw, 590px"
              unoptimized
            />
            <div className={styles.quote}>
              <p>
                The first time I saw the building of the New York World&apos;s
                Fair I was struck by the atmosphere and grandeur of the
                construction animated by the men at work in the midst of steel
                scaffolding and flying sparks, guiding the most varied machinery
                which pounded and devoured the earth - planting poles, opening
                roads - creating a seething atmosphere of work on a scale I had
                never seen before.
              </p>
              <p>
                I started to draw these instants which past before me and to try
                to capture the enveloping changing light of day and weather -
                grey passages of rain, burning sunsets, blinding snow,
                crystalline mornings - that set the key to the moods which
                accompanied me over the plains of Flushing Meadows.
              </p>
              <p className={`${styles.attribution} ${styles.attributionSmall}`}>
                LUCIANO GUARNIERI
              </p>
            </div>
          </section>

          <section className={styles.block} aria-label="Robert Moses">
            <Image
              src="/images/matw01/matw04.jpg"
              alt="Men at Work — sketch accompanying Robert Moses remarks"
              width={461}
              height={494}
              className={styles.blockImage}
              sizes="(max-width: 720px) 100vw, 461px"
              unoptimized
            />
            <div className={styles.quote}>
              <p>
                LUCIANO GUARNIERI&apos;S paintings and drawings of the
                construction at the New York World&apos;s Fair entitled
                &quot;Men at Work&quot; is one of the finest things I have seen
                in a long time: the treatment is most original and unusual and I
                believe that many visitors will be delighted to have such a
                memento to take home and keep permanently.
              </p>
              <p className={styles.attribution}>ROBERT MOSES</p>
            </div>
          </section>

          <section className={styles.block} aria-label="Alessandro Olschki">
            <Image
              src="/images/matw01/matw20.jpg"
              alt="Men at Work — construction sketch accompanying Alessandro Olschki remarks"
              width={500}
              height={378}
              className={styles.blockImage}
              sizes="(max-width: 720px) 100vw, 500px"
              unoptimized
            />
            <div className={styles.quote}>
              <p>
                It is not the intention of this book to record the entire,
                magnificent construction of the New York World&apos;s Fair. The
                selection of the drawings and the plates was carried out on the
                basis of the material that the artist Luciano Guarnieri had
                already selected according to the response which the various
                aspects of the birth of this great enterprise had had upon his
                artistic sensibility.
              </p>
              <p>
                I consider it a great privilege for my Publishing House to have
                brought out this &quot;Official Art Book&quot; and I hope it
                will remain as a living artistic record of this exceptional
                event.
              </p>
              <p className={`${styles.attribution} ${styles.attributionSmall}`}>
                ALESSANDRO OLSCHKI
              </p>
            </div>
          </section>

          <p className={styles.source}>
            SOURCE:{" "}
            <em>
              Official Art Book of the World&apos;s Fair New York 1964-1965
            </em>
            , Leo S. Olschki - Publisher, Florence (Italy)
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/matwoverview"
        explicitPrevious
        overviewHref="/matwoverview"
        nextHref="/matw02"
      />
    </>
  );
}
