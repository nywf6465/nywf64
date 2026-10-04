import type { Metadata } from "next";
import Image from "next/image";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { BetlivScriptBody, type ScriptPhoto } from "@/components/BetlivScriptBody";
import { Nav2Bar } from "@/components/Nav2Bar";
import { ALL_ABOUT_ELSIE_SCRIPT } from "./script";
import styles from "@/styles/betlivTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: 'Borden\'s "All About Elsie" — Better Living Center — nywf64.com',
  description:
    'Borden\'s "All About Elsie" musical revue at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.',
};

const SCRIPT_PHOTOS: Record<string, ScriptPhoto> = {
  "Image/betliv/betliv58.jpg": {
    src: "/images/betliv13/borden-logo.jpg",
    width: 150,
    height: 148,
    alt: "Borden's logo",
    plain: true,
  },
  "Image/betliv/betliv93.jpg": {
    src: "/images/betliv13/beauty-pageant.jpg",
    width: 500,
    height: 330,
    alt: "Beauty Pageant",
    caption: "Elsie Judges a Beauty Pageant",
    source: "kellberg",
  },
  "Image/betliv/betliv92.jpg": {
    src: "/images/betliv13/comstock-wyler.jpg",
    width: 500,
    height: 340,
    alt: "Comstock and Wyler",
    caption: "Comstock and Wyler's",
    source: "kellberg",
  },
  "Image/betliv/betliv91.jpg": {
    src: "/images/betliv13/aunt-jane-drakes.jpg",
    width: 500,
    height: 339,
    alt: "Aunt Jane and Drakes",
    caption: "Aunt Jane and Drakes",
    source: "kellberg",
  },
  "Image/betliv/betliv96.jpg": {
    src: "/images/betliv13/ice-cream-1.jpg",
    width: 268,
    height: 400,
    alt: "Ice Cream Kid",
    caption: "Ice Cream Kids at Elsie's Party",
    source: "kellberg",
  },
  "Image/betliv/betliv94.jpg": {
    src: "/images/betliv13/ice-cream-2.jpg",
    width: 268,
    height: 400,
    alt: "Ice Cream Kid",
    source: "kellberg",
  },
  "Image/betliv/betliv95.jpg": {
    src: "/images/betliv13/ice-cream-3.jpg",
    width: 271,
    height: 400,
    alt: "Ice Cream Kid",
    source: "kellberg",
  },
};

