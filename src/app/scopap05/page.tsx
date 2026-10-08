import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopap05.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pavilion & Exhibit Concept — Scott Paper — nywf64.com",
  description:
    "Scott Paper Company pavilion and exhibit concept press release — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper — Pavilion & Exhibit Concept (press release).
 * Body from legacy scopap05.html.
 * Stack: hero → ScopapNavChrome → navy title → article → Nav2Bar.
 */
export default function Scopap05Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Scott Paper">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/scopapoverview/hero-banner.jpg"
            alt="Scott Paper at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ScopapNavChrome />

      <article className={styles.article} aria-labelledby="scopap05-title">
        <header className={styles.titleBar}>
          <h1 id="scopap05-title" className={styles.titleBarMain}>
            Pavilion &amp; Exhibit Concept
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.letterhead}>
            <Image
              src="/images/scopap05/scott21.jpg"
              alt="Letterhead"
              width={495}
              height={100}
              unoptimized
            />
          </figure>

          <h2 className={styles.releaseHeading}>For Immediate Release:</h2>

          <div className={styles.body}>
            <p>
              FLUSHING MEADOW N.Y. -- The American housewife -- the Golden
              Goddess of the Market Place -- will find herself in the spotlight
              at a major exhibit in the New York World&apos;s Fair opening next
              April 22.
            </p>
            <p>
              Scott Paper Company, producer of a wide range of products for
              household and industrial use, says that its exhibit, &quot;The
              Scott Enchanted Forest,&quot; has been designed primarily to pay
              tribute to the housewife-shoppers &quot;whose confidence in the
              quality and value of the company&apos;s products is a treasured
              asset.&quot;
            </p>
            <p>
              The exhibit buildings will be located on a 25,000-square-foot
              site, landscaped and wooded lot to provide visitors with a
              tranquil respite from the busier sites and sounds of the Fair.
              Evergreen and deciduous trees, a flowing stream and attractive
              covered benches for those who wish to pause and rest will surround
              buildings patterned after the California &quot;mountain lodge&quot;
              style.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/scopap05/scott22.jpg"
                alt="Artist's Rendering"
                width={460}
                height={317}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                Artist&apos;s conception of the Scott Paper Company Pavilion
              </figcaption>
            </figure>

            <p>
              A 50-foot tower of two intersecting cones formed by gold cables
              and supported by thick, stained wooden beams will symbolize the
              growth and progress of Scott, of paper, and of the free enterprise
              system.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/scopap05/scott23.jpg"
                alt="Tower Model"
                width={376}
                height={460}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                Model of Scott Tower showing intricate cable design
              </figcaption>
            </figure>

            <p>
              Stepping through the doors of the exhibit building itself,
              visitors will enter another forest, one enchanting in its design
              and enticing in its welcome. For here, in the woodlands, is the
              beginning for the tissues and towels and other useful household
              products of that mysterious and wonderful material, paper.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/scopap05/scott24.jpg"
                alt="The Enchanted Forest entrance"
                width={460}
                height={363}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                Entrance to The Enchanted Forest, theme of the Scott Paper
                Pavilion
              </figcaption>
            </figure>

            <figure className={styles.figure}>
              <Image
                src="/images/scopap05/scott25.jpg"
                alt="Paper Products on display"
                width={460}
                height={348}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                Pavilion will highlight displays of Scott Paper products and
                paper making
              </figcaption>
            </figure>

            <p>
              The tour through the building, scheduled to require 15 minutes or
              so, will offer a fascinating insight into the complex art of paper
              making under rigid standards of quality. A number of exhibit and
              display techniques will be used to portray the steps from tree to
              finished product. Everyone from school-aged youngsters to their
              grandparents should find this an interesting and enlightening
              experience.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/scopap05/scott26.jpg"
                alt="The Goddess of the Marketplace"
                width={460}
                height={368}
                unoptimized
              />
              <figcaption className={styles.photoCaption}>
                A Salute to the &quot;Golden Goddess of the Market Place&quot;
                -- the American housewife
              </figcaption>
            </figure>

            <p>
              In addition, the exhibit will feature displays illustrating the
              wide range of products utilizing Scott&apos;s polyurethane foam,
              as well as such areas as research, industrial paper products and
              printing and converting papers.
            </p>
            <p>
              A second pavilion on the site will house modern, comfortable rest
              room facilities.
            </p>

            <p className={styles.source}>
              SOURCE: undated Scott Paper Company press release.
            </p>
          </div>

          <hr className={styles.rule} aria-hidden="true" />

          <figure className={styles.adFigure}>
            <Image
              src="/images/scopap05/scott02.jpg"
              alt="Scott Advertisement"
              width={294}
              height={388}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/scopap04"
        explicitPrevious
        overviewHref="/scopapoverview"
        nextHref="/scopap06"
      />
    </>
  );
}
