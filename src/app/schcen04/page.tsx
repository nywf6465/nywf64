import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { SchcenNavChrome } from "@/components/SchcenNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Schaefer — nywf64.com",
  description:
    "Schaefer Center pavilion advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Schaefer Center advertising page — “advertising” standard.
 * Body from legacy schcen04.html. Layout: AdvertisingPage (/amex04).
 */
export default function Schcen04Page() {
  return (
    <AdvertisingPage
      heroLabel="Schaefer"
      titleId="schcen04-title"
      hero={{
        src: "/images/schcenoverview/hero-banner.jpg",
        alt: "Schaefer Center at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SchcenNavChrome />}
      previousHref="/schcen03"
      overviewHref="/schcenoverview"
      nextHref="/schcen05"
      columns={3}
      tiles={[
        {
          src: "/images/schcen04/schcen32.01.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 1",
        },
        {
          src: "/images/schcen04/schcen32.02.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 2",
        },
        {
          src: "/images/schcen04/schcen32.03.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 3",
        },
        {
          src: "/images/schcen04/schcen32.04.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 4",
        },
        {
          src: "/images/schcen04/schcen32.05.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 5",
        },
        {
          src: "/images/schcen04/schcen32.06.jpg",
          width: 300,
          height: 275,
          alt: "Schaefer Center advertisement panel 6",
        },
      ]}
      sources={[
        <>
          Source: Advertisement{" "}
          <em>
            1964 & 1965 Official Guide, 1964-1965 New York World&apos;s Fair
          </em>
        </>,
      ]}
    />
  );
}
