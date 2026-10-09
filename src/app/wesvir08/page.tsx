import type { Metadata } from "next";
import Image from "next/image";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wesvir08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — West Virginia — nywf64.com",
  description:
    "Epilogue — Is There a World's Fair Legacy in Charleston? — West Virginia at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia — Epilogue essay by Bill Young.
 * Body from legacy wesvir08.html.
 *
 * Stack: hero → WesvirNavChrome → navy title → article → Nav2Bar.
 */
export default function Wesvir08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="West Virginia">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/wesviroverview/hero-banner.jpg"
            alt="West Virginia pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <WesvirNavChrome />

      <article className={styles.article} aria-labelledby="wesvir08-title">
        <header className={styles.titleBar}>
          <h1 id="wesvir08-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            Is There a World&apos;s Fair Legacy in Charleston?
          </h2>
          <p className={styles.byline}>by: Bill Young</p>

          <figure className={styles.figure}>
            <Image
              src="/images/wesvir08/wesvir20.jpg"
              alt="Artist's rendering"
              width={335}
              height={166}
              className={styles.photoImg}
              unoptimized
            />
          </figure>

          <div className={styles.body}>
            <p>
              Both the <em>Invitation to West Virginia</em> pamphlet recreated
              on Page Four and the Pavilion Brochure handed out to Fair visitors
              recreated on Page Five state that the West Virginia Pavilion would
              be returned to Charleston following the Fair to become a &quot;State
              Museum and Archives in the Capitol area.&quot; Does that mean a piece
              of the World&apos;s Fair is in the West Virginia Capitol?
            </p>
            <p>
              Well, not exactly. I wrote to Mr. Joe Geiger, Director of the West
              Virginia Archives, to ask if the pavilion had ever been returned to
              Charleston. Mr. Geiger sent the following newspaper report from the
              Archive&apos;s files:
            </p>
          </div>

          <blockquote className={styles.blockquote}>
            <p>
              <em>
                WV&apos;s participation in the New York World&apos;s Fair involved
                the construction of an elaborate separate pavilion with a
                pergola-like extension providing landscaped gardens. The pavilion
                included an Aviary containing cardinals; a Four Seasons Vacation
                Land Exhibit; a Wood Exhibit; a Simulated Coal Mine; a Glass
                Blowing Exhibit; &amp; the Radio Astronomy Sky. A gift shop &amp;
                refreshment area featured WV foods &amp; gifts. A brochure for the
                1964-1965 New York World&apos;s Fair reported that the pavilion
                would be dismantled and reconstructed in the Capital area of
                Charleston as a state museum &amp; archives. However, plans for
                the pavilion have been controversial &amp; costly. Because costs
                exceeded their estimate, the governor placed the pavilion under a
                board composed of state officers with Julius W. Singleton, Jr. as
                the director. Visitors at the fair were impressed with the
                pavilion and officials ranked it among the top sites at the fair.
                Finally, it was decided that the pavilion would become the State
                Museum for Natural Resources at WVU (Monongalia County), but in
                1967 the wood was donated to the State FFA Camp at Cedar Lakes
                (Jackson County) because funds were not allocated to reassemble
                the building.
              </em>
            </p>
            <cite>
              From: <u>West Virginia in the New York and Knoxville World&apos;s Fairs</u>
              , September 4, 1982 - West Virginia Hillbilly (newspaper)
            </cite>
          </blockquote>

          <div className={styles.body}>
            <p>
              As is the case with so many of the Fair pavilions that were reported
              to have been sold after the Fair with plans to be re-erected at
              another site, it never happened. I&apos;m sure high New York union
              costs associated with the careful disassembly of a pavilion played a
              huge role in this outcome for many of those pavilions. In West
              Virginia&apos;s case, it appears that the pavilion was relocated to
              West Virginia but the State was unwilling to allocate the funds for
              it&apos;s reconstruction. The natural West Virginia wood that the
              state so proudly displayed at the Fair was the only thing eventually
              salvaged. One can imagine the rest went for scrap like so much of
              the rest of the Fair.
            </p>
            <p>
              So if you ever get a chance to visit the FFA Camp at Cedar Lakes in
              Jackson County, West Virginia, take a close look. You might see
              something from the West Virginia Pavilion of the New York
              World&apos;s Fair!
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/wesvir08/wesvir03.jpg"
              alt="West Virginia Exhibition emblem"
              width={167}
              height={124}
              className={styles.photoImg}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wesvir07"
        explicitPrevious
        overviewHref="/wesviroverview"
        nextHref="/wesviroverview"
      />
    </>
  );
}
