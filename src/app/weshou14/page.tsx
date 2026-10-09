import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WeshouNavChrome } from "@/components/WeshouNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import shared from "../weshou/weshouArticle.module.css";
import styles from "./weshou14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Essay: A Monestary in Tibet. A Library in Manhattan. A Drawer in your Home? — Westinghouse — nywf64.com",
  description:
    "Bill Young’s essay on The Book of Record and the Westinghouse Time Capsules — 1964/1965 New York World’s Fair on nywf64.com.",
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

export default function Weshou14Page() {
  return (
    <>
      <section className={shared.hero} aria-label="Westinghouse">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/weshouoverview/hero-banner.jpg"
            alt="Westinghouse pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WeshouNavChrome />

      <article className={shared.article} aria-labelledby="weshou14-title">
        <header className={shared.titleBar}>
          <h1 id="weshou14-title" className={shared.titleBarMain}>
            Essay:{" "}
            <em>
              A Monestary in Tibet. A Library in Manhattan. A Drawer in your
              Home?
            </em>
          </h1>
          <p className={shared.titleBarByline}>... by Bill Young</p>
        </header>

        <div className={`${shared.articleInner} ${shared.essayGray}`}>
          <figure className={shared.figure}>
            <Image
              src="/images/weshou14/weshou01.jpg"
              alt="Authentication slip"
              width={200}
              height={265}
              className={`${shared.photoImg} ${shared.bordered}`}
              unoptimized
            />
            <figcaption className={shared.caption}>
              <em>
                Authentication slip from Westinghouse found inside the book.
              </em>
            </figcaption>
          </figure>

          <p>
            I have a copy of The Book of Record in my personal collection.
            Obtaining one became a quest after being able to read and study{" "}
            <em>The Book of Record</em> in the World&apos;s Fair collection of a
            friend. It&apos;s not a copy. It is one of the original 3,650 books
            printed by the Westinghouse Electric &amp; Manufacturing Company and
            distributed to libraries and institutions around the world. Mine was
            one of the 2,000 that were printed on hand-made paper and stamped
            with aluminum. My friend&apos;s is bound in royal blue buckram and
            stamped with genuine gold. Both were surprisingly easy to find. I
            used an on-line book service and paid a paltry $25 for my copy which
            came from an old bookstore in Superior, Wisconsin. My friend obtained
            his from the on-line auction site eBay. I know of others who have
            obtained personal copies for their collections as well.
          </p>
          <p>
            I treaure my book. I am amazed at the great care Westinghouse took
            and the thought they gave to develop the Time Capsules and{" "}
            <em>The Book of Record</em> and understand the hope they had that
            it would survive (in some form) into the 70th Century. I will pass
            my book on someday to an heir or to someone that I may find who
            shares my love of history and will value the book as much as I do.
            It is my hope that they, in turn, will pass it on to their heirs or
            assigns. I feel that fate has entrusted me with this &quot;duty.&quot;
          </p>
          <p>
            That may sound a bit silly. I&apos;d like to think it is the right
            thing to do, for history&apos;s sake.
          </p>
          <p>
            I don&apos;t write this to gloat about owning a rare book. Not at
            all! I write it because I think it&apos;s kind of sad that I was
            able to acquire a copy for a personal collection. Because that means
            that the plan to pass knowledge of the Time Capsules along to
            history may already be failing. The books are being discarded. Never
            having seen much, if any, circulation over the years the criteria for
            remaining on the shelves and in the library&apos;s collection
            wasn&apos;t met. Personnel at the institutions to which they were
            sent didn&apos;t realize the book&apos;s purpose and significance.
            So they&apos;ve ended up in old book stores and on-line auctions
            and, quite probably, the dumpster. How can <em>The Book of Record</em>{" "}
            be secured for the people of 50 centuries from now if the institutions
            to which they were entrusted cannot manage to keep them even for 70
            years?
          </p>
          <p>
            The section on the Westinghouse Time Capsules and{" "}
            <em>The Book of Record</em> here at <BrandMark /> is meant to give{" "}
            <em>
              <u>you</u>
            </em>{" "}
            knowledge of the Time Capsules: their purpose, their location, their
            contents and their creator&apos;s hope to pass knowledge of our
            civilization on to the people of 5,000 years hence. Remember what
            you&apos;ve read. Print a copy and give it to your kids to read.
            Pass your knowledge of the Time Capsules on to others. Perhaps, in
            this small way, we can all help to preserve this remarkable legacy to
            the future.
          </p>
          <p>It&apos;s the right thing to do, for history&apos;s sake!</p>

          <div className={shared.callout}>
            <p>
              <strong>
                <em>
                  &quot;We pray you therefore, whoever reads this book, to
                  cherish and preserve it through the ages, and translate it from
                  time to time into new languages that may arise after us, in
                  order that knowledge of the Time Capsule of Cupaloy may be
                  handed down to those for whom it is intended. It is a message
                  from one age to another. We choose to believe that men will
                  solve the problems of the world, that the human race will
                  triumph over its limitations and its adversities ... the
                  future will be glorious.&quot;
                </em>
              </strong>
            </p>
            <p>
              <strong>
                <em>-The Book of Record of the Time Capsule of Cupaloy</em>
              </strong>
            </p>
            <figure className={shared.figure}>
              <Image
                src="/images/weshou14/weshou04.jpg"
                alt="The Time Capsule of Cupaloy"
                width={246}
                height={400}
                className={`${shared.photoImg} ${shared.bordered}`}
                unoptimized
              />
            </figure>
          </div>

          <hr className={shared.rule} />

          <h2 className={shared.redHeading}>Time Capsules Online</h2>
          <p>
            If you would like to know more about the Westinghouse Time Capsules,
            many websites exist on-line to help you. Use your favorite WebSearch
            tool and simply key &quot;Westinghouse Time Capsule&quot; into the
            Search Box.
          </p>
          <p>
            <strong>TIME CAPSULE EXPO &apos;70</strong>
          </p>
          <figure className={shared.figure}>
            <Image
              src="/images/weshou14/weshou43.jpg"
              alt="Expo '70 Time Capsule"
              width={220}
              height={280}
              className={shared.photoImg}
              unoptimized
            />
            <figcaption className={shared.caption}>
              <em>Time Capsule monument at Osaka Castle</em>
            </figcaption>
          </figure>
          <p>
            For the Japan World Exposition of 1970, The Matsushita Electric
            Industrial Company and The Mainichi Newspapers worked together to
            create a much larger Time Capsule than the ones entombed in New
            York. The capsule is buried on the grounds of Osaka Castle on the
            site of Expo&apos;70 in Osaka, Japan.
          </p>
          <p>
            For this venture, the Japanese devised a different method of ensuring
            that their capsule will be found. They constructed two{" "}
            <em>identical</em> capsules, one buried atop the other. The bottom
            capsule is sealed and not to be opened until the year 6970 A.D. The
            capsule buried over it was opened in the year 2000 and is to be
            opened every 100 years following that to check the contents for
            deterioration.
          </p>
          <p>
            Matsushita Electric (now Panasonic) presents a <em>Book of Record</em>{" "}
            online for their Capsule. You can view it the following URL:
          </p>
          <p className={styles.centerLink}>
            <Link
              href="http://panasonic.net/history/time_capsule/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>http://panasonic.net/history/time_capsule/</strong>
            </Link>
          </p>

          <div className={styles.webmasterNote}>
            <p>
              <strong>Webmaster&apos;s note...</strong> Special thanks go to
              Craig Bavaro who shared his prized copy of{" "}
              <em>The Book of Record of the Time Capsule of Cupaloy</em> with me
              a while ago and to Bradd Schiffman for lending the photos of the
              Time Capsule II cutaway model. Thanks also to Rich Post for
              sharing his copy of the <em>Supplement</em> to{" "}
              <em>The Book of Record</em> announcing Time Capsule II. EXTRA
              SPECIAL THANKS to Doug Seed for sending me a quality copy of{" "}
              <em>The Story of the Time Capsule</em> so I could share it with
              everyone on-line.
            </p>
            <p>Bill Young</p>
            <p>February, 2002</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/weshou13"
        explicitPrevious
        overviewHref="/weshouoverview"
        nextHref="/weshou15"
      />
    </>
  );
}
