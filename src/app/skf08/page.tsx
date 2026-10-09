import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/skfEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "The SKF Pavilion & Exhibits — SKF — nywf64.com",
  description:
    "The SKF pavilion and exhibits — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF — The SKF Pavilion & Exhibits.
 * Body from legacy skf08.html.
 */
export default function Skf08Page() {
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

      <article className={styles.article} aria-labelledby="skf08-title">
        <header className={styles.titleBar}>
          <h1 id="skf08-title" className={styles.titleBarMain}>
            The SKF Pavilion &amp; Exhibits
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 239 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf12.jpg"
                alt="The SKF Pavilion & Exhibits"
                width={239}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>THE SKF PAVILION Gallery &amp; Narrative by Barry Howard</p>
            <p>The SKF Industries Pavilion at the New York World's Fair was dedicated to the history of anti-friction engineering and contribution of rolling bearings to the smooth operation of every kind of machinery. The Pavilion was defined by a graceful tower rising above an excavated site within the corporate pavilion zone.</p>
            <p>The modest scale of the pavilion was put into perspective by the nearby Chrysler pavilion and those of the other "big three" automotive companies.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 238 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf13.jpg"
                alt="SKF"
                width={238}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Not to be outdone by the more generously budgeted industrial pavilions, exterior signage announced the availability of a free show within.</p>
            <p>The excavated interior of the Pavilion was divided roughly equally between an exhibition gallery and a small theater. The exhibition gallery ...</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf14.jpg"
                alt="SKF"
                width={350}
                height={236}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>... benefited from a mix of natural light transmitted by the clerestory wrapped around the building and interior cove lighting. The individual exhibits were organized into a section dealing with technology and engineering and a section dealing with bearing types and applications. The former was demonstrated by animated museum exhibits that dealt with conformity, spherocity and consistency ...</p>
            <p>... while the latter presented a variety of bearing types beneath images of their use.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf15.jpg"
                alt="SKF"
                width={350}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>The theater marquee directed visitors to the theater and counted down to the next show.</p>
            <p>In the first year of the Fair, the show was an extension of the technology approach established by the exhibition area. A new, more whimsical show was produced for 1965 that proved extremely popular and drew many more visitors than had the initial presentation. The show was narrated by a mechanical "host" ...</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 238 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf16.jpg"
                alt="SKF"
                width={238}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>... conceived and produced by then little-known Jim Henson, whose <em>Sesame Street</em> characters and ensuing film and television career established him as the off-beat creative genius of his time. The five circular screens arranged just behind the host, presented an extremely funny animated cartoon explaining the history of anti-friction engineering ...</p>
            <p>... at the conclusion of which, the host "popped his bearings" as only a Muppet could do.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 238 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf17.jpg"
                alt="SKF"
                width={238}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Exiting from the theater, visitors had one last look at SKF products and applications.</p>
            <p>PLEASE NOTE: All photographic images on this page are the property of Barry Howard and may not be used without permission from the owner. Please observe copyright.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf18.jpg"
                alt="SKF"
                width={350}
                height={236}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>SKF at the New York World's Fair</p>
            <p>Project Credits</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf19.jpg"
                alt="SKF"
                width={350}
                height={236}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Project Director for SKF Industries, Frank White</p>
            <p>Project Design, Barry Howard Limited (originally, The Displayers, Inc. 1964; Imaginetics, Inc. 1965) in both cases Barry Howard, Principal</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf20.jpg"
                alt="SKF"
                width={350}
                height={235}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Project Architects, Pisani and Falco, Frank Pisani, Principal</p>
            <p>Show Credits:</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf21.jpg"
                alt="SKF"
                width={350}
                height={237}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Animated Host, Jim Hensen Art Direction, Burr Smidt Animation, Paul Glickman Music, Lan Okun Vocal, Kaye Ballard</p>
            <p>Special thanks to Mr. Barry Howard, President/Creative Director of Barry Howard Limited of Malibu, California, for providing the images and narrative for this Feature at nywf64.com. A pioneer in the field of interpretive design, Mr. Howard has achieved national prominence through the creation and design of countless museums, visitor centers, attractions and major exhibits for thirty years. Over the course of his career, Mr. Howard has brought his skills to bear on a wide variety of projects, from this country's most successful Bicentennial exhibition, The American Freedom Train, to the National Automobile Museum in Reno -- from the world-renowned California State Railroad Museum to an award-winning multi-video production for United Technologies for EPCOT Center in Orlando, Florida. Under his direction, his office has been responsible for major World's Fair Pavilions at New York, Montreal, Osaka, Seattle, Spokane, New Orleans and Taejon, Korea. We are very pleased to welcome Mr. Howard to nywf64.com and would like to thank him for his contributions here.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 239 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf22.jpg"
                alt="SKF"
                width={239}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Webmaster's note: Thanks also to Bradd Schiffman who arranged for the appearance of Mr. Howard's presentation.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf23.jpg"
                alt="SKF"
                width={350}
                height={238}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf24.jpg"
                alt="SKF"
                width={350}
                height={235}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 350 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf25.jpg"
                alt="SKF"
                width={350}
                height={233}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <figure className={styles.figure} style={{ maxWidth: 236 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf08/skf26.jpg"
                alt="SKF"
                width={236}
                height={350}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf07"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skf09"
      />
    </>
  );
}
