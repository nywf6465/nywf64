import type { Metadata } from "next";
import Image from "next/image";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./amex09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "ART 1965 — American Express — nywf64.com",
  description:
    "ART 1965: Lesser Known and Unknown Painting — Recent Sculpture at the American Express Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express — ART 1965 feature page.
 * Body from legacy amex09.html.
 * Stack: hero → AmexNavChrome → navy title bar → article → Nav2Bar.
 */
export default function Amex09Page() {
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

      <article className={styles.article} aria-labelledby="amex09-title">
        <header className={styles.titleBar}>
          <h1 id="amex09-title" className={styles.titleBarMain}>
            ART 1965
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.storyTitle}>
            Lesser Known and Unknown Painting -- Recent Sculpture
          </h2>

          <figure className={styles.figure}>
            <Image
              src="/images/amex09/amex22.jpg"
              alt="ART 1965 Displays"
              width={400}
              height={319}
              unoptimized
            />
          </figure>

          <p className={styles.source}>
            SOURCE: <em>Going Places</em>, April 1965
          </p>

          <div className={styles.quoteBlock}>
            <p>
              &quot;Another season, another show&quot; could be the theme song
              for the American Express&apos; World&apos;s Fair Pavilion during
              the second season in New York. New painting and sculpture by living
              artists from all over the world, selected by expert jurors,
              highlight the theme of the Pavilion this season.
            </p>
            <p>
              The exhibit, entitled, &quot;ART 1965: Lesser Known and Unknown
              Painting -- Recent Sculpture,&quot; includes 137 new works by
              artists and sculptors. Selections were made on the basis of high
              quality, with an aim to new discoveries.
            </p>
            <p>
              Brian O&apos;Doherty, Editor-in-Chief of Show Magazine, whose
              articles appear in leading publications and who has appeared on
              radio and television as an art critic, spearheaded the search for
              new, promising artists. Wayne Anderson, a Fellow of many art
              institutes and head of the Art Department at Massachusetts
              Institute of Technology, sought out undiscovered sculptors.
              Assisting in the organization of the exhibit is the Art Information
              Center, Inc., a non-profit clearing house of information in
              contemporary fine arts.
            </p>
            <p>
              Senior Vice President James A. Henderson said the exhibit is a
              &quot;concentrated experience of new and exciting talents searching
              for their own direction, checking the past and present against
              their own needs, thus providing some blueprint for the future.&quot;
            </p>
            <p>
              Robert Moses, President of the New York World&apos;s Fair, on
              learning of American Express&apos; new art show commented,
              &quot;It should have a profound impact on the art community and
              enhance the critical aspect of the Fair.&quot;
            </p>
            <p>
              The 94 paintings and 43 sculptures displayed at the exhibit are
              the culmination of months of travel in search of unrecognized
              artists by Messrs. O&apos;Doherty and Anderson.
            </p>
            <p>
              The handsome simplicity of the American Express Pavilion, with its
              natural oak wood construction and red brick terraces, provides a
              natural setting for the display of modern art, both inside and
              outside. Much of the sculpture is exhibited in the open air, and
              all works are for sale. Prices of paintings range from $100 to
              $4,000.
            </p>
            <p>
              The American Express Pavilion is located at the main entrance of
              the Fair grounds and once again house the half-million dollar
              official scale model of the Fair. This Fair in miniature enables
              visitors to quickly orient themselves and plan their day of
              sightseeing and visiting.
            </p>
            <p>
              Amexco&apos;s Pavilion service area cashes and sells Travelers
              Cheques and conducts other financial transactions to assist
              visitors as well as Fair exhibitors and their employees.
            </p>
            <p>
              The New York World&apos;s Fair designated the American Express
              Credit Card as official Credit Card of the Fair, and the
              company&apos;s Travelers Cheques as official Travelers Cheques.
            </p>
            <p>
              The eye opener of the 1965 New York World&apos;s Fair season could
              well be American Express&apos; &quot;ART 1965&quot; exhibit. The
              visitor will experience a serendipitous tour of modern art, a maize
              of dazzling colors and concentric shapes.
            </p>
            <p className={styles.byline}>Mel Tarr</p>
          </div>

          <div className={styles.photoStack}>
            <Image
              src="/images/amex09/amex23.jpg"
              alt="ART 1965 Displays"
              width={400}
              height={320}
              unoptimized
            />
            <Image
              src="/images/amex09/amex24.jpg"
              alt="ART 1965 Displays"
              width={400}
              height={318}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/amex08"
        explicitPrevious
        overviewHref="/amexoverview"
        nextHref="/amex10"
      />
    </>
  );
}
