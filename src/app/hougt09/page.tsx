import type { Metadata } from "next";
import Image from "next/image";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./hougt09.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Selected Biographies — House of Good Taste — nywf64.com",
  description:
    "Selected biographies related to The House of Good Taste — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt09.html. */
export default function Hougt09Page() {
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

      <article className={styles.article} aria-labelledby="hougt09-title">
        <header className={styles.titleBar}>
          <h1 id="hougt09-title" className={styles.titleBarMain}>
            Selected Biographies
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <h2 className={styles.sectionHead}>Edward Durell Stone</h2>
            <p>
              <strong>born March 9, 1902, Fayetteville, Ark., U.S.</strong>
              <br />
              <strong>died Aug. 6, 1978, New York City</strong>
            </p>
            <p>
              American architect who directed the design of a number of
              significant modern buildings.
            </p>
            <p>
              Stone studied art at the University of Arkansas, Fayetteville, in
              1920–23 and architecture at Harvard University and the
              Massachusetts Institute of Technology. In 1927 he won a two-year
              scholarship that enabled him to study and travel in Europe, and
              during that period he was exposed to the modern movement in
              architecture there. In 1930 Stone joined the New York firm
              responsible for the design of Radio City Music Hall. He organized
              his own architectural firm in 1936. He participated in the design
              of the Museum of Modern Art (1937), the first building in New York
              City in the International Style. After World War II, in which he
              served as chief of planning and design for the U.S. Army Air Corps,
              he became an associate professor of architecture at Yale University
              (1946–52).
            </p>
            <p>
              Among Stone&apos;s best-known buildings outside the United States
              are El Panama Hotel, Panama City, Panama (1946), notable for its
              pioneering use of cantilevered balconies in the construction of a
              resort hotel; the U.S. Embassy in New Delhi (1954); and the
              Nuclear Research Center, near Islamabad, Pak. (1966). The embassy
              in New Delhi, with its lacy grilles and an inner water garden,
              fountains, and islands of plantings, was well received and led to
              many foreign commissions. His design for the American Pavilion for
              the Brussels World&apos;s Fair of 1958, a circular structure 340
              feet (104 m) in diameter with a free-span translucent roof, also
              attracted attention.
            </p>
            <p>
              Examples of Stone&apos;s work in the United States include the Fine
              Arts Center, University of Arkansas (1948); the Gallery of Modern
              Art, formerly housing the Huntington Hartford collection (1959; now
              the New York Cultural Center) in New York City; the National
              Geographic Society headquarters (design completion 1961) in
              Washington, D.C.; and the John F. Kennedy Center for the
              Performing Arts (1971), also in Washington, D.C. His skyscrapers
              include the 50-story General Motors Tower in New York City (design
              completion 1964) and the 80-story Standard Oil (Indiana) Tower in
              Chicago (1974; now the Amoco Building).
            </p>
            <p>
              Stone&apos;s autobiography, The Evolution of an Architect, was
              published in 1962.
            </p>
            <p className={styles.source}>
              Source: &quot;Edward Durell Stone.&quot; Encyclopædia Britannica.
              2004. Encyclopædia Britannica Premium Service. 1 Sept. 2004
              &lt;http://www.britannica.com/eb/article?eu=71610&gt;
            </p>

            <hr className={styles.rule} />

            <div className={styles.splitBio}>
              <div>
                <p>
                  <strong>Ellen McCluskey</strong> Associates was founded by{" "}
                  <strong>Ellen Lehman McCluskey</strong> in 1948 in New York. As
                  an heir of the Lehman family, of Lehman Brothers fame, Mrs.
                  McCluskey was granted access to many of the country&apos;s
                  Fortune 500 business and social leaders. The company became one
                  of the leading interior design firms in the country and over
                  the years Ellen McCluskey Associates became internationally
                  known for its hotel interiors, corporate and commercial
                  installations, and high-end residential clients.
                </p>
                <p className={styles.source}>
                  Source: http://www.mccluskeydesigngroup.com/historyframe2.html
                </p>
              </div>
              <Image
                src="/images/hougt09/hougt38.jpg"
                alt="Ellen Lehman McCluskey"
                width={119}
                height={123}
                className={styles.portrait}
                unoptimized
              />
            </div>

            <hr className={styles.rule} />

            <p>
              Mrs.George Tuckerman Draper, otherwise known as,{" "}
              <strong>Dorothy Draper</strong> became one of the most successful
              interior decorators of the 1930&apos;s and 40&apos;s. She is
              credited as a significant historical figure in the development of
              the interior design profession and redefined the role of the
              decorator from 1925 to 1960. She increased the exposure of women
              in the interior decorating world and of interior decorators, by
              aggressively pursuing large-scale public commissions, which was an
              area that was previously exclusive to architects.
            </p>
            <p className={styles.source}>
              Source: http://www.frederickcooper.com/news02.html
            </p>

            <hr className={styles.rule} />

            <h2 className={styles.sectionHead}>Royal Barry Wills</h2>
            <p>
              Royal Barry Wills won many awards in national design contests and
              had attention-winning articles published in large popular magazines.
              Professional journals ran many illustrated pieces about him and his
              work. It has been said that he &quot;wanted only to design the New
              England house supremely well and succeeded beyond any other
              architect.&quot;
            </p>
            <p>
              He grew up in Melrose, Massachusetts, studied four years in the
              class of 1918 of Massachusetts Institute of Technology, served in
              the Navy and then worked for William Cramp &amp; Sons shipyard
              until he joined the Turner Construction Company in the design
              department. A Boston newspaper published a series of his articles
              and sketches. This brought him clients who liked his plans and
              elevations.
            </p>
            <p>
              He won many prizes and awards in competitions for small houses. At
              the White House, in 1932, the President presented him with a Gold
              Medal for outstanding work in domestic architecture.{" "}
              <em>Life Magazine</em> chose him as one of eight architects to
              design the houses presented to millions of its readers.
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                <em>
                  &quot;It could almost be called a cult - so great remains the
                  affection in the housing industry for Royal Barry Wills. Few,
                  if any, architects ever commanded such a following - years
                  after his death. His name is still alive, practically the
                  symbol of the ultimate objective in the hopes of countless
                  couples planning or buying a house. This tribute. . . belongs
                  in no small measure to his associates, . . . who are adding
                  their individual design talents to the task of improving our
                  environment.&quot;
                </em>
              </p>
              <p>-William E. Dorman, Real Estate Editor, Boston Herald Traveler</p>
            </blockquote>
            <p className={styles.source}>
              Source: dustjacket, <u>Houses for Good Living</u> by Royal Barry
              Wills Associates, Architectural Book Publishing Company, Stamford,
              CT., 1993.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/hougt08"
        overviewHref="/hougtoverview"
        nextHref="/hougt10"
      />
    </>
  );
}
