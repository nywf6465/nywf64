import type { Metadata } from "next";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — House of Good Taste — nywf64.com",
  description:
    "House of Good Taste pavilion postcards — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy hougt03.html. Layout: PostcardPage (/bell03). */
export default function Hougt03Page() {
  return (
    <PostcardPage
      heroLabel="House of Good Taste"
      titleId="hougt03-title"
      hero={{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HougtNavChrome />}
      previousHref="/hougt02"
      overviewHref="/hougtoverview"
      nextHref="/hougt04"
      entries={[
        {
          front: {
            src: "/images/hougt03/None(11).jpg",
            width: 700,
            height: 268,
            alt: "House of Good Taste exhibitor postcard",
          },
          reverse: {
            src: "/images/hougt03/None(11)reverse.jpg",
            width: 200,
            height: 294,
            alt: "Reverse of House of Good Taste postcard",
          },
          meta: [
            "House of Good Taste",
            "Exhibitor Postcard",
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Unknown",
          ],
        },
      ]}
    />
  );
}
