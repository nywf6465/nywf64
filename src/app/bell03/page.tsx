import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Bell System — nywf64.com",
  description:
    "Bell System Pavilion postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

/**
 * Bell System postcards page — canonical “postcards” standard instance.
 * Body from legacy bell03.html. Layout: PostcardPage (/bell03).
 * Future attraction postcard galleries should copy this page and fill
 * `entries` from their legacy HTML (see AGENTS.md “Postcards standard”).
 */
export default function Bell03Page() {
  return (
    <PostcardPage
      heroLabel="Bell System Pavilion"
      titleId="bell03-title"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell02"
      overviewHref="/belloverview"
      nextHref="/bell04"
      entries={[
        {
          front: {
            src: "/images/bell03/72586-B.jpg",
            width: 450,
            height: 282,
            alt: "Bell System Pavilion official postcard No. 72586-B",
          },
          reverse: {
            src: "/images/bell03/72586-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse of Bell System Pavilion postcard No. 72586-B",
          },
          meta: [
            "Bell System Pavilion",
            "Official Postcard",
            "No. 72586-B",
            "Dexter No. WF-40",
            "Manhattan No. W-15",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/bell03/86862-B.jpg",
            width: 450,
            height: 282,
            alt: "Bell System Pavilion official postcard No. 86862-B",
          },
          reverse: {
            src: "/images/bell03/86862-Breverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse of Bell System Pavilion postcard No. 86862-B",
          },
          meta: [
            "Bell System Pavilion",
            "Official Postcard",
            "No. 86862-B",
            "Dexter No. WF-54",
            "Manhattan No. W-57",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/bell03/WF407.jpg",
            width: 450,
            height: 279,
            alt: "Industrial Area unauthorized postcard No. WF407",
          },
          reverse: {
            src: "/images/bell03/WF407reverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse of Industrial Area postcard No. WF407",
          },
          meta: [
            "Industrial Area",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF407",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
