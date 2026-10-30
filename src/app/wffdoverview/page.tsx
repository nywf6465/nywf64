import type { Metadata } from "next";
import Image from "next/image";
import { WffdHero } from "@/components/WffdHero";
import { WffdNavChrome } from "@/components/WffdNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./wffdoverview.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Fire & Police Departments — Overview — nywf64.com",
  description:
    "The World’s Fair Fire Department — badges, helmets, and equipment from Gary Urbanowicz’s Badges of the Bravest, on nywf64.com.",
};

/**
 * World’s Fair Fire & Police Departments overview — follows the overview
 * prototype (same stack as /educardsoverview / /perspectiveoverview).
 * Hero canvas matches ibm01 (1905×826) via WffdHero.
 * Nav bar shows Page 1 (`wffdoverview` special-cased in pageNumberFromPath).
 * PREVIOUS → /stories; NEXT → /wffd01 (feature page 1 / nav Page 2).
 */
export default function WffdOverviewPage() {
  return (
    <>
      <WffdHero />

      <WffdNavChrome />

      <section
        className={styles.overview}
        aria-label="World’s Fair Fire & Police Departments overview"
      >
        <div className={styles.overviewInner}>
          <div className={styles.copy}>
            <p className={styles.sectionTitle}>OVERVIEW</p>
            <p className={styles.body}>
              From the Gary Urbanowicz book{" "}
              <strong>
                <em>Badges of the Bravest,</em> a pictorial history of
                firefighting agencies in New York City,
              </strong>{" "}
              comes the untold story of the World&apos;s Fair Fire Department
              and a look at the badges, helmets and equipment of the group of
              men assigned to protect the Fair from the threat of fire. With
              photo contributions by Greg Gottlieb.
            </p>
          </div>

          <div className={styles.photoWrap}>
            <Image
              src="/images/wffdoverview/photo.jpg"
              alt="N.Y. World’s Fair Fire Dept. badge No. 40"
              width={1335}
              height={1178}
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
        nextHref="/wffd01"
      />
    </>
  );
}

