import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougt10.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Trend Setting Home — House of Good Taste — nywf64.com",
  description:
    "An Architect's Trend-Setting Home for the Fair — Look Magazine, February 11, 1964 — House of Good Taste on nywf64.com.",
};

/** Body from legacy hougt10.html. Layout altered slightly for web readability (per legacy SOURCE). */
export default function Hougt10Page() {
  return (
    <>
      <section className={styles.hero} aria-label="House of Good Taste">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/hougtoverview/hero-banner.jpg"
            alt="House of Good Taste at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HougtNavChrome />

      <article className={styles.article} aria-labelledby="hougt10-title">
        <header className={styles.titleBar}>
          <h1 id="hougt10-title" className={styles.titleBarMain}>
            Trend Setting Home
          </h1>
        </header>

        <div className={`${styles.articleInner} ${styles.wideInner}`}>
          <div className={styles.body}>
            <h2 className={styles.leadHead}>
              An Architect&apos;s Trend-Setting
              <br />
              Home for the Fair
            </h2>
            <p className={styles.quote}>
              <em>
                &quot;They say people are fundamentally interested in only three
                things - food, sex and shelter. I can&apos;t say I&apos;m
                authoritative on the first two, although I&apos;m in favor of
                both. It&apos;s shelter that concerns me, and it&apos;s nice to
                be doing something people are interested in.&quot;
              </em>{" "}
              - Edward Durell Stone
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/hougt10/hougt44.jpg"
                alt="Architectural Model"
                width={560}
                height={419}
                className={styles.figureArt}
                unoptimized
              />
              <figcaption className={styles.figureCaption}>
                <p className={styles.credit}>
                  produced by John Peter
                  <br />
                  photographed by Phillip Harrington
                </p>
                <p className={styles.source}>
                  SOURCE: <em>Look</em> Magazine, February 11, 1964 (layout
                  altered slightly for web readability)
                </p>
              </figcaption>
            </figure>

            <p>
              Architect Edward Durell Stone, whose U.S. pavilion was the hit of
              the 1958 Brussels World&apos;s Fair, has every reason to be
              confidently relaxed about the home he has designed for this
              World&apos;s Fair. Sharing a landscaped site with a traditional
              and a contemporary house in The House of Good Taste exhibit, it
              will be visited by more people than any other all-out modern home
              in history and may well be the most influential, thought-provoking
              home ever built. Shown above is the scale model.
            </p>
            <p>
              Those who prefer a traditional house might dismiss this one as too
              modern. Those who prefer modern design might quickly label it as
              too conservative and formal. Both judgments would be hasty. For,
              paradoxically, Stone&apos;s trend-setter offers a striking answer
              to America&apos;s most modern problem - the density dilemma - in a
              traditional way that dates back to ancient Mediterranean cultures.
            </p>
            <p>
              The World&apos;s Fair House is a three-dimensional dramatization of
              Stone&apos;s deeply felt convictions about how people will live. As
              he explains it: &quot;If the colonies had been settled by the
              French or Spanish, we would have fallen heir to a completely
              different tradition. The ancient Pompeians, for example, built
              their houses wall to wall, presenting a solid front to the street.
              Behind this stretched a beautiful atrium (a lighted room) and an
              open courtyard with all the rooms grouped around it.&quot; Adapting
              this idea, Stone created a house that looks inward and develops its
              personality from the character of the individual family. Walls
              enclose virtually all of the site. Windows look out on the
              cloistered gardens that serve as buffer zones between street and
              neighbors.
            </p>
            <p>
              However, our housing traditions are Anglo-Saxon. Our Colonial
              ancestors sought to live in the manner of the English country squire
              - a freestanding house on a private plot of land. &quot;As a
              result,&quot; says Stone, &quot;the suburbs of our cities are today
              being used up by little boxes set on handkerchief lawns ... which
              is the most impractical way in the world to build dwellings. I
              think we should stop kidding ourselves and recognize that our land
              is very precious. We had better cloister our houses and be less
              wasteful of it. By building wall to wall, with enclosed courtyards,
              we also gain that other precious commodity so essential to peace
              and tranquility - privacy.&quot;
            </p>

            <div className={styles.planGrid}>
              <figure className={styles.planMain}>
                <Image
                  src="/images/hougt10/hougt45.jpg"
                  alt="Edward Durell Stone"
                  width={300}
                  height={453}
                  className={styles.figureArt}
                  unoptimized
                />
                <figcaption className={styles.smallCaption}>
                  (Above) This view of Fair house model in Stone&apos;s New York
                  City drafting room shows square roof with latticed overhang,
                  central glass dome. Walls to property lines enclose open
                  courtyards off each corner bedroom.
                </figcaption>
                <figcaption className={styles.smallCaption}>
                  (Right) These three compact plans show how the Fair house can
                  be built wall to wall in space-saving cluster communities
                  without loss of privacy. Center version uses atrium as living
                  room; bottom, without dining room, is three bedroom plan.
                </figcaption>
              </figure>
              <div className={styles.planStack}>
                <Image
                  src="/images/hougt10/hougt46.jpg"
                  alt="Model - Plan I"
                  width={250}
                  height={263}
                  className={styles.figureArt}
                  unoptimized
                />
                <Image
                  src="/images/hougt10/hougt47.jpg"
                  alt="Model - Plan II"
                  width={250}
                  height={221}
                  className={styles.figureArt}
                  unoptimized
                />
                <Image
                  src="/images/hougt10/hougt48.jpg"
                  alt="Model - Plan III"
                  width={250}
                  height={220}
                  className={styles.figureArt}
                  unoptimized
                />
              </div>
            </div>

            <h2 className={styles.subHead}>
              A Home with Three Plans for Privacy
            </h2>
            <p>
              Edward Durell Stone&apos;s World&apos;s Fair House is significant
              for two reasons: He tackles the fundamental problem posed by our
              soaring population - the need to live closer together. His solution
              is a house of beautiful simplicity and style. It centers around a
              spacious atrium, a 1,026-square-foot room with a 22-foot faceted
              glass dome. (The all-out World&apos;s Fair version will include a
              6-foot circular reflecting pool.) This is the heart of the home
              and the key to Stone&apos;s design. All other rooms are planned
              around the central core, as shown in illustrations at right. These
              give you a clue to the house&apos;s versatility, but none to its
              warmth and livability.
            </p>
            <p>
              The real house at the Fair will feature many innovations, from
              rugged new white wall paneling on the exterior to oil-finished
              teak panels on the interior. It will be handsomely furnished by
              decorator Sarah Hunter Kelly, from fine art to a fine kitchen;
              landscaped for minimum maintenance by Clarke &amp; Rapuano, with
              flowering trees and rose gardens off each bedroom.
            </p>
            <p>
              Not everyone will find this his &quot;perfect&quot; house. But all
              will agree that Stone has designed something exciting to see and
              challenging to think about. After all, that&apos;s why we have
              World&apos;s Fairs.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt09"
        overviewHref="/hougtoverview"
        nextHref="/hougt11"
      />
    </>
  );
}
