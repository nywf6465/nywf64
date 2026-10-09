import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TwrlitNavChrome } from "@/components/TwrlitNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { ESSAY_ITEMS } from "./essayContent";
import styles from "./twrlit31.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Essay: Remembering the Tower of Light — Tower of Light — nywf64.com",
  description:
    "Gary Holmes remembers the Tower of Light — 1964/1965 New York World’s Fair on nywf64.com.",
};

function EssayParagraph({ text }: { text: string }) {
  const legacies = "[see the Legacies section of nywf64.com]";
  if (text.includes(legacies)) {
    const [before, after] = text.split(legacies);
    return (
      <p>
        {before}
        [see the{" "}
        <Link href="/information/end">Legacies</Link> section of nywf64.com].
        {after}
      </p>
    );
  }
  return <p>{text}</p>;
}

/**
 * Tower of Light — essay by Gary Holmes (legacy twrlit31.html).
 */
export default function Twrlit31Page() {
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

      <article className={styles.article} aria-labelledby="twrlit31-title">
        <header className={styles.titleBar}>
          <h1 id="twrlit31-title" className={styles.titleBarMain}>
            Essay: <em>Remembering the Tower of Light</em>
          </h1>
          <p className={styles.titleBarByline}>… by Gary Holmes</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            {ESSAY_ITEMS.map((item, i) => {
              if (item.kind === "p") {
                return <EssayParagraph key={i} text={item.text} />;
              }
              if (item.kind === "listen") {
                return (
                  <div key={i} className={styles.listenRow}>
                    <a
                      className={styles.listenLink}
                      href="/audio/twrlit/tol01.mp3"
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
                      LISTEN to &quot;Holiday With Light!&quot;
                    </a>
                    <audio
                      className={styles.player}
                      controls
                      preload="none"
                      src="/audio/twrlit/tol01.mp3"
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                );
              }
              if (item.kind === "figure") {
                const captionLines = item.caption.split("\n");
                return (
                  <figure key={i} className={styles.figure}>
                    <Image
                      src={item.src}
                      alt={captionLines[0] ?? ""}
                      width={item.width}
                      height={item.height}
                      className={styles.photo}
                      unoptimized
                    />
                    {item.caption ? (
                      <figcaption>
                        {captionLines[0] ? (
                          <span className={styles.captionTitle}>
                            {captionLines[0]}
                          </span>
                        ) : null}
                        {captionLines.slice(1).join(" ") ? (
                          <span className={styles.captionBody}>
                            {captionLines.slice(1).join(" ")}
                          </span>
                        ) : null}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }
              return (
                <div key={i} className={styles.bioBox}>
                  <Image
                    src={item.src}
                    alt="Uncle Ben"
                    width={item.width}
                    height={item.height}
                    className={styles.bioImg}
                    unoptimized
                  />
                  <p className={styles.bioText}>
                    The &apos;show biz&apos; influence the fair had on{" "}
                    <strong>Gary Holmes</strong> brought him to stage managing,
                    back office theater work and ultimately as an attorney doing
                    copyright and tradmark law, with occassional &apos;very low
                    level&apos; productions of the plays he writes. Of his repeat
                    visits to his favorite shows at the Fair, Gary says,
                    &quot;I would literally &apos;breathe them in.&apos;&quot;
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/twrlit30"
        explicitPrevious
        overviewHref="/twrlitoverview"
        nextHref="/twrlit32"
      />
    </>
  );
}
