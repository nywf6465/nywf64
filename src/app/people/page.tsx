import type { Metadata } from "next";
import Image from "next/image";
import { PeopleOfTheFairLinks } from "@/components/PeopleOfTheFairLinks";
import styles from "./people.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";

export const metadata: Metadata = {
  title: "People of the Fair — nywf64.com",
  description:
    "People of the Fair — the builders, visitors, and voices of the 1964/1965 New York World’s Fair.",
};

/** Landing: header (layout) → exact hero → people links grid → footer (layout). */
export default function PeopleOfTheFairPage() {
  return (
    <main>
      <section className={styles.hero} aria-label="People of the Fair">
        <div className={`${styles.frame} ${heroBottomBar.photoFrame}`}>
          <Image
            src="/images/people-of-the-fair-hero.jpg"
            alt="People of the Fair — those who Created the Fair, those who Preserve the Fair"
            width={1600}
            height={983}
            priority
            sizes="100vw"
            className={styles.art}
            unoptimized
          />
        </div>
      </section>
      <PeopleOfTheFairLinks />
    </main>
  );
}
