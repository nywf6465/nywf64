import type { Metadata } from "next";
import { CokeNavChrome } from "@/components/CokeNavChrome";
import { AdvertisingPage } from "@/components/AdvertisingPage";

export const metadata: Metadata = {
  title: "K2US Log Sheet — Coca-Cola — nywf64.com",
  description:
    "K2US amateur radio log sheet from the Coca-Cola pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Coca-Cola — K2US Log Sheet.
 * Body from legacy coke10.html (3×3 page collage).
 * Layout: AdvertisingPage collage API with a custom navy title.
 */
export default function Coke10Page() {
  return (
    <AdvertisingPage
      heroLabel="Coca-Cola"
      titleId="coke10-title"
      title="K2US Log Sheet"
      hero={{
        src: "/images/cokeoverview/hero-banner.jpg",
        alt: "Coca-Cola at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CokeNavChrome />}
      previousHref="/coke09"
      overviewHref="/cokeoverview"
      nextHref="/coke11"
      columns={3}
      tiles={[
        {
          src: "/images/coke10/coke06.01.jpg",
          width: 301,
          height: 400,
          alt: "K2US log sheet page 1",
        },
        {
          src: "/images/coke10/coke06.02.jpg",
          width: 300,
          height: 400,
          alt: "K2US log sheet page 2",
        },
        {
          src: "/images/coke10/coke06.03.jpg",
          width: 300,
          height: 400,
          alt: "K2US log sheet page 3",
        },
        {
          src: "/images/coke10/coke06.04.jpg",
          width: 301,
          height: 401,
          alt: "K2US log sheet page 4",
        },
        {
          src: "/images/coke10/coke06.05.jpg",
          width: 300,
          height: 401,
          alt: "K2US log sheet page 5",
        },
        {
          src: "/images/coke10/coke06.06.jpg",
          width: 300,
          height: 401,
          alt: "K2US log sheet page 6",
        },
        {
          src: "/images/coke10/coke06.07.jpg",
          width: 301,
          height: 400,
          alt: "K2US log sheet page 7",
        },
        {
          src: "/images/coke10/coke06.08.jpg",
          width: 300,
          height: 400,
          alt: "K2US log sheet page 8",
        },
        {
          src: "/images/coke10/coke06.09.jpg",
          width: 300,
          height: 400,
          alt: "K2US log sheet page 9",
        },
      ]}
    />
  );
}
