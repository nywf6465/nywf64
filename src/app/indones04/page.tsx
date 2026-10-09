import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { IndonesNavChrome } from "@/components/IndonesNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Indonesia — nywf64.com",
  description:
    "Indonesia Pavilion advertisement from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy indones04.html — six-panel collage. */
export default function Indones04Page() {
  return (
    <AdvertisingPage
      heroLabel="Indonesia"
      titleId="indones04-title"
      hero={{
        src: "/images/indonesoverview/hero-banner.jpg",
        alt: "Indonesia at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<IndonesNavChrome />}
      previousHref="/indones03"
      overviewHref="/indonesoverview"
      nextHref="/indones05"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/indones04/indones28.01.jpg",
              width: 300,
              height: 338,
              alt: "Indonesia advertisement panel 1",
            },
            {
              src: "/images/indones04/indones28.02.jpg",
              width: 300,
              height: 338,
              alt: "Indonesia advertisement panel 2",
            },
            {
              src: "/images/indones04/indones28.03.jpg",
              width: 300,
              height: 337,
              alt: "Indonesia advertisement panel 3",
            },
            {
              src: "/images/indones04/indones28.04.jpg",
              width: 300,
              height: 337,
              alt: "Indonesia advertisement panel 4",
            },
            {
              src: "/images/indones04/indones28.05.jpg",
              width: 300,
              height: 337,
              alt: "Indonesia advertisement panel 5",
            },
            {
              src: "/images/indones04/indones28.06.jpg",
              width: 300,
              height: 337,
              alt: "Indonesia advertisement panel 6",
            },
          ],
          sources: [
            "Source: Advertisement 1964 Official Guide, 1964-1965 New York World's Fair",
          ],
        },
      ]}
    />
  );
}
