import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FlowatskiNavChrome } from "@/components/FlowatskiNavChrome";

export const metadata: Metadata = {
  title:
    "Pamphlet: Florida Citrus Water Ski Show — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Florida Citrus Water Ski Show pamphlet pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida Citrus Water Ski Show pamphlet page.
 * Body from legacy flowatski03.html — four full-width page scans (no PDF).
 * Layout: AdvertisingPage with a single-column collage and custom title.
 */
export default function Flowatski03Page() {
  return (
    <AdvertisingPage
      heroLabel="Florida Citrus Water Ski Show"
      titleId="flowatski03-title"
      title="Pamphlet: Florida Citrus Water Ski Show"
      hero={{
        src: "/images/flowatskioverview/hero-banner.jpg",
        alt: "Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FlowatskiNavChrome />}
      previousHref="/flowatski02"
      overviewHref="/flowatskioverview"
      nextHref="/flowatskioverview"
      columns={1}
      tiles={[
        {
          src: "/images/flowatski03/flowatski10.jpg",
          width: 900,
          height: 415,
          alt: "Florida Citrus Water Ski Show pamphlet page 1",
        },
        {
          src: "/images/flowatski03/flowatski11.jpg",
          width: 900,
          height: 420,
          alt: "Florida Citrus Water Ski Show pamphlet page 2",
        },
        {
          src: "/images/flowatski03/flowatski12.jpg",
          width: 900,
          height: 418,
          alt: "Florida Citrus Water Ski Show pamphlet page 3",
        },
        {
          src: "/images/flowatski03/flowatski13.jpg",
          width: 900,
          height: 421,
          alt: "Florida Citrus Water Ski Show pamphlet page 4",
        },
      ]}
    />
  );
}
