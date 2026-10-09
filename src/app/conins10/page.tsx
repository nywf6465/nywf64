import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./conins10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Cinema '76: Illustrated Transcript with Audio — Continental Insurance — nywf64.com",
  description:
    "Cinema '76 illustrated transcript with audio from the Continental Insurance pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance — Cinema '76 Illustrated Transcript with Audio (intro).
 * Body from legacy conins10.html. Song pages continue at /conins10-01 … /conins10-08.
 *
 * Legacy wording (Friederich, Gerherd Augistin) preserved.
 */
export default function Conins10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Continental Insurance">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/coninsoverview/hero-banner.jpg"
            alt="Continental Insurance at the 1964/1965 New York World’s Fair"
            width={1909}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ConinsNavChrome />

      <article className={styles.article} aria-labelledby="conins10-title">
        <header className={styles.titleBar}>
          <h1 id="conins10-title" className={styles.titleBarMain}>
            Cinema &apos;76: Illustrated Transcript with Audio
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.castBlock}>
            <p className={styles.castTitle}>
              A SCREEN PRESENTATION IN SONG AND STORY
            </p>
            <p>featuring an unforgettable cast.</p>
            <p>
              <strong>Meet...</strong>
            </p>
            <ul className={styles.castList}>
              <li>John Glover</li>
              <li>Deborah Sampson</li>
              <li>Henry Knox</li>
              <li>
                Baron Friederich Wilhelm Ludolf Gerherd Augistin von Steuben
              </li>
              <li>General George Washington</li>
              <li>The Continental Soldier</li>
            </ul>

            <p>
              SEE CINEMA &apos;76, a thrilling outdoor screen presentation. The
              amazing exploits of seven Continentals ... known and little known
              ... from the American revolution, their tales told through the
              medium of folksong. You won&apos;t forget this cast of characters
              . . .
            </p>

            <ul className={styles.castList}>
              <li>Timothy Murphy -- the double-barreled rifleman</li>
              <li>John Glover -- leader of the amphibious corps</li>
              <li>Deborah Sampson -- a soldier with a secret</li>
              <li>George Washington -- a man above men</li>
              <li>
                Allan McLane -- the eyes and ears of the new-born nation
              </li>
              <li>Baron Von Steuben -- master of the drill.</li>
              <li>Henry Knox -- artilleryman and patriot.</li>
            </ul>

            <p>
              Join us on an audio tour of CINEMA &apos;76 presented by The
              Continental Insurance Companies with the cartoon photographs
              displayed on the shadowbox screen of the Continental Pavilion that
              accompanied each song!
            </p>
          </div>

          <div className={styles.photoRow}>
            <Image
              src="/images/conins/conins16.jpg"
              alt="Cinema '76 logo"
              width={250}
              height={196}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/conins/cons27.jpg"
              alt="Cinema '76 cast album"
              width={280}
              height={132}
              className={styles.photo}
              unoptimized
            />
            <Image
              src="/images/conins/cons26.jpg"
              alt="Cinema '76 presentation"
              width={206}
              height={235}
              className={styles.photo}
              unoptimized
            />
          </div>

          <div className={styles.ctaRow}>
            <Link href="/conins10-01" className={styles.ctaLink}>
              this way to hear The Continental Soldier
              <Image
                src="/images/conins10/hand_rg.gif"
                alt=""
                width={33}
                height={14}
                className={styles.handIcon}
                unoptimized
              />
            </Link>
          </div>

          <div className={styles.credits}>
            <p>
              Originally presented at the New York World&apos;s Fair by THE
              CONTINENTAL INSURANCE COMPANIES
            </p>
            <p>
              PRODUCED BY Norman Mazin and Edwin Brit Wyckoff
            </p>
            <p>Words and Music by Ray Charles</p>
            <p>Design, Art, Photography by Mazin-Wyckoff Company</p>
            <p className={styles.source}>
              SOURCE: Cast Album - vinyl recording
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/conins09"
        explicitPrevious
        overviewHref="/coninsoverview"
        nextHref="/conins11"
      />
    </>
  );
}
