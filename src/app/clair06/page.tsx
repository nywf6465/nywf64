import type { Metadata } from "next";
import Image from "next/image";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./clair06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Those Amazing Bubbles — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel hair-color bubbles — Saturday Evening Post and NBC News coverage from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol — Those Amazing Bubbles (legacy clair06.html).
 */
export default function Clair06Page() {
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

      <article className={styles.article} aria-labelledby="clair06-title">
        <header className={styles.titleBar}>
          <h1 id="clair06-title" className={styles.titleBarMain}>
            Those Amazing Bubbles
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.techHeader}>
            <p className={styles.techTitle}>THE OTHER YOU -- IN TECHNICOLOR</p>
            <p className={styles.techCopy}>
              <em>
                Visitors to Clairol exhibit see themselves in Technicolor by
                peering into gadgets that use mirrors and pictures to show how
                they&apos;d look in a variety of hairstyles and hues. Inside
                pavilion -- which is off-limits to men -- women ride a carousel
                and receive analyses of proper hair-coloring worked up for them
                by a computer.
              </em>
            </p>
          </div>

          <Image
            src="/images/clair06/clair16.jpg"
            alt="Peering into Bubbles"
            width={600}
            height={679}
            className={styles.heroPhoto}
            unoptimized
          />
          <p className={styles.source}>
            SOURCE: Photo: <em>The Saturday Evening Post,</em> Issue No. 20, May
            23, 1964 - Photograph by John Zimmerman
          </p>

          <h2 className={styles.sectionHeading}>Take a Peek Inside</h2>

          <div className={styles.row}>
            <Image
              src="/images/clair06/clair03.jpg"
              alt="See Yourself..."
              width={300}
              height={262}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.copy}>
              Has there been anything like it at a World&apos;s Fair before or
              since? &quot;See Yourself... in a New Haircolor.&quot;
            </p>
          </div>
          <div className={styles.row}>
            <Image
              src="/images/clair06/clair06.jpg"
              alt="Women and Bubbles"
              width={300}
              height={218}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.copy}>
              A row of large white bubbles are located at the front of the
              Carousel. These ingenious adjustable devices let you see what
              you&apos;d look like in a different hairstyle and color!
            </p>
          </div>
          <div className={styles.row}>
            <Image
              src="/images/clair06/clair05.jpg"
              alt="Face cutout"
              width={300}
              height={222}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.copy}>
              Simply place your face into the cutout provided...
            </p>
          </div>
          <div className={styles.row}>
            <Image
              src="/images/clair06/clair04.jpg"
              alt="A Honey Blonde!"
              width={300}
              height={221}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.copy}>
              ... and see a mirrored reflection of yourself as a honey blonde!
            </p>
          </div>
          <p className={styles.source}>
            SOURCE: Photos: NBC News, <em>Worlds&apos; Fair Diary</em> with Edwin
            Newman, Broadcast July 30, 1964
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/clair05"
        overviewHref="/clairoverview"
        nextHref="/clair07"
      />
    </>
  );
}
