import type { Metadata } from "next";
import Image from "next/image";
import { InformationBoothLinks } from "@/components/InformationBoothLinks";
import styles from "./information.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "The Information Booth — nywf64.com",
  description:
    "The Information Booth — gateway to the story of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → hero image → topic grid → footer (layout). */
export default function InformationBoothPage() {
  return (
    <main>
      <section
        className={styles.hero}
        aria-label="The Information Booth"
      >
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/information-booth-hero.jpg"
            alt="The Information Booth — 1964/1965 New York World’s Fair archive"
            width={1848}
            height={851}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <InformationBoothLinks />
    </main>
  );
}
