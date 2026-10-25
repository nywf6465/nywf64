import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Official Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Official Post Cards of the 1964/1965 New York World’s Fair — Dexter Press and Manhattan Post Card Publishing Co. cards from the nywf64.com collection.",
};

/**
 * Official Postcards gallery continued (legacy pcards03.html → /pcards02).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 3 (pcardsoverview Page 1, pcards01 Page 2). PREVIOUS → /pcards01; NEXT → /pcards03.
 */
export default function Pcards02Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards02-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards01"
      overviewHref="/pcardsoverview"
      nextHref="/pcards03"
      entries={[
        {
          front: {
            src: "/images/pcards02/76703-B.jpg",
            width: 450,
            height: 282,
            alt: "Billy Graham Pavilion official postcard No. 76703-B",
          },
          reverse: {
            src: "/images/pcards02/76703-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Billy Graham Pavilion official postcard",
          },
          meta: [
            "Billy Graham Pavilion",
            "Official Postcard",
            "No. 76703-B",
            "Dexter No. WF-24",
            "Manhattan No. W-38",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/76843-B.jpg",
            width: 450,
            height: 283,
            alt: "Novelty Card - 4 picture layout official postcard No. 76843-B",
          },
          reverse: {
            src: "/images/pcards02/76843-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — Novelty Card - 4 picture layout official postcard",
          },
          meta: [
            "Novelty Card - 4 picture layout",
            "Official Postcard",
            "No. 76843-B",
            "Dexter No. WF-2",
            "Manhattan No. W-1",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/77076-B.jpg",
            width: 450,
            height: 284,
            alt: "Monorail (day) official postcard No. 77076-B",
          },
          reverse: {
            src: "/images/pcards02/77076-Breverse.jpg",
            width: 300,
            height: 139,
            alt: "Reverse — Monorail (day) official postcard",
          },
          meta: [
            "Monorail (day)",
            "Official Postcard",
            "No. 77076-B",
            "Dexter No. WF-15",
            "Manhattan No. W-29",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/77765-B.jpg",
            width: 450,
            height: 278,
            alt: "Travelers Insurance official postcard No. 77765-B",
          },
          reverse: {
            src: "/images/pcards02/77765-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Travelers Insurance official postcard",
          },
          meta: [
            "Travelers Insurance",
            "Official Postcard",
            "No. 77765-B",
            "Dexter No. WF-45",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78165-B.jpg",
            width: 450,
            height: 281,
            alt: "General Cigar Pavilion official postcard No. 78165-B",
          },
          reverse: {
            src: "/images/pcards02/78165-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — General Cigar Pavilion official postcard",
          },
          meta: [
            "General Cigar Pavilion",
            "Official Postcard",
            "No. 78165-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78493-B.jpg",
            width: 450,
            height: 282,
            alt: "Unisphere - TWA Terminal official postcard No. 78493-B",
          },
          reverse: {
            src: "/images/pcards02/78493-Breverse.jpg",
            width: 300,
            height: 75,
            alt: "Reverse — Unisphere - TWA Terminal official postcard",
          },
          meta: [
            "Unisphere - TWA Terminal",
            "Official Postcard",
            "No. 78493-B",
            "Dexter No. N/A",
            "Manhattan No. W-3",
          ],
          sources: [
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78494-B.jpg",
            width: 282,
            height: 450,
            alt: "Unisphere - Statue of Liberty official postcard No. 78494-B",
          },
          reverse: {
            src: "/images/pcards02/78494-Breverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Unisphere - Statue of Liberty official postcard",
          },
          meta: [
            "Unisphere - Statue of Liberty",
            "Official Postcard",
            "No. 78494-B",
            "Dexter No. N/A",
            "Manhattan No. W-4",
          ],
          sources: [
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78495-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere - United Nations Building official postcard No. 78495-B",
          },
          reverse: {
            src: "/images/pcards02/78495-Breverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Unisphere - United Nations Building official postcard",
          },
          meta: [
            "Unisphere - United Nations Building",
            "Official Postcard",
            "No. 78495-B",
            "Dexter No. N/A",
            "Manhattan No. W-5",
          ],
          sources: [
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78496-B.jpg",
            width: 450,
            height: 280,
            alt: "Unisphere - Empire State Building official postcard No. 78496-B",
          },
          reverse: {
            src: "/images/pcards02/78496-Breverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — Unisphere - Empire State Building official postcard",
          },
          meta: [
            "Unisphere - Empire State Building",
            "Official Postcard",
            "No. 78496-B",
            "Dexter No. N/A",
            "Manhattan No. W-6",
          ],
          sources: [
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/78497-B.jpg",
            width: 283,
            height: 450,
            alt: "Unisphere - Rockefeller Center official postcard No. 78497-B",
          },
          reverse: {
            src: "/images/pcards02/78497-Breverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — Unisphere - Rockefeller Center official postcard",
          },
          meta: [
            "Unisphere - Rockefeller Center",
            "Official Postcard",
            "No. 78497-B",
            "Dexter No. N/A",
            "Manhattan No. W-7",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/79676-B.jpg",
            width: 450,
            height: 286,
            alt: "Color Palette Card official postcard No. 79676-B",
          },
          reverse: {
            src: "/images/pcards02/79676-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Color Palette Card official postcard",
          },
          meta: [
            "Color Palette Card",
            "Official Postcard",
            "No. 79676-B",
            "Dexter No. WF-1",
            "Manhattan No. W-2",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/79912-B.jpg",
            width: 450,
            height: 285,
            alt: "Coca Cola Pavilion official postcard No. 79912-B",
          },
          reverse: {
            src: "/images/pcards02/79912-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Coca Cola Pavilion official postcard",
          },
          meta: [
            "Coca Cola Pavilion",
            "Official Postcard",
            "No. 79912-B",
            "Dexter No. N/A",
            "Manhattan No. W-32",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80197-B.jpg",
            width: 450,
            height: 285,
            alt: "IBM Pavilion official postcard No. 80197-B",
          },
          reverse: {
            src: "/images/pcards02/80197-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — IBM Pavilion official postcard",
          },
          meta: [
            "IBM Pavilion",
            "Official Postcard",
            "No. 80197-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80424-B.jpg",
            width: 450,
            height: 282,
            alt: "Dupont Pavilion official postcard No. 80424-B",
          },
          reverse: {
            src: "/images/pcards02/80424-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Dupont Pavilion official postcard",
          },
          meta: [
            "Dupont Pavilion",
            "Official Postcard",
            "No. 80424-B",
            "Dexter No. WF-21",
            "Manhattan No. W-39",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80480-B.jpg",
            width: 278,
            height: 450,
            alt: "Blue Unisphere official postcard No. 80480-B",
          },
          reverse: {
            src: "/images/pcards02/80480-Breverse.jpg",
            width: 300,
            height: 111,
            alt: "Reverse — Blue Unisphere official postcard",
          },
          meta: [
            "Blue Unisphere",
            "Official Postcard",
            "No. 80480-B",
            "Dexter No. WF-11",
            "Manhattan No. W-49",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80484-B.jpg",
            width: 450,
            height: 283,
            alt: "Kodak Pavilion official postcard No. 80484-B",
          },
          reverse: {
            src: "/images/pcards02/80484-Breverse.jpg",
            width: 300,
            height: 102,
            alt: "Reverse — Kodak Pavilion official postcard",
          },
          meta: [
            "Kodak Pavilion",
            "Official Postcard",
            "No. 80484-B",
            "Dexter No. WF-20",
            "Manhattan No. W-44",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80489-B.jpg",
            width: 450,
            height: 279,
            alt: "Masonic Center official postcard No. 80489-B",
          },
          reverse: {
            src: "/images/pcards02/80489-Breverse.jpg",
            width: 300,
            height: 140,
            alt: "Reverse — Masonic Center official postcard",
          },
          meta: [
            "Masonic Center",
            "Official Postcard",
            "No. 80489-B",
            "Dexter No. WF-32",
            "Manhattan No. W-43",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/80899-B.jpg",
            width: 450,
            height: 281,
            alt: "Hall of Free Enterprise official postcard No. 80899-B",
          },
          reverse: {
            src: "/images/pcards02/80899-Breverse.jpg",
            width: 300,
            height: 119,
            alt: "Reverse — Hall of Free Enterprise official postcard",
          },
          meta: [
            "Hall of Free Enterprise",
            "Official Postcard",
            "No. 80899-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/81013-B.jpg",
            width: 450,
            height: 288,
            alt: "Pre-Fair Large Letter Card official postcard No. 81013-B",
          },
          reverse: {
            src: "/images/pcards02/81013-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pre-Fair Large Letter Card official postcard",
          },
          meta: [
            "Pre-Fair Large Letter Card",
            "Official Postcard",
            "No. 81013-B",
            "Dexter No. WF-46",
            "Manhattan No. W-30",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/81440-B.jpg",
            width: 450,
            height: 285,
            alt: "Fountain of Planets in Pool of Industry - Red official postcard No. 81440-B",
          },
          reverse: {
            src: "/images/pcards02/81440-Breverse.jpg",
            width: 300,
            height: 139,
            alt: "Reverse — Fountain of Planets in Pool of Industry - Red official postcard",
          },
          meta: [
            "Fountain of Planets in Pool of Industry - Red",
            "Official Postcard",
            "No. 81440-B",
            "Dexter No. WF-31",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/83099-B.jpg",
            width: 450,
            height: 280,
            alt: "Fountain of the Planets official postcard No. 83099-B",
          },
          reverse: {
            src: "/images/pcards02/83099-Breverse.jpg",
            width: 300,
            height: 114,
            alt: "Reverse — Fountain of the Planets official postcard",
          },
          meta: [
            "Fountain of the Planets",
            "Official Postcard",
            "No. 83099-B",
            "Dexter No. WF-16",
            "Manhattan No. W-33",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/83130-B.jpg",
            width: 450,
            height: 279,
            alt: "New York Port Authority (Night) official postcard No. 83130-B",
          },
          reverse: {
            src: "/images/pcards02/83130-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — New York Port Authority (Night) official postcard",
          },
          meta: [
            "New York Port Authority (Night)",
            "Official Postcard",
            "No. 83130-B",
            "Dexter No. WF-13",
            "Manhattan No. W-34",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards02/83959-B.jpg",
            width: 450,
            height: 284,
            alt: "Check Novelty Card - Unisphere official postcard No. 83959-B",
          },
          reverse: {
            src: "/images/pcards02/83959-Breverse.jpg",
            width: 300,
            height: 99,
            alt: "Reverse — Check Novelty Card - Unisphere official postcard",
          },
          meta: [
            "Check Novelty Card - Unisphere",
            "Official Postcard",
            "No. 83959-B",
            "Dexter No. WF-4",
            "Manhattan No. W-42",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
