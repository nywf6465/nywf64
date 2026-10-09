import type { Metadata } from "next";
import Image from "next/image";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./clair05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Good Afternoon Ladies... — Clairol — nywf64.com",
  description:
    "NBC News World's Fair Diary visit to the Clairol Color Carousel — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol — Good Afternoon Ladies... (legacy clair05.html).
 * Photo/text essay from NBC News Worlds' Fair Diary with Edwin Newman.
 */
export default function Clair05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Clairol">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/clairoverview/hero-banner.jpg"
            alt="Clairol Color Carousel at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ClairNavChrome />

      <article className={styles.article} aria-labelledby="clair05-title">
        <header className={styles.titleBar}>
          <h1 id="clair05-title" className={styles.titleBarMain}>
            Good Afternoon Ladies...
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.essayBlock}>
            <div className={styles.row}>
              <Image
                src="/images/clair05/clair13.jpg"
                alt="Pavilion barker"
                width={300}
                height={218}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.burgundy}>
                ... We&apos;d like to welcome you to our Clairol Color Carousel.
                Please see yourself in the hair color bubbles out in front. See
                yourself as a blonde, brunette or red head.
              </p>
            </div>
            <div className={styles.row}>
              <Image
                src="/images/clair05/clair11.jpg"
                alt="In line for the Carousel"
                width={300}
                height={218}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.burgundy}>
                If you&apos;d like to come in afterwards; come take the ride
                around the Carousel. It&apos;s designed for women over sixteen
                years of age. You can take the ride around, relax, listen to a
                musical hair-coloring introduction sung by Johnny Desmond.
              </p>
            </div>
            <div className={styles.row}>
              <Image
                src="/images/clair05/clair12.jpg"
                alt="Waiting to ride the Carousel"
                width={300}
                height={219}
                className={styles.photo}
                unoptimized
              />
              <p className={styles.burgundy}>
                Afterward, if you&apos;d like to have consultation, stop at the
                desk and tell the consultant there how you&apos;d like to change
                your hair color. If you&apos;ll just step right up here to the
                left. Come into the pavilion please.&quot;
              </p>
            </div>
            <p className={styles.source}>
              SOURCE: Photos and Text: NBC News,{" "}
              <em>Worlds&apos; Fair Diary</em> with Edwin Newman, Broadcast July
              30, 1964
            </p>
          </div>

          <div className={styles.songGrid}>
            <div className={styles.songCol}>
              <p className={styles.songLead}>Johnny Desmond sings...</p>
              <Image
                src="/images/clair05/clair14.jpg"
                alt="Johnny Desmond"
                width={100}
                height={78}
                className={styles.desmond}
                unoptimized
              />
              <p className={styles.lyric}>
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />{" "}
                When we dream by day,
                <br />
                or when we dream by night,
                <br />
                they say we dream in black and white
                <br />
                and what could be duller?{" "}
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />
              </p>
              <p className={styles.lyric}>
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />{" "}
                No color? No color!
                <br />
                Me, I like to think that I can choose my dreams.
                <br />
                So from now on I&apos;ll refuse my dreams unless they&apos;re in
                color.{" "}
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />
              </p>
              <p className={styles.lyric}>
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />{" "}
                Great. Cool.
                <br />
                Bright. Wild color!{" "}
                <Image
                  src="/images/clair05/clair15.jpg"
                  alt=""
                  width={15}
                  height={14}
                  className={styles.note}
                  unoptimized
                />
              </p>
              <p className={styles.quote}>
                &quot;My feet are what&apos;s on my mind. Any place that lets you
                sit down at the Fair looks attractive to me!&quot;
              </p>
            </div>
            <div className={styles.songPhotos}>
              <Image
                src="/images/clair05/clair07.jpg"
                alt="Aboard the Carousel"
                width={300}
                height={219}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair05/clair10.jpg"
                alt="Booth in the Carousel"
                width={300}
                height={218}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair05/clair08.jpg"
                alt="Aboard the Carousel"
                width={300}
                height={221}
                className={styles.photo}
                unoptimized
              />
              <Image
                src="/images/clair05/clair09.jpg"
                alt="Pavilion-goer on the Carousel"
                width={300}
                height={218}
                className={styles.photo}
                unoptimized
              />
            </div>
          </div>

          <div className={styles.ad}>
            <Image
              src="/images/clair05/clair01.jpg"
              alt="Don't miss The Clairol Color Carousel"
              width={550}
              height={456}
              className={styles.adArt}
              unoptimized
            />
            <div className={styles.adCopy}>
              <p className={styles.adHeadline}>
                Don&apos;t miss
                <br />
                The Clairol
                <br />
                Color Carousel!
              </p>
              <p>
                <strong>See Yourself</strong> as a blonde, a redhead, a brunette!
              </p>
              <p>
                <strong>The Clairol Consultants</strong> give every woman a free
                personalized consultation ... answering your questions on how to
                become the fairest of the Fair!
              </p>
              <p>
                <strong>The Clairol Cyber-Tronic Computer</strong> works out your
                own Fabulous Formula for your beauty salon!
              </p>
              <div className={styles.adFooter}>
                <span>ON THE POOL OF INDUSTRY</span>
                <span className={styles.adCopyright}>©Clairol Inc.1964</span>
              </div>
            </div>
            <p className={styles.source}>SOURCE: National Advertisement</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/clair04"
        overviewHref="/clairoverview"
        nextHref="/clair06"
      />
    </>
  );
}
