import type { Metadata } from "next";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Continental Insurance — nywf64.com",
  description:
    "Continental Insurance pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance postcards page — “postcards” standard.
 * Body from legacy conins03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Conins03Page() {
  return (
    <PostcardPage
      heroLabel="Continental Insurance"
      titleId="conins03-title"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins02"
      overviewHref="/coninsoverview"
      nextHref="/conins04"
      entries={[
        {
          front: {
            src: "/images/pcards/89814-B.jpg",
            width: 280,
            height: 450,
            alt: "Continental Insurance Pavilion exhibitor postcard No. 89814-B",
          },
          reverse: {
            src: "/images/pcards/89814-Breverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Continental Insurance Pavilion postcard No. 89814-B",
          },
          meta: [
            "Continental Insurance Pavilion",
            "Exhibitor Postcard",
            "No. 89814-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Continental Insurance",
          ],
        },
        {
          front: {
            src: "/images/pcards/75707-B.jpg",
            width: 287,
            height: 450,
            alt: "Continental Insurance Co. Pavilion official postcard No. 75707-B",
          },
          reverse: {
            src: "/images/pcards/75707-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Continental Insurance Co. Pavilion postcard No. 75707-B",
          },
          meta: [
            "Continental Insurance Co. Pavilion",
            "Official Postcard",
            "No. 75707-B",
            "Dexter No. WF-26",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards/88289-B.jpg",
            width: 450,
            height: 279,
            alt: "Continental Insurance Companies Pavilion exhibitor postcard No. 88289-B",
          },
          reverse: {
            src: "/images/pcards/88289-Breverse.jpg",
            width: 300,
            height: 109,
            alt: "Reverse — Continental Insurance Companies Pavilion postcard No. 88289-B",
          },
          meta: [
            "Continental Insurance Companies Pavilion",
            "Exhibitor Postcard",
            "No. 88289-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/pcards/96327-B.jpg",
            width: 450,
            height: 283,
            alt: "Wonderful World of Scouting — Scouts at Continental Insurance postcard No. 96327-B",
          },
          reverse: {
            src: "/images/pcards/96327-Breverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Wonderful World of Scouting postcard No. 96327-B",
          },
          meta: [
            "Wonderful World of Scouting (5 of 6)",
            "Scouts at Continental Insurance",
            "Exhibitor Postcard Set",
            "No. 96327-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Fascolor Incorporated",
          ],
        },
      ]}
    />
  );
}
