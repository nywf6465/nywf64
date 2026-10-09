import type { Metadata } from "next";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import { HOLLYWOOD_HERO } from "@/components/HollywoodLegacyTopicPage";

export const metadata: Metadata = {
  title: "Postcards — Hollywood — nywf64.com",
  description:
    "Hollywood U.S.A. pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Hollywood03Page() {
  return (
    <PostcardPage
      heroLabel="Hollywood"
      titleId="hollywood03-title"
      hero={HOLLYWOOD_HERO}
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood02"
      overviewHref="/hollywoodoverview"
      nextHref="/hollywood04"
      entries={[
        {
          front: {
            src: "/images/hollywood03/None27.jpg",
            width: 450,
            height: 285,
            alt: "Hollywood U.S.A. exhibitor postcard",
          },
          reverse: {
            src: "/images/hollywood03/None27reverse.jpg",
            width: 300,
            height: 381,
            alt: "Reverse — Hollywood U.S.A. exhibitor postcard",
          },
          meta: ["Hollywood U.S.A.", "Exhibitor Postcard", "No. N/A"],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Unknown",
            "Presented courtesy Craig Bavaro Collection",
          ],
        },
      ]}
    />
  );
}
