import type { Metadata } from "next";
import { AdvertisingPage } from "@/components/AdvertisingPage";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";

export const metadata: Metadata = {
  title: "Brochure: Come to the Fair — West Virginia — nywf64.com",
  description:
    "West Virginia Pavilion Come to the Fair brochure pages — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia brochure — Come to the Fair (legacy wesvir06.html image strips).
 * Layout: AdvertisingPage with custom title.
 */
export default function Wesvir06Page() {
  return (
    <AdvertisingPage
      heroLabel="West Virginia"
      titleId="wesvir06-title"
      title="Brochure: Come to the Fair"
      hero={{
        src: "/images/wesviroverview/hero-banner.jpg",
        alt: "West Virginia pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WesvirNavChrome />}
      previousHref="/wesvir05"
      overviewHref="/wesviroverview"
      nextHref="/wesvir07"
      collages={[
        {
          columns: 4,
          tiles: [1, 2, 3, 4].map((n) => ({
            src: `/images/wesvir06/wesvir39.${n}.jpg`,
            width: 400,
            height: 210,
            alt: `Come to the Fair brochure panel 39.${n}`,
          })),
        },
        {
          columns: 3,
          tiles: [1, 2, 3].map((n) => ({
            src: `/images/wesvir06/wesvir44.${n}.jpg`,
            width: 300,
            height: 294,
            alt: `Come to the Fair brochure panel 44.${n}`,
          })),
        },
        {
          columns: 6,
          tiles: [1, 2, 3, 4, 5, 6].map((n) => ({
            src: `/images/wesvir06/wesvir41.${n}.jpg`,
            width: 300,
            height: 240,
            alt: `Come to the Fair brochure panel 41.${n}`,
          })),
        },
        {
          columns: 3,
          tiles: [1, 2, 3].map((n) => ({
            src: `/images/wesvir06/wesvir42.${n}.jpg`,
            width: 300,
            height: 373,
            alt: `Come to the Fair brochure panel 42.${n}`,
          })),
        },
        {
          columns: 3,
          tiles: [1, 2, 3].map((n) => ({
            src: `/images/wesvir06/wesvir43.${n}.jpg`,
            width: 300,
            height: 412,
            alt: `Come to the Fair brochure panel 43.${n}`,
          })),
          sources: [<>SOURCE: Brochure Come to the Fair</>],
        },
        {
          columns: 4,
          tiles: [1, 2, 3, 4].map((n) => ({
            src: `/images/wesvir06/wesvir40.${n}.jpg`,
            width: 400,
            height: 210,
            alt: `Come to the Fair brochure panel 40.${n}`,
          })),
        },
      ]}
    />
  );
}
