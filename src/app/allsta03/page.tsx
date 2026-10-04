import type { Metadata } from "next";
import { AllstaNavChrome } from "@/components/AllstaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — All-State Properties & Macy's — nywf64.com",
  description:
    "All-State Properties & Macy's photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * All-State Properties & Macy's photograph album — “photographs” standard.
 * Body from legacy allsta03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Allsta03Page() {
  return (
    <PhotographsPage
      heroLabel="All-State Properties & Macy's"
      titleId="allsta03-title"
      hero={{
        src: "/images/allstaoverview/hero-banner.jpg",
        alt: "All-State Properties & Macy's at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AllstaNavChrome />}
      previousHref="/allsta02"
      overviewHref="/allstaoverview"
      nextHref="/allstaoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/allsta03/allsta02.jpg",
                width: 400,
                height: 294,
                alt: "A Liesurama Home can be see on the left of this photo",
              },
              title: "A Liesurama Home can be see on the left of this photo",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
          ],
        },
      ]}
    />
  );
}
