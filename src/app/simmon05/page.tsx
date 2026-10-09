import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Invitation to Visit — Simmons — nywf64.com",
  description:
    "Simmons Beautyrest Special Invitation brochure — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons — Invitation to Visit.
 * Body from legacy simmon05.html (Special Invitation brochure).
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon05Page() {
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

      <article className={styles.article} aria-labelledby="simmon05-title">
        <header className={styles.titleBar}>
          <h1 id="simmon05-title" className={styles.titleBarMain}>
            Invitation to Visit
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.source}>
            Source: Simmons <em>Special Invitation</em> brochure
          </p>

          <figure className={styles.figure} style={{ maxWidth: 491 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon05/simmons07.jpg"
                alt="Simmons Special Invitation cover"
                width={491}
                height={443}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.body}>
            <p>
              Heigh-ho come to the Fair! And when you do, come to Simmons
              Beautyrest &quot;Land of Enchantment.&quot; A warm welcome awaits
              you.
            </p>
            <p>
              With the Sandman as your guide, you and your whole family will
              thoroughly enjoy an exciting tour of Simmons never-never animated
              &quot;Land of Enchantment&quot; created by famed Silvestri.
            </p>
            <p>
              You&apos;ll meet the Beauty Queen, sleep pixies, saucy little
              elves, and even &quot;Mr. Simmons.&quot; You&apos;ll see the
              muZZZeum where the sleeping problems of famed historical persons
              are delightfully depicted. See Weeping Willow trees cry crystal
              tears. You&apos;ll visit a secret laboratory where sleep
              scientists are developing newer, quicker ways to Slumberland.
              It&apos;ll be a fascinating, fun-filled tour you&apos;ll never
              forget.
            </p>
            <p>
              And for the very first time at any fair, Simmons gives foot weary
              and worn out visitors a chance to lie down to rest and relax. For
              a small fee, our Magic Elevator will whisk you upstairs to your
              own softly-lit sleep alcove where you can rest - even sleep - on a
              new Beautyrest Adjustable Bed - the Bed of Tomorrow. At a touch of
              a finger, it&apos;ll adjust electrically to any position to soothe
              your tired muscles and nerves. You&apos;ll be able to continue
              your tour of the Fair refreshed from your Beautyrest.
            </p>
            <p>
              <em>So come to the Fair, and when you do, visit Simmons.</em>
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon05/simmons02.jpg"
                alt="Simmons invitation banner"
                width={500}
                height={59}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 397 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon05/simmons03.jpg"
                  alt="Panoramic view from circular stairway"
                  width={397}
                  height={276}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                Enjoy a thrilling panoramic view of the greatest World&apos;s
                Fair in history from high outside the circular stairway of the
                Simmons building.
              </figcaption>
            </figure>
          </div>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 173 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon05/simmons04.jpg"
                  alt="Magic World of Slumber"
                  width={173}
                  height={121}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 173 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon05/simmons05.jpg"
                  alt="Animated characters"
                  width={173}
                  height={125}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 174 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon05/simmons06.jpg"
                  alt="Beautyrest Adjustable Bed"
                  width={174}
                  height={121}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>
          <p className={styles.caption}>
            Take a delightful tour of the Magic World of Slumber. Thrill to the
            magic motion of the lovable animated characters created by
            Sylvestri. Rest and relax - even snooze - on the new Beautyrest
            Adjustable Bed - the Bed of Tomorrow.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon04"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmon06"
      />
    </>
  );
}
