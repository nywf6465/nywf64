import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NyplRecordsSource } from "@/components/worfoo/NyplRecordsSource";
import styles from "./worfoo08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Smoking Gun — World of Food — nywf64.com",
  description:
    "The Smoking Gun — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Worfoo08Page() {
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

      <article className={styles.article} aria-labelledby="worfoo08-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo08-title" className={styles.titleBarMain}>
            The Smoking Gun
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLDS FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> January 16, 1964
            </p>
            <div className={styles.metaRow}>
              <span>TO:</span>
              <span>Mr. Moses</span>
              <span>FROM:</span>
              <span>
                Martin Stone, Erwin Witt
                <br />
                John Thornton
              </span>
              <span>SUBJECT:</span>
              <span>WORLD OF FOOD</span>
            </div>
            <p>
              As you are aware, the World of Food project has been a matter of
              grave concern to the Fair at least since the summer of 1963.
            </p>
            <p>
              The World of Food people recognized, although belatedly, the
              seriousness of the situation and have been making, since September of
              1963, various efforts to obtain financing for the project.
            </p>
            <p>
              Yesterday the World of Food, at a lengthy meeting with us, presented
              its final financial plan which, it believes, will enable it to
              proceed with the pavilion.
            </p>
            <p>
              <strong>
                <u>FINANCING PLAN: FIRST ELEMENT: ACCELERATED RENTALS</u>
              </strong>
            </p>
            <p>
              The first element of the plan involves the agreement, on the part of
              sixteen subtenants, to accelerate rental payments amounting to
              approximately $300,000 so that the $300,000 will be payable in four
              equal installments on January 1, February 1, March 1 and April 1,
              1964. These acceleration agreements, however, ARE conditional upon
              other subtenants executing similar agreements sufficient to bring the
              total accelerated rentals to $650,000 by April 1, 1964. Thirteen of
              these subtenants have agreed to an extension of the April 1st date to
              May 1st and to the counting of regular rental payments, falling due
              in April and May, as part of the $650,000 goal necessary to make the
              acceleration agreements effective.
            </p>
            <p>
              The World of Food contends that, in actuality, approximately $850,
              000 rather than the legally necessary minimum of $650, 000 will
              become available to it between now and the opening of the Fair. This
              $850, 000 will consist of cash on hand, regular rental payments and
              accelerated rental payments.
            </p>
            <p>
              <strong>
                <u>FINANCING PLAN: SECOND ELEMENT: CONSTRUCTION CONTRACT</u>
              </strong>
            </p>
            <p>
              The second principal element of the plan relates to arrangements
              contract with World of Food for construction of the pavilion for a
              lump sum of $1,800,000 of which $289,500 has already been paid.
              Except as hereinafter stated, overtime work is not included in this
              $1, 800,000 and is to be billed at cost plus 10%.
            </p>
            <p>
              The Contractor has agreed to substantially complete the work by April
              22, 1964 provided that progress payments totaling a minimum of
              $750,000 are made to him between now and May 10, 1964. He has stated
              orally though not in writing that the commitment to complete the
              building, provided at least $750, 000 is paid to him, includes a
              commitment to put in up to $100, 000 of overtime.
            </p>
            <p>
              The general contractor is a substantial stockholder of World of Food.
            </p>
            <p>
              <strong>
                <u>FINANCING PLAN: THIRD ELEMENT: DEFERALS BY SUBCONTARCTORS</u>
              </strong>
            </p>
            <p>
              A third element of the plan involves agreements on the part of the
              general contractor, two subcontractors and the architect, Mr. Lionel
              Levy (who is also president and a stockholder of World of Food) to
              defer collection of amounts totaling $910,000 until completion of the
              construction contract.
            </p>
            <p>
              <strong>
                <u>CONSTRUCTION FEASIBILITY</u>
              </strong>
            </p>
            <p>
              Mr. Denny has been consulted upon the feasibility of permitting the
              project to continue. He believes that, by working at top speed
              virtually around the clock, the building can be closed in by April
              22nd but cannot be open until middle or late June. Mr. Douglas feels
              an opening date of the middle of August is more likely. Both opinions
              predicated upon the existence of good weather conditions and an
              intensive all out drive for completion.
            </p>
            <p>
              Mr. Denny further points out that the contractor, although willing
              now to promise substantial completion by April 22nd may later insist
              that the tenants, the Fair Corporation or both pay him additional
              funds for overtime men and additional equipment, much in the manner
              of the recent arrangement with Johnson Electric.
            </p>
            <p>
              Mr. Witt is of the opinion, in which Mr. Stone and Mr. Thornton
              concur, that the plan of financing is very thin and leaves little if
              any room for contingencies. For instance, adequate provision does not
              appear to have been made for defraying the heavy overtime costs,
              which will unquestionably be required, even if the building is to be
              open by the middle or end of June. Moreover, unrealistic liquidated
              damages provisions running in favor of the subtenants will
              substantially reduce World of Food&apos;s rentals if--as appears
              inevitable- - the building is not ready at the opening of the Fair.
            </p>
            <p>
              No adequate provision exists in the financial plan for operating
              expenses during the Fair. The assumption apparently is that rentals
              from leases hereafter signed and from the operation of concessions
              will take care of those expenses.
            </p>
            <p>
              Mr. Lionel Levy, President of World of Food, has guaranteed payment
              of $150,000 of the construction contract price. Mr. Levy, however,
              has put very little money into the venture. Contrary to representations
              by World of Food and Mr. Levy that the project would move forward at
              top speed during the past month, progress has been extremely slow,
              presumably because Mr. Levy or the World of Food has failed to
              advance sufficient monies to the contractor.
            </p>
          </div>

          <div className={styles.memoBox}>
            <p>
              After analyzing the documents and data submitted by Mr. Levy and
              World of Food, we are of the opinion that permitting this project to
              proceed would be most inadvisable. It appears extremely questionable
              that the financing is adequate. We have little confidence in the World
              of Food management. It is clear that, if the project goes ahead, we
              shall at the very best have a building directly at the main entrance
              of the Fair, which will not be ready for opening until June 15th.
            </p>
            <p>
              In making a determination on this project, it should be noted that
              various other problems of a non-construction nature exist. One of such
              matters, which have been of major concern, is that many of the World
              of Food&apos;s leases envisage intensive selling activities, which
              would make the project primarily a conglomeration of concessions. For
              example, Mr. Levy has indicated a desire to lease space to &quot;Whitey
              Ford Steak House&quot;, a promotion which Mr. Levy states is one of
              Leonard Ruskin&apos; s projects
            </p>
          </div>

          <NyplRecordsSource />

          <figure className={styles.figureCenter} style={{ maxWidth: 460 }}>
            <p className={styles.photoCaptionCenter}>
              This photograph taken just days before The World of Food was
              demolished looks through the pavilion toward the building&apos;s
              entrance. The zig-zag roof structure of the Fair&apos;s Main Entrance
              building and one of the interlocking towers marking the Fair&apos;s
              entrances can be seen in the background beyond the steel
              superstructure. Work had begun on the pavilion in early 1963 and at
              the time of this photo, only 20% - 30% of the total construction had
              been completed.
            </p>
            <div className={styles.grayTray}>
              <Image
                src="/images/worfoo08/wof06.jpg"
                alt="Framework"
                width={460}
                height={321}
                className={styles.photoBorder}
                unoptimized
              />
            </div>
          </figure>

          <NyplRecordsSource />

          <h2 className={styles.salmonHeading}>The Fair Takes Action</h2>

          <div className={styles.letterBox}>
            <p>January 16, 1964</p>
            <p>
              <strong>CERTIFIED MAIL</strong>
            </p>
            <p>
              The World of Food, Inc
              <br />
              49 West 37th Street
              <br />
              New York 18, New York
            </p>
            <p>Gentlemen:</p>
            <p>
              Reference is made to the agreement of lease (hereinafter referred to
              as &quot;Agreement&quot;) of February 26, 1962, between New York
              World&apos;s Fair 1964 - 1965 Corporation (hereinafter referred to as
              the &quot;Fair Corporation&quot;) and The World of Food, Inc.
              (hereinafter referred to as &quot;Lessee&quot;) as last Amended by
              Amendment No. 3 dated December 16, 1963.
            </p>
            <p>
              As you know, Amendment No. 2 to your Agreement dated September 9,
              1963 contemplated that you would submit a proposal for continuation
              of your project on or before September 20, 1963 including a plan of
              financing, performance bond, and construction schedule. By reason of
              your failure of execution of an Amendment to the Agreement embodying
              such plan, the Agreement was terminated by the Fair Corporation by
              letter to you dated December 6, 1963.
            </p>
            <p>
              By Amendment No. 3 to the Agreement, dated December 16, 1963, the
              Fair Corporation&apos;s December 6, 1963 letter of termination was
              rescinded and the Agreement, as amended to and including Amendment No.
              2 of September 9, 1963, was reinstated. In said Amendment No. 3, the
              Fair Corporation agreed not to exercise it&apos;s absolute right to
              terminate the Agreement until December 20 1963.
            </p>
            <p>
              You have not, as required by Amendment No. 3 proceeded with due
              diligence in the construction of your pavilion since the execution of
              such Amendment.
            </p>
            <p>
              On January 15, 1964, you submitted to the Fair Corporation a plan
              dealing with financing and construction of the project. The Fair
              Corporation has carefully examined such plan and found it unsatisfactory.
            </p>
            <p>
              The Fair Corporation hereby notifies you that your Agreement is
              terminated effective immediately.
            </p>
            <p>
              Very truly yours,
              <br />
              NEW YORK WORLD&apos;S FAIR
              <br />
              1964-1965 CORPORATION
            </p>
            <p>
              By: <strong>W. E Potter</strong>
              <br />
              Executive Vice President
            </p>
          </div>

          <div className={styles.letterBox}>
            <p>January 18, 1964</p>
            <p>
              <strong>CERTIFIED MAIL</strong>
            </p>
            <p>
              Mr. Lionel K. Levy
              <br />
              158 East 36th Street
              <br />
              New York, New York
            </p>
            <p>Dear Mr. Levy:</p>
            <p>
              Reference is made to the agreement of December 16, 1963 between New
              York World&apos;s Fair 1964 - 1965 Corporation (hereinafter referred
              to as the &quot;Fair Corporation&quot;) and you.
            </p>
            <p>
              You are hereby notified that the Fair Corporation has, by notice
              dated January 16, 1964 terminated the lease between it and The World
              of Food, Inc. The Fair Corporation will accordingly look to you for
              the discharge of your obligations under
              <br />
              Of December 16, 1963.
            </p>
            <p>
              You are further notified that you are in default under said agreement
              of December 16, 1963 by reason of your failure to deposit the security
              payments therein required to be deposited by you.
            </p>
            <p>Very truly yours,</p>
            <p>
              New York World&apos;s Fair
              <br />
              1964 -1965 Corporation
            </p>
            <p>
              Executive Vice.
              <br />
              <strong>W.E. Potter</strong>
            </p>
          </div>

          <NyplRecordsSource />
        </div>
      </article>

      <Nav2Bar previousHref="/worfoo07" nextHref="/worfoo09" />
    </>
  );
}
