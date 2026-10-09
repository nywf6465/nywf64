import Image from "next/image";
import Link from "next/link";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import type { Conins10Song } from "@/data/conins10Songs";
import styles from "@/app/conins10/conins10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

/**
 * Shared Cinema '76 song page — audio + lyrics + cartoon stills.
 * Used by /conins10-01 … /conins10-08.
 */
export function ConinsCinemaSongPage({ song }: { song: Conins10Song }) {
  const titleId = `conins10-${String(song.n).padStart(2, "0")}-title`;
  const backHref =
    song.prevLabel === null ? "/conins10" : song.prevHref;
  const backLabel =
    song.prevLabel === null
      ? "Cinema '76 Introduction"
      : song.prevLabel;

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

      <article className={styles.article} aria-labelledby={titleId}>
        <header className={styles.titleBar}>
          <h1 id={titleId} className={styles.titleBarMain}>
            Cinema &apos;76: Illustrated Transcript with Audio
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.songNav}>
            <Link href={backHref} className={styles.songNavLink}>
              <Image
                src="/images/conins10/hand_lf.gif"
                alt=""
                width={33}
                height={14}
                className={styles.handIcon}
                unoptimized
              />
              That way to <em>{backLabel}</em>
            </Link>
            {song.nextLabel ? (
              <Link href={song.nextHref} className={styles.songNavLink}>
                This way to <em>{song.nextLabel}</em>
                <Image
                  src="/images/conins10/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
              </Link>
            ) : (
              <Link href="/conins10" className={styles.songNavLink}>
                This way to <em>Cinema &apos;76 Introduction</em>
                <Image
                  src="/images/conins10/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
              </Link>
            )}
          </div>

          <div className={styles.introGrid}>
            <div className={styles.logoWrap}>
              <Image
                src="/images/conins/conins16.jpg"
                alt="Cinema '76 logo"
                width={250}
                height={196}
                className={styles.logo}
                unoptimized
              />
            </div>
            <div className={styles.songHead}>
              <h2 className={styles.songTitle}>&quot;{song.title}&quot;</h2>
              <div className={styles.listenRow}>
                <Image
                  src="/images/sound.gif"
                  alt=""
                  width={20}
                  height={23}
                  className={styles.soundIcon}
                  unoptimized
                />
                <p className={styles.listenLabel}>LISTEN!</p>
                <audio
                  className={styles.audio}
                  controls
                  preload="none"
                  src={`/mp3files/${song.mp3}`}
                >
                  <a href={`/mp3files/${song.mp3}`}>Download {song.title} audio</a>
                </audio>
              </div>
              <p className={styles.source}>
                Source: Ray Dashner Archives 2007 All Rights Reserved
              </p>
            </div>
          </div>

          {song.lyrics.length > 0 ? (
            <div className={styles.lyrics}>
              {song.lyrics.map((line, i) => (
                <p key={`${i}-${line.slice(0, 24)}`}>{line}</p>
              ))}
            </div>
          ) : null}

          {song.frames.length > 0 ? (
            <div className={styles.frames}>
              {song.frames.map((frame, i) => (
                <Image
                  key={`${frame.file}-${i}`}
                  src={`/images/conins/${frame.file}`}
                  alt={`${song.title} cartoon still`}
                  width={frame.width}
                  height={frame.height}
                  className={styles.frame}
                  unoptimized
                />
              ))}
            </div>
          ) : null}

          <div className={styles.songNav}>
            <Link href={backHref} className={styles.songNavLink}>
              <Image
                src="/images/conins10/hand_lf.gif"
                alt=""
                width={33}
                height={14}
                className={styles.handIcon}
                unoptimized
              />
              That way to <em>{backLabel}</em>
            </Link>
            {song.nextLabel ? (
              <Link href={song.nextHref} className={styles.songNavLink}>
                This way to <em>{song.nextLabel}</em>
                <Image
                  src="/images/conins10/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
              </Link>
            ) : (
              <Link href="/conins10" className={styles.songNavLink}>
                This way to <em>Cinema &apos;76 Introduction</em>
                <Image
                  src="/images/conins10/hand_rg.gif"
                  alt=""
                  width={33}
                  height={14}
                  className={styles.handIcon}
                  unoptimized
                />
              </Link>
            )}
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
