import type { Metadata } from "next";
import Image from "next/image";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./gencig06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking — General Cigar — nywf64.com",
  description:
    "Groundbreaking ceremonies for the General Cigar Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar — Groundbreaking.
 * Body from legacy gencig06.html (custom groundbreaking transcription).
 *
 * Stack: hero → GencigNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (Julious, It I told) is preserved.
 */
export default function Gencig06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="General Cigar">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/gencigoverview/hero-banner.jpg"
            alt="General Cigar at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <GencigNavChrome />

      <article className={styles.article} aria-labelledby="gencig06-title">
        <header className={styles.titleBar}>
          <h1 id="gencig06-title" className={styles.titleBarMain}>
            Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.coverFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/gencig06/gencig02.jpg"
                alt="Groundbreaking Cover — General Cigar Pavilion"
                width={600}
                height={385}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.coverCaption}>
              The General Cigar Pavilion, directly across the street from the
              Solar Fountain and Pool, is a rectilinear building amid a
              generously landscaped area. The architect is Cecil A. Alexander,
              F.A.I.A., of Atlanta, Georgia.
            </figcaption>
            <p className={styles.source}>
              SOURCE: Groundbreaking Brochure, The General Cigar Company
            </p>
          </figure>

          <div className={styles.body}>
            <p>
              Excerpts from transcription of remarks made by General Cigar and
              World&apos;s Fair officials at the groundbreaking ceremonies, New
              York World&apos;s Fair, Monday, May 13, 1963.
            </p>

            <p>
              MR. STUART CONSTABLE [Vice President, Operations]: Mr. Cullman, Mr.
              Strauss and members of the General Cigar Co., Inc. It is my pleasure
              to preside at what will be one of the most extraordinary
              groundbreakings to take place on the Fair site. The General Cigar
              Company is the only tobacco company represented here so far, and we
              are delighted to have you. I should like to present a New York
              World&apos;s Fair medallion to Mr. Edgar M. Cullman, president of
              the General Cigar Company, and to Mr. Julious Strauss, chairman of
              the board.
            </p>

            <p>
              Now Mr. Cullman will speak to us and will introduce something in
              the way of groundbreaking which, I understand, will really astound
              all of us.
            </p>

            <figure className={styles.coverFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/gencig06/gencig04.jpg"
                  alt="Stuart Constable presenting medallion to Edgar M. Cullman"
                  width={290}
                  height={286}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.coverCaption}>
                Stuart Constable, vice president in charge of Operations at the
                Fair, presenting the Fair&apos;s medallion to Mr. Edgar M.
                Cullman, president of General Cigar Co., Inc.
              </figcaption>
            </figure>

            <p>
              MR. EDGAR M. CULLMAN [President of the General Cigar Co., Inc.]:
              Thank you, Mr. Constable, ladies and gentlemen. You know, usually
              when you come out to a place where there&apos;s dirt, grass, trees,
              you think about going to a funeral. Looking around here, I don&apos;t
              know exactly what I&apos;m out here for. I presume it&apos;s to
              dedicate our exhibit -- which is not going to be a funeral.
            </p>

            <p>
              We of General Cigar appreciate very much your coming out here to
              share with us our pride in breaking ground for what we think will
              be one of the most entertaining and interesting exhibits of the
              1964-1965 New York World&apos;s Fair. At the same time we believe
              our pavilion will be one of the most peaceful, complementing in
              every way the Solar Fountain and Pool that will be just across the
              road -- a garden and patio will occupy a sizable portion of this
              site, which totals approximately 15,000 square feet. There will be
              plenty of benches around the grounds and two maple trees will remain
              on the site, to beautify and add some shade. There will be nothing
              startling about the appearance of the building, but it will be
              simple, dignified and serene, quite in keeping with the restful
              character of the surrounding landscaping and the Solar Fountain.
            </p>

            <p>
              If our building and grounds accomplish their purpose we&apos;ll make
              a worthwhile contribution to the pleasure and peace of the millions
              of World&apos;s Fair visitors expected a year from now. But there is
              more, much more to the General Cigar Pavilion. I ask you to use your
              imagination in visualizing the interior, because I assure you that
              when you see it completed next year, your imagination again will be
              tested, in many unexpected ways.
            </p>

            <p>
              We are going to have a magic show, conceived by one of the most
              creative magicians in the country, Mark Wilson. Many of you know him
              as the presiding genie on the &quot;Magic Land of Allakazam&quot;
              television show. It I told you much more than this about Mark&apos;s
              magic show he would probably make me disappear in a puff of cigar
              smoke, because he and everybody connected with it are keeping the
              details of this remarkable show completely secret until the Fair
              opens. There will be magic surrounding General Cigar, but I am not
              at liberty to reveal anything more.
            </p>

            <p>
              While magic will be the highlight of the General Cigar Pavilion,
              there will be many other striking things in this building: a variety
              of unusual displays will tell the story of the accomplishment of the
              cigar industry and our company. In the main section of the pavilion
              there&apos;ll be an international bazaar at which World&apos;s Fair
              shoppers will be able to purchase exotic and unusual specialty
              merchandise from all over the world.
            </p>

            <figure className={styles.coverFigure}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/gencig06/gencig05.jpg"
                  alt="Penny Edwards floats as Edgar Cullman and Mark Wilson break ground"
                  width={600}
                  height={384}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.coverCaption}>
                Actress Penny Edwards (Miss Tiparillo) &quot;floats&quot; over the
                site of the General Cigar Pavilion at the Fair as General Cigar
                President Edgar M. Cullman turns the first shovelful of earth at
                the groundbreaking ceremonies. Assisting is magician Mark Wilson,
                producer of the magic show which will be featured in the pavilion.
              </figcaption>
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/gencig05"
        explicitPrevious
        overviewHref="/gencigoverview"
        nextHref="/gencig07"
      />
    </>
  );
}
