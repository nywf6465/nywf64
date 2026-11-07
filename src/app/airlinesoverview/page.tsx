import type { Metadata } from "next";
import Image from "next/image";
import { AirlinesHero } from "@/components/AirlinesHero";
import { AirlinesNavChrome } from "@/components/AirlinesNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./airlinesoverview.module.css";

export const metadata: Metadata = {
  title: "Airlines & The Fair — Overview — nywf64.com",
  description:
    "America’s airlines and the 1964/1965 New York World’s Fair — advertising and memorabilia, on nywf64.com.",
};

/**
 * Airlines & The Fair overview — follows the overview prototype
 * (same stack as /wffdoverview / /odysseyoverview).
 * Hero canvas matches ibm01 (1905×826) via AirlinesHero.
 * Nav bar shows Page 1 (`airlinesoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /stories; NEXT → /airlines01 (feature page 1 / nav Page 2).
 */
export default function AirlinesOverviewPage() {
  return (
    <>
      <AirlinesHero />

      <AirlinesNavChrome />

      <section
        className={styles.overview}
        aria-label="Airlines & The Fair overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              Seventy million people were coming to New York for the Fair. The
              Space Age way to go would be by air and{" "}
              <strong>America&apos;s airlines</strong> soon realized the
              World&apos;s Fair would be a business bonanza. Come and see how
              they promoted the Fair in advertising and memorabilia.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/airlinesoverview/photo.jpg"
              alt="Gateway to the World's Fair — Pan Am jet, Unisphere, and Pan Am Building"
              width={1575}
              height={999}
              sizes="(max-width: 720px) 90vw, 28rem"
              className={styles.photo}
              unoptimized
            />
          </div>
        </div>
      </section>

      <Nav2Bar
        previousHref="/stories"
        explicitPrevious
        nextHref="/airlines01"
      />
    </>
  );
}
