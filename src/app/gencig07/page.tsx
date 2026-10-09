import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencig07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure: The Hall of Magic — General Cigar — nywf64.com",
  description:
    "General Cigar Pavilion promotional brochure for The Hall of Magic — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar — Brochure: The Hall of Magic.
 * Body from legacy gencig07.html (custom reconstructed brochure; not PDF).
 *
 * Stack: hero → GencigNavChrome → navy title → brochure panels → Nav2Bar.
 */
export default function Gencig07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Cigar">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <article className={styles.article} aria-labelledby="gencig07-title">
        <header className={styles.titleBar}>
          <h1 id="gencig07-title" className={styles.titleBarMain}>
            Brochure: The Hall of Magic
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/gencig07/gencig10.jpg"
            alt="General Cigar Hall of Magic brochure cover"
            width={600}
            height={513}
            className={styles.panel}
            unoptimized
          />

          <p className={styles.lead}>
            FUN FOR CHILDREN- FUN FOR ADULTS- ADMISSION FREE!
          </p>

          <div className={styles.copy}>
            <p>
              Before your very eyes a pretty girl floats in the air . . . another
              is cut in half . . . a pair of detached hands perform amazing acts .
              . . and you gasp in disbelief and say &quot;How does he do it?&quot;
            </p>
            <p>
              That&apos;s the fun of magic. That&apos;s why magic never loses its
              entertainment appeal for youngsters and adults alike. And that&apos;s
              why we commissioned Mark Wilson, America&apos;s foremost magician, to
              create a whole new kind of magic for the General Cigar Exhibit. We
              hope you and your family enjoy it!
            </p>
            <p>
              Tell your friends about our show . . . and come back again yourself!
            </p>
          </div>

          <Image
            src="/images/gencig07/gencig11.jpg"
            alt="Use this map to find your way to the General Cigar Hall of Magic"
            width={318}
            height={196}
            className={styles.panelNarrow}
            unoptimized
          />

          <div className={styles.pair}>
            <Image
              src="/images/gencig07/gencig12.jpg"
              alt="Hall of Magic brochure panel"
              width={240}
              height={683}
              unoptimized
            />
            <Image
              src="/images/gencig07/gencig14.jpg"
              alt="Hall of Magic brochure panel"
              width={240}
              height={713}
              unoptimized
            />
          </div>

          <Image
            src="/images/gencig07/gencig13.jpg"
            alt="Thrill to the marvelous mystifying machine"
            width={600}
            height={714}
            className={styles.panel}
            unoptimized
          />

          <Image
            src="/images/gencig07/gencig15.jpg"
            alt="Hall of Magic brochure strip"
            width={240}
            height={58}
            className={styles.panelNarrow}
            unoptimized
          />

          <Image
            src="/images/gencig07/gencig16.jpg"
            alt="Hands that perform astounding acts"
            width={300}
            height={199}
            className={styles.panelNarrow}
            unoptimized
          />

          <Image
            src="/images/gencig07/gencig17.jpg"
            alt="Hall of Magic brochure panel"
            width={600}
            height={690}
            className={styles.panel}
            unoptimized
          />

          <div className={styles.pair}>
            <Image
              src="/images/gencig07/gencig18.jpg"
              alt="Hall of Magic brochure panel"
              width={300}
              height={363}
              unoptimized
            />
            <Image
              src="/images/gencig07/gencig19.jpg"
              alt="Hall of Magic brochure panel"
              width={305}
              height={363}
              unoptimized
            />
          </div>

          <div className={styles.pair}>
            <Image
              src="/images/gencig07/gencig20.jpg"
              alt="Hall of Magic brochure panel"
              width={400}
              height={583}
              unoptimized
            />
            <Image
              src="/images/gencig07/gencig21.jpg"
              alt="Hall of Magic brochure panel"
              width={200}
              height={583}
              unoptimized
            />
          </div>

          <div className={styles.copy}>
            <p>All the best brands in the land...</p>
            <p>
              AT THE WORLD&apos;S FAIR... General Cigar PRESENTS A FABULOUS
              FUN-FILLED EXTRAVAGANZA
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: General Cigar Pavilion Promotional Brochure
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gencig06"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencig08"
      />
    </>
  );
}
