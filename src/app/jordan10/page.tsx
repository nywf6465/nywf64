import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { Jordan10EssayContent } from "./jordan10EssayContent";
import styles from "./jordan10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "War through Misunderstanding — Jordan — nywf64.com",
  description:
    "War through Misunderstanding — The Jordan Pavilion Controversy — Jordan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jordan essay — excerpt from Sharyn Elise Jackson’s research on international
 * participation. Body from legacy jordan10.html (wording/casing preserved).
 */
export default function Jordan10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan10-title">
        <header className={styles.titleBar}>
          <h1 id="jordan10-title" className={styles.titleBarMain}>
            <em>War Through Misunderstanding</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.aboutBox}>
            <p className={styles.aboutHeading}>About the Essay...</p>
            <p>
              <strong>
                &quot;War through Misunderstanding&quot; is excerpted from
                &quot;International Participation in the New York World&apos;s
                Fair 1964-1965&quot; by Sharyn Elise Jackson.
                &quot;International Participation...&quot; is a fascinating and
                meticulously researched paper that brings together vital pieces of
                history ... politics, personalities, conflicts and fates ... that
                made the 1964-1965 New York World&apos;s Fair what it was.
              </strong>
            </p>
            <p className={styles.aboutHeading}>About the Author...</p>
            <p>
              <strong>
                Sharyn Elise Jackson graduated magna cum laude from New York
                University in May 2004 with a BA in History. She received honors
                for her thesis on international participation in the New York
                World&apos;s Fair 1964-1965 and is a member of Phi Alpha Theta,
                the national history honor society.
              </strong>
            </p>
            <p>
              <strong>
                And now,{" "}
                <em style={{ color: "#0066cc" }}>
                  &quot;War through Misunderstanding - The Jordan Pavilion
                  Controversy&quot; ...
                </em>
              </strong>
            </p>
          </div>

          <div className={styles.essayLead}>
            <figure className={styles.figure}>
              <Image
                src="/images/jordan10/intpar01.gif"
                alt=""
                width={150}
                height={116}
                className={styles.photo}
                unoptimized
              />
            </figure>
            <p className={styles.essayLeadMain}>
              &quot;War Through Misunderstanding&quot;:
            </p>
            <p className={styles.essayLeadSub}>
              The Jordan Pavilion Controversy
            </p>
            <p className={styles.byline}>by</p>
            <p className={styles.bylineName}>Sharyn Elise Jackson</p>
          </div>

          <blockquote className={styles.mosesQuote}>
            <p>
              <strong>
                We must exercise every ingenuity to reconcile differences by
                simple, friendly human contacts away from protocol, diplomacy and
                debates over ideologies which are the functions of the
                chancelleries and the United Nations. This is our opportunity at
                Flushing Meadow in 1964 and 1965.
              </strong>
            </p>
            <p>
              <em>- Robert Moses</em>
            </p>
          </blockquote>

          <Jordan10EssayContent />
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan09"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordanoverview"
      />
    </>
  );
}
