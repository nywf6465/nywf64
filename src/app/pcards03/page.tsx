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
 * Official Postcards gallery continued (legacy pcards04.html → /pcards03).
 * Postcards standard via PostcardPage (/bell03). Shared PcardsHero (1905×826).
 * Nav Page 4. PREVIOUS → /pcards02; NEXT → /pcards04.
 */
export default function Pcards03Page() {
  return (
    <PostcardPage
      heroLabel="World’s Fair Postcard Collection"
      titleId="pcards03-title"
      title="Official Postcards"
      hero={{
        src: PCARDS_HERO.src,
        alt: PCARDS_HERO.alt,
        width: PCARDS_HERO.width,
        height: PCARDS_HERO.height,
      }}
      nav={<PcardsNavChrome />}
      previousHref="/pcards02"
      overviewHref="/pcardsoverview"
      nextHref="/pcards04"
      entries={[
        {
          front: {
            src: "/images/pcards03/83715-B.jpg",
            width: 450,
            height: 280,
            alt: "Hong Kong Pavilion official postcard No. 83715-B",
          },
          reverse: {
            src: "/images/pcards03/83715-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Hong Kong Pavilion official postcard",
          },
          meta: [
            "Hong Kong Pavilion",
            "Official Postcard",
            "No. 83715-B",
            "Dexter No. WF-36",
            "Manhattan No. W-40",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83726-B.jpg",
            width: 450,
            height: 277,
            alt: "Sermons from Science official postcard No. 83726-B",
          },
          reverse: {
            src: "/images/pcards03/83726-Breverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Sermons from Science official postcard",
          },
          meta: [
            "Sermons from Science",
            "Official Postcard",
            "No. 83726-B",
            "Dexter No. WF-42",
            "Manhattan No. W-45",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83727-B.jpg",
            width: 450,
            height: 279,
            alt: "Protestant Center official postcard No. 83727-B",
          },
          reverse: {
            src: "/images/pcards03/83727-Breverse.jpg",
            width: 300,
            height: 108,
            alt: "Reverse — Protestant Center official postcard",
          },
          meta: [
            "Protestant Center",
            "Official Postcard",
            "No. 83727-B",
            "Dexter No. WF-17",
            "Manhattan No. W-34",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83728-B.jpg",
            width: 450,
            height: 283,
            alt: "Christian Science Pavilion official postcard No. 83728-B",
          },
          reverse: {
            src: "/images/pcards03/83728-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Christian Science Pavilion official postcard",
          },
          meta: [
            "Christian Science Pavilion",
            "Official Postcard",
            "No. 83728-B",
            "Dexter No. WF-30",
            "Manhattan No. W-41",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83729-B.jpg",
            width: 450,
            height: 281,
            alt: "Astral Fountain official postcard No. 83729-B",
          },
          reverse: {
            src: "/images/pcards03/83729-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Astral Fountain official postcard",
          },
          meta: [
            "Astral Fountain",
            "Official Postcard",
            "No. 83729-B",
            "Dexter No. WF-38",
            "Manhattan No. W-47",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83730-B.jpg",
            width: 450,
            height: 280,
            alt: "Republic of the Philippines official postcard No. 83730-B",
          },
          reverse: {
            src: "/images/pcards03/83730-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse — Republic of the Philippines official postcard",
          },
          meta: [
            "Republic of the Philippines",
            "Official Postcard",
            "No. 83730-B",
            "Dexter No. WF-29",
            "Manhattan No. W-35",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83731-B.jpg",
            width: 450,
            height: 281,
            alt: "Pepsi Cola Pavilion official postcard No. 83731-B",
          },
          reverse: {
            src: "/images/pcards03/83731-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Pepsi Cola Pavilion official postcard",
          },
          meta: [
            "Pepsi Cola Pavilion",
            "Official Postcard",
            "No. 83731-B",
            "Dexter No. WF-18",
            "Manhattan No. W-46",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83733-B.jpg",
            width: 450,
            height: 282,
            alt: "Walter's International Wax Museum official postcard No. 83733-B",
          },
          reverse: {
            src: "/images/pcards03/83733-Breverse.jpg",
            width: 300,
            height: 84,
            alt: "Reverse — Walter's International Wax Museum official postcard",
          },
          meta: [
            "Walter's International Wax Museum",
            "Official Postcard",
            "No. 83733-B",
            "Dexter No. WF-35",
            "Manhattan No. W-36",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83734-B.jpg",
            width: 450,
            height: 281,
            alt: "Monorail (night) official postcard No. 83734-B",
          },
          reverse: {
            src: "/images/pcards03/83734-Breverse.jpg",
            width: 300,
            height: 136,
            alt: "Reverse — Monorail (night) official postcard",
          },
          meta: [
            "Monorail (night)",
            "Official Postcard",
            "No. 83734-B",
            "Dexter No. WF-14",
            "Manhattan No. W-48",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83735-B.jpg",
            width: 450,
            height: 280,
            alt: "The Pavilion official postcard No. 83735-B",
          },
          reverse: {
            src: "/images/pcards03/83735-Breverse.jpg",
            width: 300,
            height: 121,
            alt: "Reverse — The Pavilion official postcard",
          },
          meta: [
            "The Pavilion",
            "Official Postcard",
            "No. 83735-B",
            "Dexter No. WF-37",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83746-B.jpg",
            width: 450,
            height: 284,
            alt: "Better Living Center official postcard No. 83746-B",
          },
          reverse: {
            src: "/images/pcards03/83746-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Better Living Center official postcard",
          },
          meta: [
            "Better Living Center",
            "Official Postcard",
            "No. 83746-B",
            "Dexter No. WF-22",
            "Manhattan No. W-10",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/83960-B.jpg",
            width: 450,
            height: 280,
            alt: "We Visit Card official postcard No. 83960-B",
          },
          reverse: {
            src: "/images/pcards03/83960-Breverse.jpg",
            width: 300,
            height: 109,
            alt: "Reverse — We Visit Card official postcard",
          },
          meta: [
            "We Visit Card",
            "Official Postcard",
            "No. 83960-B",
            "Dexter No. WF-3",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86855-B.jpg",
            width: 450,
            height: 279,
            alt: "Coca Cola Pavilion official postcard No. 86855-B",
          },
          reverse: {
            src: "/images/pcards03/86855-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Coca Cola Pavilion official postcard",
          },
          meta: [
            "Coca Cola Pavilion",
            "Official Postcard",
            "No. 86855-B",
            "Dexter No. WF-47",
            "Manhattan No. W-50",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86856-B.jpg",
            width: 450,
            height: 282,
            alt: "Chrysler -Autofare official postcard No. 86856-B",
          },
          reverse: {
            src: "/images/pcards03/86856-Breverse.jpg",
            width: 300,
            height: 143,
            alt: "Reverse — Chrysler -Autofare official postcard",
          },
          meta: [
            "Chrysler -Autofare",
            "Official Postcard",
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
            src: "/images/pcards03/86857-B.jpg",
            width: 450,
            height: 279,
            alt: "Caribbean Pavilion official postcard No. 86857-B",
          },
          reverse: {
            src: "/images/pcards03/86857-Breverse.jpg",
            width: 300,
            height: 82,
            alt: "Reverse — Caribbean Pavilion official postcard",
          },
          meta: [
            "Caribbean Pavilion",
            "Official Postcard",
            "No. 86857-B",
            "Dexter No. WF-49",
            "Manhattan No. W-52",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86858-B.jpg",
            width: 450,
            height: 280,
            alt: "Schaefer Center official postcard No. 86858-B",
          },
          reverse: {
            src: "/images/pcards03/86858-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Schaefer Center official postcard",
          },
          meta: [
            "Schaefer Center",
            "Official Postcard",
            "No. 86858-B",
            "Dexter No. WF-50",
            "Manhattan No. W-53",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86859-B.jpg",
            width: 450,
            height: 279,
            alt: "Thailand Pavilion official postcard No. 86859-B",
          },
          reverse: {
            src: "/images/pcards03/86859-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Thailand Pavilion official postcard",
          },
          meta: [
            "Thailand Pavilion",
            "Official Postcard",
            "No. 86859-B",
            "Dexter No. WF-51",
            "Manhattan No. W-54",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86860-B.jpg",
            width: 450,
            height: 281,
            alt: "Pavilion of Paris official postcard No. 86860-B",
          },
          reverse: {
            src: "/images/pcards03/86860-Breverse.jpg",
            width: 300,
            height: 99,
            alt: "Reverse — Pavilion of Paris official postcard",
          },
          meta: [
            "Pavilion of Paris",
            "Official Postcard",
            "No. 86860-B",
            "Dexter No. WF-52",
            "Manhattan No. W-55",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86861-B.jpg",
            width: 450,
            height: 284,
            alt: "Pepsi Cola Pavilion official postcard No. 86861-B",
          },
          reverse: {
            src: "/images/pcards03/86861-Breverse.jpg",
            width: 300,
            height: 86,
            alt: "Reverse — Pepsi Cola Pavilion official postcard",
          },
          meta: [
            "Pepsi Cola Pavilion",
            "Official Postcard",
            "No. 86861-B",
            "Dexter No. WF-53",
            "Manhattan No. W-56",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86862-B.jpg",
            width: 450,
            height: 282,
            alt: "Bell System Pavilion official postcard No. 86862-B",
          },
          reverse: {
            src: "/images/pcards03/86862-Breverse.jpg",
            width: 300,
            height: 104,
            alt: "Reverse — Bell System Pavilion official postcard",
          },
          meta: [
            "Bell System Pavilion",
            "Official Postcard",
            "No. 86862-B",
            "Dexter No. WF-54",
            "Manhattan No. W-57",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/pcards03/86863-B.jpg",
            width: 450,
            height: 283,
            alt: "Hall of Free Enterprise official postcard No. 86863-B",
          },
          reverse: {
            src: "/images/pcards03/86863-Breverse.jpg",
            width: 300,
            height: 89,
            alt: "Reverse — Hall of Free Enterprise official postcard",
          },
          meta: [
            "Hall of Free Enterprise",
            "Official Postcard",
            "No. 86863-B",
            "Dexter No. WF-55",
            "Manhattan No. W-58",
          ],
          sources: [
          ],
        },
      ]}
    />
  );
}
