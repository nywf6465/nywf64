import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BetlivNavChrome } from "@/components/BetlivNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/betlivTopic.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Hershey Chocolate / Morton Salt — Better Living Center — nywf64.com",
  description:
    "Hershey Chocolate and Morton Salt exhibits at the Better Living Center — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Better Living Center — Hershey Chocolate / Morton Salt.
 * Body from legacy betliv15.html.
 *
 * Stack: hero → BetlivNavChrome → navy titles → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE (wrapper stack: caption above images, per legacy).
 */
export default function Betliv15Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Better Living Center">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/betlivoverview/hero-banner.jpg"
            alt="Better Living Center at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BetlivNavChrome />

      <article className={styles.article} aria-labelledby="betliv15-title">
        <header className={styles.titleBar}>
          <h1 id="betliv15-title" className={styles.titleBarMain}>
            Hershey Chocolate
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.lede}>
            <p>
              Hershey Chocolate&apos;s exhibit at the Better Living Center was
              unique in that the candy giant had not one but <em>three</em>{" "}
              separate areas of exhibit space, two on the third floor and
              another in the lobby. The reason for this seemingly haphazard
              approach was because Hershey hadn&apos;t planned on being in the
              Better Living Center at all! Hershey had contracted for exhibit
              space in the World Of Food pavilion. When the World&apos;s Fair
              Corporation terminated all involvement with the World of Food and
              demolished the structural steel of the pavilion just weeks before
              the Fair&apos;s opening (see{" "}
              <Link href="/worfoo01">
                <strong>
                  <em>
                    &quot;What Ever Happened to the World of Food?&quot;
                  </em>
                </strong>
              </Link>{" "}
              at{" "}
              <strong>
                <span style={{ color: "#0066cc" }}>nywf</span>
                <span style={{ color: "#ff3300" }}>64</span>
              </strong>
              <span style={{ color: "#0066cc", fontSize: "0.7em" }}>
                .com
              </span>
              ) Hershey, like many other food-related exhibitors, was left with
              a choice of finding space elsewhere in the Fair or canceling
              their involvement altogether. Because they had planned on being
              one of the more prominent exhibitors at the World Of Food and had
              already printed and distributed Hershey Chocolate Bars with
              World&apos;s Fair wrappers, it made practical sense to stay
              involved with the Fair and rent space at the Better Living Center.
              (Hershey wrappers accordingly were quickly changed to show the
              Better Living Center logo rather than that of the World Of Food).
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 428 }}>
            <figcaption
              className={styles.caption}
              style={{ margin: "0 0 0.55rem" }}
            >
              Hershey candy bar wrappers were printed advertising Hershey&apos;s
              exhibit at the World of Food pavilion. Such advertising needed to
              be changed following Hershey&apos;s relocation to the Better
              Living Center.
            </figcaption>
            <Image
              src="/images/betliv15/wrapper-wof-front.jpg"
              alt="World of Food Hershey's wrapper - front"
              width={428}
              height={190}
              className={styles.photoImg}
              unoptimized
            />
            <hr className={styles.rule} />
            <Image
              src="/images/betliv15/wrapper-wof-back.jpg"
              alt="World of Food Hershey's wrapper - back"
              width={428}
              height={190}
              className={styles.photoImg}
              unoptimized
            />
            <hr className={styles.rule} />
            <Image
              src="/images/betliv15/wrapper-blc.jpg"
              alt="Better Living Center Wrapper"
              width={428}
              height={382}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: on-line Auctions (eBay)
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              The centerpiece of the Hershey exhibit amounted to a lesson on
              the process of making chocolate through a colorful wall
              illustration that charted each step and the active demonstration
              of a &quot;conch&quot; machine. The conch was, and remains, an
              important part of the chocolate making process in its later
              stage. For hours, a conch stirs the chocolate mixture (which has
              already undergone all earlier phases of production that include
              the addition of milk and sugar) until it reaches the right level
              of consistency. The chocolate paste stirred by the conch is
              squeezed or poured into the molds of candy bar shapes in the
              final phase of the process. The Better Living Center exhibit
              featured a &quot;four-pot&quot; style conch, a type most commonly
              used at the time. Today such conches are even bigger to
              accommodate greater mass production of chocolate.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <figcaption
              className={styles.caption}
              style={{ margin: "0 0 0.55rem" }}
            >
              Pennsylvania Governor William Scranton and Hershey President
              Samuel Hinkle in front of the conch display.
            </figcaption>
            <Image
              src="/images/betliv15/conch-machine.jpg"
              alt="Conch Machine"
              width={500}
              height={400}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: Image presented courtesy Hershey Archives
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              Angelo Elmi, a long-time Hershey employee who was in charge of
              setting up the conch exhibit, recalled in 1998 for the Hershey
              Archives how the conch demonstration could not utilize a real
              chocolate mixture. Instead, Fair visitors saw the conch stirring
              chocolate-colored wax. Large ten-pound blocks of this colored wax
              were brought in to use in the conch. But because it superficially
              resembled chocolate, Fair employees found themselves stealing
              pieces of it thinking they were getting a free sample of
              delicious Hershey chocolate. If any of them refused to eat
              Hershey chocolate again after that experience, it was certainly
              for the wrong reason!
            </p>
            <p>
              At another exhibit table Hershey had a handsome model display
              replicating &quot;Hershey Town USA,&quot; the western
              Pennsylvania company town established by Milton Hershey in 1903
              and featuring, in addition to the Hershey plant, the Hershey Park
              amusement park which by this point was beginning plans for
              eventual conversion to a &quot;theme park&quot; in the tradition
              of Disneyland. Like the conch display, this model had originally
              been planned for Hershey&apos;s exhibit in the World Of Food.
            </p>
          </div>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <figcaption
              className={styles.caption}
              style={{ margin: "0 0 0.55rem" }}
            >
              Detailed model of Hershey Park Amusement Park.
            </figcaption>
            <Image
              src="/images/betliv15/hershey-park-model.jpg"
              alt="Model Hershey Theme Park"
              width={500}
              height={371}
              className={styles.photoImg}
              unoptimized
            />
            <p className={styles.source}>
              Source: Image presented courtesy Hershey Archives
            </p>
          </figure>

          <div className={styles.lede}>
            <p>
              By the early 1970s, this conversion to theme park would be made
              complete with the opening of &quot;Chocolate World&quot; which
              replaced factory tours with a gift shop and visitors center
              offering a Disney/World&apos;s Fair style Omnimover ride through
              the chocolate-making process. Which only shows that if
              Hershey&apos;s exhibit at the 1964 World&apos;s Fair was somewhat
              limited in scope compared to that of other companies who had
              their own pavilions and full-fledged rides, it would soon be
              adopting the methods used by those companies at the Fair to
              promote themselves!
            </p>
          </div>
        </div>

        <header className={styles.titleBar}>
          <h2 className={styles.titleBarMain}>Morton Salt</h2>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.mortonHeadline}>
            4-minute break at Morton Salt!
          </p>
          <p className={styles.mortonLede}>
            Stop walking . . . pause while you see and hear the story of the
            food so common you can forget it&apos;s around; yet so vital you
            can&apos;t live without it. Enjoy &quot;Salt of the Earth.&quot; In
            4 minutes, experience a million years of salt history as you gaze
            into Morton&apos;s giant salt crystal millions of times normal
            size. Be our guest and rest.
          </p>

          <figure className={styles.figure} style={{ maxWidth: 500 }}>
            <Image
              src="/images/betliv15/morton-salt.jpg"
              alt="Morton Salt Display"
              width={500}
              height={308}
              className={`${styles.photoImg} ${styles.photoPlain}`}
              unoptimized
            />
            <p className={styles.source}>
              Source: Morton Salt Exhibit advertisement - Better Living Center
              Visitor&apos;s Guide
            </p>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/betliv14"
        explicitPrevious
        overviewHref="/betlivoverview"
        nextHref="/betliv16"
      />
    </>
  );
}
