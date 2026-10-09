import type { Metadata } from "next";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — American Express — nywf64.com",
  description:
    "American Express pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express postcards page — “postcards” standard.
 * Body from legacy amex03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Amex03Page() {
  return (
    <PostcardPage
      heroLabel="American Express"
      titleId="amex03-title"
      hero={{
        src: "/images/amexoverview/hero-banner.jpg",
        alt: "American Express at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<AmexNavChrome />}
      previousHref="/amex02"
      overviewHref="/amex01"
      nextHref="/amex04"
      entries={[
        {
          front: {
            src: "/images/amex03/88287-B.jpg",
            width: 283,
            height: 450,
            alt: "American Express Money Tree exhibitor postcard No. 88287-B",
          },
          reverse: {
            src: "/images/amex03/88287-Breverse.jpg",
            width: 300,
            height: 128,
            alt: "Reverse — American Express Money Tree postcard No. 88287-B",
          },
          meta: [
            "American Express Money Tree",
            "Exhibitor Postcard",
            "No. 88287-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American Express Company",
          ],
        },
        {
          front: {
            src: "/images/amex03/88288-B.jpg",
            width: 450,
            height: 284,
            alt: "American Express Pavilion exhibitor postcard No. 88288-B",
          },
          reverse: {
            src: "/images/amex03/88288-Breverse.jpg",
            width: 300,
            height: 118,
            alt: "Reverse — American Express Pavilion postcard No. 88288-B",
          },
          meta: [
            "American Express Pavilion",
            "Exhibitor Postcard",
            "No. 88288-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by American Express Company",
          ],
        },
        {
          front: {
            src: "/images/amex03/WF414.jpg",
            width: 450,
            height: 276,
            alt: "General Foods Arch No. 1 unauthorized postcard No. WF414",
          },
          reverse: {
            src: "/images/amex03/WF414reverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — General Foods Arch No. 1 postcard No. WF414",
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
