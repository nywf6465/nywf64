import type { Metadata } from "next";
import Image from "next/image";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./ibm13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Listen to Audio of the \"Information Machine\" Show! — IBM Pavilion — nywf64.com",
  description:
    "Ray Dashner recording of the IBM Information Machine show soundtrack — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM audio page — Information Machine soundtrack.
 * Body from legacy ibm13.html (Adobe/scrap chrome omitted).
 */
export default function Ibm13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="IBM Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={styles.article} aria-labelledby="ibm13-title">
        <header className={styles.titleBar}>
          <h1 id="ibm13-title" className={styles.titleBarMain}>
            <em>Listen to Audio </em>of the &quot;Information Machine&quot; Show!
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.dashner}>
            <span className={styles.dashnerName}>Ray Dashner</span>, tape
            recorder in hand, preserved the soundtracks of many of the New York
            World&apos;s Fair shows for his own enjoyment. Now, relive the sounds
            of the Fair through Ray&apos;s fabulous recordings!
          </p>

          <div className={styles.listenRow}>
            <p className={styles.listenTitle}>
              IBM&apos;s
              <br />
              <em>&quot;Information Machine&quot;</em>
              <br />
              Soundtrack 1965
            </p>
            <div>
              <a
                className={styles.listenLink}
                href="/audio/ibm/Dashner_IBM.mp3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/ibm13/sound.gif"
                  alt=""
                  width={20}
                  height={23}
                  unoptimized
                />
                LISTEN! <span className={styles.listenSize}>(4.42MB)</span>
              </a>
              <p className={styles.source}>
                Source: Ray Dashner Archives 2007 All Rights Reserved
              </p>
            </div>
          </div>

          <audio
            className={styles.audio}
            controls
            preload="none"
            src="/audio/ibm/Dashner_IBM.mp3"
          >
            Your browser does not support the audio element.
          </audio>

          <hr className={styles.rule} />

          <Image
            src="/images/ibm13/ibm03.jpg"
            alt="The Information Machine host"
            width={481}
            height={252}
            className={styles.photo}
            unoptimized
          />

          <p className={styles.bodyText}>
            IBM chose a most unusual way of announcing/narrating their
            presentation. A <em>host</em> dressed in white tie and tails descends
            from the steel trees on a crow&apos;s nest platform and addresses the
            audience while suspended before them! After his introduction, he
            ascends back into the <em>Information Machine </em>and appears on a
            balcony to narrate the show.
          </p>
          <p className={styles.bodyText}>
            Look closely at the picture on the left. The host can be seen
            ascending or descending from an exterior portal in the ovoid{" "}
            <em>in open air on the crow&apos;s nest</em> - some 60+ feet up! Now
            that&apos;s a <em>ride! </em>No doubt &quot;just another day at the
            office&quot; on a beautiful sunny day, but a most unpleasant
            experience in a driving April rain?
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ibm12"
        overviewHref="/ibmoverview"
        nextHref="/ibm14"
      />
    </>
  );
}
