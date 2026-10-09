import type { Metadata } from "next";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Vatican — nywf64.com",
  description:
    "Vatican Pavilion postcards from the 1964/1965 New York World’s Fair — official, exhibitor, and unauthorized cards on nywf64.com.",
};

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const dexterManhattanSources = [
  "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
];

const dexterVaticanSources = [
  "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
  "Source: Postcard Published by Vatican Pavilion (New York World's Fair) Inc., 1964",
];

/**
 * Vatican postcards page — “postcards” standard.
 * Body from legacy vatican03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Vatican03Page() {
  return (
    <PostcardPage
      heroLabel="Vatican Pavilion"
      titleId="vatican03-title"
      hero={{
        src: "/images/vaticanoverview/hero-banner.jpg",
        alt: "Vatican Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<VaticanNavChrome />}
      previousHref="/vatican02"
      overviewHref="/vaticanoverview"
      nextHref="/vatican04"
      entries={[
        {
          front: {
            src: "/images/vatican03/72588-B.jpg",
            width: 450,
            height: 281,
            alt: "Pavilion of the Vatican official postcard No. 72588-B",
          },
          reverse: {
            src: "/images/vatican03/72588-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse of Pavilion of the Vatican postcard No. 72588-B",
          },
          meta: [
            "Pavilion of the Vatican",
            "Official Postcard",
            "No. 72588-B",
            "Dexter No. WF-5",
            "Manhattan No. W-17",
          ],
          sources: dexterManhattanSources,
        },
        {
          front: {
            src: "/images/vatican03/87420-B.jpg",
            width: 450,
            height: 280,
            alt: "The Vatican Pavilion official postcard No. 87420-B",
          },
          reverse: {
            src: "/images/vatican03/87420-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse of The Vatican Pavilion postcard No. 87420-B",
          },
          meta: [
            "The Vatican Pavilion",
            "Official Postcard",
            "No. 87420-B",
            "Dexter No. WF-77",
            "Manhattan No. W-77",
          ],
          sources: dexterManhattanSources,
        },
        {
          front: {
            src: "/images/vatican03/92318-B.jpg",
            width: 450,
            height: 282,
            alt: "Night Vatican Pavilion official postcard No. 92318-B",
          },
          reverse: {
            src: "/images/vatican03/92318-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse of Night Vatican Pavilion postcard No. 92318-B",
          },
          meta: [
            "Night Vatican Pavilion",
            "Official Postcard",
            "No. 92318-B",
            "Dexter No. WF-123",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/vatican03/85052-B.jpg",
            width: 281,
            height: 450,
            alt: "Vatican exhibitor postcard Pieta No. 85052-B",
          },
          reverse: {
            src: "/images/vatican03/85052-Breverse.jpg",
            width: 300,
            height: 55,
            alt: "Reverse of Vatican postcard No. 85052-B",
          },
          meta: [
            "Vatican (1 of 12)",
            "Pieta",
            exhibitorSet,
            "No. 85052-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85053-B.jpg",
            width: 284,
            height: 450,
            alt: "Vatican exhibitor postcard The Madonna No. 85053-B",
          },
          reverse: {
            src: "/images/vatican03/85053-Breverse.jpg",
            width: 300,
            height: 53,
            alt: "Reverse of Vatican postcard No. 85053-B",
          },
          meta: [
            "Vatican (2 of 12)",
            "The Madonna",
            exhibitorSet,
            "No. 85053-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85054-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican exhibitor postcard The Face of the Saviour No. 85054-B",
          },
          reverse: {
            src: "/images/vatican03/85054-Breverse.jpg",
            width: 300,
            height: 54,
            alt: "Reverse of Vatican postcard No. 85054-B",
          },
          meta: [
            "Vatican (3 of 12)",
            "The Face of the Saviour",
            exhibitorSet,
            "No. 85054-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85055-B.jpg",
            width: 284,
            height: 450,
            alt: "Vatican exhibitor postcard The Swiss Guard No. 85055-B",
          },
          reverse: {
            src: "/images/vatican03/85055-Breverse.jpg",
            width: 300,
            height: 56,
            alt: "Reverse of Vatican postcard No. 85055-B",
          },
          meta: [
            "Vatican (4 of 12)",
            "The Swiss Guard",
            exhibitorSet,
            "No. 85055-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85056-B.jpg",
            width: 450,
            height: 282,
            alt: "Vatican exhibitor postcard Doctors of the Church No. 85056-B",
          },
          reverse: {
            src: "/images/vatican03/85056-Breverse.jpg",
            width: 300,
            height: 53,
            alt: "Reverse of Vatican postcard No. 85056-B",
          },
          meta: [
            "Vatican (5 of 12)",
            "Doctors of the Church",
            exhibitorSet,
            "No. 85056-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85057-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican exhibitor postcard Medallion of Pope John XXIII No. 85057-B",
          },
          reverse: {
            src: "/images/vatican03/85057-Breverse.jpg",
            width: 300,
            height: 45,
            alt: "Reverse of Vatican postcard No. 85057-B",
          },
          meta: [
            "Vatican (6 of 12)",
            "Medallion of Pope John XXIII",
            exhibitorSet,
            "No. 85057-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85058-B.jpg",
            width: 282,
            height: 450,
            alt: "Vatican exhibitor postcard Medallion of Pope Paul VI No. 85058-B",
          },
          reverse: {
            src: "/images/vatican03/85058-Breverse.jpg",
            width: 300,
            height: 47,
            alt: "Reverse of Vatican postcard No. 85058-B",
          },
          meta: [
            "Vatican (7 of 12)",
            "Medallion of Pope Paul VI",
            exhibitorSet,
            "No. 85058-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85059-B.jpg",
            width: 281,
            height: 450,
            alt: "Vatican exhibitor postcard Statue of The Good Shephard No. 85059-B",
          },
          reverse: {
            src: "/images/vatican03/85059-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse of Vatican postcard No. 85059-B",
          },
          meta: [
            "Vatican (8 of 12)",
            "Statue of The Good Shephard",
            exhibitorSet,
            "No. 85059-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85060-B.jpg",
            width: 283,
            height: 450,
            alt: "Vatican exhibitor postcard Replica of Tomb of St. Peter No. 85060-B",
          },
          reverse: {
            src: "/images/vatican03/85060-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse of Vatican postcard No. 85060-B",
          },
          meta: [
            "Vatican (9 of 12)",
            "Replica of Tomb of St. Peter",
            exhibitorSet,
            "No. 85060-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85061-B.jpg",
            width: 279,
            height: 450,
            alt: "Vatican exhibitor postcard Sistine Chapel No. 85061-B",
          },
          reverse: {
            src: "/images/vatican03/85061-Breverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse of Vatican postcard No. 85061-B",
          },
          meta: [
            "Vatican (10 of 12)",
            "Sistine Chapel",
            exhibitorSet,
            "No. 85061-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/85062-B.jpg",
            width: 450,
            height: 281,
            alt: "Vatican exhibitor postcard Chapel of The Good Shepard No. 85062-B",
          },
          reverse: {
            src: "/images/vatican03/85062-Breverse.jpg",
            width: 300,
            height: 61,
            alt: "Reverse of Vatican postcard No. 85062-B",
          },
          meta: [
            "Vatican (11 of 12)",
            "Chapel of The Good Shepard",
            exhibitorSet,
            "No. 85062-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/88972-B.jpg",
            width: 450,
            height: 283,
            alt: "Vatican Pavilion exhibitor postcard No. 88972-B",
          },
          reverse: {
            src: "/images/vatican03/88972-Breverse.jpg",
            width: 300,
            height: 49,
            alt: "Reverse of Vatican Pavilion postcard No. 88972-B",
          },
          meta: [
            "Vatican Pavilion (12 of 12)",
            exhibitorSet,
            "No. 88972-B",
          ],
          sources: dexterVaticanSources,
        },
        {
          front: {
            src: "/images/vatican03/WF430.jpg",
            width: 450,
            height: 280,
            alt: "The Vatican Pavilion unauthorized postcard No. WF430",
          },
          reverse: {
            src: "/images/vatican03/WF430reverse.jpg",
            width: 300,
            height: 126,
            alt: "Reverse of The Vatican Pavilion postcard No. WF430",
          },
          meta: [
            "The Vatican Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF430",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/vatican03/WF-5.jpg",
            width: 450,
            height: 289,
            alt: "Vatican Pavilion unauthorized postcard No. WF5",
          },
          reverse: {
            src: "/images/vatican03/WF-5reverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse of Vatican Pavilion postcard No. WF5",
          },
          meta: [
            "Vatican Pavilion",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF5",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
      ]}
    />
  );
}
