import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencig09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Magician Mark Wilson — General Cigar — nywf64.com",
  description:
    "Biography of magician Mark Wilson, creator of the General Cigar Hall of Magic at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar — Magician Mark Wilson.
 * Body from legacy gencig09.html (Wikipedia-sourced biography).
 *
 * Stack: hero → GencigNavChrome → navy title → bio → Nav2Bar.
 */
export default function Gencig09Page() {
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

      <article className={styles.article} aria-labelledby="gencig09-title">
        <header className={styles.titleBar}>
          <h1 id="gencig09-title" className={styles.titleBarMain}>
            Magician Mark Wilson
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.layout}>
            <figure className={styles.portrait}>
              <Image
                src="/images/gencig09/gencig33.jpg"
                alt="Magician Mark Wilson"
                width={135}
                height={246}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.name}>Mark Wilson</figcaption>
              <p className={styles.source}>Source: Wikipedia</p>
            </figure>

            <div className={styles.body}>
              <p>
                James &quot;Mark&quot; Wilson (b. 1929) is an American magician and
                author. He aspired to be a magician after seeing Tommy Bearden
                perform. His family moved to Dallas, Texas where, as a teenager,
                he improved his magic knowledge by working for Douglas Magic Land
                as a clerk. As a student at SMU, Wilson performed shows with the
                Morton&apos;s Potato Chip Company as his sponsor.
              </p>
              <p>
                When television began to grow he arranged a local show in Dallas
                in 1955 which grew to other shows in Houston and San Antonio. When
                videotape was developed he created the first show to be videotaped
                and nationally syndicated. That show was the original black and
                white <em>Magic Land of Allakazam</em> and was sponsored by Scotch
                Brand Tape. His wife, Nani Darnell, assisted him and they were
                joined by Bev Bergeron who helped write the shows and played the
                character, Rebo the Clown. The Kellogg Company bought the series
                and moved it to CBS Television in 1960. The show moved from CBS to
                ABC in 1962. In 1965, the series left ABC and was internationally
                syndicated.
              </p>
              <p>
                Mark Wilson created the Hall of Magic for the General Cigar
                Company at the 1964-1965 New York World&apos;s Fair. He later
                created <em>The Funny Face Magic Show</em> and the Pillsbury
                sponsored <em>Magic Circus</em> in 1971. He and his crew assisted
                in the technical production of the magic in many network shows
                including <em>The Magician</em>, <em>Circus of the Stars</em>,{" "}
                <em>Hollywood Palace</em>, <em>The Roy Rogers Show</em>,{" "}
                <em>The Six Million Dollar Man</em>, <em>The Incredible Hulk</em>,{" "}
                <em>Columbo</em> and more. His last regular TV production was{" "}
                <em>The Magic Of Mark Wilson</em>. The series was seen in national
                syndication in 1981. Wilson was aided on this final series by
                second son Greg as well as by longtime assistant Nani Darnell.
              </p>
              <p>
                In 1971, he published his{" "}
                <em>Mark Wilson&apos;s Complete Course In Magic</em> which is still
                in print in various forms around the world.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gencig08"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencigoverview"
      />
    </>
  );
}
