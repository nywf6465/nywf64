import type { Metadata } from "next";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Transportation & Travel — nywf64.com",
  description:
    "Transportation & Travel Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const advertising = (
  <span style={{ color: "#2e8b57" }}>Advertising Postcard</span>
);

const unauthorized = (
  <span className={styles.unauthorized}>Unauthorized Postcard</span>
);

/**
 * Transportation & Travel postcards page — “postcards” standard.
 * Body from legacy trantrav03.html. Layout: PostcardPage (/bell03).
 */
export default function Trantrav03Page() {
  return (
    <PostcardPage
      heroLabel="Transportation & Travel"
      titleId="trantrav03-title"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantrav02"
      overviewHref="/trantravoverview"
      nextHref="/trantrav04"
      entries={[
        {
          front: {
            src: "/images/trantrav03/P54026.jpg",
            width: 450,
            height: 279,
            alt: "Allied Van Lines Transportation and Travel Pavilion postcard No. P54026",
          },
          reverse: {
            src: "/images/trantrav03/P54026reverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Allied Van Lines postcard No. P54026",
          },
          meta: [
            "Allied Van Lines",
            "Transportation and Travel Pavilion",
            advertising,
            "No. P54026",
          ],
          sources: [
            "Source: Postcard Made by Colour Picture (Plastichrome)",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/trantrav03/WF408.jpg",
            width: 450,
            height: 278,
            alt: "Transportation Area unauthorized postcard No. WF408",
          },
          reverse: {
            src: "/images/trantrav03/WF408reverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Transportation Area postcard No. WF408",
          },
          meta: ["Transportation Area", unauthorized, "No. WF408"],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/trantrav03/WF436.jpg",
            width: 450,
            height: 279,
            alt: "Transportation & Travel Pavilion unauthorized postcard No. WF436",
          },
          reverse: {
            src: "/images/trantrav03/WF436reverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Transportation & Travel Pavilion postcard No. WF436",
          },
          meta: [
            "Transportation & Travel Pavilion",
            unauthorized,
            "No. WF436",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
