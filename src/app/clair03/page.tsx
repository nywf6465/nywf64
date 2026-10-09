import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ClairNavChrome } from "@/components/ClairNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel advertisements from the 1964 & 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol advertising page — “advertising” standard.
 * Body from legacy clair03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Clair03Page() {
  return (
    <AdvertisingPage
      heroLabel="Clairol"
      titleId="clair03-title"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clair02"
      overviewHref="/clairoverview"
      nextHref="/clair04"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/clair03/clair65.1.jpg",
              width: 300,
              height: 331,
              alt: "Clairol 1964 advertisement panel 1",
            },
            {
              src: "/images/clair03/clair65.2.jpg",
              width: 300,
              height: 331,
              alt: "Clairol 1964 advertisement panel 2",
            },
            {
              src: "/images/clair03/clair65.3.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1964 advertisement panel 3",
            },
            {
              src: "/images/clair03/clair65.4.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1964 advertisement panel 4",
            },
            {
              src: "/images/clair03/clair65.5.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1964 advertisement panel 5",
            },
            {
              src: "/images/clair03/clair65.6.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1964 advertisement panel 6",
            },
          ],
          sources: [
            <>
              Source: Advertisement{" "}
              <em>1964 Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/clair03/clair66.1.jpg",
              width: 300,
              height: 331,
              alt: "Clairol 1965 advertisement panel 1",
            },
            {
              src: "/images/clair03/clair66.2.jpg",
              width: 300,
              height: 331,
              alt: "Clairol 1965 advertisement panel 2",
            },
            {
              src: "/images/clair03/clair66.3.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1965 advertisement panel 3",
            },
            {
              src: "/images/clair03/clair66.4.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1965 advertisement panel 4",
            },
            {
              src: "/images/clair03/clair66.5.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1965 advertisement panel 5",
            },
            {
              src: "/images/clair03/clair66.6.jpg",
              width: 300,
              height: 330,
              alt: "Clairol 1965 advertisement panel 6",
            },
          ],
          sources: [
            <>
              Source: Advertisement 1965
              <em> Official Guide, 1964-1965 New York World&apos;s Fair</em>
            </>,
          ],
        },
      ]}
    />
  );
}
