import type { Metadata } from "next";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — General Foods Arches — nywf64.com",
  description:
    "General Foods Arches postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches postcards page — “postcards” standard.
 * Body from legacy genfoo03.html. Layout: PostcardPage (/bell03).
 */
export default function Genfoo03Page() {
  return (
    <PostcardPage
      heroLabel="General Foods Arches"
      titleId="genfoo03-title"
      hero={{
        src: "/images/genfoooverview/hero-banner.jpg",
        alt: "General Foods Arches at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GenfooNavChrome />}
      previousHref="/genfoo02"
      overviewHref="/genfoooverview"
      nextHref="/genfoo04"
      entries={[
        {
          front: {
            src: "/images/genfoo03/WF414.jpg",
            width: 450,
            height: 276,
            alt: "General Foods Arch No. 1 postcard front",
          },
          reverse: {
            src: "/images/genfoo03/WF414reverse.jpg",
            width: 300,
            height: 104,
            alt: "General Foods Arch No. 1 postcard reverse",
          },
          meta: [
            "General Foods Arch No. 1",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF414",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
