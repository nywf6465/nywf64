import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
import { JOHWAX_HERO } from "@/data/johwaxHero";

export const metadata: Metadata = {
  title: "Postcards — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax03Page() {
  return (
    <PostcardPage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax03-title"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax02"
      overviewHref="/johwaxoverview"
      nextHref="/johwax04"
      entries={[
        {
          front: {
            src: "/images/johwax03/74995-B.jpg",
            width: 450,
            height: 282,
            alt: "Johnson's Wax official postcard No. 74995-B",
          },
          reverse: {
            src: "/images/johwax03/74995-Breverse.jpg",
            width: 300,
            height: 83,
            alt: "Reverse of Johnson's Wax postcard No. 74995-B",
          },
          meta: [
            "Johnson's Wax",
            "Official Postcard",
            "No. 74995-B",
            "Dexter No. WF-39",
            "Manhattan No. W-24",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/johwax03/WF417.jpg",
            width: 450,
            height: 277,
            alt: "Johnson's Wax unauthorized postcard No. WF417",
          },
          reverse: {
            src: "/images/johwax03/WF417reverse.jpg",
            width: 300,
            height: 65,
            alt: "Reverse of Johnson's Wax postcard No. WF417",
          },
          meta: [
            "Johnson's Wax",
            "Unauthorized Postcard",
            "No. WF417",
          ],
          sources: [
            "Source: Postcard Published by Colourpicture Publishers Inc. (Plastichrome)3",
          ],
        },
        {
          front: {
            src: "/images/johwax03/WF-11.jpg",
            width: 450,
            height: 274,
            alt: "Johnson's Wax Pavilion unauthorized postcard No. WF11",
          },
          reverse: {
            src: "/images/johwax03/WF-11reverse.jpg",
            width: 300,
            height: 85,
            alt: "Reverse of Johnson's Wax postcard No. WF11",
          },
          meta: [
            "Johnson's Wax Pavilion",
            "Unauthorized Postcard",
            "No. WF11",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
      ]}
    />
  );
}
