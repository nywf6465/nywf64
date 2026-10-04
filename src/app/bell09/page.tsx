import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { BellNavChrome } from "@/components/BellNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bell09.module.css";
import { SCRIPT_1964, SCRIPT_1965, type ScriptBlock } from "./scripts";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Ride of Communications 1964 & 1965 Scripts — Bell System — nywf64.com",
  description:
    "1964 and 1965 scripts for The Ride of Communications at the Bell System Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

function italicize(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    ),
  );
}

function ScriptBlocks({ blocks }: { blocks: ScriptBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "cue") {
          return (
            <p key={i} className={styles.cue}>
              {block.text}
            </p>
          );
        }
        if (block.kind === "speech") {
          return (
            <p key={i} className={styles.speech}>
              {italicize(block.text)}
            </p>
          );
        }
        return (
          <ul key={i} className={styles.song}>
            {block.lines.map((line, j) =>
              line === "" ? (
                <li key={j} className={styles.songSpacer} aria-hidden="true" />
              ) : (
                <li key={j}>{line}</li>
              ),
            )}
          </ul>
        );
      })}
    </>
  );
}

/**
 * Bell System — The Ride of Communications 1964 & 1965 Scripts.
 * Body from legacy bell09.html (custom transcript page — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → BellNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Bell09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Bell System Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/belloverview/hero-banner.jpg"
            alt="Bell System Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BellNavChrome />

      <article className={styles.article} aria-labelledby="bell09-title">
        <header className={styles.titleBar}>
          <h1 id="bell09-title" className={styles.titleBarMain}>
            The Ride of Communications 1964 &amp; 1965 Scripts
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
              The Bell System&apos;s
              <br />
              <em>&quot;RIDE OF COMMUNICATIONS&quot;</em>
              <br />
              Soundtrack 1965
            </p>
            <div>
              <a
                className={styles.listenLink}
                href="/audio/bell/Dashner_Bell.mp3"
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
                LISTEN! <span className={styles.listenSize}>(4.5MB)</span>
              </a>
              <p className={styles.source}>
                SOURCE: Ray Dashner Archives 2007 All Rights Reserved
              </p>
            </div>
          </div>
          <audio
            className={styles.player}
            controls
            preload="none"
            src="/audio/bell/Dashner_Bell.mp3"
          >
            Your browser does not support the audio element.
          </audio>

          <hr className={styles.sectionRule} />

          <div className={styles.showBanner}>
            <p className={styles.showTitle}>
              THE <em>&quot;RIDE OF COMMUNICATIONS&quot;</em>
            </p>
            <p className={styles.showYear}>Transcript of the 1964 Show</p>
          </div>

          <div className={styles.photoRow}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/bell09/bell18.jpg"
                alt="Boarding the Ride"
                width={240}
                height={347}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <div>
              <p className={styles.caption}>
                Boarding <em>The Ride of Communications</em>
                <br />
                <span className={styles.captionNote}>
                  (Courtesy of Bradd Schiffman)
                </span>
              </p>
              <p className={styles.source}>SOURCE: A.T.& T. Photo Archives</p>
            </div>
          </div>

          <ScriptBlocks blocks={SCRIPT_1964} />

          <hr className={styles.sectionRule} />

          <div className={styles.showBanner}>
            <p className={styles.showTitle}>
              THE <em>&quot;RIDE OF COMMUNICATIONS&quot;</em>
            </p>
            <p className={styles.showYear}>Transcript of the 1965 Show</p>
          </div>

          <figure className={`${styles.figure} ${styles.figureCentered}`}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/bell09/bell16.jpg"
                alt="Interior view of Ride Train"
                width={460}
                height={304}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Inside <em>The Ride of Communications</em>
              <span className={styles.captionNote}>
                {" "}
                (courtesy of Bradd Schiffman)
              </span>
            </figcaption>
            <p className={styles.source}>SOURCE: © Wolfe Worldwide Films</p>
          </figure>

          <ScriptBlocks blocks={SCRIPT_1965} />
        </div>
      </article>

      <Nav2Bar
        previousHref="/bell08"
        overviewHref="/belloverview"
        nextHref="/bellexhibithall"
      />
    </>
  );
}
