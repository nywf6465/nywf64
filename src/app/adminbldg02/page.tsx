import type { Metadata } from "next";
import Image from "next/image";
import { AdminbldgNavChrome } from "@/components/AdminbldgNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./adminbldg02.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "After the Fair — Administration Building — nywf64.com",
  description:
    "The Administration Building after the Fair — the Olmsted Center in Flushing Meadows-Corona Park — from nywf64.com.",
};

/**
 * Administration Building — After the Fair.
 * Body from legacy adminbldg03.html, remapped to /adminbldg02
 * (Introduction omitted — same pattern as fisher01 / rm01).
 *
 * Stack: hero → AdminbldgNavChrome → navy title banner → body → Nav2Bar
 */
export default function Adminbldg02Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Administration Building">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/adminbldgoverview/hero-banner.jpg"
            alt="Administration Building at the 1964/1965 New York World’s Fair"
            width={1914}
            height={822}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <AdminbldgNavChrome />

      <article className={styles.article} aria-labelledby="adminbldg02-title">
        <header className={styles.titleBar}>
          <h1 id="adminbldg02-title" className={styles.titleBarMain}>
            After the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/adminbldg02/olmsted-center-1.jpg"
              alt="Entrance to the Olmsted Center"
              width={400}
              height={389}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <span className={styles.capTitle}>
                Entrance to the Olmsted Center
              </span>
              <span className={styles.capSource}>SOURCE: Internet</span>
            </figcaption>
          </figure>

          <div className={styles.body}>
            <p>
              People naturally think of the Unisphere, New York State Pavilion,
              Hall of Science and former Port Authority heliport when disucssing
              surviving structures from 1964-65, but the unassuming
              Administration Building represents someting different. After the
              Fair the building became known as the Olmsted Center, honoring
              Frederick Law Olmsted and the tradition of professional park
              planning associated with his name. The building has become a
              behind-the-scenes headquarters for the people who actually design
              and build New York City&apos;s parks. Its current address is
              listed as 117-02 Roosevelt Avenue, Flushing, NY 11368.
            </p>

            <p>
              The building has housed a substantial portion of the New York City
              Parks photographic archive. The collection grew out of the
              systematic photographic documentation begun during the Robert
              Moses era. According to <em>The New Yorker</em>, the Parks
              photographic collection contains roughly 300,000 images, with
              approximately 33,000 negatives produced by Parks photographers
              beginning in the 1930s, and that much of the historical material
              was stored at the Olmsted Center.
            </p>

            <p>
              The location of the building has always been problematic. The
              Olmsted Center sits on the former Flushing Meadows marshland, and
              the site is approximately four feet below FEMA&apos;s 100-year
              floodplain. Hurricane Sandy dramatically demonstrated the problem
              according to the architectural firm tasked with modernizing the
              building. Rather than simply abandon the site, Parks undertook and
              extensive reconstruction and expansion designed by BKSK
              Architects. The project was completed in two phases: Phase I in
              2014 and Phase II in 2020. The first phase of the modernization
              project added about 10,000 square feet. The addition was raised
              above the floodplain.
            </p>

            <p>
              The architects incorporated extensive flood-control and
              stormwater-management measures into the site while expanding and
              modernizing the office complex. The renovated Olmsted Center
              ultimately received LEED Gold certification in 2023. City budget
              records show how substantial the project was. A 2023
              capital-project report lists approximately $32.4 million in city
              spending associated with reconstruction of the Olmsted Center and
              records construction extending from 2014 into 2019, with final
              closeout occurring in 2023.
            </p>

            <p>
              When BKSK undertook the modern expansion and renovation, they
              specifically recognized the surviving 1961 structure. Their design
              deliberately exposed and celebrated its original steel structure.
              BKSK described the original building&apos;s exposted exterior-steel
              beams and visible cross-bracing and said those features
              facilitated its rapid construction for the Fair.
            </p>

            <p>
              And so the Administration Building/Olmsted Center can be added to
              the list of 1964-1965 World&apos;s Fair legacies!
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/adminbldg02/olmsted-center-2.jpg"
              alt="The Olmsted Center"
              width={400}
              height={386}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.caption}>
              <span className={styles.capTitle}>The Olmsted Center</span>
              <span className={styles.capSource}>SOURCE: Internet</span>
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/adminbldg01"
        overviewHref="/adminbldg01"
        nextHref="/adminbldg01"
      />
    </>
  );
}
