import type { Metadata } from "next";
import Image from "next/image";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/easkodArticle.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The End of the Fair — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion at the close of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak end-of-the-fair page.
 * Body from legacy easkod21.html. Last topic — NEXT returns to overview.
 */
export default function Easkod21Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Eastman Kodak Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/easkodoverview/hero-banner.jpg"
            alt="Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <EaskodNavChrome />

      <article className={styles.article} aria-labelledby="easkod21-title">
        <header className={styles.titleBar}>
          <h1 id="easkod21-title" className={styles.titleBarMain}>
            The End of the Fair
          </h1>
        </header>
        <div className={styles.articleInner}>
          <p className={styles.headlinePlain}>
            Kodak Pavilion a World&apos;s Fair Success
          </p>
          <p className={styles.kicker}>
            <span className={styles.underline}>FOR IMMEDIATE RELEASE</span> OCT
            15 1965
          </p>
          <p className={styles.body}>
            The Eastman Kodak Company, a pioneer exhibitor at World&apos;s
            Fairs, considers its participation in the 1964-65 New York
            World&apos;s Fair a huge success with all Company objectives
            accomplished, according to Mr. Carroll E. Casey, general manager of
            the Kodak Pavilion.
          </p>
          <p className={styles.body}>
            &quot;This picture-taker&apos;s paradise was the most photographed
            event in history, and the many millions of Fairgoers who visited the
            Kodak Pavilion came away with a new awareness of the achievements of
            the Company in chemicals, fibers and plastics as well as the broad
            spectrum of photography.
          </p>
          <p className={styles.body}>
            &quot;Management&apos;s intent was to dramatize to the world,
            through some 20 exhibits, the fun and ease of picture-taking and the
            role of photography as a medium of international communications. We
            wanted to demonstrate photography&apos;s potential in promoting
            &quot;Peace Through Understanding&quot; -- the theme of the Fair. At
            the same time we hoped to acquire new friends for Kodak,&quot; Mr.
            Casey said.
          </p>
          <p className={styles.body}>
            Regarding the immediate tangible results, the Company reported
            highest sales of camera equipment in its history during the two-year
            Fair season. Kodak distributors, dealers and photofinishers from all
            over the country and abroad confirm the tremendous amount of
            picture-taking that took place which was reflected by the increased
            business they enjoyed from their customers who came to the Fair.
          </p>
          <p className={styles.body}>
            During the past two years the Company introduced its new line of
            Kodak Instamatic still and movie cameras and the Pavilion served as
            a showcase. Heavy emphasis was placed on telling how to take better
            Fair pictures through the Company&apos;s advertising, sales
            promotion and publicity and especially through the Pavilion&apos;s
            Information Center which was staffed by multi-lingual photo
            specialists. In short, the Fair provided a once-in-a-lifetime
            opportunity for dramatic, colorful and exotic pictures. Kodak helped
            many Fairgoers take those pictures.
          </p>
          <p className={styles.body}>
            &quot;The very nature of a World&apos;s Fair permits a company such
            as Kodak to focus attention on the Company&apos;s diversified
            operations in an interesting and dramatic manner that could hardly
            be accomplished in any other way,&quot; he said.
          </p>
          <p className={styles.body}>
            &quot;For instance many people learned for the first time of
            Kodak&apos;s major participation through its subsidiary, Eastman
            Chemical Products Inc., in chemicals, textiles and plastics through
            its movie, &apos;Quest,&apos; which, like Kodak&apos;s feature film
            attraction, &apos;The Searching Eye,&apos; played to capacity
            audiences most of the time. Winner of six Film Festival awards, the
            &apos;Searching Eye&apos; has become the most honored film of the
            Fair.
          </p>
          <p className={styles.body}>
            &quot;Through our Recordak exhibit, &apos;Who&apos;s Who On Your
            Birthday,&apos; the magic of microfilm systems in action entertained
            our visitors and at the same time helped dramatize the increasingly
            important role played by microfilm systems in business, industry and
            government.
          </p>
          <p className={styles.body}>
            &quot;Kodak&apos;s research, development and manufacture of x-ray
            film was dramatized through its display of radiographs taken of the
            Vatican Pavilion&apos;s famous statue, &apos;The Pieta&apos; before
            it was shipped from Rome.
          </p>
          <p className={styles.body}>
            &quot;The role of photography in the graphic arts, in fine art, in
            news dissemination, in education, in entertainment -- all were made
            a little clearer to millions of Fairgoers.&quot;
          </p>
          <p className={styles.body}>
            Other factors of the Fair that, while less tangible, were equally
            important, Mr. Casey said. The Fair had provided an opportunity for
            the general public to become acquainted with the caliber of Kodak
            employees in Rochester and its offices around the country and
            overseas.
          </p>
          <p className={styles.body}>
            Also, through the Pavilion Kodak was privileged to be host to
            countless shareowners who gained a greater insight as to the scope
            and aims of their Company.
          </p>
          <p className={styles.body}>
            One of his most gratifying experiences, Mr. Casey said, was that of
            establishing closer friendships with International Fair
            participants. A major event recently staged at the Kodak Pavilion
            involved the participation of most of the international exhibitors
            and the state of Hawaii.
          </p>
          <p className={styles.body}>
            &quot;The financial community, the press, civic leaders, government
            officials, scientists, educators -- and Mr. and Mrs. Average Citizen
            and their children have been to the Kodak Pavilion. We know a little
            more about them and they know a little more about us,&quot; Mr.
            Casey said.
          </p>
          <p className={styles.source}>
            Source: Press Release, J. Walter Thompason Company, October 15, 1965
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod21/building225.jpg"
              alt="Kodak debris field"
              width={400}
              height={288}
              className={styles.figureImg}
              unoptimized
            />
            <p className={styles.caption}>
              (above)
              <em>
                {" "}
                The Kodak Pavilion, abandoned and debris strewn, waiting for the
                wreckers. A Fairground street in front of the Kodak Pavilion
                devoid of Fairgoers shortly after the close of the Fair in 1965
              </em>{" "}
              (below)
            </p>
          </figure>
          <p className={styles.source}>SOURCE: Photographs by Max Mordecai</p>
          <figure className={styles.figure}>
            <Image
              src="/images/easkod21/building222.jpg"
              alt="Vacant Fairgrounds"
              width={400}
              height={269}
              className={styles.figureImg}
              unoptimized
            />
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/easkod20"
        explicitPrevious
        overviewHref="/easkodoverview"
        nextHref="/easkodoverview"
      />
    </>
  );
}
