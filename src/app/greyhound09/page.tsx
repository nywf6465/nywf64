import type { Metadata } from "next";
import Image from "next/image";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Information Booths — Greyhound — nywf64.com",
  description:
    "Greyhound Official World's Fair Information Booths, telephone center, and walking guides at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound — Information Booths.
 * Body from legacy greyhound09.html (Marketing Information Letter No. 2).
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Greyhound09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Greyhound">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/greyhoundoverview/hero-banner.jpg"
            alt="Greyhound at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GreyhoundNavChrome />

      <article className={styles.article} aria-labelledby="greyhound09-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound09-title" className={styles.titleBarMain}>
            Information Booths
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound09/greyhound02.jpg"
                alt="Artist's Rendering of Information Booth"
                width={270}
                height={342}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Artist&apos;s rendering of the Information Booths sponsored by
              Greyhound which were scattered throughout the Fairgrounds.
            </figcaption>
            <p className={styles.source}>
              SOURCE: Commercial Transparency by Photo Lab, Inc., Washington, DC
            </p>
          </figure>

          <p>
            <span className={styles.areaTitle}>INFORMATION BOOTH SERVICES:</span>
          </p>
          <p>
            Greyhound at the World&apos;s Fair will provide the uniformed men
            and women attendants in the 20 or more Official World&apos;s Fair
            Information Booths.
          </p>
          <p>
            These booths will be served by teletype and telephone from the
            Official World&apos;s Fair Information Center, thus assuring
            possession of the latest word on special events or program changes.
            Inquiries directed to these booth attendants in languages foreign to
            us will be handled by direct telephone conversation between the
            inquirer and the able linguists at the telephone information center.
          </p>

          <p>
            <span className={styles.areaTitle}>
              OFFICIAL WORLD&apos;S FAIR TELEPHONE INFORMATION CENTER:
            </span>
          </p>
          <p>
            Greyhound at the World&apos;s Fair will staff and operate this
            telephone information center where the latest equipment has been
            installed to accommodate 60 or more operators working in shifts
            around the clock, seven days a week. A representative group of these
            operators will be chosen for their proficiency in many languages so
            that, during the most hours of the day, conversational contact may
            be established where a language barrier might otherwise exist.
          </p>

          <p>
            <span className={styles.areaTitle}>WALKING GUIDE SERVICE:</span>
          </p>
          <p>
            Greyhound at the World&apos;s Fair will provide smartly uniformed,
            carefully selected and trained walking guides. They can be engaged
            through the uniformed roving salesmen or hostesses at the Official
            World&apos;s Fair Information Booths, by individuals or groups of
            manageable sizes.
          </p>
          <p className={styles.source}>
            SOURCE: Greyhound Corporation, New York World&apos;s Fair Marketing
            Information Letter No. 2, September 13, 1963
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound08"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhound10"
      />
    </>
  );
}
