import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { AMEX12_BLOCKS } from "./blocks";
import styles from "./amex12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Essay: We're Going to Need Some Really Detailed Models — American Express — nywf64.com",
  description:
    "Craig Bavaro’s essay on the big model and traveling models of the 1964/1965 New York World’s Fair — American Express pavilion story on nywf64.com.",
};

function BrandMark() {
  return (
    <span className={styles.brand}>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

function WebmasterLinks() {
  return (
    <p className={styles.webmasterLinks}>
      Craig has been a valuable contributor to <BrandMark /> over the years.
      You might also wish to explore Craig&apos;s excellent memoir titled{" "}
      <Link href="/stories/worlds-fair-odyssey">
        A World&apos;s Fair Odyssey &amp; An Afternoon of Delight
      </Link>{" "}
      about Flushing Meadow Park as it was in the mid 1970s and his
      well-researched essays from the World&apos;s Fair Corporation archives
      including{" "}
      <Link href="/stories/almost-fond-farewell">An Almost Fond Farewell</Link>
      {" — "}the story of the decision to save a handful of pavilions after the
      Fair ended,{" "}
      <Link href="/stories/records">
        What to do with All of These Records?
      </Link>
      {" — "}the story of how the Fair&apos;s archives were donated to the NY
      Public Library and{" "}
      <Link href="/stories/light-out">I Think We Have A Light Out</Link> — the
      story of the problems with the capital lights on Unisphere. Craig has also
      contributed some spectacular aerial photographs of the Fair that can be
      viewed at{" "}
      <Link href="/information/from-the-air">The Fair from the Air</Link>. You
      can contact Craig via{" "}
      <a href="mailto:CBavaro@aol.com?subject=The Fair">email</a>.
    </p>
  );
}

/**
 * American Express — essay feature page (`/amex12`).
 * Body from legacy amex12.html.
 * Stack: hero → AmexNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Amex12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="American Express">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/amexoverview/hero-banner.jpg"
            alt="American Express at the 1964/1965 New York World’s Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AmexNavChrome />

      <article className={styles.article} aria-labelledby="amex12-title">
        <header className={styles.titleBar}>
          <h1 id="amex12-title" className={styles.titleBarMain}>
            Essay: <em>We&apos;re Going to Need Some Really Detailed Models</em>
          </h1>
          <p className={styles.titleBarByline}>… by Craig Bavaro</p>
        </header>

        <div className={`${styles.articleInner} ${styles.body}`}>
          {AMEX12_BLOCKS.map((block, index) => {
            switch (block.type) {
              case "h3":
                return (
                  <h2 key={index} className={styles.sectionHeading}>
                    {block.text}
                  </h2>
                );
              case "p":
                return <p key={index}>{block.text}</p>;
              case "source":
                return (
                  <p
                    key={index}
                    className={`${styles.source}${
                      block.muted ? ` ${styles.sourceMuted}` : ""
                    }`}
                  >
                    {block.text.startsWith("SOURCE:") ? (
                      <>
                        SOURCE:{" "}
                        <em>{block.text.replace(/^SOURCE:\s*/, "")}</em>
                      </>
                    ) : (
                      block.text
                    )}
                  </p>
                );
              case "caption":
                return (
                  <p
                    key={index}
                    className={`${styles.caption}${
                      block.small ? ` ${styles.captionSmall}` : ""
                    }`}
                  >
                    {block.text}
                  </p>
                );
              case "features":
                return (
                  <div key={index} className={styles.features}>
                    {block.text}
                  </div>
                );
              case "webmaster":
                return (
                  <p key={index} className={styles.webmaster}>
                    {block.text}
                  </p>
                );
              case "webmasterLinks":
                return <WebmasterLinks key={index} />;
              case "date":
                return (
                  <p key={index} className={styles.date}>
                    {block.text}
                  </p>
                );
              case "img":
                return (
                  <figure
                    key={index}
                    className={`${styles.figure} ${
                      block.width >= 500 ? styles.figureWide : ""
                    }`}
                  >
                    <Image
                      src={`/images/amex12/${block.src}`}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      unoptimized
                    />
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex11"
        explicitPrevious
        overviewHref="/amexoverview"
        nextHref="/amexoverview"
      />
    </>
  );
}
