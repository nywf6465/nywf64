import type { Metadata } from "next";
import Image from "next/image";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./coke11.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Refresher May-June 1964 — Coca-Cola — nywf64.com",
  description:
    "The Refresher May-June 1964 — Coca-Cola pavilion magazine article from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola — The Refresher May-June 1964.
 * Body from legacy coke11.html (magazine article with interleaved photos).
 * Legacy wording (Rio de Janerio, its one of the best, lines with colorful,
 * drop-cap T in The) preserved.
 *
 * Stack: hero → CokeNavChrome → navy title → article → Nav2Bar.
 */
export default function Coke11Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Coca-Cola">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/cokeoverview/hero-banner.jpg"
            alt="Coca-Cola at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <CokeNavChrome />

      <article className={styles.article} aria-labelledby="coke11-title">
        <header className={styles.titleBar}>
          <h1 id="coke11-title" className={styles.titleBarMain}>
            <em>The Refresher</em> May-June 1964
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.headline}>
            People by the Thousands
            <br />
            visit our Pavilion daily
          </h2>

          <div className={styles.lead}>
            <figure className={styles.figure}>
              <Image
                src="/images/coke11/coke21.jpg"
                alt="Clearwater (Fla.) Senior High School Band"
                width={300}
                height={364}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Clearwater (Fla.) Senior High School Band gave concert in front
                of The Coca-Cola Company Pavilion in gratitude to St. Petersburg
                Coca-Cola Bottling Company, which gave band members free Coke for
                trip to the Fair.
              </figcaption>
            </figure>

            <div className={styles.body}>
              <p>
                <span className={styles.dropCap}>T</span>
                he New York World&apos;s Fair -- biggest, grandest, costliest,
                most spectacular, most dazzling fair in history -- is now in full
                swing, and The Coca-Cola Company Pavilion there is a smash hit!
              </p>
              <p>
                Every day, thousands of people, from toddling tots to tottering
                oldsters, walk through the Pavilion and view with exclamations of
                delight the &quot;Global Holiday&quot; exhibit -- re-creations of
                the sights, sounds and smells of exotic places around the world.
              </p>
              <p>
                Fairgoers are thrilled, too, by the music of the world&apos;s
                largest and finest carillon which peals from the 120-foot
                Coca-Cola Tower rising in the center courtyard of the Pavilion.
                They crowd around the giant console enclosed in glass at the base
                of the tower to watch John Klein, musical director, and other
                master carillonneurs perform periodically.
              </p>
            </div>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke20.jpg"
              alt="Teen-agers at Refreshment Booth"
              width={600}
              height={340}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Teen-agers crowd around the refreshment booth at our Pavilion to
              order Coke, Sprite, TAB, and Fanta flavors.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke22.jpg"
              alt="K2US Station"
              width={360}
              height={151}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Ham operators all over the world tune in on the World&apos;s Fair
              by contacting K2US, the station in The Coca-Cola Company Pavilion.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The World&apos;s Fair -- first billion-dollar fair in history --
              has superlatives galore. Besides the world&apos;s&nbsp;largest
              carillon, it has the largest globular structure ever built by man
              -- the 12-story-high stainless steel Unisphere, symbol of the fair.
              It has the world&apos;s most powerful searchlight beam . . . the
              world&apos;s largest fountain . . . a mammoth sky-dome spectacular
              on the biggest projection screen in the world . . . the
              world&apos;s largest outdoor photographic prints . . . and many of
              the latest marvels of science and industry.
            </p>
            <p>
              Theme of the fair is &quot;Peace Through Understanding.&quot; Both
              educational and entertaining, the fair offers a look into the past,
              a survey of the present and a peep into the future. It&apos;s a
              report to the world on the achievements and aspirations of man.
            </p>
            <p>
              The &quot;Global Holiday&quot; exhibit in The Coca-Cola Company
              Pavilion provides close-up views of interesting places in
              today&apos;s world. The exhibit has attracted many prominent
              persons, such as Mrs. Jacqueline Kennedy, 6-year-old Caroline
              Kennedy, actress Carol Channing, columnist Inez Robb, TV and radio
              stars Arthur Godfrey, Arlene Francis and Betty Furness, as well as
              countless members of school groups, Boy Scouts, Girl Scouts, club
              members and individuals.
            </p>
            <p>
              Visitors are unanimously enthusiastic about the round-the-world
              tour.
            </p>
            <p>&quot;Wonderful!&quot; proclaimed a pretty young mother.</p>
            <p>
              &quot;Marvelous,&quot; exclaimed a gray-haired businessman.
            </p>
            <p>
              &quot;Fascinating!&quot; was the verdict of a college student.
            </p>
            <p>&quot;It&apos;s real cool,&quot; said a crewcut teen-ager.</p>
            <p>
              One of the highest compliments given the &quot;Global
              Holiday&quot; exhibit is by those who complete the tour and then
              say: &quot;Now let&apos;s go through it again!&quot;
            </p>
            <p>
              <em>Time</em> magazine published a comprehensive report on the
              various exhibits and concluded that &quot;the fair&apos;s best trip
              of all&quot; is at the Coca-Cola Pavilion.
            </p>
          </div>

          <div className={styles.photoPair}>
            <figure className={styles.figure}>
              <Image
                src="/images/coke11/coke23.jpg"
                alt="Refreshment Booth"
                width={275}
                height={227}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                The refreshment booth in the court of The Coca-Cola Pavilion is a
                popular spot for young and old alike.
              </figcaption>
            </figure>
            <figure className={styles.figure}>
              <Image
                src="/images/coke11/coke24.jpg"
                alt="Caroline and Mrs. Kennedy"
                width={275}
                height={287}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Mrs. John F. Kennedy and Caroline visited our Pavilion with
                George Biddick, vice president and manager of The Coca-Cola
                Company Pavilion, and Thomas J. Deegan, chairman of the New York
                World&apos;s Fair Executive Committee.
              </figcaption>
            </figure>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke25.jpg"
              alt="Coke gold cup"
              width={180}
              height={119}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Fair visitors drink Coke from golden goblets. This gold
              foil-covered, plastic-lined cup is first of its kind produced
              commercially.
            </figcaption>
          </figure>

          <div className={styles.holidayRow}>
            <figure className={styles.figure}>
              <Image
                src="/images/coke11/coke27.jpg"
                alt="Kipke and Duffield"
                width={360}
                height={160}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Harry G. Kipke, president and general manager of Refreshment at
                the Fair, and Ted Duffield, creative director for The Coca-Cola
                Company Pavilion, welcome visitors.
              </figcaption>
            </figure>
            <h3 className={styles.holidayTitle}>
              <span>Our</span>
              <span>Global</span>
              <span>Holiday</span>
            </h3>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke26.jpg"
              alt="Taj Mahal scene"
              width={600}
              height={525}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The Taj Mahal, complete with an Indian garden and fountains, is
              part of the &quot;Global Holiday&quot; exhibit
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke28.jpg"
              alt="Hong Kong scene"
              width={600}
              height={320}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              A street in Hong Kong lines with colorful Chinese shops is among
              the exotic places re-created in our Pavilion.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke29.jpg"
              alt="Bavaria scene"
              width={525}
              height={275}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              &quot;Global Holiday&quot; tourists are transported to beautiful
              Bavaria where they find a typical ski lodge and scenic vistas of
              fir trees and snow-capped peaks in the Alps.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke30.jpg"
              alt="Bavarian Hostess Helene Guinsbourg"
              width={384}
              height={207}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Pretty Helene Guinsbourg, hostess in the Bavarian ski lodge, serves
              refreshing Coke to thirsty tourist.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              The <em>Time</em> reporter described the &quot;Global Holiday&quot;
              in this way: &quot;Visitors walk at their own speed, not through a
              miniscule world, but through a life-sized re-creation -- complete
              with smells and temperature changes -- of five exotic scenes: a
              street in Hong Kong, a vista of the Taj Mahal, a lush Cambodian
              rain forest, an Alpine ski lodge, a cruise ship moving into the Rio
              de Janerio harbor.&quot;
            </p>
            <p>
              Visitors entering The Coca-Cola Pavilion are greeted by a sign:
              &quot;WELCOME -- We cordially invite you to visit some of the
              exciting places in that wonderful world of refreshment where the
              products of The Coca-Cola Company are just around the corner from
              anywhere.&quot;
            </p>
            <p>
              George Biddick, exhibit manager, accompanied Mrs. Jacqueline
              Kennedy and her party through the &quot;Global Holiday&quot;
              exhibit, and he quoted her as saying she thoroughly enjoyed the
              tour. She was particularly impressed by the Cambodian rain forest,
              the Bavarian ski lodge and the street in Hong Kong.
            </p>
            <p>
              One of the pretty young hostesses in The Coca-Cola Company
              Pavilion, 19-year-old Judy Mellina, said she thought she was
              greeting &quot;just another family group&quot; when Mrs. Kennedy
              and Caroline entered the Cambodian rain forest.
            </p>
            <p>
              &quot;I was showing Caroline the monkeys in the trees,&quot; Judy
              said, &quot;and she was very excited about them. Then I looked up
              and saw Mrs. Kennedy smiling at me. I managed to say &apos;hello&apos;
              to her -- and she spoke to me. It was one of the biggest thrills of
              my life!&quot;
            </p>
            <p>
              Judy said the exhibit is making a big hit with everybody who sees
              it. &quot;Many people say its one of the best at the fair -- and I
              think it is too! You can walk and feel and touch and smell -- and
              you get the feeling you are in another country.&quot;
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke31.jpg"
              alt="Cambodian rain forest"
              width={275}
              height={394}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              &quot;Global Holiday&quot; tour includes a Cambodian jungle where
              Coca-Cola is cooled in a stream.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke32.jpg"
              alt="Carol Channing"
              width={191}
              height={234}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Carol Channing tours our Pavilion and pauses on deck of cruise
              ship.
            </figcaption>
          </figure>

          <figure className={styles.figure}>
            <Image
              src="/images/coke11/coke33.jpg"
              alt="Georgia Art Display"
              width={275}
              height={166}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              The Coca-Cola Company Pavilion also has an exhibit of Georgia art
              and memorabilia associated with Coca-Cola.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Ted Duffield, creative director for The Coca-Cola Company Pavilion,
              spent two and a half years developing the exhibit, and he is
              delighted with the reception it is getting. &quot;I wrote the
              script for the whole show,&quot; he said &quot;and Displayers, Inc.
              executed it. They had terrific craftsmen to do the job. Gerard van
              Duyn, a free-lance designer for Displayers, Inc., is the man who
              designed each of the five experience areas.&quot;
            </p>
            <p>
              &quot;Because Coke is enjoyed in 125 countries we decided there
              could only be one theme &apos;World of Refreshment&apos;,&quot; Mr.
              Duffield explained. &quot;We had a story to tell, and our aim was
              to come as close to reality as possible within the limits of the
              money. We did everything to make these experiences authentic. For
              example, everything in the Bavarian ski lodge actually was bought
              in Bavaria. The bus stop sign on the Hong Kong street and the signs
              advertising Coca-Cola were sent to me by the Coca-Cola bottler
              there.&quot;
            </p>
            <p>
              In addition to the experience areas, the exhibit includes an art
              gallery featuring paintings by Georgia artists as well as a display
              of things associated with the history of Coca-Cola -- such as an
              old syrup barrel and a model of a soda fountain for Coca-Cola,
              circa 1886. The Pavilion also contains an impressive display of the
              products of The Coca-Cola Company with a waterfall as a backdrop to
              symbolize the refreshing quality of Coke.
            </p>
          </div>

          <p className={styles.source}>
            Source: <em>The Refresher</em>, The Coca-Cola Company Magazine,
            May-June 1964 Courtesy Bradd Schiffman Collection
          </p>

          <aside className={styles.webmasterNote}>
            <p>
              <strong>Webmaster&apos;s note... </strong>
              I&apos;d like to THANK those who contributed materials to the
              Coca-Cola Pavilion pages at{" "}
              <span className={styles.brandNywf}>nywf</span>
              <span className={styles.brandSixtyFour}>64</span>
              <span className={styles.brandDotCom}>.com</span>. To Bradd
              Schiffman and Gary Holmes who waited patiently for eight(!) years
              to see their photos, Press Releases and <em>The Refresher</em>{" "}
              articles go online. As always, to Bill Cotter for contributing
              photos to the feature from his fabulous collection of slides. And,
              to Craig Bavaro and Jeff DaSilva for some great photo shots that
              really illustrate the Coca-Cola Pavilion!
            </p>
            <p>
              Bill Young
              <br />
              January, 2010
            </p>
          </aside>
        </div>
      </article>

      <Nav2Bar
        previousHref="/coke10"
        explicitPrevious
        overviewHref="/cokeoverview"
        nextHref="/coke12"
      />
    </>
  );
}
