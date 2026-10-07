import type { Metadata } from "next";
import Image from "next/image";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hawaii06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Article: A Pineapple Show — Hawaii — nywf64.com",
  description:
    "Business Screen Magazine report on the Hawaii pavilion pineapple show and travel films — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii — Article: A Pineapple Show.
 * Body from legacy hawaii06.html (custom magazine reprint — no shared
 * brochure/manual/photographs standard).
 *
 * Stack: hero → HawaiiNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * Last Hawaii topic: NEXT returns to /hawaiioverview.
 */
export default function Hawaii06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Hawaii">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hawaiioverview/hero-banner.jpg"
            alt="Hawaii at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HawaiiNavChrome />

      <article className={styles.article} aria-labelledby="hawaii06-title">
        <header className={styles.titleBar}>
          <h1 id="hawaii06-title" className={styles.titleBarMain}>
            Article: A Pineapple Show
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.sourceTop}>
            Source: BUSINESS SCREEN MAGAZINE Presented courtesy Eric Paddon
            Collection
          </p>

          <h2 className={styles.spreadTitle}>
            a Pineapple Show and Travel Films on Hawaii
          </h2>

          <div className={styles.spread}>
            <figure className={styles.figure}>
              <figcaption className={styles.caption}>
                Below: <em>travel pictures about Hawaii are shown within . . .</em>
              </figcaption>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/hawaii06/hawaii03.jpg"
                  alt="Theater Entrance"
                  width={150}
                  height={151}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>

            <figure className={styles.figureWide}>
              <figcaption className={styles.caption}>
                Below:{" "}
                <em>
                  projected images tell the story of pineapple from Hawaii as
                  sound emerges through the little listening &quot;cups&quot;
                  along the railing.
                </em>
              </figcaption>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/hawaii06/hawaii04.jpg"
                  alt="Pineapple Show"
                  width={450}
                  height={333}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <div className={styles.body}>
            <p>
              <span className={styles.dropCap}>I</span>T COSTS a quarter to see
              and hear a two-minute sound/slide show, The Story of Pineapple in
              Hawaii, which is one of the two audio-visual attractions in the
              Hawaiian Pavilion at the Fair.
            </p>
            <p>
              But you can enjoy some lush color and sound travel films of the
              area free of charge in a nearby &quot;stand-up&quot; theater.
            </p>
            <p>
              Even if you&apos;re not &quot;pineapple minded&quot; that show has
              a cute trick in its use of listening cups along the railing (
              <em>see illustration</em> [above] <em>for details</em>).
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hawaii05"
        explicitPrevious
        overviewHref="/hawaiioverview"
        nextHref="/hawaiioverview"
      />
    </>
  );
}
