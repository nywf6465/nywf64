import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopap09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Scott Enterprise Magazine — Scott Paper — nywf64.com",
  description:
    "Scott Enterprise Magazine, Summer 1964 — Scott Paper at the New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper — Scott Enterprise Magazine feature.
 * Body from legacy scopap09.html.
 */
export default function Scopap09Page() {
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

      <article className={styles.article} aria-labelledby="scopap09-title">
        <header className={styles.titleBar}>
          <h1 id="scopap09-title" className={styles.titleBarMain}>
            Scott <em>Enterprise</em> Magazine
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            In 1964, the summer issue of Scott&apos;s quarterly magazine featured
            its new pavilion.
          </p>

          <figure className={styles.coverFigure}>
            <Image
              src="/images/scopap09/scott15.jpg"
              alt="Cover with Scott Tower"
              width={371}
              height={500}
              unoptimized
            />
          </figure>
          <p className={styles.photoCaption}>
            Evening fireworks display as seen from the Scott pavilion.
          </p>
          <p className={styles.source}>
            SOURCE: <em>Scott Enterprise Magazine</em>, Summer 1964
          </p>

          <div className={styles.spreadBox}>
            <div className={styles.spreadText}>
              <Image
                src="/images/scopap09/scott17.jpg"
                alt=""
                width={304}
                height={36}
                unoptimized
              />
              <p>
                An estimated 1,500,000 visitors have been welcomed to Scott&apos;s
                Enchanted Forest pavilion since the New York World&apos;s Fair
                opened April 22. Each day, more than 20,000 people step into the
                quiet, forest-like exhibit to learn about the Company and the
                quality it builds into products under the guidance of the
                nation&apos;s housewife-shoppers. Many also visit the lounges, of
                course, and thousands of mothers have been delighted with the
                facility provided especially for diaper changing. As the
                Fair&apos;s major supplier of paper products, Scott sells cups,
                napkins, toilet tissue and towels to 85 percent of all exhibitors
                and concessionaires. This is Scott Enterprise at the Fair.
              </p>
            </div>
            <div className={styles.spreadPhoto}>
              <Image
                src="/images/scopap09/scott16.jpg"
                alt="Goddess of the Marketplace"
                width={178}
                height={177}
                unoptimized
              />
            </div>
          </div>

          <section className={styles.articleBox} aria-labelledby="scopap09-care">
            <h2 id="scopap09-care" className={styles.boxTitle}>
              Scott Takes Care of the Little Things at the Fair
            </h2>
            <p>
              Nearly all of the estimated 25 million people who will visit the New
              York World&apos;s Fair will receive Scott Paper Company&apos;s
              message of &quot;Quality and Value&quot; loud and clear. Scott has
              taken advantage of the opportunity not only to tell its corporate
              story through &quot;The Enchanted Forest&quot;, but also to become
              the major paper products supplier to other exhibitors with restroom
              or eating facilities.
            </p>
            <p>
              Scott&apos;s Fair customers represent many of the world&apos;s
              largest and most progressive corporations - industrial leaders such
              as AT&amp;T, Chrysler, G.E., Ford, G.M., Johnson&apos;s Wax and
              I.B.M. are a few examples. Their choice of Scott products indicates
              that those companies who lead in scientific and industrial progress
              recognize the leadership of Scott in offering the highest possible
              quality and value in sanitary paper products.
            </p>
            <p>
              Throughout the Fair&apos;s 326 restrooms - including those 50 that are
              in public buildings sponsored by the New York World&apos;s Fair
              Corporation - visitors will find Scott Folded Towels, Scot-Tissue,
              Scotties and Confidets. Brass Rail restaurants use specially
              decorated Scott Cups and Scotties. This distribution of products is
              certain to have an important impact on the Fair&apos;s 200,000 daily
              visitors.
            </p>
            <p>
              The Scott pavilion, under the supervision of Manager Burch Hindle and
              Associate Manager Jesse Schaudies, has become popular among
              Fair-goers as a place to relax. Located on the Pool of Industry,
              shaded by nine varieties of trees and traversed by a clear, cool
              stream, the exhibit is a quiet oasis in a bustling noisy Fair.
            </p>
            <p>
              Evidence that Scott products and the Scott pavilion are having a
              positive effect on the consumer is contained in the many &quot;thank
              you&quot; letters being received. &quot;Your lounge made our day at
              the Fair truly enjoyable,&quot; a Brooklyn mother wrote. &quot;Until
              today, I had been using the products of another paper company.
              Because of your wonderful and thoughtful &apos;serving area&apos; I
              am now changing to Scott paper products.&quot;
            </p>
          </section>

          <section className={styles.articleBox} aria-labelledby="scopap09-club">
            <h2 id="scopap09-club" className={styles.boxTitle}>
              Welcome to your Club
            </h2>
            <div className={styles.clubGrid}>
              <div>
                <p>
                  A smiling hostess in a trim blue and white outfit will greet you
                  at Scott&apos;s pavilion. She will be glad to answer your
                  questions about the exhibit, and at the end of your tour she will
                  invite you to use the Scott Lounges and to relax in the cool
                  gardens outside.
                </p>
                <p>
                  Considered by many the most luxurious such facilities at the
                  Fair, the lounges include clean, attractive restrooms for men,
                  women, and children. A feature of the rest area is a baby diaper
                  changing room - and more than 10,000 babies have already used
                  it.
                </p>
                <p>
                  The warm public reaction to the pavilion was expressed by a
                  grandmother who visited the Fair with her family: &apos;It was a
                  Godsend! My daughter was able to wash and change the children
                  completely. It is grand to find things so spotlessly clean.&quot;
                </p>
              </div>
              <figure className={styles.clubPhoto}>
                <Image
                  src="/images/scopap09/scott18.jpg"
                  alt="Comfortable Lounges"
                  width={253}
                  height={412}
                  unoptimized
                />
              </figure>
            </div>
            <div className={styles.loungeRow}>
              <Image
                src="/images/scopap09/scott19.jpg"
                alt="Modern Restrooms"
                width={209}
                height={121}
                unoptimized
              />
              <p>
                The clean, modern Scott washrooms are designed to serve efficiently
                a maximum number of people, both young and old, in a minimum of
                time.
              </p>
            </div>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/scopap08"
        explicitPrevious
        overviewHref="/scopapoverview"
        nextHref="/scopap10"
      />
    </>
  );
}
