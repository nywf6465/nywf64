import type { Metadata } from "next";
import Image from "next/image";
import { MainlinerHero } from "@/components/MainlinerHero";
import { MainlinerNavChrome } from "@/components/MainlinerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./mainlineroverview.module.css";

export const metadata: Metadata = {
  title: "The Blackhawk Films Slide Set — Overview — nywf64.com",
  description:
    "Blackhawk Films of Davenport, Iowa, in cooperation with United Airlines, produced the MAINLINER Vacation Series — 200 slides of the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Blackhawk Films / United Air Lines MAINLINER overview (legacy mainliner01).
 * Same stack as /wolfeoverview and /photolaboverview. No Page notation.
 * NEXT → /mainlinertray01; PREVIOUS → /artifacts.
 */
export default function MainlinerOverviewPage() {
  return (
    <>
      <MainlinerHero />

      <MainlinerNavChrome />

      <section
        className={styles.overview}
        aria-label="Blackhawk Films Slide Set overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <strong>
                <em>Blackhawk Films</em>
              </strong>{" "}
              of Davenport, Iowa in cooperation with{" "}
              <strong>
                <em>United Airlines</em>
              </strong>{" "}
              produced a set of slides titled the{" "}
              <strong>MAINLINER&nbsp;Vacation Series</strong>. Enjoy this
              popular collectible of the Fair on-line. Two slide trays are set
              up with 200 of these colorful slides to explore courtesy of the{" "}
              <span className={styles.nywf}>
                nywf<span className={styles.nywfMark}>64</span>.com
              </span>{" "}
              and{" "}
              <span className={styles.fairPhotos}>WorldsFairPhotos.com</span>{" "}
              collections.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/mainlineroverview/photo.jpg"
              alt="Blackhawk Films title card, produced in cooperation with United Air Lines"
              width={1269}
              height={1240}
              sizes="(max-width: 720px) 100vw, 48vw"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/artifacts"
        explicitPrevious
        overviewHref="/mainlineroverview"
        nextHref="/mainlinertray01"
      />
    </>
  );
}
