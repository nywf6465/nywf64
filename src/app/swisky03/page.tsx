import type { Metadata } from "next";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Swiss Sky Ride — nywf64.com",
  description:
    "Swiss Sky Ride postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitor = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard</span>
);

/**
 * Swiss Sky Ride postcards page — “postcards” standard.
 * Body from legacy swisky03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Swisky03Page() {
  return (
    <PostcardPage
      heroLabel="Swiss Sky Ride"
      titleId="swisky03-title"
      hero={{
        src: "/images/swiskyoverview/hero-banner.jpg",
        alt: "Swiss Sky Ride at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwiskyNavChrome />}
      previousHref="/swisky02"
      overviewHref="/swiskyoverview"
      nextHref="/swisky04"
      entries={[
        {
          front: {
            src: "/images/swisky03/87309-B.jpg",
            width: 450,
            height: 280,
            alt: "The Swiss Skyride — Exhibitor Postcard No. 87309-B",
          },
          reverse: {
            src: "/images/swisky03/87309-Breverse.jpg",
            width: 300,
            height: 101,
            alt: "Reverse — The Swiss Skyride Exhibitor Postcard No. 87309-B",
          },
          meta: ["The Swiss Skyride", exhibitor, "No. 87309-B"],
          sources: [
            "Source: Postcard Made by Dexter Press - West Nyack, N.Y.",
            "Source: Postcard Published by Lancar 700 Inc.",
          ],
        },
        {
          front: {
            src: "/images/swisky03/WF420.jpg",
            width: 450,
            height: 276,
            alt: "Riding in the Swiss Skyride — Unauthorized Postcard No. WF420",
          },
          reverse: {
            src: "/images/swisky03/WF420reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse — Riding in the Swiss Skyride Unauthorized Postcard No. WF420",
          },
          meta: [
            "Riding in the Swiss Skyride",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF420",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
