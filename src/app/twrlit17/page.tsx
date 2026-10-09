import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./twrlit17.module.css";
import { HOLIDAY_SCENES, type ScriptLine } from "./scripts";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "1965's Holiday With Light - The Script — Tower of Light — nywf64.com",
  description:
    "1965 Holiday With Light show script with audio — Tower of Light at the 1964/1965 New York World’s Fair on nywf64.com.",
};

const CREDITS: [string, string][] = [
  ["Voice of Benjamin Franklin", "Kenny Delmar"],
  ["Voice of Reddy Kilowatt", "Russell Nype"],
  ["Choral Accompaniment", "The Dick Williams Singers"],
  ["Production and Design", "Wilding, Inc."],
  ["Producer", "Howard Hoyt"],
  ["Script and Lyrics", "Sidney Brooks"],
  ["Composer", "Lee Pockriss"],
  ["Musical Director", "Larry Wilcox"],
  ["Setting", "Fred Fox"],
];

function voiceClass(
  voice: Extract<ScriptLine, { kind: "line" }>["voice"],
): string {
  switch (voice) {
    case "reddy":
      return styles.voiceReddy;
    case "ben":
      return styles.voiceBen;
    case "birds":
      return styles.voiceBirds;
    case "radio":
      return styles.voiceRadio;
    case "cow":
      return styles.voiceCow;
    default:
      return styles.voiceStage;
  }
}

function renderDialogue(text: string, voice: string): ReactNode {
  const lines = text.split("\n");
  if (lines.length > 1) {
    return (
      <ul className={styles.songLines}>
        {lines.map((line, i) => (
          <li key={i} className={voice}>{line}</li>
        ))}
      </ul>
    );
  }
  return <span className={voice}>{text}</span>;
}

function AudioBlock({ files }: { files: string[] }) {
  if (files.length === 0) return null;
  const primary = files[0];
  return (
    <>
      <div className={styles.listenRow}>
        <a
          className={styles.listenLink}
          href={`/audio/twrlit/${primary}`}
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
      {files.map((file) => (
        <audio
          key={file}
          className={styles.player}
          controls
          preload="none"
          src={`/audio/twrlit/${file}`}
        >
          Your browser does not support the audio element.
        </audio>
      ))}
    </>
  );
}

/**
 * Tower of Light — 1965 Holiday With Light script (legacy twrlit17.html).
 */
export default function Twrlit17Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Tower of Light">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/twrlitoverview/hero-banner.jpg"
            alt="Tower of Light at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TwrlitNavChrome />

      <article className={styles.article} aria-labelledby="twrlit17-title">
        <header className={styles.titleBar}>
          <h1 id="twrlit17-title" className={styles.titleBarMain}>
            1965&apos;s <em>Holiday With Light</em> - The Script
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.showHeader}>
            <p className={styles.showTitle}>
              &quot;HOLIDAY WITH LIGHT&quot;
            </p>
            <p className={styles.showSubtitle}>TOWER OF LIGHT</p>
            <p className={styles.showYear}>1965</p>
            <p className={styles.scriptBanner}>T H E S C R I P T</p>
          </div>

          <p className={styles.sourceNote}>
            Source: Souvenir Record Jacket Cover (all the above)
          </p>

          <figure className={styles.jacketFigure}>
            <Image
              src="/images/twrlit17/tol01.jpg"
              alt="Souvenir Record Jacket Cover"
              width={418}
              height={336}
              className={styles.jacketImg}
              unoptimized
            />
          </figure>

          <p className={styles.leadGray}>
            <em>Holiday With Light </em>
            is a lively new musical show, presented by America&apos;s
            investor-owned electric utility companies. Reddy Kilowatt, a familiar
            trademark of many electric utility companies, is introduced at the onset
            of the show and takes Benjamin Franklin and the audience through a
            series of fanciful scenes depicting electricity&apos;s contribution
            toward making every day a holiday. The audience, comfortably seated on a
            giant revolving turntable, rides through seven show chambers and hears a
            selection of musical numbers.
          </p>
          <p className={styles.leadGray}>
            Some of broadway&apos;s greatest names have combined their talents to
            make <em>Holiday With Light </em>a delightful musical entertainment.
            The musical score was composed by Lee Pockriss, composer of the Broadway
            hit <em>Tavarich</em>, and such popular songs as <em>Catch a Falling Star, Johnny Angel, </em>
            and <em>Itsy Bitsy Teeny Weeny yellow Polka Dot Bikini</em>. Sidney
            Brooks, who helped create three other New York World&apos;s Fair
            presentations, wrote the lyrics and script.
          </p>

          <table className={styles.credits}>
            <caption>C R E D I T S</caption>
            <tbody>
              {CREDITS.map(([role, name]) => (
                <tr key={role}>
                  <td>{role}</td>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.castRow}>
            <Image
              src="/images/twrlit17/tol03.jpg"
              alt="&quot;Uncle&quot; Ben Franklin"
              width={75}
              height={96}
              className={styles.castIcon}
              unoptimized
            />
            <h2 className={styles.castHeading}>HOLIDAY WITH LIGHT</h2>
            <Image
              src="/images/twrlit17/tol02.jpg"
              alt="Reddy Kilowatt"
              width={75}
              height={101}
              className={styles.castIcon}
              unoptimized
            />
          </div>

          <p
            style={{
              textAlign: "center",
              fontWeight: 700,
              color: "#090",
              margin: "0 0 0.35rem",
            }}
          >
            C A S T O F C H A R A C T E R S
          </p>
          <ul className={styles.castList}>
            <li className={styles.castReddy}>Reddy Kilowatt</li>
            <li className={styles.castBen}>&quot;Uncle&quot; Ben Franklin</li>
            <li className={styles.castBirds}>The &quot;Kilowatt Birds&quot; Chorus</li>
            <li className={styles.castRadio}>Radio Announcer</li>
            <li className={styles.castCow}>Madame Cow</li>
          </ul>

          {HOLIDAY_SCENES.map((scene) => (
            <section
              key={scene.scene}
              className={styles.scene}
              aria-label={`Scene ${scene.scene}`}
            >
              <div className={styles.sceneHeader}>
                <div className={styles.sceneNum}>SCENE {scene.scene}:</div>
                <div className={styles.sceneTitle}>{scene.title}</div>
              </div>

              <table className={styles.sceneTable}>
                <tbody>
                  {scene.lines.map((line, i) => {
                    if (line.kind === "stage") {
                      return (
                        <tr key={i} className={styles.sceneRow}>
                          <td className={styles.speakerCol} />
                          <td className={styles.dialogueCol}>
                            <p className={styles.stageLine}>{line.text}</p>
                          </td>
                        </tr>
                      );
                    }
                    const vc = voiceClass(line.voice);
                    const showAudio =
                      scene.audios.length > 0 &&
                      i ===
                        scene.lines.findIndex((l) => l.kind === "line");
                    return (
                      <tr key={i} className={styles.sceneRow}>
                        <td className={styles.speakerCol}>
                          <span className={vc}>{line.speaker}:</span>
                          {showAudio ? (
                            <AudioBlock files={scene.audios} />
                          ) : null}
                        </td>
                        <td className={styles.dialogueCol}>
                          {renderDialogue(line.text, vc)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </article>

      <Nav2Bar
        previousHref="/twrlit16"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlit18"
      />
    </>
  );
}
