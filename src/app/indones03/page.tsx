import type { Metadata } from "next";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
export const metadata: Metadata = {
  title: "Postcards — Indonesia — nywf64.com",
  description:
    "Indonesia Pavilion exhibitor postcard from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones03.html (Adobe generator meta omitted). */
export default function Indones03Page() {
  return (
    <PostcardPage
      heroLabel="Indonesia"
      titleId="indones03-title"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indones02"
      overviewHref="/indonesoverview"
      nextHref="/indones04"
      entries={[
        {
          front: {
            src: "/images/indones03/P58657.jpg",
            width: 450,
            height: 280,
            alt: "Indonesia Pavilion exhibitor postcard No. P58657",
          },
          reverse: {
            src: "/images/indones03/P58657reverse.jpg",
            width: 300,
            height: 107,
            alt: "Reverse of Indonesia Pavilion postcard No. P58657",
          },
          meta: ["Indonesia Pavilion", "Exhibitor Postcard", "No. P58657"],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
            "Presented courtesy Craig Bavaro Collection",
          ],
        },
      ]}
    />
  );
}
