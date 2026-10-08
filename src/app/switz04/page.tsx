import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SwitzNavChrome } from "@/components/SwitzNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/switzFeature.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Pavilion of Time — Switzerland — nywf64.com",
  description:
    "The Pavilion of Time at the Switzerland Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Switzerland — The Pavilion of Time.
 * Body from legacy switz04.html (custom feature / advertising brochure reprint).
 */
export default function Switz04Page() {
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

      <article className={styles.article} aria-labelledby="switz04-title">
        <header className={styles.titleBar}>
          <h1 id="switz04-title" className={styles.titleBarMain}>
            The Pavilion of Time
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionTitle}>
            <Image
              src="/images/switz04/swissbw11.jpg"
              alt=""
              width={37}
              height={65}
              className={styles.logo}
              unoptimized
            />
            The Pavilion of Time
          </h2>

          <figure className={styles.figure}>
            <Image
              src="/images/switz04/swissbw1.jpg"
              alt="Artist's sketch of the Swiss Pavilion"
              width={400}
              height={232}
              className={styles.photo}
              unoptimized
            />
          </figure>
          <p className={styles.copyRed}>
            Swiss firms&apos; participation in the New York World&apos;s Fair is
            the work of private enterprise. The pavilion in which the Swiss firms
            are located is situated in the central area of the Fair and built in
            Alpine chalet style.
          </p>

          <div className={styles.split}>
            <div>
              <figure className={styles.figure}>
                <Image
                  src="/images/switz04/swissbw3.jpg"
                  alt="Chalet style restaurant"
                  width={376}
                  height={220}
                  className={`${styles.photo} ${styles.bordered}`}
                  unoptimized
                />
              </figure>
              <p className={styles.copyRed}>
                In the Exhibit Hall connecting the main pavilion to the Watch
                Pavilion is the &quot;Heidi Shop&quot; displaying traditional
                Swiss artifacts: handkerchiefs in St. Gall embroidery, musical
                boxes, miniature cow-bells, etc. Visitors are also shown how Swiss
                cheese is made and can taste genuine Swiss chocolate, a real treat
                for connoisseurs the world over! Swissair and the Swiss Tourist
                Office provide information to those whom this brief glimpse of
                Switzerland and her customs has made eager for further details.
              </p>
            </div>
            <p className={styles.copyRed}>
              The main building contains a restaurant where waitresses in
              national costume serve typically Swiss dishes, among which cheese
              &quot;fondu&quot; naturally takes a prominent place.
            </p>
          </div>

          <div className={`${styles.split} ${styles.splitReverse}`}>
            <p className={styles.copyRed}>
              The Watch Pavilion is housed in three high-peaked buildings joined
              to the main pavilion. It is very popular and has aroused the
              interest of such a large section of the public that long queues are
              frequently to be seen waiting patiently to enter.
            </p>
            <div>
              <figure className={styles.figure}>
                <Image
                  src="/images/switz04/swissbw2.jpg"
                  alt="Swiss pavilion"
                  width={377}
                  height={223}
                  className={`${styles.photo} ${styles.bordered}`}
                  unoptimized
                />
              </figure>
              <p className={styles.copyRed}>
                In front of the pavilion is the official World&apos;s Fair Time
                Center housing a costly complex of Swiss-made time measurement
                instruments. The center controls the 10 tall, numbered Swiss clock
                towers scattered around the Fair grounds -- which not only keep
                people on time for appointments but have developed into favorite
                meeting places.
              </p>
            </div>
          </div>

          <div className={styles.splitHalf}>
            <div>
              <p className={styles.copyRed}>
                Fifteen-foot high frescoes depicting the history of Switzerland
                bring alive the outer walls of the pavilion. Craftsmanship, high
                style and beauty combine to tempt the visitor who pushes through
                the swing doors into the pavilion itself.
              </p>
              <p className={styles.copyRed}>
                The pavilion is on the Avenue of United Nations South, close to
                the center of the miniature Flushing Meadow world.
              </p>
            </div>
            <div>
              <figure className={styles.figure}>
                <Image
                  src="/images/switz04/swissbw4.jpg"
                  alt="National Day 1964 at the Swiss Pavilion"
                  width={240}
                  height={219}
                  className={`${styles.photo} ${styles.bordered}`}
                  unoptimized
                />
              </figure>
              <p className={styles.copyRed}>
                The Swiss engineering industry is also on show in New York. The{" "}
                <Link href="/swisky01" className={styles.link}>
                  Swiss Sky Ride
                </Link>
                , built by von Roll Ltd., actually forms part of the Fair&apos;s
                installations. Its small brightly colored comfortable cabins are
                in fact one of the main attractions of the Fair and are extremely
                popular with visitors wishing to have an overall bird&apos;s eye
                view of the central area.
              </p>
            </div>
          </div>

          <p className={styles.source}>
            Source: THE SWISS WATCH INDUSTRY AT THE NEW YORK WORLD&apos;S FAIR
          </p>
          <p className={styles.source}>
            Source: THE SWISS WATCH PAVILION, advertising brochures
          </p>

          <figure className={styles.figure}>
            <Image
              src="/images/switz04/swiss02.jpg"
              alt="Artist's Rendering"
              width={480}
              height={507}
              className={`${styles.photo} ${styles.bordered}`}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/switz03"
        explicitPrevious
        overviewHref="/switzoverview"
        nextHref="/switz05"
      />
    </>
  );
}
