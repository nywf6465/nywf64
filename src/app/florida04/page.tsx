import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";

export const metadata: Metadata = {
  title: "Advertising — Florida — nywf64.com",
  description:
    "Florida Pavilion advertisements from the 1964 and 1965 Official Guides — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida advertising page.
 * Body from legacy florida04.html (two 6-tile Official Guide ads; no PDF).
 * Layout: AdvertisingPage (/amex04 / unisph04).
 */
export default function Florida04Page() {
  return (
    <AdvertisingPage
      heroLabel="Florida"
      titleId="florida04-title"
      hero={{
        src: "/images/floridaoverview/hero-banner.jpg",
        alt: "Florida Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FloridaNavChrome />}
      previousHref="/florida03"
      overviewHref="/floridaoverview"
      nextHref="/florida05"
      collages={[
        {
          columns: 2,
          tiles: [
            {
              src: "/images/florida04/florid09.1.jpg",
              width: 300,
              height: 331,
              alt: "Florida 1964 Official Guide advertisement panel 1",
            },
            {
              src: "/images/florida04/florid09.2.jpg",
              width: 300,
              height: 331,
              alt: "Florida 1964 Official Guide advertisement panel 2",
            },
            {
              src: "/images/florida04/florid09.3.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1964 Official Guide advertisement panel 3",
            },
            {
              src: "/images/florida04/florid09.4.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1964 Official Guide advertisement panel 4",
            },
            {
              src: "/images/florida04/florid09.5.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1964 Official Guide advertisement panel 5",
            },
            {
              src: "/images/florida04/florid09.6.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1964 Official Guide advertisement panel 6",
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
              src: "/images/florida04/florid10.1.jpg",
              width: 300,
              height: 331,
              alt: "Florida 1965 Official Guide advertisement panel 1",
            },
            {
              src: "/images/florida04/florid10.2.jpg",
              width: 300,
              height: 331,
              alt: "Florida 1965 Official Guide advertisement panel 2",
            },
            {
              src: "/images/florida04/florid10.3.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1965 Official Guide advertisement panel 3",
            },
            {
              src: "/images/florida04/florid10.4.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1965 Official Guide advertisement panel 4",
            },
            {
              src: "/images/florida04/florid10.5.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1965 Official Guide advertisement panel 5",
            },
            {
              src: "/images/florida04/florid10.6.jpg",
              width: 300,
              height: 330,
              alt: "Florida 1965 Official Guide advertisement panel 6",
            },
          ],
          sources: [
            <>
              Source: Advertisement 1965
              <em>
                {" "}
                Official Guide, 1964-1965 New York World&apos;s Fair
              </em>
            </>,
          ],
        },
      ]}
    />
  );
}
