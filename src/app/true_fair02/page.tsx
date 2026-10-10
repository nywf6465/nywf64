import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TrueFairNavChrome } from "@/components/TrueFairNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./true_fair02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Moses Speaks Out on the BIE — An Unofficial World’s Fair — nywf64.com",
  description:
    "Robert Moses speaks out on the Bureau of International Expositions — An Unofficial World’s Fair on nywf64.com.",
};

/**
 * An Unofficial World’s Fair — Moses Speaks Out on the BIE.
 * Body from legacy true_fair03.html (mapped to /true_fair02 as Page 2 after overview).
 *
 * Stack: unofficialhero → TrueFairNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function TrueFair02Page() {
  return (
    <>
      <section
        className={styles.hero}
        aria-label="An Unofficial World’s Fair"
      >
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/true_fair/unofficialhero.jpg"
            alt="An Unofficial World’s Fair — 1964/1965 New York World’s Fair"
            width={1910}
            height={823}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrueFairNavChrome />

      <article className={styles.article} aria-labelledby="true-fair02-title">
        <header className={styles.titleBar}>
          <h1 id="true-fair02-title" className={styles.titleBarMain}>
            Moses Speaks Out on the BIE
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/true_fair02/rm2.jpg"
              alt="Robert Moses"
              width={200}
              height={265}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <h2 className={styles.sectionHeading}>
            <Link href="/rm01">Robert Moses</Link> speaks out on the B.I.E.:
          </h2>

          <div className={styles.body}>
            <p>
              &quot;Most of the foreign nations are coming in, either officially
              or through quasi-official business and other official interests.
              We are not members of the Bureau of International Expositions,
              can&apos;t be without a treaty proposed by the President and
              approved by the Senate, and could not in any event subscribe to
              the peculiar rules of this curious organization. This has proven
              only a minor embarrassment, to the disappointment of the Gloomy
              Gusses who prophesied that without the B.I.E. we would never get
              off the ground.&quot;
            </p>
            <p className={styles.source}>
              -Progress Report #6 of the New York World&apos;s Fair Corporation
              September 12, 1962
            </p>

            <p>
              &quot;You have heard much about our difficulties with the Bureau
              of International Expositions in Paris, the so-called B.I.E. This
              controversy has been grossly distorted. The facts are really quite
              simple and are perhaps worth repeating once more in view of the
              continuance of mis-statements:
            </p>
            <ol>
              <li>
                The New York World&apos;s Fair Corporation is under public
                auspices on city park land enjoying tax exemption as a non-profit
                educational enterprise.
              </li>
              <li>It must run two years, that is two seasons.</li>
              <li>
                The World&apos;s Fair Corporation cannot join the B.I.E. except
                by a treaty authorized by Congress at the instance of the
                President.
              </li>
              <li>No such action is even remotely thinkable.</li>
              <li>
                The New York World&apos;s Fair of 1939-1940 repeatedly assured
                the B.I.E. at that time that we would join, but never did.
              </li>
              <li>
                In the case of this Fair, the B.I.E. was told frankly that we
                could not join.
              </li>
              <li>
                The B.I.E. attempted to &quot;outlaw&quot; the 1964-1965 Fair but
                did not succeed. Some B.I.E. countries refused to exhibit as
                such, but almost all are in the Fair under private or quasi
                public auspices.
              </li>
              <li>
                The absentees unfortunately include the United Kingdom and
                Canada, but the Fair will get along without them.
              </li>
            </ol>
            <p>
              Let me add that Canada has been authorized by the B.I.E. to hold a
              world exposition in 1967 and has made some rather flamboyant,
              premature announcements.&quot;
            </p>
            <p className={styles.source}>
              -Progress Report #7 of the New York World&apos;s Fair Corporation
              January 24, 1963
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/true_fair01"
        explicitPrevious
        nextHref="/true_fairoverview"
      />
    </>
  );
}
