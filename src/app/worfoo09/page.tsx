import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NyplRecordsSource } from "@/components/worfoo/NyplRecordsSource";
import styles from "./worfoo09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The End for the World of Food — World of Food — nywf64.com",
  description:
    "The End for the World of Food — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Worfoo09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="World of Food">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/worfoooverview/hero-banner.jpg"
            alt="World of Food pavilion site at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WorfooNavChrome />

      <article className={styles.article} aria-labelledby="worfoo09-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo09-title" className={styles.titleBarMain}>
            The End for the World of Food
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.grayBody}>
            <p>
              As work continues at a fevered pitch on the Flushing Meadows site of
              the Fair, the steel framework of The World of Food stands nearly
              abandoned in the background. This view is taken from near the Main
              Entrance of the Fair looking toward the entrance tower of The World of
              Food. Note the completed Mormon and Gas Inc. Pavilions to the right.
            </p>
          </div>

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <Image
              src="/images/worfoo09/wof04.jpg"
              alt=""
              width={460}
              height={311}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <NyplRecordsSource />

          <h2 className={styles.salmonHeading}>How Far Behind?</h2>

          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> January 21, 1964
            </p>
            <p>To: Mr. V. J. Thornton</p>
            <p>From: William Douglas Jr.</p>
            <p>
              <strong>SUBJECT:</strong> Review of Progress Schedule submitted
              <br />
              <strong>
                <u>World of Food January 15, 1964</u>
              </strong>
            </p>
            <p>a. Foundation and foundation concrete completed approximately as scheduled.</p>
            <p>
              b. Structural steel, although not started as indicated on schedule,
              probably could have been completed as scheduled.
            </p>
            <p>
              c. Floor and roof joists not started as shown on schedule. Could not
              be started until steel is at least partially bolted and realistic
              schedule should show completion approximately February 15.
            </p>
            <p>
              d. Forms for floors and roof could not be started until joists are
              completed on at least one floor. Therefore, completion should be
              approximately February 23.
            </p>
            <p>
              e. Concrete floor slabs cannot be started until forms are completed on
              at least one door. Therefore, slabs should be completed approximately
              March 10.
            </p>
            <p>
              f. It is usual and customary for stairs to be installed prior to
              placing concrete floor slabs. To the best of my knowledge these stairs
              are not on the job so this item could definitely affect (e) above.
            </p>
            <p>
              g. Mullions cannot be installed prior to completion of bolting of
              steel. Therefore, that could not be completed prior to the first of
              March and it is also very difficult, almost impossible, to place the
              mullions until the concrete floor slabs have been placed and stripped.
            </p>
            <p>h. Waterproofing - no comment.</p>
            <p>
              i. Masonry schedule realistic concerning length of installation if
              period was other than February and March, the worst periods of the
              year to place masonry.
            </p>
            <p>
              j. As of January 15th architects own admission the order for the
              exterior wall panels had not been placed. Considering a usual 2 to 3
              month delivery time on this type panel, construction could not have
              conceivably started prior to approximately the 10th of March for
              completion on the 10th of April.
            </p>
          </div>

          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> January 21, 1964
            </p>
            <p style={{ textAlign: "right" }}>Page 2</p>
            <p>To: Mr. V. J. Thornton</p>
            <p>From: William Douglas Jr.</p>
            <p>
              <strong>SUBJECT:</strong> Review of Progress Schedule submitted
              <br />
              <strong>
                <u>World of Food January 15, 1964</u>
              </strong>
            </p>
            <p>
              k. Escalators, because of the intricate machinery and electrical
              connections, are customarily not installed until the building is
              weather tight. Allowing a minimum of one month for this installation,
              it appears unlikely that they could be completed prior to the 15th of
              May.
            </p>
            <p>l. The same is true for elevators as escalators.</p>
            <p>
              m. As the roof cannot be completed until the roof slab is placed,
              usually the last slab to be placed, it appears the building could be
              roofed over at approximately the first of April.
            </p>
            <p>
              n. As the majority of carpentry and especially the finished type are
              done after the lathing and plastering that cannot be reasonably
              completed until May 15.
            </p>
            <p>
              o. The hollow metal work is customarily one of the last items and in
              any event cannot be finished until after the building is closed in, and
              Escalators and elevators all installed. Suggested completion date -
              May 31.
            </p>
            <p>
              p. Ductwork schedule realistic but as of January 15 no contract had
              been let to the best of my knowledge. Assuming the immediate letting of
              a contract and allowing two weeks for shop drawings, the ductwork would
              probably be completed approximately the 22nd of April.
            </p>
            <p>
              q. The acoustical ceiling work cannot start prior to the ductwork being
              relatively finished and ceramic tile, elevators, and escalators
              installed. Realistic completion date approximately the 5th of June.
            </p>
            <p>r. Architectural metal - no comment.</p>
            <p>
              s. Lath and plaster cannot start prior to the completion of exterior
              walls, so realistic completion date would be approximately May 5.
            </p>
          </div>

          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> January 21, 1964
            </p>
            <p style={{ textAlign: "right" }}>Page 3</p>
            <p>To: Mr. V. J. Thornton</p>
            <p>From: William Douglas Jr.</p>
            <p>
              <strong>SUBJECT:</strong> Review of Progress Schedule submitted
              <br />
              <strong>
                <u>World of Food January 15, 1964</u>
              </strong>
            </p>
            <p>
              t. Ceramic tile cannot be completed ahead of the plastering so
              realistic date for ceramic tile would be approximately May 5 also.
            </p>
            <p>
              u. Toilet partitions cannot start until tile is partially installed so
              consider May 15 as completion date.
            </p>
            <p>v. Hardware - no comment.</p>
            <p>w. Glazing - no comment.</p>
            <p>
              x. Painting cannot be completed until lath and plastering is completed
              so consider May 20 for completion.
            </p>
            <p>
              y. Plumbing cannot be completed until ceramic tile is finished so a
              realistic date for plumbing would be approximately May 20.
            </p>
            <p>
              z. HVAC cannot be completed until acoustic tile is finished so
              realistic date for HVAC would be May 20.
            </p>
            <p>
              aa. Electrical work would be completed concurrent with HVAC, so also
              May 20.
            </p>
            <p>
              Because of the difficulties with labor unions and the movement of
              materials, it would be inconceivable that very much exhibit work can be
              done prior to the completion of the building. Allowing a minimum of two
              weeks for installation of exhibit material and then the retouching of
              paint, doors, etc., it appears the building could be open to the public
              approximately June 15.
            </p>
          </div>

          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> January 21, 1964
            </p>
            <p style={{ textAlign: "right" }}>Page 4</p>
            <p>To: Mr. V. J. Thornton</p>
            <p>From: William Douglas Jr.</p>
            <p>
              <strong>SUBJECT:</strong> Review of Progress Schedule submitted
              <br />
              <strong>
                <u>World of Food January 15, 1964</u>
              </strong>
            </p>
            <p>
              In compiling this report, the writer used in practically all
              instances, the amount of workdays as indicated on the submitted
              progress schedule. In most instances, the time interval for each
              installation was sufficient only under the best working conditions; i.
              e., good weather, no labor problems, materials delivered as promised on
              schedule, and materials ordered with sufficient lead-time. It is a
              little unrealistic to assume that everything would run perfectly on a
              job of this magnitude.
            </p>
            <p>
              Construction on this project started right after the first of year
              1963. In the course of one year, they have completed 20% to 30% of the
              construction. It is unrealistic to anticipate remaining 70% to 80%
              could be completed in 3 months time.
            </p>
            <p>
              The above report was written by an engineer with 25 years of
              construction experience, much of it in this area, much of it on this
              type of building, and much of it in a position where scheduling was an
              important part of my position.
            </p>
            <p>
              WDJr/clk <strong>PERMIT OFFICER</strong>
              <br />
              cc:
              <br />
              Gen. W. E. Potter
              <br />
              Gem Win. Whipple
              <br />
              File
            </p>
          </div>

          <NyplRecordsSource />

          <p className={styles.photoCaptionCenter}>
            Photographs of the steel framework taken just days prior to its
            demolition by the World&apos;s Fair Corporation. Early plans for the
            pavilion had called for a five-story structure. At the time of
            demolition, they had already been talking about eliminating the second
            floor leaving only one floor of exhibit space! How many exhibitors had
            abandoned the project and found space in the Better Living Building by
            this time is unknown. However most, if not all, of the exhibitors who
            had contracted with World of Food did display elsewhere at the Fair.
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <div className={styles.grayTray}>
              <Image
                src="/images/worfoo09/wof05.jpg"
                alt="Framework"
                width={460}
                height={313}
                className={styles.photoBorder}
                unoptimized
              />
            </div>
            <div className={styles.grayTray} style={{ marginTop: "0.5rem" }}>
              <Image
                src="/images/worfoo09/wof08.jpg"
                alt="Framework"
                width={460}
                height={341}
                className={styles.photoBorder}
                unoptimized
              />
            </div>
          </figure>

          <NyplRecordsSource />

          <div className={styles.exhibitBox}>
            <h2 className={styles.salmonHeading}>The End for The World of Food</h2>
            <div className={styles.grayBody}>
              <p>
                The World of Food would not go without a fight and soon filed suit
                against the Fair Corporation to prevent the termination of their
                agreement with the Fair. At stake was the hundreds of thousands of
                dollars already invested in the project. Ultimately, the courts
                decided for the Fair Corporation in early April, 1964, awarding them
                not only the authority to oust The World of Food from the grounds,
                but also the salvage rights to the materials on site.
              </p>
              <p>
                On April 11, 1964, at 7 a.m., (less than two weeks prior to the
                opening of the Fair) the Fessler Iron Works started to take the steel
                down. On April 13, 1964, the back fill on the lot was completed.
              </p>
              <p>
                There was a lot of back and forth as to owned the steel. The steel
                was not buried on site as had been rumored. Through a court decision
                the steel became the property of the World&apos;s Fair Corporation.
                One parcel of steel was sold to A. Green and Co. for $.015 per
                pound. There were 555,820 lbs. in that parcel which paid the
                World&apos;s Fair Corporation $8,337.30. The relandscaping costs were
                absorbed by the World&apos;s Fair Corporation.
              </p>
              <p>
                When the steel came down it had to be stored someplace, so the Fair
                Corporation contacted the Dreier Structural Steel Co. in Long Island
                City, for storage. The Fair Corporation ended up paying $500 a month
                in storage fees. The last lot, the one mentioned above, was sold in
                mid 1965. So the Fair Corporation ended up paying close to 18 months
                in storage fees. .
              </p>
            </div>

            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLD&apos;S FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> APRIL 7, 1964
            </p>
            <p>To: GEN. WM. WHIPPLE</p>
            <p>From: GEN. W. S. POTTER</p>
            <p>
              Subject: <strong><u>WORLD OF FOOD</u></strong>
            </p>
            <p>
              Attached is a decision in the World of Food case. In our language this
              means that we may proceed with the demolition of the World of Food
              Exhibit
            </p>
            <p>
              Mr. Moses has decided that the structure should be demolished and the
              site landscaped prior to Opening Day. This will involve considerable
              back-fill and landscaping.
            </p>
            <p>
              Steel was erected by Fassler iron Works. He may have an interest in the
              steel.
            </p>
            <p>
              You are directed to demolish the structure and have the steel and
              finished items stored to our account until disposition can be made.
              Deal first with Fassler and if a satisfactory deal cannot be arrived at,
              then deal with others of your selection.
            </p>
            <p>
              Please consult with our lawyers in arranging for the legal aspects of
              the contract.
            </p>
            <p>W. E. Potter</p>
            <p>
              cc: Mr. R. Moses
              <br />
              cc: Mr. C. preusse
              <br />
              cc: Mr. E. Thornton
              <br />
              cc: Mr. E. Witt
              <br />
              cc: Mr. Win. Denny
              <br />
              Central File
              <br />
              WEP File - Expediting
              <br />
              WEP File - World of Food
              <br />
              Reading File
            </p>
          </div>

          <NyplRecordsSource />

          <p className={styles.photoCaptionCenter}>
            Close-up of the tablecloth image (left) and a lacy version (right). The
            World of Food lives on in collectibles!
          </p>

          <div className={styles.tableclothRow}>
            <figure style={{ margin: 0 }}>
              <div style={{ padding: 10, background: "#000" }}>
                <Image
                  src="/images/worfoo09/wof13.jpg"
                  alt="Souvenir Tablecloth"
                  width={200}
                  height={267}
                  className={styles.photoBorder}
                  unoptimized
                />
              </div>
            </figure>
            <div className={styles.grayBody}>
              <p>
                Since the fate of the pavilion was not known until just a few weeks
                before the gates opened, it was impossible to pull its image from
                souvenir licensees with such little notice. Therefore, the World of
                Food can be found on many of the souvenirs, pamphlets and advertising
                materials of the Fair.
              </p>
              <p>
                This tablecloth is just one example of how the <em>phantom</em> World
                of Food Pavilion (second image from the left at the bottom) lives on
                in the history of the Fair without ever having entertained a single
                Fairgoer!
              </p>
            </div>
          </div>

          <p className={styles.sourceLine}>Source: (top) on-line Auction (eBay)</p>
          <p className={styles.sourceLine}>
            Source: (bottom) Richard Post Collection
          </p>

          <div className={styles.tableclothPair}>
            <div style={{ padding: 10, background: "#000" }}>
              <Image
                src="/images/worfoo09/wof14.jpg"
                alt="Tablecloth Image"
                width={150}
                height={123}
                unoptimized
              />
            </div>
            <div style={{ padding: 10, background: "#000" }}>
              <Image
                src="/images/worfoo09/wof15.jpg"
                alt="Tablecloth image"
                width={150}
                height={130}
                unoptimized
              />
            </div>
          </div>

          <p className={styles.photoCaptionCenter}>
            Hershey&apos;s candy bars of the time advertised that company&apos;s
            exhibit at the World of Food. Hershey&apos;s exhibit would be hosted at
            the Better Living Pavilion for the run of the Fair.
          </p>

          <figure className={styles.figureCenter} style={{ maxWidth: 428 }}>
            <Image
              src="/images/worfoo09/wof18.jpg"
              alt="Hershey's wrapper - front"
              width={428}
              height={190}
              className={styles.photoBorder}
              unoptimized
            />
            <p className={styles.sourceLine}>Source: on-line Auction (eBay)</p>
            <Image
              src="/images/worfoo09/wof17.jpg"
              alt="Hershey's wrapper - back"
              width={428}
              height={190}
              className={styles.photoBorder}
              unoptimized
            />
          </figure>

          <div className={styles.webmasterNote}>
            <p>
              <strong>webmaster&apos;s note ... </strong>
              I&apos;d like to thank Mr. Philip Ras for digging into the files of the
              Fair Corporation at the New York Public Library to find this
              information. I&apos;ve long wondered what the story was with The World
              of Food and I suppose other &quot;World&apos;s Fair Nuts&quot; like me
              might be curious as well. Phil has answered a lot of questions by
              finding this information. Thanks for solving a mystery, Phil!
            </p>
            <p>Bill Young - October 26, 2001</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/worfoo08"
        explicitPrevious
        overviewHref="/worfoooverview"
        nextHref="/worfoooverview"
      />
    </>
  );
}
