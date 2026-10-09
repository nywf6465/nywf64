import type { Metadata } from "next";
import Image from "next/image";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./sevup06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The 7up Leader - Various Issues 1964/1965 — Seven-Up — nywf64.com",
  description:
    "Photographs from various 1964/1965 issues of the 7up Leader covering the Seven-Up Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up — The 7up Leader - Various Issues 1964/1965.
 * Body from legacy sevup06.html (photo blocks with per-issue sources).
 * Menu label is shorter (“The 7up Leader”); title bar uses the legacy longer title.
 *
 * Stack: hero → SevupNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Sevup06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Seven-Up">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/sevupoverview/hero-banner.jpg"
            alt="Seven-Up at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SevupNavChrome />

      <article className={styles.article} aria-labelledby="sevup06-title">
        <header className={styles.titleBar}>
          <h1 id="sevup06-title" className={styles.titleBarMain}>
            The 7up Leader - Various Issues 1964/1965
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            Photographs from the 1964/1965 issues of ...
          </p>
          <div className={styles.banner}>
            <Image
              src="/images/sevup06/sevup38.jpg"
              alt="the 7up Leader"
              width={500}
              height={92}
              className={styles.bannerImg}
              unoptimized
            />
          </div>

          <figure className={`${styles.block} ${styles.blockNarrow}`} style={{ maxWidth: 300 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup41.jpg"
                alt="Ribbon cutting at the 7-Up International Sandwich Gardens"
                width={300}
                height={378}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              Opening the 7-Up International Sandwich Gardens, H.C. Grigg, The
              Seven-Up Co. president, and Mrs. Grigg, cut ribbon. From left:
              vice-pres. Howard Ridgway; Lord Hinchingbrooke; Mr. and Mrs. Grigg,
              wielding scissors; Mrs. Ridgway; Mrs. Wells and vice-pres. Ben
              Wells; John Furnas, 7-Up Gardens mgr.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume V No. 3, May/June 1964
            </p>
          </figure>

          <div className={styles.parade}>
            <div className={styles.paradePhotos}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup06/sevup42.jpg"
                  alt="Tower stiltwalker in the opening parade"
                  width={404}
                  height={232}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/sevup06/sevup43.jpg"
                  alt="Stiltwalker and chef"
                  width={270}
                  height={444}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </div>
            <div>
              <p className={styles.paradeText}>
                Crowd braving chill rain to view parade opening the 1964-1965 New
                York World&apos;s Fair cheered the unique 7-Up International
                Sandwich Gardens entry. Towering high above other units,
                stiltwalker in replica of famous 7-Up clock tower contrasted with
                tiny chefs cavorting about his feet. After these applause-getters,
                38 marchers carrying signs on poles flashed invitations to meet
                under the 7-Up clock tower for 7-Up and sandwiches. Despite rain,
                crowd gathered to watch chef and his tall friend clown for
                cameras.
              </p>
              <p className={styles.source}>
                SOURCE: <em>the 7up Leader</em>, Volume V No. 3, May/June 1964
              </p>
            </div>
          </div>

          <figure className={styles.block} style={{ maxWidth: 316 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup44.jpg"
                alt="Diners at the 7-Up International Sandwich Gardens"
                width={316}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              In newspaper articles, and on radio and TV, Fair visitors
              enthusiastically praise the 7-Up International Sandwich Gardens.
              They&apos;re complimentary of the theme, the quantity and quality
              and especially the price, of the food.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume V No. 3, May/June 1964
            </p>
          </figure>

          <figure className={styles.block} style={{ maxWidth: 318 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup39.jpg"
                alt="Lord Hinchingbrooke on To Tell the Truth"
                width={318}
                height={283}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              &quot;Will the real Lord Hinchingbrooke, future Earle of Sandwich,
              please stand up?&quot; asks MC Bud Colyer. Millions of TV viewers
              meet the young nobleman and representative of the 7-Up International
              Sandwich Gardens, on popular show, &quot;To Tell the Truth.&quot; On
              this national TV net, and on national radio networks, Lord
              Hinchingbrooke charmed interviewers and audiences with his tales
              about his ancestor, who is credited with inventing the sandwich.
              These broadcasts all publicized 7-Up and the 7-Up Sandwich Gardens.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume V No. 3, May/June 1964
            </p>
          </figure>

          <figure className={styles.block} style={{ maxWidth: 338 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup37.jpg"
                alt="Youngsters at the sandwich board"
                width={338}
                height={214}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              The point of purchase! Youngsters window-shop for 7-UP international
              sandwiches before heading for the fast-moving sandwich service line.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume VI No. 3, May/June 1965
            </p>
          </figure>

          <figure className={`${styles.block} ${styles.blockNarrow}`}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup36.jpg"
                alt="Henry Morgan with 7-Up hostesses"
                width={389}
                height={476}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              TV star Henry Morgan takes a tour of the World&apos;s Fair with the
              assistance of a retinue of 7-Up International Lounge hostesses.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume VI No. 3, May/June 1965
            </p>
          </figure>

          <figure className={styles.block} style={{ maxWidth: 600 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup35.jpg"
                alt="Margaret Truman and Clifton Daniel at the Lounge"
                width={600}
                height={200}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              A special VIP guest at the 7-Up International Lounge on the
              &quot;flying deck&quot; of the Sandwich Gardens service building was
              Margaret Truman, her husband, New York <em>Times</em> editor Clifton
              Daniel, their children and friends.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume VI No. 4, July/August 1965
            </p>
          </figure>

          <figure className={styles.block} style={{ maxWidth: 383 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup34.jpg"
                alt="Lord Hinchingbrooke with Senator Symington"
                width={383}
                height={255}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              John Montague [right], Lord Hinchingbrook, direct descendant of the
              Fourth Earl of Sandwich. The young viscount represented 7-Up on TV,
              in radio and newspaper interviews and many personal appearances.
              With him at the Gardens for a Missouri Society of New York reception
              during opening week are Senator Stuart Symington of Missouri and
              Gail Ritter, &quot;Miss Show Me.&quot;
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume VI No. 6, November/December
              1965
            </p>
          </figure>

          <figure className={styles.block} style={{ maxWidth: 303 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/sevup06/sevup33.jpg"
                alt="Entertainment at the Sandwich Gardens"
                width={303}
                height={191}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              For 1965, the musical fare at the Sandwich Gardens was a varied one,
              running the gamut from rock-and-roll (above), popular with teens, to
              the soft nostalgic rhythms of the long-time favorite{" "}
              <em>Three Suns</em> aggregation. As in 1964, when the{" "}
              <em>7-Up Continentals</em> held sway, live entertainment was
              featured seven hours a day, seven days a week.
            </figcaption>
            <p className={styles.source}>
              SOURCE: <em>the 7up Leader</em>, Volume VI No. 6, November/December
              1965
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/sevup05"
        explicitPrevious
        overviewHref="/sevupoverview"
        nextHref="/sevup07"
      />
    </>
  );
}
