import type { Metadata } from "next";
import Image from "next/image";
import { SimmonNavChrome } from "@/components/SimmonNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/simmonEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The Simmons Company — Simmons — nywf64.com",
  description:
    "History of the Simmons Company and the Beautyrest brand — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Simmons — The Simmons Company.
 * Body from legacy simmon09.html.
 *
 * Stack: hero → SimmonNavChrome → navy title → article → Nav2Bar.
 */
export default function Simmon09Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Simmons">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/simmonoverview/hero-banner.jpg"
            alt="Simmons Beautyrest pavilion at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SimmonNavChrome />

      <article className={styles.article} aria-labelledby="simmon09-title">
        <header className={styles.titleBar}>
          <h1 id="simmon09-title" className={styles.titleBarMain}>
            The Simmons Company
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 412 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon09/simmons24.jpg"
                alt="The foundry at Simmons' Kenosha plant"
                width={412}
                height={500}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              The foundry at Simmons&apos; Kenosha, Wisconsin plant. From the
              1907 booklet &quot;The Factory Behind the Bed.&quot; Brass, iron
              and steel were all used. Old railroad rails arrived almost daily
              to be made into frames for bedsprings.
            </figcaption>
          </figure>

          <h2 className={styles.heading}>The Story of Simmons</h2>
          <p className={styles.source}>
            SOURCE: This page makes extensive use of material found in the book{" "}
            <em>A Classic Bedtime Story</em> by Beth Dawkins Bassett, privately
            published in 1996 by the Simmons Company to celebrate their 125th
            year.
          </p>

          <div className={styles.body}>
            <p>
              Wisconsin in the 19th century was already such a dairy powerhouse
              that a company could be started just to manufacture the boxes in
              which to pack cheese, and that is just what Zalmon Gilbert Simmons
              did in 1870. His business was successful and, in 1875, after
              reading a newspaper article about a Connecticut inventor who had
              produced a machine to make woven wire mattresses, he decided to
              obtain the patent.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon09/simmons25.jpg"
                alt="Early wire mattress"
                width={350}
                height={200}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>Early wire mattress</figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Beds at this time generally consisted of a sack stuffed with
              cushioning such as feathers, straw, cotton or horsehair. The
              mattress was set on a web of ropes anchored by a wooden frame, and
              the ropes would have to be continually tightened in order to keep
              the bed from sagging (hence the expression &quot;sleep
              tight&quot;). Bugs were among the drawbacks of this type of
              mattress, and although wire mattresses existed, they were
              expensive ($12) due to the fact that they were hand made. Simmons
              was able to reduce this cost to ninety-five cents. In 1884 he
              incorporated as the North Western Wire Mattress Company, and by
              1887 the company was worth $100,000. Two years later he changed
              the name to The Simmons Manufacturing Company, and before the turn
              of the century sales exceeded $1 million.
            </p>
            <p>
              Those who grew up in the 1960s and remember the Beautyrest ads may
              be shocked to learn that the brand was launched in 1925. At that
              time, Z.G.Simmons II was looking for an exceptional product for
              the company he inherited after his father&apos;s death in 1910.
              The bedding industry was mostly localized, consisting of hundreds
              of small companies turning out hair or cotton felt pads covered in
              black and white ticking, and it was widely believed that profits
              could only be made through the use of cheap raw materials.
              Simmons&apos; attention was drawn to innerspring mattresses, one
              of which had been patented in the U.S. as early as 1853. These
              early innersprings met with little demand in the marketplace. In
              1900 a Canadian named James Marshall successfully patented what he
              termed a &quot;ventilated mattress&quot; where each wire coil was
              encased in an individual cloth pocket, and in 1901 he began using
              a crank-driven machine to produce his mattresses in a one-room
              shop. They were deemed luxurious enough to be used on the Titanic,
              Lusitania and Mauritania, but they were clearly too expensive for
              most people to consider owning.
            </p>
            <p>
              Remembering that it was the invention of a machine to produce woven
              wire bedsprings that had been his father&apos;s greatest success,
              Simmons asked his best Kenosha engineer, John Franklin Gail, to
              design a machine that would coil wire and insert it into fabric
              pockets quickly and independently. Three years later Gail
              perfected the Pocketed Coil Machine, and the company geared up to
              produce the new mattress. After collecting ideas from employees,
              the names &quot;Sleep Comfort&quot; and &quot;Slumber Well&quot;
              gave way to &quot;Beautyrest&quot;.
            </p>
            <p>
              Thanks in part to a large national advertising campaign, the
              introduction of the new mattress was highly successful. Sales
              reached $3 million by 1927, and climbed to $9 million by 1929.
              Simmons himself made a major improvement in 1928 when he
              introduced a woven floral damask outer cover. It is said he hit
              upon the idea at a restaurant when he picked up a damask napkin
              and found the feel and appearance quite pleasing.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 250 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon09/simmons26.jpg"
                alt="1936 Simmons advertisement"
                width={250}
                height={330}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              1936 Simmons advertisement. Metal panel beds became part of the
              Simmons line.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              Z. G. Simmons II continued to lead the company through the first
              part of the Depression years, but became ill in 1932 and was
              succeeded by his son, Grant G. Simmons. By 1935 the Simmons
              Company had returned to profitability, and by 1937 Simmons beds
              could be found in the White House and on the Normandie and Queen
              Mary. Fortune Magazine noted that year that &quot;Of all the
              Simmons Company&apos;s interests, the Beautyrest is by a large
              margin the most important.&quot;
            </p>
            <p>
              Simmons&apos; success with Beautyrest was due in part to its
              effective use of national advertising. In 1927, the
              &quot;testimonial&quot; campaign began, which featured magazine
              ads showing famous, wealthy and often titled women endorsing the
              Beautyrest. Later, mattress tags were attached to each Beautyrest
              stating that &quot;This is a new Simmons Beautyrest mattress which
              is a duplicate of those chosen by Mrs. Henry Taft, Mrs. Morgan
              Belmont, Mrs. F. D. Roosevelt, and other socially prominent
              women.&quot; The other side said &quot;Tell your friends.&quot;
            </p>
            <p>
              In the 1930s Simmons turned to Glamour. Ads showed beautiful women
              in expensive lingerie stretched out on Beautyrests. This led
              naturally to an ad emphasizing the importance of a good night&apos;s
              sleep in preserving a woman&apos;s appearance as well as mood. One
              ad, titled &quot;The Locked Door Mystery&quot;, read &quot;Everyone
              concerned agreed that young Mrs. Fletcher was in love with her
              husband. What was it that made her leave him? . . . the spilled
              nail polish, overturned cup, display of temper and depression are
              clues that point directly to a nervous system badly upset by loss
              of sleep.&quot; The connection between a good night&apos;s sleep
              and feeling great the next day would turn out to be a popular
              selling point far into the future.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 256 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/simmon09/simmons27.jpg"
                alt="1947 Baby Beauty crib mattress advertisement"
                width={256}
                height={314}
                className={styles.photoImg}
                unoptimized
              />
            </span>
            <figcaption className={styles.caption}>
              A 1947 ad for Baby Beauty Crib Mattresses.
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              In the 1950s the Beautyrest ads employed various stunts to
              emphasize the ruggedness of the product. One ad is titled
              &quot;Beautyrest Day at the Circus&quot;, and shows a mattress
              being used by, predictably, an elephant, a gorilla and a clown. By
              the early 1960s, size had replaced ruggedness as the focal point,
              as research had shown that Americans were becoming both broader
              and taller. The new King and Queen sized mattresses were
              celebrated in full page ads and double page spreads in national
              publications like the Saturday Evening Post and Life Magazine.
            </p>
            <p>
              This full page fold out advertisement ran in{" "}
              <em>Life Magazine</em>&apos;s May 1, 1964 issue. Restraining
              order? No, you just need a bigger bed! This ad probably raised as
              many eyebrows in 1964 as it does today, but it commands attention
              just the same.
            </p>
          </div>

          <div className={styles.photoRow}>
            <figure className={styles.figure} style={{ maxWidth: 295 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon09/simmons28.jpg"
                  alt="1964 Life Magazine advertisement"
                  width={295}
                  height={400}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 424 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon09/simmons29.jpg"
                  alt="1964 Life Magazine advertisement fold-out"
                  width={424}
                  height={396}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
            <figure className={styles.figure} style={{ maxWidth: 248 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/simmon09/simmons30.jpg"
                  alt="1964 Life Magazine advertisement detail"
                  width={248}
                  height={184}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
            </figure>
          </div>

          <div className={styles.body}>
            <p>
              In 1957, Grant G. Simmons, Jr., succeeded his retiring father as
              the president of Simmons Company. It was this man, the fourth Mr.
              Simmons, who was in charge at the time that Simmons decided to
              sponsor a pavilion at the Fair. Grant Simmons was apparently
              enthusiastic enough about the project to record some lines for use
              in the exhibit.
            </p>
            <p>
              With Simmons&apos; historical success using major national
              advertising campaigns to reach its consumer base, it is little
              wonder that they decided to participate in the Fair in such a big
              way. Did they benefit in such a way as to justify the expense?
              They are currently the world&apos;s largest bedding manufacturer.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/simmon08"
        explicitPrevious
        overviewHref="/simmonoverview"
        nextHref="/simmon10"
      />
    </>
  );
}
