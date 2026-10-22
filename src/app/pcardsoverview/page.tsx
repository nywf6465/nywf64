import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PcardsHero } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import styles from "./pcardsoverview.module.css";

export const metadata: Metadata = {
  title: "Introduction — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Introduction to the nywf64.com Post Card collection of the 1964/1965 New York World’s Fair — organized from Peter M. Warner’s list.",
};

function BrandMark({ withTrailingSpace = false }: { withTrailingSpace?: boolean }) {
  return (
    <>
      <span className={styles.nywf}>
        nywf<span className={styles.nywfMark}>64</span>
      </span>
      <span className={styles.nywfCom}>.com</span>
      {withTrailingSpace ? " " : null}
    </>
  );
}

/**
 * World’s Fair Postcard Collection overview / Introduction (legacy pcards01).
 * Full Introduction essay — not the abbreviated overview prototype.
 * Stack: PcardsHero → PcardsNavChrome → navy title “Introduction” → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the attraction nav.
 * Nav bar shows Page 1 (`pcardsoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /artifacts; NEXT → /pcards01 (Official Postcards).
 */
export default function PcardsOverviewPage() {
  return (
    <>
      <PcardsHero />

      <PcardsNavChrome />

      <article className={styles.article} aria-labelledby="pcardsoverview-title">
        <header className={styles.titleBar}>
          <h1 id="pcardsoverview-title" className={styles.titleBarMain}>
            Introduction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/pcardsoverview/04.jpg"
            alt=""
            width={650}
            height={177}
            className={styles.banner}
            sizes="(max-width: 650px) 100vw, 650px"
            unoptimized
          />

          <hr className={styles.rule} />

          <p className={styles.lede}>
            Introduction to the <BrandMark /> Post Card collection
          </p>

          <p className={styles.body}>
            In 1966, World&apos;s Fair enthusiast and historian Peter M. Warner
            compiled a comprehensive list of the Post Cards issued for the
            1964/1965 New York World&apos;s Fair. <BrandMark withTrailingSpace />
            salutes Peter Warner and his decades long work to preserve the Fair.
            It is his list that we used to organize and display our collection of
            the <strong>Post Cards of the Fair</strong>. Mr. Warner passed away a
            number of years ago but his legacy and love of the Fair lives on
            through his list and now at <BrandMark />.
          </p>

          <div className={styles.portraitWrap}>
            <Image
              src="/images/pcardsoverview/05.jpg"
              alt="Peter M. Warner"
              width={126}
              height={200}
              className={styles.portrait}
              unoptimized
            />
          </div>

          <p className={styles.body}>
            <span className={styles.note}>
              It should be noted that not every card in Mr. Warner&apos;s list is
              presented in this feature
            </span>
            . There were hundreds of cards published, both licensed and
            unlicensed by the World&apos;s Fair Corporation, for the Fair and for
            the exhibitors. To collect them all after more than 50 years have
            passed would be a difficult undertaking. We present here some 300
            cards from his list and we will add more cards as they are acquired.
          </p>

          <p className={styles.body}>
            Our feature is focused primarily on the 3 1/2&quot; x 5 1/2&quot;
            post card issues. There were many &quot;jumbo&quot; cards, fold-outs
            and booklets issued as well. These items are not presented here, with
            the exception of a few larger sized <em>Exhibitor</em> cards.
          </p>

          <p className={styles.body}>
            Mr. Warner divided his list into three sections representing the
            general categories in which cards were issued. Here we break down his
            list as follows:
          </p>

          <ul className={styles.categoryList}>
            <li className={styles.official}>
              <strong>Official Post Cards</strong> - These are cards that were
              generally available throughout the Fairgrounds and the New York
              Metropolitan area before and during the run of the Fair. They were
              published by Dexter Press or the Manhattan Post Card Publishing Co.
              under license from the 1964/1965 New York World&apos;s Fair
              Corporation.
            </li>
            <li className={styles.exhibitor}>
              <strong>Exhibitor Post Cards</strong> - These are cards published
              by the Fair&apos;s exhibitors. The cards include only those which
              show exhibitor buildings and/or products and which mention the
              Fair.{" "}
            </li>
            <li className={styles.advertising}>
              <strong>Advertising Post Cards</strong> - These are cards published
              by exhibitors that advertised various products of exhibit sponsors
              or materials that went into the construction of pavilions.
            </li>
            <li className={styles.unauthorized}>
              <strong>Unauthorized Post Cards</strong> - These are cards
              published by Plastichrome Colourpicture Publishers and Progressive
              Publications that depicted &quot;Unofficial Reproductions&quot;
              from original photographs and were available for sale outside of
              the Fairgrounds.
            </li>
            <li className={styles.miscellaneous}>
              <strong>Miscellaneous Post Cards</strong> - These are cards that
              don&apos;t seem to fit in any of the other categories.
            </li>
          </ul>

          <p className={styles.body}>
            Nearly every <em>Official</em> Post Card is represented in this
            feature. Many <em>Exhibitor</em> Post Cards were issued in sets and
            where the set is incomplete in our list, a Place Holder has been
            inserted and will be filled if and when the card is acquired. If we
            do not have any of the cards issued by an Exhibitor, the cards are
            not included with a Place Holder in our feature in order to save
            space and eliminate clutter.{" "}
          </p>

          <p className={styles.body}>
            Feel free to print the following pages if you&apos;d like to use them
            as a colorful guide to collecting your own set of{" "}
            <strong>Post Cards of the Fair</strong>! Better yet, you may purchase
            a copy of an even more current and complete list of cards through
            Bill Cotter at{" "}
            <a
              href="http://www.worldsfairphotos.com/nywf64/postcards.htm"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              www.worldsfairphotos.com
            </a>
            . Price is $10 plus shipping.{" "}
          </p>

          <p className={styles.body}>
            In his list, Mr. Warner provided the following illustration to assist
            collectors in identifying the various <em>Official</em> cards
            produced for the Fair
          </p>

          <div className={styles.illustrationBlock}>
            <Image
              src="/images/pcardsoverview/07.jpg"
              alt="Illustration identifying Official Post Cards of the Fair — part 1"
              width={600}
              height={377}
              className={styles.illustration}
              sizes="(max-width: 600px) 100vw, 600px"
              unoptimized
            />
            <Image
              src="/images/pcardsoverview/08.jpg"
              alt="Illustration identifying Official Post Cards of the Fair — part 2"
              width={600}
              height={375}
              className={styles.illustration}
              sizes="(max-width: 600px) 100vw, 600px"
              unoptimized
            />
          </div>

          <p className={styles.body}>
            Now settle back and relive the memories the{" "}
            <strong>Post Cards of the Fair</strong> bring back from a time more
            than 50 years ago when the world came to Flushing Meadows for the
            1964/1965 New York World&apos;s Fair!
          </p>

          <p className={styles.closingBrand}>
            <BrandMark />
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/pcardsoverview"
        nextHref="/pcards01"
      />
    </>
  );
}
