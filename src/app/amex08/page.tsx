import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Money Tree — American Express — nywf64.com",
  description:
    "Meet Me Under the Money Tree — the American Express pavilion song and record at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express — The Money Tree feature page.
 * Body from legacy amex08.html.
 * Stack: hero → AmexNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Amex08Page() {
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

      <article className={styles.article} aria-labelledby="amex08-title">
        <header className={styles.titleBar}>
          <h1 id="amex08-title" className={styles.titleBarMain}>
            The Money Tree
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionHeading}>
            MEET ME UNDER THE MONEY TREE
          </h2>

          <div className={styles.lede}>
            <p>
              The bouncy new song people are humming or whistling at the New
              York World&apos;s Fair, &quot;Meet Me Under the Money Tree,&quot;
              is a sure sign they&apos;ve been to the American Express Pavilion.
              The catchy tune follows the taped description of the Fair&apos;s
              various exhibits heard while viewing the official scale model.
            </p>
            <p>
              Writer-composer of &quot;Meet Me Under the Money Tree&quot; is
              George J. Hanson, Director of Public Relations for American
              Express. Mr. Hanson, whose avocation is song-writing, is a
              graduate of the Chicago Musical College.
            </p>
            <p>
              The song has been recorded by the Bob Davis Orchestra and Chorus
              and issued on a private label. On the reverse side is the Model
              Room&apos;s tour commentary. the record is on sale at the souvenir
              counter of the Pavilion. It is encased in a handsome jacket
              designed by Leonard Uline of the company&apos;s Art Department.
              Explanatory jacket copy is by Charles Wade of the Public Relations
              staff at 65 Broadway.
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: <em>GOING PLACES</em>, Issue date undermined
          </p>

          <hr className={styles.rule} />

          <figure className={styles.jacketFigure}>
            <Image
              src="/images/amex08/record-jacket.jpg"
              alt="Record Jacket"
              width={350}
              height={345}
              className={styles.jacket}
              unoptimized
            />
          </figure>

          <p className={styles.jacketCopy}>
            <span className={styles.jacketCopyTitle}>
              MEET ME UNDER THE MONEY TREE
            </span>{" "}
            There is no better way to recapture the excitement of a major
            entertainment event than through the words and music of a hit song.
            That&apos;s why, over the years, tunes from Broadway shows and motion
            pictures, as well as fairs and expositions, have enjoyed such
            widespread popularity. In 1904, the St. Louis Exposition gave us a
            tune that soon became the nation&apos;s favorite: &quot;Meet Me In
            St. Louie, Louie, Meet Me At The Fair.&quot; Today,{" "}
            <em>&quot;Meet Me Under The Money Tree,&quot;</em> as recorded by
            the Bob Davis Orchestra and singers promises to be the hit song of
            the 1964-1965 New York World&apos;s Fair. It may well be remembered
            long after the Fair has become history. Inspiration for this song
            is, of course, the fabulous American Express Money Tree near the
            entrance to the Fairgrounds. The golden tree, standing 26 feet high,
            contains over one million dollars in spendable United States and
            Foreign paper money and American Express Travelers Cheques. It was
            designed as a symbol of the international economic and cultural
            forces binding the peoples of all nations.{" "}
            <strong>&quot;A GUIDED TOUR OF THE FAIR&quot;.</strong> Side two of
            this high fidelity recording is an exciting audio-guided tour of the
            New York World&apos;s Fair -- the same tour you enjoyed while viewing
            the official scale model of the Fairgrounds in the American Express
            Pavilion (See photo below).
          </p>

          <figure className={styles.photoFigure}>
            <Image
              src="/images/amex08/model-money-tree.jpg"
              alt="Model & Money Tree Photos"
              width={400}
              height={111}
              className={styles.photoStrip}
              unoptimized
            />
            <figcaption className={styles.photoCaption}>
              Official scale model of the Fair on view in the American Express
              Pavilion (left) The million dollar American Express Money Tree
              (right)
            </figcaption>
          </figure>

          <p className={styles.jacketSource}>
            SOURCE: Record Jacket: <em>Meet Me Under The Money Tree</em>
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex07"
        explicitPrevious
        overviewHref="/amex01"
        nextHref="/amex09"
      />
    </>
  );
}
