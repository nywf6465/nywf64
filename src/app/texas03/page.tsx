import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { TexasNavChrome } from "@/components/TexasNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Texas Pavilions & Music Hall — nywf64.com",
  description:
    "Texas Pavilions & Music Hall advertisements from the 1964 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Texas Pavilions & Music Hall advertising page — “advertising” standard.
 * Body from legacy texas03.html. Layout: AdvertisingPage (/amex04).
 */
export default function Texas03Page() {
  return (
    <AdvertisingPage
      heroLabel="Texas Pavilions & Music Hall"
      titleId="texas03-title"
      hero={{
        src: "/images/texasoverview/hero-banner.jpg",
        alt: "Texas Pavilions & Music Hall at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TexasNavChrome />}
      previousHref="/texas02"
      overviewHref="/texasoverview"
      nextHref="/texas04"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/texas03/texas137.1.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 1",
            },
            {
              src: "/images/texas03/texas137.2.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 2",
            },
            {
              src: "/images/texas03/texas137.3.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 3",
            },
            {
              src: "/images/texas03/texas137.4.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 4",
            },
          ],
          sources: [
            <>
              Source: Advertisement{" "}
              <em>
                1964 Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
        {
          columns: 2,
          tiles: [
            {
              src: "/images/texas03/texas138.1.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 5",
            },
            {
              src: "/images/texas03/texas138.2.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 6",
            },
            {
              src: "/images/texas03/texas138.3.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 7",
            },
            {
              src: "/images/texas03/texas138.4.jpg",
              width: 300,
              height: 250,
              alt: "Texas Pavilions & Music Hall advertisement panel 8",
            },
          ],
          sources: [
            <>
              Source: Advertisement 1964{" "}
              <em>
                Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
    />
  );
}
