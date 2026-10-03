import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./unisph13.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    'Essay: "I Think we Have a Light Out!" — Unisphere — nywf64.com',
  description:
    "Craig Bavaro’s essay on Unisphere’s capital lights — 1964/1965 New York World’s Fair on nywf64.com.",
};

function BrandMark() {
  return (
    <span>
      <span className={styles.brandNywf}>nywf</span>
      <span className={styles.brandSixtyFour}>64</span>
      <span className={styles.brandDotCom}>.com</span>
    </span>
  );
}

/**
 * Unisphere — Essay: I Think we have a Light Out!
 * Body from legacy unisph13.html. Bottom nywf64.com logo omitted.
 * Stack: hero → UnisphNavChrome → navy title → article → Nav2Bar.
 */
export default function Unisph13Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Unisphere">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/unisphoverview/hero-banner.jpg"
            alt="Unisphere at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UnisphNavChrome />

      <article className={styles.article} aria-labelledby="unisph13-title">
        <header className={styles.titleBar}>
          <h1 id="unisph13-title" className={styles.titleBarMain}>
            Essay: <em>I Think we have a Light Out!</em>
          </h1>
          <p className={styles.titleBarByline}>… by Craig Bavaro</p>
        </header>

        <div className={`${styles.articleInner} ${styles.body}`}>
          <div className={styles.bodyCopy}>
            <p className={styles.dropCap}>
              THE SPECTACULAR LIGHTING EFFECTS of Unisphere included hundreds of
              lights marking the capitals of the countries of the world. After
              the Fair those lights were extinguished never to be lit again. Why
              were the capital lights not retained after the Fair was over?
            </p>
            <p>
              The true story of the capital lights can be revealed here for the
              first time. Recently discovered documents in the New York
              World&apos;s Fair 1964-1965 Corporation archives housed at the New
              York Public Library reveal that the capital lights had major issues
              before the World&apos;s Fair even opened!
            </p>
            <p>
              During the period after construction of Unisphere was completed in
              late 1963 and prior to the opening of the Fair&apos;s first season
              it was discovered that a number of the capital lights would no
              longer illuminate following the long and snowy winter of 1963/1964.
              The World&apos;s Fair Corporation had accepted ownership of
              Unisphere from US&nbsp;Steel and, as the legally responsible owner
              of the globe, had their maintenance staff check all of the wiring
              to make sure everything was properly connected from the control
              board located in the electrical vault beneath Unisphere up through
              the base. After verifying that everything checked out they
              contacted US Steel for help. After much back-and-forth about the
              proper voltage needed to make the lights work, US&nbsp;Steel agreed
              to hire a crane to inspect the lighting fixtures themselves.
            </p>
            <p>
              Much to their dismay they found that some of the Southern
              Hemisphere light fixtures were full of water! This ultimately
              caused the wiring leads in some of the fixtures to corrode and thus
              the lights stopped working. Further complicating the matter was
              the fact that groups of lights were wired in a continuous circuit
              like a set of Christmas tree lights, where if one connection was
              broken the whole circuit wouldn&apos;t light (US&nbsp;Steel
              actually used this very analogy to explain the design).
            </p>
            <p>
              This design flaw caused four of the nine circuits on the globe not
              to light! In an effort to resolve this most unfortunate situation,
              US&nbsp;Steel quickly came to the conclusion that this was an
              isolated issue with the seals on the affected fixtures and they
              made the necessary repairs to put all of the circuits back in
              working order. Everyone involved at US&nbsp;Steel heaved a huge
              sigh of relief and World&apos;s Fair officials accepted their
              explanation and repair without question in the rush leading up to
              the opening of the Fair. Crisis averted ... Or so they thought.
            </p>
          </div>

          <div className={styles.photoBlock}>
            <p className={styles.photoCaption}>
              Lights representing the
              <br />
              capitals of the countries of the world
              <br />
              appear as pinpoints of light
              <br />
              on the surface of Unisphere
              <br />
              in this photo of the
              <br />
              armillary sphere at dusk.
            </p>
            <div>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/unisph13/unisph241.jpg"
                  alt="Unisphere at dusk with capital lights"
                  width={431}
                  height={270}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <p className={styles.photoSource}>
                SOURCE: Commercial Transparency by Photo Lab, Inc. Washington,
                D.C.
              </p>
            </div>
          </div>

          <div className={styles.bodyCopy}>
            <p>
              Fast-forward to just before the opening of the second season of the
              Fair and, once again, World&apos;s Fair officials found themselves
              with a partially dark globe after another long snowy winter. It was
              a well-known fact that the Fair&apos;s coffers were running low and
              budgets were strained after the disastrous attendance of the 1964
              season. The Fair once again contacted US&nbsp;Steel and implored
              them to hire another crane to inspect the lights. This time there
              was much back-and-forth about a design flaw (as alleged by the Fair
              Corporation) versus improper maintenance (as alleged by
              US&nbsp;Steel). After Fair officials pointed out how bad it would
              look for US&nbsp;Steel and their heavily promoted, high profile
              symbol to be partially dark, US&nbsp;Steel finally agreed to pay
              the cost for another crane to inspect the lights. To no ones
              surprise, once again, the electricians discovered that a number of
              lights across the globe were filled with water and the contacts
              had again corroded. US&nbsp;Steel made the necessary repairs and
              the lights came back on across the globe in time for the reopening
              of the Fair.
            </p>
            <p>
              But that&apos;s not the end of the story. After the second set of
              repairs were made and the Fair reopened, Fair officials decided to
              have one of the broken light fixtures sent to their lighting
              consultants at the firm of Hamel &amp;&nbsp;Langer to analyze why
              the lights kept failing. Unfortunately the report they received
              back was not a good one. Much to the horror of Fair officials, the
              consultants found that poor design and shoddy construction were
              the main reasons for the failures and, as such, the fixtures were
              wholly inadequate for the type of outdoor lighting used on
              Unisphere. The primary flaw being the use of various types of
              incompatible metals that lead to a corrosive reaction on the wire
              leads and the seals once the fixtures were exposed to the harsh
              elements of a New York winter.
            </p>
            <p>
              Now Fair officials were in a real quandary. Do they dare go back to
              US&nbsp;Steel and try to get them to pay for a whole new set of
              redesigned lights with the Fair&apos;s closing in sight? Or should
              they just hold their breath hoping that the lights would stay on
              until the Fair closed? Unfortunately, Fair officials made the
              mistake of sitting tight. Of course shortly after the Fair
              reopened a report was received advising Fair officials that all of
              Northern Europe had gone dark! At this point there was much
              discussion amongst various Fair staff about raising the voltage on
              the lights to cause them to cut over to the backup bulbs in the
              fixtures. It may be recalled that self-replacing bulbs in the light
              fixtures was an innovative design feature that US&nbsp;Steel
              proudly touted every chance they got. However there was a very real
              fear that they might end up damaging the fixtures further thus
              causing more or all of the lights to go out on Unisphere. Once
              again Fair officials decided to hold their breath and ignore the
              blackout in Northern Europe in the hope that it wouldn&apos;t
              spread to the rest of the globe. While there is no indication in
              the files that more lights went out or that any further action on
              this matter was ever taken, it&apos;s safe to assume that the saga
              of the malfunctioning lights is why the capital lights were
              disconnected after the Fair was over, never to be seen again.
            </p>
            <p>
              On a side note, all but one light was fixed in the final repair;
              that being the light for Nairobi, the capital of Kenya. This was
              due to the high wind conditions on the day the repairs were made.
              The repair crew was concerned that they could not safely repair
              this particular light. Fair officials reluctantly accepted this in
              light of the fact that the electricians were all aware of a recent
              fatal accident involving one of their own in the equipment vaults
              beneath Unisphere. It appears that the deceased either fell from
              the ladder climbing out or the hatch cover unexpectedly slammed
              shut on him as he was climbing up thus causing him to fall to the
              concrete floor below. It was noted in the official report that the
              tragedy could have been averted if he had been wearing a safety
              harness as required and if the spotter at the surface had not
              momentarily walked away from his post at the fatal moment. As to
              the Kenya light situation, Fair officials actually wrote a memo
              that they distributed amongst themselves stating they doubted
              anyone would notice the burned out light except someone from
              Kenya! And, if they did, the Fair could simply put out a statement
              that it &quot;just burned out.&quot;
            </p>
          </div>

          <aside className={styles.webmasterBox}>
            <p>
              <strong>webmaster&apos;s note: </strong>
              As you might guess, Craig&apos;s special interest is in the
              workings of the 1964-1965 New York World&apos;s Fair Corporation.
              He has made a number of trips to the New York Public Library to
              research the Corporation and we are <em>all</em> the beneficiaries
              of those trips through Craig&apos;s essays at <BrandMark />.
              &quot;Thank You&quot; Craig, for your time and effort to research
              and report on the Fair&apos;s records. These rarely before seen
              documents help to present a more complete picture of the Fair that
              would otherwise never be known!
            </p>
            <p>
              Craig has been a valuable contributor to <BrandMark /> over the
              years. You might also wish to explore Craig&apos;s excellent memoir
              titled{" "}
              <Link href="/stories/worlds-fair-odyssey">
                <em>
                  A World&apos;s Fair Odyssey &amp; An Afternoon of Delight
                </em>
              </Link>{" "}
              about Flushing Meadow Park as it was in the mid 1970s and his
              well-researched essays from the World&apos;s Fair Corporation
              archives including{" "}
              <Link href="/stories/almost-fond-farewell">
                <em>An Almost Fond Farewell</em>
              </Link>{" "}
              - the story of the decision to save a handful of pavilions after
              the Fair ended,{" "}
              <Link href="/stories/records">
                <em>What to do with All of These Records?</em>
              </Link>{" "}
              - the story of how the Fair&apos;s archives were donated to the
              NY&nbsp;Public Library and{" "}
              <Link href="/stories/detailed-models">
                <em>We&apos;re Going to Need Some Really Detailed Models</em>
              </Link>{" "}
              - the story of the scale models of the Fair. Craig has also
              contributed some spectacular aerial photographs of the Fair that
              can be viewed at{" "}
              <Link href="/information/from-the-air">
                <em>The Fair from the Air</em>
              </Link>
              . You can contact Craig via{" "}
              <a href="mailto:CBavaro@aol.com?subject=The Fair's Records">
                email
              </a>
              .
            </p>
            <p>March 17, 2017</p>
          </aside>

          <p className={styles.copyright}>
            © Copyright 2017 Craig Bavaro — do not reprint without permission.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/unisph12"
        explicitPrevious
        overviewHref="/unisphoverview"
        nextHref="/unisph14"
      />
    </>
  );
}
