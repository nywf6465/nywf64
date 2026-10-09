import type { Metadata } from "next";
import Image from "next/image";
import { UndrghomeNavChrome } from "@/components/UndrghomeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/undrghomeLegacy.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Epilogue — Underground World Home — nywf64.com",
  description:
    "Bradd Schiffman’s epilogue on earth-sheltered housing after the Underground World Home — nywf64.com.",
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
 * Underground World Home — epilogue by Bradd Schiffman (legacy undrghome09.html).
 */
export default function Undrghome09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Underground World Home">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/undrghomeoverview/hero-banner.jpg"
            alt="Underground World Home at the 1964/1965 New York World’s Fair"
            width={2073}
            height={758}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <UndrghomeNavChrome />

      <article className={styles.article} aria-labelledby="undrghome09-title">
        <header className={styles.titleBar}>
          <h1 id="undrghome09-title" className={styles.titleBarMain}>
            Epilogue
          </h1>
          <p className={styles.titleBarByline}> ... by Bradd Schiffman</p>
        </header>

        <div className={`${styles.articleInner} ${styles.bodyArial}`}>
          <p>
            Underground homes did not disappear after the 60s, they simply
            evolved into &quot;earth sheltered housing.&quot; The oil crisis of
            the 1970s and the subsequent jump in energy prices gave new impetus
            to some time-tested energy saving ideas.
          </p>
          <p>
            No one builds true underground homes anymore; they are called
            &quot;bunkers.&quot; Instead, a concrete shell is built and then
            earth is bermed around three sides and over the roof, leaving one
            wall of windows (usually to the south) exposed. Thus the advantage of
            using the earth as insulation is retained while avoiding the expense
            of excavating underground. A solar heating advantage is gained as
            well as is the psychological advantage of a true view to the outside
            world.
            <br />
            <br />
            The University of Minnesota&apos;s Underground Space Center has
            published several excellent books on the subject:
            <br />
            <br />
            Ahrens, D., T. Ellison and R. Sterling. 1981. Earth Sheltered Homes
            - Plans and Designs.
            <br />
            Underground Space Center, University of Minnesota. New York: Van
            Nostrand Reinhold. ISBN 0-442-28676-7
            <br />
            <br />
            Carmody, J. and R. Sterling. 1985. Earth Sheltered Housing Design,
            2nd Edition. Underground Space Center, University of Minnesota. New
            York: Van Nostrand Reinhold. ISBN 0-442-28746-1
            <br />
            <br />
            Carmody, J. and R. Sterling. 1993. Underground Space Design - A
            Guide for Subsurface Utilization and Design for People in Underground
            Spaces. New York: Van Nostrand Reinhold. ISBN 0-442-01383-3
            <br />
            <br />
            <br />
            In addition, there are several builders that specialize in earth
            sheltered construction:
            <br />
            <br />
            Davis Caves Construction, Inc.
            <br />
            P.O. Box 69
            <br />
            Armington, IL 61721
            <br />
            <a
              href="http://www.daviscaves.com/index.shtml"
              target="_blank"
              rel="noreferrer"
            >
              http://www.daviscaves.com/index.shtml
            </a>
            <br />
            <br />
            Earth Sheltered Technology, Inc.
            <br />
            PO Box 5142{" "}
            <br />
            Mankato, MN 56001
            <br />
            <a
              href="http://www.earthshelteredtech.com/"
              target="_blank"
              rel="noreferrer"
            >
              http://www.earthshelteredtech.com/Default.htm
            </a>
            <br />
            <br />
            Performance Building Systems, Inc.
            <br />
            PO Box 1679
            <br />
            Durango, CO 81302
            <br />
            <a
              href="http://www.earthshelter.com/"
              target="_blank"
              rel="noreferrer"
            >
              http://www.earthshelter.com/
            </a>
            <br />
            <br />
            Home Sweet Earth Home
            <br />
            Rick Ohanian, Earth Home Master
            <br />
            P.O. Box 091161
            <br />
            Columbus, OH 43209-1161
            <br />
            <a
              href="http://www.undergroundhomes.com/home.html"
              target="_blank"
              rel="noreferrer"
            >
              http://www.undergroundhomes.com/home.html
            </a>
            <br />
            <br />
            Finally, here&apos;s a couple who did it themselves:
            <br />
            <a href="http://www.ourcoolhouse.com/" target="_blank" rel="noreferrer">
              http://www.ourcoolhouse.com/
            </a>
          </p>

          <aside className={styles.webmasterBox}>
            <p>
              <strong>Webmaster&apos;s note- </strong>
              A special Thank You to Bill Cotter for presenting this Feature on
              one of the Fair&apos;s more unique exhibits. Bill&apos;s generosity
              in donating photos and memorabilia for inclusion on <BrandMark />{" "}
              Feature Stories is well documented throughout the website. Thanks
              also to Bradd Schiffman for providing an epilogue to the story.
              It&apos;s because of the efforts of Bill, Bradd and other Fair
              enthusiasts that we can keep the memories of the Fair alive. Thank
              you, all.
            </p>
            <p>-Bill Young, April 2003</p>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/undrghome08"
        explicitPrevious
        overviewHref="/undrghomeoverview"
        nextHref="/undrghomeoverview"
      />
    </>
  );
}
