import type { Metadata } from "next";
import { FordNavChrome } from "@/components/FordNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Ford — nywf64.com",
  description:
    "Ford Pavilion postcards from the 1964/1965 New York World’s Fair — official and unauthorized cards on nywf64.com.",
};

const unauthorized = (
  <span style={{ color: "red" }}>Unauthorized Postcard</span>
);

/**
 * Ford postcards page.
 * Body from legacy ford03.html. Layout: PostcardPage (/bell03).
 */
export default function Ford03Page() {
  return (
    <PostcardPage
      heroLabel="Ford Pavilion"
      titleId="ford03-title"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford02"
      overviewHref="/fordoverview"
      nextHref="/ford04"
      entries={[
        {
          front: {
            src: "/images/ford03/72585-B.jpg",
            width: 450,
            height: 280,
            alt: "Ford Motors official postcard No. 72585-B",
          },
          reverse: {
            src: "/images/ford03/72585-Breverse.jpg",
            width: 300,
            height: 91,
            alt: "Reverse — Ford Motors postcard No. 72585-B",
          },
          meta: [
            "Ford Motors",
            "Official Postcard",
            "No. 72585-B",
            "Dexter No. WF-10",
            "Manhattan No. W-10",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/ford03/87421-B.jpg",
            width: 450,
            height: 282,
            alt: "The Ford Rotunda official postcard No. 87421-B",
          },
          reverse: {
            src: "/images/ford03/87421-Breverse.jpg",
            width: 300,
            height: 87,
            alt: "Reverse — Ford Rotunda postcard No. 87421-B",
          },
          meta: [
            "The Ford Rotunda",
            "Official Postcard",
            "No. 87421-B",
            "Dexter No. WF-78",
            "Manhattan No. W-78",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/ford03/88534-B.jpg",
            width: 450,
            height: 282,
            alt: "Ford Rotunda official postcard No. 88534-B",
          },
          reverse: {
            src: "/images/ford03/88534-Breverse.jpg",
            width: 300,
            height: 94,
            alt: "Reverse — Ford Rotunda postcard No. 88534-B",
          },
          meta: [
            "Ford Rotunda",
            "Official Postcard",
            "No. 88534-B",
            "Dexter No. WF-102",
            "Manhattan No. W-102",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/ford03/WF435.jpg",
            width: 450,
            height: 282,
            alt: "Ford Motor Company Pavilion unauthorized postcard No. WF435",
          },
          reverse: {
            src: "/images/ford03/WF435reverse.jpg",
            width: 300,
            height: 79,
            alt: "Reverse — Ford unauthorized postcard No. WF435",
          },
          meta: [
            "Ford Motor Company Pavilion",
            unauthorized,
            "No. WF435",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)",
          ],
        },
        {
          front: {
            src: "/images/ford03/WF-12.jpg",
            width: 450,
            height: 285,
            alt: "Ford Pavilion unauthorized postcard No. WF12",
          },
          reverse: {
            src: "/images/ford03/WF-12reverse.jpg",
            width: 300,
            height: 112,
            alt: "Reverse — Ford unauthorized postcard No. WF12",
          },
          meta: ["Ford Pavilion", unauthorized, "No. WF12"],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
      ]}
    />
  );
}
