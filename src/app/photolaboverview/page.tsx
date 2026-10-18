import type { Metadata } from "next";
import Image from "next/image";
import { Nav2Bar } from "@/components/Nav2Bar";
import { PhotoLabHero } from "@/components/PhotoLabHero";
import { PhotoLabNavChrome } from "@/components/PhotoLabNavChrome";
import styles from "./photolaboverview.module.css";

export const metadata: Metadata = {
  title: "The Photo Lab Slide Set — Overview — nywf64.com",
  description:
    "Photo Lab of Washington, D.C. color slides of the 1964/1965 New York World’s Fair — three slide trays on nywf64.com.",
};

/**
 * Photo Lab Slide Set overview — follows the overview prototype
 * (same stack as /archoverview). Hero canvas matches ibm01 (1905×826)
 * via PhotoLabHero. No Page notation (`photolaboverview` is not a numbered route).
 * NEXT → /photolabtray01; PREVIOUS → /artifacts.
 */
export default function PhotoLabOverviewPage() {
  return (
    <>
      <PhotoLabHero />

      <PhotoLabNavChrome />

      <section
        className={styles.overview}
        aria-label="Photo Lab Slide Set overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              <strong>PHOTO LAB</strong> of Washington, D.C. produced a large
              number of of slides as licensee as the Official Photo Company of
              the Fair. Now you can enjoy these popular collectibles of the
              Fair on-line. Three slide trays are set up with nearly 200 of
              these colorful slides to explore courtesy of the{" "}
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
              src="/images/photolaboverview/photo.jpg"
              alt="Unisphere and fountains at dusk"
              width={1018}
              height={679}
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
        overviewHref="/photolaboverview"
        nextHref="/photolabtray01"
      />
    </>
  );
}
