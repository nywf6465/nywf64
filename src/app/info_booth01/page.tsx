import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoBoothNavChrome } from "@/components/InfoBoothNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./info_booth01.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Facts & Figures — nywf64.com",
  description:
    "Fair facts and figures — schedule, site, theme, attendance, and World's Fair promotional brochures from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fair Facts & Figures — info_booth01.
 * Body from legacy info_booth01.html.
 *
 * Stack: factshero → InfoBoothNavChrome → navy title banner → facts body →
 * Nav2Bar. Shared factshero is reused on later info_booth pages.
 */
export default function InfoBooth01Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Fair Facts & Figures">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/info_booth/factshero.jpg"
            alt="Fair Facts & Figures — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <InfoBoothNavChrome />

      <article
        className={styles.article}
        aria-labelledby="info-booth01-title"
      >
        <header className={styles.titleBar}>
          <h1 id="info-booth01-title" className={styles.titleBarMain}>
            Facts &amp; Figures
          </h1>
        </header>

        <div className={styles.body}>
          <div className={styles.tickets}>
            <Image
              src="/images/info_booth/booth01.jpg"
              alt="Adult Ticket"
              width={235}
              height={162}
              className={styles.ticket}
              unoptimized
            />
            <Image
              src="/images/info_booth/booth02.jpg"
              alt="Child Ticket"
              width={226}
              height={162}
              className={styles.ticket}
              unoptimized
            />
          </div>

          <section className={styles.section} aria-labelledby="schedule-heading">
            <h2 id="schedule-heading" className={styles.sectionTitle}>
              Schedule
            </h2>
            <hr className={styles.sectionRule} />
            <div className={styles.row}>
              <h3 className={styles.label}>The Fair Seasons</h3>
              <ul className={`${styles.value} ${styles.valueList}`}>
                <li>April 22 - October 18, 1964</li>
                <li>April 21 - October 17, 1965</li>
              </ul>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="site-heading">
            <h2 id="site-heading" className={styles.sectionTitle}>
              Site
            </h2>
            <hr className={styles.sectionRule} />
            <div className={styles.row}>
              <h3 className={styles.label}>Location</h3>
              <div className={styles.value}>
                <p className={styles.value}>
                  The fairgrounds occupied Flushing Meadow Park -- 646 acres in
                  the New York City borough of Queens on Long Island in Flushing,
                  N.Y. The site was originally constructed to host the
                  World&apos;s Fair in 1939/1940.
                </p>
                <figure className={styles.figure}>
                  <Image
                    src="/images/info_booth/map2.jpg"
                    alt="Boroughs Map"
                    width={250}
                    height={169}
                    className={`${styles.inlineImg} ${styles.framed}`}
                    unoptimized
                  />
                </figure>
              </div>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Layout of the Fair</h3>
              <div className={styles.value}>
                <figure className={styles.figure}>
                  <Image
                    src="/images/info_booth/map1.jpg"
                    alt="Fair Map"
                    width={250}
                    height={169}
                    className={`${styles.inlineImg} ${styles.framed}`}
                    unoptimized
                  />
                </figure>
                <p className={styles.value}>
                  The site was divided into five areas: Industrial Area (
                  <span className={styles.colorOrange}>orange</span>),
                  International Area (
                  <span className={styles.colorPink}>pink</span>), State &amp;
                  Federal Area (
                  <span className={styles.colorYellow}>yellow</span>),
                  Transportation Area (
                  <span className={styles.colorRed}>red</span>) and Amusement
                  Area (<span className={styles.colorBlue}>blue</span>).
                  Exhibitors were, for the most part, classed by area and
                  exhibited within that area (ie: DuPont in the Industrial Area,
                  Avis in the Transportation Area, India in the International
                  Area etc.)
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="theme-heading">
            <h2 id="theme-heading" className={styles.sectionTitle}>
              Theme
            </h2>
            <hr className={styles.sectionRule} />
            <div className={styles.row}>
              <h3 className={styles.label}>Official</h3>
              <p className={styles.value}>
                &quot;Peace through Understanding&quot;
              </p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Unofficial</h3>
              <p className={styles.value}>
                &quot;Man&apos;s Achievements on a Shrinking Globe in an Expanding
                Universe&quot;
              </p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Unofficial</h3>
              <p className={styles.value}>
                &quot;Olympics of Progress&quot;
              </p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Symbol</h3>
              <div className={styles.value}>
                <p className={styles.value}>
                  <em>&quot;Unisphere&quot;</em> A 12-story high, stainless steel
                  model of the earth with three &quot;orbital rings&quot;
                  representing satellite tracks encircling it. Presented to the
                  Fair as a permanent gift by United States Steel.
                </p>
                <figure className={styles.figure}>
                  <Image
                    src="/images/info_booth/glancebw4.jpg"
                    alt="Unisphere"
                    width={300}
                    height={365}
                    className={`${styles.inlineImg} ${styles.framed}`}
                    unoptimized
                  />
                </figure>
              </div>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Status</h3>
              <p className={styles.value}>
                <Link href="/information/unofficial" className={styles.link}>
                  An &quot;unofficial&quot; World&apos;s Fair
                </Link>{" "}
                not sanctioned by the Bureau of International Expositions.
              </p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Logos</h3>
              <div className={styles.logoRow}>
                <Image
                  src="/images/info_booth/logo64bw.gif"
                  alt="Black & White Logo"
                  width={132}
                  height={124}
                  unoptimized
                />
                <Image
                  src="/images/info_booth/logo64.jpg"
                  alt="Color Logo"
                  width={120}
                  height={147}
                  unoptimized
                />
              </div>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Unofficial Mascots</h3>
              <div className={styles.value}>
                <figure className={styles.figure} style={{ textAlign: "left" }}>
                  <Image
                    src="/images/info_booth/wftwins.jpg"
                    alt="World's Fair Twins"
                    width={160}
                    height={190}
                    className={styles.inlineImg}
                    style={{ margin: 0 }}
                    unoptimized
                  />
                  <figcaption className={styles.caption}>
                    Peter and Wendy - The World&apos;s Fair Twins!
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="attendance-heading"
          >
            <h2 id="attendance-heading" className={styles.sectionTitle}>
              Attendance
            </h2>
            <hr className={styles.sectionRule} />
            <div className={styles.row}>
              <h3 className={styles.label}>Anticipated Total</h3>
              <p className={styles.value}>70,000,000</p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>1964 Season</h3>
              <p className={styles.value}>27,148,280</p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>1965 Season</h3>
              <p className={styles.value}>24,518,020</p>
            </div>
            <div className={styles.row}>
              <h3 className={styles.label}>Actual Total</h3>
              <p className={styles.value}>51,666,300</p>
            </div>
            <figure className={styles.figure}>
              <Image
                src="/images/info_booth/glancebw3.jpg"
                alt="Crowds on Closing Day"
                width={481}
                height={268}
                className={`${styles.inlineImg} ${styles.framed}`}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Crowds throng the grounds on Closing Day October 17, 1965
              </figcaption>
            </figure>
          </section>
        </div>
      </article>

      <Nav2Bar
        previousHref="/information"
        explicitPrevious
        nextHref="/info_booth02"
      />
    </>
  );
}