/**
 * Better Living Center — Borden's "All About Elsie".
 * Body from legacy betliv13.html (essay + production script).
 * Legacy wording (Kanagaroo, Tom Whedon,writer) is preserved.
 *
 * Stack: hero → BetlivNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Betliv13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv13-title">
        <header className={styles.titleBar}>
          <h1 id="betliv13-title" className={styles.titleBarMain}>
            Borden&apos;s &quot;All About Elsie&quot;
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.adFigure}>
            <Image
              src="/images/betliv13/all-about-elsie-ad.jpg"
              alt="Borden's All About Elsie advertisement"
              width={600}
              height={1000}
              className={styles.adImg}
              priority
              unoptimized
            />
          </figure>
          <p className={styles.source}>
            SOURCE: Advertisement{" "}
            <em>
              1964 &amp; 1965 Official Guide, 1964-1965 New York World&apos;s
              Fair
            </em>
          </p>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv13/elsie-peep.jpg"
              alt="Elsie in Peep!"
              width={500}
              height={336}
              className={styles.photoImg}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Elsie the Cow stars in her own Musical Production &quot;All About
              Elsie&quot;
            </figcaption>
            <p className={styles.captionNote}>
              And now the lights brighten to reveal Elsie&apos;s head framed in
              a magazine cover (Peep). She is surrounded by a montage of other
              magazine covers all of which have Elsie on their covers and one of
              which (Romance) features both Elsie and Elmer. Suggested magazines
              include Life, Look, Fortune, Time or Newsweek, Vogue or Harper&apos;s
              Bazaar, Sports Illustrated, Photoplay or Silver Screen and Romance.
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              One of the more prominent exhibits in the Better Living Center
              could be found on the third floor courtesy of the Borden Company.
              In 1939 Borden had used the New York World&apos;s Fair as the
              place to showcase their new company mascot, Elsie the Cow, for the
              first time. Thus the 1964 Fair would be an opportunity to mark the
              25th anniversary for Elsie as well as the original Fair!
            </p>
            <p>
              Unlike 1939 when Borden had their own exhibit building, 1964 would
              see Borden taking up a considerable amount of space on the Better
              Living Center&apos;s third floor. And at the center of their
              exhibit would be Elsie herself (the latest in a long line of
              Elsies the company had used since 1939) kept stationary while an
              extravagant musical revue show took place around her.
            </p>
            <p>
              The program, &quot;All About Elsie,&quot; was as ambitious as any
              of the Fair&apos;s musical-oriented stage shows. Composer Kay
              Swift (one-time mistress of George Gershwin) who had written music
              for the Century 21 Seattle World&apos;s Fair (and also been
              &quot;Director Of Light Music&quot; for the 1939 Fair) was
              commissioned to write a tribute to Borden&apos;s corporate symbol
              in song, while Yale University&apos;s playwright in residence,
              Joel Oliansky, would furnish the script. As Elsie remained
              stationary, animated puppets and set pieces would move about her
              with prerecorded voices and singers advancing the &quot;action&quot;
              of the story which ultimately was little more than a giant and
              shameless plug for Borden&apos;s products delivered with none of
              the subtlety in corporate message that one might have seen in
              GE&apos;s &quot;Carousel Of Progress&quot; show. The program lasted
              15 minutes and visitors could also see five different
              &quot;sideshows&quot; that served as quick one minute sketches
              using the same techniques. Like the main show the sideshows, for
              all their innovative gimmicks and attempts at humor, were
              extended commercial messages first and foremost.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv13/elsie-show.jpg"
              alt='Elsie in "All About Elsie"'
              width={500}
              height={342}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.captionNote}>
              Four identical Admirals enter resplendent in cocked hats, plumes,
              epaulettes, aiguilettes, blue and gold full dress uniforms,
              decorations, dress swords, etc. Their platforms are small toy-like
              battle-ships and each carries in his own down-stage hand a three
              dimensional carton of a Borden milk product decorated with red,
              white and blue streamers. They are squabbling. FORTIFIED SKIM !
              BUTTERMILK ! EGGNOG ! HOMOGENIZED !
            </p>
            <p className={styles.source}>
              SOURCE: Photos presented courtesy Bill Cotter collection © 2010
              Bill Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
              <u>fabulous</u> collection of World&apos;s Fair photographs at his
              website{" "}
              <a
                href="http://www.worldsfairphotos.com/"
                target="_blank"
                rel="noreferrer"
              >
                WorldsFairPhotos.com
              </a>
              .
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              Some familiar voices could be heard in the &quot;All About
              Elsie&quot; voice cast including Charlotte Rae, future star of the
              television show <em>The Facts Of Life</em> and, as the
              deliberately pompous sounding narrator, Jackson Beck who had been
              the announcer on <em>The Adventures Of Superman</em> radio program
              in the 1940s and been the first to utter the words &quot;Faster
              than a speeding bullet...&quot;
            </p>
            <p>
              For 1965, there were some minor modifications made to the program
              with Tom Whedon,writer for the &quot;Captain Kanagaroo&quot; TV
              program, contributing some new material. While the original vocal
              cast was retained press stories indicated that &quot;one
              additional male voice, that of a &quot;well-known comic,&quot;
              would also be added to the program but there is no surviving
              record to indicate if this change ever took place or who the comic
              was.
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={styles.scriptHead}>
            <div>
              <p className={styles.scriptTitle}>
                &quot;ALL ABOUT ELSIE&quot;
              </p>
              <p className={styles.scriptSub}>BETTER LIVING CENTER</p>
              <p className={styles.scriptFair}>
                1964-1965 New York World&apos;s Fair
              </p>
              <span className={styles.scriptBadge}>T H E&nbsp;&nbsp;S C R I P T</span>
            </div>
            <Image
              src="/images/betliv13/borden-logo.jpg"
              alt="Borden's logo"
              width={150}
              height={148}
              className={`${styles.logo} ${styles.photoPlain}`}
              unoptimized
            />
          </div>

          <BetlivScriptBody
            text={ALL_ABOUT_ELSIE_SCRIPT.replace(
              /^[\s\S]*?\[\[IMG:Image\/betliv\/betliv58\.jpg\]\]\s*/,
              "",
            )}
            photos={SCRIPT_PHOTOS}
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv12"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv14"
      />
    </>
  );
}
