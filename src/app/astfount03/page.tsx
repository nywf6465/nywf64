import type { Metadata } from "next";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Astral Fountain — nywf64.com",
  description:
    "Astral Fountain postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain postcards page — “postcards” standard.
 * Body from legacy astfount03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Astfount03Page() {
  return (
    <PostcardPage
      heroLabel="Astral Fountain"
      titleId="astfount03-title"
      hero={{
        src: "/images/astfountoverview/hero-banner.jpg",
        alt: "Astral Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<AstfountNavChrome />}
      previousHref="/astfount02"
      overviewHref="/astfountoverview"
      nextHref="/astfount04"
      entries={[
        {
          front: {
            src: "/images/astfount03/83729-B.jpg",
            width: 450,
            height: 281,
            alt: "Astral Fountain",
          },
          reverse: {
            src: "/images/astfount03/83729-Breverse.jpg",
            width: 300,
            height: 113,
            alt: "Reverse — Astral Fountain",
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
            src: "/images/astfount03/DT-87416-B.jpg",
            width: 284,
            height: 450,
            alt: "Astral Fountain - (day)",
          },
          reverse: {
            src: "/images/astfount03/DT-87416-Breverse.jpg",
            width: 300,
            height: 111,
            alt: "Reverse — Astral Fountain - (day)",
          },
          meta: [
            "Astral Fountain - (day)",
            "Official Postcard",
            "No. 87416-B",
            "Dexter No. WF-73",
            "Manhattan No. W-75",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/astfount03/91869-B.jpg",
            width: 450,
            height: 280,
            alt: "Night Astral Fountain",
          },
          reverse: {
            src: "/images/astfount03/91869-Breverse.jpg",
            width: 300,
            height: 117,
            alt: "Reverse — Night Astral Fountain",
          },
          meta: [
            "Night Astral Fountain",
            "Official Postcard",
            "No. 91869-B",
            "Dexter No. WF-117",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
          ],
        },
      ]}
    />
  );
}
