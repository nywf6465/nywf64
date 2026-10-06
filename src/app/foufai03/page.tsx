import type { Metadata } from "next";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Fountains of the Fairs — nywf64.com",
  description:
    "Fountains of the Fairs postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountains of the Fairs postcards page — “postcards” standard.
 * Body from legacy foufai03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Foufai03Page() {
  return (
    <PostcardPage
      heroLabel="Fountains of the Fairs"
      titleId="foufai03-title"
      hero={{
        src: "/images/foufaioverview/hero-banner.jpg",
        alt: "Fountains of the Fairs at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FoucaultNavChrome />}
      previousHref="/foufai02"
      overviewHref="/foufaioverview"
      nextHref="/foufai04"
      entries={[
        {
          front: {
            src: "/images/foufai03/WF405.jpg",
            width: 450,
            height: 282,
            alt: "7 Up and Dupont Pavilions",
          },
          reverse: {
            src: "/images/foufai03/WF405reverse.jpg",
            width: 300,
            height: 58,
            alt: "Reverse — 7 Up and Dupont Pavilions",
          },
          meta: [
            "7 Up and Dupont Pavilions",
            "Unauthorized Postcard",
            "No. WF405",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/foufai03/92014-B.jpg",
            width: 450,
            height: 281,
            alt: "Night Fountains of the Fair",
          },
          reverse: {
            src: "/images/foufai03/92014-Breverse.jpg",
            width: 300,
            height: 93,
            alt: "Reverse — Night Fountains of the Fair",
          },
          meta: [
            "Night Fountains of the Fair",
            "Official Postcard",
            "No. 92014-B",
            "Dexter No. WF-111",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/foufai03/WF412.jpg",
            width: 450,
            height: 282,
            alt: "Fountains of the Fair",
          },
          reverse: {
            src: "/images/foufai03/WF412reverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Fountains of the Fair",
          },
          meta: [
            "Fountains of the Fair",
            "Unauthorized Postcard",
            "No. WF412",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
      ]}
    />
  );
}
