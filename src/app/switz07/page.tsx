import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/switzFeature.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Swiss Watch Industry Meets the Space Age — Switzerland — nywf64.com",
  description:
    "Swiss Watch Industry Meets the Space Age — Switzerland Pavilion essay on nywf64.com.",
};

/**
 * Switzerland — Swiss Watch Industry Meets the Space Age.
 * Body from legacy switz07.html (custom essay).
 */
export default function Switz07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Switzerland">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/switzoverview/hero-banner.jpg"
            alt="Switzerland pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SwitzNavChrome />

      <article className={styles.article} aria-labelledby="switz07-title">
        <header className={styles.titleBar}>
          <h1 id="switz07-title" className={styles.titleBarMain}>
            Swiss Watch Industry Meets the Space Age
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.quoteBlock}>
            <p className={styles.copyTimesSmall}>
              &quot;...Mass production of fine watches is possible only through
              careful testing of every single piece that goes into their
              manufacture. It is demanding work. Some of the parts -- minutely
              fine screws -- are so tiny that to the naked eye they resemble mere
              specks of dust. it takes about 50,000 of them to fill a thimble.
            </p>
            <p className={styles.copyTimesSmall}>
              Although Switzerland produces annually almost 45,000,000
              timepieces, there is no low-quality &apos;mass production&apos; in
              Swiss watchmaking. Every single timepiece is the individual proof
              of Swiss skill...&quot;
            </p>
            <p className={styles.quoteAttr}>
              Advertising brochure: &quot;The Swiss Watch Pavilion, 1964/1965 New
              York World&apos;s Fair&quot;
            </p>
          </div>

          <p className={styles.copyBlack}>
            As the 1964/1965 New York World&apos;s Fair drew to a close, the Space
            Age was about to dawn on the Swiss watchmaking industry. Among the
            items buried in the{" "}
            <Link href="/weshou01" className={styles.link}>
              Westinghouse Time Capsule
            </Link>{" "}
            at the New York Fair on October 16, 1965 was a new type of watch
            developed by Bulova, an American watchmaker. The name of this new
            watch was the &quot;Accutron&quot; and it was regulated by a tiny
            tuning fork.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/switz07/swissaccutron.jpg"
              alt="Accutron advertisement"
              width={470}
              height={282}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>An Accutron Advertisement</p>

          <p className={styles.copyBlack}>
            The Accutron appeared on the market in late 1960 and was marketed at
            the Fair with advertisements appearing in the{" "}
            <em>Official Guide</em>. It was quite popular until its technology
            was replaced by breakthroughs in quartz technology in 1969. The
            Japanese watchmaker Seiko was quick to market these new quartz
            watches with resounding success.
          </p>

          <div className={styles.quoteBlock}>
            <p className={styles.copyTimesSmall}>
              &quot;...In the wake of the quartz boom, the mechanical watch was
              soon decried as old hat and disappeared from almost every
              brand&apos;s range. The advent of microelectronics rendered the
              traditional craft of watchmaking obsolete and at the same time made
              production much more efficient.
            </p>
            <p className={styles.copyTimesSmall}>
              The result was that 60,000 watchmakers lost their jobs during the
              almost decade-long quartz crisis. And along with them, the special
              machines they used and many already finished mechanical watch
              components were discarded. A fatal mistake, as would become
              apparent after the quartz euphoria had subsided.
            </p>
            <p className={styles.copyTimesSmall}>
              Expert watchmakers in retail shops were suddenly degraded to the
              roll of battery changers . And when quartz watches from the Far
              East became even cheaper than the batteries need to run them, the
              whole industry had reached rock bottom.&quot;
            </p>
            <p className={styles.quoteAttr}>
              &quot;AS TIME GOES BY...&quot; <em>Swissair Gazette Magazine</em>,
              in-flight magazine of Swissair, March 2000
            </p>
          </div>

          <p className={styles.copyBlack}>
            The turnaround for the Swiss watchmaking industry came in 1983 with
            the introduction of the &quot;Swatch&quot; -- the inexpensive plastic
            watch which made the analog display with hands popular with consumers
            again. In 1986, the Swiss prominently featured this industry life
            saver on their pavilion at Vancouver&apos;s Expo86.
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/switz07/swisswatch.jpg"
              alt="Expo86 postcard featuring SWATCH"
              width={380}
              height={254}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.caption}>
            Swiss Pavilion at Expo86, Vancouver, B.C., Canada, 1986
          </p>

          <p className={styles.copyBlack}>
            What an interesting paradox -- the Space Age versus Old World
            Craftsmanship. It took the Swiss watchmaking industry fifteen years
            (and its near demise) to prove that Space Age technology isn&apos;t
            necessarily superior to innovation, quality and craftsmanship!
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/switz06"
        explicitPrevious
        overviewHref="/switzoverview"
        nextHref="/switzoverview"
      />
    </>
  );
}
