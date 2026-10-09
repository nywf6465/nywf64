import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopap06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Press Release & Floor Plan — Scott Paper — nywf64.com",
  description:
    "Scott Paper at the New York World’s Fair — press release and exhibit floor plan on nywf64.com.",
};

/**
 * Scott Paper — Press Release & Floor Plan.
 * Body from legacy scopap06.html.
 */
export default function Scopap06Page() {
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

      <article className={styles.article} aria-labelledby="scopap06-title">
        <header className={styles.titleBar}>
          <h1 id="scopap06-title" className={styles.titleBarMain}>
            Press Release &amp; Floor Plan
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.letterhead}>
            <Image
              src="/images/scopap06/scott21.jpg"
              alt="Letterhead"
              width={495}
              height={100}
              unoptimized
            />
          </figure>

          <h2 className={styles.storyTitle}>
            Scott and 25 Million Consumers Will Be at New York World&apos;s Fair
          </h2>

          <div className={styles.twoCol}>
            <div>
              <p>
                Scott Paper Company is going to the Fair - The New York
                World&apos;s Fair opening in Flushing Meadows, N.Y., April 22,
                1964. At its exhibit on the Pool of Industry, the Company will
                offer visitors a quiet, park like spot to pause and rest, and to
                learn the story of paper from tree to tissue. Comfortable rest
                room facilities will be located in a separate building.
              </p>
              <p>
                The Fair is scheduled to run for six months each in 1964 and
                1965. An estimated 25 million visitors -- many of them on several
                occasions -- will pass through the gates to visit the fantastic
                structures of concrete, glass, wood and metal assembled on the
                646-acre Fairgrounds.
              </p>
              <p>
                Scott&apos;s exhibit will join those of such companies as Bell
                Telephone, IBM and General Electric around the Pool, which is
                the dress circle of the industrial section. A 50-foot tower of
                golden cables and wood, suggesting trees, growth and progress,
                will draw the attention of visitors to the exhibit.
              </p>
              <p>
                Entering the main building, visitors will be transported into
                &quot;The Enchanted Forest&quot;. The story begins with the
                mystery of trees, the bountiful woodlands which provide the raw
              </p>
            </div>
            <div>
              <p>
                material for supplying the never-ending need for paper and paper
                products.
              </p>
              <p>
                Along the pathway, the tale of discovery, invention and
                creation will be told through pictures, words and products. A
                second mystery constantly being unlocked by Scott -- the sizes,
                shapes, colors and kinds of convenience products desired by our
                Goddess of the Marketplace, the American housewife -- also will
                be explored.
              </p>
              <p>
                In addition to products for the home, the exhibit will embrace
                industrial paper products, printing and converting papers, and
                items of plastic foam. Research, the vital function which has
                developed those products and is busy building more, will be
                treated as well.
              </p>
              <p>
                Beyond the obvious business objectives, Scott sees the Fair, with
                its theme of Peace Through Understanding, as an excellent
                opportunity for it and other leading business concerns in the
                United States to illustrate the nation&apos;s system of free
                enterprise. Within its exhibit, the Company believes it will
                provide tangible evidence of the merits and achievements of that
                system.
              </p>
            </div>
          </div>

          <hr className={styles.rule} aria-hidden="true" />

          <section className={styles.floorPlanBlock} aria-label="Exhibit floor plan">
            <h2 className={styles.floorPlanTitle}>Exhibit Floor Plan</h2>
            <figure className={styles.floorPlanFigure}>
              <Image
                src="/images/scopap06/scott03.jpg"
                alt="Floor Plan"
                width={280}
                height={290}
                unoptimized
              />
            </figure>
            <p className={styles.floorPlanCaption}>
              Welcome to The Enchanted Forest <strong>(1)</strong> where the
              story begins with solving the mysteries of trees.{" "}
              <strong>(2)</strong> explains how our water is safeguarded{" "}
              <strong>(3)</strong> and shows how trees become tissue{" "}
              <strong>(4)</strong> to ease the myriad tasks of the housewife{" "}
              <strong>(5)</strong> with a host of delightful convenience products{" "}
              <strong>(6)</strong> as well as to meet the growing requirements of
              people away from home and of industry <strong>(7)</strong>. We also
              are expanding the world of plastic foam <strong>(8)</strong> and of
              printing and converting papers <strong>(9)</strong> while seeking
              wider horizons through research <strong>(10)</strong> to insure that
              the housewife, the Goddess of the Marketplace, never lacks for more
              useful products made better by Scott <strong>(11)</strong>.
            </p>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/scopap05"
        explicitPrevious
        overviewHref="/scopapoverview"
        nextHref="/scopap07"
      />
    </>
  );
}
