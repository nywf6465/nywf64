import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../greyhoundTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Almost a Legacy — Greyhound — nywf64.com",
  description:
    "The post-Fair fate of the Greyhound Pavilion and its Glide-a-Ride fleet — 1964/1965 New York World’s Fair on nywf64.com.",
};

function Photo({
  src,
  alt,
  width,
  height,
  caption,
  source,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  source?: ReactNode;
}) {
  return (
    <figure className={styles.figure}>
      <span className={styles.photoFrame}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.photoImg}
          unoptimized
        />
      </span>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      {source ? <p className={styles.source}>{source}</p> : null}
    </figure>
  );
}

function BrandMark() {
  return (
    <>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </>
  );
}

/**
 * Greyhound — Almost a Legacy.
 * Body from legacy greyhound14.html. Typos preserved: reasearch,
 * Ufortunately, increasing concerned, consumate.
 *
 * Stack: hero → GreyhoundNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 */
export default function Greyhound14Page() {
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

      <article className={styles.article} aria-labelledby="greyhound14-title">
        <header className={styles.titleBar}>
          <h1 id="greyhound14-title" className={styles.titleBarMain}>
            Almost a Legacy
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Photo
            src="/images/greyhound14/farefair49.jpg"
            alt=""
            width={478}
            height={363}
          />

          <p>
            In order to help decide which structures should be kept in the Park
            following the conclusion of the Fair, a Committee headed by William
            F. Shea, Director of the Budget, was appointed by New York Mayor
            Robert Wagner in February, 1965. Working closely with the 1964/1965
            New York World&apos;s Fair Corporation, the Committee made its
            recommendation to the Mayor on July 23, 1965 in a document titled,
            &quot;Post-Fair Engineering Report ... Flushing Meadows.&quot;
          </p>
          <p>
            In their report, the Greyhound Building was recommended to be spared
            demolition, subject to a satisfactory arrangement with Greyhound, for
            eventual use by the City Fire Department. Although the Pavilion was
            not useful for Park or closely related purposes, it <em>was</em> on
            the periphery reached independently of the Park interior road and
            path system and therefore fit the requirements for retention. A
            similar arrangement held for the Fair&apos;s Press Building. It too
            was on the Park&apos;s periphery road system and, although not useful
            for Park purposes, was slated for retention and use by the City
            Police Department.
          </p>

          <div className={styles.quoteBox}>
            <p>
              Inherent in the design and construction of the Post-Fair Park is
              the question of what buildings and structures should be retained
              for City Park use and related purposes. In this connection the Fair
              Corporation&apos;s planning for the Post-Fair Park has been based
              on the premise that buildings not useful for Park or closely
              related purposes do not belong in Flushing Meadow unless they are
              on the periphery reached independently of the Park interior road
              and path system.
            </p>
            <p>
              A further important consideration is that if an exhibitor&apos;s
              building is to be converted for permanent use, funds for the
              conversion should be provided by the exhibitor, up to the amount he
              would otherwise be required to spend for demolition, with any
              additional funds being provided by a source other than the Fair
              Corporation.
            </p>
            <p>
              The 1964-1965 Fair produced some exceptionally artistic pavilions
              and there have been many suggestions that some of them be kept
              permanently in the Park. However, these pavilions were built under
              a special Building Code as temporary special purpose structures and
              in almost all cases, conversion for permanent use would be
              prohibitively expensive and would serve no useful Park purpose.
            </p>
            <p className={styles.quoteCite}>
              Post-Fair Engineering Report ... Flushing Meadow
            </p>
            <p className={styles.quoteCite}>July 23, 1965</p>
          </div>

          <Photo
            src="/images/greyhound14/greyhound46.jpg"
            alt="Flushing Meadows June 1966"
            width={600}
            height={437}
            caption="The above aerial photograph, taken in June, 1966, shows the restoration of Flushing Meadows-Corona Park well underway. Most of the Fair's pavilions have been demolished and much of the old Fairgrounds is looking like the Park that it would become. The Greyhound Pavilion has clearly survived demolition, awaiting its new use by the City Fire Department."
            source={
              <>
                Source: <em>Sunday News</em>, June 26, 1966 Photo: Airview from
                NEWS plane by George Mattson; Al DeBello, pilot
              </>
            }
          />

          <Photo
            src="/images/greyhound14/greyhound47.jpg"
            alt="Flushing Meadows June 1967"
            width={600}
            height={251}
            caption="This aerial photograph, taken after the Park reopened to the public in June, 1967, shows restored Flushing Meadows-Corona Park just before it was turned over to the City Parks Department by the World's Fair Corporation. The Greyhound Pavilion has been demolished and a grassy plot is all that remains."
            source="Source: Photo courtesy Bill Cotter Collection"
          />

          <p>
            What happened to the Greyhound Pavilion? Craig Bavaro did some
            reasearch on this very question and found the answer (along with the
            answer to &quot;What Ever Happened...&quot; to a number of pavilions
            as he reported in his essay{" "}
            <Link href="/stories/almost-fond-farewell">
              &quot;An Almost Fond Farewell&quot;
            </Link>{" "}
            featured here at <BrandMark />
            ). This is the perfect time to repeat Craig&apos;s findings:
          </p>
          <p className={styles.italicBlock}>
            ... according to the Fair records, this building was actually
            demolished in the early part of 1967 in conjunction with the return
            of the Park to the City of New York that summer. Curious enough is
            the fact that the records clearly indicate early on that the Fire
            Department would take over this building after the Fair. To that end
            the building was indeed turned over to the Fire Department in late
            1965 by Greyhound, and Greyhound paid the City of New York the sum of
            $37,000 as their portion of the conversion costs from their
            demolition budget. At some point in 1966 the Fire Department
            determined that, once again, the cost to upgrade the building to
            bring it into compliance with New York City building codes was more
            than it was worth. The records are silent as to why the upgrade costs
            were not quantified early in the decision process as was so well
            documented with most other structures considered. Ufortunately they
            dragged their feet in notifying Fair officials of this fact. And as
            such, by late 1966, Fair officials became increasing concerned that
            this matter would not be resolved in time for the Fair Corporation to
            avail themselves of the demolition contractors already on site doing
            other work if the pavilion should need to be torn down. To further
            complicate matters, during the same period, someone in city
            government floated the idea of using this building for some kind of
            poverty assistance program. Needless to say Moses was not happy about
            this for he felt that a city park was no place for such use. Finally,
            in early 1967, all parties agreed that the building would be
            demolished and the orders were issued to disconnect the utilities in
            preparation for the wreckers to move in. It seems that in their rush
            to complete the work by the re-dedication of the Park, the demolition
            company retained to do the work caused some serious damage to the
            underground electrical distribution system, even though Fair
            officials took great pains to provide them with the necessary
            blueprints to prevent this. Curiously, the record ends there and it
            was not possible to tell who ended up paying for the necessary
            repairs to the underground utilities.
          </p>

          <div className={styles.noteBox}>
            <p>
              <strong>webmasters note: </strong>
              Ron Dominguez reports:{" "}
              <em>
                In June 1967 I was very fortunate to go with my dad and brother
                to the fair grounds for the dedication as a city park. While the
                event was nice it was still a very painful experience for me
                since I was a wild World&apos;s Fair fanatic. Seeing it all gone
                made me very sad. As I wandered around the park I happened to
                spot what was left of the Greyhound pavilion. On the day of the
                dedication as a park, the wreckage of the pavilion being
                demolished was STILL on the grounds. Most of the pavilion was
                still standing and the area had a chain link fence around it. So
                I know from actually being there that the demolition was late
                and a good bit of the pavilion was still there that day. Ron
                Dominguez, via email 2/08/2010.
              </em>
            </p>
          </div>

          <hr className={styles.sectionRule} />

          <h2 className={styles.happierTitle}>A Happier Fate...</h2>

          <div className={styles.photoPair}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound14/greyhound48.jpg"
                alt="Glide-a-Rides at Erie County Fairgrounds in 2000"
                width={300}
                height={203}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <span className={styles.photoFrame}>
              <Image
                src="/images/greyhound14/greyhound49.jpg"
                alt="Glide-a-Rides at Erie County Fairgrounds in 2000"
                width={300}
                height={202}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </div>
          <p className={styles.source}>
            Source: Photographs courtesy Martin Biniasz, © Copyright 2000, All
            Rights Reserved
          </p>

          <p>
            ... awaited Greyhound&apos;s Glide-a-Ride trains following the Fair.
            Many of them were sold to regional fairs looking for a modern and
            convenient way to transport their fairgoers around their grounds. For
            a time, Glide-a-Ride trains were even used at the restored Flushing
            Meadows-Corona Park to transport visitors around the Park.
          </p>
          <p>
            The Glide-a-Rides shown above found a home at the Erie County
            Fairgrounds outside of Buffalo, New York. By August, 2000, these
            trains were nearing the end of their useful life and the Erie County
            Fair was looking to find a buyer for their Glide-a-Rides. It is
            unknown if a buyer was ever found. By now, a full decade later, they
            too may have passed into New York World&apos;s Fair lore.
          </p>

          <Photo
            src="/images/greyhound14/greyhound56.jpg"
            alt="Escorter in Atlantic City"
            width={400}
            height={399}
            caption={
              <>
                An Escorter from the Fair serves as a &quot;Pushcart&quot; of a
                different sort on Atlantic City&apos;s famed Boardwalk.
              </>
            }
            source={
              <>
                SOURCE: Presented courtesy Bill Cotter collection © 2010 Bill
                Cotter, All Rights Reserved. See more images from Bill&apos;s{" "}
                <u>fabulous</u> collection of World&apos;s Fair photographs at
                his website{" "}
                <a
                  href="http://www.worldsfairphotos.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WorldsFairPhotos.com
                </a>
                .
              </>
            }
          />

          <div className={styles.noteBox}>
            <p>
              <strong>webmasters note: </strong>
              Ron Dominguez writes:{" "}
              <em>
                Somewhere in the very early 1970&apos;s or late 60&apos;s I saw a
                picture of the mall in Washington DC. In the photograph I saw in
                front of one of the Smithsonian Museums one of the glide a ride
                trains. (It was so distinctive as to not be missed). I
                &quot;gathered&quot; that the company that did the riding tours
                of the mall purchased them from Greyhound and were using them in
                Washington. So I am reasonably certain that this is true.
                However, due to the many years since, I can&apos;t swear 100%
                that it was true. I remember thinking it was them and being quite
                certain but over the years, I can&apos;t quite prove it now. So I
                think some of them wound up in Washington DC. Ron Dominguez, via
                email 2/08/2010.
              </em>
            </p>
          </div>

          <div className={styles.webmasterBox}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              I&apos;d like to take this opportunity to offer a special THANK YOU
              to Bill Cotter. Bill has always been most gracious in allowing me
              to use images from his extensive collection of 1964/1965 New York
              World&apos;s Fair photographs to enhance <BrandMark />. His photos
              illustrate aspects of the pavilions and exhibits that mere words
              cannot do justice to. It is one thing to see Greyhound&apos;s mock
              up of an Escorter; it is so much better to actually see it in
              action at the Fair -- complete with guides and guests. Bill is a
              consumate collector of the Fair and he has also very generously
              offered me items from his collection to include on these pages. And
              he is the author of the{" "}
              <Link href="/undrghomeoverview">Underground Home</Link> feature
              here at <BrandMark />. Thank you, Bill, for the photos you
              contributed to this feature and so many others. We all enjoy them!
            </p>
            <p className={styles.signoff}>
              Bill Young
              <br />
              February, 2010
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/greyhound13"
        explicitPrevious
        overviewHref="/greyhoundoverview"
        nextHref="/greyhoundoverview"
      />
    </>
  );
}
