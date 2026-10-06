import type { Metadata } from "next";
import { FesgasNavChrome } from "@/components/FesgasNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Festival of Gas — nywf64.com",
  description:
    "Festival of Gas postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Festival of Gas postcards page.
 * Body from legacy fesgas03.html. Layout: PostcardPage (/bell03).
 * Adobe Reader mentions omitted.
 */
export default function Fesgas03Page() {
  return (
    <PostcardPage
      heroLabel="Festival of Gas"
      titleId="fesgas03-title"
      hero={{
        src: "/images/fesgasoverview/hero-banner.jpg",
        alt: "Festival of Gas at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<FesgasNavChrome />}
      previousHref="/fesgas02"
      overviewHref="/fesgasoverview"
      nextHref="/fesgas04"
      entries={[
        {
          front: {
            src: "/images/fesgas03/74993-B.jpg",
            width: 450,
            height: 282,
            alt: "Festival of Gas official postcard No. 74993-B",
          },
          reverse: {
            src: "/images/fesgas03/74993-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse of Festival of Gas postcard No. 74993-B",
          },
          meta: [
            "Festival of Gas",
            "Official Postcard",
            "No. 74993-B",
            "Dexter No. WF-43",
            "Manhattan No. W-23",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
      ]}
    />
  );
}
