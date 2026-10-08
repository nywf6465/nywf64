import type { Metadata } from "next";
import { SocmobilNavChrome } from "@/components/SocmobilNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Socony Mobil — nywf64.com",
  description:
    "Socony Mobil pavilion photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Socony Mobil photograph gallery — “photographs” standard.
 * Body from legacy socmobil03.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Socmobil03Page() {
  return (
    <PhotographsPage
      heroLabel="Socony Mobil"
      titleId="socmobil03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/socmobiloverview/hero-banner.jpg",
        alt: "Socony Mobil pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SocmobilNavChrome />}
      previousHref="/socmobil02"
      overviewHref="/socmobiloverview"
      nextHref="/socmobiloverview"
      sections={[
        {
          photos: [
            {
              image: {
                src: "/images/socmobil03/5468Large.jpg",
                width: 400,
                height: 282,
                alt: "Artist's rendering of the Socony Mobil Pavilion",
              },
              title: "Artist's rendering of the Socony Mobil Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/socmobil03/socmobil01.jpg",
                width: 400,
                height: 264,
                alt: "Socony Mobil Pavilion",
              },
              title: "Socony Mobil Pavilion",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}
