import type { Metadata } from "next";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Jordan — nywf64.com",
  description:
    "Jordan Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan02Page() {
  return (
    <PostcardPage
      heroLabel="Jordan"
      titleId="jordan02-title"
      hero={{
        src: "/images/jordanoverview/hero-banner.jpg",
        alt: "Jordan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JordanNavChrome />}
      previousHref="/jordan01"
      overviewHref="/jordanoverview"
      nextHref="/jordan03"
      entries={[
        {
          front: {
            src: "/images/jordan02/85534-B.jpg",
            width: 450,
            height: 288,
            alt: "Jordan Pavilion",
          },
          reverse: {
            src: "/images/jordan02/85534-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Jordan Pavilion",
          },
          meta: [
            "Jordan Pavilion",
            "Exhibitor Postcard",
            "No. 85534-B",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Victor H. Bisharat A.I.A. Architect",
          ],
        },
      ]}
    />
  );
}
