import type { Metadata } from "next";
import Image from "next/image";
import { WorfooNavChrome } from "@/components/WorfooNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import { NyplRecordsSource } from "@/components/worfoo/NyplRecordsSource";
import styles from "./worfoo07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Problem was Financing — World of Food — nywf64.com",
  description:
    "The Problem was Financing — World of Food pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.",
};

function Letterhead() {
  return (
    <>
      <p style={{ textAlign: "right", fontWeight: 700, fontSize: "0.8rem" }}>
        The only showplace for foods and beverages at the New York World&apos;s
        Fair
      </p>
      <Image
        src="/images/worfoo07/wof03.jpg"
        alt="Logo"
        width={150}
        height={72}
        unoptimized
      />
    </>
  );
}

export default function Worfoo07Page() {
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

      <article className={styles.article} aria-labelledby="worfoo07-title">
        <header className={styles.titleBar}>
          <h1 id="worfoo07-title" className={styles.titleBarMain}>
            The Problem was Financing
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.letterBox}>
            <Letterhead />
            <p>September 20, 1963</p>
            <p>
              New York Worlds Fair 1964-1965 Corporation
              <br />
              Flushing Meadow Park
              <br />
              Flushing, New York
            </p>
            <p>Gentlemen:</p>
            <p>
              Reference is made to the agreement made and dated September 9, 1963
              between the New York World&apos;s Fair and the World of Food, Inc.
            </p>
            <p>
              After considerable study of the problems outlined in the agreement,
              we have concluded that a reduction in size of the building presently
              planned, by the elimination of the entire second floor, will not
              cause any major changes in the general scheme. We have been able to
              locate all presently signed tenants without endangering the
              acceptability of the space to the tenant. In so doing we are further
              insuring the ability of our general contractor, Charles Miesmer,
              Inc., to complete the building in the required time, including a
              time allowance for exhibit installation. The purpose of this
              reduction is twofold: it reduces the size of the job, the time
              requirement and the amount of the funds necessary for completion,
              without materially reducing the potential income necessary to meet
              the financial obligations of the construction and operation of the
              building.
            </p>
            <p>
              The lending institutions will not recognize either potential rent or
              potential income from sales and are only willing to give a commitment
              for immediate funds for construction based on executed leases, less
              an amount to be held in escrow sufficient to operate the building
              for the first year of the fair. This sum, amounting to approximately
              $400,000 we believe to be adequate not only to operate the building
              as now planned, for the period, but also sufficient money to pay the
              ground rent due the Fair during the period. The fact that additional
              revenues are also anticipated from the operation of the building
              doubly assures these expenditures.
            </p>
            <p>
              We are enclosing a copy of a letter of intent from the Kirkeby-Nasus
              Corporation in which they agree to advance as required for progressive
              payments during construction, a sum of $1.2 million (over and above
              the $400,000 escrow fund) and have embodied therein an escalator
              clause increasing the total sum to be advanced to a maximum $1.7
              million based on our securing additional acceptable leases.
            </p>
            <p className={styles.grayBody} style={{ fontSize: "0.75rem" }}>
              Developed by the WORLD OF FOOD INC., 49 West 37th Street New York
              City 18, N. Y., LW 4-2500
            </p>
          </div>

          <div className={styles.letterBox}>
            <Letterhead />
            <p>-2-</p>
            <p>September 20, 1963</p>
            <p>
              We have received a verbal commitment from Mr. William Goldfine,
              President of the Royal National Bank of New York, that his bank will
              reinstate its offer to advance these funds to the extent of the
              guarantee made by Kirkeby-Natus in the same manner as outlined in
              detail in their letter of June 14, 1963, copy of which is attached.
              It bad been hoped, by the undersigned that we would be able to
              enclose herewith an actual letter of commitment from the bank, but
              the intervention of the Jewish Holidays has delayed us.
            </p>
            <p>
              We are also enclosing herewith a copy of the proposed revised
              contract of Charles Miesmer, Inc. which is contingent upon the
              Kirkeby-Natus method of financing, a copy of the bond which both Mr.
              Miesmer and Crespi Fernandez &amp; Co., brokers for the surety
              company, have assured us can be validated immediately upon proof that
              funds are available, copy of the bar graph showing expected
              construction schedule for the project which has been evolved after
              consultations with the subcontractors.
            </p>
            <p>
              It is respectfully requested that consideration be given to
              permitting the World of Food to continue with its program in order to
              complete its negotiations. It is our sincere belief that we can
              imediate1y move this project forward without delay and can complete
              the pavilion, which we feel will be a credit to the Fair. Further,
              this will enable us to fulfill the definite needs of our more than
              60 exhibitors and tenants who have made extensive plans and sizable
              expenditures to participate. Many of these exhibitors have their
              exhibits under construction now -some has even been completed. The
              continuance of the project would save considerable embarrassment to
              our exhibitors who have publicly advertised in national media and
              publicity programs.
            </p>
            <p>
              May we further state that even though this project has encountered
              repeated delays, we wish to point out that at present pilings are
              completed and foundations are near completion. All of the steel for
              the project, as originally planned, is in New York City and is being
              fabricated in accordance with construction schedules, making very
              realistic the project completion date.
            </p>
            <p>We thank you for your consideration.</p>
            <p style={{ textAlign: "right" }}>
              Very truly yours,
              <br />
              THE WORLD OF FOOD INC.
              <br />
              Lionel K. Levy
              <br />- President
            </p>
            <p className={styles.grayBody} style={{ fontSize: "0.75rem" }}>
              Developed by the WORLD OF FOOD INC., 49 West 37th Street New York
              City 18, N. Y., LW 4-2500
            </p>
          </div>

          <NyplRecordsSource />

          <h2 className={styles.salmonHeading}>
            For The Fair the Problem was The World of Food
          </h2>

          <div className={styles.memoBox}>
            <p>November 14, 1963</p>
            <p>Mr. Martin Stone</p>
            <p>Richard B. Whitney</p>
            <p style={{ fontWeight: 700 }}>WORLD OF FOOD</p>
            <p>
              I have discussed the World of Food situation with Bill Denny in
              detail. He was in touch with the contractor yesterday. The
              contractor, Charles Meismer, says that he has received assurances
              from Lionel Levy that they are going ahead with this project and
              that the foundations will be completed in 10 days to 2 weeks. The
              steel has been delivered and is on the site.
            </p>
            <p>
              It is Denny&apos;s idea to let them complete all of the foundations
              but before they start to erect steel to determine if they have money
              to complete the job. Mr. Levy feels that they ought to have this
              within this period. In the event that they do not have the money, it
              would be a simple matter, according to Mr. Denny, to fill in over
              the foundations but if they were to erect steel and then stop it
              would be a more costly problem to rectify.
            </p>
            <p>
              I discussed this matter again with Mr. Witt this morning that had
              talked to Lionel Levy yesterday. Lionel Levy is now working with the
              Chemical Bank in order to obtain his financing. His deal with the
              Mortgage Insurance Co. of Baltimore apparently was un-satisfactory to
              the bank.
            </p>
            <p>
              Erwin Witt called Gene Mintkiski of the Chemical Bank who was going to
              inquire as to the status of this loan negotiation and to give Erwin
              Witt an educated guess as to whether it would go through
            </p>
            <p>
              I will continue to follow this. As you know, we have a number of calls
              each week from their sub lessees.
            </p>
            <p>
              On the basis of the above, after I have heard from Mr. Witt, I will
              prepare a complete memorandum reporting on this situation to Mr.
              Moses with copies to Erwin Witt and Gen. Potter for your signature.
            </p>
            <p>RBW:db</p>
            <p>
              cc: Gen. File
              <br />
              Ind. File
              <br />
              rff
            </p>
          </div>

          <div className={styles.memoBox}>
            <p style={{ fontWeight: 700 }}>MEMORANDUM</p>
            <p style={{ fontWeight: 700 }}>
              NEW YORK WORLDS FAIR 1964-1965 CORPORATION
            </p>
            <p>
              <strong>DATE:</strong> November 15, 1963
            </p>
            <div className={styles.metaRow}>
              <span>TO:</span>
              <span>MR. ROBERT MOSES</span>
              <span>FROM:</span>
              <span>Martin Stone</span>
              <span>SUBJECT:</span>
              <span>WORLD OF FOOD</span>
            </div>
            <p>
              After some 8 or 10 weeks of intensive work, Lionel Levy of World of
              Food has failed in his latest attempt to get financing. He says he
              has other negotiations under way.
            </p>
            <p>
              World of Food is not behind on rent or other payments to the Fair.
              They are behind on their construction. The status is this:
            </p>
            <p>
              Mr. Levy says he has enough money to complete his foundation, which
              will take from 10 days to 2 weeks. He has steel at the site. He says
              he is putting up some of his own money to finish the foundation work.
            </p>
            <p>
              Bill Denny, Erwin Witt and I agree that we should let Mr. Levy go
              ahead with the foundation but not allow him to erect any steel until
              he furnishes completion bonds and can give us assurances that the
              pavilion will be built and ready on time. If we are to let him proceed
              with the steel work and he fails to complete, the cost to the Fair of
              removal would be considerable. We can, however fill his foundation
              easily.
            </p>
            <p>
              This is a matter of grave concern to all of us because World of Food
              is at the main entrance to the Fair. At this point, however, we have
              no other alternative but to wait a few weeks longer. We are faced
              with the grim prospect of a vacant spot should World of Food fail, and
              we are concerned, too, with the mess which may result, affecting
              lessees such as Lipton Tea, RCA - Whirlpool, Hershey, etc.
            </p>
            <p>MS:cl</p>
          </div>

          <NyplRecordsSource />
        </div>
      </article>

      <Nav2Bar previousHref="/worfoo06" nextHref="/worfoo08" />
    </>
  );
}
