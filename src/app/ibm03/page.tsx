import type { Metadata } from "next";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — IBM Pavilion — nywf64.com",
  description:
    "IBM Pavilion postcards from the 1964/1965 New York World’s Fair — official and exhibitor cards on nywf64.com.",
};

/**
 * IBM postcards page — body from legacy ibm03.html (Adobe chrome omitted).
 * Legacy reverse filenames share None(14reverse.jpg) for two fronts.
 */
export default function Ibm03Page() {
  return (
    <PostcardPage
      heroLabel="IBM Pavilion"
      titleId="ibm03-title"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm02"
      overviewHref="/ibmoverview"
      nextHref="/ibm04"
      entries={[
        {
          front: {
            src: "/images/ibm03/80197-B.jpg",
            width: 450,
            height: 285,
            alt: "IBM Pavilion official postcard No. 80197-B",
          },
          reverse: {
            src: "/images/ibm03/80197-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse of IBM Pavilion postcard No. 80197-B",
          },
          meta: [
            "IBM Pavilion",
            "Official Postcard",
            "No. 80197-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/ibm03/none-14.jpg",
            width: 600,
            height: 300,
            alt: "IBM Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/ibm03/none-14reverse.jpg",
            width: 300,
            height: 25,
            alt: "Reverse of IBM Pavilion exhibitor postcard",
          },
          meta: [
            "IBM Pavilion",
            "Exhibitor Postcard",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown.",
            "Source: Postcard Published by Unknown",
          ],
        },
        {
          front: {
            src: "/images/ibm03/none-16.jpg",
            width: 300,
            height: 597,
            alt: "IBM Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/ibm03/none-14reverse.jpg",
            width: 300,
            height: 25,
            alt: "Reverse of IBM Pavilion exhibitor postcard (legacy None(14reverse.jpg))",
          },
          meta: [
            "IBM Pavilion",
            "Exhibitor Postcard",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
