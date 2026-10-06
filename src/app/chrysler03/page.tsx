import type { Metadata } from "next";
import { ChryslerNavChrome } from "@/components/ChryslerNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Chrysler — nywf64.com",
  description:
    "Chrysler Autofare postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const official = (
  <span style={{ color: "#1e90ff" }}>Official Postcard</span>
);

/**
 * Chrysler postcards page — “postcards” standard.
 * Body from legacy chrysler03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Chrysler03Page() {
  return (
    <PostcardPage
      heroLabel="Chrysler"
      titleId="chrysler03-title"
      hero={{
        src: "/images/chrysleroverview/hero-banner.jpg",
        alt: "Chrysler at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChryslerNavChrome />}
      previousHref="/chrysler02"
      overviewHref="/chrysleroverview"
      nextHref="/chrysler04"
      entries={[
        {
          front: {
            src: "/images/chrysler03/86856-B.jpg",
            width: 450,
            height: 282,
            alt: "Chrysler Autofare postcard",
          },
          reverse: {
            src: "/images/chrysler03/86856-Breverse.jpg",
            width: 300,
            height: 143,
            alt: "Reverse — Chrysler Autofare postcard",
          },
          meta: [
            "Chrysler -Autofare",
            official,
            "No. 86856-B",
            "Dexter No. WF-48",
            "Manhattan No. W-51",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/chrysler03/DT-88529-B.jpg",
            width: 450,
            height: 282,
            alt: "Chrysler Autofare postcard",
          },
          reverse: {
            src: "/images/chrysler03/DT-88529-Breverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Chrysler Autofare postcard",
          },
          meta: [
            "Chrysler Autofare",
            official,
            "No. 88529-B",
            "Dexter No. WF-98",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
