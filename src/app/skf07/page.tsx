import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/skfEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Why SKF at the Fair? — SKF — nywf64.com",
  description:
    "Why SKF participated in the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF — Why SKF at the Fair?.
 * Body from legacy skf07.html.
 */
export default function Skf07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="SKF">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/skfoverview/hero-banner.jpg"
            alt="SKF pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SkfNavChrome />

      <article className={styles.article} aria-labelledby="skf07-title">
        <header className={styles.titleBar}>
          <h1 id="skf07-title" className={styles.titleBarMain}>
            Why SKF at the Fair?
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf10.jpg"
                alt="Why SKF at the Fair?"
                width={200}
                height={197}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>SKF executive explains company's philosophy on Fair Stuart H. Smith, Vice President and Assistant to the President, presents details of SKF's participation.</p>
            <p>It has been said in critical appraisal of the SKF Pavilion at the New York World's Fair 1964/65, that this Pavilion represents one of the finest examples of pure exposition philosophy on the Fair grounds.</p>
            <p>This opinion is well taken and implies a great many very subtle innovations which must be examined in order to appreciate the excellent marriage of architecture and exhibition which is manifest in the final product.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf09.jpg"
                alt="SKF"
                width={200}
                height={194}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>In order to fully appreciate this Pavilion, it is necessary to examine it from several basic points of view:</p>
            <p>What is the purpose of the Pavilion?</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf03.jpg"
                alt="SKF"
                width={200}
                height={136}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>What problems did the project present?</p>
            <p>How were those problems solved?</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf04.jpg"
                alt="SKF"
                width={200}
                height={136}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>As is the case in most any art form, a set of basic ground rules must be established prior to any attempt to evaluate the project. In the case of the SKF Pavilion, these rules emanated from the decision by SKF Industries management to <em>participate</em> in the Fair. At the beginning, there was a great deal of question as to why a manufacturer of ball and roller bearings, whose market is basically in industry itself, would choose to participate in a fair attended in the vast majority by the general public.</p>
            <p>Official World's Fair area map points up major exhibit areas.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf05.jpg"
                alt="SKF"
                width={200}
                height={135}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>While it is true that the product of our company is the ball and roller bearing, it is equally true that we are concerned with a facet of technical and industrial development which is inseparable from the present and future needs of the public, as well as industry, for smoother, safer and more efficient methods for keeping Man and materials on the move. We call this technique "motion engineering"</p>
            <p>We feel it is important for the public to know about motion engineering and to recognize, of course, that we cannot expect to "sell" bearings as a result of our participation in the Fair but we believe that the exposure of this philosophy to the public and their support of our efforts will return to our company in a tangible form, remuneration in excess of that which we have invested in our Pavilion.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf06.jpg"
                alt="SKF"
                width={200}
                height={135}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>With this philosophy as a precept, the next step was to choose a site on the Fair grounds, which would most adequately suit the needs of the project.</p>
            <p>With the knowledge that SKF could not hope to match the expenditures of the major exhibitors at the Fair, and further because it was determined at the very beginning that it was unnecessary to use huge spaces in order to expose the public, it was agreed that a small space could be selected. Since, by the same token, SKF pre-Fair publicity and promotion would not be of the same magnitude as the larger, consumer products companys, it became essential that a site be chosen so as to permit the general public, while moving from one giant pavilion to the other, to find it equally as convenient to stop at the SKF Pavilion as it would be to walk by it.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf07.jpg"
                alt="SKF"
                width={200}
                height={136}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>With these requirements in mind, a site was chosen in the transportation section of the Fair, midway between the Ford and General Motors Pavilions directly opposite Chrysler Corp. and on the main crosswalk which connect all three of these major exhibits.</p>
            <p>Having thus chosen a site measuring some 7,700 square feet (the General Motors pavilion is approximately 304,000 square feet), a concerted effort was made to examine the many facets of the SKF story in order to lay bare the basic truths which would continue to be the guiding forces throughout the development of the Pavilion itself.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 200 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf07/skf08.jpg"
                alt="SKF"
                width={200}
                height={248}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Stuart Smith indicates broad access to pavilion</p>
            <p>It might be pointed out here that the concept of a Fair pavilion must be determined before the first lines can be drawn, both in terms of the architecture and the exhibit itself.</p>
            <p>In addition, a similar effort was required to adequately portray the image of SKF Industries, an international organization concerned with research, development and production of highly sophisticated components. How to present this immensely technical story in a manner which would permit even the layman to fully appreciate the enormity of the study and application of anti-friction techniques became the job of the concept designers.</p>
            <p>After a period of time, it was finally agreed that the Pavilion would itself present to the public a <em>total</em> feeling of motion, while at the same time the show within the structure would be paced to accentuate the "motion engineering" aspects of the SKF philosophy.</p>
            <h2 className={styles.heading}>PROGRESS PHOTOS ON SITE</h2>
            <p>The last pour on the building foundation</p>
            <p>Iron workers setting the steel</p>
            <p>The architect on his regular tour of inspection</p>
            <p>Framing out the sub roof</p>
            <p>A look into the entrance way</p>
            <p>Since the space could handle no more than a thousand people per hour, it was decided that a twofold presentation would be made to the public; one, a brief but exciting exposition of the relationship between motion engineering and each of us as we work, play and live out the pattern of our daily lives; the second, a technical presentation of the industrial value of the ball and roller bearing as a principle of conveying people and objects more smoothly and more comfortably than ever before, as well as a schematic presentation of the technical problems generic to the study of motion engineering.</p>
            <p>Coincidentally, a study was made of the architectural ramification of the structure in keeping with the exhibit concept and in relation to the size and location of the site.</p>
            <p>Based on the principle that the audience which attended the SKF Pavilion would be drawn to a great degree from the passing traffic and, as mentioned earlier, since it was desirable to make it as convenient as possible for the audience to step into the SKF Pavilion, a broad inviting access to the exhibit was provided which oriented to the corner of the site exposed to two crosswalks.</p>
            <p>Similarly, an analysis was made of the methods by which the greatest utilization could be made of the site without exceeding the rules of the New York World's Fair which provide for adequate landscaping of each Pavilion. In the final analysis, this problem was solved by excavating the entire site and constructing the interiors of the Pavilion several feet below grade.</p>
            <p>In order to create the desired feeling of motion throughout the structure, a floating parasol and soaring tower was designed, and freed from the foundation through the use of a clear glass band between the foundation walls and parasol; thus, a feeling of motion was established in the major architectural elements. At the same time, identification was provided for the SKF Pavilion some eighty feet in the air by simple and tasteful signing of the tower.</p>
            <p>In order to further accentuate this feeling of motion, the balance of the site became covered by a subtle roof structure which called attention to the central parasol and tower.</p>
            <p>Carrying this approach into the structure itself, an ovate theater was designed to envelop the audience with motion and the technical exhibit area was woven into a series of gently curving walls and niches.</p>
            <p>In evaluating the many techniques which were available through which the story of motion engineering could be told, it became apparent that the subject called for a technique which itself utilized motion. With these thoughts in mind, a unique "show" was visualized, scripted, and integrated through the use of multi-speaker sound, music and sound effects and almost two hundred separate animations. The show is presented mainly on a thirty-two foot segment of the theatre wall. however, at one point the <em>entire</em> theater is utilized.</p>
            <p>This show is, in a sense, an abstraction of the principles of motion engineering. In six minutes, some sixty people, seated comfortably on a carpeted, tiered floor, learn of the beginnings of motion engineering, its applications throughout the cross section of American life today and are provided with just a hint of the place that motion engineering will play in the future.</p>
            <p>After this unique presentation, the audience is invited to walk comfortably through the exhibit area, in which specifics of the motion engineering story are picked up and described in detail. Samples of every type of bearing are on display along with actual sections of equipment which rely on roller bearings for long and maintenance free life. Coincidentally, demonstrations of laboratory research and quality control techniques are presented. Finally, the breadth and scope of the international SKF complex is described and located for the audience in graphic dimension.</p>
            <p>Two photos of interior display units</p>
            <p>When the audience has left the SKF Pavilion, they have become acquainted with the entire fascinating story and leave more well informed, both on the nature and concern of SKF Industries and the field of anti-friction study which SKF calls "motion engineering."</p>
            <p className={styles.source}>Source: SKF World's Fair Newsletter</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf06"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skf08"
      />
    </>
  );
}
