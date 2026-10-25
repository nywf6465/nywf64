import type { Metadata } from "next";
import { PCARDS_HERO } from "@/components/PcardsHero";
import { PcardsNavChrome } from "@/components/PcardsNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Unauthorized Postcards — World’s Fair Postcard Collection — nywf64.com",
  description:
    "Unauthorized Post Cards of the 1964/1965 New York World’s Fair from the nywf64.com collection.",
};

const unauthorized = (
  <span style={{ color: "red" }}>Unauthorized Postcard</span>
);

/**
 * Unauthorized Postcards gallery (legacy pcards16.html → /pcards15).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 16. PREVIOUS → /pcards14; NEXT → /pcards16.
 */
export default function Pcards15Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards15-title"
      title="Unauthorized Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards14"
      overviewHref="/pcardsoverview"
      nextHref="/pcards16"
      entries={[
        {
          front: {
            src: "/images/pcards15/WF-1.jpg",
            width: 450,
            height: 285,
            alt: "Theme Symbol of the World's Fair unauthorized postcard No. WF1",
          },
          reverse: {
            src: "/images/pcards15/WF-1reverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Theme Symbol of the World's Fair unauthorized postcard",
          },
          meta: [
            "Theme Symbol of the World's Fair",
            unauthorized,
            "No. WF1",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, In",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-2.jpg",
            width: 450,
            height: 283,
            alt: "Theme Symbol of the World's Fair unauthorized postcard No. WF2",
          },
          reverse: {
            src: "/images/pcards15/WF-2reverse.jpg",
            width: 300,
            height: 73,
            alt: "Reverse — Theme Symbol of the World's Fair unauthorized postcard",
          },
          meta: [
            "Theme Symbol of the World's Fair",
            unauthorized,
            "No. WF2",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-3.jpg",
            width: 450,
            height: 281,
            alt: "Eastman Kodak Pavilion unauthorized postcard No. WF3",
          },
          reverse: {
            src: "/images/pcards15/WF-3reverse.jpg",
            width: 300,
            height: 74,
            alt: "Reverse — Eastman Kodak Pavilion unauthorized postcard",
          },
          meta: [
            "Eastman Kodak Pavilion",
            unauthorized,
            "No. WF3",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-4.jpg",
            width: 450,
            height: 283,
            alt: "Port of New York Authority Heliport unauthorized postcard No. WF4",
          },
          reverse: {
            src: "/images/pcards15/WF-4reverse.jpg",
            width: 300,
            height: 69,
            alt: "Reverse — Port of New York Authority Heliport unauthorized postcard",
          },
          meta: [
            "Port of New York Authority Heliport",
            unauthorized,
            "No. WF4",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-5.jpg",
            width: 450,
            height: 289,
            alt: "Vatican Pavilion unauthorized postcard No. WF5",
          },
          reverse: {
            src: "/images/pcards15/WF-5reverse.jpg",
            width: 300,
            height: 77,
            alt: "Reverse — Vatican Pavilion unauthorized postcard",
          },
          meta: [
            "Vatican Pavilion",
            unauthorized,
            "No. WF5",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-6.jpg",
            width: 450,
            height: 286,
            alt: "Mexican Pavilion unauthorized postcard No. WF6",
          },
          reverse: {
            src: "/images/pcards15/WF-6reverse.jpg",
            width: 300,
            height: 79,
            alt: "Reverse — Mexican Pavilion unauthorized postcard",
          },
          meta: [
            "Mexican Pavilion",
            unauthorized,
            "No. WF6",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-7.jpg",
            width: 450,
            height: 284,
            alt: "N.Y.S. Pavilion unauthorized postcard No. WF7",
          },
          reverse: {
            src: "/images/pcards15/WF-7reverse.jpg",
            width: 300,
            height: 76,
            alt: "Reverse — N.Y.S. Pavilion unauthorized postcard",
          },
          meta: [
            "N.Y.S. Pavilion",
            unauthorized,
            "No. WF7",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-8.jpg",
            width: 450,
            height: 282,
            alt: "Thailand Pavilion unauthorized postcard No. WF8",
          },
          reverse: {
            src: "/images/pcards15/WF-8reverse.jpg",
            width: 300,
            height: 81,
            alt: "Reverse — Thailand Pavilion unauthorized postcard",
          },
          meta: [
            "Thailand Pavilion",
            unauthorized,
            "No. WF8",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-9.jpg",
            width: 450,
            height: 281,
            alt: "N.Y.S. Pavilion (Night) unauthorized postcard No. WF9",
          },
          reverse: {
            src: "/images/pcards15/WF-9reverse.jpg",
            width: 300,
            height: 78,
            alt: "Reverse — N.Y.S. Pavilion (Night) unauthorized postcard",
          },
          meta: [
            "N.Y.S. Pavilion (Night)",
            unauthorized,
            "No. WF9",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-10.jpg",
            width: 450,
            height: 285,
            alt: "Republic of China Pavilions unauthorized postcard No. WF10",
          },
          reverse: {
            src: "/images/pcards15/WF-10reverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — Republic of China Pavilions unauthorized postcard",
          },
          meta: [
            "Republic of China Pavilions",
            unauthorized,
            "No. WF10",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-11.jpg",
            width: 450,
            height: 274,
            alt: "Johnson's Wax Pavilion unauthorized postcard No. WF11",
          },
          reverse: {
            src: "/images/pcards15/WF-11reverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse — Johnson's Wax Pavilion unauthorized postcard",
          },
          meta: [
            "Johnson's Wax Pavilion",
            unauthorized,
            "No. WF11",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-12.jpg",
            width: 450,
            height: 285,
            alt: "Ford Pavilion unauthorized postcard No. WF12",
          },
          reverse: {
            src: "/images/pcards15/WF-12reverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Ford Pavilion unauthorized postcard",
          },
          meta: [
            "Ford Pavilion",
            unauthorized,
            "No. WF12",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-13.jpg",
            width: 450,
            height: 283,
            alt: "United States Pavilion unauthorized postcard No. WF13",
          },
          reverse: {
            src: "/images/pcards15/WF-13reverse.jpg",
            width: 300,
            height: 110,
            alt: "Reverse — United States Pavilion unauthorized postcard",
          },
          meta: [
            "United States Pavilion",
            unauthorized,
            "No. WF13",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-14.jpg",
            width: 450,
            height: 288,
            alt: "Fountain of the Fairs unauthorized postcard No. WF14",
          },
          reverse: {
            src: "/images/pcards15/WF-14reverse.jpg",
            width: 300,
            height: 97,
            alt: "Reverse — Fountain of the Fairs unauthorized postcard",
          },
          meta: [
            "Fountain of the Fairs",
            unauthorized,
            "No. WF14",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
        {
          front: {
            src: "/images/pcards15/WF-15.jpg",
            width: 280,
            height: 450,
            alt: "Freedom of the Human Spirit unauthorized postcard No. WF15",
          },
          reverse: {
            src: "/images/pcards15/WF-15reverse.jpg",
            width: 300,
            height: 80,
            alt: "Reverse — Freedom of the Human Spirit unauthorized postcard",
          },
          meta: [
            "Freedom of the Human Spirit",
            unauthorized,
            "No. WF15",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        }
      ]}
    />
  );
}
