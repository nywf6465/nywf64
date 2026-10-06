import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencig08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: 'Article: A Look into "Patterns in Sports" — General Cigar — nywf64.com',
  description:
    'Business Screen magazine look at "Patterns in Sports" at the General Cigar Hall of Magic — 1964/1965 New York World’s Fair on nywf64.com.',
};

/**
 * General Cigar — Article: A Look into "Patterns in Sports".
 * Body from legacy gencig08.html (Business Screen magazine reprint).
 *
 * Stack: hero → GencigNavChrome → navy title → article → Nav2Bar.
 * Preserve legacy wording (Patterns in Sport; was shot as it is viewed ).
 */
export default function Gencig08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Cigar">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <article className={styles.article} aria-labelledby="gencig08-title">
        <header className={styles.titleBar}>
          <h1 id="gencig08-title" className={styles.titleBarMain}>
            Article: A Look into &quot;Patterns in Sports&quot;
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            A Look into &quot;Patterns in Sports&quot;
          </h2>
          <p className={styles.deck}>
            Sky-divers, boxers and halfbacks in action on a circular screen at
            the bottom of a well
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/gencig08/gencig32.jpg"
              alt='Patterns in Sports picture well at the General Cigar Hall of Magic'
              width={300}
              height={374}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Above: you&apos;re watching the &quot;big game&quot; from a hovering
              helicopter as you look down this picture well to see the
              &quot;round&quot; movie produced for the General Cigar exhibit area
              by editors of Sports Illustrated.
            </figcaption>
          </figure>

          <p className={styles.source}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>

          <div className={styles.body}>
            <p>
              A CANOPIED KIOSK in the General Cigar Hall of Magic at the Fair
              houses a unique sports picture, which was shot as it is viewed ,
              looking into action from above as from a helicopter.
            </p>
            <p>
              Visitors gaze down the sloping pit walls (bell-shaped) as an
              overhead 16mm sound projector puts exciting action sequences onto
              the six-foot circular screen. A most exciting sequence shows the
              free-fall, sky-diving parachutists as they hurtle towards the earth.
            </p>
            <p>
              Within the brief three-minutes, there&apos;s also indoor action of
              billiards, boxing and golf and a &quot;worm&apos;s eye&quot; view as
              the camera looks upward at a boxer skipping rope.
            </p>
            <p>
              Patterns in Sport is co-sponsored by SPORTS ILLUSTRATED. It was
              created from an idea developed by Gordon Auchincloss and George
              Marck. Filming was by Gerald Productions, Inc., designed by George
              Canata and under the direction of Jerry Auerbach. Technical
              equipment was designed and built by Reevesound, under the
              supervision of William Szabo. Another good Fair idea!
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gencig07"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencig09"
      />
    </>
  );
}
