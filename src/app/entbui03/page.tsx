import type { Metadata } from "next";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import styles from "@/styles/postcardPage.module.css";

export const metadata: Metadata = {
  title: "Postcards — Entrance Building — nywf64.com",
  description:
    "Entrance Building postcards from the 1964/1965 New York World’s Fair — unauthorized cards on nywf64.com.",
};

/**
 * Entrance Building postcards page.
 * Body from legacy entbui03.html. Layout: PostcardPage (/bell03).
 */
export default function Entbui03Page() {
  return (
    <PostcardPage
      heroLabel="Entrance Building"
      titleId="entbui03-title"
      hero={{
        src: "/images/entbuioverview/hero-banner.jpg",
        alt: "Entrance Building at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<EntbuiNavChrome />}
      previousHref="/entbui02"
      overviewHref="/entbuioverview"
      nextHref="/entbui04"
      entries={[
        {
          front: {
            src: "/images/entbui03/WF411.jpg",
            width: 450,
            height: 283,
            alt: "Subway and Railroad Entrance unauthorized postcard No. WF411",
          },
          reverse: {
            src: "/images/entbui03/WF411reverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse of Subway and Railroad Entrance postcard No. WF411",
          },
          meta: [
            "Subway and Railroad Entrance",
            <span key="unauthorized" className={styles.unauthorized}>
              Unauthorized Postcard
            </span>,
            "No. WF411",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
