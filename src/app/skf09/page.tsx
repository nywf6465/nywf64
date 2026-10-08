import type { Metadata } from "next";
import Image from "next/image";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/skfEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "\"Fair\" Architect — SKF — nywf64.com",
  description:
    "Fair architect Francis Pisani and the SKF pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF — "Fair" Architect.
 * Body from legacy skf09.html.
 */
export default function Skf09Page() {
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

      <article className={styles.article} aria-labelledby="skf09-title">
        <header className={styles.titleBar}>
          <h1 id="skf09-title" className={styles.titleBarMain}>
            &quot;Fair&quot; Architect
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 215 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf09/skf28.jpg"
                alt="\"Fair\" Architect"
                width={215}
                height={145}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>GMAC Employee's Son has Designed</p>
            <p>a Unique Setting for SKF's Exhibit</p>
            <p>at the New York World's Fair</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 180 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf09/skf29.jpg"
                alt="SKF"
                width={180}
                height={254}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Right around the corner from the General Motor's Futurama in the heart of the World's Fair Transportation Area, a soaring 82 foot tower proudly proclaims the presence of SKF Industries, Incorporated, pavilion.</p>
            <p><em>Frank Pisani, right, goes over some of the finer points of an "in progress" drawing for his father, Nicholas Pisani, at the architect's new East 78th Street offices.</em></p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 290 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf09/skf30.jpg"
                alt="SKF"
                width={290}
                height={191}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>And beaming just as proudly these days is Nicholas Pisani of the Statistical Reporting Section, Treasurer's Department GMAC Executive Office. Nick, as he has been known for the last 40 years, is the father of architect Frank A. Pisani, AIA, who designed the pavilion which has been critically acclaimed as one of the finest examples of pure exposition philosophy on the fair grounds.</p>
            <p>This is not the first time young Pisani has graced these pages. In June of 1945, <em>News and Views</em> carried a picture of "Frankie" who was an ice skating star at 13 -- a protege of Carol Lynne, "Hats off to Ice" feature attraction. Times have changed, however.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 149 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/skf09/skf31.jpg"
                alt="SKF"
                width={149}
                height={425}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>"Right now," said Frank, in a recent interview, "this project and the three other Fair pavilions I've had a part in, are the most important things that have ever happened to me. Many of the important architects of today made their reputation in the last (New York) fair."</p>
            <p>Nick's son, a chip off the old block, grew up "across the street from the 1939 fairgrounds," in Queensborough Hill, Long Island. He was impressed with the buildings, he said, "but I never dreamed of being an architect when I was eight." Actually, he majored in art at the Manhattan High School of Music and Art until his mentors discovered that his drawings had an architectural flavor. With their urging, he specialized in architecture his last three semesters and followed with five years at Pratt Institute, winning his Bachelor of Architecture degree.</p>
            <p>After a hitch with the U. S. Department of Topography at the Army Engineer School, Frank joined the firm of I. M. Pei and Associates. There, and later with Welton Beckett, FAIA and associates and with a colleague in private practice, he gained wide experience as a project and associate engineer before entering his own practice in New York City. In these projects he took "responsible charge" of diverse activities representing some $110 million of construction value.</p>
            <p>In designing the SKF pavilion at the fair, it was necessary to consider its purpose -- which was to expose the public to "motion engineering" -- and to overcome space limitations while keeping design in tune with the overall theme of motion. With only 7,700 square feet to work in (compared with GM's 304,000) the structure was conceived as a soaring tower and "parasol", freed from and floating above the main building by a band of tinted glass. Thus a feeling of motion was established in the major architectural elements. Identification was provided by the SKF logotype placed on the tower. The interior of the pavilion was placed below grade to minimize the mass of the structure. Since the audience attending the exhibit would be drawn from traffic passing to and from GM and other shows in the area, a broad, inviting access to the exhibit was provided, oriented to the corner of the site and exposed to two crosswalks. The remainder of the site was covered with a subtle roof form which rises from 12 inches above grade and is sculptured to a mound which focuses attention to and dramatizes the central tower and "parasol."</p>
            <p><em>The SKF Industries, Incorporated, pavilion</em></p>
            <p>To facilitate his work on the fair projects, the firm of Pisani and Carlos Architects, was formed with Frank being partner-in-charge of the exhibit. Pisani and Carlos were the New York architects for the exhibit pavilion for Austria, and the 32-year-old designer also handled the interior architecture for the exhibits in the Coca Cola, Greyhound Bus and State of Missouri pavilions.</p>
            <p>Frank's work has not been limited to the World's Fair. In association with Anthony Musolino of Washington, D.C., he can point with pride to the Golden Triangle Hotel in Norfolk, the Northern Virginia Doctors' Hospital in Arlington, and the Prototype Bowling Centers in Pittsburgh, Annandale and Richmond, Virginia, as representative samples of his art. He has recently completed the interior work on the recreational suite in the offices of Allen Fundt of Candid Camera fame.</p>
            <p><em>In association with Washington D. C. architect Anthony Musolino, Francis Pisani designed the Golden Triangle Motor Hotel, a new landmark in Norfolk, Virginia.</em></p>
            <p>Recently completed commissioned drawings include the Maison Courbe' Apartment Hotel in Fort Lauderdale; a Community "Y" in Ocean Township, New Jersey, and a night club on Grand Bahama Isle.</p>
            <p>One of Frank's ambitions is to do a school for the City of New York, but it may be a very long wait. The Mayor's panel of architects has a list of from two to three hundred candidates! He would be satisfied, though, if he could obtain a half dozen clients.</p>
            <p>According to young Pisani, a good client is one who is very strong about what a building should contain and how much he can pay for it -- <em>not</em> what it should look like. He feels that most clients are easily satisfied designwise; in fact, the design is much more important to the architect because with him good design is a matter of conscience; he has a reputation to make.</p>
            <p>A good building, according to Nick's son, must combine aesthetic beauty with function within the allocated budget. The most beautiful structure in the world would be valueless were it not functional. He designs each one his buildings so it <em>expresses</em> the function, and he believes today's modern designs best express the functional.</p>
            <p>His plans abound with modern innovations for, as he puts it, "I'm definitely not an historian."</p>
            <p className={styles.source}>SOURCE: General Motors <em>News and Views</em>, September, 1964, Presented courtesy Frank Pisani's daughter, Celeste Pisani</p>
            <p>Architect Frank Pisani in 2008. Mr. Pisani still loves his work and is currently working full time with Costas Kondylis</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/skf08"
        explicitPrevious
        overviewHref="/skfoverview"
        nextHref="/skf10"
      />
    </>
  );
}
