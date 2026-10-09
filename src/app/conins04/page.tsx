import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { ConinsNavChrome } from "@/components/ConinsNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Continental Insurance — nywf64.com",
  description:
    "Continental Insurance pavilion advertisements from the 1964 and 1965 Official Guide — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Continental Insurance advertising page — “advertising” standard.
 * Body from legacy conins04.html (two 2×3 ad collages). Layout: AdvertisingPage.
 */
export default function Conins04Page() {
  return (
    <AdvertisingPage
      heroLabel="Continental Insurance"
      titleId="conins04-title"
      hero={{
        src: "/images/coninsoverview/hero-banner.jpg",
        alt: "Continental Insurance at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<ConinsNavChrome />}
      previousHref="/conins03"
      overviewHref="/coninsoverview"
      nextHref="/conins05"
      columns={2}
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/conins/cons41.01.jpg",
              width: 300,
              height: 326,
              alt: "Continental Insurance advertisement panel 1",
            },
            {
              src: "/images/conins/cons41.02.jpg",
              width: 300,
              height: 326,
              alt: "Continental Insurance advertisement panel 2",
            },
            {
              src: "/images/conins/cons41.03.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance advertisement panel 3",
            },
            {
              src: "/images/conins/cons41.04.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance advertisement panel 4",
            },
            {
              src: "/images/conins/cons41.05.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance advertisement panel 5",
            },
            {
              src: "/images/conins/cons41.06.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance advertisement panel 6",
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
              src: "/images/conins/cons42.01.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 1",
            },
            {
              src: "/images/conins/cons42.02.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 2",
            },
            {
              src: "/images/conins/cons42.03.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 3",
            },
            {
              src: "/images/conins/cons42.04.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 4",
            },
            {
              src: "/images/conins/cons42.05.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 5",
            },
            {
              src: "/images/conins/cons42.06.jpg",
              width: 300,
              height: 325,
              alt: "Continental Insurance 1965 advertisement panel 6",
            },
          ],
          sources: [
            <>
              Source: Advertisement{" "}
              <em>
                1965 Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
    />
  );
}
