import type { Metadata } from "next";
import Image from "next/image";
import { CitservNavChrome } from "@/components/CitservNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./citserv06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Paul Lavalle — Cities Service Band — nywf64.com",
  description:
    "Paul Lavalle, conductor of the Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair — from nywf64.com.",
};

/**
 * Cities Service Band — Paul Lavalle topic page.
 * Body from legacy citserv06.html; hero shared with the citserv overview.
 */
export default function Citserv06Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="Cities Service World's Fair Band of America"
      >
        <div className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/citservoverview/hero-banner.jpg"
            alt="Cities Service World's Fair Band of America at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CitservNavChrome />

      <article className={styles.article} aria-labelledby="citserv06-title">
        <header className={styles.titleBar}>
          <h1 id="citserv06-title" className={styles.titleBarMain}>
            Paul Lavalle
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.bioRow}>
            <Image
              src="/images/citserv06/citserv10.jpg"
              alt="Paul Lavalle"
              width={220}
              height={296}
              className={styles.portrait}
              unoptimized
            />
            <div className={styles.bioCopy}>
              <p>
                Paul Lavalle (September 6, 1908 - June 24, 1997) was an American
                conductor, composer, arranger and performer on clarinet and
                saxophone.
              </p>
              <p>
                Lavalle was selected over several applicants to become the
                conductor of the <em>Band of America</em> in 1948. They performed
                a weekly radio program on NBC Radio for eight years and almost
                400 programs. Each program began with the introduction,
                &quot;Forty-eight states... 48 stars... 48 men marching down the
                main street of everybody&apos;s hometown! Here comes the Cities
                Service Band of America, conducted by Paul Lavalle!&quot;
              </p>
              <p>
                Beginning in 1964, the band toured extensively and also became
                the official band of the 1964 New York World&apos;s Fair, an
                engagement that lasted into 1965.
              </p>
            </div>
          </div>

          <p className={styles.source}>Source: Wikipedia.com</p>

          <hr className={styles.rule} />

          <h2 className={styles.sectionHeading}>
            Paul Lavalle Conducts <em>The World&apos;s Fair Suite</em>
          </h2>

          <div className={styles.albumRow}>
            <Image
              src="/images/citserv06/citserv07.jpg"
              alt="Album jacket — The World's Fair Suite"
              width={360}
              height={367}
              className={styles.albumJacket}
              unoptimized
            />
            <div className={styles.conductorWrap}>
              <Image
                src="/images/citserv06/citserv08.jpg"
                alt="Lavalle as Conductor"
                width={275}
                height={191}
                className={styles.conductorPhoto}
                unoptimized
              />
              <p className={styles.conductorCaption}>Paul Lavalle, Conductor</p>
            </div>
          </div>

          <div className={styles.albumCopy}>
            <p>
              ...a dynamic premier performance April 22, 1964, opening day at
              the New York World&apos;s Fair. The debut of Grofe&apos;s suite was
              conducted by Paul Lavalle and played with evident relish by The
              World&apos;s Fair Symphony Orchestra. In this first recorded
              performance of <em>The World&apos;s Fair Suite</em> — the official
              recording — Paul LaValle is again the man behind the baton, using
              his generous skills to charge the music with all that is intended
              by the composer — the limitless wonder, noble meaning, excitement
              and just plain fun of this big international show!
            </p>
          </div>

          <p className={styles.source}>
            Source: LP Record Album, <em>The World&apos;s Fair Suite</em> by
            Ferde Grofé, Courtesy of Rich Post
          </p>

          <div className={styles.note}>
            <p>
              <strong>Webmaster&apos;s note...</strong> Thank you to Suzanne
              Lavalle Bothamley for a contribution of photographs of her father
              and the Cities Service World&apos;s Fair Band of America. It
              documents a happy part of the Fair for so many people who were
              able to hear the Band during those two summers of the Fair.
              Suzanne writes...
            </p>
            <p>
              <em>
                My father was Paul Lavalle, director of the Cities Service Band
                of America. I spent two memorable summers riding around on the
                band wagon as it traveled all around the fair each day and every
                day ending with a concert in front of the Unisphere. I remember
                meeting and having dinner with Walt Disney and my dad, Lucille
                Ball deciding to forego a good bit of her planned tour of the
                fair to ride around (and swing the baton a few times herself) on
                the band wagon, meeting Richard Nixon, who had known dad for
                years and couldn&apos;t wait to direct the band himself and
                meeting President Johnson on that dreadfully rainy opening day.
                And I could go on for hours... Sadly, Dad is no longer with us,
                but I know one of his fondest memories was the time spent on that
                band wagon playing for and greeting thousands of people everyday.
                He and the band indeed had the best possible vantage point and it
                was a magical time for them.
              </em>
            </p>
            <p>
              <em>August 5, 2002</em>
            </p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/citserv05"
        overviewHref="/citservoverview"
        nextHref="/citservoverview"
      />
    </>
  );
}
