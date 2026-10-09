import type { Metadata } from "next";
import Image from "next/image";
import { TravelersNavChrome } from "@/components/TravelersNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./travelers13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";
import {
  CREDITS_LINES,
  EPISODES,
  PROLOGUE_PARAS,
  SHAPIRO_PARAS,
  WEBMASTER_HARRISON,
  WEBMASTER_SCHIFFMAN,
  type RedRecordEpisode,
} from "./redRecordData";

export const metadata: Metadata = {
  title:
    'The Red Record: Souvenir of "The Triumph of Man" | Transcript with audio! — Travelers Insurance — nywf64.com',
  description:
    'The Red Record transcript with audio — Travelers Insurance "The Triumph of Man" at the 1964/1965 New York World’s Fair on nywf64.com.',
};

function EpisodeCard({ episode }: { episode: RedRecordEpisode }) {
  return (
    <div className={styles.episode}>
      <p className={styles.episodeTitle}>{episode.title}</p>
      <Image
        src={episode.image}
        alt={episode.imageAlt}
        width={220}
        height={193}
        className={styles.episodeImg}
        unoptimized
      />
      <div className={styles.listenRow}>
        <a
          className={styles.listenLink}
          href={episode.audioSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/bell09/sound.gif"
            alt=""
            width={20}
            height={23}
            className={styles.soundIcon}
            unoptimized
          />
          LISTEN!
        </a>
      </div>
      <p className={styles.transcript}>{episode.transcript}</p>
      <audio
        className={styles.player}
        controls
        preload="none"
        src={episode.audioSrc}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

function pairEpisodes(): RedRecordEpisode[][] {
  const rows: RedRecordEpisode[][] = [];
  for (let i = 0; i < EPISODES.length; i += 2) {
    rows.push(EPISODES.slice(i, i + 2));
  }
  return rows;
}

/**
 * Travelers — The Red Record transcript with audio (legacy travelers13.html).
 */
export default function Travelers13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Travelers Insurance Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/travelersoverview/hero-banner.jpg"
            alt="Travelers Insurance Pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TravelersNavChrome />

      <article className={styles.article} aria-labelledby="travelers13-title">
        <header className={styles.titleBar}>
          <h1 id="travelers13-title" className={styles.titleBarMain}>
            The Red Record: Souvenir of &quot;The Triumph of Man&quot; |
            Transcript <span className={styles.titleItalic}>with audio!</span>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.leadRow}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/travelers13/trvlrs29.jpg"
                alt="Souvenir Record Album order form"
                width={240}
                height={214}
                className={styles.episodeImg}
                unoptimized
              />
            </span>
            <div className={styles.leadCopy}>
              <p>
                The red vinyl 33 1/3 RPM recording of &quot;The Triumph of
                Man&quot; has become one of he most prolific and popular
                collectibles from the Fair!
              </p>
              <p>
                Read along and LISTEN to the soundtrack of the The Travelers
                exhibit. Your <em>on-line</em> souvenir of the Fair!
              </p>
            </div>
          </div>

          <hr className={styles.sectionRule} />

          <Image
            src="/images/travelers13/trvlrs30.jpg"
            alt="The Triumph of Man souvenir record"
            width={600}
            height={366}
            className={styles.recordCover}
            unoptimized
          />

          <div className={styles.prologueBox}>
            <p className={styles.prologueTitle}>THE TRIUMPH OF MAN</p>
            {PROLOGUE_PARAS.map((para, i) => (
              <p
                key={i}
                className={para.italic ? styles.prologueItalic : undefined}
              >
                {para.text}
              </p>
            ))}
          </div>

          <p className={styles.credits}>
            {CREDITS_LINES.map((line, i) => (
              <span key={line}>
                {line}
                {i < CREDITS_LINES.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>

          {pairEpisodes().map((row, i) => (
            <div key={i} className={styles.episodeGrid}>
              {row.map((ep) => (
                <EpisodeCard key={ep.title} episode={ep} />
              ))}
            </div>
          ))}

          <div className={styles.essayBox}>
            {SHAPIRO_PARAS.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <dl className={styles.signature}>
              <dt>Harry L. Shapiro, PhD.</dt>
              <dd>Chairman, Dept. of Anthropology</dd>
              <dd>The American Museum of Natural History</dd>
            </dl>
          </div>

          <hr className={styles.sectionRule} />

          <p className={styles.webmaster}>
            <span className={styles.webmasterLabel}>webmasters note: </span>
            Mike Harrison reports: <em>{WEBMASTER_HARRISON}</em>
          </p>
          <Image
            src="/images/travelers13/trvlrs45.jpg"
            alt="Visit Travelers Exhibit Stamp"
            width={220}
            height={150}
            className={styles.stamp}
            unoptimized
          />

          <Image
            src="/images/travelers13/trvlrs31.jpg"
            alt="Thank You & Insurance Request Card"
            width={298}
            height={397}
            className={styles.insertCard}
            unoptimized
          />
          <p className={styles.insertLabel}>Record Insert Card</p>

          <p className={styles.webmaster}>
            <span className={styles.webmasterLabel}>webmasters note: </span>
            {WEBMASTER_SCHIFFMAN}
          </p>
          <div className={styles.signoff}>
            <p>Bill Young</p>
            <p>July, 2017</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/travelers12"
        overviewHref="/travelersoverview"
        nextHref="/travelers14"
      />
    </>
  );
}
