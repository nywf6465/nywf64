import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Brochure — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest pavilion promotional brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons — Brochure.
 * Body from legacy simmon07.html (promotional brochure pages + copy).
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Simmons">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/simmonoverview/hero-banner.jpg"
            alt="Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SimmonNavChrome />

      <article className={styles.article} aria-labelledby="simmon07-title">
        <header className={styles.titleBar}>
          <h1 id="simmon07-title" className={styles.titleBarMain}>
            Brochure
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 236 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon07/simmons11.jpg"
                  alt="Simmons brochure cover"
                  width={236}
                  height={500}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 232 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon07/simmons12.jpg"
                  alt="Simmons brochure page"
                  width={232}
                  height={499}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <p className={styles.source}>
            SOURCE: Simmons Pavilion promotional brochure
          </p>

          <div className={styles.body}>
            <p>
              Heigh-ho, come to the Fair and step across the threshold into the
              magic &quot;Land of Enchantment&quot; at the beautiful Simmons
              Beautyrest building. There you&apos;ll be welcomed by the cheery
              Sandman and the charming Beauty Queen as well as the voice of Mr.
              Simmons - yes, Mr. Grant Simmons, Jr., himself! Together you&apos;ll
              stroll through this delightful Wonderland of Sleep where saucy
              little Pixies and Elves frolic among the glittering Golden Oak and
              shimmering Sterling Silver trees. You&apos;ll watch and wonder at
              the Weeping Willow trees that cry Crystal tears . . . the
              &quot;Rock-a-Bye&quot; babies asleep in treetops and nestled in
              water lillies.
            </p>
            <p>
              Then on to the MUZzzzeum to see the many imaginative ways famous
              ladies and gentlemen of history tried desperately, if
              unsuccessfully, to get a good night&apos;s sleep.
            </p>
            <p>
              We don&apos;t want to give the whole show away, but there are
              dozens of other wonderful things to see in Simmons realm of
              enchantment. We&apos;ll keep them under wraps until you get here.
            </p>
            <p>
              The special Simmons treat? It&apos;s the blissful answer to
              World&apos;s Fair feet and fatigue. When you&apos;re tired, just
              step into our Magic Elevator and you&apos;ll be whisked upstairs
              where a Beautyrest Lady will show you to your private rest alcove.
              There you can take your ease on Simmons newest sleeping aid, the
              Adjustable Beautyrest Bed, that lets you elevate and rest weary
              legs and feet or raise your head and shoulders by just pushing a
              button! When you&apos;ve relaxed completely (you&apos;re almost
              certain to fall asleep) in the sublime comfort of the
              automatically adjustable bed you&apos;ll feel wonderfully
              refreshed . . . completely revived and invigorated . . . ready to
              go again!
            </p>
            <p>
              Admission to the building is <em>free</em>. Use of the rest
              alcove for one-half hour is only $1.00.
            </p>
            <p>
              And there&apos;s so much to see at the Fair! Don&apos;t miss our
              other exhibit in the Pavilion of American Interiors. . .
            </p>
            <p>
              <em>
                . . . and come again to Simmons &quot;Land of Enchantment,&quot;
                soon!
              </em>
            </p>
          </div>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 500 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon07/simmons13.jpg"
                  alt="Simmons brochure interior spread"
                  width={500}
                  height={298}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 200 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon07/simmons14.jpg"
                  alt="Simmons brochure detail"
                  width={200}
                  height={120}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon06"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmon08"
      />
    </>
  );
}
